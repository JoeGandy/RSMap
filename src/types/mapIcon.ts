export interface MapIcon {
  id: string;
  position: {
    lng: number;
    lat: number;
  };
  iconPath: string; // Path to icon in public/map_icons
  label: string;
  plane: number;
  createdAt: number;
  linkedIconId?: string; // ID of linked icon (for dungeon entrances/exits)
}

export interface MapIconsData {
  icons: MapIcon[];
  version: number;
}
