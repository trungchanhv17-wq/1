import React from 'react';
import { motion } from 'motion/react';
import { Zap, ArrowRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { cn } from '@/lib/utils';

export function GamesView() {
  return (
    <div className="space-y-12">
       <SectionHeader 
        title="Arcade & Training" 
        subtitle="Hone your reflexes and intuition through play." 
        icon={Zap}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GameCard 
          title="Der Die Das Rush" 
          description="Identify noun genders against the clock. How fast can your brain categorize articles?"
          color="bg-primary"
          icon="🏃"
          stats="Next Reward: 50 XP"
        />
        <GameCard 
          title="Audio Match" 
          description="Connect native pronunciation with visual representations. Perfect for A1-A2 learners."
          color="bg-accent"
          icon="🎧"
          stats="Daily Streak: 3x"
        />
        <GameCard 
          title="Sentence Stack" 
          description="Build complex sentences using dynamic blocks. Master German word order logic."
          color="bg-slate-900"
          icon="🏗️"
          stats="Record: 42s"
        />
        <GameCard 
          title="Verb Conjugator" 
          description="Speed-round conjugation for irregular verbs. Master the 'Strong' verb patterns."
          color="bg-orange-500"
          icon="⚡"
          stats="Unlocked: B1"
        />
      </div>
    </div>
  );
}

const GameCard = ({ title, description, color, icon, stats }: { title: string, description: string, color: string, icon: string, stats: string }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white border border-border p-1 rounded-[2.5rem] shadow-premium group cursor-pointer"
  >
    <div className={cn("rounded-[2.2rem] p-10 h-full flex flex-col justify-between transition-all overflow-hidden relative", color)}>
      <div className="relative z-10 text-white">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-8 backdrop-blur-md">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{stats}</span>
        <button className="bg-white text-slate-900 px-6 py-2.5 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2 group-hover:bg-primary group-hover:text-white transition-all">
          Play Now <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Decorative bg icon */}
      <div className="absolute right-[-20%] bottom-[-10%] text-[200px] opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700 select-none">
        {icon}
      </div>
    </div>
  </motion.div>
);
