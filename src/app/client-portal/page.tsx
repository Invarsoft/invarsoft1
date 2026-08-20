'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { ClientPortalModal } from '@/components/ClientPortalModal';
import { Footer } from '@/components/Footer';

export default function ClientPortalPage() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white font-sans pt-20 flex flex-col justify-between">
      <Navbar />

      <div className="py-12 flex-1 flex items-center justify-center">
        <ClientPortalModal
          isOpen={true}
          onClose={() => window.location.href = '/'}
        />
      </div>

      <Footer />
    </main>
  );
}
