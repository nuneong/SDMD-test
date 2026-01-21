"use client";

import { useRouter } from "next/navigation";
import { Instagram } from "lucide-react";

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
            
            {/* 소셜 미디어 아이콘 */}
            <div className="flex items-center gap-4 mt-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a
                href="https://www.instagram.com/sumdemand/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              
              {/* Threads */}
              <a
                href="https://www.threads.com/@sumdemand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label="Threads"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.184 1.41h-.002C9.09 1.432 6.7 2.473 5.094 4.516c-1.428 1.815-2.16 4.348-2.184 7.49v.002c.025 3.143.756 5.662 2.184 7.477c1.606 2.042 4.009 3.084 7.1 3.105h.002c2.748-.019 4.697-.74 6.303-2.344c2.104-2.103 2.042-4.741 1.347-6.363c-.53-1.234-1.575-2.221-2.976-2.835c-.18-2.985-1.86-4.726-4.62-4.744c-1.63-.01-3.102.72-4.003 2.087l1.655 1.136c.533-.809 1.377-1.199 2.335-1.19c1.387.009 2.3.774 2.555 2.117a11.7 11.7 0 0 0-2.484-.105c-2.64.152-4.368 1.712-4.253 3.875c.12 2.262 2.312 3.495 4.393 3.381c2.492-.137 3.973-1.976 4.324-4.321c.577.373 1.003.85 1.244 1.413c.44 1.025.468 2.716-.915 4.098c-1.217 1.216-2.68 1.746-4.912 1.762c-2.475-.018-4.332-.811-5.537-2.343C5.52 16.774 4.928 14.688 4.906 12c.022-2.688.614-4.775 1.746-6.213c1.205-1.533 3.062-2.325 5.537-2.344c2.493.019 4.384.815 5.636 2.356c.691.85 1.124 1.866 1.413 2.915l1.94-.517c-.363-1.338-.937-2.613-1.815-3.694c-1.653-2.034-4.081-3.071-7.18-3.093m.236 10.968a9.4 9.4 0 0 1 2.432.156c-.14 1.578-.793 2.947-2.512 3.041c-1.112.063-2.237-.434-2.292-1.461c-.04-.764.525-1.63 2.372-1.736"
                  />
                </svg>
              </a>
              
              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* Naver Blog */}
              <a
                href="https://blog.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label="Naver Blog"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* 1. 배경 박스: 테두리만 있고 안은 비어있는 형태 */}
                  <rect
                    x="5"
                    y="5"
                    width="90"
                    height="90"
                    rx="20"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                  />
                  
                  {/* 2. 내부 로고: b 모양과 세로선 */}
                  <g fill="currentColor">
                    {/* 소문자 b: 곡선과 직선의 비율을 원본과 맞춤 */}
                    <path d="M28 30V70H39.5V62.8C41.8 67.5 46.5 70.5 52.5 70.5C63 70.5 70.5 62 70.5 50.5C70.5 39 63 30.5 52.5 30.5C46.5 30.5 41.8 33.5 39.5 38.2V30H28ZM49.2 41.5C54 41.5 58 45 58 50.5C58 56 54 59.5 49.2 59.5C44.4 59.5 40.5 56 40.5 50.5C40.5 45 44.4 41.5 49.2 41.5Z" />
                    
                    {/* 오른쪽 세로선: 위치와 두께 조정 */}
                    <rect x="76" y="25" width="6" height="50" />
                  </g>
                </svg>
              </a>
              
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
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

