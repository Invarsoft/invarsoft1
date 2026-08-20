'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onStartProjectClick?: () => void;
  onExploreWorkClick?: () => void;
}

export const HeroCinematic: React.FC<HeroProps> = ({
  onStartProjectClick,
  onExploreWorkClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Hero video play warning:', err);
        });
      }
    }
  }, []);

  // Mouse Parallax Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 10;
    const y = (clientY / innerHeight - 0.5) * 10;
    setMousePos({ x, y });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[600px] max-h-[1080px] overflow-hidden bg-[#050A0F] text-white flex items-center justify-center selection:bg-cyan-500 selection:text-black"
    >
      {/* DIRECT MP4 BACKGROUND VIDEO (NO EXTRA FRAME IMAGES REQUIRED) */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -0.15}px, ${mousePos.y * -0.15}px, 0px)`,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-105 contrast-105 saturate-105 scale-[1.32]"
          style={{
            imageRendering: 'crisp-edges',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* ULTRA-LIGHT TRANSPARENT OVERLAY & WATERMARK ELIMINATOR MASK */}
        <div className="absolute inset-0 bg-[#050A0F]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A0F] via-transparent to-[#050A0F]/20" />
        <div className="absolute bottom-0 right-0 w-96 h-48 bg-gradient-to-l from-[#050A0F] via-[#050A0F]/95 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 right-0 w-64 h-32 bg-[#050A0F] pointer-events-none z-10 blur-xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-b from-[#050A0F] to-transparent pointer-events-none z-10" />
      </div>

      {/* CENTER-ALIGNED, MINIMAL, UNIFORM & NON-DOMINATING HERO TEXT OVERLAY */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 text-center flex flex-col items-center justify-center">
        <div
          className="max-w-2xl space-y-4 bg-transparent border-0 p-0 shadow-none flex flex-col items-center text-center transition-transform duration-100 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px, 0)`,
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 text-slate-200 backdrop-blur-xs text-[10px] font-mono tracking-widest uppercase"
          >
            <span>PREMIUM DIGITAL SOLUTIONS</span>
          </motion.div>

          {/* Minimal Center Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/95 tracking-tight leading-snug"
          >
            We Build Digital Experiences That Move Businesses Forward.
          </motion.h1>

          {/* Light Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs sm:text-sm text-slate-300/80 font-normal leading-relaxed max-w-md mx-auto"
          >
            InvarSoft creates premium websites, software products, intelligent solutions and digital experiences designed for modern businesses.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row items-center justify-center gap-3 pt-2"
          >
            <button
              onClick={onStartProjectClick || (() => scrollToSection('contact'))}
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-black font-semibold text-xs tracking-wide transition-all duration-300 hover:bg-cyan-300 active:scale-98 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onExploreWorkClick || (() => scrollToSection('work'))}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-black/40 hover:bg-black/60 text-slate-200 font-medium text-xs border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-white/40 cursor-pointer"
            >
              <span>Explore Our Work</span>
            </button>
          </motion.div>

          {/* Sub-bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-1 flex items-center justify-center gap-2.5 text-[10px] font-mono tracking-widest text-slate-300/70 uppercase"
          >
            <span>Web</span>
            <span className="text-slate-500">&bull;</span>
            <span>Software</span>
            <span className="text-slate-500">&bull;</span>
            <span>AI</span>
            <span className="text-slate-500">&bull;</span>
            <span>Design</span>
          </motion.div>
        </div>
      </div>

      {/* SUBTLE BOTTOM SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        onClick={() => scrollToSection('trust-strip')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer text-slate-300 hover:text-white transition-colors group"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-300/80 group-hover:text-white">
          SCROLL TO EXPLORE &darr;
        </span>
        <div className="w-4 h-7 rounded-full border border-slate-300/50 group-hover:border-white p-0.5 flex justify-center bg-black/30 backdrop-blur-xs">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
};
