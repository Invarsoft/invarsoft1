'use client';

import React, { useState, useRef } from 'react';
import { ExternalLink, Sparkles, Monitor, Tablet, Smartphone, Code, ShieldCheck } from 'lucide-react';

export const InteractiveBrowserShowcase: React.FC = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = (centerY - y) / 25;
    const rotY = (x - centerX) / 25;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="py-12">
      <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
        <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
          Standout Interactive Feature
        </span>
        <h3 className="font-display text-2xl font-bold text-slate-900">
          3D Interactive Digital Showcase
        </h3>
        <p className="text-xs text-slate-600">
          Move your cursor over the browser frame to experience dynamic perspective tilt & live component callouts.
        </p>
      </div>

      {/* Tiltable Container */}
      <div className="perspective-1000 max-w-4xl mx-auto px-4">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: rotateX === 0 ? 'transform 0.5s ease-out' : 'none',
          }}
          className="relative rounded-3xl bg-white border border-slate-300 shadow-2xl overflow-hidden"
        >
          {/* Top Browser Bar */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-md mx-4 bg-white rounded-lg px-3 py-1 border border-slate-200 text-xs font-mono text-slate-600 flex items-center justify-between shadow-2xs">
              <span className="truncate">https://invarsoft.com/experience/apex-capital</span>
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                SSL 256-Bit
              </span>
            </div>

            {/* Device Toggle */}
            <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg">
              <button
                onClick={() => setActiveDevice('desktop')}
                className={`p-1 rounded ${activeDevice === 'desktop' ? 'bg-white shadow-2xs text-blue-600' : 'text-slate-500'}`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveDevice('mobile')}
                className={`p-1 rounded ${activeDevice === 'mobile' ? 'bg-white shadow-2xs text-blue-600' : 'text-slate-500'}`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Website Canvas Area */}
          <div className={`p-8 bg-slate-50 transition-all ${activeDevice === 'mobile' ? 'max-w-xs mx-auto my-6 border border-slate-300 rounded-2xl shadow-md' : ''}`}>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="font-display font-extrabold text-lg text-slate-900">APEX CAPITAL</div>
                <div className="flex gap-3 text-xs font-medium text-slate-600">
                  <span>Portfolio</span>
                  <span>Insights</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className="py-10 text-center space-y-3 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-6 shadow-inner">
                <span className="text-[10px] font-mono text-blue-300 uppercase">Institutional Asset Management</span>
                <h4 className="font-display text-xl sm:text-2xl font-bold">Engineering $2.4B in Global Enterprise Growth</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  High-frequency algorithmic liquidity pipelines and strategic capital deployment across software infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="font-bold text-sm text-slate-900">$2.4B+</div>
                  <div className="text-[10px] text-slate-500">AUM</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="font-bold text-sm text-slate-900">14.8%</div>
                  <div className="text-[10px] text-slate-500">IRR Yield</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <div className="font-bold text-sm text-slate-900">42</div>
                  <div className="text-[10px] text-slate-500">Portfolio Cos</div>
                </div>
              </div>
            </div>

          </div>

          {/* Floating Technology Callout Pills (Interactive Hover Overlay) */}
          <div className="absolute top-16 right-6 bg-white/90 backdrop-blur-md border border-blue-200 rounded-full px-3 py-1 text-[11px] font-mono text-blue-700 shadow-lg flex items-center gap-1.5 animate-bounce">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>Next.js 14 Server Actions</span>
          </div>

          <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white rounded-full px-3 py-1 text-[11px] font-mono shadow-lg flex items-center gap-1.5">
            <Code className="w-3 h-3 text-cyan-400" />
            <span>Framer Motion 12 Physics</span>
          </div>

        </div>
      </div>
    </div>
  );
};
