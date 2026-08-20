// INVARSOFT Global Motion Foundation Standards

export const EASING = {
  // Standard ease for transitions and UI interactions
  standard: [0.25, 0.1, 0.25, 1.0], // power3.out equivalent
  // Entrance ease for scroll reveals & modals
  entrance: [0.0, 0.0, 0.2, 1.0], // power2.out equivalent
  // Exit ease
  exit: [0.4, 0.0, 1.0, 1.0], // power2.in equivalent
  // CTA bounce / emphasis ease
  bounce: [0.34, 1.56, 0.64, 1.0], // back.out(1.4) equivalent
} as const;

export const DURATIONS = {
  micro: 0.25,       // Button hovers, icon state changes
  normal: 0.4,       // Card reveals, menu toggles
  section: 0.8,      // Scroll-triggered section entrances
  transition: 1.2,   // Camera & page route transitions
} as const;

export const MAGNETIC_PHYSICS = {
  type: 'spring',
  stiffness: 150,
  damping: 15,
  mass: 0.2,
};
