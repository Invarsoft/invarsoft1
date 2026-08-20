'use client';

import React, { useState } from 'react';
import { AI_CAPABILITIES, AI_SCENARIOS, AIScenario } from '@/config/siteData';
import { Terminal, Play, CheckCircle, ArrowRight, Zap, RefreshCw, Cpu, Database, Server, Check } from 'lucide-react';

export const AISolutionsSection: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<AIScenario>(AI_SCENARIOS[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStep, setCurrentStep] = useState(4); // 0 to 4 steps active

  const handleRunSimulation = (scenario: AIScenario) => {
    setSelectedScenario(scenario);
    setIsSimulating(true);
    setCurrentStep(0);

    const timer1 = setTimeout(() => setCurrentStep(1), 600);
    const timer2 = setTimeout(() => setCurrentStep(2), 1200);
    const timer3 = setTimeout(() => setCurrentStep(3), 1800);
    const timer4 = setTimeout(() => {
      setCurrentStep(4);
      setIsSimulating(false);
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  };

  return (
    <section id="ai-solutions" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Dark Grid Background & Subtle Glow */}
      <div className="absolute inset-0 tech-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-xs font-mono font-semibold text-blue-300 uppercase">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            INTELLIGENT ARCHITECTURE
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase">
            AI ISN'T THE PRODUCT.<br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">THE OUTCOME IS.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We use AI to solve real business problems, automate workflows and unlock new opportunities.
          </p>
        </div>

        {/* AI Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {AI_CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Zap className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/50">
                    {cap.badge}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">{cap.description}</p>
              </div>
              <span className="text-[11px] font-mono text-blue-400 font-semibold">{cap.tagline}</span>
            </div>
          ))}
        </div>

        {/* STANDOUT INTERACTIVE AI COMMAND-CENTER WORKFLOW SIMULATOR */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          
          {/* Header & Scenario Selector Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                <h3 className="font-display text-lg font-bold text-white">
                  Interactive AI Enterprise Workflow Simulator
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Select a business scenario to watch how INVARSOFT AI pipelines move from request to outcome.
              </p>
            </div>

            {/* Scenario Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {AI_SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => handleRunSimulation(sc)}
                  disabled={isSimulating}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    selectedScenario.id === sc.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <Play className={`w-3 h-3 ${selectedScenario.id === sc.id ? 'fill-white' : ''}`} />
                  <span>{sc.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Workflow Step Diagrams: BUSINESS PROBLEM -> INTELLIGENCE -> AUTOMATION -> INTEGRATION -> MEASURABLE RESULT */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            
            {/* Step 1: Business Problem */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              currentStep >= 0 ? 'bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-900/20' : 'bg-slate-900/40 border-slate-800 opacity-50'
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                <span>01</span>
                {currentStep >= 0 && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </div>
              <div className="font-semibold text-xs text-blue-300 mb-1">BUSINESS PROBLEM</div>
              <p className="text-[11px] text-slate-300 leading-snug">{selectedScenario.input}</p>
            </div>

            {/* Step 2: Intelligence */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              currentStep >= 1 ? 'bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-900/20' : 'bg-slate-900/40 border-slate-800 opacity-50'
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                <span>02</span>
                {currentStep >= 1 && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </div>
              <div className="font-semibold text-xs text-indigo-300 mb-1">INTELLIGENCE</div>
              <p className="text-[11px] text-slate-300 leading-snug">{selectedScenario.processingStep}</p>
            </div>

            {/* Step 3: Automation */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              currentStep >= 2 ? 'bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-900/20' : 'bg-slate-900/40 border-slate-800 opacity-50'
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                <span>03</span>
                {currentStep >= 2 && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </div>
              <div className="font-semibold text-xs text-violet-300 mb-1">AUTOMATION</div>
              <p className="text-[11px] text-slate-300 leading-snug">{selectedScenario.logicStep}</p>
            </div>

            {/* Step 4: Integration */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              currentStep >= 3 ? 'bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-900/20' : 'bg-slate-900/40 border-slate-800 opacity-50'
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                <span>04</span>
                {currentStep >= 3 && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </div>
              <div className="font-semibold text-xs text-cyan-300 mb-1">INTEGRATION</div>
              <p className="text-[11px] text-slate-300 leading-snug">{selectedScenario.automationStep}</p>
            </div>

            {/* Step 5: Measurable Result */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              currentStep >= 4 ? 'bg-blue-950/80 border-emerald-500/60 shadow-lg shadow-emerald-900/20' : 'bg-slate-900/40 border-slate-800 opacity-50'
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 mb-2">
                <span>05</span>
                {currentStep >= 4 && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
              </div>
              <div className="font-semibold text-xs text-emerald-300 mb-1">MEASURABLE RESULT</div>
              <p className="text-[11px] text-slate-200 font-medium leading-snug">{selectedScenario.result}</p>
            </div>

          </div>

          {/* Simulator Footer Status */}
          <div className="mt-6 pt-4 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <RefreshCw className={`w-3.5 h-3.5 text-blue-400 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>
                Status: {isSimulating ? 'Processing AI Pipeline...' : 'Pipeline Ready & Verified'}
              </span>
            </div>

            <div className="bg-slate-900 px-3 py-1 rounded border border-slate-800 text-emerald-400 font-bold">
              {selectedScenario.outputMetric}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
