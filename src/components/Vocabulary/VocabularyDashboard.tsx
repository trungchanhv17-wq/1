import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { VOCABULARY_DATA, Level } from '@/constants/vocabularyData';
import { Flashcard } from './Flashcard';

const LevelCard = ({ 
  level, 
  title, 
  description, 
  progress, 
  wordCount, 
  active, 
  onClick 
}: { 
  level: string, 
  title: string, 
  description: string, 
  progress: number, 
  wordCount: number, 
  active: boolean, 
  onClick: () => void 
}) => (
  <motion.div
    whileHover={{ y: -4 }}
    onClick={onClick}
    className={cn(
      "p-6 rounded-2xl border transition-all cursor-pointer",
      active 
        ? "bg-primary text-white border-primary shadow-lg" 
        : "bg-white border-border hover:border-primary/30"
    )}
  >
    <div className="flex justify-between items-start mb-4">
      <div className={cn(
        "px-3 py-1 rounded-lg font-bold text-sm",
        active ? "bg-white/20" : "bg-primary/10 text-primary"
      )}>
        {level}
      </div>
      <div className="text-xs opacity-60 font-bold">{wordCount} words</div>
    </div>
    <h3 className="font-bold text-lg mb-1">{title}</h3>
    <p className={cn("text-xs mb-6", active ? "text-white/80" : "text-text-secondary")}>
      {description}
    </p>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className={cn("w-full h-1.5 rounded-full overflow-hidden", active ? "bg-white/20" : "bg-background")}>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className={cn("h-full rounded-full", active ? "bg-white" : "bg-primary")}
        />
      </div>
    </div>
  </motion.div>
);

export const VocabularyDashboard = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level | 'ALL'>('ALL');
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [filteredWords, setFilteredWords] = useState(VOCABULARY_DATA);

  const startStudy = (level?: Level) => {
    const activeLevel = level || selectedLevel;
    const words = VOCABULARY_DATA.filter(word => {
      return activeLevel === 'ALL' || word.level === activeLevel;
    });
    
    if (words.length > 0) {
      setFilteredWords(words);
      setIsStudyMode(true);
    }
  };

  if (isStudyMode) {
    return (
      <div className="flex flex-col h-full bg-background animate-in fade-in duration-300">
        <div className="p-4 border-b border-border bg-white flex items-center justify-between sticky top-0 z-50">
          <button 
            onClick={() => setIsStudyMode(false)}
            className="flex items-center gap-2 text-primary font-bold hover:bg-primary/5 px-4 py-2 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to List
          </button>
          <div className="text-sm font-bold text-text-secondary">
            Learning {selectedLevel === 'ALL' ? 'All' : selectedLevel} Vocabulary
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <Flashcard words={filteredWords} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Vocabulary Explorer</h1>
          <p className="text-text-secondary">Master German words through European level standards.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => startStudy()}
            className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Study Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Levels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <LevelCard 
          level="A1"
          title="Breakthrough"
          description="Basic greetings, survival phrases and core nouns for everyday life."
          progress={65}
          wordCount={840}
          active={selectedLevel === 'A1'}
          onClick={() => setSelectedLevel('A1')}
        />
        <LevelCard 
          level="A2"
          title="Waystage"
          description="Exchange simple information on familiar tasks and personal background."
          progress={32}
          wordCount={1250}
          active={selectedLevel === 'A2'}
          onClick={() => setSelectedLevel('A2')}
        />
        <LevelCard 
          level="B1"
          title="Threshold"
          description="Handle most situations in German-speaking areas and express experiences."
          progress={12}
          wordCount={1820}
          active={selectedLevel === 'B1'}
          onClick={() => setSelectedLevel('B1')}
        />
        <LevelCard 
          level="B2"
          title="Vantage"
          description="Understand complex topics and interact with a degree of spontaneity."
          progress={0}
          wordCount={2400}
          active={selectedLevel === 'B2'}
          onClick={() => setSelectedLevel('B2')}
        />
      </div>

      {/* Themes/Topics Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Recommended Topics</h2>
          <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline">
            View All Themes <ChevronRight className="w-4 h-4" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-border flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🍳
              </div>
              <div>
                <h4 className="font-bold">Gastronomy</h4>
                <p className="text-xs text-text-secondary">Restaurant, recipes, and dining out.</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-border group-hover:text-primary transition-colors" />
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-border flex items-center justify-between group cursor-pointer hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                👔
              </div>
              <div>
                <h4 className="font-bold">Business German</h4>
                <p className="text-xs text-text-secondary">Meetings, resumes, and career.</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-border group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};
