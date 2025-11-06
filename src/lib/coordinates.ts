/**
 * Coordinate transformation utilities for OSRS tile grid system
 * 
 * Coordinate Systems:
 * 1. Leaflet Coordinates (lng, lat): Map library coordinates that directly correspond to tile grid
 * 2. Tile Grid Coordinates (tileX, tileY): Direct tile coordinates in our generated tile structure
 * 3. OSRS Region Coordinates: Approximate OSRS regions (for display purposes only)
 */

export interface LeafletCoords {
  lng: number;
  lat: number;
}

export interface RegionCoords {
  regionX: number;
  regionY: number;
}

export interface TileCoords {
  regionX: number;
  regionY: number;
  localX: number;
  localY: number;
}

export interface TileMetadata {
  version: number;
  generatedAt: string;
  dimensions: {
    tilesX: number;
    tilesY: number;
    comment: string;
  };
  history: Array<{
    date: string;
    tilesX: number;
    tilesY: number;
    description: string;
  }>;
}

// Default tile grid dimensions (fallback if metadata not available)
// These will be overridden by loading from tile_metadata.json
let TILES_X = 51;
let TILES_Y = 178;

// Load tile dimensions from metadata
let metadataLoaded = false;

async function loadTileMetadata(): Promise<void> {
  if (metadataLoaded) return;
  
  try {
    const response = await fetch('/tile_metadata.json');
    if (response.ok) {
      const metadata: TileMetadata = await response.json();
      TILES_X = metadata.dimensions.tilesX;
      TILES_Y = metadata.dimensions.tilesY;
    }
  } catch (error) {
    // Failed to load tile metadata, using defaults
  }
  
  metadataLoaded = true;
}

// Initialize metadata loading
if (typeof window !== 'undefined') {
  loadTileMetadata();
}

/**
 * Get current tile dimensions
 */
export function getTileDimensions(): { tilesX: number; tilesY: number } {
  return { tilesX: TILES_X, tilesY: TILES_Y };
}

// Leaflet bounds: lng 0-TILES_X, lat -TILES_Y to 0 (negative Y due to coordinate flip)

/**
 * Convert Leaflet coordinates to tile grid coordinates
 */
export function leafletToTileGrid(coords: LeafletCoords): { tileX: number; tileY: number } {
  // Leaflet coordinates directly map to tile grid
  // lng 0-TILES_X = tile X 0-(TILES_X-1)
  // lat -TILES_Y to 0 = tile Y 0-(TILES_Y-1) (with transformation)
  const tileX = Math.floor(Math.max(0, Math.min(TILES_X - 1, coords.lng)));
  const tileY = Math.floor(Math.abs(coords.lat + 1)); // Convert negative lat to positive tile Y
  
  return { tileX, tileY };
}

/**
 * Convert Leaflet coordinates to approximate OSRS region coordinates
 * Note: This is approximate since we're using tile grid, not actual OSRS regions
 */
export function leafletToRegion(coords: LeafletCoords): RegionCoords {
  const tileGrid = leafletToTileGrid(coords);
  
  // Rough approximation: assume each tile represents part of an OSRS region
  // This is mainly for display purposes
  return {
    regionX: Math.floor(tileGrid.tileX * 2), // Rough scaling
    regionY: Math.floor(tileGrid.tileY * 2)  // Rough scaling
  };
}

/**
 * Convert Leaflet coordinates to OSRS tile coordinates (legacy format)
 */
export function leafletToTile(coords: LeafletCoords): TileCoords {
  const regionCoords = leafletToRegion(coords);
  const tileGrid = leafletToTileGrid(coords);
  
  // Calculate local tile position within the region (approximate)
  const localX = tileGrid.tileX % 64;
  const localY = tileGrid.tileY % 64;
  
  return {
    regionX: regionCoords.regionX,
    regionY: regionCoords.regionY,
    localX: Math.max(0, Math.min(63, localX)),
    localY: Math.max(0, Math.min(63, localY))
  };
}

/**
 * Convert OSRS region coordinates to Leaflet coordinates
 */
export function regionToLeaflet(region: RegionCoords): LeafletCoords {
  return {
    lng: region.regionX / 2, // Reverse the scaling
    lat: -(region.regionY / 2) // Make lat negative to match our coordinate system
  };
}

/**
 * Format region coordinates as a string
 */
export function formatRegion(region: RegionCoords): string {
  return `Region (${region.regionX}, ${region.regionY})`;
}

/**
 * Format tile coordinates as a string
 */
export function formatTile(tile: TileCoords): string {
  return `Region (${tile.regionX}, ${tile.regionY}) Tile (${tile.localX}, ${tile.localY})`;
}

/**
 * Check if region coordinates are within valid OSRS bounds
 */
export function isValidRegion(region: RegionCoords): boolean {
  // OSRS world bounds (approximate)
  return region.regionX >= 0 && region.regionX <= 255 && 
         region.regionY >= 0 && region.regionY <= 255;
}

/**
 * Convert tile coordinates to approximate game coordinates
 */
export function tileToGameCoords(tile: TileCoords): { x: number; y: number } {
  // Since we're using approximate regions, these are approximate game coordinates
  return {
    x: tile.regionX * 64 + tile.localX,
    y: tile.regionY * 64 + tile.localY
  };
}

