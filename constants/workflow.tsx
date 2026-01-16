import React from 'react';
import { Upload, Network, Activity, FileCheck, PieChart, LayoutDashboard } from 'lucide-react';
import { WorkflowStep, StepId } from '@/types/workflow';
import { MockUpload, MockNode, MockStatus, MockResult, MockReport, MockDashboard } from '@/components/MockUIs';

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: StepId.UPLOAD,
    title: 'Upload',
    description: 'Effortlessly upload raw data materials (PDF, CSV, Notion).',
    icon: Upload,
    component: <MockUpload />
  },
  {
    id: StepId.NODE,
    title: 'Node Processing',
    description: 'AI structures your data into a knowledge graph (like NotebookLM).',
    icon: Network,
    component: <MockNode />
  },
  {
    id: StepId.STATUS,
    title: 'Work Status',
    description: 'Watch the automation steps execute in real-time.',
    icon: Activity,
    component: <MockStatus />
  },
  {
    id: StepId.RESULT,
    title: 'Output Result',
    description: 'Review high-quality generative content for each step.',
    icon: FileCheck,
    component: <MockResult />
  },
  {
    id: StepId.REPORT,
    title: 'Report',
    description: 'Deep dive into performance metrics and analytics.',
    icon: PieChart,
    component: <MockReport />
  },
  {
    id: StepId.DASHBOARD,
    title: 'Dashboard',
    description: 'A holistic view of all your automated campaigns.',
    icon: LayoutDashboard,
    component: <MockDashboard />
  }
];

