"use client";

import { motion, Variants } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import TextReveal from "@/components/ui/TextReveal";

/* ============================================================
   ServiceGrid — Embudo de Conversión Visual (Bento Grid)
   ============================================================ */

interface Service {
  number: string;
  title: string;
  description: string;
  detail: string;
  href: string;
  label: string;
  className: string;
  image?: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Sesiones 1:1",
    description:
      "Un espacio privado donde no tienes que tener todo claro para empezar.",
    detail:
      "Trabajamos bloqueos, patrones emocionales y decisiones pendientes con profundidad y sin prisa. Cada sesión es un acto de orden interno.",
    href: "/sesiones",
    label: "Reservar sesión",
    className: "md:col-span-2 md:row-span-2 min-h-[400px]",
    image: "https://images.unsplash.com/photo-1517487881594-2787f0727c23?w=640&q=80&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Formaciones",
    description: "Procesos guiados de transformación en grupo.",
    detail: "Reconexión Personal, Leyes Universales.",
    href: "/formaciones",
    label: "Ver programas",
    className: "md:col-span-2 md:row-span-1 min-h-[250px]",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=640&q=80&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Herramientas",
    description: "Tu primer paso hacia la claridad.",
    detail: "Guía práctica PDF, agenda de reflexión y cuento simbólico.",
    href: "/herramientas",
    label: "Explorar recursos",
    className: "md:col-span-2 md:row-span-1 min-h-[250px]",
  },
];

const cardHover: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageHover: Variants = {
  rest: { scale: 1, filter: "grayscale(100%) opacity(30%)" },
  hover: {
    scale: 1.05,
    filter: "grayscale(0%) opacity(80%)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServiceGrid() {
  return (
    <section className="section bg-surface" aria-labelledby="services-heading">
      <div className="container-editorial">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-xl mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-text-subtle text-xs tracking-[0.25em] uppercase mb-4 font-sans"
          >
            Cómo puedo acompañarte
          </motion.p>
          <TextReveal text="Tres caminos hacia el orden interno" className="font-serif text-3xl md:text-4xl leading-tight mb-8" as="h2" />
          <motion.div variants={fadeUp}>
            <hr className="divider-breath" />
          </motion.div>
          <motion.p variants={fadeUp} className="text-text-muted leading-relaxed">
            No ofrezco motivación. Ofrezco estructura, escucha y herramientas
            para que puedas tomar decisiones conscientes — a tu ritmo.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 md:grid-cols-4 auto-rows-fr"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={fadeUp}
              className={`${service.className}`}
            >
              <Link href={service.href} className="block h-full cursor-none">
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="group relative h-full p-8 bg-white rounded-2xl border border-transparent hover:border-secondary overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  {service.image && (
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      variants={imageHover}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
                    />
                  )}
                  {service.image && (
                    <div className="absolute inset-0 bg-white/70 dark:bg-black/40 z-0 group-hover:bg-white/40 transition-colors duration-700" />
                  )}
                  
                  <div className="relative z-10">
                    <span className="block font-serif text-4xl font-light text-secondary select-none mb-6 leading-none">
                      {service.number}
                    </span>
                    <h3 className="font-serif text-2xl mb-2 text-text group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 font-medium max-w-[40ch]">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-start gap-6 mt-8">
                    <p className="text-text-subtle text-sm leading-relaxed max-w-[50ch]">
                      {service.detail}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary tracking-wide group-hover:gap-2.5 transition-all duration-[250ms]">
                      {service.label}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div
                    className="absolute top-0 inset-x-0 h-[2px] bg-primary rounded-t-2xl origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                    aria-hidden="true"
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
