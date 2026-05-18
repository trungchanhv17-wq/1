import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  ArrowLeft,
  Flame,
  Star,
  Target,
  Trophy,
  Zap,
  BookOpen,
  LayoutGrid,
  ChevronRight,
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { VOCABULARY_DATA, Level } from '@/constants/vocabularyData';
import { Flashcard } from './Flashcard';

const LEVEL_CONFIG = {
  A1: {
    title: "Beginner",
    subtitle: "Essential vocabulary for everyday communication.",
    gradient: "from-emerald-50 to-teal-50/50",
    border: "border-emerald-200",
    text: "text-emerald-700",
    bg: "bg-emerald-500",
    accent: "bg-emerald-600",
    glow: "shadow-emerald-200",
    badge: "bg-emerald-100",
    words: 233
  },
  A2: {
    title: "Elementary",
    subtitle: "Expanded vocabulary for familiar situations.",
    gradient: "from-blue-50 to-cyan-50/50",
    border: "border-blue-200",
    text: "text-blue-700",
    bg: "bg-blue-500",
    accent: "bg-blue-600",
    glow: "shadow-blue-200",
    badge: "bg-blue-100",
    words: 145
  },
  B1: {
    title: "Intermediate",
    subtitle: "Vocabulary for work, study and daily life.",
    gradient: "from-violet-50 to-indigo-50/50",
    border: "border-violet-200",
    text: "text-violet-700",
    bg: "bg-violet-500",
    accent: "bg-violet-600",
    glow: "shadow-violet-200",
    badge: "bg-violet-100",
    words: 74
  },
  B2: {
    title: "Vantage",
    subtitle: "Complex topics and natural interaction.",
    gradient: "from-rose-50 to-orange-50/50",
    border: "border-rose-200",
    text: "text-rose-700",
    bg: "bg-rose-500",
    accent: "bg-rose-600",
    glow: "shadow-rose-200",
    badge: "bg-rose-100",
    words: 42
  }
};

const StatPill = ({ icon: Icon, value, label, colorClass }: { icon: React.ElementType, value: string | number, label: string, colorClass: string }) => (
  <div className="bg-white/80 backdrop-blur-md border border-border px-4 py-2 rounded-2xl flex items-center gap-3 shadow-sm group hover:border-primary/30 transition-all">
    <div className={cn("p-2 rounded-xl group-hover:scale-110 transition-transform shadow-sm", colorClass)}>
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <div className="text-sm font-black leading-none">{value}</div>
      <div className="text-[10px] text-text-secondary font-bold tracking-tight mt-0.5 uppercase">{label}</div>
    </div>
  </div>
);

