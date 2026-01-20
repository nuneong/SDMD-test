"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoginButton from "@/components/GoogleLoginButton";
import GetStartedButton from "@/components/GetStartedButton";
import HamburgerButton from "@/components/HamburgerButton";
import AppSidebar from "@/components/AppSidebar";
import BusinessModelSection from "@/components/BusinessModelSection";

const planDetails = {
  starter: {
    name: "Starter",
    price: "무료",
    priceValue: 0,
    billing: "무료 플랜",
    description: "무료 플랜, 오늘부터 시작",
  },
  professional: {
    name: "Professional",
    price: "월 구독",
    priceValue: 99000,
    billing: "월마다 결제, 오늘부터 시작",
    description: "월 구독 플랜",
  },
  enterprise: {
    name: "Enterprise",
    price: "맞춤형",
    priceValue: 0,
    billing: "맞춤형 가격, 오늘부터 시작",
    description: "맞춤형 플랜",
  },
};

const PricingContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showPaymentRedirect, setShowPaymentRedirect] = useState(false);

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

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan && (plan === "starter" || plan === "professional" || plan === "enterprise")) {
      setSelectedPlan(plan);
      setShowPaymentModal(true);
    }
  }, [searchParams]);

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedPlan(null);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("restoreHomeScroll", "true");
    }
    router.push("/");
  };

  const handlePayment = () => {
    // PG사 팝업 연결 상태로 변경
    setShowPaymentRedirect(true);
    // 실제 PG사 팝업 연동 로직 추가 필요
    // 예: window.open('pg사_url', 'payment', 'width=500,height=600');
  };

  const currentPlan = selectedPlan ? planDetails[selectedPlan as keyof typeof planDetails] : null;

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
      <div className="pt-20">
        <BusinessModelSection />

        {/* Back to Home - 플랜 선택 박스 아래 중앙 */}
        <div className="flex justify-center mt-8 pb-20">
        <button
            onClick={() => {
              if (typeof window !== "undefined") {
                sessionStorage.setItem("restoreHomeScroll", "true");
              }
              router.push("/");
            }}
          className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
        >
          ← Home
        </button>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && currentPlan && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111111]/95 backdrop-blur-md w-full max-w-md p-8 rounded-lg border border-purple-500/50 shadow-[0_0_50px_rgba(139,92,246,0.3)] relative">
            {/* Close Button */}
            <button
              onClick={closePaymentModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              플랜 변경 확인하기
            </h2>

            {/* Plan Details */}
            <div className="space-y-4 mb-6">
              {/* Subscription Info */}
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-white font-semibold mb-1">
                    {currentPlan.name} 구독
                  </div>
                  <div className="text-sm text-gray-400">
                    {currentPlan.billing}
                  </div>
                </div>
                <div className="text-white font-semibold text-lg">
                  {currentPlan.priceValue === 0 
                    ? currentPlan.price 
                    : `₩${currentPlan.priceValue.toLocaleString()}`}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700/50"></div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <div className="text-white font-semibold">
                  오늘 납부 총계
                </div>
                <div className="text-white font-bold text-xl">
                  {currentPlan.priceValue === 0 
                    ? currentPlan.price 
                    : `₩${currentPlan.priceValue.toLocaleString()}`}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700/50"></div>

              {/* Payment Method */}
              <div className="flex justify-between items-center">
                <div className="text-white font-semibold">
                  결제 방법
                </div>
                <div className="text-gray-400 text-sm">
                  MASTERCARD *4943
                </div>
              </div>
            </div>

            {/* Payment Redirect Message */}
            {showPaymentRedirect ? (
              <div className="mt-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                    <svg className="text-white w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white text-lg font-semibold mb-2">
                    PG사 팝업으로 연결됩니다
                  </p>
                  <p className="text-gray-400 text-sm mb-6">
                    결제 창이 새로 열립니다
                  </p>
                </div>
                <button
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      sessionStorage.setItem("restoreHomeScroll", "true");
                    }
                    router.push("/");
                  }}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                >
                  ← Home
                </button>
              </div>
            ) : (
              /* Action Buttons */
              <div className="flex gap-4 mt-6">
                <button
                  onClick={closePaymentModal}
                  className="flex-1 py-3 rounded-lg font-medium transition-all border border-gray-600 text-white hover:bg-gray-800"
                >
                  취소
                </button>
                <button
                  onClick={handlePayment}
                  className="flex-1 py-3 rounded-lg font-medium transition-all bg-purple-600 hover:bg-purple-700 text-white"
                >
                  지금 결제
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const PricingPage = () => {
  return (
    <Suspense fallback={
      <div className="relative bg-[#0a0a0a] min-h-screen flex items-center justify-center">
        <div className="text-white">로딩 중...</div>
      </div>
    }>
      <PricingContent />
    </Suspense>
  );
};

export default PricingPage;

