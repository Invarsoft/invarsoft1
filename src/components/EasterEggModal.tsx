'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ShieldAlert, Zap, X } from 'lucide-react';
import { InvarsoftLogo } from './InvarsoftLogo';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Trigger cyber particle burst confetti
      try {
        confetti({
          particleCount: 80,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#075BFF', '#1769FF', '#85B2FF', '#FFFFFF'],
        });
      } catch {
        // Fallback silently if confetti library is unavailable
      }
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-2xl scanline-overlay"
        >
          {/* Cyber Glow Aura */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-electric-500/20 blur-[140px] pointer-events-none" />

          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            className="glass-panel-glow rounded-3xl p-8 sm:p-10 max-w-lg w-full text-center relative border border-electric-400 shadow-[0_0_60px_rgba(7,91,255,0.6)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-navy-800 border border-electric-500/30 text-softgrey hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Emblem */}
            <div className="flex justify-center mb-6">
              <InvarsoftLogo size="xl" showText={false} />
            </div>

            {/* Secret Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/20 border border-electric-400 text-xs font-mono text-electric-300 mb-4">
              <Zap className="w-3.5 h-3.5 text-electric-400 animate-bounce" />
              <span>EASTER EGG UNLOCKED</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-mono font-extrabold text-white tracking-widest uppercase mb-3">
              SYSTEM ACCESS:
              <br />
              <span className="text-electric-400 text-glow">INVARSOFT CORE ONLINE</span>
            </h3>

            <p className="text-softgrey text-xs sm:text-sm font-mono leading-relaxed mb-8">
              Welcome to the inner technological core of Invarsoft. You have bypassed surface protocols and unlocked priority system telemetry.
            </p>

            <button
              onClick={onClose}
              className="w-full py-3.5 px-6 rounded-xl bg-electric-500 text-white font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_#075BFF] hover:bg-electric-400 transition-colors"
            >
              RESUME SYSTEM EXPERIENCE
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
