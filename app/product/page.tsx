"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginButton from "@/components/GoogleLoginButton";
import GetStartedButton from "@/components/GetStartedButton";
import HamburgerButton from "@/components/HamburgerButton";
import AppSidebar from "@/components/AppSidebar";
import FeatureSlider from "@/components/FeatureSlider";

const ProductPage = () => {
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
    <div className="relative bg-[#0a0a0a] min-h-screen">
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

      {/* Content */}
      <div className="min-h-screen pt-20 pb-20">
        {/* Ambient Glows for background atmosphere */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        {/* Feature Slider Section */}
        <section className="w-full px-4 py-12">
          <FeatureSlider />
        </section>

        {/* Home Link */}
        <div className="text-center mt-8">
          <button
            onClick={() => router.push("/")}
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            ← Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
