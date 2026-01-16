import { WaitlistFormData } from "@/types/waitlist";

// Note: 실제 Gemini API를 사용하려면 @google/genai 패키지 설치 및 API 키 설정이 필요합니다
// 현재는 모의 응답을 반환합니다
export const generateWelcomeMessage = async (formData: WaitlistFormData): Promise<string> => {
  try {
    // 실제 구현 시:
    // const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });
    // const response = await ai.models.generateContent({...});
    
    // 임시 모의 응답
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const messages = [
      `${formData.name}님, 미래의 마케팅 혁명에 오신 것을 환영합니다. MOLFUSE와 함께 자동화된 마케팅의 새로운 시대를 열어가세요.`,
      `${formData.companyName}의 성장을 위한 AI 마케팅 파트너, MOLFUSE가 곧 여러분을 찾아갑니다.`,
      `혁신적인 마케팅 자동화의 여정을 시작하신 ${formData.name}님, MOLFUSE가 여러분의 성공을 지원하겠습니다.`,
    ];
    
    return messages[Math.floor(Math.random() * messages.length)];
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "성공적으로 등록되었습니다. 곧 연락드리겠습니다.";
  }
};

