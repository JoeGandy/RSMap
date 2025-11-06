'use client';

import { MapIcon } from '@/types/mapIcon';
import IronRivetPanel from './IronRivetPanel';
import OSRSButton from './OSRSButton';

interface IconPopupProps {
  icon: MapIcon;
  position: { x: number; y: number };
  onEdit?: (icon: MapIcon) => void;
  onDelete?: (id: string) => void;
  onCopy?: (icon: MapIcon) => void;
  onMove?: (icon: MapIcon) => void;
  onClick?: (icon: MapIcon) => void;
  onClose: () => void;
}

export default function IconPopup({
  icon,
  position,
  onEdit,
  onDelete,
  onCopy,
  onMove,
  onClick,
  onClose
}: IconPopupProps) {
  return (
    <div
      className="icon-popup-container fixed z-[2000] pointer-events-auto"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -100%) translateY(-10px)'
      }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <IronRivetPanel style={{ padding: '12px', minWidth: '200px' }}>
        <div className="text-white text-sm font-bold mb-2">{icon.label}</div>
        <div className="text-gray-300 text-xs mb-3">
          Plane {icon.plane} | ({icon.position.lng.toFixed(2)}, {icon.position.lat.toFixed(2)})
        </div>
        <div className="flex flex-wrap gap-2">
          {(icon.linkedIconId || icon.linkDestination) && onClick && (
            <OSRSButton
              onClick={() => {
                onClick(icon);
                onClose();
              }}
            >
              🔗 Go to Link
            </OSRSButton>
          )}
          {onEdit && (
            <OSRSButton
              onClick={() => {
                onEdit(icon);
                onClose();
              }}
            >
              Edit
            </OSRSButton>
          )}
          {onMove && (
            <OSRSButton
              onClick={() => {
                onMove(icon);
                onClose();
              }}
            >
              Move
            </OSRSButton>
          )}
          {onCopy && (
            <OSRSButton
              onClick={() => {
                onCopy(icon);
                onClose();
              }}
            >
              Copy
            </OSRSButton>
          )}
          {onDelete && (
            <OSRSButton
              onClick={() => {
                onDelete(icon.id);
                onClose();
              }}
            >
              Delete
            </OSRSButton>
          )}
        </div>
      </IronRivetPanel>
    </div>
  );
}
