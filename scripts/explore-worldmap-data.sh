#!/bin/bash
# Explore all worldmap data from OSRS cache using Docker

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "Building Docker image..."
cd "$PROJECT_ROOT/tile_generator"
docker build -t osrs-tile-generator .

echo ""
echo "Exploring worldmap data..."
docker run --rm \
  -v "$PROJECT_ROOT:/repo" \
  osrs-tile-generator \
  python3 src/extract_worldmap_labels.py explore

echo ""
echo "Done! Check public/worldmap_data_full.json"
