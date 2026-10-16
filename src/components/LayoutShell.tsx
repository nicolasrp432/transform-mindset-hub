"use client";

import CustomCursor from "@/components/ui/CustomCursor";
import EditorialMotion from "@/components/EditorialMotion";
import { MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

/* ============================================================
   LayoutShell
   ============================================================ */

const FUNNEL_ROUTES = [
  "/re-conectate",
  "/emulsion-energetica",
  "/herramientas",
  "/evaluacion",
  "/guia-practica",
  "/libro-princesa",
  "/agenda-reflexion",
];

const SALES_LANDING_ROUTES = [
  "/re-conectate",
  "/emulsion-energetica",
  "/guia-practica",
  "/libro-princesa",
  "/agenda-reflexion",
];

const STANDALONE_ROUTES = ["/test", "/mapa", "/punto"];

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = pathname ? STANDALONE_ROUTES.includes(pathname) : false;
  const isFunnel = pathname ? FUNNEL_ROUTES.includes(pathname) : false;
  const isSalesLanding = pathname
    ? SALES_LANDING_ROUTES.includes(pathname)
    : false;

  if (isStandalone) {
    return (
      <MotionConfig reducedMotion="user">
        <noscript><style>{`
          #main-content [style*="opacity:0"],
          #main-content [style*="opacity: 0"] {
            opacity: 1 !important;
            transform: none !important;
          }
        `}</style></noscript>
        <CustomCursor />
        <div id="main-content" tabIndex={-1} className="min-h-screen">
          {children}
        </div>
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <noscript><style>{`
        #main-content [style*="opacity:0"],
        #main-content [style*="opacity: 0"] {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style></noscript>
      <div className={isSalesLanding ? "sales-landing" : undefined}>
        <CustomCursor />
        <EditorialMotion />
        <Navbar />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        {!isFunnel && <FloatingContact />}
      </div>
    </MotionConfig>
  );
}
