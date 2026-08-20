'use client';

import React from 'react';
import { PRINCIPLES_DATA } from '@/config/siteData';

export const WhyInvarsoftSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-700">
              06 • Core Differentiation
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Businesses Choose Invarsoft.
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            We operate as an embedded technology partner focused on measurable enterprise velocity, engineering rigor, and zero visual fluff.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRINCIPLES_DATA.map((prin) => (
            <div
              key={prin.number}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-300 space-y-4"
            >
              <span className="text-sm font-mono font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                {prin.number}
              </span>

              <h3 className="font-display text-xl font-bold text-slate-900">
                {prin.title}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {prin.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
