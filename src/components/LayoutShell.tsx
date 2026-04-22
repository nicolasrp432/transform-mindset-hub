"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

/* ============================================================
   LayoutShell
   ============================================================ */

const FUNNEL_ROUTES = ["/re-conectate", "/herramientas", "/evaluacion"];

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFunnel = pathname ? FUNNEL_ROUTES.includes(pathname) : false;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {!isFunnel && <FloatingContact />}
    </>
  );
}
