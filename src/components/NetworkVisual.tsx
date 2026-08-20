'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/config/site';

export const NetworkVisual: React.FC = () => {
  const nodePositions = [
    { x: 300, y: 70, label: 'AI SOLUTIONS' },
    { x: 490, y: 170, label: 'WEBSITE' },
    { x: 490, y: 390, label: 'DESIGN' },
    { x: 300, y: 490, label: 'CLOUD & MANAGEMENT' },
    { x: 110, y: 390, label: 'PERFORMANCE' },
    { x: 110, y: 170, label: 'BUSINESS SETUP' },
  ];

  const centerNode = { x: 300, y: 280, label: 'INVARSOFT' };

  return (
    <section id="network" className="relative py-28 bg-navy-950 text-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-sm font-extrabold tracking-[0.25em] text-blue-400 uppercase font-display">
            INTEGRATED AI & DIGITAL ECOSYSTEM
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display">
            EVERYTHING WORKS TOGETHER.
          </h2>
          <p className="text-slate-200 text-base sm:text-lg font-medium max-w-xl mx-auto">
            A synchronized technology ecosystem where artificial intelligence, design, web systems, and cloud infrastructure converge.
          </p>
        </div>

        {/* Interactive SVG Network Graph */}
        <div className="relative max-w-2xl mx-auto h-[500px] sm:h-[560px] flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 600 560" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="netGlow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Outer Connecting Hexagon Circuit Ring */}
            <polygon
              points={nodePositions.map((p) => `${p.x},${p.y}`).join(' ')}
              stroke="rgba(59, 130, 246, 0.45)"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
            />

            {/* Radiating Laser Energy Beams */}
            {nodePositions.map((pos, idx) => (
              <g key={`beam-${idx}`}>
                <line
                  x1={centerNode.x}
                  y1={centerNode.y}
                  x2={pos.x}
                  y2={pos.y}
                  stroke="rgba(59, 130, 246, 0.5)"
                  strokeWidth="2"
                />

                <circle r="4.5" fill="#FFFFFF" filter="url(#netGlow)">
                  <animateMotion
                    path={`M ${centerNode.x} ${centerNode.y} L ${pos.x} ${pos.y}`}
                    dur={`${2.5 + idx * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            ))}

            {/* Center Node: INVARSOFT */}
            <g transform={`translate(${centerNode.x}, ${centerNode.y})`}>
              <circle r="54" fill="#0D172A" stroke="#2563EB" strokeWidth="4" filter="url(#netGlow)" />
              <circle r="47" fill="#101D35" stroke="#60A5FA" strokeWidth="1.5" />
              <text
                textAnchor="middle"
                dy="5"
                fill="#FFFFFF"
                className="font-display text-xs font-black tracking-widest"
              >
                INVARSOFT
              </text>
            </g>

            {/* Surrounding Service Nodes */}
            {nodePositions.map((pos, idx) => (
              <g key={`node-${idx}`} transform={`translate(${pos.x}, ${pos.y})`}>
                <circle
                  r={idx === 0 ? "42" : "38"}
                  fill={idx === 0 ? "#1E293B" : "#101D35"}
                  stroke={idx === 0 ? "#60A5FA" : "#3B82F6"}
                  strokeWidth={idx === 0 ? "3" : "2"}
                  className="hover:stroke-white transition-colors"
                />
                <text
                  textAnchor="middle"
                  dy="4"
                  fill={idx === 0 ? "#60A5FA" : "#F8FAFC"}
                  className={`font-display font-bold tracking-wider hover:fill-white transition-colors ${
                    idx === 0 ? "text-[11px] font-black" : "text-[9.5px]"
                  }`}
                >
                  {pos.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

      </div>
    </section>
  );
};
