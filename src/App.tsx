import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Languages, 
  Trophy, 
  Flame, 
  ChevronRight, 
  MessageSquare,
  Sparkles,
  Layout,
  Brain,
  Zap,
  Target,
  Search,
  Settings,
  Bell,
  CheckCircle2,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { VocabularyDashboard } from './components/Vocabulary/VocabularyDashboard';
import { Pricing } from './components/Premium/Pricing';

// --- Types ---
type TabType = 'Home' | 'Translation' | 'Grammar' | 'Vocabulary' | 'Games' | 'Premium';

// --- Sub-components ---

const NavItem = ({ icon: Icon, label, active, onClick }: { icon: React.ElementType, label: string, active: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-5 py-2.5 text-sm font-semibold transition-all rounded-xl relative",
      active 
        ? "text-primary bg-primary/10 shadow-sm" 
        : "text-text-secondary hover:text-primary hover:bg-white/50"
    )}
  >
    <Icon className={cn("w-4 h-4", active ? "text-primary" : "text-text-secondary")} />
    <span>{label}</span>
    {active && (
      <motion.div 
        layoutId="activeNav"
        className="absolute left-0 w-1 h-4 bg-primary rounded-full"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
  </button>
);

const SectionHeader = ({ title, subtitle, icon: Icon, action }: { title: string, subtitle?: string, icon?: React.ElementType, action?: React.ReactNode }) => (
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-4">
      {Icon && (
        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-border flex items-center justify-center text-primary">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-text-primary">{title}</h2>
        {subtitle && <p className="text-sm text-text-secondary mt-0.5">{subtitle}</p>}
      </div>
    </div>
    {action}
  </div>
);

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('Home');

  return (
    <div className="min-h-screen bg-background flex text-text-primary">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white/50 backdrop-blur-xl border-r border-border flex flex-col sticky top-0 h-screen z-50">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tighter italic">Lern.ai</span>
          </div>

          <nav className="space-y-2">
            <NavItem icon={Layout} label="Dashboard" active={activeTab === 'Home'} onClick={() => setActiveTab('Home')} />
            <NavItem icon={Languages} label="Translation" active={activeTab === 'Translation'} onClick={() => setActiveTab('Translation')} />
            <NavItem icon={BookOpen} label="Grammar" active={activeTab === 'Grammar'} onClick={() => setActiveTab('Grammar')} />
            <NavItem icon={Brain} label="Vocabulary" active={activeTab === 'Vocabulary'} onClick={() => setActiveTab('Vocabulary')} />
            <NavItem icon={Zap} label="Games" active={activeTab === 'Games'} onClick={() => setActiveTab('Games')} />
            <NavItem icon={Star} label="Premium" active={activeTab === 'Premium'} onClick={() => setActiveTab('Premium')} />
          </nav>
        </div>

        <div className="mt-auto p-8 space-y-6">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-5 rounded-2xl border border-primary/20 relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="font-bold text-sm mb-1">Upgrade to Pro</h4>
              <p className="text-[10px] text-text-secondary leading-relaxed mb-4">
                Get unlimited AI corrections and advanced learning paths.
              </p>
              <button 
                onClick={() => setActiveTab('Premium')}
                className="bg-primary text-white w-full py-2 rounded-lg text-xs font-bold shadow-md hover:bg-primary/90 transition-all"
              >
                Learn More
              </button>
            </div>
            <Sparkles className="absolute -right-4 -bottom-4 w-16 h-16 text-primary/10 group-hover:scale-110 transition-transform" />
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
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Header Bar */}
        <header className="h-20 bg-white/30 backdrop-blur-md border-b border-border px-10 flex items-center justify-between sticky top-0 z-40">
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

        <div className="p-10 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'Home' && <HomeView key="home" />}
            {activeTab === 'Translation' && <TranslationView key="translation" />}
            {activeTab === 'Grammar' && <GrammarView key="grammar" />}
            {activeTab === 'Vocabulary' && <VocabularyDashboard key="vocabulary" />}
            {activeTab === 'Games' && <GamesView key="games" />}
            {activeTab === 'Premium' && <Pricing key="premium" />}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// --- Views ---

function HomeView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-12"
    >
      <SectionHeader 
        title="Willkommen zurück, Max!" 
        subtitle="You're on a 14-day streak. Keep it up!"
        icon={Zap}
      />

      {/* Hero Banner */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
          <div className="relative z-10 h-full flex flex-col justify-between max-w-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Current Objective</span>
              <h1 className="text-4xl font-bold mb-4 leading-tight">Mastering Implicit <br />Subordinate Clauses.</h1>
              <p className="text-white/60 text-sm leading-relaxed mb-10">
                You've completed 65% of the Advanced B1 modules. Focus on word order rules for "dass" and "weil" clauses today.
              </p>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 w-fit transition-all shadow-xl shadow-primary/20">
              Continue Lesson <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute right-[-100px] top-[-100px] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
          <Brain className="absolute right-10 bottom-10 w-64 h-64 text-white/5 opacity-40 group-hover:scale-110 transition-transform duration-700" />
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 border border-border shadow-premium flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-warning" /> Leaderboard
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center font-bold text-xs">
                    {i}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-200" />
                  <div className="flex-1">
                    <p className="font-bold text-xs">User_{i}42</p>
                    <p className="text-[10px] text-text-secondary">4,230 XP</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-[10px] uppercase font-bold text-text-secondary mb-1">XP Goal</p>
                <p className="font-bold text-lg">1,240 / 2,000</p>
              </div>
              <span className="text-primary font-bold text-xs">62%</span>
            </div>
            <div className="w-full bg-background h-2 rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: '62%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <SectionHeader title="Recommended Focus" subtitle="Based on your recent mistakes" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ModuleCard icon="📝" title="Cases & Gender" tag="Grammar" progress={80} />
          <ModuleCard icon="🍔" title="At the Market" tag="Vocabulary" progress={45} />
          <ModuleCard icon="🚌" title="Transportation" tag="Vocabulary" progress={12} />
          <ModuleCard icon="🎯" title="Prepositions" tag="Grammar" progress={95} />
        </div>
      </section>
    </motion.div>
  );
}

const ModuleCard = ({ icon, title, tag, progress }: { icon: string, title: string, tag: string, progress: number }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all cursor-pointer group"
  >
    <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-1 rounded-md mb-3 inline-block">
      {tag}
    </span>
    <h4 className="font-bold text-lg mb-6 group-hover:text-primary transition-colors">{title}</h4>
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase">
        <span>Completion</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
        <div className={cn("h-full", progress > 90 ? "bg-success" : "bg-primary")} style={{ width: `${progress}%` }} />
      </div>
    </div>
  </motion.div>
);

function TranslationView() {
  const [answer, setAnswer] = useState('');
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-10"
    >
      <SectionHeader 
        title="AI Translation Coach" 
        subtitle="Write freely, get professional feedback." 
        icon={MessageSquare}
        action={
          <div className="flex gap-2">
            <select className="bg-white border border-border rounded-xl px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/10">
              <option>B2 Upper-Intermediate</option>
              <option>B1 Intermediate</option>
            </select>
            <select className="bg-white border border-border rounded-xl px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/10">
              <option>Work & Business</option>
              <option>Daily Life</option>
            </select>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-[2rem] border border-border p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" /> Current Challenge
              </h3>
              <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
                Refresh Prompt <Zap className="w-3 h-3" />
              </button>
            </div>
            <div className="bg-background/80 p-8 rounded-2xl border border-border mb-8 border-dashed">
              <p className="text-xl font-bold leading-relaxed text-text-primary italic">
                &quot;If we had left earlier, we would have reached the station on time.&quot;
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-xs font-bold text-text-secondary uppercase tracking-widest ml-1">Your German Translation</label>
                <span className="text-[10px] text-text-secondary">Word count: {answer.split(' ').filter(Boolean).length}</span>
              </div>
              <textarea 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Wenn wir..."
                className="w-full bg-background border border-border rounded-2xl p-6 text-lg min-h-[200px] focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all placeholder:text-slate-300"
              />
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3">
                Check with AI Analysis <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[2rem] border border-border p-8 shadow-sm flex flex-col h-full min-h-[400px]">
            <h3 className="font-bold mb-10 flex items-center gap-2">
              <Brain className="w-5 h-5 text-accent" /> AI Insights Preview
            </h3>
            
            <div className="flex-1 flex flex-col items-center justify-center text-center px-10 space-y-6">
              <div className="w-20 h-20 bg-background rounded-3xl flex items-center justify-center text-4xl mb-2 grayscale opacity-40">
                🤖
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Analyzing your Input</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Submit your translation to get a detailed breakdown of <span className="font-bold text-text-primary">subjunctive II (Konjunktiv II)</span> usage, word order, and context-appropriate vocabulary.
                </p>
              </div>
              <div className="flex gap-4 w-full pt-6">
                <div className="flex-1 h-1 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-primary/20 w-1/3" />
                </div>
                <div className="flex-1 h-1 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-primary/20 w-1/3" />
                </div>
                <div className="flex-1 h-1 bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-primary/20 w-1/3" />
                </div>
              </div>
            </div>

            <div className="mt-auto grid grid-cols-3 gap-4 pt-8">
              <div className="bg-background/50 p-4 rounded-2xl border border-border text-center">
                <p className="text-xl font-bold text-primary">--</p>
                <p className="text-[10px] font-bold text-text-secondary uppercase">Grammar</p>
              </div>
              <div className="bg-background/50 p-4 rounded-2xl border border-border text-center">
                <p className="text-xl font-bold text-accent">--</p>
                <p className="text-[10px] font-bold text-text-secondary uppercase">Precision</p>
              </div>
              <div className="bg-background/50 p-4 rounded-2xl border border-border text-center">
                <p className="text-xl font-bold text-success">--</p>
                <p className="text-[10px] font-bold text-text-secondary uppercase">Natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GrammarView() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="space-y-12"
    >
      <SectionHeader 
        title="Interactive Grammar Lab" 
        subtitle="Decode the mechanics of the German language." 
        icon={BookOpen}
        action={
          <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-border">
            <button className="px-5 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-md transition-all">All Modules</button>
            <button className="px-5 py-2 text-text-secondary hover:text-primary transition-all text-sm font-bold">Recommended</button>
            <button className="px-5 py-2 text-text-secondary hover:text-primary transition-all text-sm font-bold">Mastered</button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GrammarTopicCard 
          icon="🖇️" 
          title="Relative Clauses" 
          difficulty="B1" 
          topics={["Relative pronouns", "Genitive case", "Word order"]}
          progress={45}
        />
        <GrammarTopicCard 
          icon="⏳" 
          title="Past Tense (Präteritum)" 
          difficulty="A2" 
          topics={["Strong verbs", "Auxiliary verbs", "Modal verbs"]}
          progress={100}
        />
        <GrammarTopicCard 
          icon="🔱" 
          title="The Passive Voice" 
          difficulty="B2" 
          topics={["Vorgangspassiv", "Zustandspassiv", "Passive alternatives"]}
          progress={12}
        />
        <GrammarTopicCard 
          icon="🧱" 
          title="Adjective Endings" 
          difficulty="A2" 
          topics={["Strong declension", "Weak declension", "Mixed declension"]}
          progress={75}
        />
        <GrammarTopicCard 
          icon="⛓️" 
          title="Conjunctions" 
          difficulty="A1" 
          topics={["Coordination", "Subordination", "Two-part connectors"]}
          progress={100}
        />
        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center space-y-4">
           <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">🚀</div>
           <h4 className="font-bold">Next Milestone</h4>
           <p className="text-xs text-text-secondary max-w-[180px]">Complete <span className="text-primary font-bold">Subjunctive I</span> to unlock academic German path.</p>
        </div>
      </div>
    </motion.div>
  );
}

const GrammarTopicCard = ({ icon, title, difficulty, topics, progress }: { icon: string, title: string, difficulty: string, topics: string[], progress: number }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="bg-white border border-border p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all cursor-pointer group"
  >
    <div className="flex justify-between items-start mb-8">
      <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary/5 transition-colors">
        {icon}
      </div>
      <span className={cn(
        "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest",
        difficulty.startsWith('A') ? "bg-green-50 text-green-600 border border-green-100" :
        difficulty.startsWith('B') ? "bg-blue-50 text-blue-600 border border-blue-100" :
        "bg-purple-50 text-purple-600 border border-purple-100"
      )}>
        {difficulty} Level
      </span>
    </div>
    
    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
    
    <div className="space-y-2 mb-8">
      {topics.map((t: string) => (
        <div key={t} className="flex items-center gap-2 text-xs text-text-secondary">
          <div className="w-1 h-1 bg-primary/40 rounded-full" />
          {t}
        </div>
      ))}
    </div>

    <div className="flex items-center gap-4">
      <div className="flex-1 h-2 bg-background rounded-full overflow-hidden">
        <div className={cn("h-full transition-all duration-1000", progress === 100 ? "bg-success" : "bg-primary")} style={{ width: `${progress}%` }} />
      </div>
      <span className="text-[10px] font-bold text-text-secondary">{progress}%</span>
      {progress === 100 && <CheckCircle2 className="w-4 h-4 text-success" />}
    </div>
  </motion.div>
);

function GamesView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="space-y-12"
    >
       <SectionHeader 
        title="Arcade & Training" 
        subtitle="Hone your reflexes and intuition through play." 
        icon={Zap}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GameCard 
          title="Der Die Das Rush" 
          description="Identify noun genders against the clock. How fast can your brain categorize articles?"
          color="bg-primary"
          icon="🏃"
          stats="Next Reward: 50 XP"
        />
        <GameCard 
          title="Audio Match" 
          description="Connect native pronunciation with visual representations. Perfect for A1-A2 learners."
          color="bg-accent"
          icon="🎧"
          stats="Daily Streak: 3x"
        />
        <GameCard 
          title="Sentence Stack" 
          description="Build complex sentences using dynamic blocks. Master German word order logic."
          color="bg-slate-900"
          icon="🏗️"
          stats="Record: 42s"
        />
        <GameCard 
          title="Verb Conjugator" 
          description="Speed-round conjugation for irregular verbs. Master the 'Strong' verb patterns."
          color="bg-orange-500"
          icon="⚡"
          stats="Unlocked: B1"
        />
      </div>
    </motion.div>
  );
}

const GameCard = ({ title, description, color, icon, stats }: { title: string, description: string, color: string, icon: string, stats: string }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white border border-border p-1 rounded-[2.5rem] shadow-premium group cursor-pointer"
  >
    <div className={cn("rounded-[2.2rem] p-10 h-full flex flex-col justify-between transition-all overflow-hidden relative", color)}>
      <div className="relative z-10 text-white">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-8 backdrop-blur-md">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{stats}</span>
        <button className="bg-white text-slate-900 px-6 py-2.5 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2 group-hover:bg-primary group-hover:text-white transition-all">
          Play Now <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Decorative bg icon */}
      <div className="absolute right-[-20%] bottom-[-10%] text-[200px] opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700 select-none">
        {icon}
      </div>
    </div>
  </motion.div>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
