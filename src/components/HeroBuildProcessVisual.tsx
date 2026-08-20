'use client';

import React, { useState, useEffect } from 'react';
import {
  FileCode2,
  Cpu,
  Layers,
  Sparkles,
  Rocket,
  CheckCircle2,
  Terminal,
  Play,
  Pause,
  RefreshCw,
  Globe,
  Database,
  Smartphone,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

export const HeroBuildProcessVisual: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const stages = [
    {
      id: 'discover',
      step: '01',
      title: 'Blueprint & RAG Schema',
      subtitle: 'System Architecture & Vector DB Indexing',
      icon: Layers,
      color: 'from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      details: [
        'Ingest Business Requirements & Specs',
        'Setup Pinecone / Qdrant Vector Schema',
        'Define Microservice API Endpoints'
      ],
      codeSnippet: `// 01. Initializing Enterprise Vector DB
const vectorIndex = new PineconeClient({
  environment: "us-west1-gcp",
  dimension: 1536,
  metric: "cosine"
});`,
      metric: 'Architecture Specs Validated'
    },
    {
      id: 'design',
      step: '02',
      title: 'UI/UX & Component Engine',
      subtitle: 'Modular Design Tokens & Physics Motion',
      icon: Sparkles,
      color: 'from-indigo-600 to-violet-600',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      details: [
        'Atomic Design Tokens & Tailwind Palette',
        'Framer Motion Micro-Interactions',
        'Responsive Desktop & Mobile Viewports'
      ],
      codeSnippet: `// 02. Assembling UI Component System
<Navbar brand="INVARSOFT" theme="light">
  <HeroSection visual="WebGL_3D_Canvas" />
  <CommandCenter mode="realtime_stream" />
</Navbar>`,
      metric: '100% WCAG AA Accessible'
    },
    {
      id: 'build',
      step: '03',
      title: 'Full-Stack & Microservices',
      subtitle: 'Next.js 14 App Router & Python FastAPI',
      icon: FileCode2,
      color: 'from-violet-600 to-fuchsia-600',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      details: [
        'React Server Components & Streaming SSR',
        'Python FastAPI High-Throughput Engine',
        'Redis Pub/Sub In-Memory Telemetry'
      ],
      codeSnippet: `// 03. Executing Server Action
export async function submitInquiry(data: Inquiry) {
  "use server";
  const status = await api.post("/v1/pipeline", data);
  return { success: true, latency: "42ms" };
}`,
      metric: 'API Latency < 45ms'
    },
    {
      id: 'ai-integrate',
      step: '04',
      title: 'AI Model Integration',
      subtitle: 'LLM Orchestration & RAG Pipeline',
      icon: Cpu,
      color: 'from-cyan-600 to-blue-600',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      details: [
        'Connect SOTA LLMs (GPT-4 / Claude)',
        'Hybrid Dense-Sparse Reranking',
        'Deterministic Fallback Guardrails'
      ],
      codeSnippet: `// 04. AI Agent Workflow Execution
const agent = new AgentExecutor({
  model: "gpt-4-turbo",
  tools: [sqlQueryTool, pdfParserTool],
  temperature: 0.1
});`,
      metric: '99.4% Extraction Precision'
    },
    {
      id: 'deploy',
      step: '05',
      title: 'Production Deployment',
      subtitle: 'Edge Infrastructure & Zero-Downtime',
      icon: Rocket,
      color: 'from-emerald-600 to-teal-600',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      details: [
        'Vercel & AWS Kubernetes Edge Global Deployment',
        'OpenTelemetry Live Metrics & SLA Logging',
        'Production Hardened Security & SSL'
      ],
      codeSnippet: `// 05. Live Telemetry Status
[DEPLOYMENT COMPLETE]: Version 2.4.0 Live
Region: Global Edge Network (24 PoPs)
Status: HEALTHY • 99.99% Availability`,
      metric: 'Product Live & Scaled'
    }
  ];

  // Auto loop through stages when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  const currentStage = stages[activeStage];

  return (
    <div className="w-full relative rounded-3xl bg-white border border-slate-200 shadow-xl p-5 sm:p-6 overflow-hidden">
      
      {/* Top Header Controls Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
            <img src="/invarsoft-emblem.png" alt="INVARSOFT" className="w-5 h-5 object-contain" />
          </div>
          <div>
            <h3 className="font-display text-xs font-bold text-slate-900 uppercase tracking-wider">
              Application Build Engine
            </h3>
            <p className="text-[10px] font-mono text-slate-500">
              Live Software Engineering Pipeline Simulation
            </p>
          </div>
        </div>

        {/* Play/Pause Control Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1"
            title={isPlaying ? 'Pause Auto-Play' : 'Play Auto-Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-blue-600" /> : <Play className="w-3.5 h-3.5 text-emerald-600" />}
            <span className="text-[10px] font-mono">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
          </button>
        </div>
      </div>

      {/* 5-Step Process Timeline Selector Pills */}
      <div className="grid grid-cols-5 gap-1.5 py-4 border-b border-slate-100">
        {stages.map((stg, idx) => {
          const Icon = stg.icon;
          const isActive = activeStage === idx;
          const isPassed = activeStage > idx;

          return (
            <button
              key={stg.id}
              onClick={() => {
                setActiveStage(idx);
                setIsPlaying(false);
              }}
              className={`p-2 rounded-xl text-center transition-all flex flex-col items-center gap-1 relative ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : isPassed
                  ? 'bg-blue-50 text-blue-700 border border-blue-100'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="text-[9px] font-mono font-bold">{stg.step}</span>
              {isActive && (
                <span className="absolute -bottom-1 w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              )}
            </button>
          );
        })}
      </div>

      {/* Dynamic Active Stage Visual Presentation */}
      <div className="py-4 space-y-4">
        
        {/* Stage Title + Badge */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                PHASE {currentStage.step} OF 05
              </span>
              <span className="text-[11px] font-mono text-slate-500">{currentStage.subtitle}</span>
            </div>
            <h4 className="font-display text-lg font-bold text-slate-900 mt-1">
              {currentStage.title}
            </h4>
          </div>

          <div className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono font-bold ${currentStage.badgeColor}`}>
            {currentStage.metric}
          </div>
        </div>

        {/* Live Code / Spec Terminal Box */}
        <div className="rounded-2xl bg-slate-950 text-slate-100 p-4 border border-slate-800 font-mono text-[11px] shadow-inner relative overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>build_pipeline.ts</span>
            </div>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              EXECUTING SPRINT
            </span>
          </div>

          <pre className="text-blue-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {currentStage.codeSnippet}
          </pre>
        </div>

        {/* Key Deliverables Bullet List */}
        <div className="space-y-2 pt-1">
          <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">Phase Execution Checkpoints</div>
          <div className="grid grid-cols-1 gap-1.5">
            {currentStage.details.map((detail, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2 rounded-xl border border-slate-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Progress Footer Bar */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <div className="flex items-center gap-1.5">
          <RefreshCw className={`w-3 h-3 text-blue-600 ${isPlaying ? 'animate-spin' : ''}`} />
          <span>INVARSOFT Automated Engineering Protocol</span>
        </div>

        <button
          onClick={() => setActiveStage((activeStage + 1) % stages.length)}
          className="flex items-center gap-1 text-blue-600 font-bold hover:underline"
        >
          <span>Next Phase</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

    </div>
  );
};
