"use client";

import React from "react";
import { GoogleIcon, KakaoIcon, NaverIcon, AppleIcon } from "./Icons";

interface SocialButtonProps {
  platform: "google" | "kakao" | "naver" | "apple";
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ platform, onClick }) => {
  const getStyles = () => {
    switch (platform) {
      case "google":
        return "bg-white hover:bg-gray-100";
      case "kakao":
        return "bg-[#FEE500] hover:bg-[#ebd300]";
      case "naver":
        return "bg-[#03C75A] hover:bg-[#02b351]";
      case "apple":
        return "bg-white hover:bg-gray-100";
      default:
        return "bg-white";
    }
  };

  const getIcon = () => {
    switch (platform) {
      case "google":
        return <GoogleIcon />;
      case "kakao":
        return <KakaoIcon />;
      case "naver":
        return <NaverIcon />;
      case "apple":
        return <AppleIcon />;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${getStyles()} w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95`}
    >
      {getIcon()}
    </button>
  );
};

export default SocialButton;

