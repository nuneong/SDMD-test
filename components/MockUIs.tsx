"use client";

import React, { useState } from 'react';
import { 
  UploadCloud, FileText, CheckCircle2, 
  Loader2, Zap, BarChart3, TrendingUp, 
  Share2, MessageSquare, PieChart, Link, FileSpreadsheet,
  Layout, DollarSign, Megaphone, Instagram, Globe, Mail,
  Users, Activity, Clock
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, Cell
} from 'recharts';

// --- 1. Upload View (NotebookLM Source Style) ---
export const MockUpload = () => (
  <div className="flex h-full w-full bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-800">
    {/* Left Sidebar: Source List */}
    <div className="w-[35%] bg-[#171717] border-r border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-800 bg-[#171717]">
        <h3 className="text-sm font-semibold text-gray-300">Sources (4)</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {/* Source Item 1: PDF */}
        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#252525] border border-gray-800 hover:border-gray-700 group cursor-pointer transition-colors">
          <div className="bg-orange-500/10 p-1.5 rounded text-orange-400">
             <FileText size={14} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-gray-200 truncate">brand_guidelines.pdf</div>
            <div className="text-[10px] text-gray-500">PDF • 2.4 MB</div>
          </div>
          <CheckCircle2 size={14} className="text-purple-400" />
        </div>
        {/* Source Item 2: CSV */}
        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#252525] border border-gray-800 hover:border-gray-700 group cursor-pointer transition-colors">
          <div className="bg-green-500/10 p-1.5 rounded text-green-400">
             <FileSpreadsheet size={14} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-gray-200 truncate">marketing_Q1.csv</div>
            <div className="text-[10px] text-gray-500">CSV • 850 KB</div>
          </div>
          <CheckCircle2 size={14} className="text-purple-400" />
        </div>
        {/* Source Item 3: Link */}
        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#252525] border border-gray-800 hover:border-gray-700 group cursor-pointer transition-colors">
          <div className="bg-blue-500/10 p-1.5 rounded text-blue-400">
             <Link size={14} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-gray-200 truncate">competitor_landing.com</div>
            <div className="text-[10px] text-gray-500">Web • Scraped</div>
          </div>
          <CheckCircle2 size={14} className="text-purple-400" />
        </div>
        {/* Source Item 4: Processing */}
        <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#252525]/50 border border-transparent group">
           <div className="bg-gray-700/30 p-1.5 rounded text-gray-500">
             <FileText size={14} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-medium text-gray-400 truncate">interview_transcript.txt</div>
            <div className="text-[10px] text-gray-600">Processing...</div>
          </div>
          <Loader2 size={14} className="text-purple-400 animate-spin" />
        </div>
      </div>
      
      {/* Bottom stats */}
      <div className="p-3 border-t border-gray-800 bg-[#141414] text-[10px] text-gray-500 flex justify-between">
         <span>4/10 Sources</span>
         <span>12% Storage</span>
      </div>
    </div>
    {/* Right Main: Drop Zone */}
    <div className="flex-1 flex flex-col items-center justify-center bg-[#1e1e1e] p-6 relative">
      <div className="w-full h-full border-2 border-dashed border-gray-700 rounded-xl flex flex-col items-center justify-center hover:border-purple-500/40 hover:bg-gray-800/30 transition-all cursor-pointer group relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
         <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            <UploadCloud size={32} className="text-purple-400" />
         </div>
         <h4 className="text-lg font-medium text-white mb-1">Add Source</h4>
         <p className="text-xs text-gray-400 text-center max-w-[200px] leading-relaxed">
           Drag & drop files or <span className="text-purple-400 underline">browse</span><br/>
           <span className="text-gray-600">PDF, CSV, Audio, URL</span>
         </p>
         {/* Quick Actions */}
         <div className="absolute bottom-8 flex gap-3">
             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 rounded-full border border-gray-700 text-xs text-gray-400 hover:text-white hover:border-gray-500 transition-colors shadow-lg">
                <span className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold">G</span> Drive
             </div>
             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 rounded-full border border-gray-700 text-xs text-gray-400 hover:text-white hover:border-gray-500 transition-colors shadow-lg">
                <Link size={10} className="text-gray-400" /> Web Link
             </div>
         </div>
      </div>
    </div>
  </div>
);

