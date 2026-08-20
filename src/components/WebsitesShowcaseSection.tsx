'use client';

import React, { useState } from 'react';
import { SAMPLE_WEBSITES, SampleWebsite } from '@/config/siteData';
import { InteractiveBrowserShowcase } from './InteractiveBrowserShowcase';
import { ExternalLink, Globe, Monitor, ArrowUpRight, Sparkles } from 'lucide-react';

export const WebsitesShowcaseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All', 'Corporate', 'Real Estate', 'Technology', 'E-commerce', 'Hospitality', 'Creative', 'AI'
  ];

  const filteredWebsites = activeCategory === 'All'
    ? SAMPLE_WEBSITES
    : SAMPLE_WEBSITES.filter((w) => w.category === activeCategory);

  return (
    <section id="websites" className="py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-700 uppercase">
              DIGITAL EXPERIENCES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              EXPLORE OUR DIGITAL EXPERIENCES.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Discover bespoke corporate platforms, immersive real-estate portals, and high-converting AI SaaS interfaces built by INVARSOFT.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-blue-600 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* STANDOUT 3D TILT SHOWCASE FEATURE */}
        <InteractiveBrowserShowcase />

        {/* 6 Sample Website Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredWebsites.map((web) => (
            <div
              key={web.id}
              className="group rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Browser Window Header */}
              <div className="bg-slate-200/80 px-4 py-2.5 border-b border-slate-300 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">
                  {web.category}
                </span>
              </div>

              {/* Website Preview Box */}
              <div className="p-6 bg-gradient-to-b from-white to-slate-50 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {web.title}
                  </h3>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: web.accentColor }} />
                </div>

                <p className="text-xs text-slate-500 font-medium">
                  {web.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {web.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {web.techBadges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-slate-600"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-4 bg-white border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">Sample Web Experience</span>
                <a
                  href={web.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>View Website &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
