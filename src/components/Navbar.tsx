'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { InvarsoftLogo } from './InvarsoftLogo';
import { Menu, X, ArrowRight, UserCheck, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onLogoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Tools & Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Work', href: '/projects' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#050A0F]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/">
          <InvarsoftLogo lightMode={false} onClick={onLogoClick} />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Sign In, Sign Up & CTA Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link
            href="/signin"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Sign In</span>
          </Link>

          <Link
            href="/signup"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/40 rounded-full bg-white/5 transition-all"
          >
            <UserPlus className="w-3.5 h-3.5 text-cyan-400" />
            <span>Sign Up</span>
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Full-Screen Dark Glass Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-[70px] bg-[#050A0F]/95 backdrop-blur-2xl z-40 border-t border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-2 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-left py-3 px-4 rounded-xl text-base font-semibold text-slate-200 hover:text-cyan-400 hover:bg-white/5 transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 rounded-xl border border-white/15 text-slate-200 font-semibold text-xs text-center hover:bg-white/5 transition-colors block"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 rounded-xl border border-cyan-400/40 bg-cyan-950/40 text-cyan-400 font-semibold text-xs text-center hover:bg-cyan-400 hover:text-black transition-colors block"
                >
                  Sign Up
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-cyan-400 text-black font-bold text-sm shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
              >
                <span>Let's Talk &rarr;</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
