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
  console.log('IconPopup rendering:', { icon, position, onEdit, onDelete, onCopy, onMove, onClick });
  
  return (
    <div
      className="icon-popup-container fixed z-[2000] pointer-events-auto"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -100%) translateY(-10px)'
      }}
      onClick={(e) => {
        console.log('Popup div clicked');
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
          {icon.linkedIconId && onClick && (
            <OSRSButton
              onClick={() => {
                console.log('Go to Link clicked for icon:', icon);
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
                console.log('Edit clicked for icon:', icon);
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
                console.log('Move clicked for icon:', icon);
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
                console.log('Copy clicked for icon:', icon);
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
                console.log('Delete clicked for icon:', icon);
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
