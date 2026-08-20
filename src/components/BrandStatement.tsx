'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BrandStatement: React.FC = () => {
  const statements = [
    { text: "WE DON'T JUST BUILD WEBSITES.", highlight: false },
    { text: "WE BUILD DIGITAL EXPERIENCES.", highlight: true },
    { text: "WE BUILD DIGITAL GROWTH.", highlight: true },
    { text: "WE BUILD WHAT'S NEXT.", highlight: true, final: true },
  ];

  return (
    <section className="relative py-36 bg-navy-950 text-white overflow-hidden grid-bg border-y border-blue-500/30">
      {/* Atmospheric Soft Light Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full bg-blue-600/15 blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-16">
        
        <span className="text-sm font-extrabold tracking-[0.3em] text-blue-400 uppercase block mb-4 font-display">
          OUR PURPOSE & MANIFESTO
        </span>

        <div className="space-y-12">
          {statements.map((stmt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <h2
                className={`font-display text-3xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight ${
                  stmt.final
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200 text-glow-lg text-4xl sm:text-7xl md:text-8xl'
                    : stmt.highlight
                    ? 'text-white'
                    : 'text-slate-300 font-bold'
                }`}
              >
                {stmt.text}
              </h2>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
