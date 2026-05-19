import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  Languages, 
  Flame, 
  Sparkles,
  Layout,
  Brain,
  Zap,
  Search,
  Settings,
  Bell,
  Star,
  BookOpen,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Loader2
} from 'lucide-react';
import { User } from 'firebase/auth';
import { cn } from '@/lib/utils';
import { VocabularyDashboard } from './components/Vocabulary/VocabularyDashboard';
import { Pricing } from './components/Premium/Pricing';
import { NavItem } from './components/Navigation/NavItem';
import { HomeView } from './components/Views/HomeView';
import { TranslationView } from './components/Views/TranslationView';
import { GrammarView } from './components/Views/GrammarView';
import { GamesView } from './components/Views/GamesView';
import { LoginPage } from './components/Auth/LoginPage';
import { authService, userService, UserProfile } from './services/userService';

// --- Types ---
type TabType = 'Home' | 'Translation' | 'Grammar' | 'Vocabulary' | 'Games' | 'Premium';

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authService.onAuthChange(async (firebaseUser) => {
      setAuthLoading(true);
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
      setAuthLoading(false);
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
        <p className="text-sm font-bold text-slate-900 animate-pulse">Ruma is waking up...</p>
      </div>
    );
  }

  if (!user) {
    return <LoginPage onLoginSuccess={() => {}} />;
  }

  const tabs: { type: TabType; label: string; icon: React.ElementType }[] = [
    { type: 'Home', label: 'Dashboard', icon: Layout },
    { type: 'Translation', label: 'Translation', icon: Languages },
    { type: 'Grammar', label: 'Grammar', icon: BookOpen },
    { type: 'Vocabulary', label: 'Vocabulary', icon: Brain },
    { type: 'Games', label: 'Games', icon: Zap },
    { type: 'Premium', label: 'Premium', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row text-text-primary">
      {/* Mobile Header */}
      <header className="md:hidden h-16 bg-white/70 backdrop-blur-md border-b border-border px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/src/assets/images/ruma_logo_png_1779102933223.png" alt="Ruma Logo" className="w-8 h-8 object-contain" />
          <span className="font-black text-xl tracking-tighter uppercase italic text-slate-900">Ruma</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-background rounded-lg transition-colors"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside className={cn(
        "fixed inset-0 z-[60] bg-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:bg-white/50 md:backdrop-blur-xl md:border-r md:border-border md:flex md:flex-col md:h-screen md:sticky md:top-0 transition-[width]",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        isSidebarCollapsed ? "md:w-20" : "md:w-72"
      )}>
        <div className={cn(
          "p-8 flex flex-col h-full",
          isSidebarCollapsed && "md:p-4 md:items-center"
        )}>
          <div className={cn(
            "hidden md:flex items-center justify-between mb-10 w-full",
            isSidebarCollapsed && "flex-col gap-8 px-0"
          )}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/20 shrink-0 overflow-hidden">
                <img src="/src/assets/images/ruma_logo_png_1779102933223.png" alt="Ruma Logo" className="w-full h-full object-cover" />
              </div>
              {!isSidebarCollapsed && <span className="font-black text-2xl tracking-tighter uppercase italic text-slate-900">Ruma</span>}
            </div>
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className={cn(
                "hidden md:flex p-2 hover:bg-white/80 border border-border/50 rounded-lg transition-all shadow-sm",
                isSidebarCollapsed && "mt-2"
              )}
            >
              {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          <nav className="space-y-1 w-full">
            {tabs.map((tab) => (
              <NavItem 
                key={tab.type}
                icon={tab.icon} 
                label={tab.label} 
                active={activeTab === tab.type} 
                collapsed={isSidebarCollapsed}
                onClick={() => {
                  setActiveTab(tab.type);
                  setIsSidebarOpen(false);
                }} 
              />
            ))}
          </nav>

          <div className={cn(
            "mt-auto pt-8 space-y-6 w-full",
            isSidebarCollapsed && "items-center"
          )}>
            {!isSidebarCollapsed ? (
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-5 rounded-2xl border border-primary/20 relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="font-bold text-sm mb-1">Upgrade to Pro</h4>
                  <p className="text-[10px] text-text-secondary leading-relaxed mb-4">
                    Get unlimited AI corrections and learning paths.
                  </p>
                  <button 
                    onClick={() => {
                      setActiveTab('Premium');
                      setIsSidebarOpen(false);
                    }}
                    className="bg-primary text-white w-full py-2 rounded-lg text-xs font-bold shadow-md"
                  >
                    Learn More
                  </button>
                </div>
                <Sparkles className="absolute -right-4 -bottom-4 w-16 h-16 text-primary/10" />
              </div>
            ) : (
              <button 
                onClick={() => setActiveTab('Premium')}
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 hover:bg-primary/20 transition-colors mx-auto"
              >
                <Sparkles className="text-primary w-5 h-5" />
              </button>
            )}
            
            <div className={cn(
              "flex items-center gap-4 px-2",
              isSidebarCollapsed && "flex-col px-0"
            )}>
              {profile?.photoURL ? (
                <img src={profile.photoURL} alt={profile.displayName} className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-primary/10" referrerPolicy="no-referrer" />
              ) : (
                <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-400">
                  {profile?.displayName?.charAt(0) || 'U'}
                </div>
              )}
              {!isSidebarCollapsed && (
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-sm truncate">{profile?.displayName || 'Learner'}</p>
                    {profile?.premiumStatus && (
                      <span className="bg-primary text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter">Pro</span>
                    )}
                  </div>
                  <p className="text-[10px] text-text-secondary">Level {profile?.level || 'A1'} • {profile?.xp || 0} XP</p>
                </div>
              )}
              {!isSidebarCollapsed ? (
                <div className="flex items-center gap-2 ml-auto">
                  <Settings className="w-4 h-4 text-text-secondary cursor-pointer hover:text-primary transition-colors" />
                  <LogOut onClick={handleLogout} className="w-4 h-4 text-text-secondary cursor-pointer hover:text-red-500 transition-colors" />
                </div>
              ) : (
                <div className="flex flex-col gap-2 mt-4">
                  <Settings className="w-4 h-4 text-text-secondary cursor-pointer hover:text-primary transition-colors" />
                  <LogOut onClick={handleLogout} className="w-4 h-4 text-text-secondary cursor-pointer hover:text-red-500 transition-colors" />
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Header Bar - Desktop only for search, merged for mobile or use a simple version */}
        <header className="hidden md:flex h-20 bg-white/30 backdrop-blur-md border-b border-border px-10 items-center justify-between sticky top-0 z-40">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search topics, verbs, grammar..." 
              className="w-full bg-background/50 border border-border rounded-xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-xl text-orange-600 border border-orange-100 font-bold text-sm">
              <Flame className="w-4 h-4 fill-current" /> {profile?.streak || 0} Days
            </div>
            <div className="relative">
              <Bell className="w-5 h-5 text-text-secondary cursor-pointer hover:text-primary transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
          </div>
        </header>

        {/* Mobile quick actions / search? */}
        <div className="md:hidden p-4 border-b border-border bg-white flex items-center justify-between">
          <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg text-orange-600 border border-orange-100 font-bold text-xs">
            <Flame className="w-3 h-3 fill-current" /> {profile?.streak || 0} Days streak
          </div>
          <Bell className="w-5 h-5 text-text-secondary" />
        </div>

        <div className="p-6 md:p-10 max-w-7xl mx-auto pb-24 md:pb-10">
          <AnimatePresence mode="wait">
            {activeTab === 'Home' && <HomeView key="home" profile={profile} />}
            {activeTab === 'Translation' && <TranslationView key="translation" onUpdateXP={handleUpdateXP} />}
            {activeTab === 'Grammar' && <GrammarView key="grammar" />}
            {activeTab === 'Vocabulary' && <VocabularyDashboard key="vocabulary" />}
            {activeTab === 'Games' && <GamesView key="games" />}
            {activeTab === 'Premium' && <Pricing key="premium" userProfile={profile} />}
          </AnimatePresence>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-lg border-t border-border flex items-center justify-around px-2 z-[40]">
          {tabs.slice(0, 5).map((tab) => (
            <button
              key={tab.type}
              onClick={() => setActiveTab(tab.type)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                activeTab === tab.type ? "text-primary" : "text-text-secondary"
              )}
            >
              <tab.icon className={cn("w-5 h-5", activeTab === tab.type ? "fill-primary/10" : "")} />
              <span className="text-[10px] font-bold">{tab.label}</span>
              {activeTab === tab.type && (
                <motion.div layoutId="mobileNav" className="absolute bottom-0 w-8 h-1 bg-primary rounded-t-full" />
              )}
            </button>
          ))}
        </nav>
      </main>
    </div>
  );
}
