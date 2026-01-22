"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '@/constants/workflow';

const FeatureSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
      }, 5000); // 5 seconds per slide
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // 활성화된 버튼이 보이도록 스크롤
  useEffect(() => {
    if (buttonRefs.current[activeIndex] && scrollContainerRef.current) {
      const button = buttonRefs.current[activeIndex];
      const container = scrollContainerRef.current;
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      const buttonRight = buttonLeft + buttonWidth;

      // 버튼이 화면 왼쪽 밖에 있으면
      if (buttonLeft < scrollLeft) {
        container.scrollTo({ left: buttonLeft - 16, behavior: 'smooth' });
      }
      // 버튼이 화면 오른쪽 밖에 있으면
      else if (buttonRight > scrollLeft + containerWidth) {
        container.scrollTo({ left: buttonRight - containerWidth + 16, behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false); // Stop autoplay on user interaction
  };

  return (
    <div className="w-full lg:w-full mx-auto">
      {/* Mobile: Top Category Bar */}
      <div className="lg:hidden bg-[#050505] border-b border-gray-800 py-2.5 sm:py-4 w-[95%] mx-auto">
        <h2 className="text-base sm:text-xl font-bold text-white mb-2.5 sm:mb-4 px-3 sm:px-4">
          Workflow <span className="text-purple-400">Engine</span>
        </h2>
        <div 
          ref={scrollContainerRef}
          className="flex gap-1 overflow-x-auto pb-1.5 sm:pb-2 px-3 sm:px-4 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollPaddingLeft: '12px', scrollPaddingRight: '12px' }}
        >
          {WORKFLOW_STEPS.map((step, index) => {
            const isActive = index === activeIndex;
            const Icon = step.icon;

            return (
              <button
                key={step.id}
                ref={(el) => { buttonRefs.current[index] = el; }}
                onClick={() => handleManualSelect(index)}
                className={`flex-shrink-0 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition-all duration-300 relative snap-start ${
                  isActive 
                    ? 'bg-gray-900/80 border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.15)]' 
                    : 'bg-gray-900/30 border border-transparent hover:bg-gray-900/50'
                }`}
                style={{ minWidth: 'fit-content' }}
              >
                <div className={`p-0.5 sm:p-1 rounded sm:rounded-lg transition-colors flex-shrink-0 ${
                  isActive ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-500'
                }`}>
                  <Icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                </div>
                <span className={`font-semibold text-[9px] sm:text-[11px] leading-tight whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
                {/* Progress bar for active state */}
                {isActive && isAutoPlaying && (
                  <div className="absolute bottom-0 left-0 h-[2px] bg-purple-500 animate-[width_5s_linear_forwards] w-full origin-left rounded-b-lg sm:rounded-b-xl" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Container Box */}
      <div className="bg-transparent border-0 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row w-[95%] lg:w-full mx-auto h-[600px] lg:h-[600px]">
        
        {/* Left Side: Navigation / Steps (Desktop Only) */}
        <div className="hidden lg:flex w-full lg:w-1/3 bg-[#050505] border-b lg:border-b-0 lg:border-r border-gray-800 p-6 flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-8 pl-4">
            Workflow <span className="text-purple-400">Engine</span>
          </h2>
          
          <div className="space-y-2">
            {WORKFLOW_STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => handleManualSelect(index)}
                  className={`w-full text-left px-4 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                    isActive 
                      ? 'bg-gray-900/80 border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.15)]' 
                      : 'hover:bg-gray-900/50 border border-transparent'
                  }`}
                >
                  {/* Progress bar background for active state */}
                  {isActive && isAutoPlaying && (
                    <div className="absolute bottom-0 left-0 h-[2px] bg-purple-500 animate-[width_5s_linear_forwards] w-full origin-left" />
                  )}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isActive ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-500 group-hover:text-gray-300'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                        {step.title}
                      </h3>
                      {isActive && (
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1 opacity-0 lg:opacity-100 animate-[fadeIn_0.3s_ease-in-out]">
                          {step.description}
                        </p>
                      )}
                    </div>
                    {isActive && (
                      <ChevronRight className="ml-auto text-purple-400 w-6 h-6" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Visual Window */}
        <div className="w-full lg:w-2/3 bg-black relative p-3 lg:p-8 overflow-hidden flex items-center justify-center h-full">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
          
          {/* Main Display Area */}
          <div className="relative w-[90%] h-[90%] lg:w-full lg:h-full lg:max-h-[500px] lg:aspect-auto mx-auto">
             {WORKFLOW_STEPS.map((step, index) => (
                <div
                  key={step.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                    index === activeIndex 
                      ? 'opacity-100 translate-y-0 scale-100 z-10' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-y-8 scale-95 z-0' 
                        : 'opacity-0 translate-y-8 scale-95 z-0'
                  }`}
                >
                  <div className="w-full h-full bg-[#111] rounded-2xl border border-gray-800 shadow-2xl shadow-black overflow-hidden relative group">
                    {/* Header bar of the mock window */}
                    <div className="h-8 bg-[#1a1a1a] border-b border-gray-800 flex items-center px-4 gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                       <div className="ml-auto text-[10px] text-gray-600 font-mono">sumdemand_sys_v2.0</div>
                    </div>
                    
                    {/* The Component Content */}
                    <div className="h-[calc(100%-32px)]">
                      {step.component}
                    </div>
                    {/* Glossy Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
                  </div>
                  
                  {/* Step Label floating outside */}
                  <div className="absolute -top-10 left-0 text-purple-400 text-xs font-bold tracking-widest uppercase opacity-0 lg:opacity-100 transition-opacity delay-300">
                    Step 0{index + 1} // {step.title}
                  </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;

