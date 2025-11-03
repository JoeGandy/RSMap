#!/usr/bin/env python3
"""
Simplified OSRS Tile Generator for NextJS Integration
Adapted from Explv's osrs_map_tiles project
"""

import os
import json
import logging
import math
import shutil
import subprocess
import zipfile
from datetime import datetime
from pathlib import Path
import requests
from bs4 import BeautifulSoup
import pyvips
from PIL import Image
from skimage.metrics import structural_similarity

# Suppress VIPS verbose logging (threadpool messages)
import sys
pyvips.cache_set_max(0)  # Disable VIPS cache to reduce memory usage
pyvips.cache_set_max_mem(0)  # Disable VIPS memory cache

# More aggressive VIPS logging suppression
os.environ['VIPS_WARNING'] = '0'
os.environ['VIPS_INFO'] = '0'

# Redirect VIPS logging to suppress threadpool messages
class VIPSLogFilter(logging.Filter):
    def filter(self, record):
        # Filter out VIPS threadpool messages
        if 'threadpool completed' in record.getMessage():
            return False
        if 'VIPS:' in record.getMessage() and 'threadpool' in record.getMessage():
            return False
        return True

# Apply filter to root logger to catch VIPS messages
logging.getLogger().addFilter(VIPSLogFilter())

# Configuration
CACHES_BASE_URL = "https://archive.openrs2.org"
TILE_SIZE_PX = 256
MIN_ZOOM = 0  # Allow more zoom out levels
MAX_ZOOM = 6
MIN_Z = 0
MAX_Z = 3

# Memory and file handle management
BATCH_SIZE = 50  # Process tiles in smaller batches
MAX_CONCURRENT_FILES = 100  # Limit concurrent file operations

# Paths
REPO_DIR = '/repo'  # Mounted volume in Docker container
CACHE_DIR = os.path.join(REPO_DIR, 'cache')
GENERATED_IMAGES_DIR = os.path.join(REPO_DIR, 'generated_images')
TILES_OUTPUT_DIR = os.path.join(REPO_DIR, 'public', 'tiles')

# Setup logging
logging.basicConfig(
    format='%(asctime)s %(levelname)-4s %(message)s',
    level=logging.INFO,
    datefmt='%Y-%m-%d %H:%M:%S'
)
LOG = logging.getLogger(__name__)

def main():
    """Main tile generation process"""
    LOG.info("Starting OSRS tile generation for NextJS project")
    
    # Create necessary directories
    os.makedirs(CACHE_DIR, exist_ok=True)
    os.makedirs(GENERATED_IMAGES_DIR, exist_ok=True)
    os.makedirs(TILES_OUTPUT_DIR, exist_ok=True)
    
    try:
        # Step 1: Download cache and XTEAs
        LOG.info("Downloading latest OSRS cache and XTEAs...")
        cache_dir, xtea_file = download_cache_with_xteas()
        
        # Step 2: Generate full map images using RuneLite
        LOG.info("Generating full map images...")
        build_full_map_images(cache_dir, xtea_file)
        
        # Step 3: Generate tiles for each plane
        LOG.info("Generating tiles for all planes...")
        for plane in range(MIN_Z, MAX_Z + 1):
            try:
                LOG.info(f"Starting tile generation for plane {plane}")
                generate_tiles_for_plane(plane)
                LOG.info(f"Completed tile generation for plane {plane}")
            except Exception as e:
                LOG.error(f"Failed to generate tiles for plane {plane}: {e}")
                # Continue with next plane instead of stopping
        
        LOG.info("Tile generation completed successfully!")
        
    except Exception as e:
        LOG.error(f"Tile generation failed: {e}")
        raise

