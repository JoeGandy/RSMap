# World Map Data System

## Overview

The map uses data extracted directly from the OSRS cache via RuneLite's cache library. All map icons are **fully automatic** — there is no manual icon management anywhere in the app.

## Data Files

### `public/worldmap_data_full.json`
Complete worldmap data extracted from OSRS cache containing:
- **1,057 labels**: City names, dungeon names, landmarks
- **4,310 icon placements** (`placements[]`): every official map icon — 4,095 from object placements whose definition carries a `mapAreaId` → area → sprite chain (dungeon entrances, stairs, shortcuts, transport...) and 215 from worldmap elements
- **881 area definitions**
- **406 intermap links**: Teleport/ladder connections

### `public/map_sprites/`
The **135 actual game sprite PNGs** referenced by placements (`{spriteId}.png`), exported straight from the cache's sprite archive. The frontend renders each placement with its real sprite — no hand-drawn substitutes.

Both are regenerated monthly by the tile-generation workflow.

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

## Icon Rendering

Icons come exclusively from the cache extraction (see `placements[]` above) and render through `CanvasIconLayer` using the exported sprite PNGs. The former manual system (`map_data.json`, add/edit dialogs, localStorage icons, marker migration) was removed — every icon on the map is regenerated from the game cache each month, so it can never drift from the actual game.

Intermap links render as a self-contained SVG arrow marker and remain clickable to jump to their destination.
