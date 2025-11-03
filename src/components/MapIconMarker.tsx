'use client';

import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapIcon } from '@/types/mapIcon';
import { useEffect, useState } from 'react';

interface MapIconMarkerProps {
  icon: MapIcon;
  onDelete?: (id: string) => void;
  onCopy?: (icon: MapIcon) => void;
  onMove?: (icon: MapIcon) => void;
  onEdit?: (icon: MapIcon) => void;
  onClick?: (icon: MapIcon) => void;
}

export default function MapIconMarker({ icon, onDelete, onCopy, onMove, onEdit, onClick }: MapIconMarkerProps) {
  const map = useMap();
  const [iconSize, setIconSize] = useState(24);

  // Update icon size based on zoom level
  useEffect(() => {
    const updateSize = () => {
      const zoom = map.getZoom();
      // Scale icon size with zoom: 15px at max zoom (6)
      // Each zoom level doubles/halves the size
      const baseZoom = 5; // Max zoom level
      const baseSize = 15; // Size at max zoom
      const scale = Math.pow(2, zoom - baseZoom);
      setIconSize(baseSize * scale);
    };

    updateSize();
    // Update on zoomstart so animation begins immediately with Leaflet's zoom
    map.on('zoomstart', updateSize);
    map.on('zoomend', updateSize);

    return () => {
      map.off('zoomstart', updateSize);
      map.off('zoomend', updateSize);
    };
  }, [map]);

  // Create custom icon with dynamic size
  const customIcon = L.icon({
    iconUrl: icon.iconPath,
    iconSize: [iconSize, iconSize],
    iconAnchor: [iconSize / 2, iconSize / 2],
    popupAnchor: [0, -iconSize / 2],
  });

  return (
    <Marker 
      position={[icon.position.lat, icon.position.lng]} 
      icon={customIcon}
    >
      <Popup autoPan={false}>
        <div className="text-sm">
          <div className="font-bold mb-1">{icon.label}</div>
          <div className="text-xs text-gray-600 mb-2">
            Plane {icon.plane} | ({icon.position.lng.toFixed(2)}, {icon.position.lat.toFixed(2)})
          </div>
          <div className="flex flex-wrap gap-2">
            {icon.linkedIconId && onClick && (
              <button
                onClick={() => onClick(icon)}
                className="text-xs bg-cyan-500 text-white px-2 py-1 rounded hover:bg-cyan-600"
              >
                🔗 Go to Link
              </button>
            )}
            {onEdit && (
              <button
                onClick={() => onEdit(icon)}
                className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              >
                Edit
              </button>
            )}
            {onMove && (
              <button
                onClick={() => onMove(icon)}
                className="text-xs bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600"
              >
                Move
              </button>
            )}
            {onCopy && (
              <button
                onClick={() => onCopy(icon)}
                className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                Copy
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(icon.id)}
                className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
