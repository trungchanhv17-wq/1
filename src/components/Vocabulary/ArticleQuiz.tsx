import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Volume2, 
  RotateCcw,
  Trophy,
  Zap,
  LayoutGrid
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { VOCABULARY_DATA, VocabularyWord } from '@/constants/vocabularyData';

type Article = 'DER' | 'DIE' | 'DAS';

interface QuizState {
  score: number;
  combo: number;
  maxCombo: number;
  correct: number;
  wrong: number;
  timeLeft: number;
  level: number;
  isAnswered: boolean;
  currentWordIndex: number;
}

const TIPS = {
  DER: 'Hint: Many masculine persons, seasons, months, and days → DER.',
  DIE: 'Hint: Words ending in -ung, -keit, -heit, -tion usually → DIE.',
  DAS: 'Hint: Diminutives (-chen, -lein) and many languages → DAS.'
};

const SHAKE_ANIMATION = {
  shake: {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4 }
  }
};

export const ArticleQuiz = ({ onExit, initialTopic }: { onExit: () => void; initialTopic?: string | 'ALL' }) => {
  const [gameState, setGameState] = useState<'IDLE' | 'SELECT_TOPIC' | 'PLAYING' | 'FINISHED'>(initialTopic ? 'PLAYING' : 'IDLE');
  const [selectedTopic, setSelectedTopic] = useState<string | 'ALL'>(initialTopic || 'ALL');
  const [quizWords, setQuizWords] = useState<VocabularyWord[]>([]);
  
  // Initialize quiz words if initialTopic is provided
  useEffect(() => {
    if (initialTopic) {
      const validWords = VOCABULARY_DATA.filter(w => w.article && (initialTopic === 'ALL' ? true : w.theme === initialTopic))
        .sort(() => Math.random() - 0.5);
      
      if (validWords.length > 0) {
        setQuizWords(validWords);
        // We call it directly here to avoid dependency issues with the memoized version
        // if we weren't memoizing it.
        const word = validWords[0];
        const maxTime = 10; 
        setState(prev => ({
          ...prev,
          currentWordIndex: 0,
          level: 1,
          score: 0,
          combo: 0,
          maxCombo: 0,
          correct: 0,
          wrong: 0,
          timeLeft: maxTime,
          isAnswered: false
        }));
        setFeedback(null);
        setPressureMsg(null);
        startTimer(maxTime);
        if (word) speakQuestion(word.word);
      } else {
        setGameState('SELECT_TOPIC');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTopic]);

  const [state, setState] = useState<QuizState>({
    score: 0,
    combo: 0,
    maxCombo: 0,
    correct: 0,
    wrong: 0,
    timeLeft: 10,
    level: 1,
    isAnswered: false,
    currentWordIndex: 0
  });
  
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [pressureMsg, setPressureMsg] = useState<string | null>(null);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startQuiz = (topic: string | 'ALL') => {
    let validWords = VOCABULARY_DATA.filter(w => w.article);
    if (topic !== 'ALL') {
      validWords = validWords.filter(w => w.theme === topic);
    }
    
    if (validWords.length === 0) {
      alert("No words available for this topic.");
      setGameState('SELECT_TOPIC');
      return;
    }

    validWords = validWords.sort(() => Math.random() - 0.5);
    setQuizWords(validWords);
    setSelectedTopic(topic);
    setGameState('PLAYING');
    
    resetQuestionState(0, 1, 0, 0, 0, 0, 0, validWords);
  };

  const resetQuestionState = (index: number, level: number, score: number, combo: number, maxCombo: number, correct: number, wrong: number, wordsOverride?: VocabularyWord[]) => {
    const currentWords = wordsOverride || quizWords;
    const word = currentWords[index];
    
    const maxTime = Math.max(5, 10 - Math.floor(level / 2));
    setState({
      currentWordIndex: index,
      level,
      score,
      combo,
      maxCombo,
      correct,
      wrong,
      timeLeft: maxTime,
      isAnswered: false
    });
    setFeedback(null);
    setPressureMsg(null);
    startTimer(maxTime);
    if (word) speakQuestion(word.word);
  };

  const validWordsForCurrentSession = quizWords;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setState(prev => {
        if (prev.timeLeft <= 1) {
          clearInterval(timerRef.current!);
          handleTimeUp();
          return { ...prev, timeLeft: 0 };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
  };

  const handleTimeUp = () => {
    const currentWord = validWordsForCurrentSession[state.currentWordIndex];
    if (!currentWord) return;

    setFeedback({
      isCorrect: false,
      message: `Time's up! The answer was ${currentWord.article} ${currentWord.word}`
    });
    setPressureMsg('⏰ Time Out!');
    setState(prev => ({ ...prev, combo: 0, wrong: prev.wrong + 1, isAnswered: true }));
    speakAnswer(currentWord);
    setTimeout(nextQuestion, 2000);
  };

  const nextQuestion = () => {
    const nextIndex = state.currentWordIndex + 1;
    if (nextIndex >= validWordsForCurrentSession.length) {
      setGameState('FINISHED');
      return;
    }
    
    const nextLevel = 1 + Math.floor(nextIndex / 5);
    resetQuestionState(nextIndex, nextLevel, state.score, state.combo, state.maxCombo, state.correct, state.wrong);
  };

  const handleAnswer = (article: Article) => {
    if (state.isAnswered) return;
    if (timerRef.current) clearInterval(timerRef.current);
    
    const currentWord = validWordsForCurrentSession[state.currentWordIndex];
    if (!currentWord) return;
    
    const isCorrect = article === currentWord.article;
    
    if (isCorrect) {
      const timeBonus = Math.ceil(state.timeLeft * 2);
      const comboBonus = state.combo * 5;
      const newScore = state.score + 10 + timeBonus + comboBonus;
      const newCombo = state.combo + 1;
      const newMaxCombo = Math.max(state.maxCombo, newCombo);
      
      setFeedback({ isCorrect: true, message: 'Correct! ✅' });
      if (newCombo >= 5) setPressureMsg(`🔥 ${newCombo}x Combo!`);
      
      setState(prev => ({ 
        ...prev, 
        score: newScore, 
        combo: newCombo, 
        maxCombo: newMaxCombo, 
        correct: prev.correct + 1,
        isAnswered: true 
      }));
    } else {
      setFeedback({ 
        isCorrect: false, 
        message: `Falsch! It's ${currentWord.article} ${currentWord.word}` 
      });
      setState(prev => ({ 
        ...prev, 
        combo: 0, 
        wrong: prev.wrong + 1, 
        isAnswered: true 
      }));
    }
    
    speakAnswer(currentWord);
    setTimeout(nextQuestion, isCorrect ? 1500 : 2500);
  };

  const speakText = (text: string, rate = 0.9) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    u.rate = rate;
    window.speechSynthesis.speak(u);
  };

  const speakQuestion = (word?: string) => {
    if (!word) return;
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const q = new SpeechSynthesisUtterance('Welcher Artikel ist richtig?');
    q.lang = 'de-DE';
    q.rate = 0.9;

    const w = new SpeechSynthesisUtterance(word);
    w.lang = 'de-DE';
    w.rate = 0.85;

    q.onend = () => {
      setTimeout(() => window.speechSynthesis.speak(w), 300);
    };
    window.speechSynthesis.speak(q);
  };

  const speakAnswer = (word: VocabularyWord) => {
    speakText(`${word.article} ${word.word}`, 0.85);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  if (gameState === 'IDLE') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-12 animate-in fade-in zoom-in duration-500">
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-1.5 mb-2">
            <span className="text-4xl md:text-5xl font-black text-blue-500 italic tracking-tighter">DER</span>
            <span className="text-4xl md:text-5xl font-black text-slate-200">·</span>
            <span className="text-4xl md:text-5xl font-black text-pink-500 italic tracking-tighter">DIE</span>
            <span className="text-4xl md:text-5xl font-black text-slate-200">·</span>
            <span className="text-4xl md:text-5xl font-black text-emerald-500 italic tracking-tighter">DAS</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">The Ultimate Article Challenge</h1>
            <p className="text-slate-400 font-medium max-w-sm mx-auto leading-relaxed">Master German articles with this fast-paced, premium drill.</p>
          </div>
        </div>
        
        <button 
          onClick={() => setGameState('SELECT_TOPIC')}
          className="group relative bg-slate-900 text-white px-12 py-5 rounded-[2.5rem] font-bold text-base uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl active:scale-95"
        >
          <div className="absolute inset-x-0 h-full w-full top-0 scale-x-0 group-hover:scale-x-100 origin-left bg-primary transition-transform duration-500 rounded-[2.5rem]" />
          <span className="relative z-10 flex items-center gap-3">
             <Zap className="w-4 h-4 fill-current" /> Start Training
          </span>
        </button>
      </div>
    );
  }

  if (gameState === 'SELECT_TOPIC') {
    const allThemes = Array.from(new Set(VOCABULARY_DATA.filter(w => w.article).map(w => w.theme)));
    
    return (
      <div className="max-w-4xl mx-auto w-full space-y-12 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Choose a Topic</h2>
          <p className="text-slate-400 font-medium">Select a category to focus your practice.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <button 
            onClick={() => startQuiz('ALL')}
            className="p-8 bg-slate-900 text-white rounded-[2.5rem] font-bold flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all shadow-xl aspect-square"
          >
            <div className="size-16 rounded-3xl bg-white/10 flex items-center justify-center border border-white/5">
              <LayoutGrid className="w-8 h-8" />
            </div>
            <span className="text-base tracking-[0.1em] uppercase">All Words</span>
          </button>
          
          {allThemes.map(theme => (
            <button 
              key={theme}
              onClick={() => startQuiz(theme)}
              className="p-8 bg-white border border-slate-100 rounded-[2.5rem] font-bold flex flex-col items-center justify-center gap-4 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:scale-105 transition-all group aspect-square"
            >
              <div className="size-16 rounded-3xl bg-slate-50 flex items-center justify-center group-hover:bg-primary/5 group-hover:text-primary transition-colors border border-slate-100/50">
                 <Target className="w-8 h-8" />
              </div>
              <span className="text-slate-600 text-sm tracking-tight">{theme}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (gameState === 'FINISHED') {
    const accuracy = Math.round((state.correct / (state.correct + state.wrong)) * 100) || 0;
    return (
      <div className="flex flex-col items-center justify-center max-w-lg mx-auto py-12 animate-in fade-in zoom-in-95 duration-500">
        <div className="bg-white rounded-[3.5rem] p-12 border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] w-full text-center space-y-10">
          <div className="size-28 bg-yellow-50 rounded-[2.5rem] flex items-center justify-center mx-auto text-yellow-500 border border-yellow-100">
            <Trophy className="w-14 h-14" />
          </div>
          <div className="space-y-3">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Session Complete!</h2>
            <p className="text-slate-500 font-medium">You've successfully finished this round.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-6 py-6 border-y border-slate-50">
             <div className="space-y-2">
                <div className="text-3xl font-black text-blue-600 tracking-tighter">{state.score}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Score</div>
             </div>
             <div className="space-y-2 border-x border-slate-50 px-2">
                <div className="text-3xl font-black text-emerald-600 tracking-tighter">{accuracy}%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Accuracy</div>
             </div>
             <div className="space-y-2">
                <div className="text-3xl font-black text-pink-600 tracking-tighter">{state.maxCombo}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Max Combo</div>
             </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => startQuiz(selectedTopic)}
              className="flex-1 bg-slate-900 text-white py-5 rounded-3xl font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
            <button 
              onClick={onExit}
              className="flex-1 bg-slate-50 text-slate-500 py-5 rounded-3xl font-bold uppercase tracking-widest text-xs hover:bg-slate-100 transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentWord = validWordsForCurrentSession[state.currentWordIndex];
  
  if (!currentWord && gameState === 'PLAYING') {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const maxTime = Math.max(5, 10 - Math.floor(state.level / 2));
  const timerPercentage = (state.timeLeft / maxTime) * 100;

  return (
    <div className="max-w-2xl mx-auto w-full space-y-12 py-6 animate-in slide-in-from-bottom-6 fade-in duration-1000">
      {/* Top HUD - Empty to maintain spacing if needed, or can be removed */}
      <div className="h-6" />

      {/* Progress Bar (Linear style) */}
      <div className="space-y-4">
        <div className="h-1.5 w-full bg-[#E8ECF4] rounded-full overflow-hidden">
           <motion.div 
             initial={{ width: '100%' }}
             animate={{ width: `${timerPercentage}%` }}
             transition={{ duration: 1, ease: "linear" }}
             className="h-full rounded-full bg-gradient-to-r from-[#5B6CFF] to-[#7C4DFF]"
           />
        </div>
      </div>

      {/* Main Focus Card */}
      <motion.div 
        layout
        variants={SHAKE_ANIMATION}
        animate={feedback && !feedback.isCorrect ? "shake" : ""}
        className={cn(
          "bg-white/95 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 border border-slate-200 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.1)] relative overflow-hidden text-center transition-all duration-500",
          state.isAnswered ? (feedback?.isCorrect ? "border-emerald-300 shadow-[0_20px_80px_-15px_rgba(16,185,129,0.15)]" : "border-red-300 shadow-[0_20px_80px_-15px_rgba(239,68,68,0.15)]") : "border-slate-200"
        )}
      >
        {/* Soft Background Glows */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[80px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] pointer-events-none rounded-full" />

        <div className="absolute top-8 right-8 z-20">
           <button 
             onClick={() => speakText(currentWord.word)}
             className="size-14 rounded-[1.2rem] bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:scale-110 active:scale-95 transition-all group shadow-sm"
           >
              <Volume2 className="w-6 h-6 stroke-[1.5] group-hover:text-primary transition-colors" />
           </button>
        </div>

        <div className="space-y-12 relative z-10">
           <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.4em]">IDENTIFY THE ARTICLE</div>
           <div className="space-y-2">
             <h2 className="text-6xl md:text-7xl font-black text-[#0F172A] tracking-[-0.05em] mb-4">
               {currentWord.word}
             </h2>
             <p className="text-2xl font-semibold text-[#6C63FF] opacity-90 transition-all">
               {currentWord.meaning}
             </p>
           </div>
           
           <div className="flex justify-center">
             <div className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-xs font-bold tracking-tight">
               {currentWord.level} • {currentWord.theme}
             </div>
           </div>
        </div>

        {/* Answer Feedback Overlay */}
        <AnimatePresence>
          {feedback && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn(
                "mt-12 p-6 rounded-[1.5rem] font-bold text-base leading-relaxed max-w-sm mx-auto",
                feedback.isCorrect ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
              )}
            >
              <div className="mb-1">{feedback.message}</div>
              {!feedback.isCorrect && (
                <div className="text-[11px] font-medium opacity-70 tracking-tight leading-normal mt-2">
                  {TIPS[currentWord.article as Article] || 'Keep practicing to master this pattern.'}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pressure Message Pop-up */}
        <AnimatePresence>
          {pressureMsg && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-50 pointer-events-none"
            >
              <span className="text-6xl font-black text-primary/20 italic tracking-tighter opacity-20">
                {pressureMsg}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Answer Buttons Layer */}
      <div className="grid grid-cols-3 gap-6 items-end">
         {(['DER', 'DIE', 'DAS'] as Article[]).map((art) => {
           const isCorrect = currentWord.article === art;
           
           return (
             <motion.button
               key={art}
               whileHover={{ y: -6 }}
               whileTap={{ scale: 0.96 }}
               disabled={state.isAnswered}
               onClick={() => handleAnswer(art)}
               className={cn(
                 "h-[92px] rounded-[1.75rem] text-3xl font-black italic tracking-tighter transition-all flex flex-col items-center justify-center shadow-[0_12px_24px_rgba(0,0,0,0.1)] border border-black/5",
                 art === 'DER' ? "bg-gradient-to-b from-[#5EA2FF] to-[#3B82F6] text-white" : 
                 art === 'DIE' ? "bg-gradient-to-b from-[#FF5BB7] to-[#FF2F92] text-white" : 
                 "bg-gradient-to-b from-[#20D7A5] to-[#00C48C] text-white",
                 "hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] disabled:opacity-40 disabled:grayscale-[0.3]",
                 state.isAnswered && !isCorrect && "opacity-15",
                 state.isAnswered && isCorrect && "ring-[6px] ring-white scale-110 z-10 shadow-2xl"
               )}
             >
               {art}
             </motion.button>
           );
         })}
      </div>
      
      {/* Bottom Footer Info */}
      <div className="flex items-center justify-between px-6 pt-4">
        <div className="flex items-center gap-2 group cursor-pointer">
           <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
              <Zap className="w-3.5 h-3.5 text-slate-400" />
           </div>
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Hint</span>
        </div>
        
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">
           {state.currentWordIndex + 1} OF {validWordsForCurrentSession.length} WORDS
        </div>

        <div className="size-8" />
      </div>
    </div>
  );
};
