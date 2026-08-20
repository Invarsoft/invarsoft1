'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/config/site';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date(SITE_CONFIG.launchDate).getTime();
    const now = new Date().getTime();
    const difference = Math.max(0, targetDate - now);

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTwoDigits = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const timeUnits = [
    { label: 'DAYS', value: mounted ? formatTwoDigits(timeLeft.days) : '17' },
    { label: 'HOURS', value: mounted ? formatTwoDigits(timeLeft.hours) : '08' },
    { label: 'MINUTES', value: mounted ? formatTwoDigits(timeLeft.minutes) : '42' },
    { label: 'SECONDS', value: mounted ? formatTwoDigits(timeLeft.seconds) : '19' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-6">
        <span className="text-xs font-mono tracking-[0.3em] text-electric-400 uppercase">
          LAUNCH COUNTDOWN SEQUENCE
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="glass-panel rounded-2xl p-4 sm:p-6 text-center relative group overflow-hidden border border-electric-500/25 hover:border-electric-400 hover:shadow-[0_0_30px_rgba(7,91,255,0.3)] transition-all duration-300"
          >
            {/* Background cyber accent corner lines */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-electric-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-electric-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-electric-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-electric-400" />

            <div className="relative z-10">
              <div className="font-mono text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight group-hover:text-electric-300 transition-colors text-glow">
                {unit.value}
              </div>
              <div className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-softgrey mt-2 uppercase">
                {unit.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
