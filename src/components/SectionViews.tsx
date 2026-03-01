import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Calendar as CalendarIcon,
  ChevronRight,
  MoreVertical,
  Plus,
  Filter,
  Users,
  TrendingUp,
  Target,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// --- Tasks View ---
const TASKS = [
  { id: 1, title: 'Analyze Q1 Burnout Trends', status: 'In Progress', priority: 'High', due: 'Mar 5', category: 'Data Analysis' },
  { id: 2, title: 'Student Intervention: John Doe', status: 'Pending', priority: 'Critical', due: 'Mar 2', category: 'Intervention' },
  { id: 3, title: 'Update Risk Assessment Model', status: 'Completed', priority: 'Medium', due: 'Feb 28', category: 'System' },
  { id: 4, title: 'Counselor Training Session', status: 'Scheduled', priority: 'Low', due: 'Mar 10', category: 'Training' },
  { id: 5, title: 'Generate Monthly Dropout Report', status: 'To Do', priority: 'High', due: 'Mar 7', category: 'Reporting' },
  { id: 6, title: 'Review Academic Performance Data', status: 'In Progress', priority: 'Medium', due: 'Mar 6', category: 'Data Analysis' },
];

export const TasksView: React.FC = () => (
  <div className="space-y-8">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-all">
          <Filter size={16} />
          Filter
        </button>
        <div className="h-6 w-px bg-slate-200" />
        <div className="flex items-center gap-2">
          {['All Tasks', 'My Tasks', 'Completed'].map((tab, i) => (
            <button key={tab} className={cn(
              "px-4 py-2 rounded-xl text-sm font-bold transition-all",
              i === 0 ? "bg-purple-100 text-purple-600" : "text-slate-400 hover:text-slate-600"
            )}>
              {tab}
            </button>
          ))}
        </div>
      </div>
      <button className="px-6 py-2.5 bg-purple-600 text-white rounded-xl font-bold text-sm hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20 flex items-center gap-2">
        <Plus size={18} />
        New Task
      </button>
    </div>

    <div className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-[2.5rem] overflow-hidden shadow-xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/50">
            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Task Name</th>
            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Priority</th>
            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Due Date</th>
            <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
            <th className="px-8 py-5"></th>
          </tr>
        </thead>
        <tbody>
          {TASKS.map((task, i) => (
            <motion.tr 
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group hover:bg-purple-50/30 transition-colors cursor-pointer border-b border-slate-50 last:border-0"
            >
              <td className="px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    task.status === 'Completed' ? "bg-emerald-500" : "bg-purple-500"
                  )} />
                  <span className="text-sm font-bold text-slate-900">{task.title}</span>
                </div>
              </td>
              <td className="px-8 py-5">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                  task.status === 'Completed' ? "bg-emerald-100 text-emerald-600" :
                  task.status === 'In Progress' ? "bg-blue-100 text-blue-600" :
                  "bg-amber-100 text-amber-600"
                )}>
                  {task.status}
                </span>
              </td>
              <td className="px-8 py-5">
                <span className={cn(
                  "text-xs font-bold",
                  task.priority === 'Critical' ? "text-rose-500" :
                  task.priority === 'High' ? "text-orange-500" :
                  task.priority === 'Medium' ? "text-blue-500" :
                  "text-slate-400"
                )}>
                  {task.priority}
                </span>
              </td>
              <td className="px-8 py-5">
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock size={14} />
                  <span className="text-xs font-medium">{task.due}</span>
                </div>
              </td>
              <td className="px-8 py-5">
                <span className="text-xs font-bold text-slate-400">{task.category}</span>
              </td>
              <td className="px-8 py-5 text-right">
                <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreVertical size={18} />
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- Calendar View ---
const EVENTS = [
  { time: '10:00 AM', title: 'Student Check-in: Sarah Miller', type: 'Intervention', color: 'bg-purple-500' },
  { time: '11:30 AM', title: 'Data Sync with Registrar', type: 'System', color: 'bg-blue-500' },
  { time: '02:00 PM', title: 'Burnout Trend Review Meeting', type: 'Analysis', color: 'bg-orange-500' },
  { time: '04:00 PM', title: 'Counselor Workshop', type: 'Training', color: 'bg-emerald-500' },
];

