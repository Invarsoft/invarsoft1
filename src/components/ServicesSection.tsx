'use client';

import React, { useState } from 'react';
import { SOLUTIONS_DATA, SolutionItem } from '@/config/siteData';
import { Terminal, Code2, Globe, Layers, Server, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectSolution?: (solution: SolutionItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectSolution }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Terminal className="w-6 h-6 text-blue-600" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-indigo-600" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-violet-600" />;
      case 'Cpu': return <Server className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      default: return <Terminal className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-700 uppercase">
              WHAT WE DO
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              WHAT WE DO.
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            We partner with growing and established enterprises to deliver high-performance software engineering, AI integrations, and digital platforms.
          </p>
        </div>

        {/* 6 Services Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((solution) => (
            <div
              key={solution.id}
              onMouseEnter={() => setActiveCard(solution.id)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative rounded-3xl bg-slate-50 border border-slate-200/90 p-8 transition-all duration-300 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Top Bar: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    {getIcon(solution.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 bg-white/80 px-2.5 py-1 rounded-full border border-slate-200/60">
                    {solution.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {solution.shortDesc}
                </p>

                {/* Feature Bullet points */}
                <ul className="space-y-2 mb-6 border-t border-slate-200/60 pt-4">
                  {solution.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  {solution.metrics}
                </span>

                <button
                  onClick={() => onSelectSolution && onSelectSolution(solution)}
                  className="flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
