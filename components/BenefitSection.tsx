"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    title: "손실 마케팅 빠르게 중단",
    description: "ROI가 마이너스로 전환되는 순간 자동으로 캠페인을 중단하여 손실을 최소화합니다",
  },
  {
    title: "소규모 예산으로도 빠른 시장 검증",
    description: "제한된 예산으로도 효율적인 마케팅 테스트가 가능하여 빠른 의사결정을 지원합니다",
  },
  {
    title: "마케팅 관리 시간 대폭 감소",
    description: "24시간 자동 운영으로 마케팅 관리에 소요되던 시간을 사업에 집중할 수 있습니다",
  },
  {
    title: "불안 대신 데이터 기반 확신",
    description: "실시간 ROI 데이터를 바탕으로 한 객관적 판단으로 마케팅에 대한 불안을 해소합니다",
  },
];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(12, 0, 32, 0.65)',
                border: '1px solid rgba(18, 0, 48, 0.6)'
              }}
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Block */}
        <div
          className="p-8 rounded-lg backdrop-blur-md text-center"
          style={{
            backgroundColor: 'rgba(18, 0, 48, 0.75)',
            border: '2px solid rgba(147, 51, 234, 0.5)'
          }}
        >
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            마케팅을 관리하지 마세요
            <br />
            <span className="text-purple-400">마케팅이 스스로 작동하게 하세요</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;

