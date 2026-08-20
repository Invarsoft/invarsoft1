'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  Palette,
  Code2,
  Cpu,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layout,
  Globe,
  Monitor,
  Smartphone
} from 'lucide-react';

export const ScrollProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      number: '01',
      id: 'discovery',
      title: 'Discovery & UX Strategy',
      subtitle: 'Mapping Business Goals & User Journeys',
      icon: Compass,
      color: 'blue',
      description:
        'We dive deep into your business objectives, target audience, competitive landscape, and data architecture to craft a comprehensive product blueprint before writing any code.',
      deliverables: [
        'User Persona & Journey Maps',
        'Information Architecture & Wireframes',
        'Technical Feasibility & Tech Stack Audit'
      ],
      previewType: 'wireframe'
    },
    {
      number: '02',
      id: 'design',
      title: 'Editorial UI Design & Systems',
      subtitle: 'Crafting Bespoke Visual Identities',
      icon: Palette,
      color: 'indigo',
      description:
        'Our design team creates modular, accessible UI systems and interactive component libraries with editorial-grade typography, smooth motion tokens, and full mobile responsiveness.',
      deliverables: [
        'Modular Figma Design System',
        'Responsive Desktop & Mobile Views',
        'Micro-Interactions & Physics Motion Specs'
      ],
      previewType: 'design-system'
    },
    {
      number: '03',
      id: 'engineering',
      title: 'Full-Stack Web Engineering',
      subtitle: 'Next.js 14, TypeScript & Clean Code',
      icon: Code2,
      color: 'violet',
      description:
        'Engineers build modular, high-performance web platforms using Next.js 14 App Router, React Server Components, and clean TypeScript practices with sub-500ms page load speeds.',
      deliverables: [
        'Next.js 14 App Router & SSR',
        'Type-Safe TypeScript Architecture',
        'Sub-500ms Core Web Vitals Optimization'
      ],
      previewType: 'code'
    },
    {
      number: '04',
      id: 'ai-integration',
      title: 'AI & API Integration',
      subtitle: 'Connecting Intelligent Workflows',
      icon: Cpu,
      color: 'cyan',
      description:
        'We integrate context-aware LLMs, vector search (RAG), custom AI agents, and enterprise API orchestration pipelines directly into your web application for real business automation.',
      deliverables: [
        'Pinecone / Qdrant RAG Vector DB',
        'Autonomous AI Agent Microservices',
        'Secure REST & GraphQL API Integration'
      ],
      previewType: 'ai-flow'
    },
    {
      number: '05',
      id: 'launch',
      title: 'QA, Security & Global Launch',
      subtitle: 'Rigorous Testing & Edge Deployment',
      icon: Rocket,
      color: 'emerald',
      description:
        'Comprehensive security audits, WCAG AA accessibility compliance verification, load testing, and zero-downtime deployment across global Vercel & AWS edge PoPs.',
      deliverables: [
        'Penetration & Security Audit',
        'WCAG AA Accessibility Verification',
        'Global Edge Deployment (24 PoPs) • 99.99% SLA'
      ],
      previewType: 'launch'
    }
  ];

  // Scroll observer to update active step based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const elements = sectionRef.current.querySelectorAll('.process-step-item');
      elements.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.25) {
          setActiveStep(idx);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (idx: number) => {
    setActiveStep(idx);
    const element = document.getElementById(`process-step-${idx}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white border-b border-slate-200/80 relative">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 tech-grid-light opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-700">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Scroll-Driven Process Timeline</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How We Design & Build Websites.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our proven 5-stage website design and software development methodology engineered for high conversion, sub-second performance, and business scale.
          </p>
        </div>

        {/* Scroll Process Container (Sticky Sidebar + Scrollable Step Items) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky Process Timeline Index (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-3 hidden lg:block">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                Design Process Timeline
              </div>
              <div className="space-y-1.5">
                {processSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.id}
                      onClick={() => scrollToStep(idx)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 font-bold'
                          : 'text-slate-600 hover:bg-white hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`text-xs font-mono font-bold ${isActive ? 'text-blue-200' : 'text-blue-600'}`}>
                          {step.number}
                        </span>
                        <Icon className="w-4 h-4" />
                        <span className="text-xs">{step.title}</span>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 transform transition-transform ${isActive ? 'translate-x-0.5' : 'opacity-0'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Progress Bar indicator */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SCROLL PROGRESS</span>
                <span className="text-blue-400 font-bold">STAGE {activeStep + 1} OF 5</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / 5) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Scroll-Triggered Process Stage Cards (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  id={`process-step-${idx}`}
                  key={step.id}
                  className={`process-step-item rounded-3xl p-8 sm:p-10 transition-all duration-500 border ${
                    isActive
                      ? 'bg-white border-blue-400 shadow-2xl shadow-blue-500/10 scale-[1.01]'
                      : 'bg-slate-50 border-slate-200 opacity-85'
                  }`}
                >
                  
                  {/* Step Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-lg ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                          : 'bg-slate-200 text-slate-700'
                      }`}>
                        {step.number}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-blue-600 uppercase">
                          {step.subtitle}
                        </span>
                        <h3 className="font-display text-2xl font-extrabold text-slate-900 mt-0.5">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                      <Icon className="w-4 h-4 text-blue-600" />
                      <span>PHASE {idx + 1}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Interactive Visual Preview Box per Step */}
                  <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 text-white p-6 shadow-inner">
                    {step.previewType === 'wireframe' && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between text-blue-400 pb-2 border-b border-slate-800">
                          <span>// UX WIREFRAME ARCHITECTURE MAP</span>
                          <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">APPROVED</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                            <Layout className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                            <span className="text-[11px] text-slate-200">Header &amp; Nav</span>
                          </div>
                          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                            <Sparkles className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
                            <span className="text-[11px] text-slate-200">Hero &amp; Visual</span>
                          </div>
                          <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                            <Globe className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                            <span className="text-[11px] text-slate-200">Conversion CTAs</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {step.previewType === 'design-system' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-indigo-400 font-mono text-xs pb-2 border-b border-slate-800">
                          <span>// EDITORIAL DESIGN SYSTEM TOKENS</span>
                          <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">FIGMA TOKENS</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
                            <span className="w-3 h-3 rounded-full bg-blue-600" />
                            <span className="font-mono text-slate-200">#2563EB (Primary)</span>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
                            <span className="w-3 h-3 rounded-full bg-slate-900 border border-slate-600" />
                            <span className="font-mono text-slate-200">#0F172A (Charcoal)</span>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
                            <span className="font-mono font-bold text-indigo-400">Inter / Jakarta</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {step.previewType === 'code' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-violet-400 pb-2 border-b border-slate-800">
                          <span>// NEXT.JS 14 APP ROUTER CODE</span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">LOAD &lt; 0.4s</span>
                        </div>
                        <pre className="text-violet-300 leading-relaxed text-[11px]">
                          {`export default async function Page() {
  const data = await getWebsiteData();
  return <WebsitePlatform content={data} priority="high" />;
}`}
                        </pre>
                      </div>
                    )}

                    {step.previewType === 'ai-flow' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-cyan-400 pb-2 border-b border-slate-800">
                          <span>// AI RAG &amp; LLM WORKFLOW PIPELINE</span>
                          <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">CONNECTED</span>
                        </div>
                        <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between text-xs">
                          <span>User Query &rarr; Pinecone Vector Search &rarr; LLM Response</span>
                          <span className="text-emerald-400 font-bold">99.4% Accuracy</span>
                        </div>
                      </div>
                    )}

                    {step.previewType === 'launch' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-emerald-400 pb-2 border-b border-slate-800">
                          <span>// PRODUCTION EDGE DEPLOYMENT VERIFIED</span>
                          <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">99.99% SLA</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-800 p-3 rounded-xl border border-slate-700 text-xs">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            Live on Global Edge Network (24 PoPs)
                          </span>
                          <span className="text-emerald-400 font-bold">100/100 Core Web Vitals</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Deliverables Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                      Stage Deliverables &amp; Verification
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {step.deliverables.map((del, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
