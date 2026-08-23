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
  // Anchor the popup to the icon's geographic position (not a frozen screen
  // point) so it pans/zooms together with the map.
  const [popupLatLng, setPopupLatLng] = useState<{ lat: number; lng: number } | null>(null);

  // Project the anchored geographic point to a screen position whenever the
  // map moves or zooms, so the popup rides along with its icon.
  const [popupScreen, setPopupScreen] = useState<{ x: number; y: number } | null>(null);
  useEffect(() => {
    if (!popupLatLng) {
      setPopupScreen(null);
      return;
    }
    const project = () => {
      const p = map.latLngToContainerPoint([popupLatLng.lat, popupLatLng.lng]);
      setPopupScreen({ x: p.x, y: p.y });
    };
    project();
    map.on('move zoom viewreset resize', project);
    return () => {
      map.off('move zoom viewreset resize', project);
    };
  }, [map, popupLatLng]);

  // Calculate icon size based on zoom
  const getIconSize = (zoom: number) => {
    const maxZoom = 6;
    const baseSize = 25;

    const zoomDiff = maxZoom - zoom;
    const scale = Math.max(0.25, 1 - (zoomDiff * 0.35));
    
    return baseSize * scale;
  };

  // leaflet-canvas-marker lazily creates its internal _latlngMarkers index on
  // the first addMarker() call, but redraw() dereferences it unconditionally.
  // Calling redraw() before any marker exists throws
  // "can't access property \"dirty\", n._latlngMarkers is undefined" and can
  // take down the whole page on load. Guard all redraw call sites until the
  // index exists.
  const safeRedraw = () => {
    const layer = layerRef.current;
    if (!layer || !layer._latlngMarkers) return;
    layer.redraw();
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
              // Anchor popup to the icon's geographic position so it tracks
              // the map on pan/zoom; convert to screen point for rendering.
              const ll = markerData.getLatLng();
              setPopupIcon(iconData);
              setPopupLatLng({ lat: ll.lat, lng: ll.lng });
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

    // Redraw the canvas (guarded - index may not exist before first marker)
    safeRedraw();
    
    // Ensure canvas is visible
    if (layerRef.current._canvas) {
      layerRef.current._canvas.style.opacity = '1';
    }
  }, [icons, plane, map, isLibraryLoaded]);

  // Update icon sizes on zoom and handle map movement
  useEffect(() => {
    const handleZoomStart = () => {
      if (!layerRef.current?._canvas) return;
      
      // Hide canvas during zoom animation
      layerRef.current._canvas.style.opacity = '0';
    };

    const updateIconSizes = () => {
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

      // Redraw canvas (guarded)
      safeRedraw();
      
      // Show canvas after zoom completes
      if (layerRef.current._canvas) {
        layerRef.current._canvas.style.opacity = '1';
      }
    };

    const handleMoveEnd = () => {
      if (!layerRef.current) return;
      
      // Redraw canvas after pan (guarded)
      safeRedraw();
    };

    map.on('zoomstart', handleZoomStart);
    map.on('zoomend', updateIconSizes);
    map.on('moveend', handleMoveEnd);

    return () => {
      map.off('zoomstart', handleZoomStart);
      map.off('zoomend', updateIconSizes);
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
      setPopupLatLng(null);
    };

    map.on('click', handleMapClick);

    return () => {
      map.off('click', handleMapClick);
    };
  }, [map]);

  return (
    <>
      {popupIcon && popupScreen && (
        <IconPopup
          icon={popupIcon}
          position={popupScreen}
          onEdit={onIconEdit}
          onDelete={onIconDelete}
          onCopy={onIconCopy}
          onMove={onIconMove}
          onClick={onIconClick}
          onClose={() => {
            setPopupIcon(null);
            setPopupLatLng(null);
          }}
        />
      )}
    </>
  );
}
