"use client";

import { useState } from "react";

import Orb from "@/components/Orb";
import BetaBadge from "@/components/BetaBadge";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import VoiceLoginButton from "@/components/VoiceLoginButton";
import GetStartedButton from "@/components/GetStartedButton";
import HamburgerButton from "@/components/HamburgerButton";
import AppSidebar from "@/components/AppSidebar";
import ChatBar from "@/components/ChatBar";

const Index = () => {
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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a]">
      {/* SumDemand - Left Top */}
      <div className="fixed top-6 left-6 z-50">
        <span className="text-white text-lg font-medium">SumDemand</span>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-4">
        {/* Right - Hamburger and Get Started CTA */}
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

      {/* Orb background */}
      <div className="absolute inset-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          backgroundColor="#0a0a0a"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        {/* Beta badge */}
        <BetaBadge />

        {/* Main heading */}
        <div className="space-y-1">
          <h1 className="text-lg md:text-xl font-medium text-white leading-relaxed">
            24시간 전문가 지식베이스로 수행되는
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-white leading-relaxed">
            지식기반 자동화 마케팅을 경험해보세요
          </h2>
        </div>

        {/* Login buttons */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <GoogleLoginButton />
          <VoiceLoginButton />
        </div>
      </div>

      {/* N Logo at bottom left */}
      <div className="absolute bottom-6 left-6 z-10">
        <div className="text-white text-2xl font-bold">N</div>
      </div>

      {/* Chat Bar - 하단 고정 */}
      <ChatBar />
    </div>
  );
};

export default Index;

