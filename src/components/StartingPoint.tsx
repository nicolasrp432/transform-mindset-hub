"use client";
import { useState } from "react";
import Link from "next/link";
const paths = [
  {
    title: "Tengo demasiado en la cabeza",
    category: "UN MOMENTO PARA ESCUCHARTE",
    heading: (
      <>
        Empieza con
        <br />
        <em>una pausa.</em>
      </>
    ),
    text: "Cinco preguntas para observar cómo te estás sintiendo. Sin respuestas correctas, sin etiquetas. Solo un primer momento contigo.",
    action: "Hacer la autoevaluación",
    href: "/evaluacion",
    detail: "5 preguntas · A tu ritmo · Gratuita",
  },
  {
    title: "Quiero hablar de lo que me pasa",
    category: "ACOMPAÑAMIENTO PERSONAL",
    heading: (
      <>
        No tienes que
        <br />
        <em>ordenarlo a solas.</em>
      </>
    ),
    text: "Las sesiones 1:1 son un espacio para compartir lo que te preocupa, explorar tus patrones y decidir qué quieres trabajar con Ainara.",
    action: "Conocer las sesiones",
    href: "/sesiones",
    detail: "Una conversación · Un espacio para ti",
  },
  {
    title: "Prefiero explorar a mi ritmo",
    category: "HERRAMIENTAS Y FORMACIÓN",
    heading: (
      <>
        Un pequeño paso.
        <br />
        <em>Tu propio ritmo.</em>
      </>
    ),
    text: "Una guía, una reflexión o una formación. Explora los recursos de Ainara y encuentra una forma de empezar que encaje contigo.",
    action: "Explorar herramientas",
    href: "/herramientas",
    detail: "Guías · Agenda · Formaciones",
  },
];
export default function StartingPoint() {
  const [selected, setSelected] = useState(0);
  const path = paths[selected];
  return (
    <section
      className="starting-point"
      id="tu-punto-de-partida"
      aria-labelledby="starting-heading"
    >
      <div className="editorial-wrap">
        <div className="section-heading-line">
          <p className="eyebrow">01 / TU PUNTO DE PARTIDA</p>
          <span>No hace falta saber por dónde empezar.</span>
        </div>
        <div className="starting-grid">
          <div>
            <h2 id="starting-heading">
              ¿Qué necesitas
              <br />
              <em>hoy?</em>
            </h2>
            <div
              className="path-options"
              role="tablist"
              aria-label="Elige tu punto de partida"
              aria-orientation="vertical"
            >
              {paths.map((item, i) => (
                <button
                  key={item.title}
                  id={`path-${i}`}
                  role="tab"
                  aria-selected={selected === i}
                  aria-controls="path-panel"
                  tabIndex={selected === i ? 0 : -1}
                  onClick={() => setSelected(i)}
                  onKeyDown={(event) => {
                    let next = i;
                    if (event.key === "ArrowDown")
                      next = (i + 1) % paths.length;
                    else if (event.key === "ArrowUp")
                      next = (i + paths.length - 1) % paths.length;
                    else if (event.key === "Home") next = 0;
                    else if (event.key === "End") next = paths.length - 1;
                    else return;
                    event.preventDefault();
                    setSelected(next);
                    document.getElementById(`path-${next}`)?.focus();
                  }}
                >
                  <span>0{i + 1}</span>
                  {item.title}
                  <span className="choice-mark" aria-hidden="true">
                    {selected === i ? "−" : "+"}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div
            className="path-panel"
            id="path-panel"
            role="tabpanel"
            aria-labelledby={`path-${selected}`}
            tabIndex={0}
          >
            <p className="eyebrow">{path.category}</p>
            <h3>{path.heading}</h3>
            <p className="path-description">{path.text}</p>
            <Link href={path.href} className="editorial-button light">
              {path.action}
            </Link>
            <p className="path-detail">{path.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
