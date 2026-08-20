'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Cpu, Target, DollarSign } from 'lucide-react';

export const featureBlocks = [
  {
    number: '01',
    title: 'Premium Design',
    description: 'Every experience is designed to look and feel exceptional.',
    icon: Palette,
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    number: '02',
    title: 'Modern Technology',
    description: 'We use modern frameworks and technologies to build scalable digital products.',
    icon: Cpu,
    accent: 'from-blue-400 to-indigo-500',
  },
  {
    number: '03',
    title: 'Business Focused',
    description: 'Technology should solve real business problems, not create unnecessary complexity.',
    icon: Target,
    accent: 'from-indigo-400 to-violet-500',
  },
  {
    number: '04',
    title: 'Practical Pricing',
    description: 'Premium Design. Practical Pricing.',
    icon: DollarSign,
    accent: 'from-cyan-400 to-emerald-400',
  },
];

export const WhyInvarsoft: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#08131C] text-white overflow-hidden">
      {/* Background Animated Tech Grid & Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase"
          >
            OUR VALUE PROPOSITION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Why InvarSoft?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cyan-400 text-xl sm:text-2xl font-bold tracking-wide"
          >
            Premium thinking. Practical execution.
          </motion.p>
        </div>

        {/* 4 Large Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureBlocks.map((block, index) => {
            const Icon = block.icon;

            return (
              <motion.div
                key={block.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div className="rounded-3xl p-8 sm:p-10 bg-[#050A0F] border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,240,255,0.15)] relative overflow-hidden">
                  
                  {/* Oversized Number in Background */}
                  <div className="absolute right-6 bottom-4 font-mono font-black text-8xl sm:text-9xl text-white/5 pointer-events-none select-none transition-all duration-500 group-hover:text-cyan-400/10">
                    {block.number}
                  </div>

                  <div>
                    {/* Top Row: Icon */}
                    <div className="mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Oversized Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 group-hover:text-cyan-400 transition-colors">
                      {block.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-base leading-relaxed font-normal max-w-md">
                      {block.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-2">
                    <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${block.accent}`} />
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold">
                      INVARSOFT STANDARD
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
