"use client";
import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeUp, stagger } from "@/lib/animations";
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
        <motion.figure className="hero-cutout-stage" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>
          <Image src="/images/ainara-hero-cutout.webp" alt="Ainara sonriendo" width={1218} height={1291} priority sizes="(max-width: 760px) 100vw, (max-width: 1100px) 54vw, 700px" className="hero-cutout-image" />
          <figcaption className="hero-cutout-signature">Ainara Unamunzaga<span>Tu espacio empieza con una conversación.</span></figcaption>
        </motion.figure>
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
