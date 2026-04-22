'use client';

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section className="section py-32 bg-base" aria-labelledby="about-heading">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">

          {/* Col 1: Image - Asymmetric & Filtered */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl cursor-pointer"
          >
            {/* Using an Unsplash placeholder with CSS filters for aesthetic coherence */}
            <motion.div
              whileHover={{ filter: "sepia(0%) grayscale(0%) contrast(100%)" }}
              whileTap={{ filter: "sepia(0%) grayscale(0%) contrast(100%)" }}
              style={{ filter: "sepia(35%) grayscale(50%) contrast(90%)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/ainara-image.jpg"
                alt="Retrato de Ainara"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 400px"
                priority
              />
            </motion.div>
            {/* Decorator */}
            <div className="absolute inset-0 border border-primary/20 rounded-2xl mix-blend-overlay pointer-events-none" />
          </motion.div>

          {/* Col 2: Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-text-subtle text-xs tracking-[0.25em] uppercase mb-4 font-sans"
            >
              Sobre la mentora
            </motion.p>

            <motion.h2
              variants={fadeUp}
              id="about-heading"
              className="font-serif text-4xl lg:text-5xl text-text mb-8 text-balance"
            >
              Más que motivación, te ofrezco orden y estructura mental.
            </motion.h2>

            <motion.div variants={fadeUp} className="prose prose-p:text-text-muted prose-p:leading-relaxed max-w-none">
              <p className="mb-6">
                Mi enfoque no se trata de empujarte a hacer más, sino de enseñarte a entender <strong>por qué no avanzas</strong>. Combino disciplina y empatía profunda para llegar a la raíz de tus patrones de comportamiento.
              </p>

              <p className="mb-8">
                Mi experiencia se fundamenta en la <strong>Inteligencia Emocional</strong>, <strong>PNL Avanzada</strong> certificada y avalada por ASESCO, y el acompañamiento energético a través de mi certificación en el Nivel 2 de <strong>Reiki</strong>. Esta mezcla me permite trabajar no solo desde lo cognitivo, sino desde lo somático y lo sutil.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <span className="block font-serif text-3xl text-primary mb-1">ASESCO</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-text-subtle">Aval Certificado</span>
                </div>
                <div>
                  <span className="block font-serif text-3xl text-primary mb-1">+500h</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-text-subtle">Sesiones de claridad</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
