"use client";

import { useRouter } from "next/navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FeatureSlider from "@/components/FeatureSlider";

const ValueProposition = () => {
  const router = useRouter();
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-4 pt-10 pb-20 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-[60px] max-w-4xl mx-auto leading-relaxed">
          자료만 업로드하면
          <br />
          <br />
          마케팅 전문가의 지식을 가진 AI{" "}
          <span
            className="molfuse-gradient inline-block relative font-bold"
            data-text="MOLFUSE"
          >
            MOLFUSE
          </span>
          가
          <br />
          24시간 운영을 자동화 해줍니다.
          <br />
          <br />
          사장님은 사업의 본질인, 상품에만 집중하세요
        </h2>

        {/* 기능 박스들 */}
        <div className="max-w-6xl mx-auto mt-[50px] mb-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI 기반 콘텐츠 생성 */}
            <div
              className="feature-box-animated rounded-2xl p-6 backdrop-blur-md transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(12, 0, 32, 0.65)",
                border: "1px solid rgba(18, 0, 48, 0.6)",
              }}
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                AI 기반 콘텐츠 생성
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                고품질의 마케팅 콘텐츠를 자동으로 생성하여 시간과 비용을
                절감합니다.
              </p>
            </div>

            {/* RAG 기반 전문가 지식베이스 */}
            <div
              className="feature-box-animated rounded-2xl p-6 backdrop-blur-md transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(12, 0, 32, 0.65)",
                border: "1px solid rgba(18, 0, 48, 0.6)",
              }}
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                RAG 기반 전문가 지식베이스
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                지속적으로 업데이트되는 전문가의 지식과 경험을 실시간으로
                활용하여 최적화된 마케팅 전략을 자동으로 수립하고 실행합니다.
              </p>
            </div>

            {/* 실시간 ROI 모니터링 */}
            <div
              className="feature-box-animated rounded-2xl p-6 backdrop-blur-md transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(12, 0, 32, 0.65)",
                border: "1px solid rgba(18, 0, 48, 0.6)",
              }}
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                실시간 ROI 모니터링
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                실시간으로 반영되는 ROI를 바탕으로 캠페인별 손익을 즉시
                확인합니다.
              </p>
            </div>

            {/* 자동화 마케팅 워크플로우 */}
            <div
              className="feature-box-animated rounded-2xl p-6 backdrop-blur-md transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(12, 0, 32, 0.65)",
                border: "1px solid rgba(18, 0, 48, 0.6)",
              }}
            >
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                자동화 마케팅 워크플로우
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                복잡한 마케팅 프로세스를 자동화하여 효율성을 극대화하고, 일관된
                품질의 결과를 제공합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 제품 시연 이미지/영상 박스와 CTA 버튼 */}
        <div className="max-w-6xl mx-auto mt-[50px] mb-[50px]">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-end">
            {/* 제품 시연 이미지/영상 박스 */}
            <div className="flex-1 w-full md:w-auto">
              <div className="border-2 border-gray-700 rounded-lg p-4 md:p-6 bg-[#111111]/50 mt-[80px] overflow-hidden relative">
                <FeatureSlider />
                <p className="absolute bottom-2 right-4 text-purple-400 text-sm">
                  *여기에 실제 MOLFUSE의 시연 내용이 애니메이팅됩니다.
                </p>
              </div>
            </div>

            {/* CTA 버튼들 */}
            <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[200px] mt-[80px] relative">
              <button
                onClick={() => router.push("/product")}
                className="absolute -top-8 right-0 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold"
              >
                더 알아보기 <span className="text-xl font-bold">→</span>
              </button>
              <button
                onClick={() => router.push("/waitlist")}
                className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 font-semibold"
              >
                혜택 받고 대기자 등록하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
