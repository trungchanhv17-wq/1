import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  Languages, 
  Layout,
  Brain,
  Zap,
  Star,
  Sparkles,
  ChevronRight,
  BookOpen,
  Menu,
  X,
  LogOut,
  Loader2,
  Headphones
} from 'lucide-react';
import { User } from 'firebase/auth';
import { cn } from '@/lib/utils';
import { VocabularyDashboard } from './components/Vocabulary/VocabularyDashboard';
import { Pricing } from './components/Premium/Pricing';
import { HomeView } from './components/Views/HomeView';
import { TranslationView } from './components/Views/TranslationView';
import { GrammarView } from './components/Views/GrammarView';
import { GamesView } from './components/Views/GamesView';
import { LoginPage } from './components/Auth/LoginPage';
import { DictationTrainer } from './components/Listening/DictationTrainer';
import { authService, userService, UserProfile } from './services/userService';
import { Logo } from './components/Logo';
import { useLanguage } from './context/LanguageContext';
import { OnboardingLanguageSelection } from './components/Views/OnboardingLanguageSelection';

// --- Types ---
type TabType = 'Home' | 'Translation' | 'Listening' | 'Grammar' | 'Vocabulary' | 'Games' | 'Premium';

// --- Main App ---

export default function App() {
  const { nativeLanguage, setNativeLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authService.onAuthChange(async (firebaseUser) => {
      setAuthLoading(true);
      try {
        if (firebaseUser) {
          setUser(firebaseUser);
          const userProfile = await userService.getUserProfile(firebaseUser.uid);
          setProfile(userProfile);

          // Check for payment success session
          const urlParams = new URLSearchParams(window.location.search);
          const sessionId = urlParams.get('session_id');
          if (sessionId && userProfile && !userProfile.premiumStatus) {
              try {
                  const res = await fetch(`/api/verify-session?sessionId=${sessionId}`);
                  const data = await res.json();
                  if (data.success && data.userId === firebaseUser.uid) {
                      await userService.updateUserStats(firebaseUser.uid, { premiumStatus: true });
                      setProfile({ ...userProfile, premiumStatus: true });
                      alert('Successfully upgraded to Pro! Willkommen!');
                      // Clear the query param
                      window.history.replaceState({}, document.title, window.location.pathname);
                  }
              } catch (err) {
                  console.error('Session verification failed', err);
              }
          }

        } else {
          setUser(null);
          setProfile(null);
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
      } finally {
        setAuthLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleUpdateXP = async (xpGain: number) => {
    if (user && profile) {
      const newXP = (profile.xp || 0) + xpGain;
      await userService.updateUserStats(user.uid, { xp: newXP });
      setProfile({ ...profile, xp: newXP });
    }
  };

  const handleLogout = async () => {
    await authService.logout();
    setActiveTab('Home');
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-10 h-10 text-slate-900 animate-spin" />
        <p className="text-sm font-bold text-slate-900 animate-pulse">Delerny is waking up...</p>
      </div>
    );
  }

  if (!user) {
    return <LoginPage onLoginSuccess={() => {}} />;
  }

  if (!nativeLanguage) {
    return <OnboardingLanguageSelection onSelectionComplete={(lang) => setNativeLanguage(lang)} />;
  }

  const tabs: { type: TabType; label: string; icon: React.ElementType }[] = [
    { type: 'Home', label: t('dashboard'), icon: Layout },
    { type: 'Translation', label: t('translation'), icon: Languages },
    { type: 'Listening', label: t('listening'), icon: Headphones },
    { type: 'Grammar', label: t('grammar'), icon: BookOpen },
    { type: 'Vocabulary', label: t('vocabulary'), icon: Brain },
    { type: 'Games', label: t('games'), icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-hidden">
      <header className="h-20 bg-black border-b border-white/10 px-6 lg:px-10 flex items-center justify-between shrink-0 sticky top-0 z-50">
        {/* LEFT: Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('Home')}>
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
            <Logo size="100%" variant="symbol" className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-black text-xl tracking-tighter uppercase italic text-white leading-none">Delerny</h1>
          </div>
        </div>

        {/* CENTER: Main Navigation Tabs (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.type}
              onClick={() => setActiveTab(tab.type)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all relative group",
                activeTab === tab.type 
                  ? "text-white" 
                  : "text-slate-400 hover:text-white"
              )}
            >
              <span className="relative z-10">{tab.label}</span>
              {activeTab === tab.type && (
                <motion.div 
                  layoutId="nav_pill"
                  className="absolute inset-0 bg-white/10 rounded-xl border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {activeTab !== tab.type && (
                <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
          ))}
        </nav>

        {/* RIGHT: Premium CTA + User Status */}
        <div className="flex items-center gap-3 lg:gap-5">
           {/* Mobile Pro Icon Trigger */}
           <button 
             onClick={() => setActiveTab('Premium')}
             className="lg:hidden w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 active:scale-95 transition-all"
           >
             <Star className="w-5 h-5 fill-current" />
           </button>

           {/* Desktop Premium CTA */}
           <button 
             onClick={() => setActiveTab('Premium')}
             className={cn(
               "hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest text-white transition-all shadow-lg active:scale-95 group relative overflow-hidden",
               activeTab === 'Premium' 
                 ? "bg-white text-black shadow-white/10" 
                 : "bg-[#08142b] border border-white/10 hover:bg-[#0c1e40] shadow-indigo-500/20"
             )}
           >
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <Star className={cn("w-3.5 h-3.5 fill-current relative z-10", activeTab === 'Premium' ? "text-black" : "text-white")} />
             <span className="relative z-10">{t('unlockPro')}</span>
             <Sparkles className="w-3.5 h-3.5 absolute -right-1 top-2 opacity-50 group-hover:scale-125 transition-transform" />
           </button>

           <div className="h-8 w-px bg-white/10 hidden sm:block" />

           {/* User Status Bar */}
           <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-1.5 pr-4 rounded-2xl">
              <div className="flex items-center gap-3">
                {profile?.photoURL ? (
                  <img src={profile.photoURL} alt={profile.displayName} className="w-8 h-8 rounded-lg object-cover ring-2 ring-white/10 shadow-sm" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-black text-black text-[10px] italic">
                    {profile?.displayName?.charAt(0) || 'U'}
                  </div>
                )}
                
                <div className="hidden xl:flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-orange-500 fill-orange-500" />
                      <span className="text-[10px] font-black text-white leading-none italic">{profile?.streak || 0}d</span>
                    </div>
                  </div>
                  <div className="w-px h-4 bg-white/10" />
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black text-indigo-400 leading-none italic">{profile?.xp || 0} XP</span>
                  </div>
                </div>
              </div>

              <LogOut onClick={handleLogout} className="w-4 h-4 text-slate-500 cursor-pointer hover:text-red-500 transition-colors ml-2 hidden sm:block" />
           </div>

           {/* mobile menu trigger */}
           <button 
             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
             className="lg:hidden p-2.5 bg-white/10 rounded-xl text-white active:scale-95 transition-all"
           >
             {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
           </button>
        </div>
      </header>

      {/* Mobile Sidebar Navigation (Drawer style) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[280px] bg-white z-[70] lg:hidden p-8 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white italic font-black text-xs">R</div>
                  <span className="font-black text-lg italic uppercase text-slate-900 tracking-tighter">DeutschAI</span>
                </div>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-slate-50 rounded-lg">
                   <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="space-y-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.type}
                    onClick={() => {
                      setActiveTab(tab.type);
                      setIsSidebarOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-4 w-full p-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all",
                      activeTab === tab.type 
                        ? "bg-[#08142b] text-white shadow-xl shadow-slate-900/20" 
                        : "text-slate-500 hover:bg-slate-50"
                    )}
                  >
                    <tab.icon className={cn("w-5 h-5", activeTab === tab.type ? "text-indigo-400" : "text-slate-300")} />
                    {tab.label}
                  </button>
                ))}
                
                <div className="h-px bg-slate-100 my-4" />

                <button
                  onClick={() => {
                    setActiveTab('Premium');
                    setIsSidebarOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between w-full p-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all bg-indigo-50 border-2 border-indigo-100 text-indigo-600 shadow-lg shadow-indigo-500/5",
                    activeTab === 'Premium' && "border-indigo-600 bg-indigo-600 text-white"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <Star className="w-5 h-5 fill-current" />
                    {t('premium')}
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-auto pt-8">
                <div className="p-8 bg-[#08142b] rounded-[2.5rem] text-white flex flex-col items-center text-center relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                     <Sparkles className="w-16 h-16" />
                   </div>
                   <Star className="w-10 h-10 text-amber-400 mb-6 fill-amber-400 animate-bounce" />
                   <h4 className="font-black italic uppercase text-lg mb-2">{t('unlockPro')}</h4>
                   <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-8 leading-relaxed">
                     {nativeLanguage === 'vi' ? 'Sửa lỗi không giới hạn' : 'Unlimited Corrections'}<br/>
                     {nativeLanguage === 'vi' ? 'Lộ trình học AI thông minh' : 'Custom Learning Paths'}
                   </p>
                   <button 
                     onClick={() => {
                       setActiveTab('Premium');
                       setIsSidebarOpen(false);
                     }}
                     className="w-full py-4 bg-white text-[#08142b] rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-white/10 active:scale-95 transition-all"
                   >
                     {nativeLanguage === 'vi' ? 'Nâng cấp ngay' : 'Upgrade Now'}
                   </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className={cn(
        "flex-1 custom-scrollbar",
        activeTab === "Translation" ? "h-[calc(100vh-5rem)] overflow-hidden flex flex-col" : "overflow-y-auto"
      )}>
        <div className={cn(
          "w-full mx-auto",
          activeTab === "Translation" 
            ? "flex-1 flex flex-col p-0 max-w-none h-full" 
            : "p-6 lg:p-12 max-w-[1600px] pb-32 lg:pb-12"
        )}>
          <AnimatePresence mode="wait">
            {activeTab === 'Home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <HomeView profile={profile} />
              </motion.div>
            )}
            {activeTab === 'Translation' && (
              <motion.div
                key="translation"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex-1 flex flex-col"
              >
                <TranslationView onUpdateXP={handleUpdateXP} />
              </motion.div>
            )}
            {activeTab === 'Listening' && (
              <motion.div
                key="listening"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <DictationTrainer />
              </motion.div>
            )}
            {activeTab === 'Grammar' && (
              <motion.div
                key="grammar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <GrammarView />
              </motion.div>
            )}
            {activeTab === 'Vocabulary' && (
              <motion.div
                key="vocabulary"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <VocabularyDashboard />
              </motion.div>
            )}
            {activeTab === 'Games' && (
              <motion.div
                key="games"
                initial={{ opacity: 0, rotate: -2 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 2 }}
                transition={{ duration: 0.4 }}
              >
                <GamesView />
              </motion.div>
            )}
            {activeTab === 'Premium' && (
              <motion.div
                key="premium"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <Pricing userProfile={profile} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
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
}
