'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FinalCTASection } from '@/components/FinalCTASection';
import { projectReportsData } from '@/data/projectDetails';
import { ArrowLeft, ExternalLink, Globe, CheckCircle2, Zap, Sparkles, HeartHandshake, ShieldCheck, Layers, Clock, MapPin, Building2, BarChart3, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectReportPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = (params?.id as string) || 'cbhanu';

  const report = projectReportsData[projectId] || projectReportsData['cbhanu'];

  return (
    <main className="relative min-h-screen bg-[#050A0F] text-white selection:bg-cyan-500 selection:text-black font-sans pt-20">
      <Navbar />

      {/* Hero Banner Header */}
      <section className="relative bg-[#08131C] border-b border-white/10 py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/projects" className="hover:text-cyan-400 transition-colors">Portfolio</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-400 font-semibold">{report.title}</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">
              EXECUTIVE TECHNICAL REPORT &amp; CASE STUDY
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {report.title}
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed">
              {report.subtitle}
            </p>
          </div>

          {/* Quick Metadata Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 max-w-4xl">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">CLIENT</span>
                <span className="text-xs font-bold text-white">{report.clientName}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">LOCATION</span>
                <span className="text-xs font-bold text-white">{report.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">TIMELINE</span>
                <span className="text-xs font-bold text-white">{report.timeline}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">LIVE WEBSITE</span>
                <a
                  href={report.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Open Live Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={report.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Live Website: {report.liveUrl}</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => router.push('/projects')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 font-semibold text-xs transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </button>
          </div>

        </div>
      </section>

      {/* Main Cover Image Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-900 max-h-[500px] relative">
          <img
            src={report.image}
            alt={report.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A0F] via-transparent to-transparent" />
        </div>
      </section>

      {/* COMPREHENSIVE REPORT CONTENT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* 1. EXECUTIVE SUMMARY & CLIENT OVERVIEW */}
        <div className="space-y-4 p-8 rounded-3xl bg-[#08131C] border border-white/10 shadow-xl">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4" />
            <span>1. Executive Summary &amp; Client Overview</span>
          </div>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
            {report.executiveSummary}
          </p>
        </div>

        {/* 2. CLIENT CHALLENGES */}
        <div className="space-y-4 p-8 rounded-3xl bg-[#08131C] border border-white/10 shadow-xl">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>2. Challenges &amp; Bottlenecks Identified</span>
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
            {report.clientChallenge}
          </p>
        </div>

        {/* 3. HOW WE PLANNED THE PROJECT */}
        <div className="space-y-6 p-8 rounded-3xl bg-[#08131C] border border-white/10 shadow-xl">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>3. How We Planned the Project</span>
          </div>
          <p className="text-slate-200 text-base leading-relaxed">
            {report.planningAndStrategy.overview}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {report.planningAndStrategy.phases.map((phase, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-cyan-400 block uppercase">
                  {phase.title}
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. OUR 7-STEP METHODOLOGY APPLIED */}
        <div className="space-y-8 p-8 rounded-3xl bg-[#08131C] border border-cyan-500/30 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block">
              OUR BATTLE-TESTED METHODOLOGY
            </span>
            <h3 className="text-3xl font-extrabold text-white">
              4. The 7-Step InvarSoft Process Applied
            </h3>
            <p className="text-slate-300 text-sm">
              How every phase of our 7-step engineering framework was customized for {report.title}.
            </p>
          </div>

          <div className="space-y-6">
            {report.sevenStepExecution.map((step) => (
              <div key={step.number} className="p-6 rounded-2xl bg-[#050A0F] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-mono font-black text-cyan-400">{step.number}</span>
                    <h4 className="text-lg font-bold text-white">{step.title}</h4>
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 uppercase">
                    STAGE {step.number}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm font-normal">
                  {step.summary}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  {step.actions.map((act, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. STRATEGIC DESIGN & UX CHANGES WE SUGGESTED */}
        <div className="space-y-6 p-8 rounded-3xl bg-[#08131C] border border-white/10 shadow-xl">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>5. Strategic Design &amp; UX Changes We Suggested</span>
          </div>
          <div className="space-y-4">
            {report.suggestedChangesAndImpact.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-red-400 uppercase font-bold block mb-1">
                      ISSUE IDENTIFIED
                    </span>
                    <p className="text-xs text-slate-300">{item.issueIdentified}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">
                      OUR RECOMMENDATION
                    </span>
                    <p className="text-xs text-slate-300">{item.ourRecommendation}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Business Impact:</span>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-500/30">
                    🚀 {item.businessImpact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CLIENT TRUST & FIRST-REVIEW FINALIZATION */}
        <div className="space-y-4 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/50 via-blue-950/30 to-transparent border border-cyan-500/40 shadow-2xl">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-5 h-5 text-cyan-400" />
            <span>6. Client Trust &amp; First-Review Design Finalization</span>
          </div>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic font-normal">
            "{report.clientTrustStory}"
          </p>
        </div>

        {/* 7. TECHNICAL GUIDANCE PROVIDED */}
        <div className="space-y-6 p-8 rounded-3xl bg-[#08131C] border border-white/10 shadow-xl">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>7. Technical Guidance &amp; Architecture Provided</span>
          </div>
          <div className="space-y-4">
            {report.technicalGuidanceAndArchitecture.map((arch, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h4 className="text-sm font-bold text-white font-mono">{arch.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{arch.content}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {arch.highlights.map((h, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. RESULTS AND METRICS */}
        <div className="space-y-6 p-8 rounded-3xl bg-[#08131C] border border-cyan-500/30 shadow-xl">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4" />
            <span>8. Key Measurable Results &amp; Impact</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {report.resultsAndMetrics.map((res, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#050A0F] border border-white/10 text-center space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono block">{res.metric}</span>
                <span className="text-xs font-bold text-white block">{res.label}</span>
                <span className="text-[11px] text-slate-400 block">{res.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL LIVE SITE BUTTON */}
        <div className="pt-8 text-center space-y-4">
          <a
            href={report.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all duration-300"
          >
            <Globe className="w-5 h-5" />
            <span>Open Live Website: {report.liveUrl}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div>
            <Link href="/projects" className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors">
              &larr; Return to All Portfolio Case Studies
            </Link>
          </div>
        </div>

      </section>

      <FinalCTASection />
      <Footer />
    </main>
  );
}
