'use client';

import { useEffect, useMemo, useState } from 'react';
import L from 'leaflet';
import { Marker, useMap } from 'react-leaflet';
import { loadWorldMapData, labelsToMarkers, type MapMarker } from '@/lib/worldMapData';

// Create a simple text label icon
function createLabelIcon(name: string, textScale: number, zoom: number): L.DivIcon {
  // Zoom 1-2: textScale 2 (large, yellowish)
  // Zoom 3-4: textScale 1 (normal, white)
  // Zoom 5+: textScale 1 and 0 (normal, white)
  let fontSize: number;
  let color: string;

  if (zoom <= 2 && textScale === 2) {
    fontSize = 18;
    color = '#FFD700'; // Yellow for major locations at low zoom
  } else {
    fontSize = textScale === 0 ? 18 : 19;
    color = 'white';
  }

  // Check if label has line breaks
  const hasLineBreaks = name.includes('<br>');
  const lines = hasLineBreaks ? name.split('<br>') : [name];

  // Estimate dimensions based on longest line and number of lines
  const longestLine = lines.reduce((a, b) => a.length > b.length ? a : b, '');
  const estimatedWidth = longestLine.length * fontSize * 0.6;
  const estimatedHeight = lines.length * fontSize * 1.3; // Account for line height

  return L.divIcon({
    className: 'worldmap-label',
    html: `<div style="
      font-family: 'RuneScape', sans-serif;
      font-size: ${fontSize}px;
      font-weight: bold;
      color: ${color};
      text-align: center;
      text-shadow: 1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black;
      white-space: ${hasLineBreaks ? 'normal' : 'nowrap'};
      pointer-events: none;
      user-select: none;
      line-height: 1.2;
    ">${name.replace(/<br>/g, '<br/>')}</div>`,
    iconSize: [estimatedWidth, estimatedHeight],
    iconAnchor: [estimatedWidth / 2, estimatedHeight / 2] // Center the icon
  });
}

export default function WorldMapLabels() {
  const [labels, setLabels] = useState<MapMarker[]>([]);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(5);
  const map = useMap();

  useEffect(() => {
    async function loadLabels() {
      try {
        const data = await loadWorldMapData();
        setLabels(labelsToMarkers(data.labels));
      } catch (error) {
        console.error('Failed to load worldmap labels:', error);
      } finally {
        setLoading(false);
      }
    }

    loadLabels();
  }, []);

  // Track zoom changes
  useEffect(() => {
    const handleZoom = () => {
      setZoom(map.getZoom());
    };

    map.on('zoomend', handleZoom);
    setZoom(map.getZoom()); // Set initial zoom

    return () => {
      map.off('zoomend', handleZoom);
    };
  }, [map]);

  /**
   * Performance-critical: labels render as DOM markers, which Leaflet must
   * reposition every animation frame during a pan. Rendering all 1,000+
   * labels at once makes every pan janky, so we viewport-cull: only labels
   * whose world position falls inside the current map bounds (+ margin) are
   * actually mounted. Recomputed per zoom change and on moveend — NOT on
   * every move event, which would thrash React during the drag itself.
   */
  const visibleLabels = useMemo(() => {
    if (loading || !labels.length) return [];

    const b = map.getBounds();
    const westLng = b.getWest();
    const eastLng = b.getEast();
    const southLat = b.getSouth();
    const northLat = b.getNorth();

    // Margin in Leaflet units so edge labels don't pop as you pan (≈ 1 tile).
    const marginX = 8;
    const marginY = 64;

    return labels.filter(label => {
      const ts = label.textScale ?? 1;

      // Existing zoom-based importance filter
      let passesZoom: boolean;
      if (zoom <= 2) {
        passesZoom = ts === 2;
      } else if (zoom >= 3 && zoom <= 4) {
        passesZoom = ts === 1;
      } else {
        passesZoom = ts === 1 || ts === 0;
      }
      if (!passesZoom) return false;

      // Viewport culling
      return (
        label.lng >= westLng - marginX &&
        label.lng <= eastLng + marginX &&
        label.lat >= southLat - marginY &&
        label.lat <= northLat + marginY
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labels, loading, zoom, (() => { try { return JSON.stringify(map.getBounds()); } catch { return ''; } })()]);

  if (loading) {
    return null;
  }

  return (
    <>
      {visibleLabels.map((label) => (
        <Marker
          key={label.id}
          position={[label.lat, label.lng]}
          icon={createLabelIcon(label.name, label.textScale ?? 1, zoom)}
          interactive={false}
        >
        </Marker>
      ))}
    </>
  );
}
