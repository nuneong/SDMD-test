"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
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
          마케팅은 필수지만, 판단은 불가능합니다
        </h2>
        
        <div className="space-y-6 mb-12">
          <div
            className="p-6 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              광고는 집행하지만 실시간 수익 여부를 알 수 없습니다
            </p>
          </div>
          
          <div
            className="p-6 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              성과 데이터는 며칠 뒤에야 확인됩니다
            </p>
          </div>
          
          <div
            className="p-6 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              GA4·메타·구글 광고 데이터는 지연과 단절 문제가 있습니다
            </p>
          </div>
          
          <div
            className="p-6 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              마케팅을 멈출 수도, 계속할 수도 없는 의사결정 공백
            </p>
          </div>
        </div>

        {/* Emphasis Block */}
        <div
          className="p-8 rounded-lg backdrop-blur-md text-center"
          style={{
            backgroundColor: 'rgba(18, 0, 48, 0.75)',
            border: '2px solid rgba(147, 51, 234, 0.5)'
          }}
        >
          <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
            마케팅을 안 하면 매출이 멈추고
            <br />
            마케팅을 하면 손실이 날까 불안합니다
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

