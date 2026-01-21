import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import Orb from './Orb';

export const AICore: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center z-10">
      {/* Outer Glow Field */}
      <motion.div 
        className="absolute w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Orb Effect */}
      <div className="relative w-32 h-32 flex items-center justify-center scale-[1.495]">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          backgroundColor="#0a0a0a"
        />
      </div>

      {/* Central Brain Icon */}
      <div className="absolute bg-slate-900 rounded-full p-4 border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.4)] scale-[1.3]">
        <Cpu className="w-8 h-8 text-purple-400" />
      </div>
    </div>
  );
};
