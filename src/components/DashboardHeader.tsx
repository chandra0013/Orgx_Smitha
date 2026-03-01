import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  BarChart2, 
  Users,
  Search,
  Bell,
  Zap
} from 'lucide-react';
import { cn } from '../lib/utils';

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: CheckSquare, label: 'Tasks', id: 'tasks' },
  { icon: Calendar, label: 'Calendar', id: 'calendar' },
  { icon: BarChart2, label: 'Analytics', id: 'analytics' },
  { icon: Users, label: 'Team', id: 'team' },
];

interface DashboardHeaderProps {
  activeId: string;
  onNavigate: (id: string) => void;
  onLogoClick: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ activeId, onNavigate, onLogoClick }) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <header className="bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2rem] px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={onLogoClick}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-600/20 group-hover:rotate-12 transition-transform">
            <Zap size={20} className="text-white fill-white" />
          </div>
          <h1 className="text-xl font-black tracking-tighter text-slate-900">EduPulse</h1>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all relative",
                activeId === item.id 
                  ? "bg-white text-purple-600 shadow-sm" 
                  : "text-slate-500 hover:text-slate-900"
              )}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
              {activeId === item.id && (
                <motion.div 
                  layoutId="header-active"
                  className="absolute inset-0 bg-white rounded-xl -z-10"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center relative group">
            <Search className="absolute left-3 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-slate-100/50 border border-slate-200/50 rounded-xl py-2 pl-10 pr-4 text-xs outline-none focus:ring-2 focus:ring-purple-500/20 w-40 transition-all"
            />
          </div>
          
          <button className="p-2.5 rounded-xl bg-slate-100/50 text-slate-500 hover:text-purple-600 transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-purple-600 rounded-full border-2 border-white" />
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="w-10 h-10 rounded-full bg-purple-100 border-2 border-white shadow-sm overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Totok" alt="User" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
