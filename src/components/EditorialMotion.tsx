"use client";

import { useEffect } from "react";
import { animate, inView, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

/** Reuses the original fade-up, stagger and line-reveal language on the new layout. */
export default function EditorialMotion() {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const controls: ReturnType<typeof animate>[] = [];
    const cleanups: (() => void)[] = [];
    const reveal = (element: Element, delay = 0) => {
      const node = element as HTMLElement;
      // Keep the server-rendered page visible until the enhancement is ready.
      cleanups.push(inView(node, () => {
        controls.push(animate(node, { opacity: [0, 1], y: [16, 0] }, {
          duration: 0.5, delay, ease: [0.16, 1, 0.3, 1],
        }));
      }, { margin: "0px 0px -48px 0px" }));
    };
    document.querySelectorAll(".section-heading-line, .services-heading, .testimonials-heading, .about-copy, .about-photo, .evaluation-invite > div, .page-heading, .landing-visual, .approach-explorer, .journey-heading").forEach((node) => reveal(node));
    document.querySelectorAll(".service-row, .expertise-strip > *, .resource-card, .service-card, .journey-steps article").forEach((node, i) => reveal(node, (i % 4) * 0.08));
    document.querySelectorAll(".note-line").forEach((node) => {
      controls.push(animate(node as HTMLElement, { scaleX: [0, 1] }, { duration: 0.8, ease: [0.16, 1, 0.3, 1] }));
    });
    return () => {
      cleanups.forEach((cleanup) => cleanup());
      controls.forEach((control) => control.stop());
    };
  }, [pathname, reduced]);
  return null;
}
