"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

import Orb from "@/components/Orb";
import BetaBadge from "@/components/BetaBadge";
import LoginButton from "@/components/GoogleLoginButton";
import GetStartedButton from "@/components/GetStartedButton";
import HamburgerButton from "@/components/HamburgerButton";
import AppSidebar from "@/components/AppSidebar";
import ChatBar from "@/components/ChatBar";
import ValueProposition from "@/components/ValueProposition";
import FAQSection from "@/components/FAQSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StickyScrollReveal from "@/components/StickyScrollReveal";
import FinalCTASection from "@/components/FinalCTASection";
import SEOHeroSection from "@/components/SEOHeroSection";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  const { ref: costSavingsRef, isVisible: isCostSavingsVisible } =
    useScrollAnimation(0.2);
  const hasRestoredScroll = useRef(false);
  const lastScrollPosition = useRef<number>(0);

  // 페이지 로드 시 즉시 스크롤 복원 (첫 렌더링 전에 실행)
  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/") {
      const restoreFlag = sessionStorage.getItem("restoreHomeScroll");
      if (restoreFlag === "true") {
        const savedScrollPosition =
          sessionStorage.getItem("homeScrollPosition");
        if (savedScrollPosition) {
          const scrollY = parseInt(savedScrollPosition, 10);

          // 유효한 스크롤 값인지 확인 (0보다 큰 값만 복원)
          if (scrollY > 0) {
            lastScrollPosition.current = scrollY;

            // 즉시 스크롤 위치로 이동 (첫 화면이 보이지 않도록)
            window.scrollTo(0, scrollY);

            // document.body의 스크롤도 설정
            if (document.body) {
              document.body.scrollTop = scrollY;
              document.documentElement.scrollTop = scrollY;
            }
          }
        }
      }
    }
  }, []);

  // 다른 페이지에서 home으로 돌아올 때 스크롤 위치 복원 (추가 보장)
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      pathname === "/" &&
      !hasRestoredScroll.current
    ) {
      const restoreFlag = sessionStorage.getItem("restoreHomeScroll");
      if (restoreFlag === "true") {
        const savedScrollPosition =
          sessionStorage.getItem("homeScrollPosition");
        if (savedScrollPosition) {
          const scrollY = parseInt(savedScrollPosition, 10);

          // 유효한 스크롤 값인지 확인 (0보다 큰 값만 복원)
          if (scrollY > 0) {
            lastScrollPosition.current = scrollY;

            // 추가로 여러 방법으로 시도하여 확실하게 복원
            const restoreScroll = () => {
              window.scrollTo({
                top: scrollY,
                behavior: "auto",
              });
              window.scrollTo(0, scrollY);
              if (document.body) {
                document.body.scrollTop = scrollY;
                document.documentElement.scrollTop = scrollY;
              }
            };

            // 즉시 여러 번 시도
            restoreScroll();

            // requestAnimationFrame으로 즉시 시도
            requestAnimationFrame(() => {
              restoreScroll();
              requestAnimationFrame(() => {
                restoreScroll();
              });
            });

            // 짧은 딜레이 후 재시도
            setTimeout(restoreScroll, 0);
            setTimeout(restoreScroll, 10);
            setTimeout(restoreScroll, 50);

            hasRestoredScroll.current = true;
          } else {
            // 스크롤 값이 0이거나 유효하지 않으면 복원하지 않음
            hasRestoredScroll.current = true;
            // 플래그만 삭제하고 스크롤 위치는 유지 (다음 방문을 위해)
            sessionStorage.removeItem("restoreHomeScroll");
          }
        } else {
          // 저장된 스크롤 위치가 없으면 복원하지 않음
          hasRestoredScroll.current = true;
          sessionStorage.removeItem("restoreHomeScroll");
        }
      }
    }
  }, [pathname]);

  // 다른 페이지로 이동할 때 현재 스크롤 위치 저장
  const handleNavigation = (path: string) => {
    if (typeof window !== "undefined") {
      // 현재 스크롤 위치 또는 마지막으로 저장된 스크롤 위치 사용
      const currentScroll = window.scrollY || lastScrollPosition.current;
      if (currentScroll > 0) {
        sessionStorage.setItem("homeScrollPosition", currentScroll.toString());
        sessionStorage.setItem("restoreHomeScroll", "true");
        lastScrollPosition.current = currentScroll;
      }
    }
    router.push(path);
  };

  // home 페이지에서 다른 페이지로 이동할 때 스크롤 위치 저장
  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/") {
      // 스크롤 위치를 주기적으로 저장 (다른 페이지로 이동하기 직전에 최신 위치 저장)
      const saveScrollPosition = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 0) {
          sessionStorage.setItem(
            "homeScrollPosition",
            currentScroll.toString()
          );
          lastScrollPosition.current = currentScroll;
        }
      };

      // 스크롤 이벤트로 주기적으로 저장
      window.addEventListener("scroll", saveScrollPosition, { passive: true });

      // 페이지를 떠나기 전에 저장
      const handleBeforeUnload = () => {
        saveScrollPosition();
        // 페이지를 떠날 때 복원 플래그 설정
        sessionStorage.setItem("restoreHomeScroll", "true");
      };

      // 모든 링크 클릭 시 스크롤 위치 저장 (Footer 링크 포함)
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest("button[onClick], a[href]");

        if (link) {
          // router.push를 사용하는 버튼이나 링크인 경우
          const isNavigationLink =
            link.hasAttribute("onClick") ||
            (link.tagName === "A" &&
              link.getAttribute("href") &&
              !link.getAttribute("href")?.startsWith("#") &&
              !link.getAttribute("href")?.startsWith("javascript:"));

          if (isNavigationLink) {
            // 클릭 시 즉시 현재 스크롤 위치 저장
            saveScrollPosition();
            sessionStorage.setItem("restoreHomeScroll", "true");
          }
        }
      };

      // 페이지가 보일 때마다 현재 스크롤 위치 저장 (스크롤하지 않아도)
      const handleVisibilityChange = () => {
        if (!document.hidden) {
          const currentScroll = window.scrollY || lastScrollPosition.current;
          if (currentScroll > 0) {
            sessionStorage.setItem(
              "homeScrollPosition",
              currentScroll.toString()
            );
            lastScrollPosition.current = currentScroll;
          }
        }
      };

      window.addEventListener("beforeunload", handleBeforeUnload);
      document.addEventListener("click", handleClick, true);
      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        window.removeEventListener("scroll", saveScrollPosition);
        window.removeEventListener("beforeunload", handleBeforeUnload);
        document.removeEventListener("click", handleClick, true);
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
      };
    }
  }, [pathname]);

  const handleHamburgerClick = () => {
    setIsSidebarPinned(true);
    setIsSidebarOpen(true);
  };

  const handleHamburgerHover = () => {
    if (!isSidebarPinned) {
      setIsSidebarOpen(true);
    }
  };

  const handleSidebarMouseLeave = () => {
    if (!isSidebarPinned) {
      setIsSidebarOpen(false);
    }
  };

  const handleCloseSidebar = () => {
    setIsSidebarPinned(false);
    setIsSidebarOpen(false);
  };

  const handlePinSidebar = () => {
    setIsSidebarPinned(true);
  };

  // 스크롤 복원 후, 새로운 스크롤이 발생하면 sessionStorage 업데이트
  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/") {
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 0) {
          sessionStorage.setItem(
            "homeScrollPosition",
            currentScroll.toString()
          );
          lastScrollPosition.current = currentScroll;
          // 스크롤이 발생하면 복원 플래그 제거 (이미 복원 완료)
          if (hasRestoredScroll.current) {
            sessionStorage.removeItem("restoreHomeScroll");
          }
        }
      };

      // 스크롤 복원이 완료된 후에만 이벤트 리스너 추가
      if (hasRestoredScroll.current) {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }
  }, [pathname]);

  return (
    <div className="relative bg-[#0a0a0a]">
      {/* SumDemand - Left Top */}
      <div className="fixed top-6 left-6 z-50">
        <span className="text-white text-lg font-medium">SumDemand</span>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-4">
        {/* Right - Hamburger, Sign in, and Get Started CTA */}
        <div className="flex items-center gap-4">
          <div
            onMouseEnter={handleHamburgerHover}
            onMouseLeave={handleSidebarMouseLeave}
          >
            <HamburgerButton
              onClick={handleHamburgerClick}
              onMouseEnter={handleHamburgerHover}
            />
          </div>
          <LoginButton />
          <GetStartedButton />
        </div>
      </header>

      {/* Sidebar */}
      <AppSidebar
        isOpen={isSidebarOpen}
        isPinned={isSidebarPinned}
        onClose={handleCloseSidebar}
        onPin={handlePinSidebar}
        onMouseEnter={handleHamburgerHover}
        onMouseLeave={handleSidebarMouseLeave}
      />

      {/* Hero Section - Orb를 여기에만 고정 */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 overflow-hidden pt-20 md:pt-24 pb-8 md:pb-12">
        {/* Orb background - Hero Section에만 고정 */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
            backgroundColor="#0a0a0a"
          />
        </div>

        {/* Content - Orb 크기에 맞춰 반응형 조정 */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-6 px-4 text-center w-full max-w-[85%]">
          {/* Beta badge */}
          <div className="scale-90 md:scale-95 lg:scale-100">
            <BetaBadge />
          </div>

          {/* Main heading */}
          <div className="w-full flex flex-col items-center">
            <h1
              className="font-medium text-white leading-relaxed text-center"
              style={{ fontSize: "clamp(0.875rem, 2.5vw + 0.5rem, 1.5rem)" }}
            >
              24시간 전문가 지식베이스로 수행되는
            </h1>
            <h2
              className="font-medium text-white leading-relaxed text-center"
              style={{ fontSize: "clamp(0.875rem, 2.5vw + 0.5rem, 1.5rem)" }}
            >
              마케팅 자동화 운영 AI
            </h2>
            <h2
              className="font-bold leading-relaxed text-center molfuse-gradient"
              style={{ fontSize: "clamp(1.5rem, 4vw + 1rem, 3.5rem)" }}
              data-text="MOLFUSE"
            >
              MOLFUSE
            </h2>
          </div>

          {/* Learn More and Get Started Button */}
          <div
            className="flex flex-col items-center gap-3 scale-90 md:scale-95 lg:scale-100"
            style={{ marginTop: "clamp(2px, 4vw - 0.5rem, 2rem)" }}
          >
            <button
              onClick={() => handleNavigation("/product")}
              className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1"
            >
              <span>자세히 알아보기</span>
              <span>→</span>
            </button>
            <GetStartedButton />
          </div>
        </div>
      </section>

      {/* Scroll Sections - 기존 섹션 */}
      <div className="relative z-10">
        <ValueProposition />
        <SolutionSection />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        {/* 보라색 배경 띠지 섹션 */}
        <section
          className="relative w-full px-4 py-20 overflow-hidden"
          style={{
            minHeight: "1500px",
          }}
        >
          {/* 대각선 그라데이션 배경 */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(156, 67, 254, 0.75) 0%, rgba(16, 20, 153, 0.75) 25%, rgba(76, 194, 233, 0.75) 50%, rgba(156, 67, 254, 0.75) 75%, rgba(16, 20, 153, 0.75) 100%)",
              clipPath:
                "path('M 0,25% C 8%,22% 15%,18% 22%,15% C 30%,12% 38%,8% 45%,6% C 52%,4% 58%,3% 65%,2% C 72%,1% 78%,0.5% 85%,0% C 90%,0% 94%,1% 100%,3% L 100%,97% C 96%,95% 92%,93% 88%,92% C 82%,90% 75%,88% 68%,87% C 60%,86% 52%,85% 45%,84% C 38%,83% 30%,82% 22%,81% C 15%,80% 8%,78% 0,75% Z')",
            }}
          />
          {/* 상단 페이드인 효과 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.3) 15%, transparent 30%)",
            }}
          />
          {/* 하단 페이드아웃 효과 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.3) 15%, transparent 30%)",
            }}
          />
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* 아웃라인 박스 - 요소 구분용 */}
            <div
              className="p-8 rounded-lg backdrop-blur-md"
              style={{
                backgroundColor: "rgba(12, 0, 32, 0.65)",
                transform: "translateX(-200px)",
              }}
            >
              {/* 이미지 샘플과 텍스트를 나란히 배치 */}
              <div className="flex gap-6 items-stretch">
                {/* 이미지 샘플 - 4/5 너비 */}
                <div
                  className="w-4/5 h-[576px] rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
                >
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-16 h-16 mx-auto mb-2 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">이미지 샘플</p>
                  </div>
                </div>

                {/* 텍스트 영역 - 1/5 너비 (오른쪽 공백) */}
                <div className="w-1/5 flex items-center">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    이 부분에 MOLFUSE 제품의 핵심 기능 설명이 들어갑니다
                  </p>
                </div>
              </div>
            </div>

            {/* 두 번째 아웃라인 박스 - 간격을 두고 배치 */}
            <div
              className="p-8 rounded-lg backdrop-blur-md mt-12"
              style={{
                backgroundColor: "rgba(12, 0, 32, 0.65)",
                transform: "translateX(200px)",
              }}
            >
              {/* 이미지 샘플과 텍스트를 나란히 배치 */}
              <div className="flex gap-6 items-stretch">
                {/* 이미지 샘플 - 4/5 너비 */}
                <div
                  className="w-4/5 h-[576px] rounded-lg overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
                >
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-16 h-16 mx-auto mb-2 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">이미지 샘플</p>
                  </div>
                </div>

                {/* 텍스트 영역 - 1/5 너비 (오른쪽 공백) */}
                <div className="w-1/5 flex items-center">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    이 부분에 MOLFUSE 제품의 핵심 기능 설명이 들어갑니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SEOHeroSection />
        <StickyScrollReveal />
        {/* Cost Savings CTA Section */}
        <section
          ref={costSavingsRef}
          className={`relative px-4 pt-20 pb-12 transition-opacity duration-1000 overflow-hidden ${
            isCostSavingsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background decorative effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
            <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              클릭 한번에,
              <br />
              <span className="text-purple-400">비용은 절감, 이익은 증대</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              디지털 마케팅의 원클릭 자동화를 통한
              <br />
              절감 비용을 바로 확인해 보세요.
            </p>
            <button
              onClick={() => handleNavigation("/pricing")}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                background:
                  "linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(126, 34, 206, 0.8))",
                color: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, rgba(147, 51, 234, 1), rgba(126, 34, 206, 1))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, rgba(147, 51, 234, 0.8), rgba(126, 34, 206, 0.8))";
              }}
            >
              요금제 보기 →
            </button>

            {/* 추가 내용 */}
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                지금의 마케팅 운영 방식,
                <br />
                연간 얼마를 낭비하고 있는지 확인해보세요
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                체크만 해도 예상 절감액이 바로 계산됩니다.
              </p>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <Calculator />
          </div>
        </section>
        <FAQSection />
      </div>

      {/* SEO 전략 기반 새로운 섹션들 */}
      <div className="relative z-10">
        <FinalCTASection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Chat Bar - 하단 고정 */}
      <ChatBar />
    </div>
  );
};

export default Index;
