'use client';

import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';

export const CredibilityStrip: React.FC = () => {
  const techBadges = [
    { name: 'React', desc: 'Frontend Framework' },
    { name: 'Next.js 14', desc: 'Full-Stack SSR' },
    { name: 'Node.js', desc: 'Microservices' },
    { name: 'Python', desc: 'AI & Data ML' },
    { name: 'Enterprise AI', desc: 'RAG & Agents' },
    { name: 'Cloud Native', desc: 'AWS / GCP / Edge' },
    { name: 'APIs & GraphQL', desc: 'Integration Layer' },
    { name: 'Automation', desc: 'Workflow Engine' },
    { name: 'UI/UX Systems', desc: 'Editorial Design' },
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase">
            Proven Engineering & Capability
          </p>
          <h2 className="text-sm sm:text-base font-bold text-slate-800 mt-1 uppercase tracking-wide">
            Technology built for ambitious businesses.
          </h2>
        </div>

        {/* Tech Badges Grid */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {techBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{badge.name}</span>
            </div>
          ))}
        </div>

        {/* Credibility Key Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-slate-100 text-center">
          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              <AnimatedCounter value="50+" />
            </div>
            <div className="text-xs font-medium text-slate-500 mt-0.5">Intelligent Products Built</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              <AnimatedCounter value="99.99%" />
            </div>
            <div className="text-xs font-medium text-slate-500 mt-0.5">Production Architecture SLA</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              <AnimatedCounter value="15+" />
            </div>
            <div className="text-xs font-medium text-slate-500 mt-0.5">Global Industries Served</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              <AnimatedCounter value="<100ms" />
            </div>
            <div className="text-xs font-medium text-slate-500 mt-0.5">Average API Response Latency</div>
          </div>
        </div>

      </div>
    </section>
  );
};
