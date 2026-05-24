import React from 'react';

export const SectionHeader = ({ title, subtitle, icon: Icon, action }: { title: string, subtitle?: string, icon?: React.ElementType, action?: React.ReactNode }) => (
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center gap-4">
      {Icon && (
        <div className="w-12 h-12 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 flex items-center justify-center text-white">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div>
        <h2 className="text-2xl font-black tracking-tighter uppercase italic text-slate-900">{title}</h2>
        {subtitle && <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{subtitle}</p>}
      </div>
    </div>
    {action}
  </div>
);
