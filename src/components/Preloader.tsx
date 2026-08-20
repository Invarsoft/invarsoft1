'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InvarsoftLogo } from './InvarsoftLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 12;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setIsFinished(true);
        onComplete();
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  if (isFinished) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070D1B] text-white select-none"
      >
        {/* Glow */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />

        {/* Content Box */}
        <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
          <div className="mb-8">
            <InvarsoftLogo size="xl" showText={true} />
          </div>

          <p className="text-xs font-bold tracking-[0.25em] text-blue-400 uppercase mb-5 font-display">
            INITIALIZING DIGITAL EXPERIENCE...
          </p>

          {/* Progress Bar Track */}
          <div className="w-64 h-2 bg-[#0D172A] rounded-full overflow-hidden border border-blue-500/40 p-0.5 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-white rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_#2563EB]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between w-64 mt-3 text-xs font-semibold text-slate-300">
            <span>SYS_CORE_V2.0</span>
            <span className="text-blue-400 font-extrabold">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
