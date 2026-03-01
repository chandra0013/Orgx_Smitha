import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';
import { StudentRiskRow } from '../types';
import { cn } from '../lib/utils';

interface RiskRadarTableProps {
  students: StudentRiskRow[];
  onSelectStudent: (student: StudentRiskRow) => void;
}

export const RiskRadarTable: React.FC<RiskRadarTableProps> = ({ students, onSelectStudent }) => {
  return (
    <div className="glass-card overflow-hidden">
      <div className="p-6 border-b border-navy-700 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Student Risk Radar</h3>
          <p className="text-xs text-slate-500">Real-time monitoring of high-risk indicators</p>
        </div>
        <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">View All Students</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-navy-900/50 text-[10px] font-black uppercase tracking-widest text-slate-500 border-b border-navy-700">
              <th className="px-6 py-4">Student</th>
              <th className="px-6 py-4">Program</th>
              <th className="px-6 py-4">Risk Level</th>
              <th className="px-6 py-4">Risk Score</th>
              <th className="px-6 py-4">Top Trigger</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-700/50">
            {students.map((student, idx) => (
              <motion.tr
                key={student.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => onSelectStudent(student)}
                className="group hover:bg-white/5 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-700 flex items-center justify-center font-bold text-indigo-400 group-hover:bg-indigo-brand/20 transition-colors">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{student.name}</p>
                      <p className="text-[10px] text-slate-500">{student.student_id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-xs font-semibold text-slate-300">{student.program}</p>
                  <p className="text-[10px] text-slate-500">Year {student.year_of_study}</p>
                </td>
                <td className="px-6 py-4">
                  <div className={cn(
                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                    student.current_risk.risk_level === 'HIGH' ? "bg-risk-high/10 text-risk-high" :
                    student.current_risk.risk_level === 'MEDIUM' ? "bg-risk-medium/10 text-risk-medium" :
                    "bg-risk-low/10 text-risk-low"
                  )}>
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full",
                      student.current_risk.risk_level === 'HIGH' ? "bg-risk-high animate-pulse" :
                      student.current_risk.risk_level === 'MEDIUM' ? "bg-risk-medium" :
                      "bg-risk-low"
                    )} />
                    {student.current_risk.risk_level}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 w-24 bg-navy-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${student.current_risk.risk_score}%` }}
                        className={cn(
                          "h-full rounded-full",
                          student.current_risk.risk_score > 70 ? "bg-risk-high" :
                          student.current_risk.risk_score > 40 ? "bg-risk-medium" :
                          "bg-risk-low"
                        )}
                      />
                    </div>
                    <span className="text-xs font-black text-white">{student.current_risk.risk_score}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={14} className="text-risk-medium" />
                    <span className="text-xs text-slate-400">{student.current_risk.top_triggers[0].feature}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="p-2 rounded-lg bg-navy-700 text-slate-400 group-hover:bg-indigo-brand group-hover:text-white transition-all">
                    <ChevronRight size={16} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
