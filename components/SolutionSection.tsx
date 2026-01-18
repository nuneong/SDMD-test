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
          AI 마케팅 에이전트{" "}
          <span
            className="molfuse-gradient inline-block relative font-bold"
            data-text="MOLFUSE"
          >
            MOLFUSE
          </span>
          를 소개합니다
        </h2>
        
        {/* Core Statement */}
        <div className="p-8 rounded-lg mb-12 text-center">
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            <span className="font-bold text-purple-400">MOLFUSE</span>는 사업자의 데이터를 학습하고
            <br />
            실시간 ROI 시그널을 기준으로
            <br />
            마케팅 운영 전략을 스스로 조정합니다
          </p>
        </div>

        {/* Key Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 단순 리포트가 아닌 의사결정 중심 */}
          <div
            className="feature-box-animated p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(147, 51, 234, 0.3)'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(147, 51, 234, 0.2)',
                  border: '1px solid rgba(147, 51, 234, 0.4)'
                }}
              >
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  단순 리포트가 아닌 의사결정 중심
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  데이터를 보여주는 것이 아니라, 결정하고 실행합니다
                </p>
              </div>
            </div>
          </div>

          {/* 사람이 대응하지 못하는 속도를 AI가 대신 */}
          <div
            className="feature-box-animated p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(147, 51, 234, 0.3)'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(147, 51, 234, 0.2)',
                  border: '1px solid rgba(147, 51, 234, 0.4)'
                }}
              >
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  사람이 대응하지 못하는 속도를 AI가 대신
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  실시간으로 변화하는 마케팅 환경에 즉각 대응합니다
                </p>
              </div>
            </div>
          </div>

          {/* 손실 캠페인 즉시 차단 */}
          <div
            className="feature-box-animated p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(147, 51, 234, 0.3)'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(147, 51, 234, 0.2)',
                  border: '1px solid rgba(147, 51, 234, 0.4)'
                }}
              >
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  손실 캠페인 즉시 차단
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  ROI가 마이너스로 전환되는 순간 자동으로 중단합니다
                </p>
              </div>
            </div>
          </div>

          {/* 성과 구간 자동 확장 */}
          <div
            className="feature-box-animated p-8 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'rgba(12, 0, 32, 0.65)',
              border: '1px solid rgba(147, 51, 234, 0.3)'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(147, 51, 234, 0.2)',
                  border: '1px solid rgba(147, 51, 234, 0.4)'
                }}
              >
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  성과 구간 자동 확장
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  성과가 좋은 캠페인은 자동으로 예산을 확장합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

