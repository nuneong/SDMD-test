"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyNowSection = () => {
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
          지금 시작해야 하는 이유
        </h2>
        
        <div className="space-y-8">
          <div
            className="p-8 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <p className="text-xl text-white text-center leading-relaxed">
              <span className="text-purple-400 font-semibold">AI는 이미 모든 산업의 기본 인프라</span>
            </p>
          </div>
          
          <div
            className="p-8 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <p className="text-xl text-white text-center leading-relaxed">
              하지만 <span className="text-purple-400 font-semibold">마케팅은 여전히 사람 중심</span>
            </p>
          </div>
          
          <div
            className="p-8 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <p className="text-xl text-white text-center leading-relaxed">
              <span className="text-purple-400 font-semibold">ROI 기반 자동화는 아직 표준이 아님</span>
            </p>
          </div>
          
          <div
            className="p-8 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(18, 0, 48, 0.75)',
              border: '2px solid rgba(147, 51, 234, 0.5)'
            }}
          >
            <p className="text-2xl md:text-3xl font-bold text-white text-center leading-relaxed">
              지금이 <span className="text-purple-400">판을 다시 짤 수 있는 타이밍</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;

