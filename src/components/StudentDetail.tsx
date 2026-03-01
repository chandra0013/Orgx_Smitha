import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  MessageSquare,
  FileText,
  Zap,
  Brain
} from 'lucide-react';
import { StudentRiskRow } from '../types';
import { cn } from '../lib/utils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StudentDetailProps {
  student: StudentRiskRow;
  onClose: () => void;
}

export const StudentDetail: React.FC<StudentDetailProps> = ({ student, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 400 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 400 }}
      className="fixed inset-y-0 right-0 w-[500px] bg-navy-900 border-l border-navy-700 shadow-2xl z-50 flex flex-col"
    >
      <div className="p-6 border-b border-navy-700 flex items-center justify-between bg-navy-950/50 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-brand/20 flex items-center justify-center font-black text-indigo-400 text-xl">
            {student.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h2 className="text-xl font-black text-white">{student.name}</h2>
            <p className="text-xs text-slate-500">{student.student_id} • {student.program}</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-xl bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700 transition-all"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        {/* Risk Summary */}
        <div className={cn(
          "p-6 rounded-3xl border relative overflow-hidden",
          student.current_risk.risk_level === 'HIGH' ? "bg-risk-high/5 border-risk-high/20" :
          student.current_risk.risk_level === 'MEDIUM' ? "bg-risk-medium/5 border-risk-medium/20" :
          "bg-risk-low/5 border-risk-low/20"
        )}>
          <div className="relative z-10 flex justify-between items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Current Risk Score</p>
              <h3 className={cn(
                "text-5xl font-black",
                student.current_risk.risk_level === 'HIGH' ? "text-risk-high" :
                student.current_risk.risk_level === 'MEDIUM' ? "text-risk-medium" :
                "text-risk-low"
              )}>{student.current_risk.risk_score}%</h3>
            </div>
            <div className="text-right">
              <div className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-2",
                student.current_risk.risk_level === 'HIGH' ? "bg-risk-high text-white" :
                student.current_risk.risk_level === 'MEDIUM' ? "bg-risk-medium text-white" :
                "bg-risk-low text-white"
              )}>
                {student.current_risk.risk_level} RISK
              </div>
              <p className="text-[10px] text-slate-500">Last assessed: 2 hours ago</p>
            </div>
          </div>
        </div>

        {/* Risk Factors (SHAP) */}
        <section>
          <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <Zap size={16} className="text-indigo-400" />
            Risk Factors
          </h4>
          <div className="space-y-3">
            {student.current_risk.top_triggers.map((trigger, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-navy-800/50 border border-navy-700">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-bold text-slate-200">{trigger.feature}</p>
                  <div className={cn(
                    "flex items-center gap-1 text-[10px] font-black",
                    trigger.direction === 'increasing_risk' ? "text-risk-high" : "text-risk-low"
                  )}>
                    {trigger.direction === 'increasing_risk' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {trigger.impact}% IMPACT
                  </div>
                </div>
                <div className="h-1.5 bg-navy-950 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${trigger.impact * 2}%` }}
                    className={cn(
                      "h-full rounded-full",
                      trigger.direction === 'increasing_risk' ? "bg-risk-high" : "bg-risk-low"
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk History */}
        <section>
          <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <TrendingUp size={16} className="text-indigo-400" />
            Risk History
          </h4>
          <div className="h-48 glass-card p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={student.risk_history}>
                <defs>
                  <linearGradient id="colorDetail" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E2A4A" vertical={false} />
                <XAxis dataKey="date" hide />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0F1629', border: '1px solid #1E2A4A', borderRadius: '12px' }}
                  itemStyle={{ color: '#F1F5F9' }}
                />
                <Area type="monotone" dataKey="score" stroke="#6366F1" strokeWidth={2} fill="url(#colorDetail)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Intervention Plan */}
        <section>
          <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <Brain size={16} className="text-indigo-400" />
            AI Intervention Plan
          </h4>
          <div className="p-6 rounded-3xl bg-indigo-brand/5 border border-indigo-brand/20 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-brand/20 text-indigo-400">
                <MessageSquare size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-white mb-1">Suggested Script</p>
                <p className="text-sm text-slate-400 italic">"Hi {student.name.split(' ')[0]}, I noticed your LMS activity has decreased recently. Is everything okay? I'd love to chat about how we can support you this semester."</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-indigo-brand/20 text-indigo-400">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-white mb-1">Recommended Action</p>
                <p className="text-sm text-slate-400">Schedule a 15-minute 1-on-1 check-in within the next 48 hours.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="p-6 border-t border-navy-700 bg-navy-950/50 flex gap-3">
        <button className="flex-1 py-3 rounded-2xl bg-indigo-brand text-white font-bold shadow-lg shadow-indigo-brand/20 hover:bg-indigo-500 transition-all flex items-center justify-center gap-2">
          <MessageSquare size={18} />
          Contact Student
        </button>
        <button className="p-3 rounded-2xl bg-navy-800 text-slate-300 border border-navy-700 hover:text-white hover:bg-navy-700 transition-all">
          <FileText size={20} />
        </button>
      </div>
    </motion.div>
  );
};
