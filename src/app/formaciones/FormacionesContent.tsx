"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Layers, Sparkles, UserCheck, Zap } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import TextReveal from "@/components/ui/TextReveal";
import PlatformHero from "@/components/landing/PlatformHero";
import {
  getProduct,
  getValueStackTotal,
  PLATFORM_HIGHLIGHTS,
  PLATFORM_LOGIN_URL,
  PLATFORM_NAME,
  PRODUCTS,
  type ProductKey,
} from "@/lib/products";

const HIGHLIGHT_ICONS = [Layers, Download, UserCheck];

const PLATFORM_FEATURES = PLATFORM_HIGHLIGHTS.map((item, index) => ({
  ...item,
  icon: HIGHLIGHT_ICONS[index],
}));

const courses: readonly {
  id: string;
  icon: typeof Sparkles;
  badge: string;
  productKey: ProductKey;
  description: string;
  tags: readonly string[];
  accent: string;
}[] = [
  {
    id: "reconectate",
    icon: Sparkles,
    badge: "Programa 01",
    productKey: PRODUCTS.RE_CONECTATE.key,
    description:
      "Un proceso de reconexión profunda contigo misma. Aprende a escuchar tu cuerpo, identificar tus bloqueos emocionales y recuperar el hilo conductor de tu vida desde la calma y la claridad.",
    tags: ["Autoconocimiento", "Emociones", "Presencia"],
    accent: "var(--color-secondary)",
  },
  {
    id: "emulsion-energetica",
    icon: Zap,
    badge: "Programa 02",
    productKey: PRODUCTS.EMULSION_ENERGETICA.key,
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
      <section
        className="section pt-32 lg:pt-40 pb-8 lg:pb-12"
        aria-labelledby="formaciones-heading"
      >
        <div className="container-editorial flex flex-col items-center text-center md:items-start md:text-left">
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
            Procesos profundos de transformación personal. Todo vive dentro de{" "}
            {PLATFORM_NAME}, y cada programa también puede adquirirse por
            separado.
          </p>
        </div>
      </section>

      {/* Mitra — la oferta principal */}
      <section className="section pt-0 pb-8" aria-labelledby="mitra-heading">
        <div className="container-editorial">
          <PlatformHero
            eyebrow="La plataforma"
            title={<span id="mitra-heading">{PLATFORM_NAME}</span>}
            lead="Todas las formaciones de Ainara en un mismo lugar, con sus materiales, tu progreso y lo que se vaya publicando. Es la forma completa de hacer el camino, sin ir comprando pieza a pieza."
            highlights={PLATFORM_FEATURES}
            ctaLabel="Solicitar acceso a la plataforma"
            ctaHref={PLATFORM_LOGIN_URL}
            ctaId="cta-plataforma"
            note="Te llevamos al portal oficial para crear tu acceso."
          />
        </div>
      </section>

      {/* Programas sueltos */}
      <section className="section pt-8" aria-labelledby="programas-heading">
        <div className="container-editorial">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">
              Programas individuales
            </p>
            <h2 id="programas-heading">
              ¿Prefieres empezar por un programa suelto?
            </h2>
            <p className="mt-4 text-text-muted">
              Cada formación se puede comprar por separado, con acceso de por
              vida y garantía de 7 días.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {courses.map((course) => {
              const Icon = course.icon;
              const product = getProduct(course.productKey);
              const valueTotal = getValueStackTotal(product);

              return (
                <motion.article
                  key={course.id}
                  variants={fadeUp}
                  className="group relative flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 lg:p-10 overflow-hidden transition-shadow duration-300 hover:shadow-xl h-full"
                >
                  <div
                    className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: course.accent }}
                    aria-hidden="true"
                  />

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

                  <div className="flex flex-col gap-4 flex-1">
                    <h3 className="font-serif text-3xl lg:text-4xl text-text leading-tight">
                      {product.shortName}
                    </h3>
                    <p className="text-text-muted leading-relaxed text-base">
                      {course.description}
                    </p>
                  </div>

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

                  <div className="pt-6 border-t border-border flex items-end justify-between gap-4">
                    <div>
                      {valueTotal && (
                        <p className="text-sm text-text-subtle line-through">
                          {valueTotal}
                        </p>
                      )}
                      <p className="font-serif text-4xl text-text">
                        {product.displayPrice}
                      </p>
                      <p className="text-xs text-text-subtle">pago único</p>
                    </div>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-medium text-sm tracking-wide transition-all duration-300 hover:bg-primary hover:text-white hover:gap-3"
                    >
                      Ver el programa
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
