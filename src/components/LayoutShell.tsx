"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

/* ============================================================
   LayoutShell — Ratio de Atención 1:1
   
   En rutas de embudo (/herramientas, /evaluacion) se ocultan
   Navbar y Footer para eliminar fugas de conversión.
   El usuario solo puede avanzar (submit) o retroceder (← Volver).
   ============================================================ */

const FUNNEL_ROUTES = ["/herramientas", "/evaluacion"];

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFunnel = FUNNEL_ROUTES.includes(pathname);

  return (
    <>
      {!isFunnel && <Navbar />}
      {children}
      {!isFunnel && <Footer />}
      {!isFunnel && <FloatingContact />}
    </>
  );
}
