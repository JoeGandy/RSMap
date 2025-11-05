#!/bin/bash
# Check current tile dimensions
# Usage: ./scripts/check-dimensions.sh

echo "=== OSRS Map Tile Dimensions Check ==="
echo ""

# Check if tiles directory exists
if [ ! -d "public/tiles/0/5" ]; then
    echo "❌ Error: Tile directory not found at public/tiles/0/5"
    echo "   Have you generated tiles yet?"
    exit 1
fi

# Count X dimension (number of directories, 0-indexed so add 1 to max)
TILES_X=$(ls public/tiles/0/5/ | grep -E '^[0-9]+$' | sort -n | tail -1)
TILES_X=$((TILES_X + 1))

# Count Y dimension (number of PNG files in first X directory)
TILES_Y=$(ls public/tiles/0/5/0/*.png 2>/dev/null | wc -l)

echo "Current Tile Dimensions:"
echo "  X (width):  $TILES_X tiles"
echo "  Y (height): $TILES_Y tiles"
echo ""

# Check metadata file
if [ -f "public/tile_metadata.json" ]; then
    echo "Metadata File:"
    META_X=$(grep -o '"tilesX": [0-9]*' public/tile_metadata.json | head -1 | grep -o '[0-9]*')
    META_Y=$(grep -o '"tilesY": [0-9]*' public/tile_metadata.json | head -1 | grep -o '[0-9]*')
    echo "  X (metadata): $META_X tiles"
    echo "  Y (metadata): $META_Y tiles"
    echo ""
    
    # Compare
    if [ "$TILES_X" -eq "$META_X" ] && [ "$TILES_Y" -eq "$META_Y" ]; then
        echo "✅ Metadata matches actual tiles"
    else
        echo "⚠️  WARNING: Metadata does not match actual tiles!"
        echo "   Consider running: npm run migrate-markers -- --auto-detect"
    fi
else
    echo "⚠️  Metadata file not found at public/tile_metadata.json"
    echo "   This file should be created automatically during tile generation"
fi

echo ""
echo "Tile Structure:"
echo "  Planes: $(ls -d public/tiles/*/ 2>/dev/null | wc -l) (0-3)"
echo "  Zoom levels: $(ls -d public/tiles/0/*/ 2>/dev/null | wc -l) (0-6)"
echo ""

# Check marker file
if [ -f "public/map_data.json" ]; then
    MARKER_COUNT=$(grep -o '"id":' public/map_data.json | wc -l)
    echo "Markers: $MARKER_COUNT total"
else
    echo "Markers: No map_data.json found"
fi

echo ""
echo "=== End of Check ==="
