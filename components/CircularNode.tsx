"use client";

import React from 'react';
import { ProcessItem } from '@/types/process';
import { Check } from 'lucide-react';

interface CircularNodeProps {
  data: ProcessItem;
  className?: string;
  size?: 'large' | 'medium';
  variant?: 'primary' | 'secondary';
}

const CircularNode: React.FC<CircularNodeProps> = ({ 
  data, 
  className = '', 
  size = 'medium', 
  variant = 'primary' 
}) => {
  const isPrimary = variant === 'primary';
  const isLarge = size === 'large';
  
  // Dynamic sizing classes
  // Added 'aspect-square' to enforce 1:1 ratio (Circle not Oval)
  const sizeClasses = isLarge 
    ? "w-64 h-64 sm:w-80 sm:h-80" 
    : "w-56 h-56 sm:w-64 sm:h-64";
  
  // Visual Styles based on variant
  // Primary (Core Loop): Glowing, Brighter Border
  // Secondary (Input/Output): Muted, darker background, subtle border
  const containerStyles = isPrimary
    ? "bg-[#0c0a14]/80 border-purple-500/40 shadow-[0_0_40px_rgba(139,92,246,0.1)] hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] hover:border-purple-500/80"
    : "bg-[#050508] border-gray-800/60 shadow-none opacity-90 hover:opacity-100 hover:border-gray-600 hover:bg-[#0a0a0f]";

  const iconBgStyles = isPrimary
    ? "bg-purple-900/30 text-purple-400 group-hover:scale-110 group-hover:bg-purple-900/50"
    : "bg-gray-800/50 text-gray-400 group-hover:scale-105 group-hover:bg-gray-700/50";

  const titleStyles = isPrimary
    ? "text-white glow-text"
    : "text-gray-200";

  const IconComponent = data.icon;

  return (
    <div 
      className={`
        relative flex flex-col items-center justify-center text-center 
        rounded-full p-4 border backdrop-blur-md
        card-transition z-20 group flex-shrink-0 aspect-square
        ${sizeClasses}
        ${containerStyles}
        ${className}
      `}
    >
      {/* Inner Glow Effect - Only for Primary */}
      {isPrimary && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/10 to-transparent pointer-events-none opacity-50" />
      )}
      
      {/* Icon */}
      <div className={`mb-2 p-2 rounded-full transition-all duration-300 ${iconBgStyles}`}>
        <IconComponent size={isLarge ? 28 : 24} />
      </div>
      
      {/* Title */}
      <h3 className={`text-sm sm:text-base font-bold mb-1 leading-tight ${titleStyles}`}>
        {data.title}
      </h3>
      
      {/* Subtitle */}
      <p className="text-[10px] text-purple-300/60 mb-2 font-light tracking-wide uppercase">
        {data.subTitle}
      </p>
      
      {/* List Items */}
      <ul className="space-y-1 text-left w-full px-3">
        {data.items.map((item, idx) => (
          <li key={idx} className={`flex items-start text-[10px] sm:text-xs ${isPrimary ? 'text-gray-300' : 'text-gray-500'}`}>
            <Check size={12} className={`${isPrimary ? 'text-purple-500' : 'text-gray-600'} mr-1.5 mt-0.5 flex-shrink-0`} />
            <span className="leading-tight">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CircularNode;

