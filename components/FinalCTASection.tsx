"use client";

import { useRouter } from "next/navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const router = useRouter();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const handleGetStarted = () => {
    router.push("/get-started");
  };

  const handleLearnMore = () => {
    router.push("/product");
  };

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 pt-0 pb-10 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          지금 바로{" "}
          <span
            className="molfuse-gradient inline-block relative font-bold"
            data-text="MOLFUSE"
          >
            MOLFUSE
          </span>
          를 시작하세요
        </h2>
        
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          SEO에 최적화된 우리 브랜드에 딱 맞는 웹사이트를 무료로 생성해드립니다.
        </p>
        
        <p className="text-lg text-gray-400 mb-4 leading-relaxed">
          자료만 업로드하고 몇 분 만에 완벽한 웹사이트를 생성해보세요. 신용 카드 정보 등록 없이 무료로 시작할 수 있습니다.
        </p>

        <div className="flex flex-col gap-[80px] justify-center items-center">
          {/* 더 알아보기 - 위에 배치, 아웃라인 없이 */}
          <button
            onClick={handleLearnMore}
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-lg flex items-center gap-2"
          >
            <span>더 알아보기</span>
            <span>→</span>
          </button>

          {/* Primary CTA - 아래에 배치 */}
          <button
            onClick={handleGetStarted}
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
            무료로 SEO 최적화 웹사이트 생성하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

