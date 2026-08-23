/**
 * World Map Data Loader
 * Loads and processes worldmap data extracted from OSRS cache
 */

import { osrsWorldToLeaflet, LeafletCoords } from './coordinates';
import { MapIcon } from '@/types/mapIcon';

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
  placements?: IconPlacement[];
  stats: {
    totalElements: number;
    elementsWithLabels: number;
    elementsWithIcons: number;
    totalAreas: number;
    intermapLinkCount: number;
    categories: Record<number, string>;
  };
}

/**
 * A concrete icon position extracted from the game cache. Sourced from an
 * official worldmap element ("element") or from an object placement with a
 * mapAreaId -> area -> sprite chain ("object"). Rendered using the sprite
 * PNG at /map_sprites/{spriteId}.png.
 */
export interface IconPlacement {
  name: string;
  worldX: number;
  worldY: number;
  plane: number;
  spriteId: number;
  membersOnly?: boolean;
  source?: 'object' | 'element';
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

let spriteMappingCache: unknown = null;

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
 * Convert cache-extracted icon placements to MapIcon format for CanvasIconLayer.
 * Each placement renders the actual game sprite PNG exported next to the data.
 */
export async function loadWorldMapPlacementsAsIcons(): Promise<MapIcon[]> {
  const data = await loadWorldMapData();

  // Sprite ID -> world map key name (matched against the OSRS wiki icon set;
  // regenerated by scripts/match_sprite_names.py on each tile run).
  let spriteNames: Record<string, string> = {};
  try {
    const res = await fetch('/map_sprite_names.json');
    if (res.ok) spriteNames = await res.json();
  } catch {
    // names are optional polish; icons still render without them
  }

  const icons: MapIcon[] = [];
  let index = 0;
  // Sprite IDs 1534 (dungeon map link) and 1535 (map link) are navigation
  // markers already covered by the dedicated intermap-links system
  // (loadWorldMapAsIcons), which carries real linkDestination coordinates.
  // Rendering them here too would stack dead icons over working links.
  const LINK_SPRITES = new Set([1534, 1535]);
  for (const p of data.placements ?? []) {
    if (LINK_SPRITES.has(p.spriteId)) continue;
    const coords = osrsWorldToLeaflet(p.worldX, p.worldY, p.plane);
    const rawName = spriteNames[String(p.spriteId)] || p.name || `Icon ${p.spriteId}`;
    const name = rawName
      .replace(/\\u003cbr\\u003e/g, ' ')
      .replace(/<br>/g, ' ')
      .replace(/\\u0027/g, "'");
    icons.push({
      id: `wm-${index++}`,
      position: { lng: coords.lng, lat: coords.lat },
      iconPath: `/map_sprites/${p.spriteId}.png`,
      label: name,
      plane: p.plane,
      createdAt: 0,
    });
  }
  return icons;
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
