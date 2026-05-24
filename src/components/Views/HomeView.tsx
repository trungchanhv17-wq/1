import React from 'react';
import { Zap, Brain, ChevronRight, Settings, Check } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { UserProfile } from '../../services/userService';

export function HomeView({ profile }: { profile: UserProfile | null }) {
  const { nativeLanguage, setNativeLanguage, t } = useLanguage();
  const firstName = profile?.displayName?.split(' ')[0] || 'Learner';

  const welcomeSubtitle = nativeLanguage === 'vi'
    ? `Chuỗi ngày học liên tục: ${profile?.streak || 0} ngày. Hãy duy trì nhé!`
    : `You're on a ${profile?.streak || 0}-day streak. Keep it up!`;

  const activeObjectiveDesc = nativeLanguage === 'vi'
    ? 'Bạn đã hoàn thành 65% của lộ trình trung cấp B1. Tập trung vào quy tắc trật tự từ cho "dass" và "weil" hôm nay.'
    : '"You\'ve completed 65% of the Advanced B1 modules. Focus on word order rules for \'dass\' and \'weil\' today."';

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <SectionHeader 
        title={`Willkommen zurück, ${firstName}!`} 
        subtitle={welcomeSubtitle}
        icon={Zap}
      />

      {/* Unified Hero & Progress Section */}
      <section className="relative">
        <div className="bg-[#030c29] rounded-[3.5rem] p-12 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/40">
          <div className="relative z-10 h-full flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {t('activeObjective')}
                  </span>
                </div>
                <h1 className="text-5xl font-black mb-4 leading-tight tracking-tighter italic uppercase">
                  Implicit Subordinate <br />Clauses
                </h1>
                <p className="text-white/40 text-lg leading-relaxed font-medium italic">
                  {activeObjectiveDesc}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center gap-3 transition-all shadow-xl shadow-primary/20 active:scale-95 cursor-pointer">
                  {t('continueLesson')} <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-6 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                   <div className="flex flex-col">
                      <span className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">{t('xpProgress')}</span>
                      <span className="text-lg font-black italic">{profile?.xp || 0} / 2k</span>
                   </div>
                   <div className="w-px h-8 bg-white/10" />
                   <div className="flex flex-col">
                      <span className="text-[8px] font-black text-white/30 uppercase tracking-widest mb-1">{t('dailyStreak')}</span>
                      <span className="text-lg font-black italic text-orange-400">{profile?.streak || 0} {t('days')}</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative shrink-0 hidden lg:block">
               <div className="w-64 h-64 bg-primary/10 rounded-[3rem] rotate-12 flex items-center justify-center border border-primary/20 backdrop-blur-sm group-hover:rotate-0 transition-all duration-700">
                  <Brain className="w-40 h-40 text-white/20" />
               </div>
               <div className="absolute -inset-10 bg-primary/20 blur-[80px] rounded-full -z-10 animate-pulse" />
            </div>
          </div>
          
          <div className="absolute right-[-100px] top-[-100px] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
        </div>
      </section>

      {/* Embedded Settings View */}
      <section className="relative">
        <div className="bg-white border-[1.5px] border-slate-300 rounded-[3.5rem] p-10 md:p-12 shadow-sm relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            
            <div className="max-w-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-800 border border-slate-200">
                  <Settings className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <h3 id="settings-card-title" className="text-2xl font-black tracking-tight text-slate-900 uppercase">
                    {t('settingsTitle')}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    DELERNY APP SETTINGS
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {t('settingsSubtitle')}
              </p>
            </div>

            <div className="w-full lg:max-w-md p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-6">
              <div className="space-y-1">
                <label className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-2">
                  <span>🌐</span> {t('chooseNativeLanguage')}
                </label>
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                  {t('nativeLanguageDesc')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                
                {/* Vietnamese selection */}
                <button
                  type="button"
                  id="settings-lang-vi"
                  onClick={() => setNativeLanguage('vi')}
                  className={`py-4 px-4 rounded-2xl border text-center transition-all relative flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                    nativeLanguage === 'vi'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-extrabold shadow-sm'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-bold'
                  }`}
                >
                  <span className="text-2xl" role="img" aria-label="Vietnam Flag">🇻🇳</span>
                  <span className="text-xs">{t('vietnamese')}</span>
                  {nativeLanguage === 'vi' && (
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white rounded-full p-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>

                {/* English selection */}
                <button
                  type="button"
                  id="settings-lang-en"
                  onClick={() => setNativeLanguage('en')}
                  className={`py-4 px-4 rounded-2xl border text-center transition-all relative flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                    nativeLanguage === 'en'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-extrabold shadow-sm'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-bold'
                  }`}
                >
                  <span className="text-2xl" role="img" aria-label="US Flag">🇺🇸</span>
                  <span className="text-xs">{t('english')}</span>
                  {nativeLanguage === 'en' && (
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white rounded-full p-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
