#!/usr/bin/env python3
"""
Generate tiles for planes 1-3 only (since plane 0 already exists)
This script is designed to run inside the Docker container
"""

import os
import logging
import math
import pyvips

# Configuration
TILE_SIZE_PX = 256
MIN_ZOOM = 0
MAX_ZOOM = 11
MIN_Z = 1  # Start from plane 1 since plane 0 already exists
MAX_Z = 3

# Memory and file handle management
BATCH_SIZE = 50

# Paths (Docker container paths)
REPO_DIR = '/repo'
GENERATED_IMAGES_DIR = os.path.join(REPO_DIR, 'generated_images')
TILES_OUTPUT_DIR = os.path.join(REPO_DIR, 'public', 'tiles')

# Setup logging
logging.basicConfig(
    format='%(asctime)s %(levelname)-4s %(message)s',
    level=logging.INFO,
    datefmt='%Y-%m-%d %H:%M:%S'
)
LOG = logging.getLogger(__name__)

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
    
    LOG.info(f"Generating {tiles_x}x{tiles_y} = {total_tiles} tiles for plane {plane}, zoom {zoom}")
    
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
                    LOG.info(f"Processed {processed}/{total_tiles} tiles for plane {plane}, zoom {zoom}")
                
            except Exception as e:
                LOG.warning(f"Failed to generate tile {tile_x}/{tile_y} for plane {plane}, zoom {zoom}: {e}")

def main():
    """Main tile generation process - missing planes only"""
    LOG.info("Starting tile generation for missing planes (1-3)")
    
    # Create necessary directories
    os.makedirs(TILES_OUTPUT_DIR, exist_ok=True)
    
    try:
        # Generate tiles for planes 1-3 (plane 0 already exists)
        for plane in range(MIN_Z, MAX_Z + 1):
            try:
                LOG.info(f"Starting tile generation for plane {plane}")
                generate_tiles_for_plane(plane)
                LOG.info(f"Completed tile generation for plane {plane}")
            except Exception as e:
                LOG.error(f"Failed to generate tiles for plane {plane}: {e}")
                # Continue with next plane instead of stopping
        
        LOG.info("Missing tile generation completed successfully!")
        
    except Exception as e:
        LOG.error(f"Tile generation failed: {e}")
        raise

if __name__ == "__main__":
    main()
