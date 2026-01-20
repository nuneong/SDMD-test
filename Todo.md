# StickyScrollReveal 컴포넌트 개발 Todo List

## 개요

제공된 코드를 기반으로 StickyScrollReveal 컴포넌트를 완전히 구현하고, 기존 문서(디자인)와 실제 구현 간의 차이점을 해결합니다.

---

## Phase 1: Hero 섹션 스타일 통합

### 1.1 헤더 섹션에 Hero 디자인 적용

- [x] `components/StickyScrollReveal.tsx`의 헤더 부분(580-593줄) 업데이트
- [x] 배경 그라데이션 효과 추가
  - [x] `absolute inset-0 z-0` 레이어 생성
  - [x] `bg-purple-900/30 rounded-full blur-[128px]` (top-1/4 left-1/4, w-96 h-96)
  - [x] `bg-blue-900/20 rounded-full blur-[128px]` (bottom-1/4 right-1/4, w-96 h-96)
- [x] "AI Automation V2.0" 배지 추가 (선택사항)
  - [x] `px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-purple-300 uppercase bg-purple-900/30 rounded-full border border-purple-500/30`
- [x] 제목 스타일 업데이트
  - [x] 기존 "사업자는 다시 '사업'에 집중할 수 있습니다" 유지 또는 Hero 스타일로 변경
  - [x] "마케팅을 관리하지 마세요" 제목 추가 (`text-5xl md:text-7xl font-extrabold`)
  - [x] "스스로 작동하게 하세요" 그라데이션 텍스트 (`text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400`)
- [x] 설명 텍스트 추가
  - [x] "비효율적인 반복 업무는 AI에게 위임하고..." 텍스트 (`text-xl text-gray-400 max-w-2xl mx-auto mb-10`)
- [x] 버튼 추가
  - [x] "무료로 시작하기" 버튼 (`px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200`)
  - [x] "데모 영상 보기" 버튼 (`px-8 py-4 bg-transparent border border-gray-700 text-white font-bold rounded-lg hover:border-white`)
  - [x] 버튼 핸들러 구현 (`useRouter` 사용)

---

## Phase 2: 내비게이터 시각적 강화

### 2.1 내비게이터 크기 및 색상 개선

- [x] 현재 내비게이터 위치 확인 (622-643줄)
- [x] 활성화된 내비게이터 버튼 크기 증가
  - [x] 현재: `w-4 h-4` (버튼), `w-2 h-2` (점)
  - [x] 변경: 활성화 시 `w-6 h-6` (버튼), `w-4 h-4` (점) 또는 더 크게
  - [x] 비활성화: `w-4 h-4` (버튼), `w-2 h-2` (점) 유지
- [x] 활성화된 내비게이터 색상 강조
  - [x] 현재: `bg-gradient-to-r ${feature.color} shadow-[0_0_8px_rgba(255,255,255,0.5)]`
  - [x] 개선: 더 강한 글로우 효과 (`shadow-[0_0_12px_rgba(255,255,255,0.8)]` 또는 색상별 맞춤)
  - [x] 첫 번째 항목(대용량 문서 처리)의 경우 오렌지색이 명확하게 보이도록 확인
- [x] 내비게이터 간격 조정
  - [x] `gap-2` 확인 및 필요시 `gap-3` 또는 `gap-4`로 조정
- [x] 호버 효과 개선
  - [x] 비활성화 항목 호버 시 색상 변화 더 명확하게 (`group-hover:bg-gray-400`)

---

## Phase 3: 텍스트 색상 강조 개선

### 3.1 오른쪽 텍스트 영역 색상 강조 확인

- [x] 제목의 highlight 부분 색상 확인 (656줄)
  - [x] 현재: `bg-clip-text text-transparent bg-gradient-to-r ${feature.color}`
  - [x] 각 feature의 color 값이 올바른지 확인:
    - [x] 대용량 문서 처리: `from-amber-500 to-orange-600` (오렌지)
    - [x] 마케팅 자동화: `from-emerald-500 to-cyan-600` (초록/시안)
    - [x] 실시간 업데이트: `from-pink-600 to-rose-600` (핑크)
    - [x] 24시간 지속 운영: `from-purple-600 to-blue-600` (보라/파랑)
    - [x] 예산 최적화: `from-lime-400 to-green-600` (라임/초록)
    - [x] ROI기반 손실 제거: `from-red-600 to-orange-600` (빨강/오렌지)
- [x] 색상이 충분히 진하게 표시되는지 확인
  - [x] 필요시 `font-bold` 추가 또는 그라데이션 강도 조정
