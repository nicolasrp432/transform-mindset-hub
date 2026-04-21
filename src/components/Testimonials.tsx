'use client';

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { MoveRight, Sparkles } from "lucide-react";

/* ============================================================
   Resultados — Prueba Social Estructurada (Bento Grid)
   
   Diseño:
   - Bento Grid de alto impacto visual.
   - Foco en la transformación (Antes -> Después).
   - "Silencio Arquitectónico": Sin avatares, solo iniciales y jerarquía.
   ============================================================ */

interface ProcessCase {
  before: string;
  after: string;
  name: string;
  role: string;
  initials: string;
  highlighted?: boolean;
}

const processCases: ProcessCase[] = [
  {
    before: "Saturación, bucles mentales constantes y agotamiento por querer controlar todo lo que no estaba en sus manos.",
    after: "Entendió sus procesos internos, delegó emocionalmente y recuperó el espacio mental para decidir con calma.",
    name: "Laura M.",
    role: "Directora de proyectos",
    initials: "LM",
    highlighted: true,
  },
  {
    before: "Miedo paralizante a avanzar profesionalmente por un fuerte síndrome del impostor.",
    after: "Construyó un nuevo diálogo interno que le permitió lanzar su negocio sin autosabotaje.",
    name: "Carlos R.",
    role: "Emprendedor",
    initials: "CR",
  },
  {
    before: "Relaciones conflictivas basadas en patrones automáticos de reacción y defensiva.",
    after: "Aprendió a pausar, escuchar la emoción base y elegir respuestas desde la neutralidad.",
    name: "Marta S.",
    role: "Docente",
    initials: "MS",
  },
  {
    before: "Sensación crónica de 'no hacer suficiente' a pesar de estar agotada.",
    after: "Reconectó con sus verdaderas prioridades, soltando la culpa y abrazando el descanso.",
    name: "Ana P.",
    role: "Psicóloga clínica",
    initials: "AP",
  },
];

export default function Testimonials() {
  const featured = processCases.find((c) => c.highlighted);
  const others = processCases.filter((c) => !c.highlighted);

  return (
    <section className="section bg-background" aria-labelledby="results-heading">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-text-subtle text-xs tracking-[0.25em] uppercase mb-4 font-sans flex items-center gap-2"
          >
            <Sparkles className="w-3 h-3 text-primary" />
            Casos de Éxito
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="results-heading"
            className="font-serif"
          >
            Del ruido a la claridad:
            <br />
            procesos reales.
          </motion.h2>
          <motion.div variants={fadeUp}>
            <hr className="divider-breath" />
          </motion.div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Bento Box */}
          {featured && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-2 bg-surface rounded-3xl p-8 lg:p-12 border border-border/50 shadow-sm flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-background via-primary to-background opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-start">
                  <div>
                    <span className="inline-block px-3 py-1 bg-background rounded-full text-[10px] uppercase tracking-wider text-text-subtle font-medium mb-4">
                      Antes del proceso
                    </span>
                    <p className="font-serif text-xl lg:text-2xl text-text-muted leading-relaxed">
                      &ldquo;{featured.before}&rdquo;
                    </p>
                  </div>
                  
                  <div className="hidden md:flex h-full items-center justify-center px-4 self-stretch text-primary/30">
                    <MoveRight className="w-6 h-6" strokeWidth={1} />
                  </div>
                  
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] uppercase tracking-wider font-medium mb-4">
                      Claridad alcanzada
                    </span>
                    <p className="font-serif text-xl lg:text-2xl text-text leading-relaxed">
                      &ldquo;{featured.after}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold tracking-wide shrink-0"
                  aria-hidden="true"
                >
                  {featured.initials}
                </div>
                <div>
                  <cite className="not-italic font-medium text-sm text-text block">
                    {featured.name}
                  </cite>
                  <span className="text-text-subtle text-xs tracking-wide">
                    {featured.role}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Secondary Bento Boxes */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            {others.map((c) => (
              <motion.div
                key={c.name}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-border transition-all duration-[400ms] hover:shadow-md flex flex-col group"
              >
                <div className="flex flex-col gap-4 mb-8">
                  <div>
                    <span className="text-xs font-medium text-text-subtle flex items-center gap-2 mb-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-border" /> Antes
                    </span>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {c.before}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary flex items-center gap-2 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Después
                    </span>
                    <p className="text-text text-sm leading-relaxed font-medium">
                      {c.after}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
                  <div
                    className="w-8 h-8 rounded-full bg-secondary text-text flex items-center justify-center text-[10px] font-bold shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-[400ms]"
                    aria-hidden="true"
                  >
                    {c.initials}
                  </div>
                  <div>
                    <cite className="not-italic font-medium text-xs text-text block">
                      {c.name}
                    </cite>
                    <span className="text-text-subtle text-[10px]">
                      {c.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
