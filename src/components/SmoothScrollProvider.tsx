'use client';

import React, { useEffect } from 'react';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  useEffect(() => {
    // Enable CSS smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return <>{children}</>;
};
