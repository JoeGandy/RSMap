'use client';

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { LeafletCoords } from '@/lib/coordinates';

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
  const mapRef = useRef<any>(null);

  const handleCoordinateClick = (coords: LeafletCoords) => {
    setClickedCoords(coords);
  };

  const handleLocationSearch = (coords: LeafletCoords) => {
    // This would be used to pan the map to the searched location
    // For now, we'll just set it as clicked coordinates
    setClickedCoords(coords);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Map Container with Sidebar */}
      <div className="flex-1 flex">        
        {/* Map */}
        <div className="flex-1 relative">
          <OSRSMap 
            onCoordinateClick={handleCoordinateClick} 
            plane={currentPlane}
            onPlaneChange={setCurrentPlane}
          />
        </div>
      </div>
    </main>
  );
}
