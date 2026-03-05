import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Lightbulb,
  ArrowRight,
  Zap,
  BrainCircuit,
  Database,
  LineChart
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SectionProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, icon, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 shadow-2xl space-y-6"
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 border border-cyan-500/20">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-black text-white tracking-tight">{title}</h2>
        <p className="text-sm text-slate-400 font-medium">{subtitle}</p>
      </div>
    </div>
    <div className="text-slate-300 leading-relaxed space-y-4">
      {children}
    </div>
  </motion.div>
);

export const MethodologyPage: React.FC = () => (
  <div className="space-y-8">
    <Section 
      title="The Science of Early Detection" 
      subtitle="Understanding the psychological markers of academic burnout"
      icon={<BrainCircuit size={24} />}
    >
      <p>
        EduPulse AI is built on the psychological principle that <strong>dropout is a terminal outcome</strong>, but <strong>burnout is a prolonged process</strong>. By the time a student officially drops out, they have often been experiencing chronic stressors for months.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[
          { title: 'Exhaustion', desc: 'Erratic login times and late-night activity spikes as students struggle to focus.', icon: <Zap className="text-amber-400" /> },
          { title: 'Cynicism', desc: 'Decreased participation and shorter session durations signaling detachment.', icon: <ShieldCheck className="text-purple-400" /> },
          { title: 'Reduced Efficacy', desc: 'Increasing assignment delays and declining grades relative to history.', icon: <BarChart3 className="text-cyan-400" /> }
        ].map((item, i) => (
          <div key={i} className="bg-slate-800/50 p-6 rounded-3xl border border-white/5 space-y-3">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">{item.icon}</div>
            <h4 className="font-black text-white text-sm uppercase tracking-widest">{item.title}</h4>
            <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section 
      title="AI Model Architecture" 
      subtitle="Dual-model approach for precision and explainability"
      icon={<Cpu size={24} />}
    >
      <div className="space-y-6">
        <p>
          We utilize a multi-task learning framework that combines classification for risk tiering and regression for probability mapping.
        </p>
        <div className="bg-slate-900/60 p-8 rounded-[2rem] border border-white/5">
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">1</div>
              <div>
                <h4 className="text-white font-bold">LightGBM Classifier</h4>
                <p className="text-sm text-slate-400">Handles non-linear behavioral features to categorize students into Low, Medium, or High risk tiers.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-bold">2</div>
              <div>
                <h4 className="text-white font-bold">XGBoost Regressor</h4>
                <p className="text-sm text-slate-400">Provides a continuous 0-100% probability score for the "Risk Gauge" visualization.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">3</div>
              <div>
                <h4 className="text-white font-bold">TreeSHAP Explainability</h4>
                <p className="text-sm text-slate-400">Deconstructs the "Black Box" to show exactly which features (like late-night logins) are driving the risk.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  </div>
);

export const ImpactPage: React.FC = () => (
  <div className="space-y-8">
    <Section 
      title="Institutional Impact" 
      subtitle="Transforming reactive administration into proactive intervention"
      icon={<Target size={24} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-white font-bold flex items-center gap-2">
            <Users className="text-cyan-400" size={18} />
            For Students
          </h4>
          <p className="text-sm text-slate-400">
            Early identification means students receive support before they reach a breaking point. Personalized wellness tips and deadline extensions help maintain academic momentum.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold flex items-center gap-2">
            <ShieldCheck className="text-purple-400" size={18} />
            For Educators
          </h4>
          <p className="text-sm text-slate-400">
            Advisors save hundreds of hours by focusing on students who truly need help. The "Advisor Draft" engine automates empathetic outreach while keeping the human in the loop.
          </p>
        </div>
      </div>
    </Section>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { label: 'Retention Rate', value: '+15%', desc: 'Projected increase in student retention.' },
        { label: 'Advisor Efficiency', value: '3x', desc: 'Faster identification of at-risk students.' },
        { label: 'Intervention Speed', value: '24h', desc: 'Average time to first outreach.' }
      ].map((stat, i) => (
        <div key={i} className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 text-center space-y-2">
          <div className="text-3xl font-black text-cyan-400 tracking-tighter">{stat.value}</div>
          <div className="text-[10px] font-black text-white uppercase tracking-widest">{stat.label}</div>
          <p className="text-xs text-slate-500">{stat.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export const DataPage: React.FC = () => (
  <div className="space-y-8">
    <Section 
      title="Synthetic Behavioral Telemetry" 
      subtitle="How we simulated 5,000 student profiles for the hackathon"
      icon={<Database size={24} />}
    >
      <p>
        To demonstrate the platform's power without compromising privacy, we generated a synthetic dataset summarizing a 6-month behavioral timeline.
      </p>
      <div className="bg-slate-800/30 rounded-3xl p-6 border border-white/5 font-mono text-[10px] text-cyan-300/80 overflow-x-auto">
        <pre>{`def generate_student_data(n=5000):
    # 3 clusters: Thriving (50%), Struggling (30%), Burning Out (20%)
    profiles = np.random.choice([0, 1, 2], size=n, p=[0.5, 0.3, 0.2])
    
    # Features:
    # - lms_login_frequency
    # - login_irregularity_score
    # - assignment_submission_delay
    # - late_night_activity_ratio
    # - sentiment_score`}</pre>
      </div>
    </Section>

    <Section 
      title="Feature Engineering" 
      subtitle="Derived psychological proxies"
      icon={<LineChart size={24} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5">
          <h4 className="text-white font-bold text-sm mb-2">Behavioral Stability Index (BSI)</h4>
          <p className="text-xs text-slate-400">Calculated as 1 / (Irregularity * Entropy). Low BSI indicates a loss of routine, a primary symptom of executive dysfunction.</p>
        </div>
        <div className="bg-slate-900/60 p-6 rounded-3xl border border-white/5">
          <h4 className="text-white font-bold text-sm mb-2">Academic Exhaustion Metric (AEM)</h4>
          <p className="text-xs text-slate-400">Ratio of late-night activity to login frequency. High AEM represents a student working late but still missing deadlines.</p>
        </div>
      </div>
    </Section>
  </div>
);
