'use client';

import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectCaseStudy } from '@/config/siteData';
import { ArrowUpRight, CheckCircle, Filter, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'AI Solutions', 'Software', 'Web Platforms', 'Digital Products'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Category Filters Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-700 uppercase">
              SELECTED WORK
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Digital products.<br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Real results.</span>
            </h2>
            <p className="text-slate-600 text-base">
              Showcasing actual Invarsoft projects engineered for scalability, speed, and real business impact.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Project Cards */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    Project 0{idx + 1} • {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">• {project.industry}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-[11px] font-mono text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics Highlights */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  {project.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="font-display text-base sm:text-lg font-bold text-slate-900">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-mono text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Case Study Trigger CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group"
                  >
                    <span>View Case Study &rarr;</span>
                  </button>
                </div>
              </div>

              {/* Right Image / Mockup Card (5 cols) */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white space-y-4 border border-slate-700 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">
                    {project.client}
                  </span>
                </div>

                <div className="py-8 text-center space-y-2">
                  <div className="font-display font-bold text-lg text-blue-400">
                    {project.title}
                  </div>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto">
                    {project.strategy}
                  </p>
                </div>

                <button
                  onClick={() => onOpenCaseStudy(project)}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Case Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
