"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FEATURES, FeatureItem } from "@/constants/stickyScrollReveal";
import AutomationVisualizer from "@/components/AutomationVisualizer";
import TwentyFourHourOperation from "@/components/TwentyFourHourOperation";

// Internal component for the sequenced Real-time Dashboard animation
const RealTimeDashboard = () => {
  const [step, setStep] = useState(0);
  const [leads, setLeads] = useState(1242);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // 클라이언트에서만 시간 업데이트
    if (typeof window !== "undefined") {
      const updateTime = () => {
        setCurrentTime(new Date().toLocaleTimeString());
      };
      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const sequence = async () => {
      while (isMounted) {
        // Step 0: 스캔 (2초) - Campaign Report 활성화를 4초 빠르게 하기 위해 대기 시간 단축
        if (isMounted) setStep(0);
        await new Promise((r) => setTimeout(r, 1200)); // 2초에서 1.2초로 변경하여 0.8초 빠르게

        // Step 1: 감지 (0.6초) - Campaign Report 활성화를 4초 빠르게 하기 위해 대기 시간 단축
        if (isMounted) setStep(1);
        await new Promise((r) => setTimeout(r, 0)); // 0.6초에서 0초로 변경하여 0.6초 빠르게

        // Step 2: 라인 그리기 1 (0.8초) - Campaign Report 활성화를 4초 빠르게 하기 위해 대기 시간 단축
        if (isMounted) setStep(2);
        await new Promise((r) => setTimeout(r, 0)); // 0.8초에서 0초로 변경하여 0.8초 빠르게

        // Step 3: 알림 표시 (1초) - Campaign Report 활성화를 4초 빠르게 하기 위해 대기 시간 제거
        if (isMounted) setStep(3);
        // await new Promise((r) => setTimeout(r, 1000));

        // Step 4: 라인 그리기 2 (0.8초) - Campaign Report 활성화를 위해 즉시 Step 5로 진행
        if (isMounted) setStep(4);
        // Step 5를 4초 빠르게 하기 위해 Step 4 대기 시간 제거
        // await new Promise((r) => setTimeout(r, 800));

        // Step 5: 리포트 업데이트 (3초) - leads 숫자 증가 - 4초 빠르게 시작
        if (isMounted) {
          setStep(5);
          setLeads((prev) => prev + 12);
        }
        await new Promise((r) => setTimeout(r, 3000));
      }
    };

    sequence();

    return () => {
      isMounted = false;
    };
  }, []);

  // 데이터로그 텍스트 생성
  const logEntries = [
    "[오후 8:58:13] SCANNING_SECTOR_20 ... ACTIVE",
    "[오후 8:58:14] DATA_PROCESSING ... COMPLETE",
    "[오후 8:58:15] CAMPAIGN_UPDATE ... PENDING",
    "[오후 8:58:16] ROI_CALCULATION ... ACTIVE",
    "[오후 8:58:17] SCANNING_SECTOR_21 ... ACTIVE",
    "[오후 8:58:18] DATA_SYNC ... IN_PROGRESS",
    "[오후 8:58:19] CAMPAIGN_ANALYSIS ... ACTIVE",
    "[오후 8:58:20] SCANNING_SECTOR_22 ... ACTIVE",
    "[오후 8:58:21] BUDGET_OPTIMIZATION ... COMPLETE",
    "[오후 8:58:22] SCANNING_SECTOR_23 ... ACTIVE",
    "[오후 8:58:23] DATA_PROCESSING ... COMPLETE",
    "[오후 8:58:24] CAMPAIGN_UPDATE ... PENDING",
    "[오후 8:58:25] ROI_CALCULATION ... ACTIVE",
    "[오후 8:58:26] SCANNING_SECTOR_24 ... ACTIVE",
    "[오후 8:58:27] DATA_SYNC ... IN_PROGRESS",
  ];

  return (
    <div className="w-full h-full relative overflow-hidden bg-gray-900/50">
      {/* 배경 데이터로그 애니메이션 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 animate-scroll-up">
          {/* 무한 스크롤을 위한 연속된 복제본들 - 하나의 컨테이너에 통합 */}
          <div className="flex flex-col text-pink-400/15 text-[10px] font-mono px-6 leading-relaxed">
            {/* 첫 번째 세트 */}
            {logEntries.map((entry, idx) => (
              <div key={idx} className="whitespace-nowrap">
                {entry}
              </div>
            ))}
            {/* 두 번째 세트 - 끊김 없이 연결 */}
            {logEntries.map((entry, idx) => (
              <div key={`dup-1-${idx}`} className="whitespace-nowrap">
                {entry}
              </div>
            ))}
            {/* 세 번째 세트 - 끊김 없이 연결 */}
            {logEntries.map((entry, idx) => (
              <div key={`dup-2-${idx}`} className="whitespace-nowrap">
                {entry}
              </div>
            ))}
            {/* 네 번째 세트 - 추가 복제본으로 끊김 방지 */}
            {logEntries.map((entry, idx) => (
              <div key={`dup-3-${idx}`} className="whitespace-nowrap">
                {entry}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 w-48 h-48 z-10">
        <div className="absolute inset-0 border border-gray-700/50 rounded-full bg-gray-900/80 backdrop-blur-sm"></div>
        <div className="absolute inset-8 border border-gray-700/30 rounded-full"></div>
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(236,72,153,0.1)_60deg,rgba(236,72,153,0.5)_360deg)] animate-[spin_3s_linear_infinite]" />

        <div
          className={`absolute top-10 right-10 w-3 h-3 bg-pink-500 rounded-full transition-all duration-300 ${
            step >= 1
              ? "opacity-100 scale-100 animate-ping"
              : "opacity-0 scale-0"
          }`}
        />
        <div
          className={`absolute top-10 right-10 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_15px_#ec4899] transition-all duration-300 ${
            step >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        />
      </div>

      <div
        className={`absolute top-10 right-[120px] z-20 transition-all duration-500 ease-out ${
          step >= 3
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 -translate-x-4 scale-95"
        }`}
      >
        <div className="bg-gray-800 border border-pink-500/50 px-4 py-2 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.3)] flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-pink-400 font-bold tracking-widest">
              ALERT
            </span>
            <span className="text-sm font-bold text-white whitespace-nowrap">
              New Lead +12%
            </span>
          </div>
        </div>

        <div
          className={`absolute left-[calc(-0.375rem+1.7px)] top-1/2 -translate-y-1/2 w-[9.6px] h-[9.6px] border-2 border-pink-500 bg-gray-900 rounded-full transition-colors duration-300 ${
            step >= 3 ? "bg-pink-500" : "bg-gray-900"
          }`}
        />
        <div className="absolute -right-[4px] top-1/2 -translate-y-1/2 w-[9.6px] h-[9.6px] bg-pink-500 rounded-full" />
      </div>

      <div
        className={`absolute bottom-12 right-12 w-48 bg-gray-800/90 border transition-all duration-300 rounded-xl p-4 shadow-2xl z-20 backdrop-blur-sm ${
          step === 5
            ? "border-pink-400 scale-105 shadow-[0_0_30px_rgba(236,72,153,0.4)]"
            : "border-gray-700"
        }`}
      >
        <div className="flex justify-between items-center border-b border-gray-700/50 pb-2 mb-2">
          <span className="text-[10px] text-gray-400 font-bold uppercase">
            Campaign Report
          </span>
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              step === 5
                ? "bg-pink-500 shadow-[0_0_8px_#ec4899]"
                : "bg-gray-600"
            }`}
          ></div>
        </div>
        <div className="space-y-1">
          <div className="text-xs text-gray-500">Total Leads</div>
          <div className="text-3xl font-bold text-pink-400 tabular-nums transition-colors duration-300">
            {leads.toLocaleString()}
          </div>
        </div>

        <div
          className={`absolute top-[calc(-0.375rem+0.3px)] left-[calc(50%+76px)] -translate-x-1/2 w-[9.6px] h-[9.6px] border-2 rounded-full transition-all duration-300 ${
            step >= 5
              ? "bg-pink-500 border-pink-500 shadow-[0_0_10px_#ec4899]"
              : "bg-gray-800 border-gray-600"
          }`}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
        <svg className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="1" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {step >= 3 && (
            <path
              d="M 195 140 C 175 120, 200 75, 219 70"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeDasharray="300"
              strokeDashoffset="300"
              className="animate-draw-fast"
            />
          )}

          {step >= 3 && (
            <path
              d="M 389 67 C 450 110, 500 155, 442 165"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeDasharray="300"
              strokeDashoffset="300"
              className="animate-draw-fast"
            />
          )}
        </svg>
      </div>
    </div>
  );
};

