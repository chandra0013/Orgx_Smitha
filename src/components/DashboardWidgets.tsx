import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const ProjectAnalytics: React.FC = () => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const values = [40, 70, 45, 90, 60, 50, 40];

  return (
    <div className="card-white p-6 h-full flex flex-col">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Project Analytics</h3>
      <div className="flex-1 flex items-end justify-between gap-2">
        {values.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-3">
            <div className="w-full relative group">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${v}%` }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={cn(
                  "w-full rounded-full transition-all",
                  i === 3 ? "bg-brand-primary" : i === 2 ? "bg-purple-400" : "bg-slate-100 border-2 border-dashed border-slate-200"
                )}
              />
              {i === 2 && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border border-slate-100 shadow-sm px-1.5 py-0.5 rounded-md text-[8px] font-bold text-slate-400">
                  74%
                </div>
              )}
            </div>
            <span className="text-[10px] font-bold text-slate-400">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectProgress: React.FC = () => {
  return (
    <div className="card-white p-6 h-full flex flex-col">
      <h3 className="text-lg font-bold text-slate-900 mb-6">Project Progress</h3>
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="w-48 h-24 overflow-hidden relative">
          <div className="w-48 h-48 rounded-full border-[20px] border-slate-100" />
          <motion.div 
            initial={{ rotate: -180 }}
            animate={{ rotate: -100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] border-brand-primary border-b-transparent border-l-transparent origin-center"
            style={{ transform: 'rotate(-100deg)' }}
          />
          <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] border-purple-900/30 border-b-transparent border-l-transparent rotate-[45deg]" />
        </div>
        <div className="text-center mt-[-20px]">
          <h4 className="text-4xl font-bold text-slate-900">41%</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Project Ended</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-brand-primary" />
          <span className="text-[10px] font-bold text-slate-400">Completed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-purple-900/30" />
          <span className="text-[10px] font-bold text-slate-400">In Progress</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-100" />
          <span className="text-[10px] font-bold text-slate-400">Pending</span>
        </div>
      </div>
    </div>
  );
};
