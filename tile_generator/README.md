# OSRS Tile Generator

This directory contains the tile generation system adapted from [Explv's osrs_map_tiles](https://github.com/Explv/osrs_map_tiles) project.

## Overview

The tile generator creates map tiles for Old School RuneScape by:

1. **Downloading the latest OSRS cache** from archive.openrs2.org
2. **Generating full map images** using RuneLite's MapImageDumper
3. **Splitting images into tiles** at multiple zoom levels for use with Leaflet

## Components

### Python Tile Generator (`src/tile_generator.py`)
- Downloads latest OSRS cache and XTEAs
- Orchestrates the tile generation process
- Splits full images into tiles at different zoom levels
- Outputs tiles to `public/tiles/` for serving by NextJS

### Java Map Image Generator (`java/`)
- Uses RuneLite's MapImageDumper to generate full OSRS map images
- Processes the game cache to create accurate map representations
- Supports multiple planes (surface, underground, etc.)

### Docker Container
- Provides a consistent environment with all dependencies
- Includes Python, Java, and image processing libraries
- Isolates the tile generation process

## Usage

### Prerequisites
- Docker installed and running
- At least 8GB RAM allocated to Docker
- Sufficient disk space (tiles can be several GB)

### Generate Tiles

Run the tile generation script:

```bash
./scripts/generate-tiles.sh
```

This will:
1. Build the Docker image
2. Download the latest OSRS cache
3. Generate full map images
4. Create tiles at multiple zoom levels
5. Output tiles to `public/tiles/`

### Manual Docker Usage

You can also run the tile generator manually:

```bash
cd tile_generator
docker build -t osrs-tile-generator .
docker run -it -v "$(pwd)/..:/app" osrs-tile-generator
```

## Output Structure

Generated tiles are organized as:
```
public/tiles/
├── 0/          # Surface plane
│   ├── 3/      # Zoom level 3
│   │   ├── 0/  # X coordinate
│   │   │   ├── 0.png
│   │   │   ├── 1.png
│   │   │   └── ...
│   │   └── ...
│   ├── 4/      # Zoom level 4
│   └── ...
├── 1/          # Underground plane
└── ...
```

## Configuration

### Zoom Levels
- **MIN_ZOOM**: 3 (most zoomed out)
- **MAX_ZOOM**: 11 (most zoomed in)
- **TILE_SIZE**: 256x256 pixels

### Planes
- **0**: Surface level
- **1**: Underground level 1
- **2**: Underground level 2
- **3**: Sky level

## Integration with NextJS

The NextJS application automatically serves tiles from `public/tiles/` via the API route at `/api/tiles/[z]/[x]/[y]`.

If pre-generated tiles are not available, the API falls back to generating placeholder tiles on-the-fly.

## Performance Notes

- Initial tile generation can take several hours
- Generated tiles can be several GB in size
- Consider using a CDN for production deployment
- Tiles are cached with appropriate headers for browser caching

## Troubleshooting

### Docker Issues
- Ensure Docker has sufficient memory (8GB+)
- On macOS, enable "Use Rosetta for x86/amd64 emulation" if needed
- Check Docker logs for specific error messages

### Cache Download Issues
- Verify internet connection
- Check if archive.openrs2.org is accessible
- Ensure sufficient disk space for cache download

### Java Build Issues
- Verify Java 11+ is available in the container
- Check Gradle build logs for dependency issues
- Ensure RuneLite cache library is accessible
