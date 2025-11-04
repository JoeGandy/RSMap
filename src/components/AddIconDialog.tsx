'use client';

import { useState, useEffect } from 'react';
import OSRSButton from './OSRSButton';
import IronRivetPanel from './IronRivetPanel';
import { AVAILABLE_ICONS } from '@/lib/availableIcons';
import { iconPathToLabel } from '@/lib/iconUtils';

interface AddIconDialogProps {
  position: { lng: number; lat: number };
  plane: number;
  onAdd: (iconPath: string, label: string) => void;
  onCancel: () => void;
}

export default function AddIconDialog({ position, plane, onAdd, onCancel }: AddIconDialogProps) {
  const [availableIcons, setAvailableIcons] = useState<string[]>([]);
  const [selectedIcon, setSelectedIcon] = useState<string>('');
  const [label, setLabel] = useState<string>('');
  const [existingLabels, setExistingLabels] = useState<string[]>([]);

  useEffect(() => {
    // Load all available OSRS map icons (138 icons total)
    setAvailableIcons(AVAILABLE_ICONS);
    
    // Load last used icon and label from localStorage
    const lastIcon = localStorage.getItem('last_icon_path');
    const lastLabel = localStorage.getItem('last_icon_label');
    
    if (lastIcon && AVAILABLE_ICONS.includes(lastIcon)) {
      setSelectedIcon(lastIcon);
    } else if (AVAILABLE_ICONS.length > 0) {
      setSelectedIcon(AVAILABLE_ICONS[0]);
    }
    
    if (lastLabel) {
      setLabel(lastLabel);
    }

    // Load existing labels from localStorage
    const stored = localStorage.getItem('osrs_map_icons');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        const labelSet = new Set<string>();
        data.icons.forEach((icon: any) => labelSet.add(icon.label));
        const labels = Array.from(labelSet);
        setExistingLabels(labels);
      } catch (e) {
        console.error('Error loading existing labels:', e);
      }
    }
  }, []);

  const handleSubmit = () => {
    if (selectedIcon && label.trim()) {
      // Save last used icon and label
      localStorage.setItem('last_icon_path', selectedIcon);
      localStorage.setItem('last_icon_label', label.trim());
      onAdd(selectedIcon, label.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]">
      <IronRivetPanel className="w-96" style={{ padding: '16px' }}>
        <h2 className="text-white text-lg font-bold mb-4">Add Map Icon</h2>
        
        <div className="mb-4">
          <label className="text-white text-sm block mb-2">Location:</label>
          <div className="text-gray-300 text-xs">
            Plane {plane} | ({position.lng.toFixed(2)}, {position.lat.toFixed(2)})
          </div>
        </div>

        <div className="mb-4">
          <label className="text-white text-sm block mb-2">Select Icon:</label>
          <div className="grid grid-cols-5 gap-2 max-h-48 overflow-y-auto p-2 bg-gray-900 rounded">
            {availableIcons.map((iconPath) => (
              <button
                key={iconPath}
                onClick={() => {
                  setSelectedIcon(iconPath);
                  setLabel(iconPathToLabel(iconPath));
                }}
                className={`p-2 border-2 rounded transition-all ${
                  selectedIcon === iconPath
                    ? 'border-yellow-500 bg-yellow-500 bg-opacity-20 scale-110'
                    : 'border-gray-600 bg-gray-800 hover:border-gray-400'
                }`}
                title={iconPath.split('/').pop()?.replace('.png', '')}
              >
                <img 
                  src={iconPath} 
                  alt="icon" 
                  className="w-8 h-8 mx-auto"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="%23666"/><text x="16" y="16" text-anchor="middle" fill="white" font-size="20">?</text></svg>';
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="text-white text-sm block mb-2">Label:</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded"
            placeholder="Enter label..."
            list="existing-labels"
          />
          <datalist id="existing-labels">
            {existingLabels.map((l) => (
              <option key={l} value={l} />
            ))}
          </datalist>
        </div>

        <div className="flex gap-2 justify-end">
          <OSRSButton onClick={onCancel}>
            Cancel
          </OSRSButton>
          <OSRSButton onClick={handleSubmit} disabled={!selectedIcon || !label.trim()}>
            Add Icon
          </OSRSButton>
        </div>
      </IronRivetPanel>
    </div>
  );
}
