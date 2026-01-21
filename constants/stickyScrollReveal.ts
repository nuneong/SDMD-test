export interface FeatureItem {
  title: string;
  highlight: string;
  description: string;
  color: string;
}

export const FEATURES: FeatureItem[] = [
  {
    title: "대용량",
    highlight: "문서 처리",
    description:
      "수백 페이지 PDF도 빠르게 처리합니다. 복잡한 매뉴얼, 상품 정보, 기술 문서를 순식간에 분석하여 핵심 정보를 추출합니다.",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "자동화",
    highlight: "마케팅",
    description:
      "마케팅 전문가의 지식을 가진 에이전트가 자동으로 전략을 수립하고 실행하고 수정하며 운영합니다. 마케팅 관리에 소요되던 시간을 사업에 집중하세요.",
    color: "from-emerald-500 to-cyan-600",
  },
  {
    title: "24시간",
    highlight: "지속 운영",
    description:
      "AI 에이전트가 잠들지 않고 24시간 마케팅을 수행합니다. 캠페인을 실행하고 결과를 재학습해 스스로 진화하며 비즈니스의 연속성을 보장합니다.",
    color: "from-purple-600 to-blue-600",
  },
  {
    title: "실시간",
    highlight: "업데이트",
    description:
      "실시간 ROI 데이터를 바탕으로 한 객관적 판단으로 마케팅에 대한 불안을 해소하고 데이터 기반의 확신을 드립니다.",
    color: "from-pink-600 to-rose-600",
  },
  {
    title: "예산 효율",
    highlight: "최적화",
    description:
      "소규모 예산으로도 효율적인 마케팅 테스트가 가능하여 빠른 의사결정을 지원합니다.",
    color: "from-lime-400 to-green-600",
  },
  {
    title: "ROI기반",
    highlight: "마케팅 손실 제거",
    description:
      "실시간 ROI가 마이너스로 전환되는 순간 자동으로 캠페인을 중단하여 손실 요소를 제거합니다.",
    color: "from-red-600 to-orange-600",
  },
];
