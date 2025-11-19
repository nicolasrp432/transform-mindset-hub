import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleCTA = () => {
    const ctaSection = document.getElementById("cta");
    if (ctaSection) ctaSection.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "https://pay.hotmart.com/S102673436S";
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center px-4 py-20 bg-brand-beige overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-mid-green/10 rounded-full opacity-50 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-mid-green/10 rounded-full opacity-50 blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="max-w-4xl mx-auto text-center space-y-10 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">Libérate de tu mente crítica y reconecta con tu seguridad interior</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">El método paso a paso para transformar tu autocrítica en confianza plena, sin forzarte, sin fingir y sin depender de la aprobación externa.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-brand-mid-green/20 bg-brand-beige group cursor-pointer" onClick={handleCTA}>
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-dark-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
          <img className="w-full h-full object-cover" alt="Mujer sonriendo con serenidad" src="https://horizons-cdn.hostinger.com/9db00194-eaa0-43d2-a54c-b874713e848e/generated-image-october-29-2025---10_05pm-oBzfC.png" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}>
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button onClick={handleCTA} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base sm:text-lg rounded-full shadow-lg shadow-brand-dark-green/20 transition-all duration-300 hover:shadow-xl hover:shadow-brand-dark-green/30">🔮 Quiero reconectarme ahora</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;