"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  Settings,
  Zap,
  Clock,
  TrendingUp,
  Mail,
  MessageSquare,
  BarChart3,
  Pause,
  FileText,
  Upload,
  CheckCircle2,
} from "lucide-react";

// --- Types ---
interface Particle {
  id: string;
  type: "email" | "chat" | "stats" | "upload" | "doc";
  status: "pending" | "processing" | "completed";
  x: number;
  y: number;
  targetY: number;
  isInitial?: boolean;
  processStartTime?: number;
  completedTime?: number;
  hasGeneratedPost?: boolean;
}

interface GeneratedPost {
  id: string;
  type: string;
  title: string;
  time: string;
}

// --- Icons Helper ---
const getIcon = (type: string, size = 14, className = "") => {
  switch (type) {
    case "email":
      return <Mail size={size} className={className} />;
    case "chat":
      return <MessageSquare size={size} className={className} />;
    case "stats":
      return <BarChart3 size={size} className={className} />;
    case "upload":
      return <Upload size={size} className={className} />;
    case "doc":
      return <FileText size={size} className={className} />;
    default:
      return <div className={`w-${size} h-${size} bg-gray-500 rounded-full`} />;
  }
};

const getPostTitle = (type: string) => {
  const titles = {
    email: ["Newsletter Sent", "Promo Blast", "Retargeting"],
    chat: ["Social Reply", "Auto-Response", "Engagement"],
    stats: ["Weekly Report", "Ad ROI", "Insights"],
    upload: ["Insta Post", "TikTok Reel", "LinkedIn Art."],
    doc: ["Threads Script", "Blog Draft", "Ad Copy"],
  };
  const list = titles[type as keyof typeof titles] || ["Content Created"];
  return list[Math.floor(Math.random() * list.length)];
};

