'use client';

import React from 'react';
import { ProjectCaseStudy } from '@/config/siteData';
import { X, CheckCircle2, ArrowUpRight, Cpu, Layers, ShieldCheck, ExternalLink } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onStartSimilarProject: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50 sticky top-0 z-10">
          <div>
            <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider">
              {project.category} • {project.industry}
            </span>
            <h2 className="font-display text-xl font-extrabold text-slate-900 mt-0.5">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700 text-sm leading-relaxed">
          
          {/* Key Metrics Header Banner */}
          <div className="grid grid-cols-3 gap-4 bg-slate-900 text-white p-5 rounded-2xl">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-xl sm:text-2xl font-bold text-blue-400">
                  {metric.value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Overview & Client Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h3 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" /> Client Challenge
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">{project.challenge}</p>
            </div>

            <div className="space-y-2 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h3 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-600" /> Engineering Strategy
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">{project.strategy}</p>
            </div>
          </div>

          {/* Architecture Modules & Services */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-bold text-slate-900">
              System Architecture & Core Modules
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/60 text-xs font-semibold text-blue-900 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Pills */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-bold text-slate-900">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Device Mockup Visual Placeholder */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white text-center space-y-3 border border-slate-700">
            <div className="text-xs font-mono text-blue-400">PRODUCTION DEPLOYMENT VERIFIED</div>
            <p className="text-xs text-slate-300">
              Full interactive platform architecture running on Invarsoft enterprise edge infrastructure with 99.99% availability.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close Case Study
          </button>

          <button
            onClick={() => {
              onClose();
              onStartSimilarProject();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-md shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            <span>Build a Similar Solution</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
