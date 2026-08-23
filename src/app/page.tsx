'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { LeafletCoords } from '@/lib/coordinates';
import IronRivetPanel from '@/components/IronRivetPanel';
import OSRSButton from '@/components/OSRSButton';
import { MapIcon } from '@/types/mapIcon';
import { loadWorldMapAsIcons } from '@/lib/convertWorldMapToIcons';
import { loadWorldMapPlacementsAsIcons } from '@/lib/worldMapData';

// Dynamically import the map component to avoid SSR issues
const OSRSMap = dynamic(() => import('@/components/OSRSMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
      <div className="text-gray-600">Loading OSRS World Map...</div>
    </div>
  ),
});

export default function Home() {
  const [clickedCoords, setClickedCoords] = useState<LeafletCoords | null>(null);
  const [currentPlane, setCurrentPlane] = useState(0);
  const [mapIcons, setMapIcons] = useState<MapIcon[]>([]);
  const mapRef = useRef<any>(null);

  // Load icons extracted from the OSRS game cache: every object placement /
  // worldmap element that carries an official map sprite, plus intermap links.
  // Regenerated monthly alongside the map tiles - no manual icon management.
  useEffect(() => {
    const loadIcons = async () => {
      try {
        const [placementIcons, linkIcons] = await Promise.all([
          loadWorldMapPlacementsAsIcons(),
          loadWorldMapAsIcons(true),
        ]);
        const allIcons = [...placementIcons, ...linkIcons];
        setMapIcons(allIcons);
        console.log(
          `✅ Loaded ${placementIcons.length} cache icon placements + ${linkIcons.length} intermap links = ${allIcons.length} total`
        );
      } catch (error) {
        console.error('Failed to load worldmap icons:', error);
        setMapIcons([]);
      }
    };

    loadIcons();
  }, []);

  const handleCoordinateClick = (coords: LeafletCoords) => {
    setClickedCoords(coords);
  };

  const handleIconClick = (icon: MapIcon) => {
    // Jump to the destination of an intermap link (stairs/ladders between planes etc.)
    if (icon.linkDestination && mapRef.current) {
      if (icon.linkDestination.plane !== currentPlane) {
        setCurrentPlane(icon.linkDestination.plane);
      }
      mapRef.current.setView(
        [icon.linkDestination.lat, icon.linkDestination.lng],
        mapRef.current.getZoom()
      );
    }
  };

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.zoomOut();
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1 flex">
        <div className="flex-1 relative">
          <OSRSMap 
            onCoordinateClick={handleCoordinateClick} 
            plane={currentPlane}
            onPlaneChange={setCurrentPlane}
            onMapReady={(map) => { mapRef.current = map; }}
            icons={mapIcons}
            onIconClick={handleIconClick}
          />
        </div>
      </div>
      <IronRivetPanel className="min-h-8 w-full" style={{ padding: '8px 12px' }}>
        <div className="flex items-center justify-between">
          <div className="text-sm text-white font-semibold">OSRS World Map</div>
          
          <div className="flex items-center gap-4">
            {/* Plane Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-300">Plane:</span>
              <div className="flex items-center gap-1">
                <OSRSButton 
                  onClick={() => setCurrentPlane(Math.max(0, currentPlane - 1))}
                  disabled={currentPlane <= 0}
                  className="!min-h-[28px] !px-2"
                >
                  −
                </OSRSButton>
                <span className="text-white font-bold min-w-[20px] text-center">{currentPlane}</span>
                <OSRSButton 
                  onClick={() => setCurrentPlane(Math.min(3, currentPlane + 1))}
                  disabled={currentPlane >= 3}
                  className="!min-h-[28px] !px-2"
                >
                  +
                </OSRSButton>
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-300">Zoom:</span>
              <div className="flex items-center gap-1">
                <OSRSButton 
                  onClick={handleZoomOut}
                  className="!min-h-[28px] !px-2"
                >
                  −
                </OSRSButton>
                <OSRSButton 
                  onClick={handleZoomIn}
                  className="!min-h-[28px] !px-2"
                >
                  +
                </OSRSButton>
              </div>
            </div>

            {clickedCoords && (
              <div className="text-xs text-gray-400 hidden md:block">
                {clickedCoords.lat.toFixed(1)}, {clickedCoords.lng.toFixed(1)}
              </div>
            )}
          </div>
        </div>
      </IronRivetPanel>
    </main>
  );
}