def fetch_latest_osrs_cache_version():
    """Fetch the latest OSRS cache version from archive.openrs2.org"""
    LOG.info("Fetching latest cache version...")
    
    try:
        # Try to get the JSON API endpoint first
        response = requests.get(f"{CACHES_BASE_URL}/caches.json", timeout=30)
        if response.status_code == 200:
            caches = response.json()
            # Filter for OSRS caches and get the latest
            osrs_caches = [cache for cache in caches if cache.get('game', '').lower() == 'oldschool']
            if osrs_caches:
                # Filter out caches without timestamps and get the latest
                valid_caches = [cache for cache in osrs_caches if cache.get('timestamp')]
                if valid_caches:
                    # Sort by timestamp and get the actual latest OSRS cache
                    valid_caches.sort(key=lambda x: x['timestamp'], reverse=True)
                    latest_cache = valid_caches[0]
                    cache_id = str(latest_cache['id'])
                    
                    LOG.info(f"Found {len(osrs_caches)} OSRS caches ({len(valid_caches)} with timestamps), using latest: ID {cache_id}")
                    
                    return {
                        'id': cache_id,
                        'timestamp': datetime.fromisoformat(latest_cache['timestamp'].replace('Z', '+00:00')),
                        'cache_url': f"{CACHES_BASE_URL}/caches/runescape/{cache_id}/disk.zip",
                        'xtea_url': f"{CACHES_BASE_URL}/caches/runescape/{cache_id}/keys.json"
                    }
    except Exception as e:
        LOG.warning(f"Failed to fetch from JSON API: {e}")
    
    # Fallback to HTML parsing
    try:
        response = requests.get(f"{CACHES_BASE_URL}/caches", timeout=30)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Look for table rows with OSRS data
        rows = soup.find_all('tr')
        latest_cache = None
        latest_timestamp = None
        
        for row in rows:
            cells = row.find_all('td')
            if len(cells) >= 4:
                game = cells[0].get_text(strip=True).lower()
                if 'oldschool' in game:
                    # Try to extract timestamp and cache ID
                    timestamp_text = cells[2].get_text(strip=True)
                    links = cells[3].find_all('a')
                    
                    for link in links:
                        href = link.get('href', '')
                        if '/caches/runescape/' in href and 'disk.zip' in href:
                            try:
                                cache_id = href.split('/caches/runescape/')[1].split('/')[0]
                                timestamp = datetime.strptime(timestamp_text.replace(' ', ''), '%Y-%m-%d%H:%M:%S')
                                
                                if latest_timestamp is None or timestamp > latest_timestamp:
                                    latest_timestamp = timestamp
                                    latest_cache = {
                                        'id': cache_id,
                                        'timestamp': timestamp,
                                        'cache_url': f"{CACHES_BASE_URL}/caches/runescape/{cache_id}/disk.zip",
                                        'xtea_url': f"{CACHES_BASE_URL}/caches/runescape/{cache_id}/keys.json"
                                    }
                            except (ValueError, IndexError):
                                continue
        
        if latest_cache:
            LOG.info(f"Found latest cache: ID {latest_cache['id']}, Date: {latest_cache['timestamp']}")
            return latest_cache
    
    except Exception as e:
        LOG.warning(f"Failed to parse HTML: {e}")
    
    raise ValueError("Could not find any valid OSRS cache versions")

