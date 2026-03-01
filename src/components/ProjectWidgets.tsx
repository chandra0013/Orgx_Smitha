import React from 'react';
import { motion } from 'framer-motion';
import { Play, Square, Plus } from 'lucide-react';
import { cn } from '../lib/utils';

const PROJECTS = [
  { name: 'Develop API Endpoints', date: 'Nov 26, 2024', icon: '⚡', color: 'bg-blue-500' },
  { name: 'Onboarding Flow', date: 'Nov 28, 2024', icon: '🌊', color: 'bg-purple-500' },
  { name: 'Build Dashboard', date: 'Nov 30, 2024', icon: '📊', color: 'bg-amber-500' },
  { name: 'Optimize Page Load', date: 'Dec 5, 2024', icon: '🚀', color: 'bg-orange-500' },
  { name: 'Cross-Browser Testing', date: 'Dec 6, 2024', icon: '🌐', color: 'bg-indigo-500' },
];

export const ProjectList: React.FC = () => {
  return (
    <div className="card-white p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900">Project</h3>
        <button className="flex items-center gap-1 text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-slate-50 transition-all">
          <Plus size={12} />
          New
        </button>
      </div>
      <div className="space-y-4 flex-1">
        {PROJECTS.map((p, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-sm", p.color + "/10")}>
              {p.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900">{p.name}</p>
              <p className="text-[10px] text-slate-400 font-medium">Due date: {p.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TimeTracker: React.FC = () => {
  return (
    <div className="rounded-[2rem] p-6 bg-purple-950 relative overflow-hidden h-full flex flex-col">
      {/* Organic wavy background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path d="M0,200 C100,100 300,300 400,200 L400,400 L0,400 Z" fill="#9333ea" />
          <path d="M0,250 C150,150 250,350 400,250 L400,400 L0,400 Z" fill="#7c3aed" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-sm font-bold text-purple-200 mb-8">Time Tracker</h3>
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <h4 className="text-5xl font-bold text-white tracking-tight mb-8">01:24:08</h4>
          
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-purple-950 hover:bg-purple-50 transition-all shadow-lg">
              <Play size={20} fill="currentColor" />
            </button>
            <button className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white hover:bg-rose-600 transition-all shadow-lg">
              <Square size={20} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
