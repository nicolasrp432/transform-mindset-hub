"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import type { ReactNode, PointerEvent } from "react";

/** Independent implementation of the interactive image-card pattern. */
export default function InteractiveSurface({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 160, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 160, damping: 24 });
  const reset = () => { x.set(0); y.set(0); };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (reduced || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    x.set(-(event.clientY - box.top - box.height / 2) / box.height * 6);
    y.set((event.clientX - box.left - box.width / 2) / box.width * 6);
  };
  return <motion.div className={`interactive-surface ${className}`} onPointerMove={move} onPointerLeave={reset}
    style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}>
    {children}
  </motion.div>;
}
