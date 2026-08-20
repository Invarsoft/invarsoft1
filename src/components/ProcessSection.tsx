'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Layers, Code, Cpu, ShieldCheck, Rocket, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export const processSteps = [
  {
    number: '01',
    tabTitle: 'Discover',
    title: 'Discover & Scope',
    icon: Search,
    summary: 'Understand the business goals, user personas, technical requirements, and project scope.',
    details: [
      'Stakeholder alignment & objectives mapping',
      'Target audience research & user persona definition',
      'Technical feasibility & legacy system audit',
      'Project roadmap, budget & timeline definition'
    ],
  },
  {
    number: '02',
    tabTitle: 'Design',
    title: 'Design & Prototype',
    icon: Compass,
    summary: 'Craft intuitive user journeys, wireframes, high-fidelity UI design, and interactive prototypes.',
    details: [
      'User journey mapping & low-fidelity wireframes',
      'Design system creation & UI component tokens',
      'High-fidelity Figma prototypes & micro-interactions',
      'Client feedback review & UX design approvals'
    ],
  },
  {
    number: '03',
    tabTitle: 'Architecture',
    title: 'System Architecture',
    icon: Layers,
    summary: 'Define database schemas, API protocols, microservices, and cloud architecture.',
    details: [
      'Database schema design (PostgreSQL / NoSQL / Vector DB)',
      'REST, GraphQL & tRPC API contract specification',
      'Scalable microservices & event queue planning',
      'Cloud security & enterprise compliance architecture'
    ],
  },
  {
    number: '04',
    tabTitle: 'Development',
    title: 'Full-Stack Development',
    icon: Code,
    summary: 'Engineer scalable, high-performance web applications and backend systems.',
    details: [
      'Next.js & React type-safe frontend development',
      'Node.js, Express & FastAPI backend serving endpoints',
      'State management, dynamic caching & data fetching',
      'Sub-second page load & Core Web Vitals optimization'
    ],
  },
  {
    number: '05',
    tabTitle: 'AI & Automation',
    title: 'AI & Automation Integration',
    icon: Cpu,
    summary: 'Integrate custom LLM models, vector search RAG, and autonomous workflow swarms.',
    details: [
      'OpenAI (GPT-4o), Claude & Gemini API integration',
      'Custom RAG knowledge bases & vector search indexing',
      'Autonomous multi-agent AI swarms (CrewAI / LangGraph)',
      'n8n & Make automated API workflow triggers'
    ],
  },
  {
    number: '06',
    tabTitle: 'QA & Security',
    title: 'QA & Security Audit',
    icon: ShieldCheck,
    summary: 'Rigorous multi-layer testing, vulnerability auditing, and performance profiling.',
    details: [
      'Automated unit, integration & end-to-end testing',
      'Cross-browser & mobile device compatibility QA',
      'Penetration testing & SSL security compliance',
      'High-throughput load testing & latency optimization'
    ],
  },
  {
    number: '07',
    tabTitle: 'Deploy & Scale',
    title: 'Deploy & Scale',
    icon: Rocket,
    summary: 'Automated CI/CD cloud deployment, 24/7 telemetry monitoring, and continuous scaling.',
    details: [
      'Vercel & AWS cloud infrastructure deployment',
      'GitHub Actions automated CI/CD shipping pipelines',
      'Real-time Sentry error tracking & analytics telemetry',
      'Post-launch SLA support, maintenance & feature scaling'
    ],
  },
];

interface ProcessSectionProps {
  hideHeader?: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ hideHeader = false }) => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTabRef = useRef<HTMLDivElement>(null);

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
        const step = Math.min(6, Math.floor(progress * 7));
        setActiveStep(step);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (scrollTabRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollTabRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-16 sm:py-24 bg-[#08131C] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-[10px] sm:text-xs font-mono font-semibold tracking-widest uppercase"
            >
              OUR 7-STEP METHODOLOGY
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              7 Steps To Product Excellence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-sm sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto leading-relaxed"
            >
              A battle-tested 7-stage engineering framework for building ambitious digital products.
            </motion.p>
          </div>
        )}

        {/* MOBILE STEP SWITCHER CONTROL (DISPLAYED ON PHONES) */}
        <div className="md:hidden mb-8 max-w-md mx-auto p-4 rounded-2xl bg-[#050A0F] border border-cyan-500/30 flex items-center justify-between gap-3 shadow-lg">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 6))}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 font-bold active:scale-95 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          <div className="text-center font-mono">
            <span className="text-[11px] text-cyan-400 block uppercase tracking-wider font-semibold">
              STEP {processSteps[activeStep].number} OF 07
            </span>
            <span className="text-xs text-white font-bold block truncate max-w-[150px]">
              {processSteps[activeStep].tabTitle}
            </span>
          </div>

          <button
            onClick={() => setActiveStep((prev) => (prev < 6 ? prev + 1 : 0))}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 font-bold active:scale-95 transition-all"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* DESKTOP & TABLET 7-STEP TAB STRIP */}
        <div className="hidden md:flex justify-center mb-12 max-w-5xl mx-auto overflow-x-auto no-scrollbar">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#050A0F] p-2 rounded-2xl border border-white/10 backdrop-blur-xl">
            {processSteps.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeStep === idx
                    ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="font-mono text-xs font-extrabold">{step.number}</span>
                <span>{step.tabTitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* DYNAMIC PROGRESS BAR LINE */}
        <div className="relative mb-12 hidden md:block max-w-4xl mx-auto">
          <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              animate={{ width: `${((activeStep + 1) / 7) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* ACTIVE STAGE CARD DISPLAY (FULL RESPONSIVE LAYOUT FOR MOBILE & TABLET) */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#050A0F] border border-cyan-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Number & Summary */}
              <div className="md:col-span-7 space-y-5 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-3xl sm:text-4xl font-mono font-black text-cyan-400">
                    {processSteps[activeStep].number}
                  </span>
                  <div className="h-6 sm:h-8 w-px bg-white/10" />
                  <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {processSteps[activeStep].title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-lg leading-relaxed font-normal">
                  {processSteps[activeStep].summary}
                </p>

                <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10">
                  <span className="text-[10px] sm:text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold block">
                    STAGE DELIVERABLES & ACTIVITIES
                  </span>
                  {processSteps[activeStep].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Stage Graphic */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  {React.createElement(processSteps[activeStep].icon, {
                    className: 'w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 animate-pulse',
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
