import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Clock } from 'lucide-react';

interface TimeRingProps {
  speedMultiplier?: number;
}

export const TimeRing: React.FC<TimeRingProps> = ({ speedMultiplier = 1 }) => {
  const [time, setTime] = useState(0); // 0 to 24
  
  // Simulate 24 hours passing quickly
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev + 0.1) % 24);
    }, 50 / speedMultiplier);
    return () => clearInterval(interval);
  }, [speedMultiplier]);

  const formattedTime = `${Math.floor(time).toString().padStart(2, '0')}:${Math.floor((time % 1) * 60).toString().padStart(2, '0')}`;
  const isDay = time > 6 && time < 18;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      {/* Outer Dashed Ring (Static Decoration) */}
      <div className="absolute w-[500px] h-[500px] border border-slate-700/30 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
      
      {/* Time Gradient Ring */}
      <motion.div 
        className="absolute w-[405px] h-[405px] rounded-full border-2 border-transparent"
        style={{
             background: `conic-gradient(from 0deg, 
                #0f172a 0deg, 
                #0f172a 90deg, 
                #3b82f6 180deg, 
                #f59e0b 220deg, 
                #3b82f6 270deg, 
                #0f172a 360deg)`,
             maskImage: 'radial-gradient(transparent 65%, black 66%)',
             WebkitMaskImage: 'radial-gradient(transparent 65%, black 66%)'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbiting Sun/Moon Indicator */}
      <motion.div 
        className="absolute w-[405px] h-[405px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700 shadow-xl">
           <div className="relative w-6 h-6">
             <Sun className="absolute w-6 h-6 text-amber-400 opacity-0 animate-[pulse_2s_infinite]" style={{ opacity: isDay ? 1 : 0, transition: 'opacity 1s' }} />
             <Moon className="absolute w-6 h-6 text-indigo-300 opacity-0" style={{ opacity: !isDay ? 1 : 0, transition: 'opacity 1s' }} />
           </div>
        </div>
      </motion.div>

      {/* Digital Time Display (Floating near bottom right) */}
      <div className="absolute -bottom-[48px] right-10 translate-x-[110px] -translate-y-[20.5px] flex flex-col items-center gap-2">
        <span className="text-xs text-slate-400 font-medium translate-y-[2px]">REAL-TIME OPS</span>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="font-mono text-xl text-purple-400 font-bold">{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};
