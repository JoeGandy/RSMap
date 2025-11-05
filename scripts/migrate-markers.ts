#!/usr/bin/env ts-node
/**
 * Marker Migration Utility
 * 
 * This script helps migrate marker coordinates when OSRS adds new regions to the map.
 * It detects the current tile dimensions and calculates the offset needed to adjust
 * all existing markers.
 * 
 * Usage:
 *   npm run migrate-markers -- --old-x 51 --old-y 178 --new-x 55 --new-y 180
 *   
 * Or to auto-detect current dimensions:
 *   npm run migrate-markers -- --auto-detect
 */

const fs = require('fs');
const path = require('path');

interface MapIcon {
  position: {
    lng: number;
    lat: number;
  };
  iconPath: string;
  label: string;
  plane: number;
  id: string;
  createdAt: number;
  linkedIconId?: string;
}

interface MapIconsData {
  icons: MapIcon[];
  version: number;
}

interface TileMetadata {
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

const TILES_DIR = path.join(process.cwd(), 'public', 'tiles');
const MAP_DATA_PATH = path.join(process.cwd(), 'public', 'map_data.json');
const METADATA_PATH = path.join(process.cwd(), 'public', 'tile_metadata.json');
const BACKUP_DIR = path.join(process.cwd(), 'backups');

/**
 * Detect current tile dimensions by scanning the tile directory
 */
function detectTileDimensions(plane: number = 0, zoom: number = 5): { tilesX: number; tilesY: number } {
  const zoomDir = path.join(TILES_DIR, plane.toString(), zoom.toString());
  
  if (!fs.existsSync(zoomDir)) {
    throw new Error(`Tile directory not found: ${zoomDir}`);
  }

  // Count X directories (tile columns)
  const xDirs = fs.readdirSync(zoomDir)
    .filter((name: string) => {
      const fullPath = path.join(zoomDir, name);
      return fs.statSync(fullPath).isDirectory() && !isNaN(parseInt(name));
    })
    .map((name: string) => parseInt(name));
  
  const tilesX = Math.max(...xDirs) + 1;

  // Count Y tiles (tile rows) by checking the first X directory
  const firstXDir = path.join(zoomDir, '0');
  const yFiles = fs.readdirSync(firstXDir)
    .filter((name: string) => name.endsWith('.png'))
    .map((name: string) => parseInt(name.replace('.png', '')));
  
  const tilesY = Math.max(...yFiles) + 1;

  return { tilesX, tilesY };
}

/**
 * Load tile metadata
 */
function loadMetadata(): TileMetadata {
  if (!fs.existsSync(METADATA_PATH)) {
    throw new Error(`Metadata file not found: ${METADATA_PATH}. Please create it first.`);
  }
  
  return JSON.parse(fs.readFileSync(METADATA_PATH, 'utf-8'));
}

/**
 * Update tile metadata with new dimensions
 */
function updateMetadata(newDimensions: { tilesX: number; tilesY: number }, description: string): void {
  const metadata = loadMetadata();
  
  metadata.dimensions = {
    tilesX: newDimensions.tilesX,
    tilesY: newDimensions.tilesY,
    comment: `Updated tile grid dimensions at zoom level 5`
  };
  
  metadata.history.push({
    date: new Date().toISOString().split('T')[0],
    tilesX: newDimensions.tilesX,
    tilesY: newDimensions.tilesY,
    description
  });
  
  metadata.generatedAt = new Date().toISOString();
  
  fs.writeFileSync(METADATA_PATH, JSON.stringify(metadata, null, 2));
  console.log('✓ Updated tile metadata');
}

/**
 * Create a backup of the map data
 */
function createBackup(): string {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(BACKUP_DIR, `map_data_${timestamp}.json`);
  
  fs.copyFileSync(MAP_DATA_PATH, backupPath);
  console.log(`✓ Created backup: ${backupPath}`);
  
  return backupPath;
}

/**
 * Migrate markers based on dimension changes
 * 
 * When new regions are added to OSRS, they're typically added to the edges.
 * The offset calculation depends on where the new regions were added:
 * - If added to the left/top: markers need positive offset
 * - If added to the right/bottom: no offset needed (markers stay in place)
 * 
 * For now, we assume regions are added uniformly or to specific edges.
 */
function migrateMarkers(
  oldDimensions: { tilesX: number; tilesY: number },
  newDimensions: { tilesX: number; tilesY: number },
  offsetStrategy: 'auto' | 'manual' = 'auto',
  manualOffset?: { x: number; y: number }
): void {
  // Load current markers
  const mapData: MapIconsData = JSON.parse(fs.readFileSync(MAP_DATA_PATH, 'utf-8'));
  
  console.log(`\nMigrating ${mapData.icons.length} markers...`);
  console.log(`Old dimensions: ${oldDimensions.tilesX} x ${oldDimensions.tilesY}`);
  console.log(`New dimensions: ${newDimensions.tilesX} x ${newDimensions.tilesY}`);
  
  // Calculate offset
  let offsetX = 0;
  let offsetY = 0;
  
  if (offsetStrategy === 'manual' && manualOffset) {
    offsetX = manualOffset.x;
    offsetY = manualOffset.y;
  } else {
    // Auto-calculate offset
    // The coordinate system uses ~8 units per tile (405 map units / 51 tiles)
    // This is the scale factor between tile count and map coordinates
    const UNITS_PER_TILE_X = 8; // Approximate: 405 / 51 ≈ 7.94
    const UNITS_PER_TILE_Y = 8; // Approximate: 1428 / 178 ≈ 8.02
    
    // Assume new tiles were added to the left/top (common OSRS pattern)
    const deltaX = newDimensions.tilesX - oldDimensions.tilesX;
    const deltaY = newDimensions.tilesY - oldDimensions.tilesY;
    
    // If tiles increased, assume they were added to the left/top
    // This shifts all existing content to the right/bottom
    // Scale by units per tile to get the actual coordinate offset
    offsetX = deltaX > 0 ? deltaX * UNITS_PER_TILE_X : 0;
    offsetY = deltaY > 0 ? deltaY * UNITS_PER_TILE_Y : 0;
  }
  
  console.log(`Applying offset: X=${offsetX}, Y=${offsetY}`);
  
  if (offsetX === 0 && offsetY === 0) {
    console.log('⚠ No offset needed - dimensions unchanged or decreased');
    return;
  }
  
  // Apply offset to all markers
  let migratedCount = 0;
  for (const icon of mapData.icons) {
    const oldLng = icon.position.lng;
    const oldLat = icon.position.lat;
    
    // Apply offset
    icon.position.lng += offsetX;
    icon.position.lat -= offsetY; // Subtract because lat is negative in our coordinate system
    
    migratedCount++;
  }
  
  // Save migrated data
  fs.writeFileSync(MAP_DATA_PATH, JSON.stringify(mapData, null, 2));
  console.log(`✓ Migrated ${migratedCount} markers`);
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);
  
