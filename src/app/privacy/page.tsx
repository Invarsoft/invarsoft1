'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050A0F] text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>LEGAL DOCUMENTATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400 text-sm font-mono">Last Updated: January 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 text-base leading-relaxed p-8 rounded-3xl bg-[#08131C] border border-white/10 backdrop-blur-xl">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Information Collection</h2>
            <p>
              InvarSoft collects information provided directly by clients and visitors when submitting project inquiry forms, contacting us via email, or engaging our digital software services. This information may include your name, email address, phone number, company details, and project specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Use of Information</h2>
            <p>
              We utilize collected information solely to provide, maintain, and improve our digital products, process project inquiries, send service communications, and fulfill technical contracts. We do not sell or rent your personal data to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Data Security & Storage</h2>
            <p>
              InvarSoft implements industry-standard administrative, physical, and technical safeguards to protect client data against unauthorized access, loss, or alteration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Contact Information</h2>
            <p>
              If you have questions regarding this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@invarsoft.com" className="text-cyan-400 underline">
                info@invarsoft.com
              </a>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