const PremiumLevelCard = ({ 
  level, 
  progress, 
  onClick 
}: { 
  level: Level, 
  progress: number, 
  onClick: () => void 
}) => {
  const config = LEVEL_CONFIG[level];
  const wordCount = VOCABULARY_DATA.filter(w => w.level === level).length;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.005 }}
      whileTap={{ scale: 0.995 }}
      onClick={onClick}
      className={cn(
        "group relative border-2 rounded-[2.5rem] p-8 cursor-pointer overflow-hidden transition-all shadow-xl",
        config.gradient, config.border, config.glow
      )}
    >
      {/* Decorative Large Background Label */}
      <div className={cn("absolute -top-6 -right-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none select-none", config.text)}>
        <span className="text-[16rem] font-black leading-none tracking-tighter">{level}</span>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative flex flex-col md:flex-row items-center gap-10">
        {/* Level Indicator Shell */}
        <div className="relative flex-shrink-0">
          <div className={cn("w-28 h-28 rounded-3xl flex items-center justify-center relative z-10 shadow-2xl group-hover:rotate-6 transition-transform border-4 border-white/50", config.bg)}>
            <span className="text-4xl font-black text-white italic tracking-tighter drop-shadow-md">{level}</span>
          </div>
          <div className={cn("absolute inset-0 blur-3xl opacity-30 rounded-3xl", config.bg)} />
        </div>

        {/* Content Body */}
        <div className="relative flex-grow space-y-5 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h3 className={cn("text-3xl font-black tracking-tighter drop-shadow-sm", config.text)}>{config.title}</h3>
            <div className={cn("px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[.2em] w-fit mx-auto md:mx-0 shadow-sm border border-white/50", config.badge, config.text)}>
              {wordCount} Words Available
            </div>
          </div>
          
          <p className={cn("text-sm font-medium leading-relaxed max-w-xl opacity-80", config.text)}>
            {config.subtitle}
          </p>

          {/* Progress Section */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-2">
                <div className={cn("w-2.5 h-2.5 rounded-full shadow-sm", config.bg)} />
                <span className={cn("text-[10px] font-black uppercase tracking-[.15em]", config.text)}>Course Progress</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className={cn("text-2xl font-black italic", config.text)}>{progress}%</span>
              </div>
            </div>
            
            <div className="h-4 w-full bg-white/40 rounded-full overflow-hidden p-1 border border-white/60 shadow-inner">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }} // Bouncy ease
                className={cn("h-full rounded-full relative overflow-hidden shadow-sm shadow-black/10", config.bg)}
              >
                {/* Progress Sparkle */}
                <div className="absolute inset-x-0 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" style={{ width: '200%' }} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          <div className={cn("w-16 h-16 rounded-[1.5rem] bg-white shadow-lg flex items-center justify-center group-hover:-translate-y-1 transition-all border border-black/5", config.text)}>
            <ChevronRight className="w-8 h-8 stroke-[3]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const VocabularyDashboard = () => {
  const [viewMode, setViewMode] = useState<'LEVELS' | 'THEMES' | 'STUDY'>('LEVELS');
  const [selectedLevel, setSelectedLevel] = useState<Level>('A1');
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [filteredWords, setFilteredWords] = useState(VOCABULARY_DATA);

  const getThemesForLevel = (level: Level) => {
    const wordsInLevel = VOCABULARY_DATA.filter(w => w.level === level);
    return Array.from(new Set(wordsInLevel.map(w => w.theme)));
  };

  const startStudy = (theme: string) => {
    const words = VOCABULARY_DATA.filter(word => word.level === selectedLevel && word.theme === theme);
    if (words.length > 0) {
      setSelectedTheme(theme);
      setFilteredWords(words);
      setViewMode('STUDY');
    }
  };

  if (viewMode === 'STUDY') {
    return (
      <div className="flex flex-col h-full bg-background">
        <div className="p-6 border-b border-border bg-white flex items-center justify-between sticky top-0 z-50">
          <button 
            onClick={() => setViewMode('THEMES')}
            className="flex items-center gap-3 text-text-primary font-bold hover:bg-background px-5 py-2.5 rounded-2xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Exit Session
          </button>
          <div className="flex flex-col items-center">
             <div className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-0.5">{selectedLevel} • {selectedTheme}</div>
             <div className="flex gap-1 h-1 w-24 bg-slate-100 rounded-full overflow-hidden">
                <div className="flex-1 bg-primary" />
                <div className="flex-1 bg-primary/20" />
                <div className="flex-1 bg-primary/20" />
             </div>
          </div>
          <div className="w-24" /> {/* Spacer */}
        </div>
        <div className="flex-grow p-4 md:p-10 flex overflow-y-auto">
          <Flashcard 
            words={filteredWords} 
            onFinish={() => setViewMode('THEMES')} 
          />
        </div>
      </div>
    );
  }

  if (viewMode === 'THEMES') {
    const themes = getThemesForLevel(selectedLevel);
    const config = LEVEL_CONFIG[selectedLevel];

    return (
      <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <button 
              onClick={() => setViewMode('LEVELS')}
              className="flex items-center gap-2 text-text-secondary font-bold hover:text-primary transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </button>
            <div className="flex items-center gap-4">
               <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black italic text-xl shadow-lg", config.bg)}>
                {selectedLevel}
               </div>
               <div>
                  <h1 className="text-4xl font-black tracking-tight text-text-primary">Curriculum</h1>
                  <p className="text-text-secondary text-sm">{config.title} level • Choose a topic to begin</p>
               </div>
            </div>
          </div>
          
          <div className="flex bg-white p-2 rounded-2xl border border-border shadow-sm">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                <input 
                  type="text" 
                  placeholder="Filter topics..."
                  className="pl-9 pr-4 py-2 text-sm bg-transparent border-none focus:ring-0 w-48"
                />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => {
            const wordCount = VOCABULARY_DATA.filter(w => w.level === selectedLevel && w.theme === theme).length;
            return (
              <motion.div
                key={theme}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => startStudy(theme)}
                className="group relative bg-white p-8 rounded-[2.5rem] border border-border hover:border-primary/30 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    📚
                  </div>
                  <div className="bg-slate-100 text-text-secondary text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {wordCount} words
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors leading-tight">{theme}</h3>
                <p className="text-text-secondary text-sm mb-8 leading-relaxed opacity-80">Master common phrases and context-specific terminology.</p>
                
                <div className="flex items-center gap-2 text-primary font-bold text-sm bg-primary/5 px-4 py-2 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-all">
                  Study Now <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-12">
      {/* Premium Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4 border-b border-border/50">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em]">
            <LayoutGrid className="w-4 h-4" /> Mastery Path
          </div>
          <h1 className="text-5xl font-black text-text-primary tracking-tighter">Vocabulary</h1>
          <p className="text-text-secondary font-medium max-w-xl">
            Choose your current proficiency level. Each level introduces core nouns, verbs, and phrases essential for fluency.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <StatPill icon={Flame} value="14" label="Day Streak" colorClass="bg-orange-100 text-orange-600" />
          <StatPill icon={Zap} value="2,450" label="Total XP" colorClass="bg-yellow-100 text-yellow-600" />
          <StatPill icon={Target} value="B1" label="Next Goal" colorClass="bg-primary/10 text-primary" />
        </div>
      </div>

      {/* Levels Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             <Trophy className="text-yellow-500 w-5 h-5" />
             <h2 className="text-xl font-black tracking-tight">Select Proficiency Level</h2>
          </div>
          <div className="text-xs text-text-secondary font-bold uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
            4 Levels Available
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <PremiumLevelCard 
            level="A1"
            progress={65}
            onClick={() => {
              setSelectedLevel('A1');
              setViewMode('THEMES');
            }}
          />
          <PremiumLevelCard 
            level="A2"
            progress={32}
            onClick={() => {
              setSelectedLevel('A2');
              setViewMode('THEMES');
            }}
          />
          <PremiumLevelCard 
            level="B1"
            progress={12}
            onClick={() => {
              setSelectedLevel('B1');
              setViewMode('THEMES');
            }}
          />
          <PremiumLevelCard 
            level="B2"
            progress={0}
            onClick={() => {
              setSelectedLevel('B2');
              setViewMode('THEMES');
            }}
          />
        </div>
      </div>

      {/* Recommendation / Motivation */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 text-white relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 blur-3xl bg-primary -rotate-12 translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em]">
              <Star className="w-4 h-4 fill-current" /> Premium Achievement
            </div>
            <h3 className="text-4xl font-black tracking-tight leading-tight">Master every word with Einstein AI.</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Unlock deep vocabulary analysis, contextual usage examples, and infinite AI-generated practice cards.
            </p>
            <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl group-hover:scale-105">
              Explore Premium
            </button>
          </div>
          <div className="flex-shrink-0 relative">
             <div className="w-48 h-48 bg-primary/20 rounded-[3rem] border border-white/10 backdrop-blur-xl flex items-center justify-center relative z-10 group-hover:rotate-6 transition-transform">
                <BookOpen className="w-20 h-20 text-primary" />
             </div>
             <div className="absolute inset-0 bg-primary blur-[80px] opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

