import React from "react";

export const GoogleIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export const KakaoIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="#3C1E1E"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3C6.48 3 2 6.44 2 10.69c0 2.81 1.95 5.28 4.88 6.58-.2 0.74-0.73 2.68-0.84 3.06-.13.48.17.47.36.35.25-.17 2.84-1.93 3.97-2.71.53.07 1.08.11 1.63.11 5.52 0 10-3.44 10-7.69S17.52 3 12 3z" />
  </svg>
);

export const NaverIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="#FFFFFF"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.48 24H22V0h-5.52L8.25 12.2V0H2.74v24h5.52L16.48 11.8V24z" />
  </svg>
);

export const AppleIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.8 11.33c.02-2.6 2.13-3.85 2.22-3.9-.12-.4-.82-2.8-2.7-2.85-1.14-.02-2.22.67-2.8.67-.57 0-1.47-.65-2.42-.64-2.46.03-4.25 1.45-5.38 3.42-2.3 3.96-.58 9.8 1.63 13.02 1.1 1.57 2.38 3.32 4.1 3.25 1.62-.07 2.23-1.05 4.2-1.05 1.95 0 2.5 1.05 4.2 1.02 1.74-.03 2.83-1.57 3.88-3.13 1.23-1.78 1.73-3.5 1.75-3.6-.03-.02-3.37-1.3-3.38-5.22h-.02zM15.35 4.86c.9-1.08 1.5-2.58 1.33-4.08-1.3.05-2.86.87-3.78 1.95-.83.95-1.55 2.5-1.35 3.93 1.45.1 2.92-.72 3.8-1.8z" />
  </svg>
);

export const CheckmarkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const RecaptchaLogo: React.FC<{
  className?: string;
  verifying?: boolean;
}> = ({ className, verifying }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#8b5cf6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray={verifying ? "40 20" : undefined}
    />
  </svg>
);

