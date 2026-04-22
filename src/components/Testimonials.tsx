'use client';

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { MoveRight, Sparkles } from "lucide-react";

/* ============================================================
   Resultados — Infinite Scroll Columns
   
   Diseño:
   - Marquee vertical (scroll infinito) de testimonios.
   - Efecto máscara de gradiente en el contenedor.
   - Foco en la transformación (Antes -> Después).
   - "Silencio Arquitectónico": Elegancia, espaciado premium y jerarquía.
   ============================================================ */

interface ProcessCase {
  before: string;
  after: string;
  name: string;
  role: string;
  initials: string;
}

const processCases: ProcessCase[] = [
  {
    before: "Saturación, bucles mentales constantes y agotamiento por querer controlar todo lo que no estaba en sus manos.",
    after: "Entendió sus procesos internos, delegó emocionalmente y recuperó el espacio mental para decidir con calma.",
    name: "Laura M.",
    role: "Directora de proyectos",
    initials: "LM",
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
  {
    before: "Parálisis por análisis constante, dudando de cada paso en la estrategia de su equipo.",
    after: "Adoptó una mentalidad de iteración rápida, liderando con confianza y claridad direccional.",
    name: "Javier T.",
    role: "CEO Tech",
    initials: "JT",
  },
  {
    before: "Identidad fusionada con el trabajo; la autoestima dependía únicamente de los resultados.",
    after: "Separó su valor personal de la productividad, logrando rendir mejor sin desgaste emocional.",
    name: "Elena G.",
    role: "Freelance Creativa",
    initials: "EG",
  }
];

function TestimonialCard({ caseData }: { caseData: ProcessCase }) {
  return (
    <div className="bg-surface rounded-3xl p-8 lg:p-10 border border-border/50 shadow-sm flex flex-col gap-6 mb-6 mx-2">
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-[10px] font-medium text-text-subtle uppercase tracking-wider flex items-center gap-2 mb-2">
            <span className="w-1 h-1 rounded-full bg-border" /> Antes
          </span>
          <p className="font-serif text-[17px] text-text-muted leading-relaxed">
            &ldquo;{caseData.before}&rdquo;
          </p>
        </div>
        
        <div className="flex py-1 text-primary/30">
          <MoveRight className="w-4 h-4 rotate-90" strokeWidth={1.5} />
        </div>
        
        <div>
          <span className="text-[10px] font-medium text-primary uppercase tracking-wider flex items-center gap-2 mb-2">
            <span className="w-1 h-1 rounded-full bg-primary" /> Después
          </span>
          <p className="font-serif text-[17px] text-text leading-relaxed">
            &ldquo;{caseData.after}&rdquo;
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/30">
        <div
          className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold tracking-wide shrink-0"
          aria-hidden="true"
        >
          {caseData.initials}
        </div>
        <div>
          <cite className="not-italic font-medium text-sm text-text block">
            {caseData.name}
          </cite>
          <span className="text-text-subtle text-xs tracking-wide">
            {caseData.role}
          </span>
        </div>
      </div>
    </div>
  );
}

function TestimonialColumn({ testimonials, className = "", duration = 15 }: { testimonials: ProcessCase[], className?: string, duration?: number }) {
  // Duplicamos el array para lograr un scroll infinito fluido
  const doubled = [...testimonials, ...testimonials];
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col"
      >
        {doubled.map((c, i) => (
          <TestimonialCard key={`${c.name}-${i}`} caseData={c} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  // Dividimos en columnas
  const col1 = [processCases[0], processCases[1]];
  const col2 = [processCases[2], processCases[3]];
  const col3 = [processCases[4], processCases[5]];

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

        {/* Columnas Infinite Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[700px] overflow-hidden">
          {/* Columna 1: Visible en todos lados */}
          <TestimonialColumn testimonials={col1} duration={20} />
          
          {/* Columna 2: Visible desde tablet, velocidad diferente */}
          <TestimonialColumn testimonials={col2} duration={26} className="hidden md:block" />
          
          {/* Columna 3: Visible desde escritorio, velocidad intermedia */}
          <TestimonialColumn testimonials={col3} duration={22} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
