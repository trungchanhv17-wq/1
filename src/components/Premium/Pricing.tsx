import React from 'react';
import { motion } from 'motion/react';
import { Check, Star, Zap, Shield, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for getting started with basic learning.',
    features: [
      'Daily 10 Flashcards',
      'Basic AI Translation',
      'Grammar Fundamentals',
      'Community Leaderboard'
    ],
    buttonText: 'Current Plan',
    highlight: false,
    icon: Zap
  },
  {
    name: 'Pro',
    price: '9.99',
    description: 'Elevate your German with advanced AI power.',
    features: [
      'Unlimited Flashcards',
      'Priority AI Feedback',
      'Advanced Grammar Lab',
      'Audio Pronunciation Match',
      'Offline Access',
      'No Ads'
    ],
    buttonText: 'Upgrade to Pro',
    highlight: true,
    icon: Star
  },
  {
    name: 'Lifetime',
    price: '149',
    description: 'One-time payment for eternal mastery.',
    features: [
      'Everything in Pro',
      'Personal Learning Concierge',
      'Early Access to Features',
      'Exclusive Mastery Badge',
      'Lifetime Updates'
    ],
    buttonText: 'Go Lifetime',
    highlight: false,
    icon: Shield
  }
];

export const Pricing = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
        >
          <Sparkles className="w-3 h-3" />
          Invest in your future
        </motion.div>
        <h2 className="text-4xl font-bold tracking-tight text-text-primary">
          Simple, Transparent Pricing
        </h2>
        <p className="text-text-secondary">
          Choose the plan that fits your learning pace. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={cn(
              "relative bg-white rounded-[2.5rem] p-8 border transition-all duration-500",
              plan.highlight 
                ? "border-primary shadow-2xl shadow-primary/20 scale-105 z-10" 
                : "border-border shadow-sm hover:shadow-xl"
            )}
          >
            {plan.highlight && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}

            <div className="space-y-6">
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center",
                plan.highlight ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-500"
              )}>
                <plan.icon className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-text-secondary mt-1">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.name !== 'Lifetime' && <span className="text-text-secondary text-sm">/month</span>}
              </div>

              <div className="space-y-4 pt-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={cn(
                      "mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                      plan.highlight ? "bg-primary/20 text-primary" : "bg-slate-100 text-slate-400"
                    )}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-text-secondary leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95",
                plan.highlight 
                  ? "bg-primary text-white hover:bg-primary/90 shadow-primary/20" 
                  : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20",
                plan.name === 'Free' && "bg-slate-100 text-slate-500 hover:bg-slate-200 shadow-none cursor-default"
              )}>
                {plan.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Have a custom requirement?</h3>
            <p className="text-white/60">We offer specialized plans for schools and companies.</p>
          </div>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold whitespace-nowrap hover:bg-white/90 transition-all">
            Contact Sales
          </button>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
      </div>
    </motion.div>
  );
};
