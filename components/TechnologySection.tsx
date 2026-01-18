"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const technologies = [
  {
    name: "실시간 ROI 모니터링",
    description: "실시간 ROI 시그널로 캠페인별 손익을 즉시 확인합니다",
    icon: (
      <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: "프롬프트 기반 운영",
    description: "프롬프트를 직접 수정하고 이슈 발생 시 즉시 교체할 수 있습니다",
    icon: (
      <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    name: "RAG",
    fullName: "Retrieval-Augmented Generation",
    description: "대규모 언어 모델과 검색 시스템을 결합하여 정확하고 최신의 정보를 제공합니다",
    icon: (
      <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

const TechnologySection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 pt-7 pb-7 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-white text-center mb-16">
          마케팅 운영을 자동화하는
          <br />
          핵심 기능
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-5 rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-105 text-center flex flex-col items-center"
              style={{
                backgroundColor: 'rgba(12, 0, 32, 0.65)',
                border: '1px solid rgba(18, 0, 48, 0.6)'
              }}
            >
              <div className="mb-4">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {tech.name}
              </h3>
              {tech.fullName && (
                <p className="text-sm text-gray-400 mb-4">{tech.fullName}</p>
              )}
              <p className="text-gray-300 leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

