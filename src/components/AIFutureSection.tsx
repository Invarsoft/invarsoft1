'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Zap, Shield, GitBranch, Terminal } from 'lucide-react';

export const aiFeatures = [
  {
    title: 'Custom AI Agents',
    desc: 'Autonomous bots handling client workflows & inquiry resolution 24/7.',
    icon: Bot,
    codeSnippet: 'agent.deploy({ role: "SupportAssistant", model: "InvarAI-v2" })',
  },
  {
    title: 'Intelligent Workflows',
    desc: 'Automated data extraction & sync between CRM, email & custom databases.',
    icon: GitBranch,
    codeSnippet: 'workflow.connect({ input: "DocumentPDF", output: "PostgresDB" })',
  },
  {
    title: 'Business Intelligence',
    desc: 'Real-time predictive analytics dashboards powered by LLMs.',
    icon: Cpu,
    codeSnippet: 'analytics.query({ metric: "ConversionRate", predict: "+30 days" })',
  },
];

export const AIFutureSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="relative py-28 bg-[#08131C] text-white overflow-hidden border-y border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>ARTIFICIAL INTELLIGENCE & AUTOMATION</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              The Future Is Being Built{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Now.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed"
            >
              AI, automation and intelligent software are changing how businesses operate. InvarSoft helps businesses turn these technologies into practical products and workflows.
            </motion.p>

            {/* Feature Selectors */}
            <div className="space-y-4 pt-4">
              {aiFeatures.map((feat, idx) => {
                const isSelected = activeCard === idx;
                const Icon = feat.icon;

                return (
                  <div
                    key={feat.title}
                    onClick={() => setActiveCard(idx)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                      isSelected
                        ? 'bg-white/10 border-cyan-400/80 shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${isSelected ? 'bg-cyan-400 text-black' : 'bg-white/5 text-cyan-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{feat.title}</h4>
                        <p className="text-xs text-slate-300 font-normal">{feat.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Visual Column: Interactive AI Terminal & Network Simulation */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl p-8 bg-[#050A0F] border border-cyan-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span>INVARSOFT AI WORKFLOW CONSOLE</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                  SYSTEM READY
                </span>
              </div>

              {/* Code/Command Simulation */}
              <div className="p-4 rounded-xl bg-black/60 font-mono text-xs text-cyan-300 space-y-2 border border-white/10 mb-6">
                <div className="text-slate-500">// Executing AI Pipeline</div>
                <div>&gt; {aiFeatures[activeCard].codeSnippet}</div>
                <div className="text-emerald-400">&gt; Status: 200 OK — Execution Time 42ms</div>
              </div>

              {/* Neural Visual Nodes Matrix */}
              <div className="relative h-56 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

                <div className="relative z-10 flex justify-between items-center">
                  <div className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-mono">
                    NODE: INVAR_AI_AGENT_01
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>NEURAL LINK ACTIVE</span>
                  </div>
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="text-lg font-bold text-white">
                    {aiFeatures[activeCard].title}
                  </div>
                  <div className="text-xs text-slate-300">
                    Practical enterprise AI implementation designed for security and measurable ROI.
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
