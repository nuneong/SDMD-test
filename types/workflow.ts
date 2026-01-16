import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  component: React.ReactNode;
}

export enum StepId {
  UPLOAD = 'upload',
  NODE = 'node',
  STATUS = 'status',
  RESULT = 'result',
  REPORT = 'report',
  DASHBOARD = 'dashboard',
}