// --- Custom Molecule Icon for Node View ---
const MoleculeIcon = () => (
  <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">
    <defs>
      <filter id="glow-violet" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="glow-pink" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    {/* Main Hexagon (Violet/Purple) - Matching App Tone */}
    <path 
      d="M50 20 L80 35 V65 L50 80 L20 65 V35 Z" 
      stroke="#8b5cf6" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      filter="url(#glow-violet)"
    />
    {/* External Connections & Nodes (Pink) - Accents */}
    <g filter="url(#glow-pink)">
      {/* Top Node */}
      <line x1="50" y1="20" x2="50" y2="8" stroke="#f472b6" strokeWidth="2.5" />
      <circle cx="50" cy="8" r="4" fill="#000" stroke="#f472b6" strokeWidth="2.5" />
      {/* Top Right Node */}
      <line x1="80" y1="35" x2="93" y2="25" stroke="#f472b6" strokeWidth="2.5" />
      <circle cx="93" cy="25" r="4" fill="#000" stroke="#f472b6" strokeWidth="2.5" />
      {/* Bottom Right Node */}
      <line x1="80" y1="65" x2="93" y2="75" stroke="#f472b6" strokeWidth="2.5" />
      <circle cx="93" cy="75" r="4" fill="#000" stroke="#f472b6" strokeWidth="2.5" />
      {/* Bottom Left Node */}
      <line x1="20" y1="65" x2="7" y2="75" stroke="#f472b6" strokeWidth="2.5" />
      <circle cx="7" cy="75" r="4" fill="#000" stroke="#f472b6" strokeWidth="2.5" />
    </g>
    {/* Hexagon Vertices (Violet) */}
    <g fill="#8b5cf6">
       <circle cx="50" cy="20" r="2.5" />
       <circle cx="80" cy="35" r="2.5" />
       <circle cx="80" cy="65" r="2.5" />
       <circle cx="50" cy="80" r="2.5" />
       <circle cx="20" cy="65" r="2.5" />
       <circle cx="20" cy="35" r="2.5" />
    </g>
  </svg>
);

