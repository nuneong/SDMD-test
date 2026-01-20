"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";


const BenefitSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 pt-10 pb-5 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          사업자는 다시 <span className="text-purple-400">'사업'</span>에 집중할 수 있습니다
        </h2>
        
        {/* Performance Metrics Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
          <div
            className="p-6 md:p-8 rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-105 text-center"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
              대용량
            </div>
            <div className="text-lg md:text-xl font-semibold text-white mb-2">
              문서 처리
            </div>
            <p className="text-xs md:text-sm text-gray-300">
              수백 페이지 PDF도 빠르게 처리
            </p>
          </div>
          
          <div
            className="p-6 md:p-8 rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-105 text-center"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
              자동화
            </div>
            <div className="text-lg md:text-xl font-semibold text-white mb-2">
              마케팅
            </div>
            <p className="text-xs md:text-sm text-gray-300">
              수작업 시간을 대폭 절감
            </p>
          </div>
          
          <div
            className="p-6 md:p-8 rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-105 text-center"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
              실시간
            </div>
            <div className="text-lg md:text-xl font-semibold text-white mb-2">
              업데이트
            </div>
            <p className="text-xs md:text-sm text-gray-300">
              지식베이스가 즉시 반영
            </p>
          </div>
          
          <div
            className="p-6 md:p-8 rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-105 text-center"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
              24시간
            </div>
            <div className="text-lg md:text-xl font-semibold text-white mb-2">
              지속 운영
            </div>
            <p className="text-xs md:text-sm text-gray-300">
              언제든지 전문가 지식에 접근 가능
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;

