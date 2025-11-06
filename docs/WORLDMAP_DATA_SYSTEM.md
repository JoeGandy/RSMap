# World Map Data System

## Overview

The map now uses data extracted directly from the OSRS cache via RuneLite's cache library. This provides **863 location labels** with accurate positions and metadata.

## Data Files

### `public/worldmap_data_full.json`
Complete worldmap data extracted from OSRS cache containing:
- **863 labels**: City names, dungeon names, landmarks
- **198 icons**: Generic POI markers (sprite ID 1535)
- **683 area definitions**: All named areas in the game
- **372 intermap links**: Teleport/ladder connections

### `public/worldmap_labels.json` (legacy)
Simplified label-only export for backward compatibility.

## Architecture

### 1. Coordinate Conversion (`src/lib/coordinates.ts`)

**New Functions:**
```typescript
// Convert OSRS world coordinates to Leaflet coordinates
osrsWorldToLeaflet(worldX: number, worldY: number, plane?: number): LeafletCoords

// Convert Leaflet coordinates back to OSRS world coordinates
leafletToOsrsWorld(coords: LeafletCoords): { worldX: number; worldY: number }

// Format OSRS coordinates for display
formatOsrsWorld(worldX: number, worldY: number, plane?: number): string
```

**How it works:**
- OSRS world coordinates are in-game coordinates (e.g., Lumbridge = 3222, 3222)
- Each tile in our grid represents 64x64 world units (one OSRS region)
- Y-axis is flipped: OSRS Y increases north, Leaflet Y increases south

### 2. Data Loading (`src/lib/worldMapData.ts`)

**Functions:**
```typescript
// Load complete worldmap data
loadWorldMapData(): Promise<WorldMapData>

// Convert labels to map markers
labelsToMarkers(labels: WorldMapLabel[]): MapMarker[]

// Convert icons to map markers
iconsToMarkers(icons: WorldMapIcon[]): MapMarker[]

// Load everything as markers
loadAllMarkers(): Promise<MapMarker[]>

// Filter by plane/type
filterByPlane(markers: MapMarker[], plane: number): MapMarker[]
filterByType(markers: MapMarker[], types: string[]): MapMarker[]
```

### 3. Display Component (`src/components/WorldMapLabels.tsx`)

Renders all 863 labels on the map with:
- Dynamic font sizes based on `textScale` (0=small, 1=medium, 2=large)
- White text with black outline for visibility
- Clickable popups with location info
- HTML line breaks supported (`<br>` tags)

## Usage

### In Your Map Component

```typescript
import OSRSMap from '@/components/OSRSMap';

<OSRSMap
  showWorldMapLabels={true}  // Enable worldmap labels (default: true)
  // ... other props
/>
```

### Programmatic Access

```typescript
import { loadWorldMapData, labelsToMarkers } from '@/lib/worldMapData';
import { osrsWorldToLeaflet } from '@/lib/coordinates';

// Load all data
const data = await loadWorldMapData();

// Convert to markers
const markers = labelsToMarkers(data.labels);

// Convert a specific coordinate
const lumbridgeCoords = osrsWorldToLeaflet(3222, 3222, 0);
```

## Data Structure

### WorldMapLabel
```typescript
{
  name: string;           // "Lumbridge", "Varrock", etc.
  worldX: number;         // OSRS world X coordinate
  worldY: number;         // OSRS world Y coordinate
  plane: number;          // 0=surface, 1=1st floor, etc.
  textColor: number;      // RGB color as integer
  textScale: number;      // 0=small, 1=medium, 2=large
  category: number;       // 1129 for labels
  spriteId: number;       // -1 for text labels
}
```

### WorldMapIcon
```typescript
{
  name: string;           // Usually "Icon 1535"
  worldX: number;
  worldY: number;
  plane: number;
  spriteId: number;       // 1535 for all icons
  category: number;       // 1063 for icons
  membersOnly: boolean;
}
```

## Extracting Fresh Data

When OSRS updates, re-extract the data:

```bash
# Extract just labels
npm run extract-labels

# Extract all worldmap data
npm run explore-worldmap
```

This will:
1. Download the latest OSRS cache
2. Use RuneLite's WorldMapManager to extract data
3. Generate updated JSON files in `public/`

## Sprite ID Mapping

Currently all icons use sprite ID 1535 (generic POI marker). To add custom icons:

1. **Extract sprite images** from cache (future enhancement)
2. **Map sprite IDs to icon types** in `src/lib/worldMapData.ts`:
   ```typescript
   const SPRITE_TO_ICON_TYPE: Record<number, string> = {
     1535: 'poi',
     // Add more mappings as sprites are identified
   };
   ```

## Categories

The data includes two main categories:
- **1129**: Text labels (cities, landmarks, dungeons)
- **1063**: Icons (generic POI markers)

## Coordinate System Reference

| System | Example | Description |
|--------|---------|-------------|
| OSRS World | (3222, 3222) | In-game coordinates |
| Tile Grid | (50, 50) | Our tile coordinate system |
| Leaflet | (50.34, -100.5) | Map library coordinates |

## Future Enhancements

1. **Sprite extraction**: Extract actual icon sprites from cache
2. **Icon categorization**: Better categorize icons by type (bank, altar, shop, etc.)
3. **Intermap links**: Visualize teleport/ladder connections
4. **Search**: Add search functionality for locations
5. **Filtering**: Filter by category, members/F2P, plane

## Migration from map_data.json

The old `map_data.json` system is still supported for custom markers. The worldmap labels are additive and can be toggled independently:

```typescript
<OSRSMap
  icons={customIcons}              // Your custom icons
  showWorldMapLabels={true}        // + OSRS cache labels
/>
```
