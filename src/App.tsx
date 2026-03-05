import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Download } from 'lucide-react';
import { DashboardHeader } from './components/DashboardHeader';
import { StatCard } from './components/StatCard';
import { ProjectAnalytics, ProjectProgress } from './components/DashboardWidgets';
import { TeamCollaboration, Reminders } from './components/TeamWidgets';
import { ProjectList, TimeTracker } from './components/ProjectWidgets';
import { LandingPage } from './components/LandingPage';
import { TasksView, CalendarView, AnalyticsView, TeamView } from './components/SectionViews';
import { AIStudioDashboard } from './components/AIStudioDashboard';
import { MethodologyPage, ImpactPage, DataPage } from './components/ProjectExplanations';
import { Layout, BookOpen, Target, Database, Activity, Zap } from 'lucide-react';
import { cn } from './lib/utils';

type AppView = 'landing' | 'dashboard' | 'methodology' | 'impact' | 'data';

export default function App() {
  const [view, setView] = useState<AppView>('landing');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-white flex flex-col items-center justify-center gap-4">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 border-4 border-purple-100 border-t-purple-600 rounded-full"
        />
        <p className="text-sm font-bold text-purple-600 uppercase tracking-widest">Loading EduPulse</p>
      </div>
    );
  }

  if (view === 'landing') {
    return <LandingPage onStart={() => setView('dashboard')} />;
  }

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <AIStudioDashboard onBack={() => setView('landing')} />;
      case 'methodology':
        return <MethodologyPage />;
      case 'impact':
        return <ImpactPage />;
      case 'data':
        return <DataPage />;
      default:
        return <AIStudioDashboard onBack={() => setView('landing')} />;
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Activity size={14} /> },
    { id: 'methodology', label: 'Methodology', icon: <BookOpen size={14} /> },
    { id: 'impact', label: 'Impact', icon: <Target size={14} /> },
    { id: 'data', label: 'Data Science', icon: <Database size={14} /> },
  ];

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Global App Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0b1e]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <button 
            onClick={() => setView('landing')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-600/20 group-hover:scale-110 transition-transform">
              <Zap size={20} className="text-white fill-white" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-white flex items-center gap-2">
                EduPulse <span className="text-cyan-400">AI</span>
              </h1>
            </div>
          </button>

          <nav className="flex items-center gap-2 bg-slate-900/50 p-1 rounded-2xl border border-white/5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id as AppView)}
                className={cn(
                  "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2",
                  view === item.id 
                    ? "bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/20" 
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                )}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <Layout size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
