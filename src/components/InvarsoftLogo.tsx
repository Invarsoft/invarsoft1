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
    md: 'h-8 sm:h-9.5',
    lg: 'h-10 sm:h-11',
    xl: 'h-12 sm:h-14',
  };

  return (
    <div
      onClick={onClick}
      className={`group inline-flex items-center cursor-pointer select-none ${className}`}
      aria-label="INVARSOFT Home"
    >
      {/* High-Visibility Crisp White Badge Container with Cyan Glow Halo */}
      <div className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-white shadow-[0_0_20px_rgba(0,240,255,0.45)] border border-white flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.7)]">
        <img
          src="/official-logo-badge.png"
          alt="InvarSoft Logo"
          className={`${heights[size]} w-auto object-contain brightness-105 contrast-105`}
        />
      </div>
    </div>
  );
};
