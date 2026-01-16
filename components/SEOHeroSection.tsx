"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SEOHeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleMVPPreview = () => {
    console.log("MVP 미리보기 클릭");
    // MVP 미리보기 로직
  };

  const handleHowItWorks = () => {
    console.log("작동 방식 보기 클릭");
    // 작동 방식 섹션으로 스크롤
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <p className="text-lg text-gray-300">
            불투명한 광고를 데이터로 투명하게
          </p>
          <p className="text-lg text-gray-300">
            손실은 빠르게 차단하고, 성과는 즉시 확장
          </p>
          <p className="text-lg text-gray-300">
            사업자는 제품과 성장에만 집중
          </p>
        </div>

        {/* Trust Micro Copy */}
        <div
          className="p-6 rounded-lg backdrop-blur-md mb-12 max-w-2xl mx-auto"
          style={{
            backgroundColor: 'rgba(12, 0, 32, 0.65)',
            border: '1px solid rgba(18, 0, 48, 0.6)'
          }}
        >
          <p className="text-gray-300 leading-relaxed">
            <span className="text-purple-400 font-semibold">RAG 기반 사업자 데이터 학습</span>
            <br />
            광고·매출·운영 데이터를 하나의 ROI 시그널로 통합
          </p>
        </div>

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
            👉 MVP 미리보기
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
            👉 작동 방식 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default SEOHeroSection;

