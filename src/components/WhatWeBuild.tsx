'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Code2, Layout, ShoppingCart, Cpu, RefreshCw, ArrowRight, X, CheckCircle2, Sparkles, Layers, Zap } from 'lucide-react';
import Link from 'next/link';

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  includes: string[];
  deliverables: string[];
  techStack: string[];
  timeline: string;
}

export const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: 'Web Development',
    tagline: 'Premium websites engineered for performance, usability and conversion.',
    icon: Globe,
    description: 'We engineer bespoke, sub-second web platforms combining high-converting editorial layouts, 3D micro-interactions, and enterprise-grade Next.js architecture.',
    includes: [
      'Corporate websites',
      'Landing pages',
      'Interactive websites',
      '3D websites',
      'Web applications',
    ],
    deliverables: [
      'Sub-500ms Core Web Vitals Performance',
      'Fully Responsive Mobile & Tablet Layouts',
      'SEO Schema & OpenGraph Optimization',
      'Sanity / Strapi Headless CMS Integration',
      'Google Analytics 4 & Conversion Tracking'
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    timeline: '2 - 4 Weeks'
  },
  {
    number: '02',
    title: 'Software Development',
    tagline: 'Custom software built around the way your business actually works.',
    icon: Code2,
    description: 'Bespoke web applications, internal tools, role-based dashboards, and high-throughput microservice backends engineered for scalability.',
    includes: [
      'Web applications',
      'Dashboards',
      'Internal tools',
      'Business systems',
      'Custom platforms',
    ],
    deliverables: [
      'Role-Based Admin & Client Portals',
      'Real-Time WebSockets & Data Streaming',
      'PostgreSQL & Redis Caching Architecture',
      'REST & GraphQL API Endpoints',
      'Automated Testing & Security Audits'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Docker', 'Redis'],
    timeline: '4 - 8 Weeks'
  },
  {
    number: '03',
    title: 'UI/UX Design',
    tagline: 'Interfaces designed to make complex technology feel simple.',
    icon: Layout,
    description: 'User-centered design systems, interactive Figma wireframes, fluid micro-animations, and conversion-focused product interfaces.',
    includes: [
      'UX research',
      'Wireframes',
      'Design systems',
      'UI design',
      'Prototyping',
    ],
    deliverables: [
      'Complete Figma Component Design Systems',
      'High-Fidelity Interactive Prototypes',
      'User Experience & Conversion Mapping',
      'Dark & Light Mode UI Tokens',
      'Developer Handoff Specifications'
    ],
    techStack: ['Figma', 'Protopie', 'Design Tokens', 'Storybook', 'Framer'],
    timeline: '2 - 3 Weeks'
  },
  {
    number: '04',
    title: 'E-Commerce',
    tagline: 'Digital storefronts designed to convert visitors into customers.',
    icon: ShoppingCart,
    description: 'High-speed headless e-commerce platforms, Shopify custom storefronts, streamlined sub-second checkout, and automated inventory sync.',
    includes: [
      'Shopify',
      'Custom stores',
      'Product experiences',
      'Checkout optimization',
      'E-commerce integrations',
    ],
    deliverables: [
      'Headless Shopify Storefront Architecture',
      'Sub-Second Checkout Flow Optimization',
      'Stripe & Global Payment Gateway Integration',
      'Automated ERP & Inventory Sync',
      'Mobile-First Cart & Checkout UX'
    ],
    techStack: ['Shopify Liquid', 'Next.js Commerce', 'Stripe', 'GraphQL', 'Tailwind'],
    timeline: '3 - 6 Weeks'
  },
  {
    number: '05',
    title: 'AI & Automation',
    tagline: 'Intelligent systems that help businesses work faster and smarter.',
    icon: Cpu,
    description: 'Custom AI integrations, LLM knowledge base search (RAG), autonomous multi-agent swarms, and automated n8n workflow triggers.',
    includes: [
      'AI integrations',
      'Workflow automation',
      'AI assistants',
      'Business intelligence',
      'Intelligent workflows',
    ],
    deliverables: [
      'Custom RAG Vector Search Knowledge Bases',
      'OpenAI (GPT-4o), Claude & Gemini API Pipelines',
      'Autonomous Multi-Agent AI Swarms (CrewAI)',
      'n8n & Make Automated Workflow Triggers',
      '24/7 AI Customer Support Assistants'
    ],
    techStack: ['Python', 'LangChain', 'Pinecone', 'OpenAI', 'n8n', 'FastAPI'],
    timeline: '3 - 5 Weeks'
  },
  {
    number: '06',
    title: 'Digital Transformation',
    tagline: 'Modern technology systems that help businesses operate at the next level.',
    icon: RefreshCw,
    description: 'Legacy system modernization, cloud infrastructure migration, process digitization, and enterprise DevOps automation.',
    includes: [
      'Legacy modernization',
      'Cloud solutions',
      'Process digitization',
      'System integrations',
      'Technology strategy',
    ],
    deliverables: [
      'AWS & Vercel Cloud Migration Architecture',
      'Legacy Code Refactoring & Security Audit',
      'Automated CI/CD Shipping Pipelines',
      'Cloudflare Edge CDN Configuration',
      '24/7 Real-Time Sentry Error Monitoring'
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'GitHub Actions', 'Sentry'],
    timeline: '4 - 10 Weeks'
  },
];

export const WhatWeBuild: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-28 bg-[#050A0F] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase"
          >
            OUR CAPABILITIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            What We Build
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed"
          >
            From strategy to software, we turn ambitious ideas into powerful digital products.
          </motion.p>
        </div>

        {/* 6 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setSelectedService(service)}
                className="group relative cursor-pointer"
              >
                <div className="h-full rounded-2xl p-8 bg-[#08131C] border border-white/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] relative overflow-hidden">
                  
                  {/* Subtle Top Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest uppercase">
                        {service.number}
                      </span>
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:text-black group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-all duration-300">
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Tagline / Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                      {service.tagline}
                    </p>

                    {/* Includes Bullet List */}
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase font-semibold block mb-2">
                        INCLUDES
                      </span>
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer with Hover Arrow */}
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <span>EXPLORE SERVICE</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* DETAILED INTERACTIVE SERVICE MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#08131C] border border-cyan-500/40 p-6 sm:p-10 shadow-2xl text-white my-8 space-y-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  {React.createElement(selectedService.icon, { className: 'w-8 h-8' })}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold block mb-1">
                    SERVICE {selectedService.number} // CAPABILITY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    {selectedService.title}
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base font-normal mt-1">
                    {selectedService.tagline}
                  </p>
                </div>
              </div>

              {/* Overview */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Capabilities &amp; Value Overview</span>
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Deliverables Grid */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Engineering Deliverables &amp; Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Tech Stack & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                    RECOMMENDED TECH STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                    TYPICAL DELIVERY TIMELINE
                  </span>
                  <span className="inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono font-bold text-cyan-400">
                    ⏱️ {selectedService.timeline}
                  </span>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-bold text-xs hover:bg-white/10 transition-colors"
                >
                  Close Window
                </button>

                <Link
                  href="/contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all"
                >
                  <span>Inquire About {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
