"use client";

import { useRouter } from "next/navigation";

const GoogleLoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogin}
      className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 text-sm"
    >
      Sign in
    </button>
  );
};

export default GoogleLoginButton;

