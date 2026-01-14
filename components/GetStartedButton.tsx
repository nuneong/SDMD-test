"use client";

import { useState } from "react";

const GetStartedButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleGetStarted = () => {
    // 시작하기 로직 구현
    console.log("서비스 바로가기 클릭");
  };

  return (
    <div className="relative">
      <button
        onClick={handleGetStarted}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
        <span>Get started</span>
      </button>
      {showTooltip && (
        <div className="absolute top-full right-0 mt-2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap z-50">
          서비스 바로가기
        </div>
      )}
    </div>
  );
};

export default GetStartedButton;

