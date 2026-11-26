import ApproachExplorer from "@/components/ApproachExplorer";
import BlackFridayAnnouncement from "@/components/BlackFridayAnnouncement";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import AboutMeSection from "@/components/AboutMeSection";
import Testimonials from "@/components/Testimonials";
import StartingPoint from "@/components/StartingPoint";
import EvaluationCTA from "@/components/EvaluationCTA";

/* ============================================================
   Página de Inicio — Embudo de Conversión
   
   Estructura:
   1. Hero → Captura atención, nombra el dolor
   2. BlackFridayAnnouncement → Oferta especial Black Friday
   3. ServiceGrid → Presenta las soluciones (3 caminos)
   4. AboutMeSection → Construye autoridad (Perfil de Ainara)
   5. Testimonials → Genera confianza y prueba social
   6. EvaluationCTA → Bloque de alta conversión pre-footer
   ============================================================ */

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BlackFridayAnnouncement />
      <StartingPoint />
      <AboutMeSection />
      <ApproachExplorer />
      <ServiceGrid />
      <Testimonials />
      <EvaluationCTA />
    </main>
  );
}