def download_cache_with_xteas():
    """Download the latest cache and XTEAs"""
    cache_info = fetch_latest_osrs_cache_version()
    
    cache_timestamp = cache_info['timestamp'].strftime("%Y-%m-%d_%H_%M_%S")
    cache_dir = os.path.join(CACHE_DIR, cache_timestamp)
    xtea_file = os.path.join(cache_dir, "xteas.json")
    
    if os.path.exists(cache_dir):
        LOG.info(f"Cache directory {cache_dir} already exists, skipping download")
        return cache_dir, xtea_file
    
    os.makedirs(cache_dir, exist_ok=True)
    
    # Download XTEAs
    LOG.info("Downloading XTEAs...")
    xtea_response = requests.get(cache_info['xtea_url'])
    xtea_data = xtea_response.json()
    
    # Convert to RuneLite format
    runelite_xteas = [
        {
            "region": region["mapsquare"],
            "keys": region["key"]
        }
        for region in xtea_data
    ]
    
    with open(xtea_file, 'w') as f:
        json.dump(runelite_xteas, f, indent=2)
    
    # Download cache
    LOG.info("Downloading cache...")
    cache_response = requests.get(cache_info['cache_url'])
    cache_zip_path = os.path.join(cache_dir, "cache.zip")
    
    with open(cache_zip_path, 'wb') as f:
        f.write(cache_response.content)
    
    # Extract cache
    LOG.info("Extracting cache...")
    with zipfile.ZipFile(cache_zip_path, 'r') as zip_file:
        for name in zip_file.namelist():
            basename = os.path.basename(name)
            if basename:
                member = zip_file.open(name)
                with open(os.path.join(cache_dir, basename), 'wb') as outfile:
                    shutil.copyfileobj(member, outfile)
    
    os.remove(cache_zip_path)
    
    return cache_dir, xtea_file

