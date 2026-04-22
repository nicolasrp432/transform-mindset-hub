"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Clock, Lock } from "lucide-react";
import { VisaIcon, MastercardIcon, PaypalIcon } from "@/components/reconectate/PaymentIcons";

const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const includes = [
    "6 semanas de contenido transformador",
    "Acceso de por vida al programa",
    "3 bonos exclusivos (valor 291€)",
    "Bitácora de Autoestima Diaria",
    "Sesión de grupo en vivo con Ainara",
    "Garantía de satisfacción de 7 días",
  ];

  const handleCTA = () => {
    window.location.href = "https://pay.hotmart.com/S102673436S";
  };

  return (
    <section id="cta" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">Tu mente puede ser tu aliada. Solo necesitas aprender a escucharla desde el amor.</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="bg-gradient-to-br from-brand-beige/50 to-white rounded-3xl p-6 md:p-10 space-y-8 shadow-2xl shadow-brand-mid-green/20 border border-white">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-wider text-brand-mid-green font-semibold">Oferta de lanzamiento</p>
            <div className="space-y-2">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-5xl md:text-7xl font-bold text-brand-dark-green">60,49€</motion.p>
              <p className="text-foreground/70">IVA Incluido - Pago único</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 space-y-4 shadow-inner shadow-brand-mid-green/10">
            <div className="flex items-center justify-center gap-2 text-brand-dark-green">
              <Clock className="w-5 h-5" />
              <p className="font-medium">La oferta termina en:</p>
            </div>
            <div className="flex justify-center gap-2 sm:gap-4">
              <div className="text-center">
                <div className="bg-brand-beige/50 rounded-lg px-3 py-2 min-w-[60px] sm:min-w-[70px]">
                  <p className="text-2xl sm:text-3xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</p>
                </div>
                <p className="text-xs text-foreground/70 mt-1.5">Horas</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-beige/50 rounded-lg px-3 py-2 min-w-[60px] sm:min-w-[70px]">
                  <p className="text-2xl sm:text-3xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</p>
                </div>
                <p className="text-xs text-foreground/70 mt-1.5">Minutos</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-beige/50 rounded-lg px-3 py-2 min-w-[60px] sm:min-w-[70px]">
                  <p className="text-2xl sm:text-3xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</p>
                </div>
                <p className="text-xs text-foreground/70 mt-1.5">Segundos</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 pt-4">
            <p className="font-semibold text-lg text-center">Esto es lo que incluye:</p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {includes.map((item, index) => (
                <motion.div key={index} className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <p className="text-foreground/80">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="text-center pt-6 space-y-6">
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <Button onClick={handleCTA} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-6 text-base sm:text-lg rounded-full shadow-lg shadow-brand-dark-green/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-dark-green/40 w-full">🌸 Sí, quiero mi seguridad interior</Button>
            </motion.div>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-foreground/60 text-sm">
                <Lock size={14} />
                <span>Pago 100% seguro y encriptado</span>
              </div>
              <div className="flex justify-center items-center gap-4 text-gray-500">
                <VisaIcon width={32} height={32} />
                <MastercardIcon width={32} height={32} />
                <PaypalIcon width={32} height={32} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;