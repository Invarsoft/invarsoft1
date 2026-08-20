'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { AISolutionsSection } from '@/components/AISolutionsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function AISolutionsPage() {
  return (
    <main className="relative min-h-screen bg-slate-900 text-white font-sans pt-20">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-slate-950 border-b border-slate-800 py-16 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
            ENTERPRISE INTELLIGENCE PIPELINES
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-3">
            AI That Works Beyond the Demo.
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto mt-2">
            Resilient, context-aware LLM pipelines, autonomous AI agents, RAG vector DB search engines, and real-time business automation.
          </p>
        </div>
      </div>

      <AISolutionsSection />
      <CTASection onStartProjectClick={() => window.location.href = '/contact'} />
      <Footer />
    </main>
  );
}
