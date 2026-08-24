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
  const popupWrapperRef = useRef<HTMLDivElement | null>(null);
  // Anchor the popup to the icon's geographic position (not a frozen screen
  // point) so it pans/zooms together with the map. The screen position is
  // computed ONCE at click time for the initial render; from then on the
  // popup is re-positioned by directly writing to the DOM on map move —
  // calling setState per move event caused a React re-render every frame
  // and made panning stutter.
  const [popupScreen, setPopupScreen] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!popupIcon) return;
    const project = () => {
      if (!popupWrapperRef.current) return;
      const container = popupWrapperRef.current.querySelector('.icon-popup-container') as HTMLElement | null;
      if (!container || !popupIcon) return;
      const ll = (popupIcon as any)._anchorLatLng;
      if (!ll) return;
      const p = map.latLngToContainerPoint([ll.lat, ll.lng]);
      container.style.left = `${p.x}px`;
      container.style.top = `${p.y}px`;
    };
    project();
    let raf = 0;
    const onMove = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; project(); });
    };
    map.on('move zoom viewreset resize', onMove);
    return () => {
      map.off('move zoom viewreset resize', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [map, popupIcon]);

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
  // The plugin's plain redraw() repaints icons at current viewport pixel
  // positions WITHOUT first re-anchoring the canvas to the new layer-space
  // origin (that re-anchor only happens in its internal _reset). Repainting
  // against a stale anchor offsets every icon by exactly the pan/zoom drift,
  // accumulating with each move. Always go through the atomic sequence the
  // plugin itself uses on map movement: _reset (re-anchor + resize canvas)
  // then a clearing redraw.
  const safeRedraw = () => {
    const layer: any = layerRef.current;
    if (!layer || !layer._latlngMarkers || !map) return;
    if (typeof layer._reset !== 'function' || !layer._canvas) {
      return;
    }
    layer._reset();
    layer._redraw(true);
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

        // Pre-seed the plugin's spatial indexes. The library only creates
        // _markers/_latlngMarkers lazily inside addMarker(), but its own
        // moveend handler (_reset -> _redraw) dereferences them
        // unconditionally. Any pan/zoom before the first marker is added
        // crashed the redraw and blanked the canvas (icons disappeared).
        // The webpack bundle exposes rbush as window.rbush.
        const layer: any = layerRef.current;
        const Rbush = (window as any).rbush;
        if (!layer._latlngMarkers && Rbush) {
          layer._markers = new Rbush();
          layer._latlngMarkers = new Rbush();
          layer._latlngMarkers.dirty = 0;
          layer._latlngMarkers.total = 0;
        }

        // Defensive: wrap the plugin's _drawImage so a single broken image
        // (404, invalid data-URI) can never abort the repaint loop and blank
        // the whole layer — it's skipped silently instead.
        const nativeDrawImage = layer._drawImage.bind(layer);
        layer._drawImage = (marker: any, point: any) => {
          try {
            const img = marker?.canvas_img;
            if (!img || !img.complete || img.naturalWidth === 0) return;
            nativeDrawImage(marker, point);
          } catch {
            /* skip broken image; one bad icon must not kill the layer */
          }
        };

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
              // the map on pan/zoom. Initial screen point is computed here;
              // subsequent repositioning happens imperatively in the effect.
              const ll = markerData.getLatLng();
              const p = map.latLngToContainerPoint([ll.lat, ll.lng]);
              (iconData as any)._anchorLatLng = { lat: ll.lat, lng: ll.lng };
              setPopupScreen({ x: p.x, y: p.y });
              setPopupIcon(iconData);
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

      // Update all marker icon sizes. Icons are cached per URL+size: the
      // plugin's _drawMarker keys its image cache by iconUrl, so reusing a
      // shared L.icon instance per distinct (url, size) pair avoids
      // allocating thousands of duplicate icon objects on every zoomend.
      const iconCache = new Map<string, L.Icon>();
      const getIconFor = (iconPath: string) => {
        const key = `${iconPath}@${iconSize}`;
        let ic = iconCache.get(key);
        if (!ic) {
          ic = L.icon({
            iconUrl: iconPath,
            iconSize: [iconSize, iconSize],
            iconAnchor: [iconSize / 2, iconSize / 2],
          });
          iconCache.set(key, ic);
        }
        return ic;
      };

      iconsRef.current.forEach((marker, id) => {
        const iconData = (marker as any)._iconData;
        if (iconData) {
          marker.setIcon(getIconFor(iconData.iconPath));
        }
      });

      // Redraw canvas (guarded)
      safeRedraw();
      
      // Show canvas after zoom completes
      if (layerRef.current._canvas) {
        layerRef.current._canvas.style.opacity = '1';
      }
    };

    map.on('zoomstart', handleZoomStart);
    map.on('zoomend', updateIconSizes);
    // moveend is handled internally by the plugin (onAdd registers its own
    // _reset handler). Adding ours here caused double-repaints against a
    // stale canvas anchor — the source of the icon-position drift on pan.

    return () => {
      map.off('zoomstart', handleZoomStart);
      map.off('zoomend', updateIconSizes);
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
      setPopupScreen(null);
    };

    map.on('click', handleMapClick);

    return () => {
      map.off('click', handleMapClick);
    };
  }, [map]);

  return (
    <>
      {popupIcon && popupScreen && (
        <div ref={popupWrapperRef}>
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
              setPopupScreen(null);
            }}
          />
        </div>
      )}
    </>
  );
}
