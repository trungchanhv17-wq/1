import React, { useState } from 'react';
import { MessageSquare, Target, Zap, Sparkles, Brain, ArrowRight, RefreshCcw, Layout } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { cn } from '../../lib/utils';

interface TranslationAnalysis {
  isCorrect: boolean;
  feedback: string;
  grammarScore: number;
  precisionScore: number;
  naturalnessScore: number;
  improvements: string[];
  explanation: string;
  correctedSentence: string;
}

type SourceLanguage = 'vietnamese' | 'english';

const VIETNAMESE_SENTENCES = [
  { vi: "Tôi muốn học tiếng Đức mỗi ngày.", de: "Ich möchte jeden Tag Deutsch lernen." },
  { vi: "Bạn có thể giúp tôi không?", de: "Kannst du mir helfen?" },
  { vi: "Tôi sống ở Cần Thơ, Việt Nam.", de: "Ich lebe in Can Tho, Vietnam." },
  { vi: "Hôm nay thời tiết rất đẹp.", de: "Das Wetter ist heute sehr schön." },
  { vi: "Tôi thích ăn phở và bánh mì.", de: "Ich mag Pho und Banh Mi essen." }
];

const ENGLISH_SENTENCES = [
  { vi: "I want to learn German every day.", de: "Ich möchte jeden Tag Deutsch lernen." },
  { vi: "Can you help me?", de: "Kannst du mir helfen?" },
  { vi: "I live in Vietnam.", de: "Ich lebe in Vietnam." },
  { vi: "The weather is very nice today.", de: "Das Wetter ist heute sehr schön." },
  { vi: "I like German food.", de: "Ich mag deutsches Essen." }
];

