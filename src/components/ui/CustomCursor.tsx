"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Motion values for coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the outer ring effect
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Smooth springs for the inner dot effect
  const innerDotX = useMotionValue(-100);
  const innerDotY = useMotionValue(-100);
  const innerDotXSpring = useSpring(innerDotX, { damping: 40, stiffness: 600 });
  const innerDotYSpring = useSpring(innerDotY, { damping: 40, stiffness: 600 });

  useEffect(() => {
    // Detect if device supports physical pointer/hover
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);

    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the 32px ring
      cursorY.set(e.clientY - 16);
      innerDotX.set(e.clientX - 3); // Center the 6px dot
      innerDotY.set(e.clientY - 3);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers hover state if the element is clickable or interactive
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, innerDotX, innerDotY, isVisible]);

  if (isTouchDevice || !isVisible) return <></>;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Ocultar cursor nativo a nivel global cuando el custom está activo, pero mantener hover effects orgánicos */
        body { cursor: none; }
        a, button, [role="button"], input, select, textarea { cursor: none !important; }
      ` }} />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          backgroundColor: isHovering ? "var(--color-white)" : "transparent",
          border: isHovering ? "none" : "1px solid var(--color-white)",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
        }}
      />
      {/* Opcional: Pequeño punto interior */}
      <motion.div
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: innerDotXSpring,
          y: innerDotYSpring,
        }}
        animate={{
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
