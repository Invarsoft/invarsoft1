'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Mail, Phone, Globe, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 bg-navy-950 text-white overflow-hidden grid-bg">
      {/* Volumetric Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[550px] rounded-full bg-blue-600/20 blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* DRAMATIC CTA BOX */}
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden border border-blue-500/50">
          
          {/* Cyber Corner Decals */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-400" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-400" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-400" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-400" />

          <span className="text-xs font-bold tracking-[0.25em] text-blue-300 uppercase block mb-3 font-display">
            {SITE_CONFIG.name} // LAUNCH PHASE ACTIVE
          </span>

          <h2 className="font-display text-4xl sm:text-7xl font-black text-white tracking-tight leading-tight mb-5">
            READY TO BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white text-glow">
              WHAT'S NEXT?
            </span>
          </h2>

          <p className="text-slate-100 text-lg sm:text-xl max-w-xl mx-auto mb-10 font-normal leading-relaxed">
            INVARSOFT IS ALMOST READY. Partner with us as we launch the next generation of digital infrastructure and software systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="group relative inline-flex items-center justify-center px-10 py-4.5 text-sm font-extrabold tracking-widest uppercase text-white bg-blue-600 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.8)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_65px_rgba(37,99,235,1)] hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET IN TOUCH
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href={SITE_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 text-sm font-bold tracking-wider uppercase text-slate-100 hover:text-white bg-navy-850 border border-blue-500/40 hover:border-blue-400 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.3)]"
            >
              <Instagram className="w-4.5 h-4.5 text-blue-400" />
              <span>FOLLOW {SITE_CONFIG.contact.instagram}</span>
            </a>
          </div>

        </div>

        {/* FUTURISTIC SYSTEM INFORMATION PANEL (CONTACT & METADATA) */}
        <div className="glass-panel rounded-2xl p-7 sm:p-9 border border-blue-500/40 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between border-b border-navy-800 pb-5 mb-7 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span className="text-white font-extrabold tracking-wider font-display">INVARSOFT SYSTEM INFRASTRUCTURE PANEL</span>
            </div>
            <span className="text-blue-300 font-bold">NODE_ID: #INV-2026-PRIMARY</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Website */}
            <a
              href={`https://${SITE_CONFIG.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-navy-850 border border-blue-500/30 hover:border-blue-400 hover:bg-navy-800 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] text-slate-300 uppercase font-semibold">PRIMARY DOMAIN</div>
                <div className="text-sm text-white group-hover:text-blue-300 font-extrabold truncate">
                  {SITE_CONFIG.contact.website}
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-navy-850 border border-blue-500/30 hover:border-blue-400 hover:bg-navy-800 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] text-slate-300 uppercase font-semibold">DIRECT EMAIL</div>
                <div className="text-sm text-white group-hover:text-blue-300 font-extrabold truncate">
                  {SITE_CONFIG.contact.email}
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-navy-850 border border-blue-500/30 hover:border-blue-400 hover:bg-navy-800 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] text-slate-300 uppercase font-semibold">DIRECT LINE</div>
                <div className="text-sm text-white group-hover:text-blue-300 font-extrabold truncate">
                  +1 ({SITE_CONFIG.contact.phone.slice(0,3)}) {SITE_CONFIG.contact.phone.slice(3,6)}-{SITE_CONFIG.contact.phone.slice(6)}
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={SITE_CONFIG.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-navy-850 border border-blue-500/30 hover:border-blue-400 hover:bg-navy-800 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] text-slate-300 uppercase font-semibold">SOCIAL CHANNEL</div>
                <div className="text-sm text-white group-hover:text-blue-300 font-extrabold truncate">
                  {SITE_CONFIG.contact.instagram}
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8 pt-5 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-2 font-medium">
            <div>© {new Date().getFullYear()} INVARSOFT INC. ALL RIGHTS RESERVED.</div>
            <div className="text-blue-400 font-bold">INNOVATE • BUILD • ELEVATE</div>
          </div>
        </div>

      </div>
    </section>
  );
};
