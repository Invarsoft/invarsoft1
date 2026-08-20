'use client';

import React from 'react';

export const TrustStrip: React.FC = () => {
  const marqueeItems = [
    'DESIGN',
    'DEVELOPMENT',
    'AI SOLUTIONS',
    'SOFTWARE',
    'DIGITAL TRANSFORMATION',
    'E-COMMERCE',
    'WEB APPLICATIONS',
    '3D EXPERIENCES',
  ];

  return (
    <div id="trust-strip" className="relative py-6 bg-[#08131C] border-y border-white/10 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 text-center">
        <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
          BUILDING THE DIGITAL FUTURE FOR AMBITIOUS BUSINESSES
        </span>
      </div>

      {/* Marquee Row */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap items-center gap-8 py-2">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-sm font-mono font-semibold tracking-widest text-slate-300 hover:text-white transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_#00F0FF]" />
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap items-center gap-8 py-2">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-8">
              <span className="text-sm font-mono font-semibold tracking-widest text-slate-300 hover:text-white transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_#00F0FF]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
