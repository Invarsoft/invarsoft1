'use client';

import React from 'react';
import { INDUSTRIES_DATA } from '@/config/siteData';
import { Building2, Landmark, Activity, Factory, ShoppingBag, Server, Compass, GraduationCap, Briefcase } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-blue-600" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-indigo-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'Factory': return <Factory className="w-5 h-5 text-amber-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-violet-600" />;
      case 'Cpu': return <Server className="w-5 h-5 text-cyan-600" />;
      case 'Server': return <Server className="w-5 h-5 text-cyan-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-teal-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-slate-700" />;
      default: return <Building2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-700">
            08 • Sector Expertise
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industries Transformed by Invarsoft.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We adapt enterprise architecture and custom AI models to the specific regulatory and data requirements of your industry.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                {getIcon(ind.icon)}
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">{ind.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
