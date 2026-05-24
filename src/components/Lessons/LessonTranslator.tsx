import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Brain, 
  Zap, 
  Languages,
  Lightbulb, 
  CheckCircle2, 
  X, 
  BookOpen, 
  Target, 
  Clock, 
  Flame,
  TrendingUp,
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LessonTranslatorProps {
  topic: string;
  onClose: () => void;
}

interface Sentence {
  vi: string;
  de: string;
}

interface Paragraph {
  vi: string;
  sentences: Sentence[];
}

interface LessonContent {
  title: string;
  subtitle: string;
  paragraphs: Paragraph[];
}

const SAMPLE_CONTENT: Record<string, LessonContent> = {
  "Thông tin cá nhân": {
    title: "Greetings & Basics",
    subtitle: "Translate the highlighted sentence to German",
    paragraphs: [
      {
        vi: "Chào buổi sáng! Bạn khỏe không? Tên tôi là Delerny. Tôi rất vui được gặp bạn hôm nay. Bạn đến từ đâu?",
        sentences: [
          { vi: "Chào buổi sáng!", de: "Guten Morgen!" },
          { vi: "Bạn khỏe không?", de: "Wie geht es dir?" },
          { vi: "Tên tôi là Delerny.", de: "Mein Name ist Delerny." },
          { vi: "Tôi rất vui được gặp bạn hôm nay.", de: "Ich freue mich, dich heute zu treffen." },
          { vi: "Bạn đến từ đâu?", de: "Woher kommst du?" }
        ]
      }
    ]
  },
  "Default": {
    title: "Lesson Practice",
    subtitle: "Translate the highlighted sentence to German",
    paragraphs: [
      {
        vi: "Chào buổi sáng! Bạn khỏe không? Hôm nay tôi cảm thấy rất tuyệt vời vì thời tiết ở ngoài kia thật sự rất đẹp. Tôi muốn đi dạo ở công viên và uống một ly cà phê.",
        sentences: [
          { vi: "Chào buổi sáng!", de: "Guten Morgen!" },
          { vi: "Bạn khỏe không?", de: "Wie geht es dir?" },
          { vi: "Hôm nay tôi cảm thấy rất tuyệt vời vì thời tiết ở ngoài kia thật sự rất đẹp.", de: "Heute fühle ich mich großartig, weil das Wetter draußen wirklich schön ist." },
          { vi: "Tôi muốn đi dạo ở công viên và uống một ly cà phê.", de: "Ich möchte im Park spazieren gehen und einen Kaffee trinken." }
        ]
      }
    ]
  }
};

