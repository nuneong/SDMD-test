"use client";

import { useRouter } from "next/navigation";
import Orb from "@/components/Orb";
import LoginButton from "@/components/GoogleLoginButton";

const GetStartedPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  // TODO: 실제 로그인 상태 확인 로직 구현 필요
  const isLoggedIn = false; // 임시로 false 설정

  const handleContinue = () => {
    if (isLoggedIn) {
      // 로그인된 경우: 메인 랜딩 페이지로 이동
      router.push("/product");
    } else {
      // 로그인되지 않은 경우: 로그인 페이지로 이동
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative flex items-center justify-center overflow-hidden">
      {/* Orb background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          backgroundColor="#0a0a0a"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl px-4 py-12">
        <div className="bg-[#111111] border border-gray-800/50 rounded-[30px] p-8 shadow-[0_0_20px_rgba(147,51,234,0.05)] relative overflow-hidden">
          {/* Subtle purple glow */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-[#8b5cf6] rounded-full shadow-[0_0_8px_#8b5cf6]"></div>
              <h1 className="text-[#e2e8f0] text-2xl font-bold tracking-tight">Get Started</h1>
            </div>

            {/* Description */}
            <div className="space-y-4 text-[#e2e8f0]">
              <p className="text-base leading-relaxed">
                여기에서 molfuse 제품페이지로 portal됩니다.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  로그인 된 상태로 클릭할 경우 바로 메인 랜딩 페이지로,
                </p>
                <p>
                  로그인 되지 않은 상태에서 클릭할 경우,
                </p>
                <p>
                  orb+로그인기능이 들어간 로그인유도 페이지가 뜹니다.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mt-4">
              <button
                onClick={handleContinue}
                className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-base py-3 rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.4)] transition-all active:scale-[0.98]"
              >
                {isLoggedIn ? "메인 랜딩 페이지로 이동" : "로그인하고 시작하기"}
              </button>
              
              {!isLoggedIn && (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-400 text-sm">또는</span>
                  <LoginButton />
                </div>
              )}
            </div>

            {/* Back to Home */}
            <div className="flex justify-center mt-4">
              <button
                onClick={handleGoHome}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;

