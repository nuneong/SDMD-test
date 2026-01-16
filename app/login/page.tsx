"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SocialButton from "@/components/SocialButton";
import Recaptcha from "@/components/Recaptcha";
import { CheckmarkIcon } from "@/components/Icons";

// 한국(KR)을 최상단에 배치하고, 나머지는 국가번호 순으로 정렬
const COUNTRY_CODES = [
  { code: "KR", dial: "+82", label: "South Korea", placeholder: "010-1234-5678", maxDigits: 11 },
  { code: "US", dial: "+1", label: "United States", placeholder: "202-555-0123", maxDigits: 10 },
  { code: "CA", dial: "+1", label: "Canada", placeholder: "416-555-1234", maxDigits: 10 },
  { code: "FR", dial: "+33", label: "France", placeholder: "6-12-34-56-78", maxDigits: 9 },
  { code: "GB", dial: "+44", label: "United Kingdom", placeholder: "7700-900000", maxDigits: 10 },
  { code: "DE", dial: "+49", label: "Germany", placeholder: "151-2345-6789", maxDigits: 11 },
  { code: "AU", dial: "+61", label: "Australia", placeholder: "412-345-678", maxDigits: 9 },
  { code: "SG", dial: "+65", label: "Singapore", placeholder: "9123-4567", maxDigits: 8 },
  { code: "JP", dial: "+81", label: "Japan", placeholder: "90-1234-5678", maxDigits: 11 },
  { code: "VN", dial: "+84", label: "Vietnam", placeholder: "91-234-5678", maxDigits: 10 },
  { code: "HK", dial: "+852", label: "Hong Kong", placeholder: "9123-4567", maxDigits: 8 },
  { code: "CN", dial: "+86", label: "China", placeholder: "138-0013-8000", maxDigits: 11 },
  { code: "TW", dial: "+886", label: "Taiwan", placeholder: "912-345-678", maxDigits: 9 },
  { code: "IN", dial: "+91", label: "India", placeholder: "98765-43210", maxDigits: 10 },
];

