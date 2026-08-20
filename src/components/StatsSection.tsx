'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Cpu, Target, TrendingUp } from 'lucide-react';

export const statsPillars = [
  {
    title: 'Design First',
    description: 'Every interface is built with aesthetic polish and intuitive usability.',
    icon: Palette,
  },
  {
    title: 'Technology Driven',
    description: 'Powered by modern frameworks, clean code architecture and AI tools.',
    icon: Cpu,
  },
  {
    title: 'Business Focused',
    description: 'We design digital solutions engineered to drive actual conversion and velocity.',
    icon: Target,
  },
  {
    title: 'Built For Growth',
    description: 'Scalable infrastructure prepared to support expanding enterprise operations.',
    icon: TrendingUp,
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#050A0F] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsPillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-8 rounded-3xl bg-[#08131C] border border-white/10 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
