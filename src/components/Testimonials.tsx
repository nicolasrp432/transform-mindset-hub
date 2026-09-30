"use client";
import TestimonialAvatar from "@/components/TestimonialAvatar";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface ProcessCase {
  before: string;
  after: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
}
const processCases: ProcessCase[] = [
  {
    before:
      "Saturación, bucles mentales constantes y agotamiento por querer controlar todo lo que no estaba en sus manos.",
    after:
      "Entendió sus procesos internos, delegó emocionalmente y recuperó el espacio mental para decidir con calma.",
    name: "Laura M.",
    role: "Directora de proyectos",
    initials: "LM",
  },
  {
    before:
      "Miedo paralizante a avanzar profesionalmente por un fuerte síndrome del impostor.",
    after:
      "Construyó un nuevo diálogo interno que le permitió lanzar su negocio sin autosabotaje.",
    name: "Carlos R.",
    role: "Emprendedor",
    initials: "CR",
  },
  {
    before:
      "Relaciones conflictivas basadas en patrones automáticos de reacción y defensiva.",
    after:
      "Aprendió a pausar, escuchar la emoción base y elegir respuestas desde la neutralidad.",
    name: "Marta S.",
    role: "Docente",
    initials: "MS",
  },
  {
    before:
      "Sensación crónica de 'no hacer suficiente' a pesar de estar agotada.",
    after:
      "Reconectó con sus verdaderas prioridades, soltando la culpa y abrazando el descanso.",
    name: "Ana P.",
    role: "Psicóloga clínica",
    initials: "AP",
  },
  {
    before:
      "Parálisis por análisis constante, dudando de cada paso en la estrategia de su equipo.",
    after:
      "Adoptó una mentalidad de iteración rápida, liderando con confianza y claridad direccional.",
    name: "Javier T.",
    role: "CEO Tech",
    initials: "JT",
  },
  {
    before:
      "Identidad fusionada con el trabajo; la autoestima dependía únicamente de los resultados.",
    after:
      "Separó su valor personal de la productividad, logrando rendir mejor sin desgaste emocional.",
    name: "Elena G.",
    role: "Freelance Creativa",
    initials: "EG",
  },
];

export default function Testimonials() {
  const reduced = useReducedMotion();
  const [animated, setAnimated] = useState(true);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const item = processCases[index];
  return (
    <section
      className="testimonials-editorial"
      aria-labelledby="results-heading"
    >
      <div className="editorial-wrap">
        <div className="testimonials-heading">
          <div>
            <p className="eyebrow">04 / EXPERIENCIAS</p>
            <h2 id="results-heading">
              Cada proceso,
              <br />
              <em>una historia.</em>
            </h2>
          </div>
          <div className="testimonial-controls">
            <button
              aria-label="Experiencia anterior"
              onClick={() =>
                setIndex(
                  (index + processCases.length - 1) % processCases.length,
                )
              }
            >
              <ChevronLeft size={20} />
            </button>
            <span>
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(processCases.length).padStart(2, "0")}
            </span>
            <button
              aria-label="Siguiente experiencia"
              onClick={() => setIndex((index + 1) % processCases.length)}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <button className="editorial-link" type="button" onClick={() => setAnimated(!animated)}>
          {animated && !reduced ? "Leer a mi ritmo" : "Ver testimonios en movimiento"}
        </button>
        {animated && !reduced ? <>
          <button className="editorial-link motion-pause" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>
            {paused ? "Reanudar movimiento" : "Pausar movimiento"}
          </button>
          <div className={`testimonial-marquee ${paused ? "is-paused" : ""}`}>
            {[0, 1, 2].map((column) => <div className="testimonial-column" key={column}>
              <div className="testimonial-track" style={{ animationDuration: `${[20, 26, 22][column]}s` }}>
                {[0, 1].map((copy) => <div className="testimonial-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                  {processCases.slice(column * 2, column * 2 + 2).map((story) => <article className="testimonial-moving-card" key={story.name}>
                    <p className="eyebrow">SU PUNTO DE PARTIDA</p><p>{story.before}</p>
                    <p className="eyebrow">SU PROCESO</p><blockquote>“{story.after}”</blockquote>
                    <div className="testimonial-author"><TestimonialAvatar name={story.name} photo={story.photo} /><cite>{story.name}<span>{story.role}</span></cite></div>
                  </article>)}
                </div>)}
              </div>
            </div>)}
          </div>
        </> : <motion.div
          className="testimonial-story"
            key={index}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          aria-live="polite"
          aria-atomic="true"
        >
          <div>
            <p className="eyebrow">SU PUNTO DE PARTIDA</p>
            <p>{item.before}</p>
          </div>
          <div>
            <p className="eyebrow">LO QUE COMPARTE DE SU PROCESO</p>
            <blockquote>“{item.after}”</blockquote>
            <div className="testimonial-author"><TestimonialAvatar name={item.name} photo={item.photo} /><cite>
              {item.name}
              <span>{item.role}</span>
            </cite></div>
          </div>
        </motion.div>}
      </div>
    </section>
  );
}
