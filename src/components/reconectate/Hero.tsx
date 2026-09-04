"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleCTA = () => {
    const ctaSection = document.getElementById("cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center px-4 py-20 bg-base overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-mark-soft rounded-full opacity-50 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-mark-soft rounded-full opacity-50 blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="max-w-4xl mx-auto text-center space-y-10 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">Libérate de tu mente crítica y reconecta con tu seguridad interior</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">El método paso a paso para transformar tu autocrítica en confianza plena, sin forzarte, sin fingir y sin depender de la aprobación externa.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 bg-surface">
          <Image
            src="/imagen-hero.png"
            alt="Ainara, mentora en autoconfianza"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 48rem"
            className="object-cover"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}>
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button onClick={handleCTA} size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-base sm:text-lg rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">🔮 Quiero reconectarme ahora</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;