import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
  ArrowLeft,
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
import { ArticleQuiz } from './ArticleQuiz';

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

      <div className="relative flex flex-col md:flex-row items-center gap-6">
        {/* Level Indicator Shell */}
        <div className="relative flex-shrink-0">
          <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center relative z-10 shadow-xl group-hover:rotate-6 transition-transform border-4 border-white/50", config.bg)}>
            <span className="text-3xl font-black text-white italic tracking-tighter drop-shadow-md">{level}</span>
          </div>
          <div className={cn("absolute inset-0 blur-3xl opacity-30 rounded-2xl", config.bg)} />
        </div>

        {/* Content Body */}
        <div className="relative flex-grow space-y-3 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <h3 className={cn("text-2xl font-black tracking-tighter drop-shadow-sm", config.text)}>{config.title}</h3>
            <div className={cn("px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[.2em] w-fit mx-auto md:mx-0 shadow-sm border border-white/50", config.badge, config.text)}>
              {wordCount} Words
            </div>
          </div>
          
          <p className={cn("text-xs font-medium leading-relaxed max-w-xl opacity-80", config.text)}>
            {config.subtitle}
          </p>

          {/* Progress Section */}
          <div className="space-y-2 pt-1">
            <div className="flex justify-between items-end">
              <div className="flex items-center gap-2">
                <div className={cn("w-2 h-2 rounded-full shadow-sm", config.bg)} />
                <span className={cn("text-[9px] font-black uppercase tracking-[.15em]", config.text)}>Progress</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className={cn("text-xl font-black italic", config.text)}>{progress}%</span>
              </div>
            </div>
            
            <div className="h-3 w-full bg-white/40 rounded-full overflow-hidden p-0.5 border border-white/60 shadow-inner">
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
          <div className={cn("w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:-translate-y-1 transition-all border border-black/5", config.text)}>
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const VocabularyDashboard = () => {
  const [viewMode, setViewMode] = useState<'LEVELS' | 'THEMES' | 'STUDY' | 'ARTICLE_QUIZ'>('LEVELS');
  const [selectedLevel, setSelectedLevel] = useState<Level>('A1');
  const [selectedTheme, setSelectedTheme] = useState<string>('');
  const [quizTopic, setQuizTopic] = useState<string | 'ALL'>('ALL');
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

  const startQuiz = (topic: string | 'ALL') => {
    setQuizTopic(topic);
    setViewMode('ARTICLE_QUIZ');
  };

  if (viewMode === 'ARTICLE_QUIZ') {
    return (
      <div className="flex flex-col h-full bg-[#F5F7FB] relative overflow-hidden">
        {/* Ambient Blur Backgrounds */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="p-6 border-b border-border/50 bg-white/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-50">
          <button 
            onClick={() => setViewMode(quizTopic === 'ALL' ? 'LEVELS' : 'STUDY')}
            className="flex items-center gap-3 text-text-primary font-bold hover:bg-background px-5 py-2.5 rounded-2xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Exit Drill
          </button>
          <div className="flex flex-col items-center">
             <div className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em] mb-0.5">Grammar Drill</div>
             <div className="text-sm font-black text-slate-900">Articles Training</div>
          </div>
          <div className="w-24" />
        </div>
        <div className="flex-grow p-4 md:p-10 flex overflow-y-auto">
          <ArticleQuiz initialTopic={quizTopic} onExit={() => setViewMode(quizTopic === 'ALL' ? 'LEVELS' : 'STUDY')} />
        </div>
      </div>
    );
  }

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
            onStartQuiz={() => startQuiz(selectedTheme)}
          />
        </div>
      </div>
    );
  }

  if (viewMode === 'THEMES') {
    const themes = getThemesForLevel(selectedLevel);
    const config = LEVEL_CONFIG[selectedLevel];

    return (
      <div className="min-h-full bg-[#F4F7FC] -m-6 md:-m-10 p-6 md:p-14 space-y-12 animate-in fade-in duration-500">
        {/* Top Header Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-6">
            <button 
              onClick={() => setViewMode('LEVELS')}
              className="flex items-center gap-2 text-slate-500 font-bold hover:text-primary transition-all text-xs uppercase tracking-widest group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
            </button>
            <div className="flex items-center gap-6">
               <div className="relative shrink-0">
                  <div className={cn("w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-3xl shadow-2xl relative overflow-hidden ring-8 ring-white shadow-primary/20", config.bg)}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent" />
                    <span className="relative z-10 italic tracking-tighter">{selectedLevel}</span>
                  </div>
                  {/* Glowing Effect */}
                  <div className={cn("absolute inset-0 blur-2xl opacity-40 animate-pulse rounded-full", config.bg)} />
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
               <div>
                  <h1 className="text-5xl font-black tracking-tighter text-slate-900 leading-none mb-1">Curriculum</h1>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{config.title} level • {themes.length} Topics</p>
               </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
             <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Filter topics..."
                  className="pl-12 pr-6 py-4 text-sm bg-white border-transparent focus:border-primary/20 focus:ring-0 w-64 rounded-full shadow-sm placeholder:text-slate-400 font-medium transition-all"
                />
             </div>
             
             <div className="flex items-center gap-3">
             </div>
          </div>
        </div>

        {/* Topics List */}
        <div className="space-y-4 max-w-4xl">
          {themes.map((theme) => {
            const wordCount = VOCABULARY_DATA.filter(w => w.level === selectedLevel && w.theme === theme).length;
            return (
              <motion.div
                key={theme}
                whileHover={{ x: 6, y: -2, scale: 1.001 }}
                whileTap={{ scale: 0.999 }}
                onClick={() => startStudy(theme)}
                className="group relative bg-white p-4 md:p-5 rounded-3xl border border-white shadow-[0_4px_15px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_35px_-10px_rgba(37,99,255,0.08)] hover:border-primary/20 transition-all cursor-pointer overflow-hidden flex flex-col md:flex-row items-center gap-5"
              >
                {/* Visual Accent */}
                <div className={cn("absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity", config.bg)} />

                {/* Ambient Soft Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[60px] -mr-24 -mt-24 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Text Content */}
                <div className="relative flex-grow space-y-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <h3 className="text-xl font-black text-slate-800 tracking-tight group-hover:text-primary transition-colors leading-none">
                      {theme}
                    </h3>
                    <div className="bg-slate-50 text-slate-400 text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-[0.12em] border border-slate-100">
                      {wordCount} {wordCount === 1 ? 'Word' : 'Words'}
                    </div>
                  </div>
                  <p className="text-slate-400 text-[11px] font-medium leading-relaxed max-w-xl opacity-70">
                    Master current proficiency with interactive drills.
                  </p>
                </div>

                {/* Right Side Controls */}
                <div className="relative flex flex-col md:flex-row items-center gap-6 shrink-0">
                  {/* Progress Mini Widget */}
                  <div className="flex flex-col items-center md:items-end gap-1.5 min-w-[100px]">
                    <div className="flex items-center gap-1.5 text-slate-400">
                        <Target className="w-3 h-3" />
                        <span className="text-[8px] font-black uppercase tracking-[0.12em]">0% Completed</span>
                    </div>
                    <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden p-0 border border-slate-200/10">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "8%" }}
                          className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                        />
                    </div>
                  </div>

                  {/* Circular Action Button */}
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all transform group-hover:rotate-[360deg] duration-700 shadow-sm">
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
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
        </div>
      </div>

      {/* Grammar Drills */}
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

      {/* Grammar Drills */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             <Zap className="text-primary w-5 h-5 fill-current" />
             <h2 className="text-xl font-black tracking-tight">Grammar Drills</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <motion.div 
             whileHover={{ y: -6 }}
             onClick={() => startQuiz('ALL')}
             className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 cursor-pointer group hover:border-primary/20 transition-all shadow-xl overflow-hidden relative"
           >
              <div className="absolute -right-6 -bottom-6 text-slate-50 font-black text-9xl pointer-events-none group-hover:text-primary/5 transition-colors">
                DER
              </div>
              <div className="relative z-10 flex items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Target className="w-8 h-8" />
                 </div>
                 <div className="space-y-1">
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-primary transition-colors">Der Die Das Practice</h3>
                    <p className="text-slate-500 font-medium text-sm">Phần luyện tập mạo từ tiếng Đức (Gợi ý dựa trên luật ngữ pháp).</p>
                 </div>
              </div>
           </motion.div>
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

