"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import InteractiveSurface from "@/components/ui/InteractiveSurface";
import Image from "next/image";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";
const chapters = [
  {
    title: "Mi enfoque",
    text: "Mi enfoque no consiste en empujarte a hacer más. Se trata de entender por qué no avanzas, qué patrones se repiten y qué necesitas escuchar de ti. Combino estructura y empatía para acompañarte en ese proceso.",
  },
  {
    title: "Mi formación",
    text: "Mi trabajo se apoya en la Inteligencia Emocional y la PNL Avanzada certificada y avalada por ASESCO. Mi formación también incluye el Nivel 2 de Reiki. En nuestra conversación podemos explorar qué enfoque encaja contigo.",
  },
  {
    title: "Nuestra primera conversación",
    text: "Puedes empezar contando qué te trae aquí, aunque todavía no sepas explicarlo del todo. Hablaremos de lo que buscas y podrás preguntar por mi forma de trabajar antes de decidir tu siguiente paso.",
  },
];
export default function AboutMeSection() {
  const reduced = useReducedMotion();
  const [chapter, setChapter] = useState(0);
  return (
    <section
      id="conoce-a-ainara"
      className="about-editorial"
      aria-labelledby="about-heading"
    >
      <div className="editorial-wrap about-grid">
        <InteractiveSurface className="about-photo">
          <Image
            src="/imagen-hero.png"
            alt="Ainara sentada, preparada para escuchar"
            fill
            sizes="(max-width: 760px) 100vw, 40vw"
          />
          <span className="photo-caption">
            AINARA, AL OTRO LADO DE LA CONVERSACIÓN.
          </span>
        </InteractiveSurface>
        <div className="about-copy">
          <p className="eyebrow">02 / CONOCE A AINARA</p>
          <h2 id="about-heading">
            Soy Ainara.
            <br />Y antes de todo,
            <br />
            <em>te escucho.</em>
          </h2>
          <p className="about-intro">
            Más que motivación, te ofrezco un espacio para comprenderte y poner
            orden en lo que sientes.
          </p>
          <div
            className="chapter-tabs"
            role="tablist"
            aria-label="Conoce mi forma de trabajar"
          >
            {chapters.map((item, i) => (
              <button
                key={item.title}
                role="tab"
                id={`chapter-${i}`}
                aria-selected={chapter === i}
                aria-controls="chapter-panel"
                tabIndex={chapter === i ? 0 : -1}
                onClick={() => setChapter(i)}
                onKeyDown={(event) => {
                  let next = i;
                  if (event.key === "ArrowRight")
                    next = (i + 1) % chapters.length;
                  else if (event.key === "ArrowLeft")
                    next = (i + chapters.length - 1) % chapters.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = chapters.length - 1;
                  else return;
                  event.preventDefault();
                  setChapter(next);
                  document.getElementById(`chapter-${next}`)?.focus();
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
          <motion.div
            id="chapter-panel"
            className="chapter-panel"
            key={chapter}
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            role="tabpanel"
            aria-labelledby={`chapter-${chapter}`}
            tabIndex={0}
          >
            <p>{chapters[chapter].text}</p>
          </motion.div>
          <a
            className="editorial-link"
            href={CONTACT_LINKS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos de lo que necesitas
          </a>
          <div className="about-signature">
            <span>Ainara Unamunzaga</span>
            <p>INTELIGENCIA EMOCIONAL + PNL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
