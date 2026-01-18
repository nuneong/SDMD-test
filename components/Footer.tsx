"use client";

import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="relative z-10 border-t border-purple-400/20 bg-[#0a0a0a] pb-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 구분선 */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
        
        <div className="flex flex-col gap-8">
          {/* 상단: 브랜드 정보 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-white">Sumdemand</h3>
            <p className="text-gray-400 text-sm">
              실시간 ROI 기반 AI 마케팅 자동화 플랫폼
            </p>
          </div>

          {/* 하단 박스: 링크들(우측 상단) + 저작권(우측 하단) */}
          <div className="mt-8 pt-8 border-t border-purple-400/10 flex flex-col items-end gap-4">
            {/* 링크들 - 우측 상단 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <button
                onClick={() => {
                  // home 페이지에서 다른 페이지로 이동할 때 스크롤 위치 저장
                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
                  }
                  router.push("/policy");
                }}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                이용약관
              </button>
              <button
                onClick={() => {
                  // home 페이지에서 다른 페이지로 이동할 때 스크롤 위치 저장
                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
                  }
                  router.push("/policy");
                }}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                개인정보처리방침
              </button>
              <button
                onClick={() => {
                  // home 페이지에서 다른 페이지로 이동할 때 스크롤 위치 저장
                  if (typeof window !== "undefined" && window.location.pathname === "/") {
                    sessionStorage.setItem("homeScrollPosition", window.scrollY.toString());
                  }
                  router.push("/contact");
                }}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                문의하기
              </button>
            </div>
            
            {/* 저작권 - 우측 하단 */}
            <p className="text-gray-500 text-sm text-right">
              © 2026 Sumdemand. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

