#!/bin/bash

# OSRS Tile Generation Script
# This script builds and runs the tile generator, then applies transparency processing

set -e

echo "🗺️  OSRS Tile Generator"
echo "======================"

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is required but not installed. Please install Docker first."
    exit 1
fi

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed. Please install Python 3 first."
    exit 1
fi

# Get the project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TILE_GENERATOR_DIR="$PROJECT_ROOT/tile_generator"

echo "📁 Project root: $PROJECT_ROOT"
echo "🔧 Building tile generator Docker image..."

# Build the Docker image
cd "$TILE_GENERATOR_DIR"
docker build -t osrs-tile-generator .

echo "🚀 Running tile generator..."

# Run the tile generator
docker run -it \
    -v "$PROJECT_ROOT/cache:/repo/cache" \
    -v "$PROJECT_ROOT/generated_images:/repo/generated_images" \
    -v "$PROJECT_ROOT/public/tiles:/repo/public/tiles" \
    osrs-tile-generator

echo "✅ Tile generation completed!"

# Apply transparency processing to upper planes
echo ""
echo "🎨 Applying transparency processing to upper planes..."
echo "=================================================="

cd "$PROJECT_ROOT"

# Check if PIL is available
if ! python3 -c "import PIL" 2>/dev/null; then
    echo "⚠️  PIL (Pillow) not found. Installing..."
    pip3 install Pillow numpy
fi

# Run transparency processing
python3 make_tiles_transparent.py --threshold 10 --dark-alpha 102 --max-zoom 6

echo ""
echo "✅ All processing completed!"
echo "📂 Tiles are available in: $PROJECT_ROOT/public/tiles"

# Show summary of generated tiles
echo ""
echo "📊 Tile Generation Summary:"
echo "=========================="
for plane in {0..3}; do
    PLANE_DIR="$PROJECT_ROOT/public/tiles/$plane"
    if [ -d "$PLANE_DIR" ]; then
        TILE_COUNT=$(find "$PLANE_DIR" -name "*.png" | wc -l)
        if [ $plane -eq 0 ]; then
            echo "   Plane $plane (Surface): $TILE_COUNT tiles - Original colors"
        else
            echo "   Plane $plane: $TILE_COUNT tiles - With transparency processing"
        fi
    else
        echo "   Plane $plane: No tiles generated"
    fi
done

echo ""
echo "🎯 Ready for multi-plane layered OSRS world map!"
