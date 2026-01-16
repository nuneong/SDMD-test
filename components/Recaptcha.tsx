"use client";

import React, { useState, useEffect } from "react";
import { RecaptchaLogo } from "./Icons";

const Recaptcha: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    if (verifying) {
      const timer = setTimeout(() => {
        setVerifying(false);
        setChecked(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [verifying]);

  const handleCheck = () => {
    if (!checked && !verifying) {
      setVerifying(true);
    } else if (checked) {
      setChecked(false);
    }
  };

  return (
    <div className="bg-[#222222] border border-[#3e3e3e] rounded-[4px] p-3 w-full flex items-center justify-between h-[74px]">
      <div className="flex items-center">
        <div className="flex items-center justify-center w-[24px] h-[24px] mr-2.5">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheck}
            disabled={verifying}
            className="recaptcha-checkbox disabled:cursor-not-allowed"
            id="recaptcha-check"
          />
        </div>
        <label
          htmlFor="recaptcha-check"
          className="text-gray-300 text-[14px] font-normal cursor-pointer select-none"
        >
          로봇이 아닙니다
        </label>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 opacity-80">
        <RecaptchaLogo className={verifying ? "animate-spin" : ""} verifying={verifying} />
        <span className="text-[10px] text-gray-500 font-medium">reCAPTCHA</span>
        <div className="flex gap-1">
          <span className="text-[8px] text-gray-500 hover:underline cursor-pointer">
            개인정보보호
          </span>
          <span className="text-[8px] text-gray-500">-</span>
          <span className="text-[8px] text-gray-500 hover:underline cursor-pointer">이용약관</span>
        </div>
      </div>
    </div>
  );
};

export default Recaptcha;

