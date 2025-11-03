#!/usr/bin/env python3
"""
OSRS Tile Transparency Processor
Applies transparency effects to upper plane tiles for layered map viewing
"""

import os
import argparse
import logging
from pathlib import Path
from PIL import Image, ImageEnhance
import numpy as np

# Setup logging
logging.basicConfig(
    format='%(asctime)s %(levelname)-4s %(message)s',
    level=logging.INFO,
    datefmt='%Y-%m-%d %H:%M:%S'
)
LOG = logging.getLogger(__name__)

def process_tile_transparency(tile_path, threshold=10, dark_alpha=102):
    """
    Process a single tile to add transparency effects
    
    Args:
        tile_path: Path to the tile image
        threshold: Darkness threshold (0-255) - pixels darker than this become more transparent
        dark_alpha: Alpha value for dark pixels (0-255)
    """
    try:
        # Load the image
        img = Image.open(tile_path).convert('RGBA')
        data = np.array(img)
        
        # Calculate brightness for each pixel
        brightness = np.mean(data[:, :, :3], axis=2)
        
        # Create alpha channel based on brightness
        alpha = data[:, :, 3].copy()
        
        # Make dark pixels more transparent
        dark_mask = brightness < threshold
        alpha[dark_mask] = np.minimum(alpha[dark_mask], dark_alpha)
        
        # Apply some transparency to all pixels on upper planes
        alpha = (alpha * 0.85).astype(np.uint8)
        
        # Update the alpha channel
        data[:, :, 3] = alpha
        
        # Save the processed image
        processed_img = Image.fromarray(data, 'RGBA')
        processed_img.save(tile_path, 'PNG')
        
        return True
        
    except Exception as e:
        LOG.warning(f"Failed to process {tile_path}: {e}")
        return False

def process_plane_tiles(plane_dir, threshold=10, dark_alpha=102, max_zoom=6):
    """
    Process all tiles in a plane directory
    
    Args:
        plane_dir: Path to plane directory
        threshold: Darkness threshold for transparency
        dark_alpha: Alpha value for dark pixels
        max_zoom: Maximum zoom level to process
    """
    plane_path = Path(plane_dir)
    if not plane_path.exists():
        LOG.warning(f"Plane directory not found: {plane_dir}")
        return 0
    
    processed_count = 0
    total_count = 0
    
    # Process each zoom level
    for zoom_level in range(0, max_zoom + 1):
        zoom_dir = plane_path / str(zoom_level)
        if not zoom_dir.exists():
            continue
            
        LOG.info(f"Processing zoom level {zoom_level}...")
        
        # Process each tile
        for x_dir in zoom_dir.iterdir():
            if not x_dir.is_dir():
                continue
                
            for tile_file in x_dir.glob('*.png'):
                total_count += 1
                if process_tile_transparency(tile_file, threshold, dark_alpha):
                    processed_count += 1
                    
                # Progress update every 100 tiles
                if total_count % 100 == 0:
                    LOG.info(f"Processed {processed_count}/{total_count} tiles...")
    
    LOG.info(f"Completed plane processing: {processed_count}/{total_count} tiles processed")
    return processed_count

def main():
    """Main transparency processing function"""
    parser = argparse.ArgumentParser(description='Apply transparency to OSRS upper plane tiles')
    parser.add_argument('--threshold', type=int, default=10, 
                       help='Darkness threshold (0-255) for transparency effect')
    parser.add_argument('--dark-alpha', type=int, default=102,
                       help='Alpha value for dark pixels (0-255)')
    parser.add_argument('--max-zoom', type=int, default=6,
                       help='Maximum zoom level to process')
    parser.add_argument('--tiles-dir', type=str, default='public/tiles',
                       help='Base tiles directory')
    
    args = parser.parse_args()
    
    LOG.info("🎨 Starting OSRS tile transparency processing...")
    LOG.info(f"Settings: threshold={args.threshold}, dark_alpha={args.dark_alpha}, max_zoom={args.max_zoom}")
    
    tiles_dir = Path(args.tiles_dir)
    if not tiles_dir.exists():
        LOG.error(f"Tiles directory not found: {tiles_dir}")
        return 1
    
    total_processed = 0
    
    # Process upper planes (1, 2, 3) - plane 0 (surface) stays opaque
    for plane in [1, 2, 3]:
        plane_dir = tiles_dir / str(plane)
        if plane_dir.exists():
            LOG.info(f"Processing plane {plane}...")
            processed = process_plane_tiles(plane_dir, args.threshold, args.dark_alpha, args.max_zoom)
            total_processed += processed
            LOG.info(f"Plane {plane} completed: {processed} tiles processed")
        else:
            LOG.info(f"Plane {plane} not found, skipping...")
    
    LOG.info(f"✅ Transparency processing completed!")
    LOG.info(f"📊 Total tiles processed: {total_processed}")
    LOG.info(f"🎯 Upper planes now have transparency for layered viewing")
    
    return 0

if __name__ == "__main__":
    exit(main())
