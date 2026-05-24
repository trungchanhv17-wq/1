import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft,
  Star,
  Target,
  Trophy,
  Zap,
  BookOpen,
  LayoutGrid,
  ChevronRight,
  Search,
  List,
  Play,
  Volume2,
  CheckCircle,
  AlertCircle,
  Timer
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { VOCABULARY_DATA, Level } from '@/constants/vocabularyData';
import { Flashcard } from './Flashcard';
import { ArticleQuiz } from './ArticleQuiz';
import { LessonTranslator } from '../Lessons/LessonTranslator';
import { playSoundEffect } from '../../utils/soundEffects';
import { useLanguage } from '../../context/LanguageContext';

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
  const { nativeLanguage } = useLanguage();
  const [viewMode, setViewMode] = useState<'LEVELS' | 'CURRICULUM' | 'ARTICLE_QUIZ' | 'AIC_LESSON'>('LEVELS');
  const [selectedLevel, setSelectedLevel] = useState<Level>('A1');
  const [activeTheme, setActiveTheme] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'LEARN' | 'QUIZ' | 'GENDER' | 'MATCH' | 'FILL_BLANK' | 'LISTEN'>('LEARN');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSubView, setMobileSubView] = useState<'THEMES' | 'WORDS'>('THEMES');

  // Fill in the Blank States
  const [fillBlankIndex, setFillBlankIndex] = useState(0);
  const [fillBlankInput, setFillBlankInput] = useState('');
  const [fillBlankChecked, setFillBlankChecked] = useState(false);
  const [fillBlankIsCorrect, setFillBlankIsCorrect] = useState(false);
  const [fillBlankScore, setFillBlankScore] = useState(0);

  // Listening practice states
  const [listenIndex, setListenIndex] = useState(0);
  const [listenInput, setListenInput] = useState('');
  const [listenChecked, setListenChecked] = useState(false);
  const [listenIsCorrect, setListenIsCorrect] = useState(false);
  const [listenScore, setListenScore] = useState(0);

  // Multiple Choice Quiz states
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [quizChecked, setQuizChecked] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizTimerDuration, setQuizTimerDuration] = useState(10); // Adjustable default 10s
  const [quizTimeLeft, setQuizTimeLeft] = useState(10);

  // Gender Game States
  const [genderIndex, setGenderIndex] = useState(0);
  const [genderChecked, setGenderChecked] = useState(false);
  const [genderSelectedOption, setGenderSelectedOption] = useState<string | null>(null);
  const [genderScore, setGenderScore] = useState(0);

  const themes = Array.from(new Set(VOCABULARY_DATA.filter(w => w.level === selectedLevel).map(w => w.theme)));

  const filteredWords = useMemo(() => {
    return VOCABULARY_DATA.filter(word => 
      word.level === selectedLevel && 
      (activeTheme ? word.theme === activeTheme : true) &&
      (searchQuery ? (
        word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (word.german || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (word.meaning_vi || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (word.meaning_en || '').toLowerCase().includes(searchQuery.toLowerCase())
      ) : true)
    );
  }, [selectedLevel, activeTheme, searchQuery]);

  const genderWords = useMemo(() => {
    return VOCABULARY_DATA.filter(word => 
      word.level === selectedLevel && 
      word.article &&
      (activeTheme ? word.theme === activeTheme : true) &&
      (searchQuery ? (
        word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (word.german || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (word.meaning_vi || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (word.meaning_en || '').toLowerCase().includes(searchQuery.toLowerCase())
      ) : true)
    );
  }, [selectedLevel, activeTheme, searchQuery]);

  // Reset quiz states upon category change
  useEffect(() => {
    setFillBlankIndex(0);
    setFillBlankInput('');
    setFillBlankChecked(false);
    setFillBlankIsCorrect(false);
    setFillBlankScore(0);

    setListenIndex(0);
    setListenInput('');
    setListenChecked(false);
    setListenIsCorrect(false);
    setListenScore(0);

    setQuizIndex(0);
    setQuizSelectedOption(null);
    setQuizChecked(false);
    setQuizScore(0);

    setGenderIndex(0);
    setGenderChecked(false);
    setGenderSelectedOption(null);
    setGenderScore(0);
  }, [selectedLevel, activeTheme]);

  // Generate dynamic options for Multiple Choice Quiz
  useEffect(() => {
    if (filteredWords.length === 0) return;
    const currentQuestion = filteredWords[quizIndex % filteredWords.length];
    if (!currentQuestion) return;

    const correctAnswer = nativeLanguage === 'vi' ? (currentQuestion.meaning_vi || currentQuestion.meaning) : (currentQuestion.meaning_en || currentQuestion.meaning);
    const allMeanings = Array.from(new Set(VOCABULARY_DATA.map(w => nativeLanguage === 'vi' ? (w.meaning_vi || w.meaning) : (w.meaning_en || w.meaning))))
      .filter(m => m !== correctAnswer);
    
    // Pick 3 random distractors
    const shuffledWrong = [...allMeanings].sort(() => 0.5 - Math.random());
    const selectedWrong = shuffledWrong.slice(0, 3);

    // Mix and store
    const combined = [correctAnswer, ...selectedWrong].sort(() => 0.5 - Math.random());
    setQuizOptions(combined);
    setQuizSelectedOption(null);
    setQuizChecked(false);
  }, [quizIndex, selectedLevel, activeTheme, filteredWords, nativeLanguage]);

  const playAudio = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'de-DE';
    window.speechSynthesis.speak(utterance);
  };

  const GERMAN_SPECIALs = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];

  const checkFillBlankAnswer = () => {
    if (filteredWords.length === 0) return;
    const currentWord = filteredWords[fillBlankIndex % filteredWords.length];
    if (!currentWord) return;

    if (fillBlankChecked) {
      setFillBlankChecked(false);
      setFillBlankInput('');
      const nextIndex = fillBlankIndex + 1;
      if (nextIndex >= filteredWords.length) {
        setFillBlankIndex(0);
      } else {
        setFillBlankIndex(nextIndex);
      }
      return;
    }

    const cleanUser = fillBlankInput.trim().toLowerCase();
    const cleanCorrect = currentWord.word.trim().toLowerCase();
    let isCorrect = (cleanUser === cleanCorrect);

    if (!isCorrect && currentWord.article) {
      const withArticle = `${currentWord.article.toLowerCase()} ${cleanCorrect}`;
      if (cleanUser === withArticle) {
        isCorrect = true;
      }
    }

    if (!isCorrect && currentWord.plural) {
      if (cleanUser === currentWord.plural.trim().toLowerCase()) {
        isCorrect = true;
      }
    }

    setFillBlankIsCorrect(isCorrect);
    if (isCorrect) {
      setFillBlankScore(prev => prev + 1);
    }
    setFillBlankChecked(true);
    playSoundEffect(isCorrect ? 'correct' : 'wrong');
    playAudio(currentWord.word);
  };

  const checkListenAnswer = () => {
    if (filteredWords.length === 0) return;
    const currentWord = filteredWords[listenIndex % filteredWords.length];
    if (!currentWord) return;

    if (listenChecked) {
      setListenChecked(false);
      setListenInput('');
      const nextIndex = listenIndex + 1;
      if (nextIndex >= filteredWords.length) {
        setListenIndex(0);
      } else {
        setListenIndex(nextIndex);
      }
      return;
    }

    const cleanUser = listenInput.trim().toLowerCase();
    const cleanCorrect = currentWord.word.trim().toLowerCase();
    let isCorrect = (cleanUser === cleanCorrect);

    if (!isCorrect && currentWord.article) {
      const withArticle = `${currentWord.article.toLowerCase()} ${cleanCorrect}`;
      if (cleanUser === withArticle) {
        isCorrect = true;
      }
    }

    setListenIsCorrect(isCorrect);
    if (isCorrect) {
      setListenScore(prev => prev + 1);
    }
    setListenChecked(true);
    playSoundEffect(isCorrect ? 'correct' : 'wrong');
    playAudio(currentWord.word);
  };

  const handleQuizTimeout = () => {
    if (filteredWords.length === 0 || quizChecked) return;
    const currentWord = filteredWords[quizIndex % filteredWords.length];
    if (!currentWord) return;

    setQuizSelectedOption(-1); // -1 indicates timeout/unanswered
    setQuizChecked(true);
    playSoundEffect('wrong');
    playAudio(currentWord.word);
  };

  const checkQuizAnswer = (option: string) => {
    if (filteredWords.length === 0 || quizChecked) return;
    const currentWord = filteredWords[quizIndex % filteredWords.length];
    if (!currentWord) return;

    const correctMeaning = nativeLanguage === 'vi' ? (currentWord.meaning_vi || currentWord.meaning) : (currentWord.meaning_en || currentWord.meaning);
    const isCorrect = (option === correctMeaning);
    setQuizSelectedOption(quizOptions.indexOf(option));
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    }
    setQuizChecked(true);
    playSoundEffect(isCorrect ? 'correct' : 'wrong');
    playAudio(currentWord.word);
  };

  const advanceQuiz = () => {
    setQuizChecked(false);
    setQuizSelectedOption(null);
    setQuizTimeLeft(quizTimerDuration);
    const nextIndex = quizIndex + 1;
    if (nextIndex >= filteredWords.length) {
      setQuizIndex(0);
    } else {
      setQuizIndex(nextIndex);
    }
  };

  // Handle Quiz Timer Countdown
  useEffect(() => {
    if (activeTab !== 'QUIZ' || quizChecked || filteredWords.length === 0) {
      return;
    }

    setQuizTimeLeft(quizTimerDuration);

    const interval = setInterval(() => {
      setQuizTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleQuizTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizIndex, activeTab, quizTimerDuration, filteredWords.length, quizChecked]);

  const checkGenderAnswer = (optionValue: string) => {
    if (genderWords.length === 0 || genderChecked) return;
    const currentWord = genderWords[genderIndex % genderWords.length];
    if (!currentWord || !currentWord.article) return;

    const isCorrect = (optionValue.toLowerCase() === currentWord.article.toLowerCase());
    setGenderSelectedOption(optionValue);
    if (isCorrect) {
      setGenderScore(prev => prev + 1);
    }
    setGenderChecked(true);
    playSoundEffect(isCorrect ? 'correct' : 'wrong');
    playAudio(`${currentWord.article} ${currentWord.word}`);
  };

  const advanceGender = () => {
    setGenderChecked(false);
    setGenderSelectedOption(null);
    const nextIndex = genderIndex + 1;
    if (nextIndex >= genderWords.length) {
      setGenderIndex(0);
    } else {
      setGenderIndex(nextIndex);
    }
  };

  if (viewMode === 'AIC_LESSON') {
    return <LessonTranslator topic={activeTheme || selectedLevel} onClose={() => setViewMode('CURRICULUM')} />;
  }

  if (viewMode === 'ARTICLE_QUIZ') {
    return (
      <div className="flex flex-col h-full bg-[#F5F7FB] relative overflow-hidden">
        {/* Ambient Blur Backgrounds */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="p-6 border-b border-border/50 bg-white/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-50">
          <button 
            onClick={() => setViewMode('CURRICULUM')}
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
          <ArticleQuiz initialTopic="ALL" onExit={() => setViewMode('CURRICULUM')} />
        </div>
      </div>
    );
  }

  if (viewMode === 'CURRICULUM') {
    const config = LEVEL_CONFIG[selectedLevel];

    return (
      <div className="flex h-[calc(100vh-120px)] bg-slate-50 -m-6 md:-m-10 overflow-hidden border-t border-slate-200">
        {/* Sidebar */}
        <div className={cn(
          "w-full md:w-80 bg-white border-r border-slate-200 flex flex-col shrink-0",
          mobileSubView === 'THEMES' ? "flex" : "hidden md:flex"
        )}>
          <div className="p-6 pb-2">
            <button 
              onClick={() => setViewMode('LEVELS')}
              className="flex items-center gap-2 text-slate-400 font-bold hover:text-slate-900 transition-all text-[10px] uppercase tracking-widest group mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Dashboard
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg relative overflow-hidden", config.bg)}>
                <span className="relative z-10 italic">{selectedLevel}</span>
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tighter text-slate-900 leading-tight">Curriculum</h2>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{config.title} Proficiency</p>
              </div>
            </div>

            <div className="relative group mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search words..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="flex-grow overflow-y-auto px-4 pb-6 space-y-1">
            <button
              onClick={() => {
                setActiveTheme('');
                setMobileSubView('WORDS');
              }}
              className={cn(
                "w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-all text-sm font-bold border-2",
                activeTheme === '' 
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20" 
                  : "bg-white text-slate-500 border-slate-100 hover:bg-slate-50"
              )}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>All Topics</span>
            </button>

            <div className="h-4" />
            <p className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Chapters</p>
            
            {themes.map((theme, idx) => (
              <button
                key={theme}
                onClick={() => {
                  setActiveTheme(theme);
                  setMobileSubView('WORDS');
                }}
                className={cn(
                  "w-full px-4 py-3 rounded-xl flex items-center justify-between transition-all text-sm font-bold border-2 group",
                  activeTheme === theme 
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20" 
                    : "bg-white text-slate-500 border-slate-100 hover:bg-slate-50"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-6 h-6 rounded-lg flex items-center justify-center text-[10px]",
                    activeTheme === theme ? "bg-white/20" : "bg-slate-100 text-slate-400"
                  )}>
                    {idx + 1}
                  </div>
                  <span className="truncate max-w-[120px]">{theme}</span>
                </div>
                <ChevronRight className={cn("w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity", activeTheme === theme && "opacity-100")} />
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className={cn(
          "flex-grow overflow-hidden flex flex-col bg-slate-50/50",
          mobileSubView === 'WORDS' ? "flex" : "hidden md:flex"
        )}>
          {/* Header Section */}
          <div className="p-4 bg-white border-b-2 border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Mobile Back Button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setMobileSubView('THEMES')}
                  className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-all text-xs uppercase tracking-wider bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-xl"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Chapters
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner w-full md:w-auto overflow-x-auto justify-center">
                {[
                  { id: 'LEARN', icon: List, label: 'Học từ mới' },
                  { id: 'QUIZ', icon: Trophy, label: 'Trắc nghiệm' },
                  { id: 'GENDER', icon: Zap, label: 'Luyện der/die/das' },
                  { id: 'MATCH', icon: Play, label: 'Flashcard' },
                  { id: 'FILL_BLANK', icon: Target, label: 'Điền từ' },
                  { id: 'LISTEN', icon: Volume2, label: 'Luyện nghe' }
                ].map((tab) => {
                  const isSelected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as 'LEARN' | 'QUIZ' | 'GENDER' | 'MATCH' | 'FILL_BLANK' | 'LISTEN')}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap",
                        isSelected 
                          ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.01]" 
                          : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"
                      )}
                    >
                      <tab.icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-grow overflow-y-auto p-4 md:p-8">
            {activeTab === 'LEARN' && (
              <>
                {/* Desktop View */}
                <div style={{ color: '#130a68' }} className="hidden md:block bg-white rounded-[2rem] border-2 border-slate-200 shadow-xl shadow-slate-200/20 overflow-hidden mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b-2 border-slate-100">
                        <th className="text-left px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Word</th>
                        <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Gender</th>
                        <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Meaning</th>
                        <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Example</th>
                        <th className="text-right px-8 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredWords.map((word) => (
                        <tr key={word.id} className="group hover:bg-slate-50/80 transition-colors">
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-3">
                              <button 
                                onClick={() => playAudio(word.word)}
                                className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all scale-0 group-hover:scale-100"
                              >
                                <Play className="w-3.5 h-3.5 fill-current" />
                              </button>
                              <div>
                                <p className="text-sm font-black text-slate-900 tracking-tight">{word.word}</p>
                                {word.plural && <p className="text-[10.5px] text-slate-400 font-bold mt-0.5">Plural: {word.plural}</p>}
                                <p className="text-[10px] text-slate-400 font-mono">{word.phonetic}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            {word.article ? (
                              <span 
                                className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider text-white"
                                style={{
                                  backgroundColor: 
                                    word.article.toUpperCase() === 'DER' ? '#2563eb' :
                                    word.article.toUpperCase() === 'DIE' ? '#f43f5e' :
                                    '#2ecc71'
                                }}
                              >
                                {word.article}
                              </span>
                            ) : (
                              <span className="text-[9px] text-slate-300 font-bold">-</span>
                            )}
                          </td>
                          <td className="px-6 py-5">
                            <p className="text-sm font-bold text-slate-600">
                              {nativeLanguage === 'vi' ? (word.meaning_vi || word.meaning) : (word.meaning_en || word.meaning)}
                            </p>
                          </td>
                          <td className="px-6 py-5 max-w-xs">
                            <p className="text-xs text-slate-800 font-medium italic leading-relaxed">{word.example_de || word.example}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">
                              {nativeLanguage === 'vi' ? (word.example_vi || '') : (word.example_en || '')}
                            </p>
                          </td>
                          <td className="px-8 py-5 text-right">
                             <button className="text-[10px] font-black text-slate-300 hover:text-primary transition-colors uppercase tracking-widest">
                                Mark Study
                             </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="block md:hidden space-y-4 mb-8">
                  {filteredWords.map((word) => (
                    <div key={word.id} className="bg-white rounded-2xl border-2 border-slate-200 p-5 shadow-sm active:bg-slate-50 transition-colors flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => playAudio(word.word)}
                            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-900 shadow-sm"
                          >
                            <Play className="w-4 h-4 fill-current" />
                          </button>
                          <div>
                            <div className="flex flex-wrap items-baseline gap-x-2">
                              <span className="text-base font-black text-slate-950 tracking-tight">{word.word}</span>
                              {word.plural && <span className="text-xs font-semibold text-slate-400">({word.plural})</span>}
                            </div>
                            <p className="text-[10.5px] text-slate-400 font-mono leading-none mt-1">{word.phonetic}</p>
                          </div>
                        </div>
                        {word.article ? (
                          <span 
                            className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-sm text-white"
                            style={{
                              backgroundColor: 
                                word.article.toUpperCase() === 'DER' ? '#2563eb' :
                                word.article.toUpperCase() === 'DIE' ? '#f43f5e' :
                                '#2ecc71'
                            }}
                          >
                            {word.article}
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-300 font-bold">-</span>
                        )}
                      </div>

                      <div className="border-t border-slate-100 pt-3">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">Meaning</span>
                        <p className="text-sm font-bold text-slate-800">
                          {nativeLanguage === 'vi' ? (word.meaning_vi || word.meaning) : (word.meaning_en || word.meaning)}
                        </p>
                      </div>

                      {(word.example_de || word.example) && (
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-1">Example</span>
                          <p className="text-xs text-slate-800 font-semibold italic leading-relaxed">{word.example_de || word.example}</p>
                          <p className="text-[10.5px] text-slate-500 font-medium leading-relaxed mt-1">
                            {nativeLanguage === 'vi' ? (word.example_vi || '') : (word.example_en || '')}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'GENDER' && (
              <div className="w-full max-w-4xl mx-auto py-4">
                {genderWords.length === 0 ? (
                  <div className="bg-white rounded-[2rem] border border-slate-200 p-12 text-center shadow-sm">
                    <p className="text-slate-500 font-bold mb-4">Không tìm thấy danh từ vựng nào có chứa quán từ (der/die/das) trong chủ đề này.</p>
                  </div>
                ) : (() => {
                  const currentWord = genderWords[genderIndex % genderWords.length];
                  if (!currentWord) return null;
                  const totalQuestions = Math.min(20, genderWords.length);
                  const progressPercentage = Math.round((genderIndex / totalQuestions) * 100);

                  const GENDER_OPTIONS = [
                    { value: 'der', label: 'der', sub: 'Giống đực (Masculine)' },
                    { value: 'die', label: 'die', sub: 'Giống cái (Feminine)' },
                    { value: 'das', label: 'das', sub: 'Giống trung (Neuter)' }
                  ];

                  return (
                    <div className="bg-white rounded-[2rem] border-2 border-slate-200 shadow-xl shadow-slate-200/20 overflow-hidden text-[#130a68]">
                      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        {/* LEFT COLUMN: Question Display */}
                        <div className="p-8 md:p-12 flex flex-col justify-between bg-slate-50/50">
                          <div>
                            <div className="flex items-center gap-2 mb-6">
                              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-black bg-slate-900 text-white shadow-sm">
                                Câu hỏi {Math.min(genderIndex + 1, totalQuestions)} / {totalQuestions}
                              </span>
                              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 shadow-sm">
                                Đúng: {genderScore}
                              </span>
                            </div>
                            <div className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mb-1">
                              CHỌN QUÁN TỪ ĐÚNG (GERMAN GENDER)
                            </div>

                            <div className="my-6 bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[160px] relative">
                              <div className="flex items-center gap-1.5 justify-center mb-3">
                                {genderChecked ? (
                                  <span 
                                    className="px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider text-white animate-bounce shadow-md animate-duration-500"
                                    style={{
                                      backgroundColor: 
                                        currentWord.article.toUpperCase() === 'DER' ? '#2563eb' :
                                        currentWord.article.toUpperCase() === 'DIE' ? '#f43f5e' :
                                        '#10b981'
                                    }}
                                  >
                                    {currentWord.article}
                                  </span>
                                ) : (
                                  <span className="px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest border-2 border-dashed border-slate-300 text-slate-400 bg-slate-50">
                                    ? ? ?
                                  </span>
                                )}
                              </div>
                              <span className="text-3xl md:text-4xl font-black text-slate-900 text-center tracking-tight">
                                {currentWord.word}
                              </span>
                              {currentWord.plural && (
                                <span className="text-xs text-slate-400 font-bold mt-1">
                                  (Plural: {currentWord.plural})
                                </span>
                              )}
                              
                              <button 
                                onClick={() => playAudio(genderChecked ? `${currentWord.article} ${currentWord.word}` : currentWord.word)}
                                className="mt-4 p-2.5 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-900 hover:text-white hover:scale-105 transition-all cursor-pointer"
                                title="Phát âm"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="text-xs text-slate-400 text-center italic mt-2">
                            {genderChecked ? (
                              <div className="text-slate-600 font-medium">
                                {nativeLanguage === 'vi' ? 'Nghĩa' : 'Meaning'}: <strong className="text-slate-900">{nativeLanguage === 'vi' ? (currentWord.meaning_vi || currentWord.meaning) : (currentWord.meaning_en || currentWord.meaning)}</strong>
                              </div>
                            ) : (
                              nativeLanguage === 'vi' 
                                ? "Mẹo: Nhìn đuôi từ vựng (-ung, -keit, -tion, -chen...) để xác định giống của danh từ."
                                : "Tip: Look at the suffixes (-ung, -keit, -tion, -chen...) to determine the noun gender."
                            )}
                          </div>
                        </div>

                        {/* RIGHT COLUMN: Options */}
                        <div className="p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                                <span>Tiến độ</span>
                                <span className="font-mono text-slate-800">{progressPercentage}%</span>
                              </div>
                              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-slate-900 transition-all duration-300" 
                                  style={{ width: `${progressPercentage}%` }} 
                                />
                              </div>
                            </div>
                            
                            <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 pt-2">
                              Chọn quán từ phù hợp
                            </label>

                            <div className="space-y-3">
                              {GENDER_OPTIONS.map((opt) => {
                                const isSelected = genderSelectedOption === opt.value;
                                const isCorrectAnswer = opt.value.toLowerCase() === currentWord.article?.toLowerCase();
                                return (
                                  <button
                                    key={opt.value}
                                    disabled={genderChecked}
                                    onClick={() => checkGenderAnswer(opt.value)}
                                    className={cn(
                                      "w-full text-left px-5 py-4 border-2 rounded-xl text-sm font-bold transition-all flex items-center justify-between cursor-pointer",
                                      genderChecked
                                        ? isCorrectAnswer
                                          ? "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm shadow-emerald-50"
                                          : isSelected
                                            ? "bg-rose-50 border-rose-500 text-rose-800"
                                            : "border-slate-100 bg-slate-50 opacity-60 text-slate-400"
                                        : "border-slate-200 hover:border-slate-900 bg-white hover:bg-slate-50/50"
                                    )}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span 
                                        className="text-base font-black uppercase inline-block px-2.5 py-1 rounded-lg text-white text-center w-12"
                                        style={{
                                          backgroundColor: 
                                            opt.value === 'der' ? '#2563eb' :
                                            opt.value === 'die' ? '#f43f5e' :
                                            '#2ecc71'
                                        }}
                                      >
                                        {opt.label}
                                      </span>
                                      <span className="text-xs text-slate-500 font-medium">{opt.sub}</span>
                                    </div>
                                    {genderChecked && isCorrectAnswer && (
                                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                                    )}
                                    {genderChecked && isSelected && !isCorrectAnswer && (
                                      <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div className="pt-2">
                            {genderChecked ? (
                              <button
                                onClick={advanceGender}
                                className="w-full py-4 bg-slate-900 text-white rounded-2xl text-sm font-black uppercase tracking-wider hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                              >
                                <span>Tiếp tục</span>
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            ) : (
                              <div className="h-14 flex items-center justify-center text-xs text-slate-400 italic">
                                Hãy chọn quán từ phía trên để kiểm tra kết quả!
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {activeTab === 'MATCH' && (
              <div className="w-full flex justify-center py-2 md:py-6">
                <Flashcard 
                  words={filteredWords} 
                  onFinish={() => setActiveTab('LEARN')}
                  onStartQuiz={() => setActiveTab('GENDER')}
                />
              </div>
            )}

            {activeTab === 'FILL_BLANK' && (
              <div className="w-full max-w-4xl mx-auto py-4">
                {filteredWords.length === 0 ? (
                  <div className="bg-white rounded-[2rem] border border-slate-200 p-12 text-center shadow-sm">
                    <p className="text-slate-500 font-bold mb-4">Không tìm thấy từ vựng nào trong chủ đề này.</p>
                  </div>
                ) : (() => {
                  const currentWord = filteredWords[fillBlankIndex % filteredWords.length];
                  if (!currentWord) return null;
                  const totalQuestions = Math.min(20, filteredWords.length);
                  const progressPercentage = Math.round((fillBlankIndex / totalQuestions) * 100);

                  return (
                    <div style={{ color: '#130a68' }} className="bg-white rounded-[2rem] border-2 border-slate-200 shadow-xl shadow-slate-200/20 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        {/* LEFT COLUMN: Question Display */}
                        <div className="p-8 md:p-12 flex flex-col justify-between bg-slate-50/50">
                          <div>
                            <div className="flex items-center gap-2 mb-6">
                              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-black bg-slate-900 text-white shadow-sm">
                                Câu hỏi {Math.min(fillBlankIndex + 1, totalQuestions)} / {totalQuestions}
                              </span>
                              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 shadow-sm">
                                Đúng: {fillBlankScore}
                              </span>
                            </div>
                            <div className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mb-1">
                              {nativeLanguage === 'vi' ? 'DỊCH TỪ NÀY SANG TIẾNG ĐỨC' : 'TRANSLATE THIS TO GERMAN'}
                            </div>
                            
                            {/* Inner Rounded Box for Vietnamese Word */}
                            <div className="my-6 bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[160px]">
                              <span className="text-3xl md:text-4xl font-black text-slate-900 text-center tracking-tight">
                                {nativeLanguage === 'vi' ? (currentWord.meaning_vi || currentWord.meaning) : (currentWord.meaning_en || currentWord.meaning)}
                              </span>
                              <span className="text-xs text-slate-400 font-bold mt-2 font-mono">
                                {currentWord.theme} • {currentWord.level}
                              </span>
                            </div>
                          </div>

                          <div className="text-xs text-slate-400 text-center italic mt-2">
                            {nativeLanguage === 'vi' 
                              ? "Mẹo: Tiếng Đức có phân biệt viết hoa danh từ (ví dụ: Eltern, Familie...)" 
                              : "Tip: German nouns must be capitalized (e.g., Eltern, Familie...)"}
                          </div>
                        </div>

                        {/* RIGHT COLUMN: Interaction & Progress */}
                        <div className="p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white">
                          {/* Progress bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                              <span>Tiến độ</span>
                              <span className="font-mono text-slate-800">{progressPercentage}%</span>
                            </div>
                            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-slate-900 transition-all duration-300" 
                                style={{ width: `${progressPercentage}%` }} 
                              />
                            </div>
                          </div>

                          {/* Answer Box */}
                          <div className="space-y-4">
                            <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                              Nhập đáp án
                            </label>
                            
                            <div className="relative">
                              <input
                                type="text"
                                value={fillBlankInput}
                                disabled={fillBlankChecked}
                                onChange={(e) => setFillBlankInput(e.target.value)}
                                placeholder="Nhập từ tiếng Đức..."
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' && fillBlankInput.trim()) {
                                    checkFillBlankAnswer();
                                  }
                                }}
                                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-base font-bold placeholder:text-slate-400 text-slate-900 focus:outline-none focus:border-slate-900 transition-all"
                              />

                              {fillBlankChecked && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                  {fillBlankIsCorrect ? (
                                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                                  ) : (
                                    <AlertCircle className="w-6 h-6 text-rose-500" />
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Special Characters Keyboard panel */}
                            {!fillBlankChecked && (
                              <div className="flex flex-wrap items-center gap-2 pt-1">
                                <span className="text-[10px] text-slate-400 font-bold mr-1">Gõ nhanh:</span>
                                {GERMAN_SPECIALs.map(char => (
                                  <button
                                    key={char}
                                    type="button"
                                    onClick={() => setFillBlankInput(prev => prev + char)}
                                    className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 font-bold rounded-lg text-xs hover:bg-slate-900 hover:text-white active:scale-95 transition-all cursor-pointer"
                                  >
                                    {char}
                                  </button>
                                ))}
                              </div>
                            )}

                            {/* Instant Check Feedback Banner */}
                            {fillBlankChecked && (
                              <motion.div 
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn(
                                  "p-4 rounded-xl border flex flex-col gap-1.5",
                                  fillBlankIsCorrect 
                                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                                    : "bg-rose-50 border-rose-200 text-rose-800"
                                )}
                              >
                                <div className="flex items-center gap-2 font-black text-sm">
                                  {fillBlankIsCorrect 
                                    ? (nativeLanguage === 'vi' ? "Tuyệt vời! Đáp án chính xác" : "Excellent! Correct answer") 
                                    : (nativeLanguage === 'vi' ? "Cố lên! Đáp án chưa chính xác" : "Keep trying! Incorrect answer")}
                                </div>
                                <div className="text-xs font-semibold">
                                  {nativeLanguage === 'vi' ? "Đáp án đúng" : "Correct answer"}: <span className="underline font-mono font-bold text-slate-900 text-sm">{currentWord.article ? `${currentWord.article} ` : ''}{currentWord.word}</span> {currentWord.plural ? `(Plural: ${currentWord.plural})` : ''}
                                  {currentWord.phonetic && <span className="text-slate-400 ml-1">[{currentWord.phonetic}]</span>}
                                </div>
                                {(currentWord.example_de || currentWord.example) && (
                                  <div className="text-[11px] opacity-90 italic mt-1 bg-white/50 p-2 rounded-lg">
                                    <strong className="text-slate-800 block">{nativeLanguage === 'vi' ? "Ví dụ:" : "Example:"} {currentWord.example_de || currentWord.example}</strong>
                                    <span className="text-slate-500 block mt-0.5 font-sans not-italic leading-relaxed">
                                      {nativeLanguage === 'vi' ? (currentWord.example_vi || '') : (currentWord.example_en || '')}
                                    </span>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </div>

                          {/* Trigger check button */}
                          <div className="pt-2">
                            <button
                              onClick={checkFillBlankAnswer}
                              disabled={!fillBlankInput.trim() && !fillBlankChecked}
                              className={cn(
                                "w-full py-4 rounded-2xl text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer",
                                !fillBlankInput.trim() && !fillBlankChecked
                                  ? "bg-slate-150 text-slate-400 border border-slate-200 cursor-not-allowed shadow-none"
                                  : "bg-slate-900 text-white hover:bg-slate-800"
                              )}
                            >
                              <span>{fillBlankChecked ? "Tiếp tục" : "Kiểm tra"}</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {activeTab === 'QUIZ' && (
              <div className="w-full max-w-4xl mx-auto py-4">
                {filteredWords.length === 0 ? (
                  <div className="bg-white rounded-[2rem] border border-slate-200 p-12 text-center shadow-sm">
                    <p className="text-slate-500 font-bold mb-4">Không tìm thấy từ vựng nào trong chủ đề này.</p>
                  </div>
                ) : (() => {
                  const currentWord = filteredWords[quizIndex % filteredWords.length];
                  if (!currentWord) return null;
                  const totalQuestions = Math.min(20, filteredWords.length);
                  const progressPercentage = Math.round((quizIndex / totalQuestions) * 100);

                  return (
                    <div style={{ color: '#130a68' }} className="bg-white rounded-[2rem] border-2 border-slate-200 shadow-xl shadow-slate-200/20 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        {/* LEFT COLUMN: Question Display */}
                        <div className="p-8 md:p-12 flex flex-col justify-between bg-slate-50/50">
                          <div>
                            <div className="flex items-center gap-2 mb-6">
                              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-black bg-slate-900 text-white shadow-sm">
                                Câu hỏi {Math.min(quizIndex + 1, totalQuestions)} / {totalQuestions}
                              </span>
                              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 shadow-sm">
                                Đúng: {quizScore}
                              </span>
                            </div>
                            <div className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mb-1">
                              CHỌN NGHĨA TIẾNG VIỆT ĐÚNG
                            </div>

                            {/* Target German Word display */}
                            <div className="my-6 bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[160px] relative">
                              {currentWord.article && (
                                <span 
                                  className="px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider mb-2 text-white"
                                  style={{
                                    backgroundColor: 
                                      currentWord.article.toUpperCase() === 'DER' ? '#2563eb' :
                                      currentWord.article.toUpperCase() === 'DIE' ? '#f43f5e' :
                                      '#2ecc71'
                                  }}
                                >
                                  {currentWord.article}
                                </span>
                              )}
                              <span className="text-3xl md:text-4xl font-black text-slate-900 text-center tracking-tight">
                                {currentWord.word}
                              </span>
                              {currentWord.plural && (
                                <span className="text-xs text-slate-400 font-bold mt-1">
                                  ({currentWord.plural})
                                </span>
                              )}
                              
                              <button 
                                onClick={() => playAudio(currentWord.word)}
                                className="mt-4 p-2.5 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-900 hover:text-white hover:scale-105 transition-all cursor-pointer"
                                title="Phát âm"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="text-xs text-slate-400 text-center italic mt-2">
                            Mẹo: Click biểu tượng loa để nghe phát âm chính xác của từ vựng này.
                          </div>
                        </div>

                        {/* RIGHT COLUMN: Options */}
                        <div className="p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white">
                          <div className="space-y-4">
                            {/* Progress bar */}
                            <div className="space-y-2">
                              <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                                <span>Tiến độ</span>
                                <span className="font-mono text-slate-800">{progressPercentage}%</span>
                              </div>
                              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-slate-900 transition-all duration-300" 
                                  style={{ width: `${progressPercentage}%` }} 
                                />
                              </div>
                            </div>

                            {/* Quiz Timer adjustment and display */}
                            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                                  <Timer className={cn("w-3.5 h-3.5", !quizChecked && quizTimeLeft <= 3 ? "text-rose-550 animate-[bounce_1s_infinite]" : "text-slate-400")} />
                                  Hẹn giờ trắc nghiệm
                                </span>
                                <div className="flex items-center gap-1">
                                  {quizChecked ? (
                                    <span className="text-xs text-slate-400 font-bold italic">Đã dừng</span>
                                  ) : (
                                    <span className={cn(
                                      "text-xs font-black tracking-tight shrink-0 px-2 py-0.5 rounded font-mono",
                                      quizTimeLeft <= 3 ? "bg-rose-100 text-rose-600 animate-pulse" : "bg-slate-200 text-slate-800"
                                    )}>
                                      {quizTimeLeft}s
                                    </span>
                                  )}
                                </div>
                              </div>

                              {(!quizChecked) && (
                                <div className="h-1.5 w-full bg-slate-200/60 rounded-full overflow-hidden">
                                  <div 
                                    className={cn(
                                      "h-full transition-all duration-1000 ease-linear",
                                      quizTimeLeft <= 3 ? "bg-rose-500" : quizTimeLeft <= 5 ? "bg-amber-500" : "bg-emerald-500"
                                    )}
                                    style={{ width: `${(quizTimeLeft / quizTimerDuration) * 100}%` }}
                                  />
                                </div>
                              )}

                              <div className="border-t border-slate-200/80 pt-2 flex items-center justify-between">
                                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">Thời gian chờ:</span>
                                <div className="flex items-center gap-1.5">
                                  <button
                                    onClick={() => {
                                      const newVal = Math.max(5, quizTimerDuration - 5);
                                      setQuizTimerDuration(newVal);
                                      if (!quizChecked) setQuizTimeLeft(newVal);
                                    }}
                                    className="w-6 h-6 bg-white hover:bg-slate-100 rounded flex items-center justify-center border border-slate-200 text-slate-600 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
                                    title="Giảm 5 giây"
                                  >
                                    -
                                  </button>
                                  <span className="text-xs font-black text-slate-800 min-w-[20px] text-center font-mono">
                                    {quizTimerDuration}s
                                  </span>
                                  <button
                                    onClick={() => {
                                      const newVal = Math.min(60, quizTimerDuration + 5);
                                      setQuizTimerDuration(newVal);
                                      if (!quizChecked) setQuizTimeLeft(newVal);
                                    }}
                                    className="w-6 h-6 bg-white hover:bg-slate-100 rounded flex items-center justify-center border border-slate-200 text-slate-600 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
                                    title="Tăng 5 giây"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                            
                            <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 pt-2">
                              Chọn nghĩa phù hợp nhất
                            </label>

                            <div className="grid grid-cols-1 gap-3">
                              {quizOptions.map((option, idx) => {
                                const isSelected = quizSelectedOption === idx;
                                const isCorrectOpt = option === currentWord.meaning;
                                
                                return (
                                  <button
                                    key={option}
                                    disabled={quizChecked}
                                    onClick={() => checkQuizAnswer(option)}
                                    className={cn(
                                      "w-full text-left p-4 rounded-xl border-2 text-sm font-bold transition-all relative cursor-pointer",
                                      !quizChecked
                                        ? "bg-slate-50 border-slate-150 hover:bg-slate-100 hover:border-slate-300 active:scale-[0.98]"
                                        : isSelected
                                          ? isCorrectOpt
                                            ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                                            : "bg-rose-50 border-rose-500 text-rose-800"
                                          : isCorrectOpt
                                            ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                                            : "bg-slate-50 border-slate-200 text-slate-400 opacity-60"
                                    )}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span>{option}</span>
                                      {quizChecked && isCorrectOpt && <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Next Button */}
                          <div className="pt-2">
                            {quizChecked && quizSelectedOption === -1 && (
                              <div className="p-3 mb-3 bg-rose-50 border border-rose-200 rounded-xl text-center text-xs font-black uppercase text-rose-600 animate-pulse">
                                ⏰ Hết thời gian trả lời rồi!
                              </div>
                            )}
                            <button
                              onClick={advanceQuiz}
                              disabled={!quizChecked}
                              className={cn(
                                "w-full py-4 rounded-2xl text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer",
                                !quizChecked
                                  ? "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed shadow-none"
                                  : "bg-slate-900 text-white hover:bg-slate-800"
                              )}
                            >
                              <span>Tiếp theo</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {activeTab === 'LISTEN' && (
              <div className="w-full max-w-4xl mx-auto py-4">
                {filteredWords.length === 0 ? (
                  <div className="bg-white rounded-[2rem] border border-slate-200 p-12 text-center shadow-sm">
                    <p className="text-slate-500 font-bold mb-4">Không tìm thấy từ vựng nào trong chủ đề này.</p>
                  </div>
                ) : (() => {
                  const currentWord = filteredWords[listenIndex % filteredWords.length];
                  if (!currentWord) return null;
                  const totalQuestions = Math.min(20, filteredWords.length);
                  const progressPercentage = Math.round((listenIndex / totalQuestions) * 100);

                  return (
                    <div style={{ color: '#130a68' }} className="bg-white rounded-[2rem] border-2 border-slate-200 shadow-xl shadow-slate-200/20 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        {/* LEFT COLUMN: Question Speaker */}
                        <div className="p-8 md:p-12 flex flex-col justify-between bg-slate-50/50">
                          <div>
                            <div className="flex items-center gap-2 mb-6">
                              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-black bg-slate-900 text-white shadow-sm">
                                Câu hỏi {Math.min(listenIndex + 1, totalQuestions)} / {totalQuestions}
                              </span>
                              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 shadow-sm">
                                Đúng: {listenScore}
                              </span>
                            </div>
                            <div className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mb-1">
                              NGHE VÀ THUẬT LẠI TIẾNG ĐỨC
                            </div>

                            <div className="my-6 bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center min-h-[160px]">
                              {/* Big Speaker Icon */}
                              <button
                                onClick={() => playAudio(currentWord.word)}
                                className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 active:scale-95 hover:scale-105 transition-all shadow-lg text-xl cursor-pointer"
                              >
                                <Volume2 className="w-8 h-8" />
                              </button>
                              <span className="text-xs text-slate-400 font-bold mt-4">
                                Click để phát âm thanh của từ vựng
                              </span>
                            </div>
                          </div>

                          <div className="text-xs text-slate-400 text-center italic mt-2">
                            Luyện nghe phát âm giúp cải thiện phản xạ giao tiếp quốc tế.
                          </div>
                        </div>

                        {/* RIGHT COLUMN: Dictation Form */}
                        <div className="p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white">
                          <div className="space-y-4">
                            {/* Progress bar */}
                            <div className="space-y-2">
                              <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                                <span>Tiến độ</span>
                                <span className="font-mono text-slate-800">{progressPercentage}%</span>
                              </div>
                              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-slate-900 transition-all duration-300" 
                                  style={{ width: `${progressPercentage}%` }} 
                                />
                              </div>
                            </div>
                            
                            <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 pt-2">
                              Nhập từ bạn nghe được
                            </label>

                            <div className="relative">
                              <input
                                type="text"
                                value={listenInput}
                                disabled={listenChecked}
                                onChange={(e) => setListenInput(e.target.value)}
                                placeholder="Gõ từ khóa tiếng Đức nghe được..."
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' && listenInput.trim()) {
                                    checkListenAnswer();
                                  }
                                }}
                                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl text-base font-bold placeholder:text-slate-400 text-slate-900 focus:outline-none focus:border-slate-900 transition-all"
                              />

                              {listenChecked && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                  {listenIsCorrect ? (
                                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                                  ) : (
                                    <AlertCircle className="w-6 h-6 text-rose-500" />
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Umlaute Picker */}
                            {!listenChecked && (
                              <div className="flex flex-wrap items-center gap-2 pt-1">
                                <span className="text-[10px] text-slate-400 font-bold mr-1">Gõ nhanh:</span>
                                {GERMAN_SPECIALs.map(char => (
                                  <button
                                    key={char}
                                    type="button"
                                    onClick={() => setListenInput(prev => prev + char)}
                                    className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 font-bold rounded-lg text-xs hover:bg-slate-900 hover:text-white active:scale-95 transition-all cursor-pointer"
                                  >
                                    {char}
                                  </button>
                                ))}
                              </div>
                            )}

                            {/* Feedback Block */}
                            {listenChecked && (
                              <motion.div 
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn(
                                  "p-4 rounded-xl border flex flex-col gap-1.5",
                                  listenIsCorrect 
                                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                                    : "bg-rose-50 border-rose-200 text-rose-800"
                                )}
                              >
                                <div className="flex items-center gap-2 font-black text-sm">
                                  {listenIsCorrect 
                                    ? (nativeLanguage === 'vi' ? "Rất tốt! Bạn đã nghe chính xác" : "Excellent! You heard correctly") 
                                    : (nativeLanguage === 'vi' ? "Cố lên! Hãy xem kết quả" : "Keep trying! See the results")}
                                </div>
                                <div className="text-xs font-semibold">
                                  {nativeLanguage === 'vi' ? "Đáp án đúng" : "Correct answer"}: <span className="underline font-mono font-bold text-slate-900 text-sm">{currentWord.article ? `${currentWord.article} ` : ''}{currentWord.word}</span>
                                </div>
                                <div className="text-xs italic bg-white/50 p-2 rounded-lg mt-1">
                                  {nativeLanguage === 'vi' ? 'Nghĩa' : 'Meaning'}: <strong className="text-slate-900">{nativeLanguage === 'vi' ? (currentWord.meaning_vi || currentWord.meaning) : (currentWord.meaning_en || currentWord.meaning)}</strong>
                                </div>
                              </motion.div>
                            )}
                          </div>

                          {/* Action Button */}
                          <div className="pt-2">
                            <button
                              onClick={checkListenAnswer}
                              disabled={!listenInput.trim() && !listenChecked}
                              className={cn(
                                "w-full py-4 rounded-2xl text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer",
                                !listenInput.trim() && !listenChecked
                                  ? "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed shadow-none"
                                  : "bg-slate-900 text-white hover:bg-slate-800"
                              )}
                            >
                              <span>{listenChecked ? "Tiếp tục" : "Kiểm tra"}</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-12">
      {/* Premium Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4 border-b-2 border-slate-200">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] bg-slate-50 w-fit px-3 py-1 rounded-lg border border-slate-200">
            <LayoutGrid className="w-3 h-3" /> Mastery Path
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Vocabulary</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] max-w-xl">
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
              setViewMode('CURRICULUM');
              setActiveTheme('');
              setActiveTab('LEARN');
              setMobileSubView('THEMES');
            }}
          />
          <PremiumLevelCard 
            level="A2"
            progress={32}
            onClick={() => {
              setSelectedLevel('A2');
              setViewMode('CURRICULUM');
              setActiveTheme('');
              setActiveTab('LEARN');
              setMobileSubView('THEMES');
            }}
          />
          <PremiumLevelCard 
            level="B1"
            progress={12}
            onClick={() => {
              setSelectedLevel('B1');
              setViewMode('CURRICULUM');
              setActiveTheme('');
              setActiveTab('LEARN');
              setMobileSubView('THEMES');
            }}
          />
          <PremiumLevelCard 
            level="B2"
            progress={0}
            onClick={() => {
              setSelectedLevel('B2');
              setViewMode('CURRICULUM');
              setActiveTheme('');
              setActiveTab('LEARN');
              setMobileSubView('THEMES');
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
             onClick={() => setViewMode('ARTICLE_QUIZ')}
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

