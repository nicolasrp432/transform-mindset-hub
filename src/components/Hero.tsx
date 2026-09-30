"use client";
import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeUp, stagger } from "@/lib/animations";
import InteractiveSurface from "@/components/ui/InteractiveSurface";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="editorial-hero" aria-labelledby="hero-heading">
      <div className="editorial-wrap hero-grid">
        <motion.div className="hero-copy" variants={stagger} initial={reduced ? false : "hidden"} animate="visible">
          <motion.p variants={fadeUp} className="eyebrow">AINARA UNAMUNZAGA · COACH IE + PNL</motion.p>
          <motion.h1 variants={fadeUp} id="hero-heading">
            Menos ruido.
            <br />
            Más <em>tú.</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-lead">
            Un espacio para escucharte, entender lo que te pasa y volver a
            decidir desde la claridad.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-actions">
            <MagneticButton asChild>
            <Link className="editorial-button" href="/evaluacion">
              Empieza por escucharte
            </Link>
            </MagneticButton>
            <a className="editorial-link" href="#conoce-a-ainara">
              Conoce a Ainara
            </a>
          </motion.div>
          <div className="hero-note">
            <span className="note-line" />
            <p>
              No tienes que tenerlo todo claro
              <br />
              para empezar a hablar.
            </p>
          </div>
        </motion.div>
        <InteractiveSurface className="hero-image-surface"><motion.figure className="hero-portrait" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Image
            src="/ainara-image.jpg"
            alt="Ainara sonriendo en su espacio de trabajo"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 46vw"
          />
          <figcaption>
            <span>ESCUCHA. PERSPECTIVA. CLARIDAD.</span>
            <p>
              Vamos a empezar
              <br />
              por lo que <em>sientes.</em>
            </p>
          </figcaption>
          <span className="portrait-index" aria-hidden="true">
            01 / UN ESPACIO PARA TI
          </span>
        </motion.figure></InteractiveSurface>
      </div>
      <div className="expertise-strip editorial-wrap">
        <span>Inteligencia emocional</span>
        <span>Programación neurolingüística</span>
        <span>Acompañamiento personal</span>
        <a href="#tu-punto-de-partida">Encuentra tu punto de partida</a>
      </div>
    </section>
  );
}
