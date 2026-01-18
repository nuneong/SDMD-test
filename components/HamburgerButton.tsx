"use client";

import { useState } from "react";

interface HamburgerButtonProps {
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const HamburgerButton = ({ onClick, onMouseEnter }: HamburgerButtonProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative">
    <button
      onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
      aria-label="메뉴 열기"
    >
        <span 
          className="w-6 bg-white transition-all" 
          style={{ height: '2px', minHeight: '2px', maxHeight: '2px' }} 
        />
        <span 
          className="w-6 bg-white transition-all" 
          style={{ height: '2px', minHeight: '2px', maxHeight: '2px' }} 
        />
        <span 
          className="w-6 bg-white transition-all" 
          style={{ height: '2px', minHeight: '2px', maxHeight: '2px' }} 
        />
    </button>
      {showTooltip && (
        <div className="absolute top-full left-0 mt-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap z-50">
          사이드바 열기
        </div>
      )}
    </div>
  );
};

export default HamburgerButton;

