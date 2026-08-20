'use client';

import React, { useState } from 'react';
import { MagneticButton } from './MagneticButton';
import { ArrowRight, Sparkles, Code, Globe, Cpu, CheckCircle2, Monitor, Smartphone, ExternalLink, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreWorkClick?: () => void;
  onStartProjectClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWorkClick,
  onStartProjectClick,
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  const scrollToProcess = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    if (onStartProjectClick) {
      onStartProjectClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 tech-grid-light"
    >
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm text-xs font-semibold text-blue-700">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>Premium Web Architecture & Enterprise AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="font-mono text-[11px] text-slate-500">v2.4 Ready</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] uppercase">
              WE ENGINEER<br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                INTELLIGENCE.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              AI systems, software and digital experiences engineered for ambitious businesses.
            </p>

            {/* Small Technical Tagline Line */}
            <div className="pt-1 font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">
              AI &bull; SOFTWARE &bull; WEB &bull; AUTOMATION &bull; CLOUD
            </div>

            {/* CTA Buttons wrapped in MagneticButton */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <MagneticButton onClick={onExploreWorkClick || scrollToProcess}>
                <div className="group flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-300 active:scale-95">
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </MagneticButton>

              <MagneticButton onClick={scrollToContact}>
                <div className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 shadow-sm transition-all duration-200 active:scale-95">
                  <span>Start a Project &rarr;</span>
                </div>
              </MagneticButton>
            </div>

            {/* Value Props Bullet Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Editorial UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Sub-500ms Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Technical Debt</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Web Platform Preview Canvas (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl bg-white border border-slate-300 shadow-2xl overflow-hidden transition-all duration-300">
              
              {/* Browser Window Header Bar */}
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                <div className="flex-1 max-w-xs mx-3 bg-white rounded-lg px-3 py-1 border border-slate-200 text-[11px] font-mono text-slate-600 truncate text-center shadow-2xs">
                  https://invarsoft.com/platform
                </div>

                <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg">
                  <button
                    onClick={() => setDeviceView('desktop')}
                    className={`p-1 rounded ${deviceView === 'desktop' ? 'bg-white shadow-2xs text-blue-600' : 'text-slate-500'}`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`p-1 rounded ${deviceView === 'mobile' ? 'bg-white shadow-2xs text-blue-600' : 'text-slate-500'}`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Website Preview Canvas */}
              <div className={`p-6 sm:p-8 bg-slate-50 transition-all ${deviceView === 'mobile' ? 'max-w-xs mx-auto my-4 border border-slate-300 rounded-2xl shadow-md' : ''}`}>
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                    <div className="font-display font-extrabold text-sm text-slate-900 flex items-center gap-1.5">
                      <img src="/invarsoft-emblem.png" alt="Logo" className="w-5 h-5 object-contain" />
                      <span>INVARSOFT PLATFORM</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                      VERIFIED 100/100
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white space-y-2 shadow-sm">
                    <span className="text-[10px] font-mono text-blue-300 uppercase">Modern Web Platform</span>
                    <h4 className="font-display text-base font-bold">High-Converting Digital Experience</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Next.js 14 Server Actions, sub-second load times, and clean UI architecture.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <div className="font-bold text-sm text-slate-900">&lt; 0.4s</div>
                      <div className="text-[10px] text-slate-500 font-mono">Load Speed</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <div className="font-bold text-sm text-slate-900">99.99%</div>
                      <div className="text-[10px] text-slate-500 font-mono">System Uptime</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white border-t border-slate-200 text-center">
                <button
                  onClick={scrollToProcess}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Scroll-Driven Design Process</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
