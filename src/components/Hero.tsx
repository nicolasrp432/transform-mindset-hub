"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, lineReveal } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";

/* ============================================================
   Hero — "Silencio Arquitectónico"
   
   Estrategia de conversión:
   - Headline que nombra el dolor (ruido, saturación)
   - Subtítulo que posiciona la solución (claridad, orden)
   - Doble CTA: alta intención (sesión) + baja barrera (herramientas)
   - Imagen sutil de contexto arquitectónico (solo desktop)
   
   Performance (Core Web Vitals):
   - Background image: decorativa (opacity 4%), aria-hidden, no LCP
   - Visual column: <Image priority> para LCP instantáneo
   - min-h reservado en contenedores para prevenir CLS
   ============================================================ */

export default function Hero() {
  return (
    <section
      className="section relative min-h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image — very subtle architectural texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/ainara-hero.jpg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover opacity-[0.04]"
          sizes="100vw"
          priority
        />
        {/* Bottom fade into base color */}
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{
            background:
              "linear-gradient(to top, var(--color-base), transparent)",
          }}
        />
      </div>

      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text Column primero en DOM para SEO */}
          {/* Text Column — min-h reservado para prevenir CLS */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="min-h-[300px] md:min-h-[380px]"
          >
            <motion.p
              variants={fadeUp}
              className="text-text-subtle text-xs tracking-[0.25em] uppercase mb-8 font-sans"
            >
              Ainara · Acompañamiento emocional
            </motion.p>

            {/* CLS prevention: overflow-hidden wrapper with reserved height */}
            <div className="overflow-hidden min-h-[120px] md:min-h-[150px]">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                id="hero-heading"
                className="font-serif"
              >
                El ruido no se cura
                <br />
                <span className="text-text-muted">con más ruido.</span>
              </motion.h1>
            </div>

            <motion.div variants={lineReveal}>
              <hr className="divider-breath" />
            </motion.div>

            {/* CLS prevention: min-h for body text */}
            <motion.p
              variants={fadeUp}
              className="text-text-muted text-lg max-w-[54ch] leading-relaxed min-h-[80px]"
            >
              Acompañamiento para personas que quieren salir de la saturación
              mental, entender sus procesos internos y tomar decisiones desde
              la claridad — no desde el miedo.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton asChild className="group inline-flex flex-row items-center justify-center gap-2.5 whitespace-nowrap px-8 py-4 bg-primary text-white rounded-lg text-sm font-medium tracking-wide transition-all duration-[250ms] hover:opacity-90 hover:gap-3.5 shadow-lg shadow-primary/20 cursor-none">
                <Link href="/sesiones" className="flex flex-row items-center gap-2.5 whitespace-nowrap">
                  Reserva tu sesión
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-[250ms] group-hover:translate-x-0.5" />
                </Link>
              </MagneticButton>

              <MagneticButton asChild className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-text rounded-lg text-sm font-medium tracking-wide transition-colors duration-[250ms] hover:bg-surface hover:border-secondary cursor-none">
                <Link href="/herramientas">
                  Explorar herramientas
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Visual Column — visible desde md, LCP candidate con next/image priority */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center md:justify-end order-first md:order-last"
          >
            {/* Mobile: círculo compacto; md+: rectángulo editorial */}
            <div className="w-52 h-52 md:w-[300px] md:h-[390px] lg:w-[340px] lg:h-[440px] rounded-2xl overflow-hidden relative border border-border shadow-lg cursor-pointer">
              <motion.div
                whileHover={{ filter: "grayscale(0%)", opacity: 0.9 }}
                whileTap={{ filter: "grayscale(0%)", opacity: 0.9 }}
                style={{ filter: "grayscale(100%)", opacity: 0.7 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src="/imagen-hero.png"
                  alt="Ainara — acompañamiento emocional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 208px, (max-width: 1024px) 300px, 340px"
                  priority
                />
              </motion.div>
            </div>
            {/* Decorative border accent */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-secondary/50 -z-10"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