- [x] 비활성화된 항목의 opacity 확인
  - [x] 현재: `opacity-30` (비활성), `opacity-100` (활성)
  - [x] 필요시 조정: `opacity-40` (비활성) 또는 `opacity-50`로 변경하여 가독성 향상

---

## Phase 4: StickyScrollReveal 컴포넌트 전체 업데이트

### 4.1 제공된 코드로 컴포넌트 교체

- [x] `components/StickyScrollReveal.tsx` 전체 파일을 제공된 코드로 교체
- [x] 내부 컴포넌트 확인:
  - [x] `RealTimeDashboard` - 실시간 대시보드 애니메이션
  - [x] `DocumentScanVisual` - 문서 스캔 시각화
  - [x] `BudgetOptimizationVisual` - 예산 최적화 슬라이더
  - [x] `RoiProtectionVisual` - ROI 보호 그래프
  - [x] `renderCardVisual` 함수의 모든 케이스 (0-5)

### 4.2 Import 경로 확인

- [x] `@/constants/stickyScrollReveal` 경로 확인
- [x] React hooks: `useState`, `useEffect`, `useRef` 확인
- [x] Next.js router: `useRouter` from `"next/navigation"` 추가 (버튼용)

---

## Phase 5: Constants 파일 검증

### 5.1 FEATURES 데이터 확인

- [x] `constants/stickyScrollReveal.ts` 파일 확인
- [x] 제공된 FEATURES 배열과 현재 파일 내용 비교
- [x] 모든 6개 항목 확인:
  - [x] 대용량 문서 처리
  - [x] 마케팅 자동화
  - [x] 실시간 업데이트
  - [x] 24시간 지속 운영
  - [x] 예산 최적화
  - [x] ROI기반 마케팅 손실 제거
- [x] 각 항목의 `title`, `highlight`, `description`, `color` 값 일치 확인

---

## Phase 6: Tailwind 설정 완성

### 6.1 애니메이션 설정 검증

- [x] `tailwind.config.js` 확인
- [x] 모든 애니메이션 keyframes 존재 확인:
  - [x] `gradient-x` - 그라데이션 이동
  - [x] `flow` - 배경 위치 이동
  - [x] `scan` - 스캔 애니메이션
  - [x] `scan-doc` - 문서 스캔
  - [x] `scan-wait` - 스캔 대기
  - [x] `pop-data` - 데이터 팝업
  - [x] `pop-data-wait` - 데이터 팝업 대기
  - [x] `draw` - 선 그리기
  - [x] `draw-fast` - 빠른 선 그리기
  - [x] `equalizer` - 이퀄라이저
  - [x] `scroll-up` - 스크롤 업
  - [x] `pop-in` - 팝인 효과
  - [x] `shimmer` - 반짝임
  - [x] `fly-data` - 데이터 비행
- [x] 누락된 keyframes 추가
- [x] 각 keyframes의 정의가 제공된 HTML의 tailwind.config와 일치하는지 확인

---

## Phase 7: 레이아웃 및 스타일 조정

### 7.1 데스크톱 레이아웃

- [x] 좌측 고정 카드 위치 확인
  - [x] `sticky top-[calc(50vh-200px)]` 위치 적절한지 확인
  - [x] 카드 크기: `w-[550px] h-[400px]` 확인
- [x] 우측 스크롤 영역 확인
  - [x] 각 섹션 높이: `h-[30vh]` 확인
  - [x] 마지막 spacer: `h-[50vh]` 확인
- [x] 내비게이터 위치 확인
  - [x] `absolute left-full ml-6` 위치가 카드 오른쪽에 올바르게 배치되는지 확인
  - [x] `top-1/2 -translate-y-1/2` 수직 중앙 정렬 확인

### 7.2 모바일 레이아웃

- [x] `lg:hidden` 모바일 뷰 확인
- [x] 각 카드의 배경 그라데이션 효과 확인
- [x] 텍스트 색상 강조가 모바일에서도 잘 보이는지 확인

---

## Phase 8: 애니메이션 동작 확인

### 8.1 DocumentScanVisual

- [x] 스캔 레이저가 위에서 아래로 이동하는지 확인
- [x] 퍼센트가 63%에서 100%로 증가하는지 확인
- [x] 완료 시 배지 색상이 초록색으로 변경되는지 확인
- [x] 팝업 데이터가 올바른 타이밍에 나타나는지 확인

### 8.2 RealTimeDashboard

- [x] 6단계 시퀀스가 올바르게 작동하는지 확인:
  - [x] Step 0: 스캔 (2초)
  - [x] Step 1: 감지 (0.6초)
  - [x] Step 2: 라인 그리기 1 (0.8초)
  - [x] Step 3: 알림 표시 (1초)
  - [x] Step 4: 라인 그리기 2 (0.8초)
  - [x] Step 5: 리포트 업데이트 (3초)
