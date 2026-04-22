import Hero from "@/components/reconectate/Hero";
import AnnouncementBar from "@/components/reconectate/AnnouncementBar";
import Problem from "@/components/reconectate/Problem";
import Differentiator from "@/components/reconectate/Differentiator";
import Authority from "@/components/reconectate/Authority";
import ModulesAccordion from "@/components/reconectate/ModulesAccordion";
import Testimonials from "@/components/reconectate/Testimonials";
import Offer from "@/components/reconectate/Offer";
import Bonuses from "@/components/reconectate/Bonuses";
import Guarantee from "@/components/reconectate/Guarantee";
import FAQ from "@/components/reconectate/FAQ";
import FinalCTA from "@/components/reconectate/FinalCTA";

export default function ReConectatePage() {
  return (
    <main className="flex flex-col min-h-screen bg-brand-beige">
      <AnnouncementBar />
      <Hero />
      <Problem />
      <Differentiator />
      <Authority />
      <ModulesAccordion />
      <Testimonials />
      <Offer />
      <Bonuses />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
