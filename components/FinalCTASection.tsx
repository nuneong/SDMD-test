"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const handleMVPPreview = () => {
    console.log("MVP 미리보기 클릭");
    // MVP 미리보기 로직
  };

  const handleDemoRequest = () => {
    console.log("서비스 데모 요청 클릭");
    // 데모 요청 로직
  };

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          마케팅을 운영하는 마지막 방법
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          실시간 ROI 기반
          <br />
          스스로 진화하는 마케팅 에이전트를 경험하세요
        </p>

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
            👉 MVP 먼저 사용해보기
          </button>

          {/* Secondary CTA */}
          <button
            onClick={handleDemoRequest}
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
            👉 서비스 데모 요청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

