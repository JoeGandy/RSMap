/**
 * OSRS Cache Color Utilities
 * 
 * Handles loading and converting OSRS cache colors from HSL format to RGB hex colors.
 * OSRS HSL format: hue<<10 | saturation<<7 | lightness
 */

interface UnderlayDefinition {
  id: number;
  color: number;
}

interface OverlayDefinition {
  id: number;
  color: number;
  hideUnderlay: boolean;
  texture?: number;
}

// Cache for color definitions
let underlayDefinitions: Map<number, UnderlayDefinition> = new Map();
let overlayDefinitions: Map<number, OverlayDefinition> = new Map();
let colorsInitialized = false;

/**
 * Convert OSRS HSL format to RGB hex color
 * OSRS HSL format: hue<<10 | saturation<<7 | lightness
 * - Hue: 0-63 (6 bits) -> maps to 0-360 degrees via (hue/63)*360
 * - Saturation: 0-7 (3 bits) -> maps to 0-100% via (sat/7)*100
 * - Lightness: 0-127 (7 bits) -> maps to 0-100% via (lum/170)*100, with special case: lum==127 -> 100%
 */
export function osrsHslToRgbHex(hsl: number): string {
  // Extract components from packed HSL
  const hue = (hsl >> 10) & 0x3F; // 6 bits
  const saturation = (hsl >> 7) & 0x07; // 3 bits
  const lightness = hsl & 0x7F; // 7 bits
  
  // Convert to standard HSL ranges
  const h = (hue / 63) * 360;
  const s = (saturation / 7) * 100;
  const l = lightness === 127 ? 100 : (lightness / 170) * 100;
  
  // Convert HSL to RGB
  const c = (1 - Math.abs(2 * (l / 100) - 1)) * (s / 100);
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = (l / 100) - c / 2;
  
  let r = 0, g = 0, b = 0;
  
  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  
  // Convert to 0-255 range and format as hex
  const red = Math.round((r + m) * 255);
  const green = Math.round((g + m) * 255);
  const blue = Math.round((b + m) * 255);
  
  return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
}

/**
 * Initialize color definitions from cache data
 * In a real implementation, this would load from osrscachereader
 */
export async function initializeColors(): Promise<void> {
  if (colorsInitialized) return;
  
  try {
    // For now, we'll use some default colors as placeholders
    // In a real implementation, you would use osrscachereader here
    
    // Add some common underlay colors (grass, dirt, water, etc.)
    underlayDefinitions.set(1, { id: 1, color: 0x558B2F }); // Grass
    underlayDefinitions.set(2, { id: 2, color: 0x8D6E63 }); // Dirt
    underlayDefinitions.set(3, { id: 3, color: 0x1976D2 }); // Water
    underlayDefinitions.set(4, { id: 4, color: 0x616161 }); // Stone
    
    // Add some common overlay colors (roads, buildings, etc.)
    overlayDefinitions.set(1, { id: 1, color: 0x795548, hideUnderlay: false }); // Road
    overlayDefinitions.set(2, { id: 2, color: 0x424242, hideUnderlay: true }); // Building
    overlayDefinitions.set(3, { id: 3, color: 0x8BC34A, hideUnderlay: false }); // Path
    
    colorsInitialized = true;
  } catch (error) {
    console.error('Failed to initialize cache colors:', error);
    colorsInitialized = true; // Set to true to prevent infinite retries
  }
}

/**
 * Get underlay color by ID
 */
export function getUnderlayColor(id: number): string {
  const definition = underlayDefinitions.get(id);
  if (!definition) {
    return '#558B2F'; // Default grass color
  }
  return osrsHslToRgbHex(definition.color);
}

/**
 * Get overlay color by ID
 */
export function getOverlayColor(id: number): string {
  const definition = overlayDefinitions.get(id);
  if (!definition) {
    return '#795548'; // Default overlay color
  }
  return osrsHslToRgbHex(definition.color);
}

/**
 * Get overlay definition by ID
 */
export function getOverlayDefinition(id: number): OverlayDefinition | undefined {
  return overlayDefinitions.get(id);
}

/**
 * Blend overlay color with underlay color
 */
export function blendColors(overlayColor: string, underlayColor: string, alpha: number = 0.7): string {
  // Simple alpha blending
  const overlay = parseInt(overlayColor.slice(1), 16);
  const underlay = parseInt(underlayColor.slice(1), 16);
  
  const overlayR = (overlay >> 16) & 0xFF;
  const overlayG = (overlay >> 8) & 0xFF;
  const overlayB = overlay & 0xFF;
  
  const underlayR = (underlay >> 16) & 0xFF;
  const underlayG = (underlay >> 8) & 0xFF;
  const underlayB = underlay & 0xFF;
  
  const blendedR = Math.round(overlayR * alpha + underlayR * (1 - alpha));
  const blendedG = Math.round(overlayG * alpha + underlayG * (1 - alpha));
  const blendedB = Math.round(overlayB * alpha + underlayB * (1 - alpha));
  
  return `#${blendedR.toString(16).padStart(2, '0')}${blendedG.toString(16).padStart(2, '0')}${blendedB.toString(16).padStart(2, '0')}`;
}
