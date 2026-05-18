import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Volume2, 
  Bookmark, 
  Shuffle, 
  CheckCircle2, 
  XCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { VocabularyWord } from '@/constants/vocabularyData';

interface FlashcardProps {
  words: VocabularyWord[];
  onFinish?: () => void;
}

export const Flashcard: React.FC<FlashcardProps> = ({ words, onFinish }) => {
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
    <div className="flex flex-col items-center w-full max-w-md mx-auto py-8 min-h-[600px]">
      {/* The Card */}
      <div className="relative w-full aspect-[3/4] perspective-1000 mb-8 min-h-[450px]">
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
              <div className="absolute inset-0 backface-hidden p-8 flex flex-col items-center justify-between bg-white shadow-xl rounded-[2.5rem] border border-border">
                <div className="w-full flex justify-between items-center">
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 transition-colors",
                    knownWords.includes(currentWord.id) 
                      ? "bg-green-100 text-green-600" 
                      : "bg-gray-100 text-gray-400"
                  )}>
                    <CheckCircle2 className="w-3 h-3" /> {knownWords.includes(currentWord.id) ? "Đã biết" : "Chưa thuộc"}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-background rounded-full transition-colors text-text-secondary">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-background rounded-full transition-colors text-primary bg-primary/5">
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center w-full">
                  {currentWord.article && (
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
                      {currentWord.article} • {currentWord.level}
                    </span>
                  )}
                  
                  {currentWord.imageUrl && (
                    <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-border shadow-inner bg-slate-50 relative">
                      <img 
                        src={currentWord.imageUrl} 
                        alt={currentWord.word}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <h2 className="text-4xl font-black text-text-primary mb-2">
                    {currentWord.word}
                  </h2>
                  <p className="text-text-secondary font-mono text-lg italic opacity-60">
                    {currentWord.phonetic}
                  </p>
                </div>

                <div className="w-full space-y-4 text-center">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full" />
                  <p className="text-text-secondary italic text-base px-4">
                    &quot;{currentWord.example}&quot;
                  </p>
                  <p className="text-primary text-xs font-bold flex items-center justify-center gap-1 mt-4">
                    <span>✦</span> Nhấn để xem nghĩa <span>✦</span>
                  </p>
                </div>
              </div>

              {/* Back Side */}
              <div 
                className="absolute inset-0 backface-hidden p-8 flex flex-col items-center justify-center bg-primary text-white shadow-xl rounded-[2.5rem] rotate-y-180"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
                  Nghĩa Tiếng Việt
                </span>
                <h2 className="text-4xl font-bold mb-4 text-center">
                  {currentWord.meaning}
                </h2>
                {currentWord.plural && (
                  <p className="text-lg opacity-80 text-center">
                    Số nhiều: <span className="font-bold underline decoration-white/30">{currentWord.plural}</span>
                  </p>
                )}
                <p className="mt-12 text-sm opacity-60 italic">Nhấn để quay lại</p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Nav Arrows */}
        <button 
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className={cn(
            "absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center z-20 border border-border hover:bg-background transition-all",
            currentIndex === 0 && "opacity-30 cursor-not-allowed"
          )}
        >
          <ChevronLeft className="text-text-secondary" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className={cn(
            "absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center z-20 border border-border hover:bg-background transition-all",
            currentIndex === words.length - 1 && "opacity-30 cursor-not-allowed"
          )}
        >
          <ChevronRight className="text-text-secondary" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-1.5 mb-8 overflow-x-auto max-w-full px-4 scrollbar-hide py-2">
        {words.map((_, i) => (
          <div 
            key={i}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/30"
            )}
          />
        ))}
      </div>

      {/* Main Controls */}
      <div className="flex items-center gap-6 mb-10 w-full justify-center">
        <div className="flex flex-col items-center gap-2">
          <button 
            onClick={() => handleNext()}
            className="w-16 h-16 rounded-full border-2 border-red-100 flex items-center justify-center text-red-400 hover:bg-red-50 hover:border-red-400 transition-all group"
          >
            <XCircle className="w-8 h-8 group-active:scale-90 transition-transform" />
          </button>
          <span className="text-[10px] uppercase font-bold text-red-400">Chưa biết</span>
        </div>

        <button className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center hover:bg-primary/10 transition-all">
          <Shuffle className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center gap-2">
          <button 
            onClick={() => { toggleKnown(currentWord.id); handleNext(); }}
            className={cn(
              "w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all group",
              knownWords.includes(currentWord.id) 
                ? "bg-green-500 border-green-500 text-white shadow-lg shadow-green-200" 
                : "border-green-100 text-green-400 hover:bg-green-50 hover:border-green-400"
            )}
          >
            <CheckCircle2 className="w-10 h-10 group-active:scale-90 transition-transform" />
          </button>
          <span className="text-[10px] uppercase font-bold text-green-500">Đã biết</span>
        </div>
      </div>

      <button className="w-full py-4 bg-primary/5 text-primary font-bold rounded-2xl border border-primary/20 hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 mb-8">
        🏷️ Luyện giống danh từ (der/die/das)
      </button>

      {/* Keyboard Shortcuts Help */}
      <div className="bg-white border border-border rounded-xl px-4 py-2 flex gap-4 text-[10px] text-text-secondary font-medium">
        <div className="flex items-center gap-1"><span className="bg-background px-1.5 py-0.5 rounded border border-border">Space</span> lật</div>
        <div className="flex items-center gap-1"><span className="bg-background px-1.5 py-0.5 rounded border border-border">← →</span> chuyển</div>
        <div className="flex items-center gap-1"><span className="bg-background px-1.5 py-0.5 rounded border border-border">Z</span> đã biết</div>
        <div className="flex items-center gap-1"><span className="bg-background px-1.5 py-0.5 rounded border border-border">X</span> chưa biết</div>
      </div>
    </div>
  );
};
