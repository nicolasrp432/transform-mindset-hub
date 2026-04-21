import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import AboutMeSection from "@/components/AboutMeSection";
import Testimonials from "@/components/Testimonials";
import EvaluationCTA from "@/components/EvaluationCTA";

/* ============================================================
   Página de Inicio — Embudo de Conversión
   
   Estructura:
   1. Hero → Captura atención, nombra el dolor
   2. ServiceGrid → Presenta las soluciones (3 caminos)
   3. AboutMeSection → Construye autoridad (Perfil de Ainara)
   4. Testimonials → Genera confianza y prueba social
   5. EvaluationCTA → Bloque de alta conversión pre-footer
   ============================================================ */

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServiceGrid />
      <AboutMeSection />
      <Testimonials />
      <EvaluationCTA />
    </main>
  );
}
