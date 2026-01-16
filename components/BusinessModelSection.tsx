"use client";

import { useRouter } from "next/navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Starter",
    price: "무료",
    features: [
      "기본 지식베이스 구축",
      "제한된 문서 처리",
      "기본 마케팅 자동화",
    ],
  },
  {
    name: "Professional",
    price: "월 구독",
    features: [
      "무제한 지식베이스",
      "대용량 문서 처리",
      "고급 마케팅 자동화",
      "우선 지원",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "맞춤형",
    features: [
      "전체 기능 포함",
      "전담 지원",
      "커스텀 통합",
      "SLA 보장",
    ],
  },
];

const BusinessModelSection = () => {
  const router = useRouter();
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
          플랜 선택
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                plan.popular ? "ring-2 ring-purple-500" : ""
              }`}
              style={{
                backgroundColor: plan.popular 
                  ? 'rgba(18, 0, 48, 0.75)' 
                  : 'rgba(12, 0, 32, 0.65)',
                border: '1px solid rgba(18, 0, 48, 0.6)'
              }}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: 'rgba(147, 51, 234, 0.7)' }}>
                    인기
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-purple-400 mb-6">
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <svg
                      className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5"
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push(`/pricing?plan=${plan.name.toLowerCase()}`)}
                className="w-full py-3 rounded-lg font-medium transition-all"
                style={{
                  backgroundColor: plan.popular
                    ? 'rgba(147, 51, 234, 0.7)'
                    : 'rgba(147, 51, 234, 0.5)',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(126, 34, 206, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = plan.popular
                    ? 'rgba(147, 51, 234, 0.7)'
                    : 'rgba(147, 51, 234, 0.5)';
                }}
              >
                시작하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;

