import React, { useState } from 'react';
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
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { VocabularyDashboard } from './components/Vocabulary/VocabularyDashboard';
import { Pricing } from './components/Premium/Pricing';
import { NavItem } from './components/Navigation/NavItem';
import { HomeView } from './components/Views/HomeView';
import { TranslationView } from './components/Views/TranslationView';
import { GrammarView } from './components/Views/GrammarView';
import { GamesView } from './components/Views/GamesView';

// --- Types ---
type TabType = 'Home' | 'Translation' | 'Grammar' | 'Vocabulary' | 'Games' | 'Premium';

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
          <Sparkles className="text-primary w-5 h-5" />
          <span className="font-bold text-xl tracking-tighter italic">Lern.ai</span>
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
        "fixed inset-0 z-[60] bg-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:bg-white/50 md:backdrop-blur-xl md:border-r md:border-border md:flex md:flex-col md:w-72 md:h-screen md:sticky md:top-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-8 flex flex-col h-full">
          <div className="hidden md:flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tighter italic">Lern.ai</span>
          </div>

          <nav className="space-y-1">
            {tabs.map((tab) => (
              <NavItem 
                key={tab.type}
                icon={tab.icon} 
                label={tab.label} 
                active={activeTab === tab.type} 
                onClick={() => {
                  setActiveTab(tab.type);
                  setIsSidebarOpen(false);
                }} 
              />
            ))}
          </nav>

          <div className="mt-auto pt-8 space-y-6">
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
            
            <div className="flex items-center gap-4 px-2">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-bold text-sm truncate">Max Schneider</p>
                <p className="text-[10px] text-text-secondary">Level 14 • B2 Learner</p>
              </div>
              <Settings className="w-4 h-4 text-text-secondary ml-auto cursor-pointer hover:text-primary transition-colors" />
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
              <Flame className="w-4 h-4 fill-current" /> 14 Days
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
            <Flame className="w-3 h-3 fill-current" /> 14 Days streak
          </div>
          <Bell className="w-5 h-5 text-text-secondary" />
        </div>

        <div className="p-6 md:p-10 max-w-7xl mx-auto pb-24 md:pb-10">
          <AnimatePresence>
            {activeTab === 'Home' && <HomeView key="home" />}
            {activeTab === 'Translation' && <TranslationView key="translation" />}
            {activeTab === 'Grammar' && <GrammarView key="grammar" />}
            {activeTab === 'Vocabulary' && <VocabularyDashboard key="vocabulary" />}
            {activeTab === 'Games' && <GamesView key="games" />}
            {activeTab === 'Premium' && <Pricing key="premium" />}
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