const LoginPage = () => {
  const router = useRouter();
  const [view, setView] = useState<"login" | "find-id" | "find-password">("login");

  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);

  // Find Account State
  const [findName, setFindName] = useState("");
  const [findPhone, setFindPhone] = useState("");
  const [findId, setFindId] = useState("");
  const [findEmail, setFindEmail] = useState("");
  const [countryCode, setCountryCode] = useState("KR");

  // Verification State
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");

  const currentCountry =
    COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0];

  // 전화번호 자동 포맷팅 및 길이 제한 로직
  const formatPhoneNumber = (value: string, country: typeof currentCountry) => {
    // 숫자만 추출
    let numbers = value.replace(/\D/g, "");

    // 1. 최대 길이 제한 (국가별 maxDigits 기준)
    if (numbers.length > country.maxDigits) {
      numbers = numbers.slice(0, country.maxDigits);
    }

    const len = numbers.length;

    // 2. 포맷팅 규칙 적용 (- 자동 삽입)
    if (country.code === "KR") {
      // 한국 번호 특화 로직
      if (numbers.startsWith("02")) {
        // 서울 유선전화 (02-XXX-XXXX or 02-XXXX-XXXX)
        if (len <= 2) return numbers;
        if (len <= 5) return `${numbers.slice(0, 2)}-${numbers.slice(2)}`;
        if (len <= 9)
          return `${numbers.slice(0, 2)}-${numbers.slice(2, 5)}-${numbers.slice(5)}`;
        return `${numbers.slice(0, 2)}-${numbers.slice(2, 6)}-${numbers.slice(6)}`;
      } else if (numbers.startsWith("1")) {
        // 사용자 요청 케이스: 1099897347 -> 10-9989-7347 (2-4-4 패턴)
        if (len <= 2) return numbers;
        if (len <= 6) return `${numbers.slice(0, 2)}-${numbers.slice(2)}`;
        return `${numbers.slice(0, 2)}-${numbers.slice(2, 6)}-${numbers.slice(6)}`;
      } else {
        // 일반 휴대폰/인터넷전화 (010-XXXX-XXXX) -> 3-4-4 패턴
        if (len <= 3) return numbers;
        if (len <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
        return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
      }
    } else if (["US", "CA"].includes(country.code)) {
      // 미국/캐나다: 3-3-4 패턴 (XXX-XXX-XXXX)
      if (len <= 3) return numbers;
      if (len <= 6) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6)}`;
    } else if (["JP", "DE", "CN"].includes(country.code)) {
      // 3-4-4 기본 패턴
      if (len <= 3) return numbers;
      if (len <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    }

    // 그 외 국가 기본 포맷팅
    if (len > 7)
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
    if (len > 3) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;

    return numbers;
  };

  // 전화번호 입력 핸들러
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value, currentCountry);
    setFindPhone(formatted);
  };

  // 국가 변경 핸들러 (번호 초기화 포함)
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
    setFindPhone(""); // 포맷 충돌 방지를 위해 초기화
    setIsVerificationSent(false);
    setVerificationCode("");
    setIsVerified(false);
  };

  // 인증번호 발송 핸들러
  const handleSendVerification = () => {
    if (!findPhone) {
      alert("휴대폰 번호를 입력해 주세요.");
      return;
    }
    setIsVerificationSent(true);
    setIsVerified(false);
    setVerificationCode("");
    setVerificationMessage("");

    alert(
      `[${currentCountry.dial} ${findPhone}] 번호로 인증번호가 발송되었습니다. (테스트 번호: 123456)`
    );
  };

  // 인증번호 확인 핸들러
  const handleConfirmVerification = () => {
    if (verificationCode === "123456") {
      setIsVerified(true);
      setVerificationMessage("인증되었습니다.");
    } else {
      setIsVerified(false);
      setVerificationMessage("인증번호가 일치하지 않습니다.");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log("로그인 시도", { email, password });
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleSetView = (newView: "login" | "find-id" | "find-password") => {
    setView(newView);
    // 뷰 변경 시 상태 초기화
    if (newView === "login") {
      setIsVerificationSent(false);
      setVerificationCode("");
      setIsVerified(false);
      setVerificationMessage("");
      setFindName("");
      setFindPhone("");
      setFindEmail("");
    }
  };

  const renderFindAccount = () => {
    const isIdTab = view === "find-id";

    return (
      <div className="w-full max-w-[420px] flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* 상단 탭 (아이디 찾기 / 비밀번호 찾기) */}
        <div className="flex gap-3">
          <button
            onClick={() => handleSetView("find-id")}
            className={`flex-1 py-3.5 rounded-2xl text-sm font-bold transition-all ${
              isIdTab
                ? "bg-[#8b5cf6] text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                : "bg-[#18181a] text-gray-500 border border-transparent hover:bg-[#222] hover:text-gray-400"
            }`}
          >
            아이디 찾기
          </button>
          <button
            onClick={() => handleSetView("find-password")}
            className={`flex-1 py-3.5 rounded-2xl text-sm font-bold transition-all ${
              !isIdTab
                ? "bg-[#8b5cf6] text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                : "bg-[#18181a] text-gray-500 border border-transparent hover:bg-[#222] hover:text-gray-400"
            }`}
          >
            비밀번호 찾기
          </button>
        </div>

        {/* 메인 폼 카드 */}
        <div className="bg-[#111111] border border-gray-800/50 rounded-[30px] p-6 pt-10 pb-8 shadow-[0_0_20px_rgba(147,51,234,0.05)] relative overflow-hidden min-h-[400px]">
          {/* 배경 효과 */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col gap-8">
            {/* 헤더 */}
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-[#8b5cf6] rounded-full shadow-[0_0_8px_#8b5cf6]"></div>
              <h2 className="text-[#e2e8f0] text-sm font-bold tracking-widest uppercase">
                {isIdTab ? "FIND ID" : "RESET PASSWORD"}
              </h2>
            </div>

            {/* 입력 필드 영역 */}
            <div className="space-y-5">
              {isIdTab ? (
                <>
                  {/* --- 아이디 찾기 폼 --- */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 ml-1">이름</label>
                    <input
                      type="text"
                      value={findName}
                      onChange={(e) => setFindName(e.target.value)}
                      placeholder="성함을 입력해 주세요"
                      className="w-full bg-[#1e1e1e] text-gray-200 placeholder-gray-600 rounded-xl px-4 py-4 border border-transparent focus:border-purple-500/50 focus:bg-[#252525] focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 ml-1">
                      휴대폰 번호
                    </label>
                    <div className="flex gap-2">
                      <div className="relative shrink-0">
                        <select
                          value={countryCode}
                          onChange={handleCountryChange}
                          className="w-[120px] h-full bg-[#1e1e1e] text-gray-200 rounded-xl pl-3 pr-8 border border-transparent focus:border-purple-500/50 focus:bg-[#252525] focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium appearance-none cursor-pointer"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.dial} ({c.code})
                            </option>
                          ))}
                        </select>
                        {/* 커스텀 화살표 아이콘 */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="text"
                        value={findPhone}
                        onChange={handlePhoneChange}
                        placeholder={currentCountry.placeholder}
                        className="w-full bg-[#1e1e1e] text-gray-200 placeholder-gray-600 rounded-xl px-4 py-4 border border-transparent focus:border-purple-500/50 focus:bg-[#252525] focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* --- 비밀번호 찾기 폼 --- */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 ml-1">이름</label>
                    <input
                      type="text"
                      value={findName}
                      onChange={(e) => setFindName(e.target.value)}
                      placeholder="성함을 입력해 주세요"
                      className="w-full bg-[#1e1e1e] text-gray-200 placeholder-gray-600 rounded-xl px-4 py-4 border border-transparent focus:border-purple-500/50 focus:bg-[#252525] focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 ml-1">
                      이메일 주소
                    </label>
                    <input
                      type="email"
                      value={findEmail}
                      onChange={(e) => setFindEmail(e.target.value)}
                      placeholder="example@sumdemand.com"
                      className="w-full bg-[#1e1e1e] text-gray-200 placeholder-gray-600 rounded-xl px-4 py-4 border border-transparent focus:border-purple-500/50 focus:bg-[#252525] focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 ml-1">
                      휴대폰 번호
                    </label>
                    <div className="flex gap-2">
                      <div className="relative shrink-0">
                        <select
                          value={countryCode}
                          onChange={handleCountryChange}
                          className="w-[120px] h-full bg-[#1e1e1e] text-gray-200 rounded-xl pl-3 pr-8 border border-transparent focus:border-purple-500/50 focus:bg-[#252525] focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium appearance-none cursor-pointer"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.dial} ({c.code})
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="text"
                        value={findPhone}
                        onChange={handlePhoneChange}
                        placeholder={currentCountry.placeholder}
                        className="flex-1 bg-[#1e1e1e] text-gray-200 placeholder-gray-600 rounded-xl px-4 py-4 border border-transparent focus:border-purple-500/50 focus:bg-[#252525] focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium min-w-0"
                      />
                      <button
                        type="button"
                        onClick={handleSendVerification}
                        className="shrink-0 bg-[#1e1e1e] hover:bg-[#252525] text-[#a78bfa] border border-[#a78bfa]/30 hover:border-[#a78bfa] font-bold text-xs px-4 rounded-xl transition-all"
                      >
                        {isVerificationSent ? "재발송" : "인증번호 발송"}
                      </button>
                    </div>
                  </div>

                  {/* 인증번호 입력 필드 (발송 후 표시) */}
                  {isVerificationSent && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <label className="text-xs font-bold text-gray-500 ml-1">인증번호</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          placeholder="인증번호 6자리 입력"
                          className="flex-1 bg-[#1e1e1e] text-gray-200 placeholder-gray-600 rounded-xl px-4 py-4 border border-transparent focus:border-purple-500/50 focus:bg-[#252525] focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium min-w-0"
                          disabled={isVerified}
                        />
                        <button
                          type="button"
                          onClick={handleConfirmVerification}
                          disabled={isVerified}
                          className={`shrink-0 font-bold text-xs px-6 rounded-xl transition-all border ${
                            isVerified
                              ? "bg-green-500/10 text-green-500 border-green-500/30 cursor-default"
                              : "bg-[#1e1e1e] hover:bg-[#252525] text-[#a78bfa] border-[#a78bfa]/30 hover:border-[#a78bfa]"
                          }`}
                        >
                          {isVerified ? "완료" : "확인"}
                        </button>
                      </div>
                      {verificationMessage && (
                        <p
                          className={`text-xs ml-1 font-medium ${
                            isVerified ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {verificationMessage}
                        </p>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* 액션 버튼 */}
            <div className="mt-4">
              <button className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-base py-4 rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.4)] transition-all active:scale-[0.98]">
                {isIdTab ? "아이디 찾기" : "비밀번호 재설정"}
              </button>
            </div>
          </div>
        </div>

        {/* 하단 로그인 돌아가기 링크 */}
        <div className="flex justify-center mt-2">
          <button
            onClick={() => handleSetView("login")}
            className="text-[#a78bfa] font-bold text-sm hover:text-[#c4b5fd] transition-colors"
          >
            로그인 화면으로 돌아가기
          </button>
        </div>
      </div>
    );
  };

  const renderLogin = () => {
    return (
      <div className="w-full max-w-[420px] flex flex-col gap-4">
        {/* Welcome Text */}
        <div className="text-center mb-2">
          <h1 className="text-[#8b5cf6] text-xl font-bold">방문을 환영합니다!</h1>
        </div>

        {/* Top Section: Easy Login */}
        <div className="bg-[#111111] border border-gray-800/50 rounded-[30px] p-5 pt-5 pb-5 shadow-[0_0_20px_rgba(147,51,234,0.05)] relative overflow-hidden">
          {/* Subtle purple glow top left */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-5 bg-[#8b5cf6] rounded-full shadow-[0_0_8px_#8b5cf6]"></div>
              <h2 className="text-[#e2e8f0] text-lg font-bold tracking-tight">간편 로그인</h2>
            </div>
            {/* Social Buttons */}
            <div className="flex justify-between px-2">
              <SocialButton platform="google" />
              <SocialButton platform="kakao" />
              <SocialButton platform="naver" />
              <SocialButton platform="apple" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 font-medium opacity-60">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <span className="shrink-0 text-[#6b7280]">또는</span>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Bottom Section: Email Login */}
        <div className="bg-[#111111] border border-gray-800/50 rounded-[30px] p-6 pt-6 pb-6 shadow-[0_0_20px_rgba(147,51,234,0.05)] relative overflow-hidden">
          {/* Subtle purple glow */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[3px] h-5 bg-[#8b5cf6] rounded-full shadow-[0_0_8px_#8b5cf6]"></div>
              <h2 className="text-[#e2e8f0] text-lg font-bold tracking-tight">이메일로 로그인</h2>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 ml-1">이메일 주소</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@sumdemand.com"
                className="w-full bg-[#1e1e1e] text-gray-200 placeholder-gray-600 rounded-xl px-4 py-3 border border-transparent focus:border-purple-500/50 focus:bg-[#252525] focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 ml-1">비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해 주세요"
                className="w-full bg-[#1e1e1e] text-gray-200 placeholder-gray-600 rounded-xl px-4 py-3 border border-transparent focus:border-purple-500/50 focus:bg-[#252525] focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all text-sm font-medium"
              />
            </div>

            {/* Keep Logged In & Find ID/PW */}
            <div className="flex items-center justify-between mt-1">
              <button
                onClick={() => setKeepLoggedIn(!keepLoggedIn)}
                className="flex items-center gap-1.5 group cursor-pointer"
              >
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                    keepLoggedIn
                      ? "bg-[#8b5cf6] border-[#8b5cf6]"
                      : "bg-transparent border-gray-600"
                  }`}
                >
                  {keepLoggedIn && <CheckmarkIcon className="w-2.5 h-2.5 text-white" />}
                </div>
                <span className="text-xs text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                  로그인 상태 유지
                </span>
              </button>
              <button
                onClick={() => handleSetView("find-id")}
                className="flex items-center gap-1 text-xs text-[#a78bfa] hover:text-[#c4b5fd] transition-colors font-medium"
              >
                아이디/비밀번호 찾기
              </button>
            </div>

            {/* Security Check */}
            <div className="mt-2 space-y-2">
              <Recaptcha />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-base py-3 rounded-xl shadow-[0_4px_14px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.4)] transition-all active:scale-[0.98] mt-1"
            >
              로그인
            </button>

            {/* Sign Up Link */}
            <div className="flex flex-col items-center gap-2 mt-2 text-xs font-medium">
              <div className="flex items-center justify-center">
                <span className="text-gray-500">첫 방문이신가요?</span>
                <button className="ml-2 text-[#8b5cf6] hover:text-[#a78bfa] hover:underline transition-colors">
                  가입하기
                </button>
              </div>
              <button
                onClick={handleGoBack}
                className="text-gray-500 hover:text-gray-400 transition-colors"
              >
                되돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 py-12">
      {view === "login" ? renderLogin() : renderFindAccount()}
    </div>
  );
};

export default LoginPage;
