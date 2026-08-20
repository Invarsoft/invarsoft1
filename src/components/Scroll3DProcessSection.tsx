'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Process3DCanvas } from './Process3DCanvas';
import {
  Compass,
  Layers,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Activity,
  Play,
  Pause
} from 'lucide-react';

export const Scroll3DProcessSection: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Research & Business Understanding',
      icon: Compass,
      description:
        'We understand your business, audience, goals and technical requirements to build a solid data-backed foundation.',
      details: ['Audience & Market Mapping', 'Competitor Intelligence', 'Technical Stack Audit'],
      visualType: 'discover'
    },
    {
      number: '02',
      title: 'STRATEGIZE',
      subtitle: 'Architecture & User Flow',
      icon: Layers,
      description:
        'We define the right strategy, structure, user flow, features and technology stack engineered for growth.',
      details: ['Information Architecture', 'User Flow Blueprints', 'Component Taxonomy'],
      visualType: 'strategize'
    },
    {
      number: '03',
      title: 'DESIGN',
      subtitle: 'Editorial UI/UX Systems',
      icon: Palette,
      description:
        'We create intuitive UI/UX that aligns with your brand and engages users with cinematic precision.',
      details: ['Figma Design Tokens', 'Responsive Mobile Views', 'Micro-Interactions'],
      visualType: 'design'
    },
    {
      number: '04',
      title: 'DEVELOP',
      subtitle: 'Full-Stack Engineering',
      icon: Code2,
      description:
        'We transform the design into clean, scalable and high-performance technology using Next.js 14 & TypeScript.',
      details: ['Next.js 14 App Router', 'Type-Safe Architecture', 'Sub-500ms Core Web Vitals'],
      visualType: 'develop'
    },
    {
      number: '05',
      title: 'TEST',
      subtitle: 'Rigorous Quality Control',
      icon: ShieldCheck,
      description:
        'We rigorously test performance, responsiveness, security and compatibility before pushing live.',
      checks: [
        'Performance ✓',
        'Responsive ✓',
        'Security ✓',
        'Browser Compatibility ✓',
        'Accessibility ✓'
      ],
      visualType: 'test'
    },
    {
      number: '06',
      title: 'DEPLOY',
      subtitle: 'Cloud Edge Launch',
      icon: Rocket,
      description:
        'We deploy your website to a reliable production environment for a smooth launch.',
      statusFlow: ['BUILD', 'DEPLOYING (99%...100%)', 'LIVE'],
      visualType: 'deploy'
    },
    {
      number: '07',
      title: 'OPTIMIZE',
      subtitle: 'Analytics & Maintenance',
      icon: Activity,
      description:
        'We monitor, improve and maintain your website so it remains fast, secure and effective.',
      metrics: ['Load Time: 0.38s', 'Core Vitals: 100/100', 'Uptime: 99.99%'],
      visualType: 'optimize'
    },
    {
      number: '08',
      title: 'GROW TOGETHER',
      subtitle: 'Built To Evolve',
      icon: TrendingUp,
      description:
        'We continue improving your digital experience with new features, optimization and long-term support.',
      finalTagline: 'BUILT TO EVOLVE.',
      visualType: 'grow'
    }
  ];

  // AUTOPLAY ENGINE
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev >= 0.98 ? 0 : prev + 0.003;
        const nextStep = Math.min(7, Math.floor(nextProgress * 8));
        setActiveStep(nextStep);
        return nextProgress;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Scroll Sync
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableHeight = rect.height - windowHeight;

      if (totalScrollableHeight <= 0) return;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const currentScroll = -rect.top;
        const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollableHeight));
        
        setIsAutoplay(false);
        setProgress(rawProgress);
        const stepIndex = Math.min(7, Math.floor(rawProgress * 8));
        setActiveStep(stepIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jumpToStep = (index: number) => {
    const targetProgress = index / 8;
    setProgress(targetProgress);
    setActiveStep(index);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableHeight = rect.height - windowHeight;
      const targetScrollTop = window.scrollY + rect.top + targetProgress * totalScrollableHeight;

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      });
    }
  };

  const currentStep = processSteps[activeStep];

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-slate-950 text-white min-h-[400vh]"
    >
      {/* Sticky Full-Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden pt-24 pb-8 px-6 sm:px-12 max-w-7xl mx-auto">
        
        {/* Top Header & Navigation Bar (Below Fixed Navbar) */}
        <div className="z-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pointer-events-auto">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3D PROCESS JOURNEY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight uppercase text-white">
              HOW WE BUILD <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">HIGH-PERFORMANCE WEBSITES.</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-2">
              From the first conversation to launch and continuous growth, every Invarsoft project follows a structured process.
            </p>
          </div>

          {/* Autoplay & Stage Selector Pill */}
          <div className="flex items-center gap-3 bg-slate-900/90 p-2 rounded-2xl border border-slate-800 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                isAutoplay
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/40'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {isAutoplay ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-white" />
                  <span>AUTOPLAYING</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>PLAY JOURNEY</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1 border-l border-slate-800 pl-2">
              {processSteps.map((step, idx) => (
                <button
                  key={step.number}
                  onClick={() => jumpToStep(idx)}
                  className={`w-8 h-8 rounded-full text-xs font-mono font-bold transition-all duration-300 flex items-center justify-center ${
                    activeStep === idx
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-110'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  title={step.title}
                >
                  {step.number}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3D WebGL Canvas Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Process3DCanvas progress={progress} activeStep={activeStep} />
        </div>

        {/* Active Stage Card Overlay (Left Positioned) */}
        <div className="z-20 pointer-events-auto max-w-xl">
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-blue-600/30 border border-blue-500/40 text-blue-400 font-mono font-bold text-base flex items-center justify-center">
                  {currentStep.number}
                </span>
                <div>
                  <div className="text-[11px] font-mono font-semibold text-blue-400 uppercase tracking-wider">
                    {currentStep.subtitle}
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-white tracking-wide">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <div className="text-[11px] font-mono font-bold text-slate-300 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isAutoplay ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
                <span>{Math.round(progress * 100)}% COMPLETE</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {currentStep.description}
            </p>

            {/* Custom Deliverables */}
            {currentStep.details && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                {currentStep.details.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    {item}
                  </span>
                ))}
              </div>
            )}

            {currentStep.checks && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                {currentStep.checks.map((check, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-xs font-mono text-emerald-300 font-semibold"
                  >
                    {check}
                  </span>
                ))}
              </div>
            )}

            {currentStep.statusFlow && (
              <div className="flex items-center gap-2 pt-2 border-t border-slate-800 font-mono text-xs text-slate-300">
                <span className="px-2.5 py-1 bg-slate-950 rounded border border-slate-800 text-slate-400">BUILD</span>
                <span>&rarr;</span>
                <span className="px-2.5 py-1 bg-amber-950/80 border border-amber-700/80 text-amber-300">DEPLOYING (99%...100%)</span>
                <span>&rarr;</span>
                <span className="px-2.5 py-1 bg-emerald-950 border border-emerald-700 text-emerald-400 font-bold animate-pulse">LIVE</span>
              </div>
            )}

            {currentStep.metrics && (
              <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-800 font-mono text-xs">
                {currentStep.metrics.map((metric, i) => (
                  <div key={i} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-blue-300 font-semibold">
                    {metric}
                  </div>
                ))}
              </div>
            )}

            {currentStep.finalTagline && (
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="font-display font-black text-lg text-emerald-400 tracking-widest uppercase">
                  {currentStep.finalTagline}
                </span>
                <span className="text-xs font-mono text-slate-400">Continuous Growth Support</span>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
