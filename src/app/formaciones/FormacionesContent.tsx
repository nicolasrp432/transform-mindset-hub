"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import TextReveal from "@/components/ui/TextReveal";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";

const courses = [
  {
    id: "reconectate",
    icon: Sparkles,
    badge: "Programa 01",
    title: "Re-conéctate",
    description:
      "Un proceso de reconexión profunda contigo misma. Aprende a escuchar tu cuerpo, identificar tus bloqueos emocionales y recuperar el hilo conductor de tu vida desde la calma y la claridad.",
    tags: ["Autoconocimiento", "Emociones", "Presencia"],
    accent: "var(--color-secondary)",
  },
  {
    id: "emulsion-energetica",
    icon: Zap,
    badge: "Programa 02",
    title: "Emulsión Energética",
    description:
      "Un programa de transformación energética que te lleva a comprender y trabajar con tus campos de energía personal, alineando cuerpo, mente y propósito para actuar con plenitud.",
    tags: ["Energía", "Propósito", "Transformación"],
    accent: "var(--color-primary)",
  },
];

export default function FormacionesContent() {
  return (
    <main>
      {/* Header */}
      <section className="section" aria-labelledby="formaciones-heading">
        <div className="container-editorial">
          <p className="text-text-subtle text-sm tracking-widest uppercase mb-4">
            Transformación
          </p>
          <TextReveal
            text="Formaciones"
            id="formaciones-heading"
            className="font-serif"
            as="h1"
          />
          <hr className="divider-breath" />
          <p className="text-text-muted text-lg max-w-[58ch]">
            Procesos profundos de transformación personal. Cada formación es un
            viaje diseñado para reconectarte contigo misma y acceder a una
            comprensión más profunda de tus procesos.
          </p>
        </div>
      </section>

      {/* Bento cards */}
      <section className="section pt-0" aria-label="Listado de formaciones">
        <div className="container-editorial">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <motion.article
                  key={course.id}
                  variants={fadeUp}
                  className="group relative flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 lg:p-10 overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Accent top bar */}
                  <div
                    className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: course.accent }}
                    aria-hidden="true"
                  />

                  {/* Icon + badge */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `color-mix(in srgb, ${course.accent} 12%, transparent)`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: course.accent }}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-text-subtle text-xs tracking-[0.2em] uppercase font-sans">
                      {course.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 flex-1">
                    <h2 className="font-serif text-3xl lg:text-4xl text-text leading-tight">
                      {course.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed text-base">
                      {course.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-border text-text-subtle font-sans tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* CTA Principal — external platform */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-16 flex flex-col items-center gap-4 text-center"
          >
            <p className="text-text-subtle text-sm tracking-widest uppercase font-sans">
              ¿Lista para comenzar?
            </p>
            <a
              href="https://plataforma.ainaracoaching.com"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-plataforma"
              className="inline-flex flex-row items-center justify-center gap-3 whitespace-nowrap px-10 py-5 bg-primary text-white rounded-xl text-sm font-medium tracking-wide shadow-lg shadow-primary/25 transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:gap-4"
            >
              Solicitar acceso a la plataforma
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
            <p className="text-text-subtle text-xs max-w-[36ch] leading-relaxed">
              La plataforma de formaciones está gestionada externamente. Serás
              redirigida al portal oficial.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
