'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Layers, Globe, FileText } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projectReportsData, ProjectReport } from '@/data/projectDetails';

export const projectsList = Object.values(projectReportsData);

export const FeaturedWork: React.FC = () => {
  const router = useRouter();
  const featuredProject = projectsList[0];
  const gridProjects = projectsList.slice(1);

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
              Click any project to read the full 2,000+ word engineering development report or visit the live website in a fresh tab.
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
          onClick={() => router.push(`/projects/${featuredProject.id}`)}
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
                    {featuredProject.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.servicesProvided.slice(0, 4).map((tag, i) => (
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
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-black font-bold text-xs shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:bg-cyan-400 transition-all duration-300 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Read Full 2K+ Word Report &rarr;</span>
                  </Link>

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
              onClick={() => router.push(`/projects/${project.id}`)}
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

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 text-xs font-bold">
                  <Link
                    href={`/projects/${project.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-cyan-400 hover:underline flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Read Technical Report &rarr;</span>
                  </Link>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
