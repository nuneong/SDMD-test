"use client";

import React from 'react';
import { CloudUpload, Brain, PenTool, RefreshCw, RotateCw, TrendingUp } from 'lucide-react';
import CircularNode from './CircularNode';
import { ConnectionLines, MobileArrow } from './ConnectionLines';
import { ProcessItem } from '@/types/process';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Data Definitions
const dataUpload: ProcessItem = {
  id: 'upload',
  title: '데이터 업로드 & 구조화',
  subTitle: 'Data Upload & Structuring',
  icon: CloudUpload,
  items: ['광고 플랫폼 데이터', '쇼핑몰 / 매출 데이터', '운영 데이터'],
  position: 'left'
};

const growth: ProcessItem = {
  id: 'growth',
  title: '지속적 수익 성장',
  subTitle: 'Sustainable Revenue Growth',
  icon: TrendingUp,
  items: ['ROI 지속적 개선', '비용 효율성 최적화', '장기적 수익성 확보'],
  position: 'right'
};

const cycleItems: ProcessItem[] = [
  {
    id: 'strategy',
    title: '전략·맥락 기반 콘텐츠 생성',
    subTitle: 'Strategy & Context-based Content Generation',
    icon: PenTool,
    items: ['학습된 데이터 기반 전략 수립', '맥락에 맞는 콘텐츠 자동 생성', '캠페인별 맞춤 메시지 최적화'],
    position: 'center-top'
  },
  {
    id: 'auto',
    title: '24/7 실시간 자율 운영',
    subTitle: '24/7 Real-time Autonomous Operation',
    icon: RefreshCw,
    items: ['실시간 ROI 기준 캠페인 조정', '손실 발생 시 즉각 대응', '성과 구간 자동 확장'],
    position: 'center-right'
  },
  {
    id: 'relearn',
    title: '결과 재학습 & 전략 진화',
    subTitle: 'Result Re-learning & Strategy Evolution',
    icon: RotateCw,
    items: ['운영 결과 데이터 수집', '성공/실패 패턴 분석', '전략 자동 개선 및 진화'],
    position: 'center-bottom'
  },
  {
    id: 'rag',
    title: 'RAG 기반 AI 학습 & 의미화',
    subTitle: 'RAG-based AI Learning & Semanticization',
    icon: Brain,
    items: ['사업자 데이터 학습', '의미 없는 로그를 의사결정 데이터로 전환', '맥락 기반 지식 그래프 구축'],
    position: 'center-left'
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const TRACK_RADIUS = 280; 

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-[26px] pt-[42px] pb-[400px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center max-w-[1920px]">
        {/* Header */}
        <header className="mb-40 text-center max-w-4xl relative z-30">
          <div className="inline-block px-3 py-1 mb-3 border border-purple-500/30 rounded-full bg-purple-900/10 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-widest text-purple-300 uppercase">System Architecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-tight">
            AI Growth Intelligence
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto font-normal">
            데이터가 전략이 되고, 실행으로 이어지며, 지속적인 학습을 통해 스스로 진화하는 생태계
          </p>
        </header>

        {/* Diagram Container */}
        {/* max-w-[1920px] and justify-between ensures maximum distance */}
        <div 
          className="relative w-full max-w-[1920px] flex flex-col lg:flex-row items-center justify-between lg:h-[700px]"
          style={{ '--track-radius': `${TRACK_RADIUS}px` } as React.CSSProperties}
        >
          {/* SVG Connection Layer */}
          <ConnectionLines />

          {/* 1. Left Node: Input (Secondary) */}
          {/* Pinned to start (left) */}
          <div className="relative z-20 flex-shrink-0 lg:w-[280px] flex justify-center lg:justify-start lg:pl-12">
            <CircularNode data={dataUpload} size="medium" variant="secondary" />
                  </div>
          <MobileArrow />

          {/* 2. Center Hub: Core Cycle (Primary) */}
          <div className="relative z-20 flex-grow h-[600px] lg:h-full w-full flex items-center justify-center">
            {/* Visual Tracks */}
            {/* Main Orbit Track */}
            <div className="absolute w-[calc(var(--track-radius)*2)] h-[calc(var(--track-radius)*2)] border-2 border-purple-500/20 rounded-full shadow-[0_0_60px_rgba(168,85,247,0.05)]" />
            
            {/* Inner Rotating Ring */}
            <div className="absolute w-[calc(var(--track-radius)*2-40px)] h-[calc(var(--track-radius)*2-40px)] border border-dashed border-purple-500/10 rounded-full animate-[spin_120s_linear_infinite]" />
            
            {/* Center Core Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="w-24 h-24 rounded-full bg-purple-500/5 blur-2xl absolute" />
              <span className="text-purple-400/80 font-bold text-xs uppercase tracking-[0.2em] mb-1">Autonomous</span>
              <span className="text-white font-bold text-2xl tracking-tighter">AI AGENT</span>
              <span className="text-purple-400/80 font-bold text-xs uppercase tracking-[0.2em] mt-1 mb-2">Cycle</span>
              <span className="text-emerald-500 font-semibold text-sm">Active Learning</span>
                </div>
                
            {/* Nodes Container - Positioned precisely on the track */}
            <div className="relative w-full h-full max-w-[800px] max-h-[800px]">
              {/* Top Node (RAG) */}
              <div className="flex justify-center mb-8 lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:[transform:translate(-50%,-50%)_translateY(calc(-1*var(--track-radius)))] z-30">
                <CircularNode data={cycleItems[0]} size="medium" variant="primary" />
              </div>
              <MobileArrow />
                  
              {/* Right Node (Strategy) */}
              <div className="flex justify-center mb-8 lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:[transform:translate(-50%,-50%)_translateX(var(--track-radius))] z-30">
                <CircularNode data={cycleItems[1]} size="medium" variant="primary" />
              </div>
              <MobileArrow />

              {/* Bottom Node (Auto) */}
              <div className="flex justify-center mb-8 lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:[transform:translate(-50%,-50%)_translateY(var(--track-radius))] z-30">
                <CircularNode data={cycleItems[2]} size="medium" variant="primary" />
              </div>
              <MobileArrow />

              {/* Left Node (Re-learn) */}
              <div className="flex justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:[transform:translate(-50%,-50%)_translateX(calc(-1*var(--track-radius)))] z-30">
                <CircularNode data={cycleItems[3]} size="medium" variant="primary" />
              </div>
            </div>
          </div>

          <MobileArrow />

          {/* 3. Right Node: Output (Secondary) */}
          {/* Pinned to end (right) */}
          <div className="relative z-20 flex-shrink-0 lg:w-[280px] flex justify-center lg:justify-end lg:pr-12">
            <CircularNode data={growth} size="medium" variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
