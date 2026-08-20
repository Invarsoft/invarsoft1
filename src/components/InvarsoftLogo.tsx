'use client';

import React from 'react';

interface InvarsoftLogoProps {
  onClick?: () => void;
  className?: string;
  lightMode?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const InvarsoftLogo: React.FC<InvarsoftLogoProps> = ({
  onClick,
  className = '',
  size = 'md',
}) => {
  const heights = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-11',
    xl: 'h-12 sm:h-14',
  };

  return (
    <div
      onClick={onClick}
      className={`group inline-flex items-center cursor-pointer select-none ${className}`}
      aria-label="INVARSOFT Home"
    >
      {/* Sleek Dark Glass Backdrop Pill Container matching Navbar buttons with Neon Highlight */}
      <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center transition-all duration-300 group-hover:scale-105">
        <img
          src="/official-logo-transparent.png"
          alt="InvarSoft Logo"
          className={`${heights[size]} w-auto object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)] brightness-110 contrast-110`}
        />
      </div>
    </div>
  );
};
