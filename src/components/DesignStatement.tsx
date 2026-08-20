'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const DesignStatement: React.FC = () => {
  return (
    <section className="relative py-36 bg-[#08131C] text-white overflow-hidden flex items-center justify-center border-y border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Large Oversized Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none">
            <span className="text-white">Premium Design.</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Practical Pricing.
            </span>
          </h2>
        </motion.div>

        {/* Minimal Sub-statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-300 text-xl sm:text-3xl max-w-3xl mx-auto font-light leading-relaxed"
        >
          Exceptional digital experiences shouldn't be reserved for massive companies.
        </motion.p>

        {/* Subtle Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '120px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 bg-cyan-400 mx-auto rounded-full shadow-[0_0_15px_#00F0FF]"
        />

      </div>
    </section>
  );
};
