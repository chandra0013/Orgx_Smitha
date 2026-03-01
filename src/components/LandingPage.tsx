import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Brain, Activity } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center px-6 lg:px-16 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover object-right opacity-90"
            >
              <source src="https://ik.imagekit.io/ydm7uekh3u/Video%20Project.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10" />
          
          {/* Animated particles - updated to purple/white */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full z-20"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() 
              }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="relative z-30 w-full py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-12">
              <motion.div 
                whileHover={{ rotate: 180 }}
                className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-600/20"
              >
                <Zap size={24} className="text-white fill-white" />
              </motion.div>
              <h1 className="text-4xl font-black tracking-tighter text-slate-900">EduPulse</h1>
            </div>

            <h2 className="text-6xl lg:text-8xl font-black leading-[0.9] mb-10 tracking-tighter text-slate-900">
              Empowering <br />
              <span className="text-purple-600">Student</span> <br />
              Success.
            </h2>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium max-w-lg">
              The first AI-powered risk intelligence platform designed to detect student burnout before it leads to dropout. Real data. Real interventions. Real results.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onStart}
                  className="px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-[2rem] font-black text-xl transition-all flex items-center gap-3 shadow-2xl shadow-purple-600/40 group"
                >
                  Try it now
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
                
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-purple-600 flex items-center justify-center text-[10px] font-black text-white">
                    +2k
                  </div>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-400 ml-2">Trusted by 2,000+ Educators</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-purple-600 to-transparent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900">Scroll</span>
        </motion.div>
      </section>

      {/* Project Details Section */}
      <section className="py-32 px-8 lg:px-24 bg-slate-50 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -ml-64 -mb-64" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-4"
            >
              The EduPulse Advantage
            </motion.h3>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900"
            >
              Intelligence for <span className="text-purple-600">Student Success</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 max-w-2xl mx-auto text-lg font-medium"
            >
              Our platform integrates seamlessly with existing LMS data to build a comprehensive behavioral profile for every student, identifying risks before they become crises.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Activity, title: 'Behavioral Tracking', desc: 'Monitor LMS logins, submission delays, and attendance patterns in real-time with zero friction.' },
              { icon: Brain, title: 'AI Risk Scoring', desc: 'Advanced XGBoost models predict dropout probability with over 92% accuracy across diverse cohorts.' },
              { icon: Shield, title: 'Early Intervention', desc: 'Get automated alerts when a student shows signs of critical behavioral shifts or burnout.' },
              { icon: Zap, title: 'Actionable Insights', desc: 'AI-generated intervention plans tailored to each student\'s specific risk factors and behavioral history.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, backgroundColor: 'white' }}
                className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-purple-500/30 transition-all group shadow-sm"
              >
                <div className="w-16 h-16 bg-purple-500/10 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-purple-600" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 lg:px-24 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight text-slate-900">
              Data-Driven Decisions <br />
              <span className="text-purple-600">Better Outcomes.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-12">
              Advisors using EduPulse have reported a 35% increase in successful interventions and a significant reduction in late-semester student crises.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-5xl font-black text-slate-900 mb-2">92%</p>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Prediction Accuracy</p>
              </div>
              <div>
                <p className="text-5xl font-black text-slate-900 mb-2">35%</p>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Retention Increase</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-slate-100 flex items-center justify-center overflow-hidden">
               <motion.div 
                 animate={{ 
                   scale: [1, 1.1, 1],
                   rotate: [0, 5, 0]
                 }}
                 transition={{ duration: 10, repeat: Infinity }}
                 className="w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-10"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-xl max-w-xs">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                      <p className="text-xs font-bold text-red-600 uppercase tracking-widest">Critical Alert</p>
                    </div>
                    <p className="text-lg font-bold mb-2 text-slate-900">Student ID: STU-2849</p>
                    <p className="text-sm text-slate-600">Risk score increased by 45% in the last 48 hours due to missed submissions.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-8 lg:px-24 text-center bg-slate-50">
        <div className="max-w-3xl mx-auto p-16 rounded-[4rem] bg-purple-600 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/30 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-4xl lg:text-5xl font-black mb-8 relative z-10">Ready to transform student success?</h2>
          <button 
            onClick={onStart}
            className="px-10 py-5 bg-white text-purple-900 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all relative z-10 shadow-xl"
          >
            Get Started Now
          </button>
        </div>
      </section>

      <footer className="py-12 px-8 lg:px-24 border-t border-slate-100 text-center text-slate-500 text-sm bg-white">
        <p>© 2026 EduPulse Risk Intelligence. All rights reserved.</p>
      </footer>
    </div>
  );
};
