'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { LatLngBounds, CRS } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { leafletToTile, formatTile, leafletToRegion, formatRegion, LeafletCoords } from '@/lib/coordinates';
import PlaneSelector from './PlaneSelector';

// Back to simple CRS
const OSRSCRS = CRS.Simple;

interface OSRSMapProps {
  onCoordinateClick?: (coords: LeafletCoords) => void;
  plane?: number;
  onPlaneChange?: (plane: number) => void;
}

function MapClickHandler({ onCoordinateClick }: { onCoordinateClick?: (coords: LeafletCoords) => void }) {
  useMapEvents({
    click: (e) => {
      const coords = { lng: e.latlng.lng, lat: e.latlng.lat };
      if (onCoordinateClick) {
        onCoordinateClick(coords);
      }
      
      const tileCoords = leafletToTile(coords);
      const regionCoords = leafletToRegion(coords);
      
      // Calculate what tile should be requested with direct mapping
      const tileX = Math.floor(coords.lng);
      const tileY = Math.floor(coords.lat);
      
      console.log('Clicked coordinates:', coords);
      console.log('Expected tile request:', `5/${tileX}/${tileY}.png`);
      console.log('Region:', formatRegion(regionCoords));
      console.log('Tile:', formatTile(tileCoords));
    },
  });
  
  return null;
}

export default function OSRSMap({ 
  onCoordinateClick, 
  plane = 0,
  onPlaneChange
}: OSRSMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
        <div className="text-gray-600">Loading map...</div>
      </div>
    );
  }

  // Map bounds and center - centered on Lumbridge
  const bounds = new LatLngBounds([0,0], [-1428, 405]);
  const center: [number, number] = [-1173, 273]; // Lumbridge coordinates (lat, lng)

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={center}
        zoom={4}
        minZoom={1}
        maxZoom={6}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        crs={OSRSCRS}
        className="w-full h-full"
        zoomControl={true}
        attributionControl={false}
      >
        {/* OSRS tile layers - serve directly from static files */}
        <>
          {/* Always show all planes from 0 up to current plane */}
          {[0, 1, 2, 3].map(p => {
            if (p <= plane) {
              return (
                <TileLayer
                  key={`plane-${p}`}
                  url={`https://joegandy.github.io/RSMap/tiles/${p}/{z}/{x}/{y}.png`}
                  tileSize={256}
                  noWrap={true}
                  opacity={1}
                  attribution="OSRS Map Data"
                />
              );
            }
            return null;
          })}
        </>
        
        <MapClickHandler onCoordinateClick={onCoordinateClick} />
      </MapContainer>
      
      {/* Plane Selector Overlay */}
      {onPlaneChange && (
        <PlaneSelector 
          currentPlane={plane} 
          onPlaneChange={onPlaneChange} 
        />
      )}
    </div>
  );
}
