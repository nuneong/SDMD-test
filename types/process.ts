import { LucideIcon } from 'lucide-react';

export interface ProcessItem {
  id: string;
  title: string;
  subTitle: string;
  items: string[];
  icon: LucideIcon;
  position?: 'left' | 'center-top' | 'center-right' | 'center-bottom' | 'center-left' | 'right';
}

