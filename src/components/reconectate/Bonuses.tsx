"use client";
import React from "react";
import { motion } from "framer-motion";
import { Gift, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Bonuses = () => {
  const bonusesData = [
    { icon: <Gift className="w-8 h-8 text-brand-dark-green" />, title: "Mini curso '5 ejercicios para silenciar la voz crítica'", value: "97€" },
    { icon: <BookOpen className="w-8 h-8 text-brand-dark-green" />, title: "Bitácora de Autoestima Diaria", value: "47€" },
    { icon: <Users className="w-8 h-8 text-brand-dark-green" />, title: "Sesión de grupo con Ainara", value: "147€" },
  ];

  const handleCTA = () => {
    window.location.href = "https://pay.hotmart.com/S102673436S";
  };

  return (
    <section className="py-16 px-4 bg-brand-beige">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">¡Y eso no es todo! Recibe estos bonos exclusivos</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">Para potenciar tu transformación, he preparado estos regalos que complementarán tu camino.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonusesData.map((bonus, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }} className="bg-white rounded-3xl p-6 space-y-4 shadow-xl shadow-brand-mid-green/10 border border-white hover:shadow-2xl hover:shadow-brand-mid-green/20 transition-all duration-300">
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-brand-beige mx-auto">{bonus.icon}</div>
              <h3 className="text-xl font-semibold text-brand-dark-green">{bonus.title}</h3>
              <p className="text-lg font-bold text-primary">Valor: {bonus.value}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} className="space-y-6 pt-6">
          <p className="text-2xl md:text-3xl font-bold text-brand-dark-green">Valor total en bonos: <span className="text-primary">291€</span></p>
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button onClick={handleCTA} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base sm:text-lg rounded-full shadow-lg shadow-brand-dark-green/20 transition-all duration-300 hover:shadow-xl hover:shadow-brand-dark-green/30">🌸 Sí, quiero mis bonos</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bonuses;