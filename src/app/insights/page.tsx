'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { InsightsSection } from '@/components/InsightsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function InsightsPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 font-sans pt-20">
      <Navbar />

      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-16 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            TECHNICAL JOURNAL &amp; AI RESEARCH
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mt-2">
            Thinking About What's Next.
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto mt-2">
            Deep-dive technical articles, AI architectural breakdowns, and engineering insights written by the INVARSOFT core team.
          </p>
        </div>
      </div>

      <InsightsSection />
      <CTASection onStartProjectClick={() => window.location.href = '/contact'} />
      <Footer />
    </main>
  );
}
