#!/usr/bin/env python3
"""
Extract world map labels from OSRS cache using RuneLite
"""

import os
import json
import subprocess
import logging
from pathlib import Path

# Setup logging
logging.basicConfig(
    format='%(asctime)s %(levelname)-4s %(message)s',
    level=logging.INFO,
    datefmt='%Y-%m-%d %H:%M:%S'
)
LOG = logging.getLogger(__name__)

REPO_DIR = '/repo'  # Mounted volume in Docker container
CACHE_DIR = os.path.join(REPO_DIR, 'cache')
OUTPUT_FILE = os.path.join(REPO_DIR, 'public', 'worldmap_labels.json')

def extract_labels(cache_dir, xtea_file):
    """Extract worldmap labels using Java WorldMapLabelExtractor"""
    LOG.info("Extracting worldmap labels...")
    
    # Find the built JAR file
    jar_files = []
    java_build_dir = "/app/java/build/libs"
    if os.path.exists(java_build_dir):
        jar_files = [f for f in os.listdir(java_build_dir) if f.endswith('.jar')]
    
    if not jar_files:
        raise RuntimeError("No JAR file found. Java component may not have built correctly.")
    
    # Prefer the shadow JAR (contains all dependencies)
    shadow_jar = None
    for jar in jar_files:
        if '-all.jar' in jar:
            shadow_jar = jar
            break
    
    if shadow_jar:
        jar_file = os.path.join(java_build_dir, shadow_jar)
    else:
        jar_file = os.path.join(java_build_dir, jar_files[0])
    
    LOG.info(f"Using JAR file: {jar_file}")
    
    # Run the Java WorldMapLabelExtractor
    cmd = [
        'java',
        '-cp', jar_file,
        'org.explv.mapimage.WorldMapLabelExtractor',
        '--cachedir', cache_dir,
        '--xteapath', xtea_file,
        '--outputfile', OUTPUT_FILE
    ]
    
    LOG.info(f"Running command: {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=True, text=True, cwd="/app")
    
    if result.returncode != 0:
        LOG.error(f"WorldMapLabelExtractor failed with return code {result.returncode}")
        LOG.error(f"STDOUT: {result.stdout}")
        LOG.error(f"STDERR: {result.stderr}")
        raise RuntimeError(f"WorldMapLabelExtractor failed: {result.stderr}")
    
    LOG.info("WorldMapLabelExtractor output:")
    LOG.info(result.stdout)
    
    return OUTPUT_FILE

def explore_all_data(cache_dir, xtea_file):
    """Explore all worldmap data using Java WorldMapDataExplorer"""
    LOG.info("Exploring all worldmap data...")
    
    output_file = os.path.join(REPO_DIR, 'public', 'worldmap_data_full.json')
    
    # Find the built JAR file
    jar_files = []
    java_build_dir = "/app/java/build/libs"
    if os.path.exists(java_build_dir):
        jar_files = [f for f in os.listdir(java_build_dir) if f.endswith('.jar')]
    
    if not jar_files:
        raise RuntimeError("No JAR file found. Java component may not have built correctly.")
    
    # Prefer the shadow JAR (contains all dependencies)
    shadow_jar = None
    for jar in jar_files:
        if '-all.jar' in jar:
            shadow_jar = jar
            break
    
    if shadow_jar:
        jar_file = os.path.join(java_build_dir, shadow_jar)
    else:
        jar_file = os.path.join(java_build_dir, jar_files[0])
    
    LOG.info(f"Using JAR file: {jar_file}")
    
    # Run the Java WorldMapDataExplorer
    cmd = [
        'java',
        '-cp', jar_file,
        'org.explv.mapimage.WorldMapDataExplorer',
        '--cachedir', cache_dir,
        '--xteapath', xtea_file,
        '--outputfile', output_file
    ]
    
    LOG.info(f"Running command: {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=True, text=True, cwd="/app")
    
    if result.returncode != 0:
        LOG.error(f"WorldMapDataExplorer failed with return code {result.returncode}")
        LOG.error(f"STDOUT: {result.stdout}")
        LOG.error(f"STDERR: {result.stderr}")
        raise RuntimeError(f"WorldMapDataExplorer failed: {result.stderr}")
    
    LOG.info("WorldMapDataExplorer output:")
    LOG.info(result.stdout)
    
    return output_file

def main():
    """Main extraction process"""
    import sys
    
    mode = sys.argv[1] if len(sys.argv) > 1 else "labels"
    
    LOG.info(f"Starting worldmap extraction (mode: {mode})")
    
    # Find cache directory
    if not os.path.exists(CACHE_DIR):
        LOG.error(f"Cache directory not found: {CACHE_DIR}")
        LOG.error("Please run the tile generator first to download the cache")
        return
    
    # Find the actual cache subdirectory
    cache_subdirs = [d for d in os.listdir(CACHE_DIR) 
                     if os.path.isdir(os.path.join(CACHE_DIR, d))]
    
    if not cache_subdirs:
        LOG.error("No cache subdirectory found")
        return
    
    cache_path = os.path.join(CACHE_DIR, cache_subdirs[0])
    xtea_path = os.path.join(cache_path, 'xteas.json')
    
    LOG.info(f"Using cache: {cache_path}")
    LOG.info(f"Using XTEAs: {xtea_path}")
    
    if not os.path.exists(xtea_path):
        LOG.error(f"XTEA file not found: {xtea_path}")
        return
    
    if mode == "explore":
        # Extract all worldmap data
        output_file = explore_all_data(cache_path, xtea_path)
        
        if os.path.exists(output_file):
            with open(output_file, 'r') as f:
                data = json.load(f)
            
            LOG.info(f"Extracted complete worldmap data to {output_file}")
            LOG.info(f"  Labels: {len(data.get('labels', []))}")
            LOG.info(f"  Icons: {len(data.get('icons', []))}")
            LOG.info(f"  Areas: {len(data.get('areas', []))}")
            LOG.info(f"  Intermap links: {len(data.get('intermapLinks', {}))}")
    else:
        # Extract just labels
        output_file = extract_labels(cache_path, xtea_path)
        
        # Check if any labels were extracted
        if os.path.exists(output_file):
            with open(output_file, 'r') as f:
                labels = json.load(f)
            
            LOG.info(f"Extracted {len(labels)} labels to {output_file}")
            
            if len(labels) == 0:
                LOG.warning("No labels were extracted!")
        else:
            LOG.error(f"Output file not created: {output_file}")

if __name__ == '__main__':
    main()