def build_full_map_images(cache_dir, xtea_file):
    """Generate full map images using RuneLite MapImageDumper"""
    LOG.info("Building full map images with RuneLite...")
    
    # Find the built JAR file
    jar_files = []
    java_build_dir = "/app/java/build/libs"
    if os.path.exists(java_build_dir):
        jar_files = [f for f in os.listdir(java_build_dir) if f.endswith('.jar')]
    
    if not jar_files:
        raise RuntimeError("No JAR file found. Java component may not have built correctly.")
    
    jar_file = os.path.join(java_build_dir, jar_files[0])
    LOG.info(f"Using JAR file: {jar_file}")
    
    # Run the Java MapImageDumper
    cmd = [
        'java', 
        '-Xmx8g', 
        '-jar', jar_file,
        '--cachedir', cache_dir, 
        '--xteapath', xtea_file, 
        '--outputdir', GENERATED_IMAGES_DIR,
        '--renderMap', 'true',      # Render base terrain
        '--renderObjects', 'true',  # Render buildings, trees, etc.
        '--renderIcons', 'false',   # Disable icons/markers
        '--renderLabels', 'false'   # Disable text labels
    ]
    
    LOG.info(f"Running command: {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=True, text=True, cwd="/app")
    
    if result.returncode != 0:
        LOG.error(f"Java MapImageDumper failed with return code {result.returncode}")
        LOG.error(f"STDOUT: {result.stdout}")
        LOG.error(f"STDERR: {result.stderr}")
        raise RuntimeError(f"MapImageDumper failed: {result.stderr}")
    
    LOG.info("MapImageDumper completed successfully")
    LOG.info(f"STDOUT: {result.stdout}")
    
    # Verify that images were created
    for plane in range(MIN_Z, MAX_Z + 1):
        image_path = os.path.join(GENERATED_IMAGES_DIR, f"full_image_{plane}.png")
        if not os.path.exists(image_path):
            LOG.warning(f"Expected image not found: {image_path}")
        else:
            LOG.info(f"Generated image: {image_path}")


def generate_tiles_for_plane(plane):
    """Generate tiles for a specific plane"""
    LOG.info(f"Generating tiles for plane {plane}")
    
    image_path = os.path.join(GENERATED_IMAGES_DIR, f"full_image_{plane}.png")
    if not os.path.exists(image_path):
        LOG.error(f"Full image not found: {image_path}")
        return
    
    # Check image file size
    image_size = os.path.getsize(image_path)
    LOG.info(f"Loading image: {image_path} ({image_size:,} bytes)")
    
    # Load the full image
    try:
        full_image = pyvips.Image.new_from_file(image_path)
        LOG.info(f"Successfully loaded image for plane {plane}")
    except Exception as e:
        LOG.error(f"Failed to load image for plane {plane}: {e}")
        raise
    
    # Calculate the starting zoom level based on image size
    image_width_tiles = full_image.width // TILE_SIZE_PX
    starting_zoom = int(math.log2(image_width_tiles))
    
    LOG.info(f"Plane {plane} - Image size: {full_image.width}x{full_image.height}, Starting zoom: {starting_zoom}")
    
    # Create plane directory
    plane_dir = os.path.join(TILES_OUTPUT_DIR, str(plane))
    os.makedirs(plane_dir, exist_ok=True)
    LOG.info(f"Created plane directory: {plane_dir}")
    
    # Generate tiles for each zoom level
    for zoom in range(MIN_ZOOM, MAX_ZOOM + 1):
        try:
            LOG.info(f"Starting zoom level {zoom} for plane {plane}")
            generate_tiles_for_zoom(full_image, plane, zoom, starting_zoom)
            LOG.info(f"Completed zoom level {zoom} for plane {plane}")
        except Exception as e:
            LOG.error(f"Failed to generate zoom level {zoom} for plane {plane}: {e}")
            # Continue with next zoom level

def generate_tiles_for_zoom(full_image, plane, zoom, base_zoom):
    """Generate tiles for a specific zoom level"""
    LOG.info(f"Generating tiles for plane {plane}, zoom {zoom}")
    
    # Calculate scale factor
    scale_factor = 2 ** (zoom - base_zoom)
    
    if scale_factor > 1:
        # Upscale image for higher zoom levels
        scaled_image = full_image.resize(scale_factor)
    elif scale_factor < 1:
        # Downscale image for lower zoom levels
        scaled_image = full_image.resize(scale_factor)
    else:
        scaled_image = full_image
    
    # Calculate number of tiles
    tiles_x = math.ceil(scaled_image.width / TILE_SIZE_PX)
    tiles_y = math.ceil(scaled_image.height / TILE_SIZE_PX)
    
    # Create output directory
    zoom_dir = os.path.join(TILES_OUTPUT_DIR, str(plane), str(zoom))
    os.makedirs(zoom_dir, exist_ok=True)
    
    # Process tiles in batches to avoid too many open files
    batch_size = BATCH_SIZE
    total_tiles = tiles_x * tiles_y
    processed = 0
    
    # Generate each tile
    for tile_x in range(tiles_x):
        tile_dir = os.path.join(zoom_dir, str(tile_x))
        os.makedirs(tile_dir, exist_ok=True)
        
        for tile_y in range(tiles_y):
            # Calculate pixel coordinates
            pixel_x = tile_x * TILE_SIZE_PX
            pixel_y = tile_y * TILE_SIZE_PX
            
            # Extract tile from image
            try:
                tile = scaled_image.crop(
                    pixel_x, pixel_y, 
                    min(TILE_SIZE_PX, scaled_image.width - pixel_x),
                    min(TILE_SIZE_PX, scaled_image.height - pixel_y)
                )
                
                # Pad tile if necessary
                if tile.width < TILE_SIZE_PX or tile.height < TILE_SIZE_PX:
                    tile = tile.embed(
                        0, 0, TILE_SIZE_PX, TILE_SIZE_PX,
                        background=[0, 0, 0, 0]  # Transparent background
                    )
                
                # Save tile
                tile_path = os.path.join(tile_dir, f"{tile_y}.png")
                tile.write_to_file(tile_path)
                
                # Clean up tile object to free memory
                del tile
                
                processed += 1
                
                # Force garbage collection and memory cleanup every batch
                if processed % batch_size == 0:
                    import gc
                    gc.collect()
                    LOG.info(f"Processed {processed}/{total_tiles} tiles for zoom {zoom}")
                
            except Exception as e:
                LOG.warning(f"Failed to generate tile {tile_x}/{tile_y} for zoom {zoom}: {e}")

if __name__ == "__main__":
    main()
