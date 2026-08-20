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
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16',
  };

  return (
    <div
      onClick={onClick}
      className={`group inline-flex items-center cursor-pointer select-none ${className}`}
      aria-label="INVARSOFT Home"
    >
      {/* Clean White Background Pill Container to Highlight Original Logo Intact */}
      <div className="px-2.5 py-1 rounded-xl bg-white shadow-lg border border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-102">
        <img
          src="/official-logo-badge.png"
          alt="InvarSoft Logo"
          className={`${heights[size]} w-auto object-contain`}
        />
      </div>
    </div>
  );
};
