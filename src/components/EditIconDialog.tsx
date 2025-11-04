'use client';

import { useState, useEffect } from 'react';
import OSRSButton from './OSRSButton';
import IronRivetPanel from './IronRivetPanel';
import { AVAILABLE_ICONS } from '@/lib/availableIcons';
import { MapIcon } from '@/types/mapIcon';
import { iconPathToLabel } from '@/lib/iconUtils';

interface EditIconDialogProps {
  icon: MapIcon;
  onSave: (iconPath: string, label: string) => void;
  onCancel: () => void;
}

export default function EditIconDialog({ icon, onSave, onCancel }: EditIconDialogProps) {
  const [availableIcons, setAvailableIcons] = useState<string[]>([]);
  const [selectedIcon, setSelectedIcon] = useState<string>(icon.iconPath);
  const [label, setLabel] = useState<string>(icon.label);
  const [existingLabels, setExistingLabels] = useState<string[]>([]);

  useEffect(() => {
    // Load all available OSRS map icons (138 icons total)
    setAvailableIcons(AVAILABLE_ICONS);

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
      onSave(selectedIcon, label.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]">
      <IronRivetPanel className="w-96" style={{ padding: '16px' }}>
        <h2 className="text-white text-lg font-bold mb-4">Edit Icon</h2>
        
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Icon Type
          </label>
          <div className="grid grid-cols-5 gap-2 max-h-64 overflow-y-auto bg-black bg-opacity-30 p-2 rounded">
            {availableIcons.map((iconPath) => (
              <button
                key={iconPath}
                onClick={() => {
                  setSelectedIcon(iconPath);
                  setLabel(iconPathToLabel(iconPath));
                }}
                className={`p-1 rounded transition-all ${
                  selectedIcon === iconPath 
                    ? 'bg-yellow-600 ring-2 ring-yellow-400' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                title={iconPath.split('/').pop()?.replace('_icon.png', '').replace(/_/g, ' ')}
              >
                <img 
                  src={iconPath} 
                  alt={iconPath.split('/').pop()} 
                  className="w-full h-auto"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Label
          </label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-500"
            placeholder="Enter icon label"
            list="existing-labels"
            autoFocus
          />
          <datalist id="existing-labels">
            {existingLabels.map(label => (
              <option key={label} value={label} />
            ))}
          </datalist>
        </div>

        <div className="flex gap-2 justify-end">
          <OSRSButton onClick={onCancel}>
            Cancel
          </OSRSButton>
          <OSRSButton 
            onClick={handleSubmit}
            disabled={!selectedIcon || !label.trim()}
            className={!selectedIcon || !label.trim() ? 'opacity-50 cursor-not-allowed' : ''}
          >
            Save Changes
          </OSRSButton>
        </div>
      </IronRivetPanel>
    </div>
  );
}
