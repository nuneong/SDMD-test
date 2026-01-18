"use client";

import { useState } from "react";
import { WaitlistFormData, FormStatus } from "@/types/waitlist";

interface WaitlistFormProps {
  onSubmit: (data: WaitlistFormData) => Promise<void>;
  status: FormStatus;
}

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

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSubmit, status }) => {
  const [countryCode, setCountryCode] = useState("KR");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    companyName: '',
    role: '',
    countryCode: '+82',
    phoneNumber: ''
  });

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
    setPhoneNumber(formatted);
    setFormData(prev => ({ ...prev, phoneNumber: formatted }));
  };

  // 국가 변경 핸들러 (번호 초기화 포함)
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountryCode = e.target.value;
    setCountryCode(newCountryCode);
    setPhoneNumber("");
    const selectedCountry = COUNTRY_CODES.find(c => c.code === newCountryCode) || COUNTRY_CODES[0];
    setFormData(prev => ({ 
      ...prev, 
      countryCode: selectedCountry.dial,
      phoneNumber: ''
    }));
  };

  const validateField = (name: string, value: string) => {
    // 빈 값 체크
    if ((name === 'name' || name === 'email' || name === 'companyName' || name === 'phoneNumber') && !value.trim()) {
      return '이 입력란을 작성하세요.';
    }
    // 이메일 형식 체크
    if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return '올바른 이메일 형식을 입력해주세요.';
    }
    // 연락처 형식 체크 (숫자만 남긴 길이로 검증)
    if (name === 'phoneNumber' && value) {
      const digitsOnly = value.replace(/\D/g, '');
      const currentCountry = COUNTRY_CODES.find(c => c.code === countryCode) || COUNTRY_CODES[0];
      if (digitsOnly.length < currentCountry.maxDigits) {
        return '올바른 연락처 형식을 입력해주세요.';
      }
    }
    return '';
  };

  // 첫 번째 에러 필드 찾기
  const getFirstErrorField = () => {
    const fields = ['name', 'email', 'companyName', 'phoneNumber'];
    for (const field of fields) {
      if (touched[field] && errors[field]) {
        return field;
      }
    }
    return null;
  };

  const firstErrorField = getFirstErrorField();

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // 버튼을 누른 후에만 빈 값 에러 표시, 그 전에는 형식 에러만 표시
    if (hasSubmitted) {
      // 제출 후에는 모든 검증 수행
      if (name === 'email' && formData.email.trim()) {
        const error = validateField(name, formData.email);
        setErrors(prev => ({ ...prev, [name]: error }));
      } else if (name === 'phoneNumber' && phoneNumber.trim()) {
        const error = validateField(name, phoneNumber);
        setErrors(prev => ({ ...prev, [name]: error }));
      } else if (name === 'name' || name === 'companyName') {
        const value = formData[name as keyof WaitlistFormData] as string;
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
      }
    } else {
      // 제출 전에는 형식 에러만 표시 (빈 값 에러는 표시하지 않음)
      if (name === 'email' && formData.email.trim()) {
        const error = validateField(name, formData.email);
        // 빈 값 에러가 아닌 경우에만 표시
        if (error && error !== '이 입력란을 작성하세요.') {
          setErrors(prev => ({ ...prev, [name]: error }));
        }
      } else if (name === 'phoneNumber' && phoneNumber.trim()) {
        const error = validateField(name, phoneNumber);
        // 빈 값 에러가 아닌 경우에만 표시
        if (error && error !== '이 입력란을 작성하세요.') {
          setErrors(prev => ({ ...prev, [name]: error }));
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 이메일은 입력 중에도 실시간 형식 검증
    if (name === 'email' && touched.email) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    } else if (errors[name] && name !== 'email') {
      // 다른 필드는 입력 중 에러 지움
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // phoneNumber 변경 시
  const handlePhoneChangeWithValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value, currentCountry);
    setPhoneNumber(formatted);
    setFormData(prev => ({ ...prev, phoneNumber: formatted }));
    
    // 연락처는 입력 중에도 실시간 형식 검증 (버튼을 누른 후에만 빈 값 에러 표시)
    if (touched.phoneNumber) {
      const error = validateField('phoneNumber', formatted);
      if (hasSubmitted) {
        // 제출 후에는 모든 에러 표시
        setErrors(prev => ({ ...prev, phoneNumber: error }));
      } else {
        // 제출 전에는 형식 에러만 표시 (빈 값 에러는 표시하지 않음)
        if (error && error !== '이 입력란을 작성하세요.') {
          setErrors(prev => ({ ...prev, phoneNumber: error }));
        } else if (error === '이 입력란을 작성하세요.') {
          // 빈 값 에러는 제거
          setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors.phoneNumber;
            return newErrors;
          });
        }
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === FormStatus.SUBMITTING) return;
    
    // 제출 시도 표시
    setHasSubmitted(true);
    
    // 모든 필드 터치 처리 및 검증
    const newTouched: Record<string, boolean> = {};
    const newErrors: Record<string, string> = {};
    
    // 필수 항목 순서대로 검증
    const requiredFields = ['name', 'email', 'companyName', 'phoneNumber'];
    
    for (const field of requiredFields) {
      newTouched[field] = true;
      
      let value: string;
      if (field === 'phoneNumber') {
        value = phoneNumber;
      } else {
        value = formData[field as keyof WaitlistFormData] as string;
      }
      
      const error = validateField(field, value);
      
      // 빈 값 에러만 표시 (형식 에러는 제외)
      if (error === '이 입력란을 작성하세요.') {
        newErrors[field] = error;
        // 첫 번째 빈 필드만 표시하고 중단
        break;
      } else if (error && error !== '이 입력란을 작성하세요.') {
        // 형식 에러는 계속 검증 (이메일, 연락처 형식)
        newErrors[field] = error;
      }
    }
    
    setTouched(newTouched);
    setErrors(newErrors);
    
    // 모든 에러가 없을 때만 제출
    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    }
  };

  const inputClasses = "w-full bg-[#111111] border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all";
  const labelClasses = "block text-sm font-medium text-gray-400 mb-1.5 ml-1";

  const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5" noValidate>
      {/* Name */}
      <div className="relative">
        <label htmlFor="name" className={labelClasses}>
          이름 <span className="text-purple-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          onInvalid={handleInvalid}
          placeholder="홍길동"
          className={`${inputClasses} ${touched.name && errors.name ? 'border-purple-500/50' : ''}`}
        />
        {firstErrorField === 'name' && errors.name && (
          <div className="custom-validation-message">
            <span>{errors.name}</span>
          </div>
        )}
      </div>

      {/* Email */}
      <div className="relative">
        <label htmlFor="email" className={labelClasses}>
          이메일 <span className="text-purple-400">*</span>
          {touched.email && errors.email && errors.email !== '이 입력란을 작성하세요.' && (
            <span className="text-purple-400 text-xs font-normal ml-2">
              {errors.email}
            </span>
          )}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          onInvalid={handleInvalid}
          placeholder="example@company.com"
          className={`${inputClasses} ${touched.email && errors.email ? 'border-purple-500/50' : ''}`}
        />
        {firstErrorField === 'email' && errors.email && errors.email === '이 입력란을 작성하세요.' && (
          <div className="custom-validation-message">
            <span>{errors.email}</span>
          </div>
        )}
      </div>

      {/* Company Name */}
      <div className="relative">
        <label htmlFor="companyName" className={labelClasses}>
          회사명 <span className="text-purple-400">*</span>
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          value={formData.companyName}
          onChange={handleChange}
          onBlur={handleBlur}
          onInvalid={handleInvalid}
          placeholder="SumDemand"
          className={`${inputClasses} ${touched.companyName && errors.companyName ? 'border-purple-500/50' : ''}`}
        />
        {firstErrorField === 'companyName' && errors.companyName && (
          <div className="custom-validation-message">
            <span>{errors.companyName}</span>
          </div>
        )}
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className={labelClasses}>
          직책 (선택)
        </label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="마케팅 팀장"
          className={inputClasses}
        />
      </div>

      {/* Phone Number */}
      <div className="relative">
        <label htmlFor="phoneNumber" className={labelClasses}>
          연락처 <span className="text-purple-400">*</span>
          {touched.phoneNumber && errors.phoneNumber && errors.phoneNumber !== '이 입력란을 작성하세요.' && (
            <span className="text-purple-400 text-xs font-normal ml-2">
              {errors.phoneNumber}
            </span>
          )}
        </label>
        <div className="flex gap-2">
          <div className="relative shrink-0">
            <select
              value={countryCode}
              onChange={handleCountryChange}
              className={`${inputClasses} w-[120px] appearance-none pr-8 cursor-pointer`}
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
          <div className="flex-1 relative">
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={phoneNumber}
              onChange={handlePhoneChangeWithValidation}
              onBlur={handleBlur}
              onInvalid={handleInvalid}
              placeholder={currentCountry.placeholder}
              className={`${inputClasses} ${touched.phoneNumber && errors.phoneNumber ? 'border-purple-500/50' : ''}`}
            />
          </div>
          {firstErrorField === 'phoneNumber' && errors.phoneNumber && errors.phoneNumber === '이 입력란을 작성하세요.' && (
            <div className="custom-validation-message">
              <span>{errors.phoneNumber}</span>
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === FormStatus.SUBMITTING}
        className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:opacity-90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === FormStatus.SUBMITTING ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>등록 중...</span>
          </>
        ) : (
          <>
            <span>사전 예약 등록하기</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-center text-gray-500 mt-4">
        사전 예약 시 정식 출시 알림과 함께 특별한 혜택을 드립니다.
      </p>
    </form>
  );
};

export default WaitlistForm;