export function TranslationView({ onUpdateXP }: { onUpdateXP?: (xp: number) => void }) {
  const [userLanguage] = useState<SourceLanguage>('vietnamese');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<TranslationAnalysis | null>(null);
  
  const currentSentences = userLanguage === 'vietnamese' ? VIETNAMESE_SENTENCES : ENGLISH_SENTENCES;
  const currentChallenge = currentSentences[currentQuestion].vi;

  const handleAnalyze = async () => {
    if (!answer.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/analyze-translation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: currentChallenge,
          translation: answer,
          level: 'B1 Intermediate',
          context: 'General'
        })
      });
      
      const data = await response.json();
      setAnalysis(data);
      
      // Basic scoring based on AI result or similarity can be added here
      if (data.isCorrect || data.grammarScore > 80) {
        setScore(prev => prev + 10);
        onUpdateXP?.(10);
      } else if (data.grammarScore > 50) {
        setScore(prev => prev + 5);
        onUpdateXP?.(5);
      }
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderHighlightedDiff = () => {
    if (!analysis || !answer) return null;
    
    const userWords = answer.trim().split(/\s+/);
    const correctedWords = analysis.correctedSentence.trim().split(/\s+/);
    
    return (
      <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="bg-background/40 p-5 rounded-3xl border border-border/50">
          <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest mb-3 px-1">Your Version</p>
          <div className="flex flex-wrap gap-1.5">
            {userWords.map((word, i) => {
              const isMatch = correctedWords.some(cw => cw.toLowerCase() === word.toLowerCase());
              return (
                <span 
                  key={i} 
                  className={cn(
                    "px-2 py-0.5 rounded-lg text-sm font-medium transition-all",
                    isMatch ? "bg-emerald-500/10 text-emerald-700" : "bg-red-500/10 text-red-600 underline decoration-red-400 decoration-2 underline-offset-4"
                  )}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>

        <div className="bg-primary/5 p-5 rounded-3xl border border-primary/20 shadow-sm shadow-primary/5">
          <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-3 px-1">Natural Correction</p>
          <div className="flex flex-wrap gap-1.5">
            {correctedWords.map((word, i) => {
              const isUserPresent = userWords.some(uw => uw.toLowerCase() === word.toLowerCase());
              return (
                <span 
                  key={i} 
                  className={cn(
                    "px-2 py-0.5 rounded-lg text-sm font-bold transition-all",
                    isUserPresent ? "text-text-primary" : "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                  )}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const handleNext = () => {
    if (currentQuestion + 1 < currentSentences.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer('');
      setAnalysis(null);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswer('');
    setScore(0);
    setShowResults(false);
    setAnalysis(null);
  };

  // Final Results
  if (showResults) {
    const percentage = Math.round((score / (currentSentences.length * 10)) * 100);
    return (
      <div className="max-w-2xl mx-auto py-12 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="text-center space-y-6">
          <div className="relative inline-block">
             <div className="w-32 h-32 bg-primary/10 rounded-[3rem] flex items-center justify-center text-5xl mx-auto blur-2xl absolute inset-0 animate-pulse" />
             <div className="w-32 h-32 bg-white border-4 border-primary rounded-[3rem] flex items-center justify-center text-5xl relative z-10 shadow-2xl">
              {percentage >= 80 ? '🏆' : '⭐'}
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-2">{percentage}% Mastery</h2>
            <p className="text-text-secondary font-medium">You earned {score} points in this session!</p>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-border p-10 shadow-sm relative overflow-hidden">
          <div className="flex flex-col items-center text-center space-y-4">
            <h3 className="text-xl font-bold">
              {percentage >= 80 ? 'Excellent Progress!' : percentage >= 60 ? 'Great Effort!' : 'Keep Practicing!'}
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-sm">
              {percentage >= 80 
                ? 'Your translations are showing high naturalness and correct grammar usage.'
                : 'You are on the right track! Some minor adjustments in word order will make you sound like a native.'}
            </p>
            <div className="pt-6 flex gap-4 w-full">
              <button 
                onClick={handleReset}
                className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCcw className="w-5 h-5" /> Start New Session
              </button>
            </div>
          </div>
          <Sparkles className="absolute -right-8 -bottom-8 w-32 h-32 text-primary/5 rotate-12" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <SectionHeader 
        title="Translation Practice" 
        subtitle={`Translating from ${userLanguage === 'vietnamese' ? 'Vietnamese' : 'English'}`} 
        icon={MessageSquare}
        action={
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-text-secondary uppercase tracking-widest leading-none mb-1">Session Score</span>
              <span className="text-lg font-black text-primary leading-none">{score} PTS</span>
            </div>
            <button 
              onClick={handleReset}
              className="p-2.5 bg-white border border-border rounded-xl hover:bg-background transition-colors shadow-sm"
              title="Change Language"
            >
              <Layout className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-border p-8 shadow-sm">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Question {currentQuestion + 1} of {currentSentences.length}</span>
                <span className="text-xs font-bold text-primary">{Math.round(((currentQuestion + 1) / currentSentences.length) * 100)}%</span>
              </div>
              <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border">
                <div 
                  className="h-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${((currentQuestion + 1) / currentSentences.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" /> Translate this
              </h3>
            </div>
            
            <div className="bg-background/80 p-8 rounded-3xl border border-border mb-8 border-dashed group relative overflow-hidden">
              <p className="text-xl font-bold leading-relaxed text-text-primary italic relative z-10">
                &quot;{currentChallenge}&quot;
              </p>
              <Zap className="absolute -right-4 -top-4 w-12 h-12 text-primary/5 -rotate-12 group-hover:scale-125 transition-transform" />
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-xs font-bold text-text-secondary uppercase tracking-widest ml-1">Your German Translation</label>
                <span className="text-[10px] text-text-secondary">Words: {answer.split(' ').filter(Boolean).length}</span>
              </div>
              <textarea 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Khiên nhẫn gõ câu trả lời của bạn..."
                className="w-full bg-background border border-border rounded-[2rem] p-6 text-lg min-h-[160px] focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all placeholder:text-slate-300 resize-none shadow-inner"
              />
              
              {!analysis ? (
                <button 
                  onClick={handleAnalyze}
                  disabled={loading || !answer.trim()}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {loading ? 'Analyzing...' : 'Submit Translation'} 
                  <Sparkles className={cn("w-5 h-5", loading && "animate-spin")} />
                </button>
              ) : (
                <button 
                  onClick={handleNext}
                  className="w-full bg-text-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-text-primary/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                  {currentQuestion + 1 === currentSentences.length ? 'See Final Results' : 'Next Sentence'} 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-border p-8 shadow-sm flex flex-col h-full min-h-[400px] relative overflow-hidden">
            <h3 className="font-bold mb-10 flex items-center gap-2 relative z-10">
              <Brain className="w-5 h-5 text-accent" /> Professional Feedback
            </h3>

            {!analysis && !loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6 space-y-6 relative z-10">
                <div className="w-20 h-20 bg-background rounded-[2rem] flex items-center justify-center text-4xl mb-2 grayscale opacity-40">
                  🤖
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Awaiting your Input</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Our AI will analyze your sentence for <span className="font-bold text-text-primary">grammar accuracy</span>, <span className="font-bold text-text-primary">vocabulary precision</span>, and <span className="font-bold text-text-primary">natural flow</span>.
                  </p>
                </div>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-10 space-y-6 animate-pulse z-10">
                <div className="w-20 h-20 bg-primary/5 rounded-[2rem] flex items-center justify-center text-4xl mb-2">
                  ⚡
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Analyzing Nuances...</h4>
                  <p className="text-sm text-text-secondary">Comparing with millions of native German structures.</p>
                </div>
              </div>
            )}

            {analysis && (
              <div className="flex-1 space-y-6 animate-in fade-in slide-in-from-right-4 duration-500 z-10">
                {renderHighlightedDiff()}

                <div className={cn(
                  "p-6 rounded-3xl border shadow-sm",
                  analysis.isCorrect ? "bg-emerald-50 border-emerald-100 text-emerald-900" : "bg-red-50 border-red-100 text-red-900"
                )}>
                  <p className="font-bold mb-1 flex items-center gap-2">
                    {analysis.isCorrect ? "✨ Amazing Job!" : "💪 Learning Opportunity"}
                  </p>
                  <p className="text-sm leading-relaxed opacity-90">{analysis.feedback}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Key Improvements</h4>
                  <div className="space-y-2">
                    {analysis.improvements?.map((imp: string, i: number) => (
                      <div key={i} className="flex gap-3 p-4 bg-background/50 rounded-2xl border border-border/50 text-sm animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                        <span className="w-6 h-6 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</span>
                        <p className="text-text-primary leading-tight font-medium">{imp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-background/80 p-6 rounded-3xl border border-border group">
                  <h4 className="text-[10px] font-black text-text-secondary uppercase tracking-widest mb-3">Linguistic Insight</h4>
                  <p className="text-sm leading-relaxed text-text-secondary group-hover:text-text-primary transition-colors">{analysis.explanation}</p>
                </div>
              </div>
            )}
            
            {/* Stats grid at the bottom */}
            <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              <div className="text-center group">
                <p className={cn("text-2xl font-black transition-all", analysis ? "text-primary scale-110" : "text-text-secondary opacity-20")}>
                  {analysis ? `${analysis.grammarScore}` : "--"}
                </p>
                <p className="text-[9px] font-bold text-text-secondary uppercase tracking-tighter">Grammar</p>
              </div>
              <div className="text-center group">
                <p className={cn("text-2xl font-black transition-all", analysis ? "text-accent scale-110" : "text-text-secondary opacity-20")}>
                  {analysis ? `${analysis.precisionScore}` : "--"}
                </p>
                <p className="text-[9px] font-bold text-text-secondary uppercase tracking-tighter">Precision</p>
              </div>
              <div className="text-center group">
                <p className={cn("text-2xl font-black transition-all", analysis ? "text-success scale-110" : "text-text-secondary opacity-20")}>
                  {analysis ? `${analysis.naturalnessScore}` : "--"}
                </p>
                <p className="text-[9px] font-bold text-text-secondary uppercase tracking-tighter">Natural</p>
              </div>
            </div>
            
            <Sparkles className="absolute -left-12 -bottom-12 w-48 h-48 text-primary/5 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

