'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, X, CheckCircle2, Layers, Globe, Zap, ShieldCheck, HeartHandshake, FileText, Sparkles } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  featured?: boolean;
  deliverables: string[];
  servicesProvided: string[];
  planningStrategy: string;
  suggestedChanges: string[];
  clientTrustNote: string;
  technicalGuidance: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'cbhanu',
    title: "C Bhanu's Interiors",
    category: 'Web Design / Development / Digital Experience',
    subtitle: 'High-End Luxury Interior Design Studio Platform',
    description: "A bespoke, editorial digital experience engineered for C Bhanu's Interiors (cbhanusinteriors.in). Featuring smooth visual storytelling, high-resolution interior portfolio galleries, instant client consultation workflows, and mobile performance optimization.",
    tags: ['Web Design', 'Development', 'Editorial Layout', 'Next.js'],
    image: '/cbhanu-cover.webp',
    liveUrl: 'https://cbhanusinteriors.in',
    featured: true,
    deliverables: [
      'Custom Editorial Design System',
      'Sub-500ms Core Web Vitals Speed',
      'Mobile-Optimized Touch Galleries',
      'Interactive Portfolio Showcase',
      'Integrated WhatsApp & Direct Consultation'
    ],
    servicesProvided: [
      'Bespoke Luxury Editorial Web Design',
      'Interactive Interior Portfolio Showcase',
      'WhatsApp Instant Client Lead Booking',
      'Next.js 14 Speed Optimization',
      'Sanity / Headless CMS Content Control'
    ],
    planningStrategy: "We initiated the project with an in-depth Discovery & Brand Architecture audit. We analyzed user navigation paths for high-end luxury interior clients, mapping out intuitive project gallery filters, editorial typography hierarchies, and dynamic booking flows.",
    suggestedChanges: [
      "Replaced slow legacy image carousels with sub-500ms progressive WebP image loading.",
      "Introduced high-converting editorial project storyboards that showcase interior craftsmanship.",
      "Integrated 1-click WhatsApp instant booking triggers directly into mobile hero screens.",
      "Implemented a headless CMS structure allowing effortless client portfolio updates without developer intervention."
    ],
    clientTrustNote: "The client placed absolute trust in InvarSoft's technical authority and design direction. When we presented our complete architectural wireframes and high-fidelity prototype, the client was blown away by the sleek aesthetic and finalized our design on the very first review with zero revisions required.",
    technicalGuidance: [
      "Engineered using Next.js 14 App Router for lightning-fast server-side rendering (SSR).",
      "Deployed on Vercel Edge Network with Cloudflare CDN for zero-latency image delivery.",
      "Integrated Sanity Headless CMS for structured content governance.",
      "Configured GA4 conversion telemetry to track high-value client inquiry submissions."
    ]
  },
  {
    id: 'invarthings',
    title: 'InvarThings',
    category: 'IoT / Smart Tech / E-Commerce Platform',
    subtitle: 'Next-Generation Smart Hardware & Technology Platform',
    description: 'A cutting-edge technology and smart solutions platform built for InvarThings (invarthings.com). Designed for seamless product exploration, high-throughput e-commerce transactions, automated inventory management, and intuitive user experiences.',
    tags: ['E-Commerce', 'Smart Tech', 'Next.js', 'Stripe API'],
    image: '/invarthings-cover.png',
    liveUrl: 'https://invarthings.com',
    deliverables: [
      'High-Speed E-Commerce Architecture',
      'Sub-Second Checkout Flow Integration',
      'Real-Time Product API & Inventory Sync',
      'Mobile-First Shopping Experience',
      'Global Payment Gateway Setup'
    ],
    servicesProvided: [
      'Custom E-Commerce Platform Architecture',
      'Headless Product Configurator',
      'Stripe & Global Payment Gateway Setup',
      'Automated Inventory Synchronization',
      'High-Speed Cloud Hosting & CDN'
    ],
    planningStrategy: "We designed the end-to-end e-commerce architecture for InvarThings from scratch, planning high-throughput product catalog indexing, real-time inventory management, and intuitive category navigation.",
    suggestedChanges: [
      "Architected a headless e-commerce storefront for instant sub-second page transitions.",
      "Integrated 1-click multi-currency checkout rails via Stripe API.",
      "Implemented automated inventory synchronization & order dispatch webhooks."
    ],
    clientTrustNote: "The client relied fully on InvarSoft's technical advisory. We guided them on database choices, API protocols, and UI design patterns. The client embraced our recommendations with complete trust and approved our design vision instantly.",
    technicalGuidance: [
      "Built with Next.js Commerce, React, and Tailwind CSS for rapid sub-second rendering.",
      "Integrated Stripe & global payment gateways with automated webhooks.",
      "Configured Redis caching for real-time stock availability and high-concurrency cart states."
    ]
  },
  {
    id: 'business-site',
    title: 'Corporate Business Platform',
    category: 'Corporate Digital Presence',
    subtitle: 'Modern Corporate Technology Web Platform',
    description: 'Sophisticated corporate platform built to project enterprise authority, engage decision makers, and articulate complex service offerings with clarity.',
    tags: ['Corporate Web', 'React', 'TypeScript', 'Tailwind'],
    image: '/media_1787164334370.jpg',
    liveUrl: 'https://invarsoft1-dnsa.vercel.app/websites',
    deliverables: [
      'Multi-Section Product Architecture',
      'Content Management System',
      'Lead Attribution Tracking',
      'Enterprise Security Compliance'
    ],
    servicesProvided: [
      'Enterprise Authority Branding',
      'Multi-Section Product Architecture',
      'Lead Attribution & GA4 Analytics',
      'Enterprise Cloud Hosting & SSL'
    ],
    planningStrategy: "Mapped corporate stakeholder requirements, defining modular content blocks to showcase services, enterprise case studies, and compliance certifications.",
    suggestedChanges: [
      "Replaced dense text blocks with interactive card layouts and visual hierarchy.",
      "Added conversion-focused CTA triggers throughout service pages."
    ],
    clientTrustNote: "The client trusted our digital positioning strategy and approved the site design and structure on initial presentation.",
    technicalGuidance: [
      "Built with Next.js, React, and Tailwind CSS.",
      "Optimized Core Web Vitals and security headers."
    ]
  },
  {
    id: 'custom-software',
    title: 'Enterprise Client Portal',
    category: 'Custom Software Development',
    subtitle: 'Business-Focused Web Application & Portal',
    description: 'Tailored enterprise portal empowering teams with streamlined task automation, real-time analytics dashboards, and role-based permissions.',
    tags: ['Web App', 'Node.js', 'PostgreSQL', 'Real-time API'],
    image: '/media_1787164326273.jpg',
    liveUrl: 'https://invarsoft1-dnsa.vercel.app/client-portal',
    deliverables: [
      'Role-Based Workspace Access',
      'Live Operational Dashboards',
      'Automated Data Workflows',
      'Scalable Cloud Infrastructure'
    ],
    servicesProvided: [
      'Role-Based Workspace Access (RBAC)',
      'Real-Time Operational Analytics Dashboard',
      'PostgreSQL & Redis Backend Architecture',
      'Automated Enterprise Operations Workflows'
    ],
    planningStrategy: "Conducted technical workflow mapping to automate client document sharing, role-based security, and real-time status reporting.",
    suggestedChanges: [
      "Migrated manual email approvals to automated workspace status triggers.",
      "Created unified real-time analytics dashboard for operational clarity."
    ],
    clientTrustNote: "The executive team placed complete confidence in our security model and backend design, approving the system architecture immediately.",
    technicalGuidance: [
      "Node.js & Express backend microservices with PostgreSQL.",
      "JWT role-based authentication and SSL data encryption."
    ]
  },
  {
    id: 'ai-solution',
    title: 'AI Workflow Assistant',
    category: 'AI & Business Automation',
    subtitle: 'Intelligent Digital Workflow & Assistant',
    description: 'Custom AI integration automating customer support inquiries, document parsing, and operational data retrieval for high efficiency.',
    tags: ['AI Integration', 'Python', 'LLM Agents', 'Automation'],
    image: '/media_1787164327526.jpg',
    liveUrl: 'https://invarsoft1-dnsa.vercel.app/ai-solutions',
    deliverables: [
      'Intelligent Knowledge Base Bot',
      'Document Data Extraction Engine',
      'CRM API Integration',
      'Continuous Learning Pipeline'
    ],
    servicesProvided: [
      'Custom RAG Vector Search Chatbot',
      'Document Data Extraction Engine',
      'OpenAI & Claude API Integration',
      'HubSpot & Salesforce CRM Lead Sync'
    ],
    planningStrategy: "Designed vector search indexing and prompt engineering pipelines to automate repetitive customer service inquiries.",
    suggestedChanges: [
      "Implemented Retrieval-Augmented Generation (RAG) to ensure 100% accurate, non-hallucinating responses.",
      "Synced AI bot interactions directly into CRM lead tables."
    ],
    clientTrustNote: "The client entrusted us with their core customer inquiry flow. Our prompt pipeline exceeded expectation and was finalized instantly.",
    technicalGuidance: [
      "Python FastAPI serving vector search over Pinecone database.",
      "OpenAI GPT-4o API integration with fallback model routing."
    ]
  },
];

