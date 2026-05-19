import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export const NavItem = ({ icon: Icon, label, active, collapsed, onClick }: { icon: React.ElementType, label: string, active: boolean, collapsed?: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-5 py-2.5 text-sm font-semibold transition-all rounded-xl relative w-full",
      active 
        ? "text-primary bg-primary/10 shadow-sm" 
        : "text-text-secondary hover:text-primary hover:bg-white/50",
      collapsed && "justify-center px-0 h-10 w-10 mx-auto"
    )}
  >
    <Icon className={cn("w-4 h-4 shrink-0", active ? "text-primary" : "text-text-secondary")} />
    {!collapsed && <span>{label}</span>}
    {active && !collapsed && (
      <motion.div 
        layoutId="activeNav"
        className="absolute left-0 w-1 h-4 bg-primary rounded-full"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
  </button>
);
