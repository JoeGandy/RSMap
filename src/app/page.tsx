'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { LeafletCoords } from '@/lib/coordinates';
import IronRivetPanel from '@/components/IronRivetPanel';
import OSRSButton from '@/components/OSRSButton';
import AddIconDialog from '@/components/AddIconDialog';
import EditIconDialog from '@/components/EditIconDialog';
import { MapIcon } from '@/types/mapIcon';
import { MapIconService } from '@/lib/mapIconService';

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
  const [addIconMode, setAddIconMode] = useState(false);
  const [showIconDialog, setShowIconDialog] = useState(false);
  const [pendingIconPosition, setPendingIconPosition] = useState<LeafletCoords | null>(null);
  const [mapIcons, setMapIcons] = useState<MapIcon[]>([]);
  const [copyingIcon, setCopyingIcon] = useState<MapIcon | null>(null);
  const [movingIcon, setMovingIcon] = useState<MapIcon | null>(null);
  const [editingIcon, setEditingIcon] = useState<MapIcon | null>(null);
  const [pendingDungeonLink, setPendingDungeonLink] = useState<MapIcon | null>(null);
  const mapRef = useRef<any>(null);

  // Load icons on mount - first from localStorage, then from public/map_data.json if empty
  useEffect(() => {
    const loadIcons = async () => {
      let icons = MapIconService.loadIcons();
      
      // If no icons in localStorage, try loading from public file
      if (icons.length === 0) {
        try {
          const response = await fetch('/map_data.json');
          if (response.ok) {
            const jsonString = await response.text();
            MapIconService.importFromJSON(jsonString);
            icons = MapIconService.loadIcons();
          }
        } catch (error) {
          console.log('No default map_data.json found, starting with empty icons');
        }
      }
      
      setMapIcons(icons);
    };
    
    loadIcons();
  }, []);

  const handleCoordinateClick = (coords: LeafletCoords) => {
    setClickedCoords(coords);
    
    // If placing linked icon (dungeon exit or map link pair)
    if (pendingDungeonLink) {
      // Determine what icon type to create based on the first icon
      const linkedIconPath = pendingDungeonLink.iconPath === '/map_icons/Dungeon_icon.png' 
        ? '/map_icons/Map_link_icon.png'  // Dungeon -> Map link
        : '/map_icons/Map_link_icon.png';  // Map link -> Map link
      
      // Create the linked icon at the new location
      const linkedIcon = MapIconService.addIcon({
        position: coords,
        iconPath: linkedIconPath,
        label: pendingDungeonLink.label,
        plane: currentPlane,
        linkedIconId: pendingDungeonLink.id
      });
      
      // Update the first icon to link back
      MapIconService.updateIcon(pendingDungeonLink.id, {
        linkedIconId: linkedIcon.id
      });
      
      setMapIcons(MapIconService.loadIcons());
      setPendingDungeonLink(null);
      return;
    }
    
    // If moving an icon, update its position
    if (movingIcon) {
      MapIconService.updateIcon(movingIcon.id, {
        position: coords,
        plane: currentPlane
      });
      setMapIcons(MapIconService.loadIcons());
      setMovingIcon(null); // Exit move mode after placing
      return;
    }
    
    // If copying an icon, add it at the new location
    if (copyingIcon) {
      MapIconService.addIcon({
        position: coords,
        iconPath: copyingIcon.iconPath,
        label: copyingIcon.label,
        plane: currentPlane
      });
      setMapIcons(MapIconService.loadIcons());
      // Stay in copy mode for multiple placements
      return;
    }
    
    // If in add icon mode, show dialog
    if (addIconMode) {
      setPendingIconPosition(coords);
      setShowIconDialog(true);
    }
  };

  const handleAddIcon = (iconPath: string, label: string) => {
    if (pendingIconPosition) {
      const newIcon = MapIconService.addIcon({
        position: pendingIconPosition,
        iconPath,
        label,
        plane: currentPlane
      });
      setMapIcons(MapIconService.loadIcons());
      setShowIconDialog(false);
      setPendingIconPosition(null);
      
      // Check if this is a dungeon or map link icon - if so, prompt for linked pair
      if (iconPath === '/map_icons/Dungeon_icon.png' || iconPath === '/map_icons/Map_link_icon.png') {
        setPendingDungeonLink(newIcon);
        // Don't exit add mode, wait for second click
      }
      // Keep addIconMode active so user can add more icons
      // setAddIconMode(false); // Commented out to stay in add mode
    }
  };

  const handleDeleteIcon = (id: string) => {
    MapIconService.removeIcon(id);
    setMapIcons(MapIconService.loadIcons());
  };

  const handleCopyIcon = (icon: MapIcon) => {
    setCopyingIcon(icon);
    setMovingIcon(null); // Exit move mode if active
    setAddIconMode(false); // Exit add mode if active
  };

  const handleMoveIcon = (icon: MapIcon) => {
    setMovingIcon(icon);
    setCopyingIcon(null); // Exit copy mode if active
    setAddIconMode(false); // Exit add mode if active
  };

  const handleEditIcon = (icon: MapIcon) => {
    setEditingIcon(icon);
  };

  const handleSaveEdit = (iconPath: string, label: string) => {
    if (editingIcon) {
      MapIconService.updateIcon(editingIcon.id, {
        iconPath,
        label
      });
      setMapIcons(MapIconService.loadIcons());
      setEditingIcon(null);
    }
  };

  const handleIconClick = (icon: MapIcon) => {
    // If icon has a linked icon, jump to it
    if (icon.linkedIconId) {
      const linkedIcon = mapIcons.find(i => i.id === icon.linkedIconId);
      if (linkedIcon && mapRef.current) {
        // Change plane if needed
        if (linkedIcon.plane !== currentPlane) {
          setCurrentPlane(linkedIcon.plane);
        }
        // Pan to the linked icon's location
        mapRef.current.setView([linkedIcon.position.lat, linkedIcon.position.lng], mapRef.current.getZoom());
      }
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

  const handleExportIcons = () => {
    const jsonString = MapIconService.exportToJSON();
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `osrs-map-icons-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportIcons = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const jsonString = event.target?.result as string;
            MapIconService.importFromJSON(jsonString);
            setMapIcons(MapIconService.loadIcons());
            alert('Icons imported successfully!');
          } catch (error) {
            alert('Error importing icons: Invalid JSON format');
            console.error(error);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
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
            onIconDelete={handleDeleteIcon}
            onIconCopy={handleCopyIcon}
            onIconMove={handleMoveIcon}
            onIconEdit={handleEditIcon}
            onIconClick={handleIconClick}
            addIconMode={addIconMode}
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

            {/* Add Icon Button */}
            <OSRSButton 
              onClick={() => {
                if (pendingDungeonLink) {
                  setPendingDungeonLink(null);
                } else if (movingIcon) {
                  setMovingIcon(null);
                } else if (copyingIcon) {
                  setCopyingIcon(null);
                } else {
                  setAddIconMode(!addIconMode);
                }
              }}
              className={addIconMode ? '!bg-yellow-600' : copyingIcon ? '!bg-green-600' : movingIcon ? '!bg-purple-600' : pendingDungeonLink ? '!bg-orange-600' : ''}
            >
              {pendingDungeonLink ? `🔗 Place Exit: ${pendingDungeonLink.label}` : movingIcon ? `↔️ Moving: ${movingIcon.label}` : copyingIcon ? `📋 Copying: ${copyingIcon.label}` : addIconMode ? '✓ Click Map' : '+ Add Icon'}
            </OSRSButton>

            {/* Export/Import Buttons */}
            <div className="flex items-center gap-1 border-l border-gray-600 pl-4">
              <OSRSButton 
                onClick={handleExportIcons}
                className="!min-h-[28px]"
                title="Export icons to JSON file"
              >
                💾 Export
              </OSRSButton>
              <OSRSButton 
                onClick={handleImportIcons}
                className="!min-h-[28px]"
                title="Import icons from JSON file"
              >
                📂 Import
              </OSRSButton>
            </div>
          </div>
        </div>
      </IronRivetPanel>

      {/* Add Icon Dialog */}
      {showIconDialog && pendingIconPosition && (
        <AddIconDialog
          position={pendingIconPosition}
          plane={currentPlane}
          onAdd={handleAddIcon}
          onCancel={() => {
            setShowIconDialog(false);
            setPendingIconPosition(null);
            setAddIconMode(false);
          }}
        />
      )}

      {/* Edit Icon Dialog */}
      {editingIcon && (
        <EditIconDialog
          icon={editingIcon}
          onSave={handleSaveEdit}
          onCancel={() => setEditingIcon(null)}
        />
      )}
    </main>
  );
}
