'use client';

import { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
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
    fontSize = textScale === 0 ? 18 : 19; // Increased to 14/16
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
        const labelMarkers = labelsToMarkers(data.labels);
        
        // Log Lumbridge coordinates for debugging
        const lumbridge = labelMarkers.find(m => m.name === 'Lumbridge');
        if (lumbridge) {
          console.log('🏰 Lumbridge label position:', {
            name: lumbridge.name,
            leafletCoords: { lng: lumbridge.lng, lat: lumbridge.lat },
            description: lumbridge.description
          });
        }
        
        setLabels(labelMarkers);
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

  if (loading) {
    return null;
  }

  // Filter labels based on zoom level
  const visibleLabels = labels.filter(label => {
    const textScale = label.textScale ?? 1;
    
    if (zoom <= 2) {
      // Zoom 1-2: Only show textScale 2 (major locations - continents/regions)
      return textScale === 2;
    } else if (zoom >= 3 && zoom <= 4) {
      // Zoom 3-4: Only show textScale 1 (medium locations - cities)
      return textScale === 1;
    } else {
      // Zoom 5+: Show textScale 1 and 0 (cities + detailed locations)
      return textScale === 1 || textScale === 0;
    }
  });

  return (
    <>
      {visibleLabels.map((label) => (
        <Marker
          key={label.id}
          position={[label.lat, label.lng]}
          icon={createLabelIcon(label.name, label.textScale ?? 1, zoom)}
        >
        </Marker>
      ))}
    </>
  );
}
