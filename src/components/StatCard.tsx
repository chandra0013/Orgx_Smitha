import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils'; // Assuming we'll add this or just use clsx

export const StatCard: React.FC<{
  title: string;
  value: string | number;
  subtitle: string;
  isPrimary?: boolean;
  delay?: number;
}> = ({ title, value, subtitle, isPrimary, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={cn(
        "card-white p-6 flex flex-col justify-between relative overflow-hidden group h-full",
        isPrimary ? "bg-brand-primary text-white border-none" : "bg-white text-text-main"
      )}
    >
      <div className="flex justify-between items-start">
        <p className={cn("text-sm font-medium", isPrimary ? "text-purple-100" : "text-text-muted")}>
          {title}
        </p>
        <div className={cn(
          "p-2 rounded-full border transition-transform group-hover:rotate-45",
          isPrimary ? "border-purple-700 bg-purple-800" : "border-slate-200 bg-white"
        )}>
          <ArrowUpRight size={16} />
        </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-4xl font-bold tracking-tight">{value}</h3>
        <div className="flex items-center gap-2 mt-2">
          {isPrimary && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-800/50 text-[10px] font-bold">
              <ArrowUpRight size={10} />
              5%
            </div>
          )}
          <p className={cn("text-xs", isPrimary ? "text-purple-200" : "text-purple-600 font-semibold")}>
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