/**
 * Convert Leaflet coordinates to tile grid coordinates for display
 */
export function leafletToTileGridDisplay(coords: LeafletCoords): string {
  const tileGrid = leafletToTileGrid(coords);
  return `Tile Grid (${tileGrid.tileX}, ${tileGrid.tileY})`;
}

/**
 * Convert OSRS world coordinates to Leaflet coordinates
 * OSRS world coordinates are the actual in-game coordinates (e.g., Lumbridge = 3239, 3234)
 * 
 * Known reference point: Lumbridge (3239, 3234) should map to Leaflet (273, -1173)
 * 
 * Map bounds: lng [0, 405], lat [0, -1428]
 * Tile grid: 51 × 178 tiles at zoom level 5
 * Each tile: 256×256 pixels, representing 64×64 OSRS world units
 * Pixel scale: 256 pixels / 64 world units = 4 pixels per world unit
 */
export function osrsWorldToLeaflet(worldX: number, worldY: number, plane: number = 0): LeafletCoords {
  // Reference point: Lumbridge
  // Calibrated by clicking on actual Lumbridge location on map
  const LUMBRIDGE_WORLD_X = 3239;
  const LUMBRIDGE_WORLD_Y = 3234;
  const LUMBRIDGE_LEAFLET_LNG = 284.91; // Calibrated from user click
  const LUMBRIDGE_LEAFLET_LAT = -1171.81; // Calibrated from user click
  
  // Calculate the world coordinate offset from Lumbridge
  const worldDeltaX = worldX - LUMBRIDGE_WORLD_X;
  const worldDeltaY = worldY - LUMBRIDGE_WORLD_Y;
  
  // Scale factor: 4 pixels per world unit (256 pixels / 64 world units)
  // But Leaflet coordinates are at zoom level 5, so we need to account for zoom scaling
  // At zoom 5, each tile is 256 pixels, and we have 51×178 tiles
  // Total map size: 51*256 = 13056 pixels wide, 178*256 = 45568 pixels tall
  // But Leaflet bounds are [0,405] × [0,-1428], which is 405×1428 units
  // So the scale is: 405 / (51*256) ≈ 0.031 and 1428 / (178*256) ≈ 0.031
  // This means 1 Leaflet unit ≈ 32 pixels ≈ 8 world units
  
  const PIXELS_PER_WORLD_UNIT = 4; // 256 pixels / 64 world units
  const PIXELS_PER_LEAFLET_UNIT = 32; // Derived from bounds vs tile grid
  const LEAFLET_UNITS_PER_WORLD_UNIT = PIXELS_PER_WORLD_UNIT / PIXELS_PER_LEAFLET_UNIT; // 4/32 = 0.125
  
  const leafletDeltaX = worldDeltaX * LEAFLET_UNITS_PER_WORLD_UNIT;
  const leafletDeltaY = worldDeltaY * LEAFLET_UNITS_PER_WORLD_UNIT;
  
  // Apply to Lumbridge's Leaflet coordinates
  // User reports Y-axis is inverted, so we ADD instead of subtract
  const lng = LUMBRIDGE_LEAFLET_LNG + leafletDeltaX;
  const lat = LUMBRIDGE_LEAFLET_LAT + leafletDeltaY; // ADD - Y-axis goes same direction
  
  return { lng, lat };
}

/**
 * Convert Leaflet coordinates to OSRS world coordinates
 */
export function leafletToOsrsWorld(coords: LeafletCoords): { worldX: number; worldY: number } {
  // Reference point: Lumbridge
  const LUMBRIDGE_WORLD_X = 3239;
  const LUMBRIDGE_WORLD_Y = 3234;
  const LUMBRIDGE_LEAFLET_LNG = 284.91; // Calibrated from user click
  const LUMBRIDGE_LEAFLET_LAT = -1171.81; // Calibrated from user click
  
  // Calculate Leaflet deltas from Lumbridge
  const lngDelta = coords.lng - LUMBRIDGE_LEAFLET_LNG;
  const latDelta = coords.lat - LUMBRIDGE_LEAFLET_LAT;
  
  // Scale factor (inverse of forward conversion)
  const LEAFLET_UNITS_PER_WORLD_UNIT = 0.125; // 1 world unit = 0.125 Leaflet units
  const WORLD_UNITS_PER_LEAFLET_UNIT = 1 / LEAFLET_UNITS_PER_WORLD_UNIT; // 8 world units per Leaflet unit
  
  // Convert to world deltas (Y-axis goes same direction now)
  const worldDeltaX = lngDelta * WORLD_UNITS_PER_LEAFLET_UNIT;
  const worldDeltaY = latDelta * WORLD_UNITS_PER_LEAFLET_UNIT; // No negation - same direction
  
  // Apply to Lumbridge's world coordinates
  const worldX = Math.floor(LUMBRIDGE_WORLD_X + worldDeltaX);
  const worldY = Math.floor(LUMBRIDGE_WORLD_Y + worldDeltaY);
  
  return { worldX, worldY };
}

/**
 * Format OSRS world coordinates as a string
 */
export function formatOsrsWorld(worldX: number, worldY: number, plane: number = 0): string {
  if (plane === 0) {
    return `(${worldX}, ${worldY})`;
  }
  return `(${worldX}, ${worldY}, ${plane})`;
}