- [x] 무한 루프가 정상 작동하는지 확인
- [x] leads 숫자가 증가하는지 확인

### 8.3 BudgetOptimizationVisual

- [x] 5초 루프가 정상 작동하는지 확인
- [x] 슬라이더가 90%에서 15%로 드래그되는지 확인
- [x] 예산이 $3000에서 $500으로 변경되는지 확인
- [x] Efficiency Score가 A+로 표시되는지 확인
- [x] ROI 박스가 강조되는지 확인

### 8.4 RoiProtectionVisual

- [x] 그래프 라인이 그려지는지 확인
- [x] 40%-90% 구간에서 "AUTO-STOPPED" 배지가 나타나는지 확인
- [x] 자물쇠 아이콘이 애니메이션되는지 확인

---

## Phase 9: 스크롤 인터랙션 확인

### 9.1 스크롤 감지

- [x] `handleScroll` 함수가 정상 작동하는지 확인
- [x] 뷰포트 중앙에 가장 가까운 섹션이 올바르게 감지되는지 확인
- [x] `activeCard` 상태가 올바르게 업데이트되는지 확인

### 9.2 카드 전환

- [x] 활성 카드가 `opacity-100 translate-y-0 scale-100`로 표시되는지 확인
- [x] 비활성 카드가 `opacity-0 translate-y-8 scale-95`로 숨겨지는지 확인
- [x] 전환 애니메이션이 부드러운지 확인 (`duration-500 ease-in-out`)

### 9.3 내비게이터 클릭

- [x] 내비게이터 버튼 클릭 시 해당 섹션으로 스크롤되는지 확인
- [x] `scrollIntoView`가 `behavior: 'smooth', block: 'center'`로 작동하는지 확인

---

## Phase 10: 버튼 기능 구현

### 10.1 Hero 섹션 버튼

- [x] "무료로 시작하기" 버튼
  - [x] `useRouter` import 확인
  - [x] 클릭 핸들러: `/waitlist` 또는 `/get-started`로 이동
- [x] "데모 영상 보기" 버튼
  - [x] 클릭 핸들러: `/product`로 이동 또는 스크롤 다운
  - [x] 또는 모달/비디오 플레이어 열기 (선택사항)

---

## Phase 11: 성능 최적화

### 11.1 애니메이션 성능

- [x] `requestAnimationFrame` 사용하는 컴포넌트들의 cleanup 확인
- [ ] 불필요한 re-render 방지
- [ ] `useMemo` 또는 `useCallback` 적용 검토

### 11.2 메모리 관리

- [x] `useEffect` cleanup 함수 확인
- [x] 이벤트 리스너 제거 확인 (`removeEventListener`)
- [x] `animationFrameId` 취소 확인

---

## Phase 12: 접근성 및 최종 검증

### 12.1 접근성

- [x] 내비게이터 버튼에 `aria-label` 추가 확인
- [ ] 키보드 네비게이션 가능한지 확인
- [ ] 포커스 스타일 추가 (선택사항)

### 12.2 반응형 테스트

- [ ] 데스크톱 (1920px, 1440px, 1280px)
- [ ] 태블릿 (768px, 1024px)
- [ ] 모바일 (375px, 414px)

### 12.3 브라우저 호환성

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## Phase 13: 코드 정리

### 13.1 불필요한 코드 제거

- [ ] 사용하지 않는 import 제거
- [ ] 주석 처리된 코드 제거
- [ ] 중복된 스타일 제거

### 13.2 코드 일관성

- [ ] 네이밍 컨벤션 확인
- [ ] 들여쓰기 및 포맷팅 확인
- [ ] TypeScript 타입 정의 확인

---

## 체크리스트 요약

### 필수 구현 항목

- [x] StickyScrollReveal 컴포넌트 기본 구조
- [x] Hero 스타일 헤더 통합
- [x] 내비게이터 시각적 강화 (크기, 색상, 글로우)
- [x] 텍스트 색상 강조 개선 (기본 구현 완료, 개선 필요)
- [x] 모든 애니메이션 컴포넌트 동작 확인
- [x] 버튼 핸들러 구현
- [x] 스크롤 인터랙션 완성

### 개선 사항

- [x] 내비게이터 크기 차이 명확화
- [x] 활성화 색상 강조 강화
- [x] 비활성화 항목 가독성 개선
- [ ] 애니메이션 타이밍 최적화

---

## 참고사항

- 제공된 코드의 모든 컴포넌트를 그대로 사용
- 기존 Next.js 프로젝트 구조 유지
- Tailwind CSS 클래스명 정확히 일치시키기
- 애니메이션 타이밍은 제공된 코드의 값 그대로 사용
