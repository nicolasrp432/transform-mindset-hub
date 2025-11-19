import React, { useEffect } from "react";
import AnnouncementBar from "@/components/reconectate/AnnouncementBar";
import Hero from "@/components/reconectate/Hero";
import Problem from "@/components/reconectate/Problem";
import Authority from "@/components/reconectate/Authority";
import Offer from "@/components/reconectate/Offer";
import Bonuses from "@/components/reconectate/Bonuses";
import Differentiator from "@/components/reconectate/Differentiator";
import Testimonials from "@/components/reconectate/Testimonials";
import FinalCTA from "@/components/reconectate/FinalCTA";
import FAQ from "@/components/reconectate/FAQ";
import Guarantee from "@/components/reconectate/Guarantee";

const ReConectate = () => {
  useEffect(() => {
    document.title = "Re-Conéctate - Transforma tu Autocrítica en Confianza";
  }, []);

  return (
    <div className="pt-24">
      <AnnouncementBar />
      <Hero />
      <Problem />
      <Authority />
      <Offer />
      <Bonuses />
      <Differentiator />
      <Testimonials />
      <FinalCTA />
      <FAQ />
      <Guarantee />
    </div>
  );
};

export default ReConectate;