"use client";

const GlowRing = () => {
  const centerX = 250;
  const centerY = 250;
  const baseRadius = 180;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 메인 오브 그라데이션 - 보라색(하단)에서 파란색(상단)으로 */}
          <radialGradient id="mainOrbGradient" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
            <stop offset="30%" stopColor="#818cf8" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9a3de6" stopOpacity="0" />
          </radialGradient>

          {/* 내부 코어 그라데이션 */}
          <radialGradient id="coreGradient" cx="50%" cy="45%" r="40%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>

          {/* 외부 발광 그라데이션 */}
          <radialGradient id="outerGlowGradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#9a3de6" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
          </radialGradient>

          {/* 강한 블러 필터 - 외부 발광 */}
          <filter
            id="blurStrong"
            x="-200%"
            y="-200%"
            width="500%"
            height="500%"
          >
            <feGaussianBlur stdDeviation="100" />
          </filter>

          {/* 중간 블러 필터 - 메인 오브 */}
          <filter
            id="blurMedium"
            x="-200%"
            y="-200%"
            width="500%"
            height="500%"
          >
            <feGaussianBlur stdDeviation="80" />
          </filter>

          {/* 약한 블러 필터 - 코어 */}
          <filter id="blurSoft" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="50" />
          </filter>
        </defs>

        {/* 외부 발광 레이어 (가장 바깥쪽) - 속이 빈 링 */}
        <path
          d={`M ${centerX} ${centerY - baseRadius * 1.4} A ${
            baseRadius * 1.4
          } ${baseRadius * 1.4} 0 1 1 ${centerX} ${
            centerY + baseRadius * 1.4
          } A ${baseRadius * 1.4} ${baseRadius * 1.4} 0 1 1 ${centerX} ${
            centerY - baseRadius * 1.4
          } Z M ${centerX} ${centerY} m -${baseRadius * 0.8} 0 a ${
            baseRadius * 0.8
          } ${baseRadius * 0.8} 0 1 0 ${baseRadius * 1.6} 0 a ${
            baseRadius * 0.8
          } ${baseRadius * 0.8} 0 1 0 -${baseRadius * 1.6} 0 Z`}
          fill="url(#outerGlowGradient)"
          fillRule="evenodd"
          filter="url(#blurStrong)"
        />

        {/* 메인 오브 (중앙) - 속이 빈 링 */}
        <path
          d={`M ${centerX} ${
            centerY - baseRadius
          } A ${baseRadius} ${baseRadius} 0 1 1 ${centerX} ${
            centerY + baseRadius
          } A ${baseRadius} ${baseRadius} 0 1 1 ${centerX} ${
            centerY - baseRadius
          } Z M ${centerX} ${centerY} m -${baseRadius * 0.6} 0 a ${
            baseRadius * 0.6
          } ${baseRadius * 0.6} 0 1 0 ${baseRadius * 1.2} 0 a ${
            baseRadius * 0.6
          } ${baseRadius * 0.6} 0 1 0 -${baseRadius * 1.2} 0 Z`}
          fill="url(#mainOrbGradient)"
          fillRule="evenodd"
          filter="url(#blurMedium)"
        />

        {/* 내부 링 (밝은 가장자리) - 속이 빈 링 */}
        <path
          d={`M ${centerX} ${centerY - baseRadius * 0.7} A ${
            baseRadius * 0.7
          } ${baseRadius * 0.7} 0 1 1 ${centerX} ${
            centerY + baseRadius * 0.7
          } A ${baseRadius * 0.7} ${baseRadius * 0.7} 0 1 1 ${centerX} ${
            centerY - baseRadius * 0.7
          } Z M ${centerX} ${centerY} m -${baseRadius * 0.5} 0 a ${
            baseRadius * 0.5
          } ${baseRadius * 0.5} 0 1 0 ${baseRadius * 1.0} 0 a ${
            baseRadius * 0.5
          } ${baseRadius * 0.5} 0 1 0 -${baseRadius * 1.0} 0 Z`}
          fill="url(#coreGradient)"
          fillRule="evenodd"
          filter="url(#blurSoft)"
        />
      </svg>
    </div>
  );
};

export default GlowRing;
