"use client";

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
];

const SALES_LANDING_ROUTES = [
  "/re-conectate",
  "/emulsion-energetica",
  "/guia-practica",
  "/libro-princesa",
  "/agenda-reflexion",
];

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFunnel = pathname ? FUNNEL_ROUTES.includes(pathname) : false;
  const isSalesLanding = pathname ? SALES_LANDING_ROUTES.includes(pathname) : false;

  return (
    <div className={isSalesLanding ? "sales-landing" : undefined}>
      <Navbar />
      {children}
      <Footer />
      {!isFunnel && <FloatingContact />}
    </div>
  );
}