// --- 2. Node View (NotebookLM Style) ---
export const MockNode = () => {
  return (
    <div className="relative h-full w-full bg-[#0F0F0F] rounded-xl overflow-hidden p-4">
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Central Knowledge Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-32 h-32 rounded-full bg-black/80 border border-gray-800 shadow-[0_0_40px_rgba(139,92,246,0.15)] flex items-center justify-center relative">
          <MoleculeIcon />
          {/* Orbiting particles - Outer Circle Only (set to 17.5s) */}
          <div className="absolute w-40 h-40 border border-gray-800/50 rounded-full animate-spin" style={{ animationDuration: '17.5s' }}>
             <div className="w-1.5 h-1.5 bg-violet-400 rounded-full absolute -top-0.5 left-1/2 shadow-[0_0_5px_rgba(139,92,246,1)]"></div>
          </div>
        </div>
      </div>
      {/* Nodes */}
      <div className="absolute top-1/4 left-1/4 animate-pulse">
        <div className="px-3 py-1 bg-gray-900/90 border border-violet-500/30 rounded-full text-xs text-violet-200 shadow-[0_0_15px_rgba(139,92,246,0.1)]">Context: Persona</div>
        <svg className="absolute top-full left-1/2 w-32 h-32 -z-10 stroke-gray-800" style={{ transform: 'translate(0, 0)' }}>
           <line x1="0" y1="0" x2="100" y2="100" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-pulse" style={{ animationDelay: '0.75s' }}>
        <div className="px-3 py-1 bg-gray-900/90 border border-pink-500/30 rounded-full text-xs text-pink-200 shadow-[0_0_15px_rgba(244,114,182,0.1)]">Source: PDF Data</div>
      </div>
      <div className="absolute top-1/3 right-10 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <div className="px-3 py-1 bg-gray-900/90 border border-gray-700 rounded-full text-xs text-gray-300 shadow-lg">Tone: Professional</div>
      </div>
      
      <div className="absolute bottom-10 left-10">
        <div className="bg-gray-900/80 backdrop-blur border border-gray-700 p-3 rounded-lg w-48">
          <div className="h-1.5 w-1/2 bg-gray-700 rounded mb-2"></div>
          <div className="h-1.5 w-3/4 bg-gray-700 rounded mb-2"></div>
          <div className="h-1.5 w-full bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

// --- 3. Status View ---
export const MockStatus = () => {
  const steps = [
    { name: 'Analyzing Context', status: 'completed', time: '0.2s' },
    { name: 'Expanding Key Points', status: 'completed', time: '1.4s' },
    { name: 'Generating Draft V1', status: 'active', time: 'processing...' },
    { name: 'Compliance Check', status: 'pending', time: '-' },
    { name: 'Final Polish', status: 'pending', time: '-' },
  ];

  return (
    <div className="h-full w-full bg-[#0F0F0F] rounded-xl p-6 flex flex-col">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Live Automation Agent</h3>
      <div className="space-y-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-800"></div>
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex items-center gap-4 group">
            <div className={`
              z-10 w-6 h-6 rounded-full flex items-center justify-center border-2 
              ${step.status === 'completed' ? 'bg-green-500/10 border-green-500 text-green-500' : 
                step.status === 'active' ? 'bg-purple-500/10 border-purple-500 text-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 
                'bg-gray-900 border-gray-700 text-gray-700'}
            `}>
              {step.status === 'completed' && <CheckCircle2 size={12} />}
              {step.status === 'active' && <Loader2 size={12} className="animate-spin" />}
            </div>
            <div className="flex-1 flex justify-between items-center p-3 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
              <span className={`text-sm ${step.status === 'active' ? 'text-white font-medium' : 'text-gray-400'}`}>
                {step.name}
              </span>
              <span className="text-xs text-gray-600 font-mono">{step.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 4. Result View (Tabs for Earned/Owned/Paid) ---
export const MockResult = () => {
  const [activeTab, setActiveTab] = useState<'owned' | 'paid' | 'earned'>('owned');

  const tabs = [
    { id: 'owned', label: 'Owned', icon: Layout },
    { id: 'paid', label: 'Paid', icon: DollarSign },
    { id: 'earned', label: 'Earned', icon: Megaphone },
  ];

  const contentMap = {
    owned: [
      { id: 1, type: 'Instagram', title: 'Q2 Product Launch Teaser', icon: Instagram, date: 'Generated 2m ago' },
      { id: 2, type: 'Threads', title: 'CEO Announcement Thread', icon: MessageSquare, date: 'Generated 5m ago' },
      { id: 3, type: 'Blog', title: 'Why AI Automation Matters', icon: FileText, date: 'Generated 1h ago' },
      { id: 4, type: 'Email', title: 'Weekly Newsletter V4', icon: Mail, date: 'Generated 3h ago' },
    ],
    paid: [
      { id: 1, type: 'Meta Ads', title: 'Retargeting Campaign #4', icon: Share2, date: 'Optimized 10m ago' },
      { id: 2, type: 'LinkedIn', title: 'B2B Lead Gen Sponsored', icon: Link, date: 'Pending Review' },
      { id: 3, type: 'Google Ads', title: 'Search Intent: "SaaS AI"', icon: Globe, date: 'Draft Ready' },
    ],
    earned: [
      { id: 1, type: 'Review', title: 'G2 Crowd Response Draft', icon: MessageSquare, date: 'Suggestion Ready' },
      { id: 2, type: 'PR', title: 'Press Release: Series A', icon: FileText, date: 'Draft V1' },
    ]
  };

  const currentContent = contentMap[activeTab as keyof typeof contentMap];

  return (
    <div className="h-full w-full bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-800 flex">
      {/* Left Sidebar Tabs */}
      <div className="w-[30%] bg-[#171717] border-r border-gray-800 flex flex-col pt-4">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">Media Channels</h3>
        <div className="flex-1 space-y-1 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                activeTab === tab.id 
                  ? 'bg-purple-500/10 text-white border border-purple-500/20' 
                  : 'text-gray-400 hover:bg-[#252525] hover:text-gray-200 border border-transparent'
              }`}
            >
              <tab.icon size={16} className={activeTab === tab.id ? 'text-purple-400' : 'text-gray-500'} />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Main Content List */}
      <div className="flex-1 flex flex-col bg-[#1e1e1e]">
         <div className="h-12 border-b border-gray-800 flex items-center justify-between px-4 bg-[#1e1e1e]">
            <span className="text-sm font-medium text-white">{tabs.find(t => t.id === activeTab)?.label} Outputs</span>
            <span className="text-[10px] text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">{currentContent.length} items</span>
         </div>
         <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {currentContent.map((item) => (
               <div key={item.id} className="bg-[#252525] border border-gray-800 rounded-lg p-3 hover:border-gray-600 transition-colors group cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                     <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-gray-800 rounded text-gray-300 group-hover:text-purple-400 group-hover:bg-gray-700 transition-colors">
                           <item.icon size={14} />
                        </div>
                        <span className="text-xs font-semibold text-gray-400">{item.type}</span>
                     </div>
                     <span className="text-[10px] text-gray-600 font-mono">{item.date}</span>
                  </div>
                  <h4 className="text-sm font-medium text-gray-200 mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                  <div className="flex items-center gap-2 mt-2">
                     <div className="h-1.5 flex-1 bg-gray-800 rounded overflow-hidden">
                        <div className="h-full bg-gray-600 w-2/3"></div>
                     </div>
                     <button className="text-[10px] text-purple-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">View</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

// --- 5. Report View ---
const dataReport = [
  { name: 'Mon', engagement: 4000, conversion: 2400 },
  { name: 'Tue', engagement: 3000, conversion: 1398 },
  { name: 'Wed', engagement: 2000, conversion: 9800 },
  { name: 'Thu', engagement: 2780, conversion: 3908 },
  { name: 'Fri', engagement: 1890, conversion: 4800 },
];

const channelData = [
  { name: 'Email', val: 80, color: '#8b5cf6' },
  { name: 'Social', val: 120, color: '#ec4899' },
  { name: 'Blog', val: 40, color: '#10b981' },
];

export const MockReport = () => (
  <div className="h-full w-full bg-[#0F0F0F] rounded-xl p-4 flex flex-col gap-4 overflow-y-auto">
    <div className="flex justify-between items-center mb-0">
      <h3 className="text-gray-200 font-medium text-sm">Campaign Performance</h3>
      <select className="bg-gray-900 border border-gray-700 text-[10px] text-gray-400 rounded px-2 py-1 outline-none">
        <option>Last 7 Days</option>
      </select>
    </div>
    {/* Area Chart: Trends */}
    <div className="flex-1 min-h-[160px] bg-[#171717] rounded-lg p-2 border border-gray-800 flex flex-col">
       <div className="flex-1 w-full min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataReport}>
              <defs>
                <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorConv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis dataKey="name" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1f1f1f', borderColor: '#333', color: '#fff', fontSize: '10px' }}
                itemStyle={{ fontSize: '10px' }}
              />
              <Area type="monotone" dataKey="engagement" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorEng)" strokeWidth={2} />
              <Area type="monotone" dataKey="conversion" stroke="#10b981" fillOpacity={1} fill="url(#colorConv)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
       </div>
    </div>
    {/* Bar Chart: Channel Breakdown */}
    <div className="h-[140px] bg-[#171717] rounded-lg p-3 border border-gray-800 flex flex-col">
       <h3 className="text-xs font-semibold text-gray-400 mb-2">Channel Attribution</h3>
       <div className="flex-1 w-full min-h-0">
         <ResponsiveContainer width="100%" height="100%">
            <BarChart data={channelData} layout="vertical" barSize={16}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={40} tick={{fill: '#888', fontSize: 10}} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#222', borderColor: '#333', fontSize: '12px', color: '#fff'}} />
                <Bar dataKey="val" radius={[0, 4, 4, 0]}>
                    {channelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
         </ResponsiveContainer>
       </div>
    </div>
  </div>
);

// --- 6. Dashboard View ---
const workflows = [
    { id: 1, user: 'Alex M.', task: 'Q3 Brand Campaign', progress: 75, step: 'Generating', status: 'active' },
    { id: 2, user: 'Sarah L.', task: 'Weekly Newsletter', progress: 100, step: 'Completed', status: 'done' },
    { id: 3, user: 'Mike T.', task: 'Product Launch', progress: 35, step: 'Node Processing', status: 'active' },
    { id: 4, user: 'Emma W.', task: 'Blog Content Series', progress: 15, step: 'Asset Upload', status: 'pending' },
];

export const MockDashboard = () => (
  <div className="h-full w-full bg-[#0F0F0F] rounded-xl p-6 flex flex-col gap-6">
    <div className="flex items-center justify-between">
       <h3 className="text-lg font-semibold text-white">Overview</h3>
       <div className="flex items-center gap-2">
         <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
         </span>
         <span className="text-xs text-gray-400">System Live</span>
       </div>
    </div>
    {/* Top Metric Cards */}
    <div className="grid grid-cols-2 gap-4">
      {/* Total Leads */}
      <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
           <TrendingUp size={40} className="text-white" />
        </div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-gray-400">Total Leads</span>
          <TrendingUp size={14} className="text-green-500" />
        </div>
        <div className="text-2xl font-bold text-white">1,248</div>
        <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
           <span className="bg-green-500/10 px-1 rounded">+12.5%</span> vs last week
        </div>
      </div>
      {/* ROI */}
      <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
           <BarChart3 size={40} className="text-white" />
        </div>
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-gray-400">ROI</span>
          <BarChart3 size={14} className="text-purple-400" />
        </div>
        <div className="text-2xl font-bold text-white">320%</div>
        <div className="text-xs text-purple-400 mt-1 flex items-center gap-1">
           <span className="bg-purple-500/10 px-1 rounded">Excellent</span> performance
        </div>
      </div>
    </div>
    {/* Workflow List (Timeline Style) */}
    <div className="flex-1 bg-gray-900/30 rounded-lg border border-gray-800 p-4 overflow-hidden flex flex-col">
       <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-gray-300">Workflow</h4>
          <button className="text-[10px] text-purple-400 hover:text-white transition-colors">View All</button>
       </div>
       <div className="flex-1 overflow-y-auto pr-1 relative"> 
          {/* Vertical Timeline Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-800"></div>
          <div className="space-y-4">
             {workflows.map((wf) => (
                <div key={wf.id} className="relative flex items-start gap-4 group">
                   {/* Node Icon */}
                   <div className={`
                      z-10 w-6 h-6 rounded-full flex items-center justify-center border-2 shrink-0 bg-[#0F0F0F]
                      ${wf.status === 'done' ? 'border-green-500 text-green-500' : 
                        wf.status === 'active' ? 'border-purple-500 text-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.5)]' : 
                        'border-gray-700 text-gray-600'}
                   `}>
                      {wf.status === 'done' && <CheckCircle2 size={12} />}
                      {wf.status === 'active' && <Loader2 size={12} className="animate-spin" />}
                      {wf.status === 'pending' && <Clock size={12} />}
                   </div>
                   {/* Content Card */}
                   <div className="flex-1 flex flex-col gap-2 p-3 bg-[#161616] rounded border border-gray-800 hover:border-gray-700 transition-colors">
                      <div className="flex justify-between items-start">
                         <div className="flex items-center gap-2">
                            {/* User Avatar */}
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white ${
                               wf.id === 1 ? 'bg-blue-600' : wf.id === 2 ? 'bg-emerald-600' : wf.id === 3 ? 'bg-purple-600' : 'bg-orange-600'
                            }`}>
                               {wf.user.charAt(0)}
                            </div>
                            <div>
                               <div className="text-xs font-medium text-gray-200">{wf.task}</div>
                               <div className="text-[10px] text-gray-500">{wf.user}</div>
                            </div>
                         </div>
                         {/* Status Text Badge */}
                         <div className={`text-[10px] px-2 py-0.5 rounded-full border ${
                            wf.status === 'done' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 
                            wf.status === 'pending' ? 'bg-gray-800 border-gray-700 text-gray-400' :
                            'bg-purple-500/10 border-purple-500/20 text-purple-400'
                         }`}>
                            {wf.step}
                         </div>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden mt-1">
                         <div 
                            className={`h-full rounded-full transition-all duration-1000 ${wf.status === 'done' ? 'bg-green-500' : 'bg-purple-500'}`} 
                            style={{ width: `${wf.progress}%` }}
                         ></div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  </div>
);

