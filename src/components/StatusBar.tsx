'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const StatusBar: React.FC = () => {
  const [progress, setProgress] = useState(92);
  const [statusText, setStatusText] = useState('SYSTEM INITIALIZING...');

  const statuses = [
    'SYSTEM INITIALIZING...',
    'OPTIMIZING DIGITAL CORE...',
    'DEPLOYS PREPARED...',
    'SECURITY LAYERS ACTIVE...',
    'INVARSOFT 2.0 READYING...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        if (next > 98) return 96;
        if (next < 92) return 93;
        return next;
      });
    }, 2800);

    const statusInterval = setInterval(() => {
      setStatusText((prev) => {
        const nextIdx = (statuses.indexOf(prev) + 1) % statuses.length;
        return statuses[nextIdx];
      });
    }, 4500);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  const totalBlocks = 20;
  const filledBlocks = Math.round((progress / 100) * totalBlocks);

  return (
    <div className="w-full max-w-xl mx-auto glass-panel rounded-xl p-4 sm:p-5 border border-blue-500/40 shadow-[0_0_30px_rgba(37,99,235,0.2)] my-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 text-xs sm:text-sm">
        <div className="flex items-center space-x-2 text-white font-bold tracking-wide">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-400 animate-ping" />
          <span>INVARSOFT DIGITAL SYSTEM</span>
        </div>
        <div className="text-blue-300 font-extrabold tracking-widest">
          STATUS: <span className="text-white text-base">{progress}%</span>
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-center gap-1 text-xs text-blue-300 overflow-hidden font-semibold">
          <span className="text-blue-400 font-bold">CORE [</span>
          <span className="tracking-tighter font-black text-blue-300">
            {'█'.repeat(filledBlocks)}
          </span>
          <span className="tracking-tighter text-slate-600">
            {'░'.repeat(totalBlocks - filledBlocks)}
          </span>
          <span className="text-blue-400 font-bold">]</span>
        </div>

        {/* Animated fluid progress bar */}
        <div className="w-full h-2 bg-navy-950 rounded-full overflow-hidden border border-blue-500/30">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-white shadow-[0_0_12px_#2563EB]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </div>

        {/* Dynamic Status Text */}
        <div className="flex justify-between items-center text-xs text-slate-200 pt-1 font-semibold">
          <span className="text-blue-300 animate-pulse font-bold">{statusText}</span>
          <span className="hidden sm:inline text-slate-300 font-medium">BUILD_TAG: #2026.09.4</span>
        </div>
      </div>
    </div>
  );
};
