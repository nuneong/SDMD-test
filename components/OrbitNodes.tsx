import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, BarChart3, RefreshCw, Sparkles, TrendingUp, Target } from 'lucide-react';
import { cn } from '@/utils/cn';

type Phase = 'campaign' | 'analysis' | 'evolution';

interface OrbitNodesProps {
  onPhaseChange: (phase: Phase) => void;
}

export const OrbitNodes: React.FC<OrbitNodesProps> = ({ onPhaseChange }) => {
  const [activePhase, setActivePhase] = useState<Phase>('campaign');
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    const cycle = () => {
      setActivePhase('campaign');
      setTimeout(() => setActivePhase('analysis'), 2000);
      setTimeout(() => setActivePhase('evolution'), 4000);
      setTimeout(() => {
          setCycleCount(c => c + 1);
          cycle();
      }, 6000);
    };
    cycle();
    return () => {}; // Cleanup not critical for this simple demo loop
  }, []);

  useEffect(() => {
    onPhaseChange(activePhase);
  }, [activePhase, onPhaseChange]);

  const nodes = [
    { 
      id: 'campaign', 
      icon: Rocket, 
      label: 'Campaign Execution', 
      angle: 0,
      color: 'text-rose-400',
      bg: 'bg-rose-500/20',
      border: 'border-rose-500'
    },
    { 
      id: 'analysis', 
      icon: BarChart3, 
      label: 'Result Analysis', 
      angle: 120,
      color: 'text-violet-400',
      bg: 'bg-violet-500/20',
      border: 'border-violet-500'
    },
    { 
      id: 'evolution', 
      icon: RefreshCw, 
      label: 'Self-Learning', 
      angle: 240,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/20',
      border: 'border-emerald-500'
    },
  ];

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center z-20 pointer-events-none">
      {/* Nodes */}
      {nodes.map((node, index) => {
        const isActive = activePhase === node.id;
        // Calculate position on a circle of radius 130px
        const rad = (node.angle - 90) * (Math.PI / 180);
        const radius = 130;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <div 
            key={node.id}
            className="absolute flex flex-col items-center justify-center"
            style={{ 
                transform: `translate(${x}px, ${y}px)` 
            }}
          >
            {/* Connection Beam to Center when Active */}
            <AnimatePresence>
                {isActive && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: radius - 30, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ rotate: `${node.angle + 180}deg`, transformOrigin: 'top center' }}
                        className="absolute top-1/2 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent -z-10"
                    />
                )}
            </AnimatePresence>

            {/* The Node Icon */}
            <motion.div 
              className={cn(
                  "relative w-16 h-16 rounded-2xl border flex items-center justify-center backdrop-blur-md transition-all duration-500",
                  node.bg,
                  isActive ? `scale-125 ${node.border} shadow-[0_0_20px_rgba(255,255,255,0.2)]` : "border-slate-700 scale-100 opacity-60"
              )}
              animate={isActive ? { y: [0, -5, 0] } : {}}
            >
                <node.icon className={cn("w-8 h-8 transition-colors duration-300", isActive ? "text-white" : node.color)} />
                
                {/* Ping Effect */}
                {isActive && (
                    <span className={cn("absolute inline-flex h-full w-full rounded-2xl opacity-75 animate-ping", node.bg)}></span>
                )}
            </motion.div>

            {/* Label */}
            <motion.div 
                className={cn(
                    "mt-3 text-xs font-bold tracking-wider uppercase px-2 py-1 rounded bg-slate-900/80 border border-slate-700",
                    isActive ? "text-white opacity-100" : "text-slate-500 opacity-0"
                )}
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }}
            >
                {node.label}
            </motion.div>
          </div>
        );
      })}
      
      {/* Floating Insights (Decorations) */}
      <AnimatePresence mode='popLayout'>
        {activePhase === 'analysis' && (
             <motion.div 
                key="insight1"
                initial={{ opacity: 0, x: 50, y: -50 }}
                animate={{ opacity: 1, x: 160, y: -100 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute flex items-center gap-2 text-xs text-violet-300 bg-violet-900/40 p-2 rounded-lg border border-violet-500/30"
             >
                <TrendingUp className="w-4 h-4" /> <span>CTR +15%</span>
             </motion.div>
        )}
        {activePhase === 'evolution' && (
             <motion.div 
                key="evo1"
                initial={{ opacity: 0, x: -50, y: -50 }}
                animate={{ opacity: 1, x: -160, y: -10 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute flex items-center gap-2 text-xs text-emerald-300 bg-emerald-900/40 p-2 rounded-lg border border-emerald-500/30"
             >
                <Sparkles className="w-4 h-4" /> <span>Model Optimized</span>
             </motion.div>
        )}
         {activePhase === 'campaign' && (
             <motion.div 
                key="camp1"
                initial={{ opacity: 0, x: 45, y: -150 }}
                animate={{ opacity: 1, x: 45, y: -205 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute flex items-center gap-2 text-xs text-rose-300 bg-rose-900/40 p-2 rounded-lg border border-rose-500/30"
             >
                <Target className="w-4 h-4" /> <span>Ad Set #249 Launch</span>
             </motion.div>
        )}
      </AnimatePresence>

      {/* Cycle Counter (Evolution Metric) */}
      <div className="absolute top-10 left-10 text-slate-500 text-sm font-mono">
        <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest mb-1">Total Cycles</span>
            <span className="text-2xl text-white font-bold">{cycleCount.toString().padStart(4, '0')}</span>
        </div>
      </div>
    </div>
  );
};