const AutomationVisualizer: React.FC = () => {
  const [isAutomated, setIsAutomated] = useState(false);

  // Initialize with empty array to avoid hydration mismatch
  // Particles will be generated in useEffect on client side only
  const [particles, setParticles] = useState<Particle[]>([]);

  const [posts, setPosts] = useState<GeneratedPost[]>([]);
  const [processedCount, setProcessedCount] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);
  const [businessGrowth, setBusinessGrowth] = useState(10); // Start at 10%
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation Controls
  const gearControls = useAnimation();
  const coreControls = useAnimation();

  // --- Logic: Initialize particles on client side only ---
  useEffect(() => {
    const startCount = 5;
    const types: ("email" | "chat" | "stats" | "upload" | "doc")[] = [
      "email",
      "chat",
      "stats",
      "upload",
      "doc",
      "doc",
    ];
    const initialParticles = Array.from({ length: startCount }).map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      type: types[Math.floor(Math.random() * types.length)],
      status: "pending",
      x: Math.random() * 20,
      y: Math.random() * 60 + 20,
      // Adjusted targetY to align with the engine which moved up 7px
      targetY: 33 + Math.random() * 15,
      isInitial: true,
    })) as Particle[];
    setParticles(initialParticles);
  }, []);

  // --- Logic: Auto-Start Demo ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutomated(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // --- Logic: Particle Generation (Input) ---
  useEffect(() => {
    // Adjusted generation interval to 2000ms as requested
    const intervalTime = isAutomated ? 2000 : 5000;

    const generator = setInterval(() => {
      const types: ("email" | "chat" | "stats" | "upload" | "doc")[] = [
        "email",
        "chat",
        "stats",
        "upload",
        "doc",
        "doc",
        "doc",
      ];

      const newParticle: Particle = {
        id: Math.random().toString(36).substr(2, 9),
        type: types[Math.floor(Math.random() * types.length)],
        status: "pending",
        x: Math.random() * 20,
        y: Math.random() * 60 + 20,
        // Adjusted targetY to align with the engine which moved up 7px
        targetY: 33 + Math.random() * 15,
      };
      // Limit total particles to prevent memory issues
      setParticles((prev) => [...prev.slice(-25), newParticle]);
    }, intervalTime);

    return () => clearInterval(generator);
  }, [isAutomated]);

  // --- Logic: Processing Loop ---
  useEffect(() => {
    // Check frequently to catch completion times accurately
    const processInterval = setInterval(() => {
      const now = Date.now();
      const movementDuration = isAutomated ? 2000 : 15000; // Time to travel to core

      setParticles((prev) => {
        let next = prev.map((p) => {
          // 1. Check if 'processing' items have arrived at destination
          if (p.status === "processing" && p.processStartTime) {
            if (now - p.processStartTime >= movementDuration) {
              return { ...p, status: "completed" as const, completedTime: now };
            }
          }
          return p;
        });

        // 2. Remove 'completed' items after they have finished fading out (1s after completion)
        next = next.filter((p) => {
          if (p.status === "completed" && p.completedTime) {
            return now - p.completedTime < 1000;
          }
          return true;
        });

        // 3. Pick a new item to start processing
        const pendingIdx = next.findIndex((p) => p.status === "pending");
        if (pendingIdx !== -1) {
          const shouldStart = isAutomated || Math.random() > 0.8;
          if (shouldStart && next[pendingIdx].status === "pending") {
            next = next.map((p, idx) =>
              idx === pendingIdx
                ? { ...p, status: "processing" as const, processStartTime: now }
                : p
            );
          }
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(processInterval);
  }, [isAutomated]);

  // --- Logic: Handle Post Generation (Side Effects) ---
  useEffect(() => {
    // Check for particles that just became completed but haven't triggered a post yet
    const jobs = particles.filter(
      (p) => p.status === "completed" && !p.hasGeneratedPost
    );

    if (jobs.length > 0) {
      setProcessedCount((c) => c + jobs.length);

      const newPosts: GeneratedPost[] = jobs.map((p) => ({
        id: Math.random().toString(36).substr(2, 9),
        type: p.type,
        title: getPostTitle(p.type),
        time: new Date().toLocaleTimeString([], {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        }),
      }));

      setPosts((currentPosts) => [...newPosts, ...currentPosts].slice(0, 5)); // Reduced limit for smaller view

      // Update stats
      if (isAutomated) {
        setTimeSaved((t) => t + 0.5 * jobs.length);
        setBusinessGrowth((g) => Math.min(g + 0.2 * jobs.length, 100));
      } else {
        setTimeSaved((t) => t + 0.01 * jobs.length);
        setBusinessGrowth((g) => Math.min(g + 0.05 * jobs.length, 100));
      }

      // Mark these particles as handled so we don't generate posts again
      setParticles((prev) =>
        prev.map((p) =>
          jobs.find((j) => j.id === p.id) ? { ...p, hasGeneratedPost: true } : p
        )
      );
    }
  }, [particles, isAutomated]);

  // --- Logic: Animation Orchestration ---
  useEffect(() => {
    if (isAutomated) {
      gearControls.start({
        rotate: 360,
        transition: { duration: 2, repeat: Infinity, ease: "linear" },
      });
      coreControls.start({
        scale: [1, 1.1, 1],
        boxShadow:
          "0px 0px 30px rgba(16,185,129,0.6), 0px 0px 20px rgba(8,145,178,0.4)",
        transition: { duration: 1.5, repeat: Infinity },
      });
    } else {
      gearControls.stop();
      gearControls.start({ rotate: 0, transition: { duration: 0.5 } });
      coreControls.start({ scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" });
    }
  }, [isAutomated, gearControls, coreControls]);

  const getParticleColor = (type: string) => {
    switch (type) {
      case "email":
        return "bg-indigo-500/20 border-indigo-500/50 text-indigo-300";
      case "chat":
        return "bg-emerald-500/20 border-emerald-500/50 text-emerald-300";
      case "stats":
        return "bg-rose-500/20 border-rose-500/50 text-rose-300";
      case "upload":
        return "bg-amber-500/20 border-amber-500/50 text-amber-300";
      case "doc":
        return "bg-sky-500/20 border-sky-500/50 text-sky-300";
      default:
        return "bg-slate-500/20 border-slate-500/50 text-slate-300";
    }
  };

  return (
    <div className="w-[700px] h-[400px] backdrop-blur-xl rounded-3xl pl-4 pr-1 pt-[28px] pb-4 shadow-2xl relative overflow-hidden group -translate-x-[20px]">
      {/* --- Toggle Switch --- */}
      {/* Moved down 51px: top-4 is 16px, so top-[67px] is 16+25+6+20 */}
      <div className="absolute top-[67px] left-0 w-full flex justify-center z-30 pointer-events-none">
        <div className="pointer-events-auto bg-slate-950/50 backdrop-blur-md border border-slate-700/50 rounded-full p-1 px-3 flex items-center gap-2 shadow-xl scale-90 origin-top translate-x-[7px]">
          <span
            className={`text-[10px] font-bold transition-colors duration-300 ${
              !isAutomated ? "text-white" : "text-slate-500"
            }`}
          >
            수동 관리
          </span>

          <button
            onClick={() => setIsAutomated(!isAutomated)}
            className={`relative w-10 h-5 rounded-full transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
              isAutomated
                ? "bg-gradient-to-r from-emerald-500 to-cyan-600"
                : "bg-slate-700"
            }`}
          >
            <motion.div
              className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md"
              animate={{ x: isAutomated ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>

          <span
            className={`text-[10px] font-bold transition-colors duration-300 ${
              isAutomated ? "text-cyan-400" : "text-slate-500"
            }`}
          >
            자동화
          </span>
        </div>
      </div>

      {/* --- Stats Boxes --- */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3 z-30 pointer-events-none px-4">
        <div className="pointer-events-auto bg-slate-800/80 backdrop-blur-md p-1.5 px-2.5 rounded-xl border border-slate-700/50 w-[165px] h-[42px] flex flex-row items-center gap-1.5">
          <div className="p-0.5 bg-purple-500/20 rounded-md text-purple-400 flex-shrink-0">
            <Clock size={16} />
          </div>
          <div className="flex-1 min-w-0 -translate-y-[1.5px]">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-slate-400 text-[11px] leading-tight">
                Time Saved
              </span>
              <span className="text-[15px] font-bold text-white leading-tight">
                {Math.floor(timeSaved)}{" "}
                <span className="text-[10px] font-normal text-slate-500">
                  h
                </span>
              </span>
            </div>
            <div className="w-[90%] bg-slate-700 h-0.5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(timeSaved, 100)}%` }}
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-auto bg-slate-800/80 backdrop-blur-md p-1.5 px-2.5 rounded-xl border border-slate-700/50 w-[165px] h-[42px] flex flex-row items-center gap-1.5">
          <div className="p-0.5 bg-emerald-500/20 rounded-md text-emerald-400 flex-shrink-0">
            <TrendingUp size={16} />
          </div>
          <div className="flex-1 min-w-0 -translate-y-[1.5px]">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-slate-400 text-[11px] leading-tight">
                Focus
              </span>
              <span className="text-[15px] font-bold text-white leading-tight">
                {Math.floor(businessGrowth)}
                <span className="text-[10px] font-normal text-slate-500">
                  %
                </span>
              </span>
            </div>
            <div className="w-[90%] bg-slate-700 h-0.5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-400"
                initial={{ width: "10%" }}
                animate={{ width: `${businessGrowth}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Viz Grid --- */}
      <div className="grid grid-cols-3 gap-2 min-h-[280px] relative">
        {/* 1. INPUT ZONE (Chaos vs Flow) */}
        <div className="relative border-r border-slate-800/50 flex flex-col items-center justify-start pt-4 pb-10">
          <h3 className="text-slate-500 text-[10px] tracking-wider uppercase mb-2 w-full text-center ml-[13px] font-bold -translate-x-[15px]">
            Tasks
          </h3>
          <div className="w-full h-full relative" ref={containerRef}>
            <AnimatePresence>
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{
                    opacity: p.isInitial ? 1 : 0,
                    scale: p.isInitial ? 1 : 0,
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                  }}
                  animate={{
                    // Fade out & scale down when completed
                    opacity: p.status === "completed" ? 0 : 1,
                    scale: p.status === "completed" ? 0 : 1,

                    // Movement: Processing/Completed -> Move to core (150%)
                    left:
                      p.status === "processing" || p.status === "completed"
                        ? isAutomated
                          ? "150%"
                          : "130%"
                        : `${p.x}%`,
                    top:
                      p.status === "processing" || p.status === "completed"
                        ? `${p.targetY}%`
                        : `${p.y}%`,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    // Separate transitions for movement vs fading
                    // 60% speed: 1.2s / 0.6 = 2s
                    left: {
                      duration: isAutomated ? 2 : 15,
                      ease: isAutomated ? "easeInOut" : "linear",
                    },
                    top: {
                      duration: isAutomated ? 2 : 15,
                      ease: isAutomated ? "easeInOut" : "linear",
                    },

                    // Fade out transition (1s duration)
                    opacity: { duration: 1, ease: "easeOut" },
                    scale: { duration: 1, ease: "easeOut" },
                  }}
                  className={`absolute flex items-center justify-center w-8 h-8 rounded-lg shadow-lg border
                    ${getParticleColor(p.type)}
                  `}
                >
                  {getIcon(p.type, 14)}
                </motion.div>
              ))}
            </AnimatePresence>
            {!isAutomated && particles.length >= 5 && (
              <motion.div
                initial={{ opacity: 0, x: 10, y: -20 }}
                animate={{ opacity: 1, x: 10, y: -20 }}
                transition={{ delay: 2 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <span className="bg-red-500/10 text-red-400 px-2 py-1 rounded text-[10px] font-bold border border-red-500/30 animate-pulse shadow-lg shadow-red-500/20 whitespace-nowrap">
                  Bottleneck Detected
                </span>
              </motion.div>
            )}
          </div>
        </div>

        {/* 2. PROCESSING CORE (The Engine) */}
        {/* Absolute Overlay to ensure perfect stability */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          {/* Connecting Lines (Decor) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-[280px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500 via-cyan-500 to-transparent"></div>
          </div>

          {/* The Core */}
          {/* Moved down 13px: was -7px, now +13px (20px down from -7px) */}
          <div className="relative w-32 h-32 flex items-center justify-center translate-y-[13px]">
            {/* Spinning Rings */}
            <motion.div
              animate={gearControls}
              className={`absolute inset-0 border-2 rounded-full border-dashed ${
                isAutomated ? "border-emerald-500/50" : "border-slate-700"
              }`}
              style={
                isAutomated
                  ? {
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, rgba(16,185,129,0.1) 60deg, rgba(8,145,178,0.3) 360deg)",
                    }
                  : {}
              }
            />
            <motion.div
              animate={{ rotate: isAutomated ? -360 : 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-3 border rounded-full ${
                isAutomated
                  ? "opacity-100 border-cyan-500/30"
                  : "opacity-0 border-slate-700"
              }`}
            />

            {/* Center Geometry */}
            <motion.div
              animate={coreControls}
              className={`relative w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-md border transition-colors duration-500
                  ${
                    isAutomated
                      ? "bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-400 text-emerald-400"
                      : "bg-slate-800 border-slate-600 text-slate-500"
                  }
                `}
              style={
                isAutomated
                  ? {
                      boxShadow:
                        "0px 0px 20px rgba(16,185,129,0.4), 0px 0px 10px rgba(8,145,178,0.3), inset 0px 0px 10px rgba(16,185,129,0.1)",
                    }
                  : {}
              }
            >
              <Settings
                size={24}
                className={isAutomated ? "animate-spin-slow" : ""}
              />
            </motion.div>

            {/* Status Badge */}
            <div className="absolute -bottom-8">
              <span
                className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                  isAutomated
                    ? "bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.5),0_0_10px_rgba(8,145,178,0.3)]"
                    : "bg-slate-800 border-slate-700 text-slate-500"
                }`}
              >
                {isAutomated ? "24/7 Active" : "Manual"}
              </span>
            </div>
          </div>
        </div>

        {/* 3. OUTPUT ZONE (Results) */}
        <div className="relative border-l border-slate-800/50 flex flex-col pt-4 pb-4 pl-2 pr-7 col-start-3 ml-[5px]">
          <h3 className="text-slate-500 text-[10px] tracking-wider uppercase mb-2 w-full text-center ml-[13px] font-bold">
            Completed
          </h3>

          <div className="w-full relative flex flex-col gap-2 pr-1">
            <AnimatePresence mode="popLayout">
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, x: -30, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="bg-slate-800/50 backdrop-blur border-[1.5px] border-slate-700 rounded-lg p-2 flex items-center gap-2 w-[145px] h-[45px] shadow-lg origin-left mr-0.5"
                >
                  <div
                    className={`p-1 rounded-md ${
                      post.type === "email"
                        ? "bg-indigo-500/20 text-indigo-400"
                        : post.type === "chat"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : post.type === "stats"
                        ? "bg-rose-500/20 text-rose-400"
                        : post.type === "upload"
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-sky-500/20 text-sky-400"
                    }`}
                  >
                    {getIcon(post.type, 12)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[10px] font-medium text-slate-200 truncate">
                      {post.title}
                    </h4>
                    <p className="text-[9px] text-slate-500 leading-none">
                      {post.time}
                    </p>
                  </div>
                  <div className="text-emerald-400">
                    <CheckCircle2
                      size={15}
                      className="drop-shadow-[0_0_4px_rgba(16,185,129,0.6)]"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {posts.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 opacity-50">
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-slate-700 mb-1 animate-spin-slow" />
                <span className="text-[10px]">Waiting...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationVisualizer;
