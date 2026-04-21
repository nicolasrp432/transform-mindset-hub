"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain } from "lucide-react";

/* ============================================================
   EvaluationCTA — Bloque de alta conversión
   Inyectado antes del Footer en Home.
   ============================================================ */

export default function EvaluationCTA() {
  return (
    <section className="relative py-28 md:py-36 px-6 overflow-hidden bg-[var(--color-surface)]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)] opacity-[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-[var(--color-base)] flex items-center justify-center text-[var(--color-primary)] border border-[var(--color-border)]/50 shadow-sm"
        >
          <Brain className="w-8 h-8" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-5"
        >
          Descubre tu nivel de ruido mental.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[var(--color-text-muted)] text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Responde 5 breves preguntas para obtener un diagnóstico inmediato
          y descubrir cómo recuperar tu claridad.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/evaluacion"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-primary)] text-white hover:opacity-90 transition-all duration-500 font-medium tracking-wide uppercase text-sm group shadow-lg shadow-[var(--color-primary)]/20"
          >
            Realizar Test Gratuito
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xs text-[var(--color-text-subtle)] mt-8 uppercase tracking-[0.2em]"
        >
          2 minutos · Sin registro previo · 100% confidencial
        </motion.p>
      </div>
    </section>
  );
}
