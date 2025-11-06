'use client';

import { useEffect, useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapIcon } from '@/types/mapIcon';
import IconPopup from './IconPopup';

// Extend Leaflet types for canvas markers
declare module 'leaflet' {
  function canvasIconLayer(options?: any): any;
  
  interface MarkerOptions {
    iconData?: MapIcon;
  }
}

interface CanvasIconLayerProps {
  icons: MapIcon[];
  plane: number;
  onIconClick?: (icon: MapIcon) => void;
  onIconEdit?: (icon: MapIcon) => void;
  onIconDelete?: (id: string) => void;
  onIconCopy?: (icon: MapIcon) => void;
  onIconMove?: (icon: MapIcon) => void;
}

export default function CanvasIconLayer({
  icons,
  plane,
  onIconClick,
  onIconEdit,
  onIconDelete,
  onIconCopy,
  onIconMove
}: CanvasIconLayerProps) {
  const map = useMap();
  const layerRef = useRef<any>(null);
  const iconsRef = useRef<Map<string, any>>(new Map());
  const [isLibraryLoaded, setIsLibraryLoaded] = useState(false);
  const [popupIcon, setPopupIcon] = useState<MapIcon | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ x: number; y: number } | null>(null);

  // Calculate icon size based on zoom
  const getIconSize = (zoom: number) => {
    const baseZoom = 5;
    const baseSize = 15;
    const scale = Math.pow(2, zoom - baseZoom);
    return baseSize * scale;
  };

  // Initialize canvas layer
  useEffect(() => {
    // Dynamically import the canvas marker library (client-side only)
    const loadCanvasMarkers = async () => {
      if (typeof window !== 'undefined') {
        await import('leaflet-canvas-marker/dist/leaflet.canvas-markers');
      }
    };
    
    loadCanvasMarkers().then(() => {
      if (!layerRef.current && (L as any).canvasIconLayer) {
        layerRef.current = (L as any).canvasIconLayer({}).addTo(map);
        
        // Hide the marker img elements - we only want canvas rendering
        // The library creates img elements for click detection, but they cause ghost icons
        // We hide them and rely on the canvas click listener instead
        const style = document.createElement('style');
        style.id = 'canvas-marker-hide-imgs';
        style.textContent = '.leaflet-marker-icon.leaflet-zoom-hide { display: none !important; }';
        if (!document.getElementById('canvas-marker-hide-imgs')) {
          document.head.appendChild(style);
        }
        
    
        // Add click listener
        layerRef.current.addOnClickListener((e: any, data: any) => {
          if (data && data.length > 0) {
            const markerData = data[0].data;
            const iconData = markerData._iconData;
            
            if (iconData) {
              // Show popup at click position
              setPopupIcon(iconData);
              setPopupPosition({ x: e.containerPoint.x, y: e.containerPoint.y });
            }
          }
        });
        
        setIsLibraryLoaded(true);
      }
    });

    return () => {
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
        layerRef.current = null;
      }
    };
  }, [map]);

  // Update markers when icons or plane changes
  useEffect(() => {
    if (!layerRef.current || !isLibraryLoaded) return;

    const zoom = map.getZoom();
    const iconSize = getIconSize(zoom);

    // Filter icons for current plane
    const planeIcons = icons.filter(icon => icon.plane === plane);

    // Remove ALL existing markers first (to handle plane changes properly)
    iconsRef.current.forEach((marker, id) => {
      layerRef.current.removeMarker(marker, false);
    });
    iconsRef.current.clear();

    // Add all icons for current plane
    planeIcons.forEach(icon => {
      // Create Leaflet icon
      const leafletIcon = L.icon({
        iconUrl: icon.iconPath,
        iconSize: [iconSize, iconSize],
        iconAnchor: [iconSize / 2, iconSize / 2],
      });

      // Add new marker
      const marker = L.marker([icon.position.lat, icon.position.lng], {
        icon: leafletIcon
      });
      
      // Store icon data on the marker instance
      (marker as any)._iconData = icon;
      
      layerRef.current.addMarker(marker);
      iconsRef.current.set(icon.id, marker);
    });

    // Redraw the canvas
    layerRef.current.redraw();
  }, [icons, plane, map, isLibraryLoaded]);

  // Update icon sizes on zoom and handle map movement
  useEffect(() => {
    const handleZoomEnd = () => {
      if (!layerRef.current) return;

      const zoom = map.getZoom();
      const iconSize = getIconSize(zoom);

      // Update all marker icon sizes
      iconsRef.current.forEach((marker, id) => {
        const iconData = (marker as any)._iconData;
        if (iconData) {
          const newIcon = L.icon({
            iconUrl: iconData.iconPath,
            iconSize: [iconSize, iconSize],
            iconAnchor: [iconSize / 2, iconSize / 2],
          });
          marker.setIcon(newIcon);
        }
      });

      // Redraw canvas (library should handle clearing)
      layerRef.current.redraw();
    };

    const handleMoveEnd = () => {
      if (!layerRef.current) return;
      
      // Redraw canvas (library should handle clearing)
      layerRef.current.redraw();
    };

    map.on('zoomend', handleZoomEnd);
    map.on('moveend', handleMoveEnd);

    return () => {
      map.off('zoomend', handleZoomEnd);
      map.off('moveend', handleMoveEnd);
    };
  }, [map]);

  // Close popup when clicking on map (but not on the popup itself)
  useEffect(() => {
    const handleMapClick = (e: any) => {
      // Check if click target is the popup or its children
      const target = e.originalEvent?.target;
      if (target && target.closest('.icon-popup-container')) {
        // Click was on popup, don't close
        return;
      }
      
      setPopupIcon(null);
      setPopupPosition(null);
    };

    map.on('click', handleMapClick);

    return () => {
      map.off('click', handleMapClick);
    };
  }, [map]);

  return (
    <>
      {popupIcon && popupPosition && (
        <IconPopup
          icon={popupIcon}
          position={popupPosition}
          onEdit={onIconEdit}
          onDelete={onIconDelete}
          onCopy={onIconCopy}
          onMove={onIconMove}
          onClick={onIconClick}
          onClose={() => {
            setPopupIcon(null);
            setPopupPosition(null);
          }}
        />
      )}
    </>
  );
}
