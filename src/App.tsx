import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Download, Zap } from 'lucide-react';
import { DashboardHeader } from './components/DashboardHeader';
import { StatCard } from './components/StatCard';
import { ProjectAnalytics, ProjectProgress } from './components/DashboardWidgets';
import { TeamCollaboration, Reminders } from './components/TeamWidgets';
import { ProjectList, TimeTracker } from './components/ProjectWidgets';
import { LandingPage } from './components/LandingPage';
import { TasksView, CalendarView, AnalyticsView, TeamView } from './components/SectionViews';

export default function App() {
  const [view, setView] = useState<'landing' | 'dashboard'>('landing');
  const [activeTab, setActiveTab] = useState('dashboard');
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

  return (
    <div className="min-h-screen bg-bg-main font-sans relative">
      <DashboardHeader 
        activeId={activeTab} 
        onNavigate={setActiveTab} 
        onLogoClick={() => setView('landing')}
      />
      
      <main className="pt-32 pb-12 px-8 max-w-[1400px] mx-auto overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Dashboard Header */}
              <div className="flex items-end justify-between">
                <div>
                  <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Dashboard</h1>
                  <p className="text-slate-400 mt-2 text-lg font-medium">Plan, prioritize, and accomplish your tasks with ease.</p>
                </div>
                <div className="flex gap-4">
                  <button className="px-8 py-3.5 bg-purple-600 text-white rounded-2xl font-black text-sm hover:bg-purple-700 transition-all shadow-xl shadow-purple-600/20 flex items-center gap-2">
                    <Plus size={18} />
                    Add Project
                  </button>
                  <button className="px-8 py-3.5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all shadow-sm">
                    Import Data
                  </button>
                </div>
              </div>

              {/* Top Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                  title="Total Projects" 
                  value="24" 
                  subtitle="Increased from last month"
                  isPrimary
                  delay={0.1}
                />
                <StatCard 
                  title="Ended Projects" 
                  value="10" 
                  subtitle="Increased from last month"
                  delay={0.2}
                />
                <StatCard 
                  title="Running Projects" 
                  value="12" 
                  subtitle="Increased from last month"
                  delay={0.3}
                />
                <StatCard 
                  title="Pending Project" 
                  value="2" 
                  subtitle="On Discuss"
                  delay={0.4}
                />
              </div>

              {/* Main Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-8 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-[350px]">
                      <ProjectAnalytics />
                    </div>
                    <div className="h-[350px]">
                      <Reminders />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-7 h-[400px]">
                      <TeamCollaboration />
                    </div>
                    <div className="md:col-span-5 h-[400px]">
                      <ProjectProgress />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-4 space-y-8">
                  <div className="h-[450px]">
                    <ProjectList />
                  </div>
                  <div className="h-[300px]">
                    <TimeTracker />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'tasks' && (
            <motion.div
              key="tasks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Tasks</h1>
                <p className="text-slate-400 mt-2 text-lg font-medium">Manage student interventions and data analysis tasks.</p>
              </div>
              <TasksView />
            </motion.div>
          )}

          {activeTab === 'calendar' && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Calendar</h1>
                <p className="text-slate-400 mt-2 text-lg font-medium">Keep track of upcoming student check-ins and reports.</p>
              </div>
              <CalendarView />
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Analytics</h1>
                <p className="text-slate-400 mt-2 text-lg font-medium">Deep dive into student burnout trends and risk factors.</p>
              </div>
              <AnalyticsView />
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Team</h1>
                <p className="text-slate-400 mt-2 text-lg font-medium">Collaborate with counselors and data specialists.</p>
              </div>
              <TeamView />
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-white/50 backdrop-blur-md rounded-[3rem] border border-slate-100"
            >
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Zap size={48} className="text-purple-600" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 capitalize tracking-tighter">Settings</h2>
              <p className="text-slate-400 mt-4 text-lg max-w-md mx-auto">Configure your EduPulse platform preferences.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
