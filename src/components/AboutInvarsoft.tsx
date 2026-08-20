'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layers, ShieldCheck, Zap, Code2, Globe } from 'lucide-react';

export const AboutInvarsoft: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#050A0F] text-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase"
            >
              <Server className="w-3.5 h-3.5" />
              <span>ABOUT INVARSOFT</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Technology With{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Purpose.
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-slate-300 text-lg leading-relaxed font-normal"
            >
              <p>
                InvarSoft is a digital technology company focused on building premium websites, software products and intelligent digital solutions for modern businesses.
              </p>
              <p className="text-slate-400">
                We combine thoughtful design, modern engineering and practical business thinking to create digital products that don't just look exceptional — they work exceptionally.
              </p>
            </motion.div>

            {/* Quick Pillars Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-cyan-400 font-bold text-sm flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4" />
                  <span>High Performance</span>
                </div>
                <div className="text-xs text-slate-400">Sub-second response times & zero lag</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-cyan-400 font-bold text-sm flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4" />
                  <span>Custom Architecture</span>
                </div>
                <div className="text-xs text-slate-400">Scalable code, modular components</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column: Abstract Digital Architecture Canvas/Panels */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl p-8 bg-[#08131C] border border-white/10 shadow-2xl overflow-hidden group"
            >
              {/* Glowing Background Tech Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
              
              <div className="relative z-10 space-y-6">
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>SYSTEM ARCHITECTURE DIAGRAM</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 border border-white/10 px-2 py-0.5 rounded">
                    LIVE SYSTEM
                  </span>
                </div>

                {/* Interactive Glass Cards Stack */}
                <div className="space-y-4">
                  {/* Layer 1 */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-cyan-500/30 backdrop-blur-xl shadow-lg flex items-center justify-between hover:border-cyan-400 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Client Interface Layer</div>
                        <div className="text-xs text-slate-400 font-mono">React / Next.js / Tailwind CSS</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-bold">OPTIMIZED</span>
                  </div>

                  {/* Connecting Line */}
                  <div className="h-4 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600 mx-8 opacity-60" />

                  {/* Layer 2 */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-blue-500/30 backdrop-blur-xl shadow-lg flex items-center justify-between hover:border-blue-400 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Logic & API Engine</div>
                        <div className="text-xs text-slate-400 font-mono">Node.js / Python / Microservices</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 font-bold">ACTIVE</span>
                  </div>

                  {/* Connecting Line */}
                  <div className="h-4 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 mx-8 opacity-60" />

                  {/* Layer 3 */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-indigo-500/30 backdrop-blur-xl shadow-lg flex items-center justify-between hover:border-indigo-400 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Data & Cloud Security</div>
                        <div className="text-xs text-slate-400 font-mono">PostgreSQL / Cloud Encryption</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-indigo-400 font-bold">SECURE</span>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="pt-2 text-center text-xs font-mono text-slate-400 border-t border-white/5">
                  PREMIUM DESIGN &bull; PRACTICAL PRICING &bull; ZERO TEMPLATES
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
