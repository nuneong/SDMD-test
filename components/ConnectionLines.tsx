"use client";

import React from 'react';

export const MobileArrow: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-4 lg:hidden">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-purple-500/50"
      >
        <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export const ConnectionLines: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-visible">
      <svg className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.05)" />
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.05)" />
          </linearGradient>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6" />
          </marker>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* 
            Geometry Update for Max Separation (1920px container):
            
            Input Node (Left):
            - Container: 350px width, justified left.
            - Node center is approx 175px from left edge.
            - 175px / 1920px = ~9%.
            - Node Right Edge: 9% + 8.3% (half node width) ~ 17.5%.
            Output Node (Right):
            - Container: 350px width, justified right.
            - Node center is approx 1920px - 175px.
            - 1745px / 1920px = ~91%.
            - Node Left Edge: 91% - 8.3% ~ 82.5%.
            Core Loop (Center):
            - Radius: 360px.
            - Center: 50%.
            - Left Loop Node Center: 50% - (360/1920 = 18.75%) = 31.25%.
            - Left Loop Node Left Edge: 31.25% - 8.3% = 22.95% (~23%).
            - Right Loop Node Center: 50% + 18.75% = 68.75%.
            - Right Loop Node Right Edge: 68.75% + 8.3% = 77.05% (~77%).
            
            Paths should connect these edge points.
        */}
        
        {/* INPUT -> LOOP (17.5% -> 23%) */}
        <path 
          d="M 17.5% 50% L 23% 50%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1.5" 
          fill="none"
          markerEnd="url(#arrowhead)"
          filter="url(#glow)"
        />
        
        {/* LOOP -> OUTPUT (77% -> 82.5%) */}
        <path 
          d="M 77% 50% L 82.5% 50%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1.5" 
          fill="none"
          markerEnd="url(#arrowhead)"
          filter="url(#glow)"
        />
        
        {/* 
           Internal Cycle Arrows 
           Tracing circular motion between the 4 equidistant nodes on 360px radius.
        */}
        
        {/* Top -> Right */}
        <path
          d="M 53% 15% Q 70% 20% 70% 40%"
          stroke="#4c1d95"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrowhead)"
          strokeDasharray="4,6"
          opacity="0.5"
        />
        
        {/* Right -> Bottom */}
        <path
          d="M 70% 60% Q 70% 80% 53% 85%"
          stroke="#4c1d95"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrowhead)"
          strokeDasharray="4,6"
          opacity="0.5"
        />
        
        {/* Bottom -> Left */}
        <path
          d="M 47% 85% Q 30% 80% 30% 60%"
          stroke="#4c1d95"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrowhead)"
          strokeDasharray="4,6"
          opacity="0.5"
        />
        
        {/* Left -> Top */}
        <path
          d="M 30% 40% Q 30% 20% 47% 15%"
          stroke="#4c1d95"
          strokeWidth="1"
          fill="none"
          markerEnd="url(#arrowhead)"
          strokeDasharray="4,6"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