const DocumentScanVisual = () => {
  const [percent, setPercent] = useState(63);
  const scanBoxRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    startTimeRef.current = Date.now();

    const loopDuration = 4000;
    const scanDuration = 2000;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - (startTimeRef.current || now);
      const timeInLoop = elapsed % loopDuration;

      let newPercent = 63;

      if (timeInLoop < scanDuration) {
        // 스캔 진행 중: 레이저가 위에서 아래로 이동
        const progress = timeInLoop / scanDuration;
        // translateY를 -100% (위)에서 300% (아래)로 이동 (컨테이너 높이의 4배)
        const translateY = -100 + progress * 400;
        if (scanBoxRef.current) {
          scanBoxRef.current.style.transform = `translateY(${translateY}%)`;
        }
        // 퍼센트가 63%에서 100%로 증가
        newPercent = Math.min(100, Math.floor(63 + progress * (100 - 63)));
      } else {
        // 스캔 완료: 레이저를 아래로 숨김
        if (scanBoxRef.current) {
          scanBoxRef.current.style.transform = `translateY(400%)`;
        }
        newPercent = 100;
      }

      setPercent((prev) => (prev !== newPercent ? newPercent : prev));
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const isComplete = percent === 100;

  return (
    <div className="relative group">
      <div className="absolute top-0 left-0 w-56 h-72 bg-gray-800 rounded-xl border border-gray-700 transform translate-x-4 translate-y-4 -rotate-3 opacity-40" />
      <div className="absolute top-0 left-0 w-56 h-72 bg-gray-800 rounded-xl border border-gray-700 transform translate-x-2 translate-y-2 rotate-2 opacity-60" />

      <div className="relative w-56 h-72 bg-gray-900 rounded-xl border border-gray-800 shadow-2xl flex flex-col overflow-hidden z-10">
        <div className="h-8 border-b border-gray-800 flex items-center px-3 gap-2 bg-gray-900/50">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          <div className="ml-auto w-16 h-2 bg-gray-800 rounded-full" />
        </div>

        <div className="flex-1 p-5 space-y-4 relative bg-gray-900">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-2">
              <div className="w-full h-2 rounded bg-gray-800 overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-amber-500/80 transform -translate-x-full animate-[flow_2s_linear_infinite]`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              </div>
              {i % 2 === 0 && <div className="w-1/3 h-2 rounded bg-gray-800" />}
            </div>
          ))}

          {/* 첫 번째 팝업 데이터 박스 - 좌측 상단, 조화로운 비율로 조정 */}
          <div
            className="absolute top-[20%] left-[8%] bg-gray-800 border border-amber-500/30 p-2.5 rounded-md shadow-lg animate-[pop-data-wait_4s_linear_infinite]"
            style={{ animationDelay: "4.7s", opacity: 0 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <div className="h-1.5 w-10 bg-gray-600 rounded" />
            </div>
          </div>

          {/* 두 번째 팝업 데이터 박스 - 우측 중상단, 조화로운 비율로 조정 */}
          <div
            className="absolute top-[28%] right-[8%] bg-gray-800 border border-amber-500/30 p-2.5 rounded-md shadow-lg animate-[pop-data-wait_4s_linear_infinite]"
            style={{ animationDelay: "5s", opacity: 0 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <div className="h-1.5 w-14 bg-gray-600 rounded" />
            </div>
            <div className="mt-1.5 h-1 w-10 bg-gray-700 rounded ml-5" />
          </div>
        </div>

        <div
          ref={scanBoxRef}
          className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent pointer-events-none border-b border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
          style={{ transform: "translateY(-100%)" }}
        />

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div
            className={`px-3 py-1 bg-gray-800 border rounded-full text-[10px] font-mono flex items-center gap-2 shadow-lg transition-colors duration-300 ${
              isComplete
                ? "border-green-500/40 text-green-400"
                : "border-amber-500/20 text-amber-500"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isComplete ? "bg-green-400" : "bg-amber-400"
                }`}
              ></span>
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  isComplete ? "bg-green-500" : "bg-amber-500"
                }`}
              ></span>
            </span>
            Extracted: {percent}%
          </div>
        </div>
      </div>
    </div>
  );
};

const BudgetOptimizationVisual = ({ isActive }: { isActive: boolean }) => {
  const [budget, setBudget] = useState(3000);
  const [sliderWidth, setSliderWidth] = useState(90);
  const [isClicking, setIsClicking] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    if (isActive) {
      startTimeRef.current = Date.now();
    }
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    let animationFrameId: number;
    const loopDuration = 5000;
    startTimeRef.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      const timeInLoop = elapsed % loopDuration;

      // 초기 상태 (0-1초)
      if (timeInLoop < 1000) {
        setBudget(3000);
        setSliderWidth(90);
        setIsClicking(false);
        setShowResult(false);
      }
      // 대기 (1-1.8초)
      else if (timeInLoop < 1800) {
        setIsClicking(false);
      }
      // 클릭 시작 (1.8-2초)
      else if (timeInLoop < 2000) {
        setIsClicking(true);
      }
      // 슬라이더 드래그: 90%에서 15%로 (2-3.5초)
      else if (timeInLoop < 3500) {
        const progress = (timeInLoop - 2000) / 1500;
        // ease-out 함수를 사용하여 더 자연스러운 감속 효과
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const startWidth = 90;
        const targetWidth = 15;
        const currentWidth =
          startWidth - (startWidth - targetWidth) * easedProgress;

        setSliderWidth(currentWidth);

        // 예산이 $3000에서 $500으로 변경 (숫자가 줄어드는 타이밍에 맞춤)
        const budgetRange = 3000 - 500;
        const widthRange = 90 - 15;
        const widthPercent = (currentWidth - 15) / widthRange;
        const currentBudget = 500 + Math.floor(widthPercent * budgetRange);
        setBudget(Math.max(500, Math.min(3000, currentBudget)));

        setIsClicking(true);
      }
      // 클릭 종료 (3.5-3.8초)
      else if (timeInLoop < 3800) {
        setIsClicking(false);
        setBudget(500);
        setSliderWidth(15);
      }
      // 결과 표시: Efficiency Score A+ 및 ROI 박스 강조 (3.8-5초)
      else {
        setShowResult(true);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isActive]);

  return (
    <div className="w-72 bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-2xl overflow-hidden relative select-none">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.15-1.46-3.27-3.4h1.96c.1 1.05 1.19 1.66 2.53 1.66 1.95 0 2.56-1.1 2.56-1.93 0-1.29-1.32-1.72-3.35-2.12-2.38-.47-3.52-1.29-3.52-3.2 0-1.9 1.34-3.1 3.09-3.44V4h2.67v1.93c1.61.35 2.89 1.48 2.99 3.06h-1.97c-.12-.8-1.02-1.42-2.01-1.42-1.63 0-2.39 1.12-2.39 1.83 0 1.05.97 1.49 3.35 1.98 2.5.52 3.52 1.4 3.52 3.2 0 2.13-1.62 3.32-3.48 3.51z" />
        </svg>
      </div>

      <div className="flex justify-between items-baseline mb-8 relative z-10">
        <span className="text-gray-400 text-sm">Efficiency Score</span>
        <span
          className={`text-3xl font-bold transition-all duration-300 ${
            showResult ? "text-lime-400 scale-125" : "text-gray-500 scale-100"
          }`}
        >
          A+
        </span>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="space-y-3">
          <div className="flex justify-between text-xs items-center">
            <span className="text-gray-300 font-semibold">
              Daily Budget Limit
            </span>
            <span
              className={`font-mono transition-all duration-150 ease-out ${
                isClicking ? "text-lime-400" : "text-gray-400"
              }`}
            >
              ${budget.toLocaleString()}
            </span>
          </div>

          <div className="h-2 bg-gray-700 rounded-full w-full relative overflow-visible">
            <div
              className="absolute top-0 left-0 h-full bg-lime-500 rounded-full"
              style={{ width: `${sliderWidth}%` }}
            />
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full ${
                isClicking
                  ? "scale-[1.15] shadow-[0_0_8px_rgba(163,230,53,0.4),0_0_12px_rgba(132,204,22,0.3)]"
                  : "scale-100 shadow-lg"
              }`}
              style={{
                left: `${sliderWidth}%`,
                transform: "translate(-50%, -50%)",
                transition: isClicking ? "none" : "transform 0.3s ease-out",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="bg-gray-800/50 p-2 rounded border border-gray-700">
            <div className="text-[10px] text-gray-500">CPA</div>
            <div className="text-sm text-white">$12.50</div>
          </div>
          <div
            className={`bg-gray-800/50 p-2 rounded border transition-all duration-500 ${
              showResult
                ? "border-lime-500/50 bg-lime-900/20 shadow-[0_0_8px_rgba(163,230,53,0.25),0_0_12px_rgba(132,204,22,0.2),inset_0_0_4px_rgba(163,230,53,0.1)]"
                : "border-gray-700"
            }`}
          >
            <div className="text-[10px] text-gray-500">ROI</div>
            <div
              className={`text-sm font-bold ${
                showResult ? "text-lime-400" : "text-white"
              }`}
            >
              340%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoiProtectionVisual = () => {
  const [showWarning, setShowWarning] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    let frameId: number;
    const duration = 3000;
    startTimeRef.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = (now - startTimeRef.current) % duration;
      const progress = elapsed / duration;

      // 그래프 라인이 그려지도록 strokeDashoffset 조정
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        pathRef.current.style.strokeDasharray = `${length}`;
        pathRef.current.style.strokeDashoffset = `${length * (1 - progress)}`;
      }

      // 40%-90% 구간에서 "AUTO-STOPPED" 배지 표시
      if (progress > 0.4 && progress < 0.9) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div className="w-72 h-64 bg-gray-900 border border-gray-800 rounded-xl relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

      <svg className="absolute inset-0 w-full h-full p-4 overflow-visible">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="40%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
        </defs>

        <line
          x1="0"
          y1="120"
          x2="100%"
          y2="120"
          stroke="#ef4444"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.5"
        />

        <path
          ref={pathRef}
          d="M 0 80 C 60 80, 90 120, 120 120 L 160 120 C 200 120, 240 60, 300 50"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute z-10 flex flex-col items-center top-1/2 -translate-y-1/2">
        <div className="relative group mb-3">
          <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />

          <div className="w-16 h-16 bg-gray-900 border-2 border-red-500/50 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.2)] transform transition-transform animate-[pop-in_3s_ease-in-out_infinite]">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>

        <div
          className={`transition-all duration-300 transform ${
            showWarning
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-2 scale-95"
          } px-3 py-1 bg-red-950 border border-red-500/30 rounded text-[10px] text-red-400 font-mono tracking-wider flex items-center gap-2 shadow-lg`}
        >
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
          AUTO-STOPPED
        </div>
      </div>
    </div>
  );
};

const StickyScrollReveal: React.FC = () => {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const cardElements = cardRefs.current;
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      cardElements.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const renderCardVisual = (index: number, color: string) => {
    switch (index) {
      case 0:
        return <DocumentScanVisual />;

      case 1:
        return <AutomationVisualizer />;

      case 2:
        // 24시간 지속 운영
        return <TwentyFourHourOperation />;

      case 3:
        return <RealTimeDashboard />;

      case 4:
        return <BudgetOptimizationVisual isActive={activeCard === index} />;

      case 5:
        return <RoiProtectionVisual />;

      default:
        return null;
    }
  };

  return (
    <section className="bg-black py-10 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 헤더 섹션 - 원본 디자인 복원 */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            사업자는 다시 <span className="text-purple-500">'사업'</span>에
            집중할 수 있습니다
          </h2>
          <div className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto flex flex-col items-center gap-1">
            <p>마케팅을 관리하지 마세요.</p>
            <p>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_auto] animate-flow">
                마케팅이 스스로 작동
              </span>
              하게 하세요.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex gap-10">
          <div className="w-1/2 sticky top-[calc(50vh-200px)] h-[400px] flex items-center justify-center">
            <div className="relative flex items-center -translate-x-10">
              <div className="w-[550px] h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-black/80 backdrop-blur-md relative z-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                {FEATURES.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex flex-col items-center justify-center pl-8 pr-2 py-8 transition-all duration-500 ease-in-out ${
                      activeCard === index
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-8 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="flex-1 w-full flex items-center justify-center relative">
                      <div className="w-full h-full flex items-center justify-center">
                        {renderCardVisual(index, feature.color)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute left-full ml-6 flex flex-col gap-2 z-20 top-1/2 -translate-y-1/2">
                {FEATURES.map((feature, index) => {
                  // 각 feature의 색상을 명확하게 적용
                  const getColorStyle = () => {
                    if (activeCard !== index) return {};
                    const colorMap: { [key: string]: string } = {
                      "from-amber-500 to-orange-600":
                        "linear-gradient(to right, rgb(245, 158, 11), rgb(234, 88, 12))",
                      "from-emerald-500 to-cyan-600":
                        "linear-gradient(to right, rgb(16, 185, 129), rgb(8, 145, 178))",
                      "from-purple-600 to-blue-600":
                        "linear-gradient(to right, rgb(147, 51, 234), rgb(37, 99, 235))",
                      "from-pink-600 to-rose-600":
                        "linear-gradient(to right, rgb(219, 39, 119), rgb(225, 29, 72))",
                      "from-lime-400 to-green-600":
                        "linear-gradient(to right, rgb(163, 230, 53), rgb(22, 163, 74))",
                      "from-red-600 to-orange-600":
                        "linear-gradient(to right, rgb(220, 38, 38), rgb(234, 88, 12))",
                    };
                    return {
                      background:
                        colorMap[feature.color] ||
                        `linear-gradient(to right, ${feature.color})`,
                    };
                  };

                  return (
                    <button
                      key={index}
                      onClick={() => scrollToSection(index)}
                      className={`group relative flex items-center justify-center transition-all duration-300 ${
                        activeCard === index
                          ? "w-6 h-6"
                          : "w-4 h-4 hover:scale-110"
                      }`}
                      aria-label={`Scroll to ${feature.title}`}
                    >
                      <div
                        className={`rounded-full transition-all duration-300 ${
                          activeCard === index
                            ? `w-4 h-4 shadow-[0_0_12px_rgba(255,255,255,0.8)]`
                            : "w-2 h-2 bg-gray-600 group-hover:bg-gray-400"
                        }`}
                        style={getColorStyle()}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="h-[30vh] flex flex-col justify-center px-8"
              >
                <div
                  className={`transition-all duration-500 ${
                    activeCard === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-40 translate-x-10"
                  }`}
                >
                  <h3 className="text-4xl font-bold mb-4">
                    <span
                      className={`bg-clip-text text-transparent bg-gradient-to-r ${feature.color} font-extrabold`}
                    >
                      {feature.title}
                    </span>{" "}
                    <span className="text-white font-extrabold">
                      {feature.highlight}
                    </span>
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="h-[50vh]" />
          </div>
        </div>

        <div className="lg:hidden flex flex-col gap-12">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 overflow-hidden relative"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-20 blur-2xl rounded-full`}
              />
              <h3
                className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${feature.color} mb-2`}
              >
                {feature.title}
              </h3>
              <div className="text-2xl font-bold text-white mb-4">
                {feature.highlight}
              </div>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyScrollReveal;
