"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const performanceMetrics = [
  {
    value: "24시간",
    label: "지속 운영",
    description: "언제든지 전문가 지식에 접근 가능",
  },
  {
    value: "실시간",
    label: "업데이트",
    description: "지식베이스가 즉시 반영",
  },
  {
    value: "대용량",
    label: "문서 처리",
    description: "수백 페이지 PDF도 빠르게 처리",
  },
  {
    value: "자동화",
    label: "마케팅",
    description: "수작업 시간을 대폭 절감",
  },
];

const PerformanceSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          성과 지표
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {performanceMetrics.map((metric, index) => (
            <div
              key={index}
              className="p-8 rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-105 text-center"
              style={{
                backgroundColor: 'rgba(12, 0, 32, 0.65)',
                border: '1px solid rgba(18, 0, 48, 0.6)'
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                {metric.value}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {metric.label}
              </div>
              <p className="text-gray-300 text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;

