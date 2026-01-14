"use client";

const VoiceLoginButton = () => {
  const handleVoiceLogin = () => {
    // 음성 로그인 로직 구현
    console.log("음성 로그인 클릭");
  };

  return (
    <button
      onClick={handleVoiceLogin}
      className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-all shadow-md hover:shadow-lg"
      style={{
        backgroundColor: 'rgba(147, 51, 234, 0.41)', // purple-600 with adjusted transparency (41% opacity, 59% transparency)
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(126, 34, 206, 0.41)'; // purple-700 with adjusted transparency
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(147, 51, 234, 0.41)'; // purple-600 with adjusted transparency
      }}
      aria-label="음성 로그인"
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
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    </button>
  );
};

export default VoiceLoginButton;

