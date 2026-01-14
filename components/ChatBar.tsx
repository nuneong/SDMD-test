"use client";

import { useState, useEffect } from "react";

const ChatBar = () => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 일정 값 이상 내려갔을 때만 표시
      const scrollThreshold = window.innerHeight * 0.3; // 화면 높이의 30% 이상 스크롤
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    // 초기 체크
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSend = () => {
    if (message.trim()) {
      // 메시지 발송 로직
      console.log("메시지 발송:", message);
      setMessage("");
    }
  };

  const handleVoiceInput = () => {
    // 음성 인식 로직
    setIsRecording(!isRecording);
    console.log("음성 인식", isRecording ? "종료" : "시작");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 transition-opacity duration-300">
      <div className="w-full md:max-w-lg mx-auto">
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-md"
          style={{
            backgroundColor: 'rgba(12, 0, 32, 0.65)', // 사이드바와 동일한 배경색
            border: '1px solid rgba(18, 0, 48, 0.6)' // 보라색 톤의 테두리
          }}
        >
          {/* 음성 인식 버튼 */}
          <button
            onClick={handleVoiceInput}
            className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-all shadow-md hover:shadow-lg flex-shrink-0"
            style={{
              backgroundColor: 'rgba(147, 51, 234, 0.41)', // 마이크 버튼과 동일한 스타일
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(126, 34, 206, 0.41)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(147, 51, 234, 0.41)';
            }}
            aria-label="음성 입력"
          >
            {isRecording ? (
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 6h12v12H6z" />
              </svg>
            ) : (
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
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            )}
          </button>

          {/* 입력 필드 */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="메시지를 입력하세요..."
            className="flex-1 px-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(18, 0, 48, 0.4)'
            }}
          />

          {/* 발송 버튼 */}
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="px-4 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            style={{
              backgroundColor: message.trim() ? 'rgba(147, 51, 234, 0.7)' : 'rgba(147, 51, 234, 0.3)',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              if (message.trim()) {
                e.currentTarget.style.backgroundColor = 'rgba(126, 34, 206, 0.8)';
              }
            }}
            onMouseLeave={(e) => {
              if (message.trim()) {
                e.currentTarget.style.backgroundColor = 'rgba(147, 51, 234, 0.7)';
              }
            }}
          >
            발송
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;