export const CalendarView: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
    <div className="lg:col-span-8 space-y-8">
      <div className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-black text-slate-900 tracking-tighter">March 2026</h3>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors"><ChevronRight className="rotate-180" /></button>
            <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors"><ChevronRight /></button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4 mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-4">
          {[...Array(31)].map((_, i) => (
            <div key={i} className={cn(
              "aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer transition-all border border-transparent",
              i + 1 === 1 ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30" : "hover:bg-purple-50 hover:border-purple-100 text-slate-600"
            )}>
              <span className="text-sm font-bold">{i + 1}</span>
              {i % 7 === 2 && <div className="w-1 h-1 bg-orange-400 rounded-full" />}
              {i % 7 === 4 && <div className="w-1 h-1 bg-emerald-400 rounded-full" />}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="lg:col-span-4 space-y-8">
      <div className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-xl">
        <h3 className="text-xl font-black text-slate-900 tracking-tighter mb-6">Today's Schedule</h3>
        <div className="space-y-6">
          {EVENTS.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 group cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div className={cn("w-3 h-3 rounded-full border-2 border-white shadow-sm", event.color)} />
                <div className="w-px flex-1 bg-slate-100 my-1 group-last:hidden" />
              </div>
              <div className="pb-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{event.time}</p>
                <p className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{event.title}</p>
                <p className="text-[10px] font-bold text-slate-400 mt-1">{event.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all mt-4">
          View Full Schedule
        </button>
      </div>
    </div>
  </div>
);

// --- Analytics View ---
const RISK_DATA = [
  { name: 'Science', risk: 45, intervention: 30 },
  { name: 'Arts', risk: 65, intervention: 55 },
  { name: 'Business', risk: 30, intervention: 25 },
  { name: 'Engineering', risk: 80, intervention: 70 },
  { name: 'Medicine', risk: 55, intervention: 40 },
];

const TREND_DATA = [
  { month: 'Oct', value: 400 },
  { month: 'Nov', value: 300 },
  { month: 'Dec', value: 500 },
  { month: 'Jan', value: 450 },
  { month: 'Feb', value: 380 },
  { month: 'Mar', value: 240 },
];

export const AnalyticsView: React.FC = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { label: 'Intervention Success', value: '85%', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-100' },
        { label: 'Risk Reduction', value: '24%', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
        { label: 'Students Protected', value: '1,240', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-100' },
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 shadow-xl flex items-center gap-6"
        >
          <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg", stat.bg)}>
            <stat.icon size={32} className={stat.color} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl font-black text-slate-900">{stat.value}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 bg-white/50 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-xl">
        <h3 className="text-xl font-black text-slate-900 tracking-tighter mb-8">Risk vs Intervention by Department</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={RISK_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600, fill: '#94a3b8' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600, fill: '#94a3b8' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                cursor={{ fill: '#f8fafc' }}
              />
              <Bar dataKey="risk" fill="#9333ea" radius={[6, 6, 0, 0]} barSize={30} />
              <Bar dataKey="intervention" fill="#c084fc" radius={[6, 6, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="lg:col-span-4 bg-white/50 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-xl">
        <h3 className="text-xl font-black text-slate-900 tracking-tighter mb-8">Risk Trend</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={TREND_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
              <Line type="monotone" dataKey="value" stroke="#9333ea" strokeWidth={4} dot={{ r: 6, fill: '#9333ea', strokeWidth: 3, stroke: '#fff' }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </div>
);

// --- Team View ---
const TEAM = [
  { name: 'Dr. Sarah Chen', role: 'Lead Counselor', status: 'Active', tasks: 12, avatar: 'Sarah' },
  { name: 'Mark Thompson', role: 'Data Scientist', status: 'In Meeting', tasks: 8, avatar: 'Mark' },
  { name: 'Elena Rodriguez', role: 'Academic Advisor', status: 'Active', tasks: 15, avatar: 'Elena' },
  { name: 'James Wilson', role: 'Intervention Specialist', status: 'Offline', tasks: 5, avatar: 'James' },
  { name: 'Dr. Michael Park', role: 'Clinical Psychologist', status: 'Active', tasks: 10, avatar: 'Michael' },
  { name: 'Lisa Wong', role: 'Student Success Coach', status: 'Active', tasks: 18, avatar: 'Lisa' },
];

export const TeamView: React.FC = () => (
  <div className="space-y-8">
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-black text-slate-900 tracking-tighter">EduPulse Team</h3>
      <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all flex items-center gap-2">
        <Users size={18} />
        Manage Team
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {TEAM.map((member, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-xl group hover:border-purple-200 transition-all"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.avatar}`} alt={member.name} />
              </div>
              <div className={cn(
                "absolute bottom-1 right-1 w-5 h-5 rounded-full border-4 border-white shadow-sm",
                member.status === 'Active' ? "bg-emerald-500" :
                member.status === 'In Meeting' ? "bg-amber-500" : "bg-slate-300"
              )} />
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
          
          <div className="space-y-1 mb-6">
            <h4 className="text-xl font-black text-slate-900 tracking-tight">{member.name}</h4>
            <p className="text-sm font-bold text-purple-600">{member.role}</p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
              <p className="text-xs font-bold text-slate-700">{member.status}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Active Tasks</p>
              <p className="text-xs font-bold text-slate-700">{member.tasks}</p>
            </div>
            <button className="p-2.5 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-white transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
