import type { Metadata } from "next";
import Hero from "@/components/reconectate/Hero";
import AnnouncementBar from "@/components/reconectate/AnnouncementBar";
import Problem from "@/components/reconectate/Problem";
import Differentiator from "@/components/reconectate/Differentiator";
import Authority from "@/components/reconectate/Authority";
import Testimonials from "@/components/reconectate/Testimonials";
import Offer from "@/components/reconectate/Offer";
import Bonuses from "@/components/reconectate/Bonuses";
import Guarantee from "@/components/reconectate/Guarantee";
import FAQ from "@/components/reconectate/FAQ";
import FinalCTA from "@/components/reconectate/FinalCTA";
import StickyMobileCta from "@/components/landing/StickyMobileCta";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Re-Conéctate | Programa de autoestima y seguridad interior",
  description:
    "Programa guiado de 6 semanas para transformar tu autocrítica en confianza real, sin depender de la aprobación externa. Acceso de por vida y garantía de 7 días.",
  openGraph: {
    title: "Re-Conéctate | Programa de autoestima y seguridad interior",
    description:
      "Libérate de tu mente crítica y reconstruye tu seguridad interior en 6 semanas, con el método de Ainara.",
    type: "website",
  },
};

export default function ReConectatePage() {
  return (
    <main className="flex flex-col min-h-screen bg-base has-sticky-cta">
      <AnnouncementBar />
      <Hero />
      <Problem />
      <Differentiator />
      <Authority />
      <Testimonials />
      <Offer />
      <Bonuses />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <StickyMobileCta
        productKey={PRODUCTS.RE_CONECTATE.key}
        label="Empezar"
      />
    </main>
  );
}
