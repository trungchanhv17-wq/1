import React, { useState } from 'react';
import { MessageSquare, Target, Zap, Sparkles, Brain } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function TranslationView() {
  const [answer, setAnswer] = useState('');
  
  return (
    <div className="space-y-10">
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
    </div>
  );
}
