'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { WebsitesShowcaseSection } from '@/components/WebsitesShowcaseSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function WebsitesPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 font-sans pt-20">
      <Navbar />

      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-16 text-center space-y-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            DIGITAL WEB EXPERIENCES
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mt-2">
            Explore Our Digital Experiences.
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto mt-2">
            High-converting corporate websites, real estate portals, SaaS marketing platforms, and interactive WebGL experiences.
          </p>
        </div>
      </div>

      <WebsitesShowcaseSection />
      <CTASection onStartProjectClick={() => window.location.href = '/contact'} />
      <Footer />
    </main>
  );
}
