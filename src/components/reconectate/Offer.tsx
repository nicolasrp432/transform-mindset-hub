"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModulesAccordion from "@/components/reconectate/ModulesAccordion";

const Offer = () => {
  const benefits = [
    "Aprenderás a identificar y transformar los patrones de autocrítica",
    "Desarrollarás una relación amorosa y compasiva contigo misma",
    "Construirás una autoestima sólida que no dependa de validación externa",
    "Recuperarás tu paz interior y confianza en tus decisiones",
    "Experimentarás una transformación profunda y duradera",
  ];

  const handleCTA = () => {
    window.location.href = "https://pay.hotmart.com/S102673436S";
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">💫 'Re-Conéctate'</h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">El camino hacia tu seguridad interior y autoestima inquebrantable</p>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">Un programa guiado de 6 semanas para sanar tu relación contigo misma y construir una confianza real.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="bg-brand-beige/40 rounded-3xl p-8 md:p-12 space-y-6">
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-foreground/80 text-lg leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <ModulesAccordion />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center">
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button onClick={handleCTA} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base sm:text-lg rounded-full shadow-lg shadow-brand-dark-green/20 transition-all duration-300 hover:shadow-xl hover:shadow-brand-dark-green/30">🌸 Quiero comenzar mi transformación</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;