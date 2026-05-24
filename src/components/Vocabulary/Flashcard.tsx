import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shuffle, 
  CheckCircle2, 
  XCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { VocabularyWord } from '@/constants/vocabularyData';

interface FlashcardProps {
  words: VocabularyWord[];
  onFinish?: () => void;
  onStartQuiz?: () => void;
}

export const Flashcard: React.FC<FlashcardProps> = ({ words, onFinish, onStartQuiz }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownWords, setKnownWords] = useState<string[]>([]);
  const [direction, setDirection] = useState(0);

  // Reset index when words change (even if key should handle it)
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [words]);

  const currentWord = words[currentIndex];

  const handleNext = useCallback(() => {
    if (currentIndex < words.length - 1) {
      setDirection(1);
      setIsFlipped(false);
      setCurrentIndex(prev => prev + 1);
    } else if (onFinish) {
      onFinish();
    }
  }, [currentIndex, words.length, onFinish]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setIsFlipped(false);
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  const toggleKnown = (id: string) => {
    setKnownWords(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        handlePrev();
      } else if (e.code === 'KeyZ') {
        toggleKnown(currentWord.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentWord?.id, handleNext, handlePrev]);

  if (!currentWord) {
    return (
      <div className="flex flex-col items-center justify-center p-20 text-center">
        <p className="text-text-secondary mb-4">No words to display.</p>
        <button 
          onClick={onFinish}
          className="bg-primary text-white px-6 py-2 rounded-xl font-bold"
        >
          Go Back
        </button>
      </div>
    );
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto py-4 min-h-[500px]">
      {/* The Card */}
      <div className="relative w-full aspect-[3/4] perspective-1000 mb-6 min-h-[360px]">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={currentWord.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 cursor-pointer preserve-3d w-full h-full"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", damping: 20, stiffness: 100 }}
              className="w-full h-full relative preserve-3d"
            >
              {/* Front Side */}
              <div className="absolute inset-0 backface-hidden p-6 flex flex-col items-center justify-between bg-white shadow-xl rounded-[2rem] border-2 border-slate-950">
                <div className="flex flex-col items-center text-center w-full flex-grow justify-center py-2">
                  {currentWord.article && (
                    <div className="flex gap-1.5 mb-3">
                      <span 
                        className="text-[9px] font-black text-white px-2.5 py-0.5 rounded-full tracking-wider uppercase"
                        style={{
                          backgroundColor: 
                            currentWord.article.toUpperCase() === 'DER' ? '#2563eb' :
                            currentWord.article.toUpperCase() === 'DIE' ? '#f43f5e' :
                            '#2ecc71'
                        }}
                      >
                        {currentWord.article}
                      </span>
                      <span className="text-[9px] font-black text-slate-905 bg-slate-100 border-2 border-slate-950 px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                        {currentWord.level}
                      </span>
                    </div>
                  )}
                  
                  {currentWord.imageUrl && (
                    <div className="w-full max-w-[180px] h-24 rounded-xl overflow-hidden mb-3 border border-border shadow-inner bg-slate-50 relative">
                      <img 
                        src={currentWord.imageUrl} 
                        alt={currentWord.word}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <h2 className="text-3xl font-black text-slate-950 mb-1 leading-tight">
                    {currentWord.word}
                  </h2>
                  <p className="text-slate-500 font-mono text-sm italic opacity-60">
                    {currentWord.phonetic}
                  </p>
                </div>

                <div className="w-full space-y-3 text-center">
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full" />
                  <p className="text-slate-600 italic text-sm px-2 leading-relaxed">
                    &quot;{currentWord.example}&quot;
                  </p>
                  <p className="text-slate-950 text-[10px] font-black flex items-center justify-center gap-1.5 mt-2 uppercase tracking-[0.15em]">
                    <span>✦</span> Nhấn để xem nghĩa <span>✦</span>
                  </p>
                </div>
              </div>

              {/* Back Side */}
              <div 
                className="absolute inset-0 backface-hidden p-6 flex flex-col items-center justify-center bg-slate-950 text-white shadow-xl rounded-[2rem] border-2 border-slate-900 rotate-y-180"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-[9px] font-black bg-white/10 border border-white/20 px-2.5 py-1 rounded-full mb-4 uppercase tracking-widest">
                  Nghĩa Tiếng Việt
                </span>
                <h2 className="text-3xl font-black mb-2 text-center italic tracking-tight">
                  {currentWord.meaning}
                </h2>
                {currentWord.plural && (
                  <p className="text-sm opacity-80 text-center font-bold">
                    Số nhiều: <span className="font-extrabold underline decoration-white/30">{currentWord.plural}</span>
                  </p>
                )}
                <p className="mt-8 text-[9px] font-black opacity-40 uppercase tracking-widest">Nhấn để quay lại</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-1.5 mb-8 overflow-x-auto max-w-full px-4 scrollbar-hide py-2">
        {words.map((_, i) => (
          <div 
            key={i}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === currentIndex ? "w-8 bg-slate-950" : "w-2 bg-slate-200 hover:bg-slate-400"
            )}
          />
        ))}
      </div>

      {/* Main Controls */}
      <div className="flex items-center gap-6 mb-10 w-full justify-center">
        <div className="flex flex-col items-center gap-2">
          <button 
            onClick={() => handleNext()}
            className="w-16 h-16 rounded-full border-2 border-red-200 bg-white flex items-center justify-center text-red-500 hover:bg-red-50 hover:border-red-400 transition-all group shadow-md"
          >
            <XCircle className="w-8 h-8 group-active:scale-90 transition-transform" />
          </button>
          <span className="text-[10px] uppercase font-bold text-red-500">Chưa biết</span>
        </div>

        <button className="w-14 h-14 bg-slate-50 text-slate-800 border-2 border-slate-200 rounded-2xl flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all shadow-md">
          <Shuffle className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center gap-2">
          <button 
            onClick={() => { toggleKnown(currentWord.id); handleNext(); }}
            className={cn(
              "w-20 h-20 rounded-full border-2 bg-white flex items-center justify-center transition-all group shadow-md",
              knownWords.includes(currentWord.id) 
                ? "bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-200" 
                : "border-emerald-200 text-emerald-500 hover:bg-emerald-50 hover:border-emerald-400"
            )}
          >
            <CheckCircle2 className="w-10 h-10 group-active:scale-90 transition-transform" />
          </button>
          <span className="text-[10px] uppercase font-bold text-emerald-500">Đã biết</span>
        </div>
      </div>

      <button 
        onClick={onStartQuiz}
        className="w-full py-4 bg-slate-950 text-white font-black uppercase tracking-wider text-xs rounded-2xl border-2 border-slate-950 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 mb-8 shadow-lg shadow-slate-900/10"
      >
        🎯 Luyện giống danh từ (der/die/das)
      </button>

      {/* Keyboard Shortcuts Help */}
      <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl px-5 py-3.5 flex flex-wrap gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-wider justify-center w-full">
        <div className="flex items-center gap-1.5"><span className="bg-white px-2 py-1 rounded-lg border-2 border-slate-200 shadow-sm text-slate-800 font-black">Space</span> lật</div>
        <div className="flex items-center gap-1.5"><span className="bg-white px-2 py-1 rounded-lg border-2 border-slate-200 shadow-sm text-slate-800 font-black">← →</span> chuyển</div>
        <div className="flex items-center gap-1.5"><span className="bg-white px-2 py-1 rounded-lg border-2 border-slate-200 shadow-sm text-slate-800 font-black">Z</span> đã biết</div>
        <div className="flex items-center gap-1.5"><span className="bg-white px-2 py-1 rounded-lg border-2 border-slate-200 shadow-sm text-slate-800 font-black">X</span> chưa biết</div>
      </div>
    </div>
  );
};