export const LessonTranslator: React.FC<LessonTranslatorProps> = ({ topic, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [translation, setTranslation] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<{
    score: number;
    corrected: string;
    explanation: string[];
    coachSays: string;
  } | null>(null);

  const content = SAMPLE_CONTENT[topic] || SAMPLE_CONTENT["Default"];
  const flatSentences = content.paragraphs.flatMap((p: Paragraph) => p.sentences);
  const currentSentence = flatSentences[currentIdx];

  const handleSubmit = () => {
    if (!translation.trim()) return;
    setIsAnalyzing(true);
    
    // Simulate AI Feedback
    setTimeout(() => {
      setFeedback({
        score: Math.floor(Math.random() * 20) + 80,
        corrected: currentSentence.de,
        explanation: [
          "Sử dụng đúng cấu trúc câu 'Wie geht es...'",
          "Cách chia động từ phù hợp với ngữ cảnh trang trọng.",
          "Từ vựng được chọn lọc kỹ càng."
        ],
        coachSays: "Làm tốt lắm! Câu dịch của bạn rất tự nhiên và chính xác về mặt ngữ pháp. Hãy tiếp tục phát huy nhé!"
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleNext = () => {
    if (currentIdx < flatSentences.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setTranslation('');
      setFeedback(null);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-50 flex flex-col font-sans overflow-hidden animate-in fade-in duration-500">
      {/* 1. TOP HEADER */}
      <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0 sticky top-0 z-50">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
             <Brain className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-black text-xl tracking-tighter uppercase italic text-slate-900 leading-none">DeutschAI</h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Learn German Smartly</p>
          </div>
        </div>

        {/* CENTER: Lesson Header */}
        <div className="flex flex-col items-center max-w-md w-full px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{topic}</p>
          <h2 className="text-sm font-bold text-slate-900 mb-2 truncate">Translate the highlighted sentence</h2>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIdx + 1) / flatSentences.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* RIGHT: Stats Cards */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-6 px-6 py-2.5 bg-white border border-slate-100 rounded-2xl shadow-sm">
             <div className="flex flex-col items-center">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Credits</span>
               <span className="text-sm font-black text-indigo-600 leading-none italic">850</span>
             </div>
             <div className="w-px h-6 bg-slate-100" />
             <div className="flex flex-col items-center">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Points</span>
               <span className="text-sm font-black text-pink-500 leading-none italic">+240</span>
             </div>
             <div className="w-px h-6 bg-slate-100" />
             <div className="flex flex-col items-center">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Progress</span>
               <span className="text-sm font-black text-emerald-500 leading-none italic">42%</span>
             </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-slate-100 rounded-xl transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 overflow-hidden flex flex-col lg:flex-row p-6 lg:p-10 gap-8 max-w-[1600px] mx-auto w-full">
        
        {/* 3. LEFT PANEL (MAIN LEARNING AREA) */}
        <div className="flex-[7] flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar">
          
          {/* Reading Card */}
          <section className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-xl shadow-slate-200/20 relative overflow-hidden min-h-[300px]">
             <div className="absolute top-0 right-0 p-8">
               <div className="bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Reading Mode</div>
             </div>
             
             <div className="max-w-2xl space-y-8 mt-4">
               {content.paragraphs.map((p, pIdx) => (
                 <div key={pIdx} className="text-xl font-medium text-slate-400 leading-relaxed">
                   {p.vi.split(currentSentence.vi).map((part, i, arr) => (
                     <React.Fragment key={i}>
                       {part}
                       {i < arr.length - 1 && (
                         <motion.span 
                            layoutId="highlight"
                            className="relative inline-block px-4 py-1 mx-1 text-slate-900 font-bold"
                         >
                            <motion.span 
                              className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl z-0 shadow-sm shadow-indigo-200/50" 
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                            />
                            <span className="relative z-10">{currentSentence.vi}</span>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-indigo-500 rounded-full" />
                         </motion.span>
                       )}
                     </React.Fragment>
                   ))}
                 </div>
               ))}
             </div>
          </section>

          {/* 4. TRANSLATION INPUT SECTION */}
          <section className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-xl shadow-slate-200/20">
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Languages className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-tighter italic">Your German Translation</h3>
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  {translation.trim() ? translation.split(/\s+/).length : 0} Words
                </div>
             </div>

             <textarea 
               value={translation}
               onChange={(e) => setTranslation(e.target.value)}
               placeholder="Gõ bản dịch tiếng Đức của bạn vào đây..."
               className="w-full bg-slate-50 border-none rounded-3xl p-8 text-2xl font-bold tracking-tight text-slate-900 placeholder:text-slate-300 min-h-[220px] focus:ring-4 focus:ring-indigo-100 focus:outline-none transition-all resize-none shadow-inner"
             />

             <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>Tip: Use relative pronouns for more natural phrasing.</span>
             </div>
          </section>

          {/* 5. ACTION BUTTONS */}
          <footer className="flex items-center justify-between mt-auto py-4">
             <button 
               onClick={onClose}
               className="px-8 py-4 text-sm font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest"
             >
               Quit Lesson
             </button>

             <div className="flex items-center gap-4">
                <button className="px-8 py-4 bg-white border border-slate-200 rounded-2xl text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" /> Hint
                </button>
                <button 
                  onClick={feedback ? handleNext : handleSubmit}
                  disabled={isAnalyzing || (!translation.trim() && !feedback)}
                  className={cn(
                    "relative group px-12 py-4 rounded-2xl text-white font-black uppercase tracking-widest shadow-2xl transition-all overflow-hidden disabled:opacity-50",
                    feedback 
                      ? "bg-slate-900 hover:bg-black" 
                      : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:scale-[1.02] active:scale-95 shadow-indigo-500/30"
                  )}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isAnalyzing ? (
                      <Clock className="w-5 h-5 animate-spin" />
                    ) : feedback ? (
                      <>Next Sentence <ArrowLeft className="w-4 h-4 rotate-180" /></>
                    ) : (
                      <>Submit Translation <TrendingUp className="w-4 h-4" /></>
                    )}
                  </span>
                  {!feedback && (
                    <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
             </div>
          </footer>
        </div>

        {/* 6. RIGHT SIDEBAR (AI FEEDBACK) */}
        <aside className="flex-[3] flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar shrink-0">
          
          {/* 7. TOP SIDEBAR CARDS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/20 group hover:border-indigo-200 transition-all cursor-pointer">
               <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                 <BookOpen className="w-5 h-5" />
               </div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Dictionary</p>
               <p className="text-sm font-bold text-slate-900">Tra cứu nhanh</p>
            </div>
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/20 relative overflow-hidden">
               <div className="relative z-10">
                 <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 mb-4">
                   <Target className="w-5 h-5" />
                 </div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Accuracy</p>
                 <p className="text-2xl font-black text-slate-900 italic">{feedback?.score || '0'}%</p>
               </div>
               <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-pink-500/5 rounded-full blur-xl" />
            </div>
          </div>

          {/* 8. FEEDBACK PANEL */}
          <section className={cn(
             "flex-1 bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-xl shadow-slate-200/20 flex flex-col transition-all relative overflow-hidden",
             !feedback && "opacity-60 grayscale-[0.3]"
          )}>
             <div className="absolute top-0 right-0 p-6 opacity-10">
               <Brain className="w-24 h-24" />
             </div>
             
             <div className="flex items-center gap-3 mb-8 relative z-10">
               <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                 <Sparkles className="w-4 h-4" />
               </div>
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-tighter italic">AI Tutor Insights</h3>
             </div>

             <div className="space-y-8 flex-1 relative z-10">
                <div className="space-y-2">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 italic">Your Translation</p>
                  <p className="text-sm font-bold text-slate-900 italic leading-relaxed">
                    {translation || "— Awaiting your response"}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-[9px] font-black text-indigo-500 uppercase tracking-widest px-1 italic">Suggested Better Version</p>
                  <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <p className="text-sm font-black text-indigo-900 italic leading-relaxed">
                      {feedback?.corrected || "— Wait for analysis"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 italic">Why is it better?</p>
                  <div className="space-y-2.5">
                    {(feedback?.explanation || ["Grammar analysis", "Vocabulary refinement", "Natural syntax"]).map((exp, i) => (
                      <div key={i} className="flex gap-3 items-start animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        <p className="text-xs font-bold text-slate-600 leading-tight">{exp}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-6 bg-slate-900 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                  <h4 className="text-[9px] font-black text-white/50 uppercase tracking-widest mb-2 italic">AI Coach Says</h4>
                  <p className="text-sm font-bold italic leading-relaxed relative z-10">
                    {feedback?.coachSays || "Keep focusing on the core structure. You're doing great so far!"}
                  </p>
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                </div>
             </div>
          </section>

          {/* 9. ACHIEVEMENTS SECTION */}
          <section className="bg-slate-100/50 rounded-3xl border border-slate-200/50 p-6">
             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 italic text-center">Todays Progress</h4>
             <div className="grid grid-cols-3 gap-2">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 flex flex-col items-center">
                   <Flame className="w-4 h-4 text-orange-500 mb-1" />
                   <span className="text-sm font-black text-slate-900 italic">5</span>
                   <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Streak</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-slate-200 flex flex-col items-center">
                   <Award className="w-4 h-4 text-indigo-500 mb-1" />
                   <span className="text-sm font-black text-slate-900 italic">250</span>
                   <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">XP Earned</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-slate-200 flex flex-col items-center">
                   <Zap className="w-4 h-4 text-yellow-500 mb-1" />
                   <span className="text-sm font-black text-slate-900 italic">12</span>
                   <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Learned</span>
                </div>
             </div>
          </section>

        </aside>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
};
