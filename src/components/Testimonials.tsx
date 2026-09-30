"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface ProcessCase {
  before: string;
  after: string;
  name: string;
  role: string;
  initials: string;
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
        <div
          className="testimonial-story"
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
            <cite>
              {item.name}
              <span>{item.role}</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
