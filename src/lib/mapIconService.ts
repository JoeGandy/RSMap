import { MapIcon, MapIconsData } from '@/types/mapIcon';

const STORAGE_KEY = 'osrs_map_icons';
const ICONS_FILE_PATH = '/map_data.json';

/**
 * Service for managing map icons
 * Stores icons in localStorage and can export/import from JSON
 */
export class MapIconService {
  /**
   * Load icons from localStorage
   */
  static loadIcons(): MapIcon[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data: MapIconsData = JSON.parse(stored);
        return data.icons;
      }
    } catch (error) {
      console.error('Error loading map icons:', error);
    }
    
    return [];
  }

  /**
   * Save icons to localStorage
   */
  static saveIcons(icons: MapIcon[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      const data: MapIconsData = {
        icons,
        version: 1
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving map icons:', error);
    }
  }

  /**
   * Add a new icon
   */
  static addIcon(icon: Omit<MapIcon, 'id' | 'createdAt'>): MapIcon {
    const newIcon: MapIcon = {
      ...icon,
      id: `icon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: Date.now()
    };
    
    const icons = this.loadIcons();
    icons.push(newIcon);
    this.saveIcons(icons);
    
    return newIcon;
  }

  /**
   * Remove an icon by ID
   */
  static removeIcon(id: string): void {
    const icons = this.loadIcons();
    const filtered = icons.filter(icon => icon.id !== id);
    this.saveIcons(filtered);
  }

  /**
   * Update an icon
   */
  static updateIcon(id: string, updates: Partial<MapIcon>): void {
    const icons = this.loadIcons();
    const index = icons.findIndex(icon => icon.id === id);
    
    if (index !== -1) {
      icons[index] = { ...icons[index], ...updates };
      this.saveIcons(icons);
    }
  }

  /**
   * Get icons for a specific plane
   */
  static getIconsForPlane(plane: number): MapIcon[] {
    return this.loadIcons().filter(icon => icon.plane === plane);
  }

  /**
   * Export icons to JSON (for download)
   */
  static exportToJSON(): string {
    const data: MapIconsData = {
      icons: this.loadIcons(),
      version: 1
    };
    return JSON.stringify(data, null, 2);
  }

  /**
   * Import icons from JSON
   */
  static importFromJSON(jsonString: string): void {
    try {
      const data: MapIconsData = JSON.parse(jsonString);
      this.saveIcons(data.icons);
    } catch (error) {
      console.error('Error importing map icons:', error);
      throw new Error('Invalid JSON format');
    }
  }

  /**
   * Clear all icons
   */
  static clearAll(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
  }
}
