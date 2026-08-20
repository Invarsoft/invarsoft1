'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { DataLandscape3D } from './DataLandscape3D';
import { MagneticButton } from './MagneticButton';

interface CTASectionProps {
  onStartProjectClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onStartProjectClick }) => {
  return (
    <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* 3D Abstract Data Landscape Canvas Backdrop */}
      <DataLandscape3D />

      {/* Dark Subtle Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-xs font-mono font-semibold text-blue-300 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>START A CONVERSATION</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
          HAVE AN IDEA<br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
            WORTH BUILDING?
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Let's turn your idea into a digital product, intelligent system or high-performance website.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <MagneticButton onClick={onStartProjectClick}>
            <div className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5">
              <span>Start a Project &rarr;</span>
            </div>
          </MagneticButton>

          <MagneticButton onClick={() => window.location.href = '/contact'}>
            <div className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <span>Talk to Our Expert &rarr;</span>
            </div>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};
