import React from 'react';

export const SectionHeader = ({ title, subtitle, icon: Icon, action }: { title: string, subtitle?: string, icon?: React.ElementType, action?: React.ReactNode }) => (
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
