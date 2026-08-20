'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code, Rocket, CheckCircle } from 'lucide-react';

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    icon: Search,
    summary: 'Understand the business, users, objectives and technical requirements.',
    details: [
      'Stakeholder alignment & goals mapping',
      'User audience research & persona mapping',
      'Technical architecture audit',
      'Scope & timeline definition'
    ],
  },
  {
    number: '02',
    title: 'Design',
    icon: Compass,
    summary: 'Create the product strategy, experience and visual direction.',
    details: [
      'User journey & wireframing',
      'Design system creation',
      'Interactive high-fidelity prototypes',
      'UX feedback iterations'
    ],
  },
  {
    number: '03',
    title: 'Build',
    icon: Code,
    summary: 'Engineer the product using modern, scalable technologies.',
    details: [
      'Next.js & React clean frontend development',
      'Scalable backend & API integrations',
      'Database schema & state management',
      'Core Web Vitals & performance optimization'
    ],
  },
  {
    number: '04',
    title: 'Launch',
    icon: Rocket,
    summary: 'Deploy, optimize and continuously improve.',
    details: [
      'CI/CD deployment pipeline setup',
      'End-to-end QA & security testing',
      'Analytics & performance monitoring',
      'Post-launch support & continuous scaling'
    ],
  },
];

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
        const progress = Math.min(
          1,
          Math.max(0, (windowHeight * 0.7 - rect.top) / (rect.height * 0.8))
        );
        const step = Math.min(3, Math.floor(progress * 4));
        setActiveStep(step);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-28 bg-[#08131C] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase"
          >
            THE METHODOLOGY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            How We Build
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed"
          >
            A simple process for building ambitious digital products.
          </motion.p>
        </div>

        {/* INTERACTIVE STAGE SELECTOR TABS */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-4">
          <div className="inline-flex items-center gap-2 bg-[#050A0F] p-2 rounded-2xl border border-white/10 backdrop-blur-xl">
            {processSteps.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeStep === idx
                    ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="font-mono text-xs">{step.number}</span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* DYNAMIC PROGRESS LINE */}
        <div className="relative mb-16 hidden md:block max-w-4xl mx-auto">
          <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              animate={{ width: `${((activeStep + 1) / 4) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* ACTIVE STAGE CARD DISPLAY */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 sm:p-12 bg-[#050A0F] border border-cyan-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Number & Summary */}
              <div className="md:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-mono font-black text-cyan-400">
                    {processSteps[activeStep].number}
                  </span>
                  <div className="h-8 w-px bg-white/10" />
                  <h3 className="text-3xl font-extrabold text-white">
                    {processSteps[activeStep].title}
                  </h3>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed font-normal">
                  {processSteps[activeStep].summary}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold block">
                    STAGE DELIVERABLES & ACTIVITIES
                  </span>
                  {processSteps[activeStep].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Stage Graphic */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  {React.createElement(processSteps[activeStep].icon, {
                    className: 'w-20 h-20 text-cyan-400 animate-pulse',
                  })}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