export const FeaturedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProject = projectsData[0];
  const gridProjects = projectsData.slice(1);

  return (
    <section id="work" className="relative py-20 sm:py-28 bg-[#050A0F] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase"
            >
              PORTFOLIO &amp; CLIENT CASE STUDIES
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Our Portfolio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg font-normal"
            >
              Click any project to read the full technical development report and open the live website in a fresh tab.
            </motion.p>
          </div>
        </div>

        {/* DOMINANT FEATURED PROJECT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 group cursor-pointer"
          onClick={() => setSelectedProject(featuredProject)}
        >
          <div className="relative rounded-3xl overflow-hidden bg-[#08131C] border border-white/10 shadow-2xl hover:border-cyan-400/50 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              
              {/* Image Banner Container */}
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[500px] overflow-hidden bg-slate-900">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08131C] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#08131C]" />
              </div>

              {/* Information Panel */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6 relative z-10 bg-[#08131C]/90 backdrop-blur-xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold mb-4">
                    <Layers className="w-3.5 h-3.5" />
                    <span>FEATURED CLIENT CASE STUDY</span>
                  </div>

                  <span className="block text-xs font-mono text-slate-400 tracking-wider uppercase mb-2">
                    {featuredProject.category}
                  </span>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 group-hover:text-cyan-400 transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-6">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(featuredProject);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-black font-bold text-xs shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:bg-cyan-400 transition-all duration-300 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Read Full Development Report</span>
                  </button>

                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 font-semibold text-xs transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </motion.div>

        {/* GRID OF OTHER PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-[#08131C] border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08131C] via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-400">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>READ FULL REPORT &amp; OPEN LIVE SITE</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* COMPREHENSIVE TECHNICAL DEVELOPMENT REPORT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#08131C] border border-cyan-500/40 p-6 sm:p-10 shadow-2xl text-white my-8 space-y-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold mb-3">
                    <FileText className="w-3.5 h-3.5" />
                    <span>FULL TECHNICAL DEVELOPMENT REPORT</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg font-normal">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Screenshot Image Preview with Live URL Overlay */}
                <div className="rounded-2xl overflow-hidden max-h-96 bg-slate-900 border border-white/10 relative group">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold text-xs shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:bg-cyan-300 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Visit Live Website: {selectedProject.liveUrl}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* 1. HOW WE PLANNED THE PROJECT */}
                <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>1. Project Planning &amp; Architectural Discovery</span>
                  </h4>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {selectedProject.planningStrategy}
                  </p>
                </div>

                {/* 2. STRATEGIC DESIGN CHANGES WE SUGGESTED */}
                <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>2. Strategic Design &amp; UX Changes We Suggested</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {selectedProject.suggestedChanges.map((change, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-medium">{change}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. CLIENT TRUST & FIRST-REVIEW FINALIZATION */}
                <div className="space-y-3 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/20 to-transparent border border-cyan-500/30">
                  <h4 className="text-sm font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                    <HeartHandshake className="w-5 h-5 text-cyan-400" />
                    <span>3. Client Trust &amp; First-Review Design Finalization</span>
                  </h4>
                  <p className="text-slate-200 text-sm leading-relaxed italic">
                    "{selectedProject.clientTrustNote}"
                  </p>
                </div>

                {/* 4. TECHNICAL GUIDANCE PROVIDED */}
                <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>4. Technical Guidance &amp; Engineering Execution</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {selectedProject.technicalGuidance.map((guide, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-slate-200 font-normal">{guide}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. WHAT WE PROVIDED THEM SUMMARY */}
                <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>5. Deliverables &amp; Services Provided</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.servicesProvided.map((serviceItem, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-medium">{serviceItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-bold text-xs hover:bg-white/10 transition-colors"
                  >
                    Close Report
                  </button>

                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
                  >
                    <span>Open Live Website ({selectedProject.liveUrl})</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
