'use client';

interface PlaneSelectorProps {
  currentPlane: number;
  onPlaneChange: (plane: number) => void;
}

export default function PlaneSelector({ currentPlane, onPlaneChange }: PlaneSelectorProps) {
  const handleIncrement = () => {
    if (currentPlane < 3) {
      onPlaneChange(currentPlane + 1);
    }
  };

  const handleDecrement = () => {
    if (currentPlane > 0) {
      onPlaneChange(currentPlane - 1);
    }
  };

  return (
    <div 
      className="absolute bottom-4 left-4 z-[1000] bg-black bg-opacity-75 text-white rounded border border-gray-500"
      style={{ fontFamily: 'inherit' }}
    >
      <div className="flex items-center">
        <button
          onClick={handleDecrement}
          disabled={currentPlane <= 0}
          className="w-7 h-7 flex items-center justify-center bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600 text-sm font-bold transition-colors border-r border-gray-500"
          title="Lower plane"
        >
          −
        </button>
        
        <div className="px-3 py-1 bg-gray-900 text-center min-w-[60px]">
          <div className="text-xs text-gray-400">P{currentPlane}</div>
        </div>
        
        <button
          onClick={handleIncrement}
          disabled={currentPlane >= 3}
          className="w-7 h-7 flex items-center justify-center bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600 text-sm font-bold transition-colors border-l border-gray-500"
          title="Upper plane"
        >
          +
        </button>
      </div>
    </div>
  );
}
