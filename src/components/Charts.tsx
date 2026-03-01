import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { StudentRiskRow } from '../types';
import { cn } from '../lib/utils';

interface RiskDistributionChartProps {
  students: StudentRiskRow[];
}

export const RiskDistributionChart: React.FC<RiskDistributionChartProps> = ({ students }) => {
  const data = [
    { name: 'High', value: students.filter(s => s.current_risk.risk_level === 'HIGH').length, color: '#EF4444' },
    { name: 'Medium', value: students.filter(s => s.current_risk.risk_level === 'MEDIUM').length, color: '#F59E0B' },
    { name: 'Low', value: students.filter(s => s.current_risk.risk_level === 'LOW').length, color: '#10B981' },
  ];

  return (
    <div className="glass-card p-6 h-full flex flex-col">
      <h3 className="text-lg font-bold text-white mb-6">Risk Distribution</h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={8}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#0F1629', border: '1px solid #1E2A4A', borderRadius: '12px' }}
              itemStyle={{ color: '#F1F5F9' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {data.map((item) => (
          <div key={item.name} className="text-center">
            <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: item.color }}>{item.name}</p>
            <p className="text-xl font-black text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const RiskTrendChart: React.FC<{ history: { date: string; score: number }[] }> = ({ history }) => {
  return (
    <div className="glass-card p-6 h-full">
      <h3 className="text-lg font-bold text-white mb-6">Cohort Risk Trend</h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={history}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E2A4A" vertical={false} />
            <XAxis 
              dataKey="date" 
              stroke="#64748b" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(str) => new Date(str).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            />
            <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0F1629', border: '1px solid #1E2A4A', borderRadius: '12px' }}
              itemStyle={{ color: '#F1F5F9' }}
            />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#6366F1" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorScore)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
