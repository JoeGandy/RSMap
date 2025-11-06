/**
 * World Map Data Loader
 * Loads and processes worldmap data extracted from OSRS cache
 */

import { osrsWorldToLeaflet, LeafletCoords } from './coordinates';

export interface WorldMapLabel {
  name: string;
  worldX: number;
  worldY: number;
  plane: number;
  textColor: number;
  textScale: number;
  category: number;
  spriteId: number;
}

export interface WorldMapIcon {
  name: string;
  worldX: number;
  worldY: number;
  plane: number;
  spriteId: number;
  category: number;
  membersOnly: boolean;
}

export interface WorldMapArea {
  id: number;
  name: string;
  category: number;
  spriteId: number;
  textColor: number;
  textScale: number;
}

export interface WorldMapData {
  labels: WorldMapLabel[];
  icons: WorldMapIcon[];
  areas: WorldMapArea[];
  intermapLinks: Record<string, { x: number; y: number; z: number }>;
  stats: {
    totalElements: number;
    elementsWithLabels: number;
    elementsWithIcons: number;
    totalAreas: number;
    intermapLinkCount: number;
    categories: Record<number, string>;
  };
}

export interface MapMarker {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: string;
  description?: string;
  spriteId?: number;
  category?: number;
  textColor?: number;
  textScale?: number;
  membersOnly?: boolean;
  plane?: number;
}

interface SpriteMapping {
  version: number;
  description: string;
  mappings: {
    byCategory: Record<string, { name: string; icon: string | null; description: string }>;
    bySpriteId: Record<string, { name: string; icon: string | null; description: string }>;
    byName: Record<string, { keywords: string[]; icon: string }>;
  };
  defaultIcon: string;
  iconPath: string;
}

let spriteMappingCache: SpriteMapping | null = null;

/**
 * Load sprite mapping configuration
 */
async function loadSpriteMapping(): Promise<SpriteMapping> {
  if (spriteMappingCache) {
    return spriteMappingCache;
  }
  
  const response = await fetch('/sprite_mapping.json');
  if (!response.ok) {
    throw new Error(`Failed to load sprite mapping: ${response.statusText}`);
  }
  spriteMappingCache = await response.json();
  return spriteMappingCache!;
}

/**
 * Get icon filename from sprite ID, category, and name
 */
async function getIconFile(spriteId: number, category: number, name: string): Promise<string | null> {
  const mapping = await loadSpriteMapping();
  
  // Try sprite ID first
  const spriteMapping = mapping.mappings.bySpriteId[spriteId.toString()];
  if (spriteMapping && spriteMapping.icon) {
    return mapping.iconPath + spriteMapping.icon;
  }
  
  // Try category
  const categoryMapping = mapping.mappings.byCategory[category.toString()];
  if (categoryMapping && categoryMapping.icon) {
    return mapping.iconPath + categoryMapping.icon;
  }
  
  // Try name-based matching
  const nameLower = name.toLowerCase();
  for (const [type, config] of Object.entries(mapping.mappings.byName)) {
    if (config.keywords.some(keyword => nameLower.includes(keyword))) {
      return mapping.iconPath + config.icon;
    }
  }
  
  // Return default icon
  return mapping.iconPath + mapping.defaultIcon;
}

/**
 * Get icon type from name for backward compatibility
 */
function getIconType(name: string): string {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes('bank')) return 'bank';
  if (nameLower.includes('altar')) return 'altar';
  if (nameLower.includes('shop') || nameLower.includes('store')) return 'shop';
  if (nameLower.includes('quest')) return 'quest';
  if (nameLower.includes('dungeon') || nameLower.includes('cave')) return 'dungeon';
  if (nameLower.includes('minigame')) return 'minigame';
  if (nameLower.includes('agility')) return 'agility';
  if (nameLower.includes('mine') || nameLower.includes('mining')) return 'mining';
  if (nameLower.includes('fish')) return 'fishing';
  if (nameLower.includes('farm')) return 'farming';
  if (nameLower.includes('slayer')) return 'slayer';
  if (nameLower.includes('grand exchange')) return 'grand_exchange';
  
  return 'poi';
}

/**
 * Convert hex color to CSS color string
 */
function colorToCSS(color: number): string {
  const r = (color >> 16) & 0xFF;
  const g = (color >> 8) & 0xFF;
  const b = color & 0xFF;
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Load world map data from JSON file
 */
export async function loadWorldMapData(): Promise<WorldMapData> {
  const response = await fetch('/worldmap_data_full.json');
  if (!response.ok) {
    throw new Error(`Failed to load worldmap data: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Convert world map labels to map markers
 */
export function labelsToMarkers(labels: WorldMapLabel[]): MapMarker[] {
  return labels.map((label, index) => {
    const coords = osrsWorldToLeaflet(label.worldX, label.worldY, label.plane);
    
    // Clean up HTML entities in name, but preserve <br> tags
    const name = label.name
      .replace(/\\u003cbr\\u003e/g, '<br>')
      .replace(/\\u0027/g, "'");
    
    return {
      id: `label-${index}`,
      name,
      lat: coords.lat,
      lng: coords.lng,
      type: 'label',
      spriteId: label.spriteId,
      category: label.category,
      textColor: label.textColor,
      textScale: label.textScale,
      plane: label.plane,
      description: `${name} at ${label.worldX}, ${label.worldY}`
    };
  });
}

/**
 * Convert world map icons to map markers
 */
export function iconsToMarkers(icons: WorldMapIcon[]): MapMarker[] {
  return icons.map((icon, index) => {
    const coords = osrsWorldToLeaflet(icon.worldX, icon.worldY, icon.plane);
    
    const name = icon.name
      .replace(/\\u003cbr\\u003e/g, ' ')
      .replace(/<br>/g, ' ')
      .replace(/\\u0027/g, "'");
    
    const iconType = getIconType(name);
    
    return {
      id: `icon-${index}`,
      name,
      lat: coords.lat,
      lng: coords.lng,
      type: iconType,
      spriteId: icon.spriteId,
      category: icon.category,
      membersOnly: icon.membersOnly,
      plane: icon.plane,
      description: `${name} at ${icon.worldX}, ${icon.worldY}${icon.membersOnly ? ' (Members)' : ''}`
    };
  });
}

/**
 * Load and convert all worldmap data to markers
 */
export async function loadAllMarkers(): Promise<MapMarker[]> {
  const data = await loadWorldMapData();
  
  const labelMarkers = labelsToMarkers(data.labels);
  const iconMarkers = iconsToMarkers(data.icons);
  
  return [...labelMarkers, ...iconMarkers];
}

/**
 * Filter markers by plane
 */
export function filterByPlane(markers: MapMarker[], plane: number): MapMarker[] {
  return markers.filter(m => (m.plane ?? 0) === plane);
}

/**
 * Filter markers by type
 */
export function filterByType(markers: MapMarker[], types: string[]): MapMarker[] {
  return markers.filter(m => types.includes(m.type));
}

/**
 * Search markers by name
 */
export function searchMarkers(markers: MapMarker[], query: string): MapMarker[] {
  const lowerQuery = query.toLowerCase();
  return markers.filter(m => m.name.toLowerCase().includes(lowerQuery));
}
