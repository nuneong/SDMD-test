import React from 'react';
import { 
  Search, 
  Layout, 
  PenTool, 
  Video, 
  Users, 
  Share2, 
  BarChart2, 
  Settings, 
  FileText, 
  BookOpen 
} from 'lucide-react';
import { CostItem } from '@/types/calculator';

export const COST_ITEMS: CostItem[] = [
  { id: 'seo', name: 'SEO 콘텐츠 제작 & 최적화', hours: 30, cost: 2000 },
  { id: 'web', name: '웹사이트 / 랜딩페이지 수정·관리', hours: 18, cost: 1200 },
  { id: 'copy', name: '콘텐츠 기획 & 카피 작성', hours: 22, cost: 1500 },
  { id: 'video', name: '영상 촬영 & 편집', hours: 15, cost: 2500 },
  { id: 'hire', name: '촬영 인력 고용 (작가 / 모델)', hours: 6, cost: 1000 },
  { id: 'pub', name: '콘텐츠 발행 & 채널 운영', hours: 12, cost: 700 },
  { id: 'roi', name: '마케팅 성과 분석 & ROI 분석', hours: 14, cost: 1000 },
  { id: 'gtm', name: 'GA4 / GTM 세팅·유지', hours: 5, cost: 500 },
  { id: 'report', name: '마케팅 보고서 작성', hours: 8, cost: 800 },
  { id: 'edu', name: '마케팅 툴 학습 & 교육', hours: 6, cost: 400 },
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  'seo': <Search className="w-5 h-5" />,
  'web': <Layout className="w-5 h-5" />,
  'copy': <PenTool className="w-5 h-5" />,
  'video': <Video className="w-5 h-5" />,
  'hire': <Users className="w-5 h-5" />,
  'pub': <Share2 className="w-5 h-5" />,
  'roi': <BarChart2 className="w-5 h-5" />,
  'gtm': <Settings className="w-5 h-5" />,
  'report': <FileText className="w-5 h-5" />,
  'edu': <BookOpen className="w-5 h-5" />,
};

