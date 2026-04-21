/* ============================================================
   Framer Motion Variants — "Silencio Arquitectónico"
   
   Filosofía: "Menos es presencia." 
   Solo 3 tipos de animación en toda la web:
   1. fade-up: entrada de secciones
   2. reveal: líneas decorativas
   3. hover micro-lift: cards
   ============================================================ */

/** Fade-up for section entrances */
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // ease-out custom
    },
  },
} as const;

/** Staggered children container */
export const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;

/** Horizontal line reveal */
export const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;

/** Fade in only (no vertical movement) */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

/** Viewport trigger config for IntersectionObserver-based reveals */
export const viewportOnce = {
  once: true,
  margin: "-64px",
  amount: 0.2,
} as const;
