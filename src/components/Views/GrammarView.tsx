import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { cn } from '@/lib/utils';

export function GrammarView() {
  return (
    <div className="space-y-12">
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
    </div>
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
