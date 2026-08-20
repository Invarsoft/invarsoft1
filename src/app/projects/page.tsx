'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { FeaturedWork } from '@/components/FeaturedWork';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[#050A0F] text-white selection:bg-cyan-500 selection:text-black font-sans pt-20">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-[#08131C] border-b border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/40 px-3.5 py-1 rounded-full border border-cyan-500/30">
            PORTFOLIO &amp; SHOWCASE
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Selected Work
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            A glimpse into the websites, custom software, e-commerce storefronts, and AI solutions we create for ambitious clients.
          </p>
        </div>
      </div>

      <FeaturedWork />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
