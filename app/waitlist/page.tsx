"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import WaitlistForm from "@/components/WaitlistForm";
import { generateWelcomeMessage } from "@/services/geminiService";
import { WaitlistFormData, FormStatus } from "@/types/waitlist";
import Orb from "@/components/Orb";

const WaitlistPage = () => {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const handleFormSubmit = async (data: WaitlistFormData) => {
    setStatus(FormStatus.SUBMITTING);
    try {
      // Simulate network delay for UX
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Call Gemini API
      const message = await generateWelcomeMessage(data);
      
      setAiResponse(message);
      setStatus(FormStatus.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(FormStatus.ERROR);
    }
  };

  const closeModal = () => {
    setStatus(FormStatus.IDLE);
    setAiResponse(null);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("restoreHomeScroll", "true");
    }
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative flex items-center justify-center p-6 overflow-hidden">
      {/* Orb background */}
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
          backgroundColor="#0a0a0a"
        />
      </div>

      <main className="relative z-10 w-full max-w-lg md:max-w-2xl lg:w-[30%] lg:max-w-none">
        {/* Waitlist Form Section */}
        <div className="bg-[#111111]/70 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-2xl shadow-purple-500/10 border border-purple-500/15 relative overflow-hidden">
          {/* Decorative gradient glow behind form */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-400/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 className="text-xl md:text-2xl font-bold mb-6 relative z-10 text-purple-400">
            대기자 명단 등록
          </h2>
          <div className="relative z-10">
            <WaitlistForm onSubmit={handleFormSubmit} status={status} />
          </div>
        </div>

        {/* Back to Home - 팝업 박스 아래 중앙 */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                sessionStorage.setItem("restoreHomeScroll", "true");
              }
              router.push("/");
            }}
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
          >
            ← Home
          </button>
        </div>
      </main>

      {/* Success Modal */}
      {status === FormStatus.SUCCESS && aiResponse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#111111]/95 backdrop-blur-md w-full max-w-md p-8 rounded-lg border border-purple-500/50 shadow-[0_0_50px_rgba(139,92,246,0.3)] relative transform transition-all scale-100">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-purple-400 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                <svg className="text-white w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white">등록 완료!</h3>
              <p className="text-purple-400 font-medium mb-6 text-sm uppercase tracking-widest">
                AI Message from MOLFUSE
              </p>
              
              <div className="bg-[#0a0a0a]/50 p-6 rounded-lg border border-white/5 w-full">
                <p className="text-gray-200 leading-relaxed italic">
                  "{aiResponse}"
                </p>
              </div>
              <button 
                onClick={closeModal}
                className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-medium transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitlistPage;

