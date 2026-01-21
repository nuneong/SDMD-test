import React, { useState } from "react";
import { motion } from "framer-motion";
import { TimeRing } from "./TimeRing";
import { AICore } from "./AICore";
import { OrbitNodes } from "./OrbitNodes";

export default function TwentyFourHourOperation() {
  const [currentPhase, setCurrentPhase] = useState<string>("Initializing");

  const getPhaseDescription = (phase: string) => {
    switch (phase) {
      case "campaign":
        return "타겟 오디언스 분석 및 맞춤형 캠페인 자동 실행 중...";
      case "analysis":
        return "실시간 성과 데이터 수집 및 ROI 정밀 분석 중...";
      case "evolution":
        return "분석 데이터 기반 AI 모델 재학습 및 전략 최적화 중...";
      default:
        return "시스템 대기 중";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* 550px x 400px Fixed Container */}
      <div className="relative w-[550px] h-[400px] flex items-center justify-center overflow-hidden">
        {/* 
            Content Wrapper 
            - Original Size: 500x500px (plus external text)
            - Scale: 0.72 (120% of previous 0.6 scale)
            - Translate Y: -22px (Shifts up to accommodate the bottom status text, then down 10px)
         */}
        <div className="relative w-[500px] h-[500px] flex-shrink-0 flex items-center justify-center scale-[0.72] -translate-y-[22px] origin-center">
          {/* Layer 1: Time Ring */}
          <TimeRing speedMultiplier={2} />

          {/* Layer 2: Orbiting Logic */}
          <OrbitNodes onPhaseChange={setCurrentPhase} />

          {/* Layer 3: The Core */}
          <AICore />

          {/* Status Message Overlay */}
          <div className="absolute -bottom-[88px] left-0 right-0 text-center w-full flex flex-col items-center translate-x-[10px]">
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <div className="text-xs font-mono text-cyan-500 mb-2 uppercase tracking-[0.2em] opacity-80">
                System Status
              </div>
              <div className="text-sm font-medium text-slate-200 bg-slate-900/80 px-8 py-3 rounded-full border border-slate-700/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md whitespace-nowrap">
                {getPhaseDescription(currentPhase)}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
