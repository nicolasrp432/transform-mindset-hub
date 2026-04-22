"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Heart, Sparkles } from "lucide-react";

const Differentiator = () => {
  const pillars = [
    { icon: Brain, title: "Neurociencia Emocional", description: "Técnicas basadas en cómo funciona tu cerebro para crear cambios duraderos." },
    { icon: Heart, title: "Reprogramación Consciente", description: "Transforma patrones profundos desde la raíz, no solo en la superficie." },
    { icon: Sparkles, title: "Presencia Consciente", description: "Reconecta con tu esencia y aprende a vivir desde tu verdad interior." },
  ];

  return (
    <section className="py-16 px-4 bg-brand-beige/30">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto text-balance">No es repetir afirmaciones… es reconectarte con tu verdad interior.</h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed text-balance">Este programa combina tres pilares para una transformación real:</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: index * 0.2 }} className="text-center space-y-4 p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center shadow-md shadow-brand-mid-green/10">
                  <Icon className="w-9 h-9 text-brand-gold" />
                </div>
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.8 }} className="text-center bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-brand-mid-green/10">
          <p className="text-xl md:text-2xl text-brand-dark-green leading-relaxed max-w-3xl mx-auto text-balance">A diferencia de otros programas, Re-Conéctate te lleva a la raíz de tu autocrítica para transformarla desde dentro.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiator;