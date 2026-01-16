"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          24시간 스스로 진화하는
          <br />
          <span className="text-purple-400">AI 마케팅 에이전트</span>
        </h2>
        
        {/* Core Statement */}
        <div
          className="p-8 rounded-lg backdrop-blur-md mb-12 text-center"
          style={{
            backgroundColor: 'rgba(18, 0, 48, 0.75)',
            border: '2px solid rgba(147, 51, 234, 0.5)'
          }}
        >
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            <span className="font-bold text-purple-400">Molfuse</span>는 사업자의 데이터를 학습하고
            <br />
            실시간 ROI 시그널을 기준으로
            <br />
            마케팅 운영 전략을 스스로 조정합니다
          </p>
        </div>

        {/* Key Value Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-6 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              단순 리포트가 아닌 의사결정 중심
            </h3>
            <p className="text-gray-300">
              데이터를 보여주는 것이 아니라, 결정하고 실행합니다
            </p>
          </div>

          <div
            className="p-6 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              사람이 대응하지 못하는 속도를 AI가 대신
            </h3>
            <p className="text-gray-300">
              실시간으로 변화하는 마케팅 환경에 즉각 대응합니다
            </p>
          </div>

          <div
            className="p-6 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              손실 캠페인 즉시 차단
            </h3>
            <p className="text-gray-300">
              ROI가 마이너스로 전환되는 순간 자동으로 중단합니다
            </p>
          </div>

          <div
            className="p-6 rounded-lg backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(18, 0, 48, 0.6)'
            }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              성과 구간 자동 확장
            </h3>
            <p className="text-gray-300">
              성과가 좋은 캠페인은 자동으로 예산을 확장합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

