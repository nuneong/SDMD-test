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
import TechnologySection from "@/components/TechnologySection";
import PerformanceSection from "@/components/PerformanceSection";
import FAQSection from "@/components/FAQSection";
import ProblemSection from "@/components/ProblemSection";
import InsightSection from "@/components/InsightSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeatureSection from "@/components/FeatureSection";
import BenefitSection from "@/components/BenefitSection";
import WhyNowSection from "@/components/WhyNowSection";
import FinalCTASection from "@/components/FinalCTASection";
import SEOHeroSection from "@/components/SEOHeroSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  const { ref: costSavingsRef, isVisible: isCostSavingsVisible } =
    useScrollAnimation(0.2);
  const hasRestoredScroll = useRef(false);

  // 페이지 로드 시 즉시 스크롤 복원 (첫 렌더링 전에 실행)
  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/") {
      const restoreFlag = sessionStorage.getItem("restoreHomeScroll");
      if (restoreFlag === "true") {
        const savedScrollPosition =
          sessionStorage.getItem("homeScrollPosition");
        if (savedScrollPosition) {
          const scrollY = parseInt(savedScrollPosition, 10);

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

          // 복원 후 저장된 위치와 플래그 삭제
          setTimeout(() => {
            sessionStorage.removeItem("homeScrollPosition");
            sessionStorage.removeItem("restoreHomeScroll");
          }, 1000);
        }
      }
    }
  }, [pathname]);

  // 다른 페이지로 이동할 때 현재 스크롤 위치 저장
  const handleNavigation = (path: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
    }
    router.push(path);
  };

  // home 페이지에서 다른 페이지로 이동할 때 스크롤 위치 저장
  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/") {
      // 스크롤 위치를 주기적으로 저장 (다른 페이지로 이동하기 직전에 최신 위치 저장)
      const saveScrollPosition = () => {
        sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
      };

      // 스크롤 이벤트로 주기적으로 저장
      window.addEventListener("scroll", saveScrollPosition, { passive: true });

      // 페이지를 떠나기 전에 저장
      const handleBeforeUnload = () => {
        saveScrollPosition();
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
            // 약간의 딜레이를 두고 저장 (router.push가 실행되기 전에)
            setTimeout(() => {
              saveScrollPosition();
            }, 0);
          }
        }
      };

      window.addEventListener("beforeunload", handleBeforeUnload);
      document.addEventListener("click", handleClick, true);

      return () => {
        window.removeEventListener("scroll", saveScrollPosition);
        window.removeEventListener("beforeunload", handleBeforeUnload);
        document.removeEventListener("click", handleClick, true);
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
        <SEOHeroSection />
        <FeatureSection />
        <BenefitSection />
        <TechnologySection />
        <PerformanceSection />
        {/* Cost Savings CTA Section */}
        <section
          ref={costSavingsRef}
          className={`relative min-h-screen flex items-center justify-center px-4 pt-10 pb-10 transition-opacity duration-1000 ${
            isCostSavingsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              클릭 한번에,
              <br />
              <span className="text-purple-400">비용은 절감, 이익은 증대</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              디지털 마케팅의
              <br />
              원클릭 자동화를 통해, 절감 비용을 바로 확인해 보세요.
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
          </div>
        </section>
        <FAQSection />
      </div>

      {/* SEO 전략 기반 새로운 섹션들 */}
      <div className="relative z-10">
        <ProblemSection />
        <InsightSection />
        <WhyNowSection />
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
