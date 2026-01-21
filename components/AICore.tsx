import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export const AICore: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center z-10">
      {/* Outer Glow Field */}
      <motion.div 
        className="absolute w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Hexagon Structure Layers */}
      <motion.div 
        className="relative w-32 h-32 flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
         <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-cyan-500/50 stroke-1">
            <polygon points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25" />
         </svg>
      </motion.div>

      <motion.div 
        className="absolute w-24 h-24 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
         <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-cyan-400 stroke-[2]">
            <polygon points="50 5, 90 27, 90 73, 50 95, 10 73, 10 27" />
         </svg>
      </motion.div>

      {/* Central Brain Icon */}
      <div className="absolute bg-slate-900 rounded-full p-4 border border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
        <Cpu className="w-8 h-8 text-cyan-300" />
      </div>
    </div>
  );
};
