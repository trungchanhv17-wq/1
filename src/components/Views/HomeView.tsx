import React from 'react';
import { motion } from 'motion/react';
import { Zap, Brain, Trophy, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { cn } from '@/lib/utils';

export function HomeView() {
  return (
    <div className="space-y-12">
      <SectionHeader 
        title="Willkommen zurück, Max!" 
        subtitle="You're on a 14-day streak. Keep it up!"
        icon={Zap}
      />

      {/* Hero Banner */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-[#030c29] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
          <div className="relative z-10 h-full flex flex-col justify-between max-w-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Current Objective</span>
              <h1 className="text-4xl font-bold mb-4 leading-tight">Mastering Implicit <br />Subordinate Clauses.</h1>
              <p className="text-white/60 text-sm leading-relaxed mb-10">
                You've completed 65% of the Advanced B1 modules. Focus on word order rules for "dass" and "weil" clauses today.
              </p>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 w-fit transition-all shadow-xl shadow-primary/20">
              Continue Lesson <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
          <Brain className="absolute right-10 bottom-10 w-64 h-64 text-white/5 opacity-40 group-hover:scale-110 transition-transform duration-700" />
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 border border-border shadow-premium flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-warning" /> Leaderboard
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center font-bold text-xs">
                    {i}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-200" />
                  <div className="flex-1">
                    <p className="font-bold text-xs">User_{i}42</p>
                    <p className="text-[10px] text-text-secondary">4,230 XP</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[10px] uppercase font-bold text-text-secondary mb-1">XP Goal</p>
                <p className="font-bold text-lg">1,240 / 2,000</p>
              </div>
              <span className="text-primary font-bold text-xs">62%</span>
            </div>
            <div className="w-full bg-background h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: '62%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <SectionHeader title="Recommended Focus" subtitle="Based on your recent mistakes" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ModuleCard icon="📝" title="Cases & Gender" tag="Grammar" progress={80} />
          <ModuleCard icon="🍔" title="At the Market" tag="Vocabulary" progress={45} />
          <ModuleCard icon="🚌" title="Transportation" tag="Vocabulary" progress={12} />
          <ModuleCard icon="🎯" title="Prepositions" tag="Grammar" progress={95} />
        </div>
      </section>
    </div>
  );
}

const ModuleCard = ({ icon, title, tag, progress }: { icon: string, title: string, tag: string, progress: number }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all cursor-pointer group"
  >
    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-1 rounded-md mb-3 inline-block">
      {tag}
    </span>
    <h4 className="font-bold text-lg mb-6 group-hover:text-primary transition-colors">{title}</h4>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase">
        <span>Completion</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
        <div className={cn("h-full", progress > 90 ? "bg-success" : "bg-primary")} style={{ width: `${progress}%` }} />
      </div>
    </div>
  </motion.div>
);
