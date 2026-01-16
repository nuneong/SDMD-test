"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const GetStartedButton = () => {
  const router = useRouter();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleGetStarted = () => {
    router.push("/get-started");
  };

  return (
    <div className="relative">
      <button
        onClick={handleGetStarted}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
      >
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

