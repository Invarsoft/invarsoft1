'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { AboutInvarsoft } from '@/components/AboutInvarsoft';
import { WhyInvarsoft } from '@/components/WhyInvarsoft';
import { TechnologySection } from '@/components/TechnologySection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#050A0F] text-white selection:bg-cyan-500 selection:text-black font-sans pt-20">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#08131C] border-b border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/40 px-3.5 py-1 rounded-full border border-cyan-500/30">
            ABOUT INVARSOFT
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Technology With Purpose.
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            InvarSoft is a digital technology company focused on building premium websites, custom software products, and intelligent digital solutions.
          </p>
        </div>
      </div>

      <AboutInvarsoft />
      <WhyInvarsoft />
      <TechnologySection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
