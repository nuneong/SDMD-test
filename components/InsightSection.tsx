"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const InsightSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 pt-10 pb-10 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          문제는 광고가 아니라 <span className="text-purple-400">'속도와 판단'</span>입니다
        </h2>
        
        <div className="space-y-8 mb-12">
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            디지털 마케팅은 사람이 따라갈 수 없는 속도로 변합니다
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            알고리즘은 실시간으로 바뀌지만
            <br />
            판단은 여전히 사람의 손에 남아 있습니다
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            이 속도 차이가 손실과 불신을 만듭니다
          </p>
        </div>

        {/* Highlight Quote */}
        <div
          className="p-8 rounded-lg backdrop-blur-md text-center"
          style={{
            backgroundColor: 'rgba(18, 0, 48, 0.75)',
            border: '2px solid rgba(147, 51, 234, 0.5)'
          }}
        >
          <p className="text-2xl md:text-3xl font-bold text-purple-400 leading-relaxed italic">
            "사람이 운영하던 마케팅은
            <br />
            이제 AI의 문제가 되었습니다"
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;

