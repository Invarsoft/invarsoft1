'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroCinematic } from '@/components/HeroCinematic';
import { TrustStrip } from '@/components/TrustStrip';
import { WhatWeBuild } from '@/components/WhatWeBuild';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050A0F] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden font-sans">
      
      {/* Top Navigation */}
      <Navbar />

      {/* 1. Cinematic Background Hero */}
      <HeroCinematic
        onStartProjectClick={() => window.location.href = '/contact'}
        onExploreWorkClick={() => window.location.href = '/projects'}
      />

      {/* 2. Trust / Brand Strip */}
      <TrustStrip />

      {/* 3. High-Level Services Overview */}
      <WhatWeBuild />

      {/* 4. Call To Action */}
      <FinalCTASection />

      {/* 5. Footer */}
      <Footer />

    </main>
  );
}
