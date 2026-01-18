"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "RAG 기술이 무엇인가요?",
    answer: "RAG(Retrieval-Augmented Generation)는 대규모 언어 모델에 검색 시스템을 결합한 기술로, 외부 지식베이스에서 정보를 검색하여 더 정확하고 최신의 답변을 제공합니다.",
  },
  {
    question: "어떤 종류의 문서를 업로드할 수 있나요?",
    answer: "PDF, Word, 텍스트 파일 등 다양한 형식의 문서를 지원합니다. 대용량 PDF 파일도 처리 가능합니다.",
  },
  {
    question: "지식베이스는 어떻게 업데이트되나요?",
    answer: "새로운 문서를 업로드하면 자동으로 지식베이스에 반영되며, 실시간으로 최신 정보를 활용할 수 있습니다.",
  },
  {
    question: "무료 플랜과 유료 플랜의 차이는 무엇인가요?",
    answer: "무료 플랜은 기본 기능을 제공하며, 유료 플랜은 대용량 문서 처리, 고급 자동화 기능, 우선 지원 등을 포함합니다.",
  },
  {
    question: "데이터 보안은 어떻게 보장되나요?",
    answer: "모든 데이터는 암호화되어 저장되며, 엄격한 보안 정책을 준수합니다. Enterprise 플랜에서는 추가 보안 옵션을 제공합니다.",
  },
  {
    question: "어떻게 시작할 수 있나요?",
    answer: "상단의 'Get started' 버튼을 클릭하거나 구글 로그인을 통해 바로 시작할 수 있습니다. 무료 플랜으로 먼저 체험해보실 수 있습니다.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 pt-10 pb-10 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          자주 묻는 질문
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg backdrop-blur-md transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: 'rgba(12, 0, 32, 0.65)',
                border: '1px solid rgba(18, 0, 48, 0.6)'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-opacity-80 transition-colors"
                style={{
                  backgroundColor: openIndex === index 
                    ? 'rgba(15, 0, 45, 0.8)' 
                    : 'transparent'
                }}
              >
                <span className="text-white font-medium pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-300 leading-relaxed border-t"
                  style={{ borderColor: 'rgba(18, 0, 48, 0.6)' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

