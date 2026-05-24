import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Logo } from '../Logo';
import { NativeLanguage } from '../../context/LanguageContext';

interface OnboardingProps {
  onSelectionComplete: (lang: NativeLanguage) => void;
}

export function OnboardingLanguageSelection({ onSelectionComplete }: OnboardingProps) {
  const [selectedLang, setSelectedLang] = useState<NativeLanguage | null>(null);

  const handleContinue = () => {
    if (selectedLang) {
      onSelectionComplete(selectedLang);
    }
  };

  return (
    <div className="min-h-screen bg-[#030c29] text-white flex flex-col justify-between p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background elegant gradient blobs */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Header with App Logo */}
      <header className="flex items-center gap-3 relative z-10 select-none">
        <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
          <Logo size="100%" variant="symbol" className="w-full h-full object-contain" />
        </div>
        <div>
          <h1 className="font-black text-xl tracking-tighter uppercase italic text-white leading-none">Delerny</h1>
          <p className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest mt-1">SaaS Language Hub</p>
        </div>
      </header>

      {/* Main onboarding card structure */}
      <main className="flex-1 flex items-center justify-center my-12 relative z-10 w-full max-w-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 rounded-[3.5rem] w-full text-center space-y-10 shadow-2xl shadow-indigo-950/50"
        >
          {/* Section heading */}
          <div className="space-y-4">
            <div className="mx-auto w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-2 border border-indigo-500/20">
              <Globe className="w-6 h-6 animate-pulse" />
            </div>
            
            <h2 id="choose-lang-title" className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-350">
              {selectedLang === 'vi' ? 'Chọn ngôn ngữ mẹ đẻ' : 'Choose your native language'}
            </h2>
            
            <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed max-w-sm mx-auto">
              {selectedLang === 'vi' 
                ? 'Delerny sẽ sử dụng ngôn ngữ mẹ đẻ này để giải thích từ vựng, ngữ pháp và phân tích bài học tiếng Đức tốt nhất cho bạn.' 
                : 'This helps Delerny explain German lessons in the language you understand best.'}
            </p>
          </div>

          {/* Cards for selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Vietnamese option */}
            <motion.button
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLang('vi')}
              id="lang-option-vi"
              className={`p-6 rounded-3xl border text-left transition-all flex flex-col gap-4 relative group ${
                selectedLang === 'vi'
                  ? 'border-indigo-500 bg-indigo-600/10 shadow-lg shadow-indigo-500/10'
                  : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {selectedLang === 'vi' && (
                <div className="absolute top-4 right-4 bg-indigo-500 text-white rounded-full p-1 border border-indigo-400 shadow-lg shadow-indigo-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              )}
              <span className="text-4xl" role="img" aria-label="Vietnamese Flag">🇻🇳</span>
              <div>
                <h3 className="font-bold text-lg text-white">Tiếng Việt</h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Vietnamese</p>
              </div>
            </motion.button>

            {/* English option */}
            <motion.button
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLang('en')}
              id="lang-option-en"
              className={`p-6 rounded-3xl border text-left transition-all flex flex-col gap-4 relative group ${
                selectedLang === 'en'
                  ? 'border-indigo-500 bg-indigo-600/10 shadow-lg shadow-indigo-500/10'
                  : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {selectedLang === 'en' && (
                <div className="absolute top-4 right-4 bg-indigo-500 text-white rounded-full p-1 border border-indigo-400 shadow-lg shadow-indigo-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              )}
              <span className="text-4xl" role="img" aria-label="English Flag">🇺🇸</span>
              <div>
                <h3 className="font-bold text-lg text-white">English</h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">English</p>
              </div>
            </motion.button>

          </div>

          {/* Continue button */}
          <div>
            <motion.button
              whileHover={{ scale: selectedLang ? 1.02 : 1 }}
              whileTap={{ scale: selectedLang ? 0.98 : 1 }}
              disabled={!selectedLang}
              onClick={handleContinue}
              id="continue-button"
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all ${
                selectedLang
                  ? 'bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer shadow-xl shadow-indigo-600/20 active:scale-95'
                  : 'bg-white/10 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>
                {selectedLang === 'vi' ? 'Tiếp tục' : 'Continue'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

        </motion.div>
      </main>

      {/* Footer copyright notes */}
      <footer className="text-center text-xs text-slate-600 relative z-10">
        <p>&copy; {new Date().getFullYear()} Delerny. All rights reserved. Learn German Naturally.</p>
      </footer>
    </div>
  );
}
