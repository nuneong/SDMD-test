"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "1",
    title: "데이터 연결",
    subtitle: "Data Connection",
    items: [
      "광고 플랫폼",
      "쇼핑몰 / 매출 데이터",
      "운영 데이터"
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "AI 학습",
    subtitle: "AI Learning",
    description: "RAG 기반 사업자 데이터 학습",
    detail: "의미 없는 로그 데이터를 의사결정 가능한 데이터로 전환",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "자동 운영",
    subtitle: "Auto Operation",
    items: [
      "실시간 ROI 기준 캠페인 조정",
      "손실 발생 시 즉각 대응",
      "성과 구간 자동 확장"
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 pt-8 pb-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Molfuse는 이렇게 작동합니다
        </h2>
        
        {/* One-liner */}
        <p className="text-xl md:text-2xl font-bold text-white text-center mb-12">
          보여주는 도구가 아니라
          <br />
          <span className="text-purple-400">결정하고 실행하는 AI</span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl backdrop-blur-md"
              style={{
                backgroundColor: 'rgba(12, 0, 32, 0.65)',
                border: '1px solid rgba(18, 0, 48, 0.6)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-purple-400 mb-4 mx-auto"
                    style={{
                      backgroundColor: 'rgba(147, 51, 234, 0.2)',
                      border: '2px solid rgba(147, 51, 234, 0.5)'
                    }}
                  >
                    {step.number}
                  </div>
                  <div className="text-purple-400 flex justify-center">
                    {step.icon}
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{step.subtitle}</p>
                  
                  {step.description && (
                    <p className="text-lg text-purple-400 font-semibold mb-3">
                      {step.description}
                    </p>
                  )}
                  
                  {step.detail && (
                    <p className="text-gray-300 mb-4">
                      {step.detail}
                    </p>
                  )}
                  
                  {step.items && (
                    <ul className="space-y-2">
                      {step.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 justify-center md:justify-start">
                          <svg
                            className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

