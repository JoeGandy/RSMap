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
      
      // Create icon at start location with destination stored
      mapIcons.push({
        id: `worldmap-link-${linkIndex}`,
        position: {
          lng: startCoords.lng,
          lat: startCoords.lat
        },
        iconPath: '/map_icons/Map_link_icon.png',
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
