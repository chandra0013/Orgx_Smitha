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
import { AIStudioDashboard } from './components/AIStudioDashboard';

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

  return <AIStudioDashboard onBack={() => setView('landing')} />;
}
