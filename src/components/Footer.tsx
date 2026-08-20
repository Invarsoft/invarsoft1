'use client';

import React from 'react';
import Link from 'next/link';
import { InvarsoftLogo } from './InvarsoftLogo';
import { Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050A0F] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <InvarsoftLogo lightMode={false} />

            <div className="text-cyan-400 font-bold text-sm tracking-wide">
              Premium Design. Practical Pricing.
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Premium digital experiences, software and intelligent solutions for modern businesses.
            </p>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('work')} className="hover:text-cyan-400 transition-colors">
                  Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">
                  Web Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">
                  Software Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">
                  UI/UX Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">
                  E-Commerce
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">
                  AI Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-cyan-400 transition-colors">
                  Automation
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                Resources
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li>
                  <button onClick={() => scrollToSection('faq')} className="hover:text-cyan-400 transition-colors">
                    FAQs
                  </button>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                Contact
              </h4>
              <a href="tel:+917075399762" className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+91 70753 99762</span>
              </a>
              <a href="mailto:info@invarsoft.com" className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>info@invarsoft.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; 2026 InvarSoft. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
