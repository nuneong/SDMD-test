"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
import BusinessModelSection from "@/components/BusinessModelSection";
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

const Index = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);

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
              onClick={() => router.push("/product")}
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
        <TechnologySection />
        <PerformanceSection />
        <BusinessModelSection />
        <FAQSection />
      </div>

      {/* SEO 전략 기반 새로운 섹션들 */}
      <div className="relative z-10">
        <SEOHeroSection />
        <ProblemSection />
        <InsightSection />
        <SolutionSection />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <FeatureSection />
        <BenefitSection />
        <WhyNowSection />
        <FinalCTASection />
      </div>

      {/* Chat Bar - 하단 고정 */}
      <ChatBar />
    </div>
  );
};

export default Index;
