'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL DOCUMENTATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="text-slate-400 text-sm font-mono">Last Updated: January 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 text-base leading-relaxed p-8 rounded-3xl bg-[#08131C] border border-white/10 backdrop-blur-xl">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing the InvarSoft website or engaging InvarSoft for software, design, or digital solutions development, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise specified in a custom Master Services Agreement, all custom deliverables, codebases, and visual designs created for client projects transfer to the client upon final project payment completion.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Limitation of Liability</h2>
            <p>
              InvarSoft provides software engineering and digital services with professional care. In no event shall InvarSoft be liable for indirect, consequential, or special damages arising out of service use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
