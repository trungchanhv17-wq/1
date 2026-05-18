import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const NavItem = ({ icon: Icon, label, active, onClick }: { icon: React.ElementType, label: string, active: boolean, onClick: () => void }) => (
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
