'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Building2, Lightbulb, ArrowRight, Brain, ShoppingBag, Wrench, Palette, Cloud, Bot, ShieldCheck } from 'lucide-react';

export const solutionsData = [
  {
    title: 'Startups & Early-Stage MVPs',
    description: 'Build a strong digital foundation and launch fast.',
    details: 'Rapid MVP engineering, high-converting landing pages, brand UI design systems, scalable Next.js architecture, and investor-ready digital products.',
    icon: Rocket,
    highlights: ['Fast-Track MVP Launch', 'High-Converting Web Design', 'Scalable Tech Stack', 'Investor-Ready UI/UX']
  },
  {
    title: 'AI & Intelligent Automation Solutions',
    description: 'Deploy cutting-edge AI models, custom LLMs, and multi-agent swarms.',
    details: 'Enterprise LLM integrations (GPT-4o/Claude/Gemini), autonomous multi-agent AI swarms (CrewAI), RAG knowledge bases, and automated n8n/Make workflow triggers.',
    icon: Brain,
    highlights: ['Custom RAG Knowledge Bases', 'Autonomous Multi-Agent Swarms', 'n8n & Make Workflow Triggers', 'NLP & Computer Vision Pipelines']
  },
  {
    title: 'E-Commerce & High-Converting Storefronts',
    description: 'Scalable e-commerce platforms engineered for revenue growth.',
    details: 'Headless Shopify & Next.js Commerce storefronts, sub-second checkout optimization, global payment gateways (Stripe/Paddle), and automated inventory synchronization.',
    icon: ShoppingBag,
    highlights: ['Headless Storefront Architecture', 'Sub-Second Checkout Flow', 'Stripe / Paddle Payment Rails', 'Automated Inventory & ERP Sync']
  },
  {
    title: 'Growing Businesses & Scale-Ups',
    description: 'Upgrade your digital presence and automate core operations.',
    details: 'Custom web application portals, automated workflow engines, operational analytics dashboards, and intelligent CRM & API integrations.',
    icon: TrendingUp,
    highlights: ['Custom Web Application Portals', 'Automated Operations Pipelines', 'Real-Time Analytics Dashboards', 'Intelligent CRM Integration']
  },
  {
    title: 'Custom Software & Enterprise Portals',
    description: 'Bespoke business software built around your exact operations.',
    details: 'Role-based client & partner portals, high-throughput microservice APIs, database schema design, and secure cloud backend architecture.',
    icon: Wrench,
    highlights: ['Role-Based Admin Dashboards', 'Scalable Microservice APIs', 'Secure Client Portals', 'High-Speed Database Architecture']
  },
  {
    title: 'UI/UX & Product Design Systems',
    description: 'Interfaces designed to make complex technology feel intuitive.',
    details: 'User research, wireframing, high-fidelity Figma design systems, dark/light theme tokens, and fluid Framer Motion micro-animations.',
    icon: Palette,
    highlights: ['Framer Motion Micro-Animations', 'High-Fidelity Figma Systems', 'User Research & Wireframing', 'Dark & Light Theme Tokens']
  },
  {
    title: 'Established Companies & Legacy Modernization',
    description: 'Modernize existing systems, codebases, and digital experiences.',
    details: 'Legacy system refactoring, cloud migration (AWS/Vercel), security auditing, compliance enforcement, and real-time error tracking.',
    icon: Building2,
    highlights: ['Legacy Code Refactoring', 'Cloud Security & Compliance', 'Enterprise Process Digitization', '24/7 Sentry Error Monitoring']
  },
  {
    title: 'Digital Transformation & Cloud Infrastructure',
    description: 'Cloud native infrastructure and automated CI/CD pipelines.',
    details: 'AWS & Vercel cloud deployment, Docker/Kubernetes container orchestration, automated GitHub Actions CI/CD, and Cloudflare edge CDN configuration.',
    icon: Cloud,
    highlights: ['AWS & Vercel Cloud Migration', 'Docker Container Orchestration', 'Automated CI/CD Shipping', 'Cloudflare Edge CDN Delivery']
  }
];

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="relative py-28 bg-[#050A0F] text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase"
          >
            TARGETED BUSINESS SOLUTIONS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Solutions For Modern Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg font-normal max-w-2xl mx-auto leading-relaxed"
          >
            From AI integration and E-Commerce storefronts to custom enterprise software and cloud transformation.
          </motion.p>
        </div>

        {/* 8 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((sol, index) => {
            const Icon = sol.icon;

            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative"
              >
                <div className="rounded-3xl p-8 sm:p-10 bg-[#08131C] border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] relative overflow-hidden">
                  
                  <div>
                    {/* Icon & Title Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 font-semibold tracking-wider">
                        0{index + 1} // SOLUTION
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">
                      {sol.title}
                    </h3>

                    <p className="text-cyan-400 text-sm font-semibold mb-4">
                      {sol.description}
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                      {sol.details}
                    </p>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                      {sol.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <span>EXPLORE SOLUTION</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
