import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  ArrowRight, 
  Copy, 
  Shield, 
  Scale, 
  MessageSquare, 
  Activity,
  User,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip 
} from 'recharts';
import { cn } from '../lib/utils';

interface MetricSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
  icon: React.ReactNode;
}

const MetricSlider: React.FC<MetricSliderProps> = ({ label, value, min, max, step, onChange, icon }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-slate-300">
        <span className="opacity-70">{icon}</span>
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-[10px] font-black text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-md">{value}</span>
    </div>
    <div className="relative h-6 flex items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
      />
      <div 
        className="absolute h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg pointer-events-none" 
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      />
    </div>
  </div>
);

const HistoryChart = () => {
  const data = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    value: 20 + Math.random() * 10 + Math.sin(i / 2) * 5
  }));

  return (
    <div className="h-32 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#22d3ee" 
            strokeWidth={2} 
            dot={false} 
            isAnimationActive={false}
          />
          <XAxis hide />
          <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const AIStudioDashboard: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [metrics, setMetrics] = useState({
    loginFreq: 10,
    attendance: 85,
    irregularity: 0.5,
    lateNight: 0.2,
    delay: 2,
    trend: 0,
    sentiment: 0.5,
    entropy: 0.8
  });

  const [isPredicting, setIsPredicting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    probability: 7.3,
    tier: 'Low',
    attribution: [
      { label: 'Activity Entropy', value: 45, color: 'bg-cyan-400' },
      { label: 'Login Irregularity', value: 32, color: 'bg-purple-400' },
      { label: 'Late Night Ratio', value: 18, color: 'bg-blue-400' },
      { label: 'Attendance %', value: -12, color: 'bg-rose-400' },
      { label: 'Attendance Trend', value: -8, color: 'bg-amber-400' },
    ],
    draft: "Dear Student, we've noticed some changes in your recent academic engagement patterns, particularly regarding your login irregularity and late-night activity. We're reaching out to share some study resources and wellness tips that might be helpful for maintaining a sustainable routine."
  });

  const handlePredict = () => {
    setIsPredicting(true);
    
    // Simulate complex AI calculation based on metrics
    setTimeout(() => {
      // Calculate a pseudo-probability (0-100)
      let prob = 0;
      prob += (50 - metrics.loginFreq) * 0.5; // Lower freq = higher risk
      prob += (100 - metrics.attendance) * 0.4; // Lower attendance = higher risk
      prob += metrics.irregularity * 20;
      prob += metrics.lateNight * 25;
      prob += metrics.delay * 3;
      prob += (1 - metrics.trend) * 10;
      prob += (1 - metrics.sentiment) * 10;
      prob += metrics.entropy * 15;

      prob = Math.min(Math.max(prob, 1.2), 98.9); // Clamp between 1.2 and 98.9
      
      const tier = prob > 70 ? 'High' : prob > 30 ? 'Medium' : 'Low';
      
      // Calculate dynamic attribution based on what's pushing the score up
      const attribution = [
        { label: 'Activity Entropy', value: Math.round(metrics.entropy * 50), color: 'bg-cyan-400' },
        { label: 'Login Irregularity', value: Math.round(metrics.irregularity * 40), color: 'bg-purple-400' },
        { label: 'Late Night Ratio', value: Math.round(metrics.lateNight * 30), color: 'bg-blue-400' },
        { label: 'Attendance %', value: Math.round((85 - metrics.attendance) / 2), color: 'bg-rose-400' },
        { label: 'Attendance Trend', value: Math.round(metrics.trend * -15), color: 'bg-amber-400' },
      ].sort((a, b) => Math.abs(b.value) - Math.abs(a.value));

      // Dynamic draft message
      let draft = "Dear Student, we've noticed some changes in your recent academic engagement patterns. ";
      if (prob > 70) {
        draft += "The data suggests you might be experiencing significant burnout. We'd like to schedule an urgent wellness check-in to discuss how we can support you.";
      } else if (prob > 30) {
        draft += "We've noticed some fluctuations in your routine, particularly regarding late-night activity. We're reaching out to share some time-management resources.";
      } else {
        draft += "Your engagement remains strong, but we've noticed minor shifts in your login patterns. Keep up the great work and remember to take breaks!";
      }

      setResults({
        probability: parseFloat(prob.toFixed(1)),
        tier,
        attribution,
        draft
      });
      
      setIsPredicting(false);
      setShowResults(true);
    }, 1200);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Panel: Student Metrics */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            
            <div className="flex items-center gap-3 mb-8">
              <User size={20} className="text-cyan-400" />
              <h2 className="text-xl font-black text-white tracking-tight">Student Behavioral Profile</h2>
            </div>

            <p className="text-xs text-slate-400 mb-8 leading-relaxed">
              Calibrate behavioral telemetry to interpret cognitive risk levels.
            </p>

            <div className="space-y-6">
              <MetricSlider 
                label="Engagement: Login Freq." 
                value={metrics.loginFreq} 
                min={0} max={50} step={1} 
                onChange={(v) => setMetrics({...metrics, loginFreq: v})}
                icon={<Activity size={14} />}
              />
              <MetricSlider 
                label="Engagement: Attendance %" 
                value={metrics.attendance} 
                min={0} max={100} step={1} 
                onChange={(v) => setMetrics({...metrics, attendance: v})}
                icon={<CheckCircle2 size={14} />}
              />
              <MetricSlider 
                label="Behavior: Login Instability" 
                value={metrics.irregularity} 
                min={0} max={1} step={0.01} 
                onChange={(v) => setMetrics({...metrics, irregularity: v})}
                icon={<Clock size={14} />}
              />
              <MetricSlider 
                label="Behavior: Circadian Imbalance" 
                value={metrics.lateNight} 
                min={0} max={1} step={0.01} 
                onChange={(v) => setMetrics({...metrics, lateNight: v})}
                icon={<Clock size={14} />}
              />
              <MetricSlider 
                label="Performance: Submission Delay" 
                value={metrics.delay} 
                min={0} max={14} step={1} 
                onChange={(v) => setMetrics({...metrics, delay: v})}
                icon={<AlertCircle size={14} />}
              />
              <MetricSlider 
                label="Performance: Attendance Flux" 
                value={metrics.trend} 
                min={-1} max={1} step={0.1} 
                onChange={(v) => setMetrics({...metrics, trend: v})}
                icon={<TrendingUp size={14} />}
              />
              <MetricSlider 
                label="Affect: Sentiment Index" 
                value={metrics.sentiment} 
                min={-1} max={1} step={0.1} 
                onChange={(v) => setMetrics({...metrics, sentiment: v})}
                icon={<MessageSquare size={14} />}
              />
              <MetricSlider 
                label="Complexity: Activity Entropy" 
                value={metrics.entropy} 
                min={0} max={1} step={0.01} 
                onChange={(v) => setMetrics({...metrics, entropy: v})}
                icon={<Zap size={14} />}
              />
            </div>

            <button 
              onClick={handlePredict}
              disabled={isPredicting}
              className={cn(
                "w-full mt-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 relative overflow-hidden group",
                isPredicting ? "bg-slate-800 text-slate-500" : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1"
              )}
            >
              {isPredicting ? (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-slate-600 border-t-cyan-400 rounded-full"
                />
              ) : (
                <>
                  Predict Risk Profile
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Panel: Results */}
        <div className="lg:col-span-8 space-y-8">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full min-h-[400px] bg-slate-900/20 backdrop-blur-sm border border-dashed border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center text-center p-12"
              >
                <div className="w-20 h-20 bg-slate-800/50 rounded-3xl flex items-center justify-center mb-6 border border-white/5">
                  <Activity size={40} className="text-slate-600" />
                </div>
                <h3 className="text-xl font-black text-slate-400 tracking-tight mb-2">Ready for Analysis</h3>
                <p className="text-sm text-slate-500 max-w-xs">Submit a student profile to see the AI predictions and explanations here.</p>
              </motion.div>
            ) : (
              <motion.div 
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Risk Assessment Card */}
                  <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <Shield size={20} className="text-cyan-400" />
                        <h3 className="text-lg font-black text-white tracking-tight">Risk Profile</h3>
                      </div>
                      <span className={cn(
                        "px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border",
                        results.tier === 'High' ? "bg-rose-500/10 text-rose-400 border-rose-500/20" :
                        results.tier === 'Medium' ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                        "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      )}>
                        {results.tier}
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center py-6">
                      <div className="relative w-48 h-48 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="96"
                            cy="96"
                            r="80"
                            stroke="currentColor"
                            strokeWidth="12"
                            fill="transparent"
                            className="text-slate-800"
                          />
                          <motion.circle
                            cx="96"
                            cy="96"
                            r="80"
                            stroke="currentColor"
                            strokeWidth="12"
                            fill="transparent"
                            strokeDasharray={502.6}
                            initial={{ strokeDashoffset: 502.6 }}
                            animate={{ strokeDashoffset: 502.6 * (1 - results.probability / 100) }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className={cn(
                              results.tier === 'High' ? "text-rose-400" :
                              results.tier === 'Medium' ? "text-amber-400" :
                              "text-cyan-400"
                            )}
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-5xl font-black text-white tracking-tighter">{results.probability}%</span>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Dropout Probability</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 text-center mt-8 leading-relaxed max-w-[200px]">
                        {results.tier === 'High' ? "Critical pattern alignment with historical dropout profiles." : 
                         results.tier === 'Medium' ? "Moderate behavioral shifts detected in recent telemetry." :
                         "High pattern alignment with historical stable profiles."}
                      </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "w-2 h-2 rounded-full animate-pulse",
                          results.tier === 'High' ? "bg-rose-500" :
                          results.tier === 'Medium' ? "bg-amber-500" :
                          "bg-emerald-500"
                        )} />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Intervention Logic</span>
                      </div>
                      <ChevronRight size={16} className="text-slate-600" />
                    </div>
                  </div>

                  {/* Attribution Card */}
                  <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
                    <div className="flex items-center gap-3 mb-8">
                      <Activity size={20} className="text-purple-400" />
                      <h3 className="text-lg font-black text-white tracking-tight">Attribution</h3>
                    </div>

                    <div className="space-y-6">
                      {results.attribution.map((factor, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                            <span className="text-slate-400">{factor.label}</span>
                            <span className={factor.value > 0 ? "text-cyan-400" : "text-rose-400"}>
                              {factor.value > 0 ? '+' : ''}{factor.value}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.abs(factor.value)}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className={cn("h-full rounded-full", factor.color)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* History Card */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-blue-400" />
                      <h3 className="text-lg font-black text-white tracking-tight">Behavior History (30 Days)</h3>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        Engagement
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        Baseline
                      </div>
                    </div>
                  </div>
                  <HistoryChart />
                </div>

                {/* Advisor Draft Card */}
                <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <MessageSquare size={20} className="text-cyan-400" />
                      <h3 className="text-lg font-black text-white tracking-tight">Advisor Draft</h3>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/5">
                      <Copy size={14} />
                      Copy
                    </button>
                  </div>

                  <div className="relative pl-6 py-4">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                    <p className="text-sm text-slate-300 leading-relaxed italic font-medium">
                      "{results.draft}"
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-cyan-400 uppercase tracking-widest">
                      <AlertCircle size={12} />
                      ACTION: {results.tier === 'High' ? "Immediate Intervention Required." : results.tier === 'Medium' ? "Soft Outreach Recommended." : "Monitor. No immediate action required."}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all border border-white/5 flex items-center gap-2">
                      <Activity size={14} />
                      Run Stress Test Analysis
                    </button>
                  </div>
                </div>

                {/* Transparency Protocol */}
                <div className="bg-slate-900/20 backdrop-blur-md border border-white/5 rounded-3xl p-6 flex items-center gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center border border-white/5">
                    <Scale size={24} className="text-slate-500" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Transparency Protocol</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      This prediction uses behavior-only telemetry. SHAP logic provides full explainability for all institutional interventions.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
};
