import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Video } from 'lucide-react';
import { cn } from '../lib/utils';

const TEAM = [
  { name: 'Alexandra Deff', role: 'Github Project Repository', status: 'Completed', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
  { name: 'Edwin Adenike', role: 'Integrate User Authentication System', status: 'In Progress', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Edwin' },
  { name: 'Isaac Oluwatemilorun', role: 'Develop Search and Filter Functionality', status: 'Pending', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isaac' },
  { name: 'David Oshodi', role: 'Responsive Layout for Homepage', status: 'In Progress', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
];

export const TeamCollaboration: React.FC = () => {
  return (
    <div className="card-white p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900">Team Collaboration</h3>
        <button className="flex items-center gap-1 text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-slate-50 transition-all">
          <Plus size={12} />
          Add Member
        </button>
      </div>
      <div className="space-y-4 flex-1">
        {TEAM.map((member, i) => (
          <div key={i} className="flex items-center gap-3">
            <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full bg-slate-100 border border-white shadow-sm" referrerPolicy="no-referrer" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">{member.name}</p>
              <p className="text-[10px] text-slate-400 font-medium truncate">Working on <span className="text-slate-900">{member.role}</span></p>
            </div>
            <div className={cn(
              "px-2 py-0.5 rounded-md text-[8px] font-bold",
              member.status === 'Completed' ? "bg-purple-100 text-purple-700" :
              member.status === 'In Progress' ? "bg-amber-100 text-amber-700" :
              "bg-rose-100 text-rose-700"
            )}>
              {member.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Reminders: React.FC = () => {
  return (
    <div className="card-white p-6 h-full flex flex-col">
      <h3 className="text-lg font-bold text-slate-900 mb-4">Reminders</h3>
      <div className="flex-1">
        <h4 className="text-xl font-bold text-brand-primary leading-tight mb-1">Meeting with Arc Company</h4>
        <p className="text-xs text-slate-400 font-medium">Time : 02.00 pm - 04.00 pm</p>
      </div>
      <button className="w-full bg-brand-primary text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-purple-800 transition-all mt-4">
        <Video size={18} />
        Start Meeting
      </button>
    </div>
  );
};
