'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, X, CheckCircle2, Layers, Globe, Zap } from 'lucide-react';

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
}

export const projectsData: ProjectItem[] = [
  {
    id: 'cbhanu',
    title: "C Bhanu's Interiors",
    category: 'Web Design / Development / Digital Experience',
    subtitle: 'High-End Luxury Interior Design Studio Website',
    description: "A bespoke, immersive digital experience designed for C Bhanu's Interiors. Featuring smooth parallax transitions, editorial layout architecture, high-resolution visual storytelling, and high-converting client inquiry workflows.",
    tags: ['Web Design', 'Development', 'Interactive 3D', 'Next.js'],
    image: '/media_1787164393235.jpg',
    liveUrl: 'https://cbhanuinteriors.com',
    featured: true,
    deliverables: [
      'Custom Editorial Layout System',
      'Sub-500ms Page Load Speeds',
      'Mobile-Optimized Touch Galleries',
      'Interactive Project Showcase',
      'Integrated WhatsApp & Direct Inquiry'
    ],
    servicesProvided: [
      'Bespoke Editorial Web Design',
      'Interactive 3D Showroom Gallery',
      'WhatsApp Instant Client Lead Booking',
      'Next.js 14 Speed Optimization',
      'Sanity CMS Content Management'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Experience',
    category: 'E-Commerce Development',
    subtitle: 'Premium Online Shopping Experience',
    description: 'High-performance digital storefront engineered for high conversion rates, instant filter states, seamless checkout integration, and custom headless commerce architecture.',
    tags: ['Shopify Custom', 'Next.js Commerce', 'UI/UX', 'Stripe'],
    image: '/media_1787164387436.jpg',
    liveUrl: 'https://invarsoft1-dnsa.vercel.app/websites',
    deliverables: [
      'Custom Product Configurator',
      'Sub-Second Checkout Flow',
      'Inventory API Synchronization',
      'SEO & Speed Optimization'
    ],
    servicesProvided: [
      'Headless Shopify Storefront',
      'Sub-Second Checkout Flow Integration',
      'Stripe & Global Payment Rails',
      'Automated Inventory Synchronization'
    ]
  },
  {
    id: 'business-site',
    title: 'Business Website',
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
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
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
    ]
  },
  {
    id: 'ai-solution',
    title: 'AI Solution',
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
              PORTFOLIO SHOWCASE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Selected Work
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg font-normal"
            >
              Click any project to view live website links and what we built for them.
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
                    <span>FLAGSHIP CASE STUDY</span>
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
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-black font-bold text-xs shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:bg-cyan-400 transition-all duration-300"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4" />
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
                  <span>VIEW DETAILS &amp; LIVE LINK</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* DETAILED PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#08131C] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl text-white my-8 space-y-8"
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
                  <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold block mb-2">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg font-normal">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Screenshot Image Preview */}
                <div className="rounded-2xl overflow-hidden max-h-96 bg-slate-900 border border-white/10 relative group">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-xs shadow-lg hover:bg-cyan-300 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Open Live Website: {selectedProject.liveUrl}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-cyan-400" />
                    <span>Project Overview</span>
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* WHAT WE PROVIDED THEM SECTION */}
                <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>What We Provided Them</span>
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

                {/* Technical Deliverables */}
                <div className="space-y-4">
                  <h4 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Engineering &amp; Technical Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5" />
                        <span className="text-xs text-slate-300 font-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xs shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all"
                  >
                    <span>Visit Live Website</span>
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