  console.log('=== OSRS Marker Migration Utility ===\n');
  
  // Parse arguments
  const autoDetect = args.includes('--auto-detect');
  const oldXIndex = args.indexOf('--old-x');
  const oldYIndex = args.indexOf('--old-y');
  const newXIndex = args.indexOf('--new-x');
  const newYIndex = args.indexOf('--new-y');
  const dryRun = args.includes('--dry-run');
  const offsetXIndex = args.indexOf('--offset-x');
  const offsetYIndex = args.indexOf('--offset-y');
  
  try {
    // Load metadata
    const metadata = loadMetadata();
    const oldDimensions = metadata.dimensions;
    
    console.log(`Current metadata dimensions: ${oldDimensions.tilesX} x ${oldDimensions.tilesY}`);
    
    // Detect new dimensions
    let newDimensions: { tilesX: number; tilesY: number };
    
    if (autoDetect) {
      console.log('\nAuto-detecting tile dimensions...');
      newDimensions = detectTileDimensions();
      console.log(`Detected dimensions: ${newDimensions.tilesX} x ${newDimensions.tilesY}`);
    } else if (newXIndex !== -1 && newYIndex !== -1) {
      newDimensions = {
        tilesX: parseInt(args[newXIndex + 1]),
        tilesY: parseInt(args[newYIndex + 1])
      };
      console.log(`Using provided dimensions: ${newDimensions.tilesX} x ${newDimensions.tilesY}`);
    } else {
      console.error('\nError: Must specify either --auto-detect or provide --new-x and --new-y');
      console.log('\nUsage:');
      console.log('  Auto-detect: npm run migrate-markers -- --auto-detect');
      console.log('  Manual: npm run migrate-markers -- --new-x 55 --new-y 180');
      console.log('  With custom offset: npm run migrate-markers -- --new-x 55 --new-y 180 --offset-x 4 --offset-y 2');
      console.log('  Dry run: npm run migrate-markers -- --auto-detect --dry-run');
      process.exit(1);
    }
    
    // Check if dimensions changed
    if (newDimensions.tilesX === oldDimensions.tilesX && newDimensions.tilesY === oldDimensions.tilesY) {
      console.log('\n✓ Dimensions unchanged - no migration needed');
      process.exit(0);
    }
    
    // Prepare migration
    const manualOffset = (offsetXIndex !== -1 && offsetYIndex !== -1) ? {
      x: parseInt(args[offsetXIndex + 1]),
      y: parseInt(args[offsetYIndex + 1])
    } : undefined;
    
    if (dryRun) {
      console.log('\n[DRY RUN] Would perform the following actions:');
      console.log('1. Create backup of map_data.json');
      console.log('2. Migrate markers with calculated offset');
      console.log('3. Update tile_metadata.json');
      console.log('\nRun without --dry-run to apply changes');
      process.exit(0);
    }
    
    // Confirm with user
    console.log('\n⚠ This will modify your marker coordinates!');
    console.log('A backup will be created automatically.');
    
    // Create backup
    createBackup();
    
    // Migrate markers
    migrateMarkers(
      oldDimensions,
      newDimensions,
      manualOffset ? 'manual' : 'auto',
      manualOffset
    );
    
    // Update metadata
    updateMetadata(newDimensions, `Migration after OSRS update - dimensions changed from ${oldDimensions.tilesX}x${oldDimensions.tilesY} to ${newDimensions.tilesX}x${newDimensions.tilesY}`);
    
    console.log('\n✓ Migration completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Test the map to verify markers are correctly positioned');
    console.log('2. If markers are still offset, you can restore from backup and try manual offset');
    console.log('3. Update src/lib/coordinates.ts if needed to reflect new dimensions');
    
  } catch (error) {
    console.error('\n✗ Migration failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

// Export for CommonJS
module.exports = { detectTileDimensions, migrateMarkers, loadMetadata, updateMetadata };
