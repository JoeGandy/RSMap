/**
 * Convert worldmap data to MapIcon format for use with CanvasIconLayer
 */

import { MapIcon } from '@/types/mapIcon';
import { loadWorldMapData, labelsToMarkers, iconsToMarkers } from './worldMapData';
import { osrsWorldToLeaflet } from './coordinates';

/**
 * Convert worldmap intermap links to MapIcon format
 */
export async function loadWorldMapAsIcons(includeIntermapLinks: boolean = true): Promise<MapIcon[]> {
  const data = await loadWorldMapData();
  const mapIcons: MapIcon[] = [];
  
  // Note: data.icons are generic POI markers with no useful info, so we skip them
  
  // Convert intermap links to icons (one icon per link at start location)
  if (includeIntermapLinks) {
    let linkIndex = 0;
    for (const [startKey, endPos] of Object.entries(data.intermapLinks)) {
      const [startX, startY, startZ] = startKey.split(',').map(Number);
      const startCoords = osrsWorldToLeaflet(startX, startY, startZ);
      const endCoords = osrsWorldToLeaflet(endPos.x, endPos.y, endPos.z);
      
      // Create icon at start location with destination stored.
      // Self-contained SVG arrow - no dependency on manual icon assets.
      const linkIcon = 'data:image/svg+xml;base64,' + Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">` +
        `<circle cx="9" cy="9" r="8" fill="rgba(0,0,0,0.65)" stroke="#FFD700" stroke-width="1.5"/>` +
        `<path d="M5 9h6M8.5 6l3 3-3 3" stroke="#FFD700" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` +
        `</svg>`
      ).toString('base64');

      // Create icon at start location with destination stored
      mapIcons.push({
        id: `worldmap-link-${linkIndex}`,
        position: {
          lng: startCoords.lng,
          lat: startCoords.lat
        },
        iconPath: linkIcon,
        label: `Link ${linkIndex + 1}`,
        plane: startZ,
        createdAt: Date.now(),
        linkDestination: {
          lng: endCoords.lng,
          lat: endCoords.lat,
          plane: endPos.z
        }
      });
      
      linkIndex++;
    }
    console.log(`🔗 Added ${linkIndex} intermap link icons`);
  }
  
  console.log(`📍 Loaded ${mapIcons.length} worldmap icons total`);
  
  return mapIcons;
}

/**
 * Merge worldmap icons with user-created icons
 */
export function mergeWithUserIcons(worldMapIcons: MapIcon[], userIcons: MapIcon[]): MapIcon[] {
  return [...worldMapIcons, ...userIcons];
}
