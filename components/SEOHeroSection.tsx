"use client";

import { useRouter } from "next/navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const SEOHeroSection = () => {
  const router = useRouter();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleMVPPreview = () => {
    // Get started와 동일한 기능 - /get-started로 이동
    router.push("/get-started");
  };

  const handleHowItWorks = () => {
    // product 페이지로 이동
    router.push("/product");
  };

  return (
    <section
      ref={ref}
      className={`relative min-h-screen flex flex-col items-center justify-center px-4 py-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* H1 - SEO 핵심 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          실시간 ROI로 증명되는
          <br />
          <span className="text-purple-400">AI 마케팅 자동 운영 플랫폼</span>
        </h1>

        {/* Sub Headline */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          사람이 24시간 할 수 없던
          <br />
          디지털 마케팅 운영을 자동화합니다
        </h2>

        {/* Supporting Copy */}
        <div className="space-y-4 mb-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 text-purple-400 flex-shrink-0"
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
            <p className="text-lg text-gray-300">
              불투명한 광고를 데이터로 투명하게
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 text-purple-400 flex-shrink-0"
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
            <p className="text-lg text-gray-300">
              손실은 빠르게 차단하고, 성과는 즉시 확장
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <svg
              className="w-6 h-6 text-purple-400 flex-shrink-0"
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
            <p className="text-lg text-gray-300">
              사업자는 제품과 성장에만 집중
            </p>
          </div>
        </div>

        {/* Trust Micro Copy */}
        <motion.div
          className="p-6 rounded-lg backdrop-blur-md mb-12 max-w-2xl mx-auto relative overflow-hidden metallic-shine"
          style={{
            backgroundColor: 'rgba(12, 0, 32, 0.65)',
            border: '1px solid rgba(18, 0, 48, 0.6)'
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            borderColor: 'rgba(147, 51, 234, 0.8)',
            backgroundColor: 'rgba(18, 0, 48, 0.75)',
            boxShadow: '0 10px 40px rgba(147, 51, 234, 0.3)'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
        >
          {/* Shine overlay */}
          <div className="absolute inset-0 shine-overlay pointer-events-none"></div>
          <p className="text-gray-300 leading-relaxed relative z-10">
            <span className="text-purple-400 font-semibold">RAG 기반 사업자 데이터 학습</span>
            <br />
            광고·매출·운영 데이터를 하나의 ROI 시그널로 통합
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Primary CTA */}
          <button
            onClick={handleMVPPreview}
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            style={{
              background: 'linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(126, 34, 206, 0.8))',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, rgba(147, 51, 234, 1), rgba(126, 34, 206, 1))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(126, 34, 206, 0.8))';
            }}
          >
            MVP 사용해보기
          </button>

          {/* Secondary CTA */}
          <button
            onClick={handleHowItWorks}
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '2px solid rgba(147, 51, 234, 0.5)',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(18, 0, 48, 0.85)';
              e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(12, 0, 32, 0.65)';
              e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.5)';
            }}
          >
            작동 방식 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default SEOHeroSection;

