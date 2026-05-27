"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Brain,
  CheckCircle2,
  HeartHandshake,
  Shield,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";
import { PRODUCTS } from "@/lib/products";

const LESSONS = [
  {
    title: "Lección 1 · Ley del Mentalismo (El Origen de la Experiencia)",
    focus:
      "La mente no es un receptor pasivo, es la matriz. Diferencia entre Espíritu (mente consciente) y Alma (mente inconsciente).",
    key:
      "El conflicto nace cuando el espíritu adopta miedos y culpas que no resuenan con el propósito del alma.",
  },
  {
    title: "Lección 2 · El Mapa de Tu Energía (Los Arquetipos)",
    focus:
      "Los 12 arquetipos zodiacales como psicología evolutiva para aterrizar la teoría en identidad.",
    key:
      "Comprender el Héroe interior: la vida te rompe para liberar tu energía auténtica.",
  },
  {
    title: "Lección 3 · Ley de la Correspondencia (El Espejo de la Realidad)",
    focus:
      "Del victimismo a la maestría: lo exterior revela con precisión lo que necesita sanarse.",
    key:
      "Ordenar el plano físico inferior para reconfigurar el plano mental superior.",
  },
  {
    title: "Lección 4 · Ley de la Vibración (La Frecuencia de tu Realidad)",
    focus:
      "Fusión de hermetismo con física térmica. La emoción define la realidad que sintonizas.",
    key:
      "Acciones tácticas para subir la vibración: ira = escribir sin filtro, miedo = acción inmediata.",
  },
  {
    title: "Lección 5 · Ley de la Polaridad (La Escala de tus Emociones)",
    focus:
      "El arte de la transmutación mental: amor y odio son la misma energía en distintos grados.",
    key:
      "Deslizarse conscientemente por la escala emocional, un grado a la vez.",
  },
  {
    title: "Lección 6 · Ley del Ritmo (El Péndulo de la Vida)",
    focus:
      "Erradicar la culpa del retroceso: los bajones son parte del péndulo natural.",
    key:
      "Protocolo de válvula emocional y reglas de altitud: no decidir en el bajón.",
  },
  {
    title: "Lección 7 · Ley de Causa y Efecto (De Víctima a Creador)",
    focus:
      "Responsabilidad radical: el karma es ley natural, no castigo.",
    key:
      "El espacio de libertad de Viktor Frankl: pausa consciente entre estímulo y respuesta.",
  },
  {
    title: "Lección 8 · Ley de la Generación (El Arte de Crear tu Realidad)",
    focus:
      "Integración del sistema nervioso: energía femenina y masculina como fuerzas creadoras.",
    key:
      "Equilibrio entre sentir/recibir y actuar/estructurar para evitar caos o rigidez.",
  },
];

const RESOURCES = [
  {
    title: "Auditoría Mental (PDF)",
    text: "Plantilla para distinguir la energía del alma y la energía adquirida.",
    icon: Brain,
  },
  {
    title: "Reto de los 9 Días",
    text: "Limpieza física, erradicación de quejas y ruptura de bucles mentales.",
    icon: Target,
  },
  {
    title: "Termómetro Emocional (PDF)",
    text: "Escala de vibración con acciones físicas para transmutar emociones.",
    icon: Zap,
  },
  {
    title: "Protocolo de Anclaje de 5 Pasos",
    text: "Rutina específica para los días de bajón y recalibración emocional.",
    icon: HeartHandshake,
  },
  {
    title: "Audio Terapéutico Bonus",
    text: "Guía breve para frenar el péndulo emocional con un mantra de centro.",
    icon: Sparkles,
  },
  {
    title: "Guía de Activación de Energías",
    text: "Checklist diario para equilibrar energía femenina y masculina.",
    icon: CheckCircle2,
  },
];

export default function EmulsionEnergeticaPage() {
  const scrollToCta = () => {
    const target = document.getElementById("cta");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col min-h-screen bg-brand-beige">
      <section className="offer-banner bg-white text-center text-xs md:text-sm font-medium tracking-wide py-3 px-4 border-b border-brand-beige/60">
        Formación premium · acceso inmediato · cupos limitados
      </section>

      <section className="relative py-20 px-4 bg-brand-beige overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-mid-green/10 rounded-full opacity-60 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-mid-green/10 rounded-full opacity-60 blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-dark-green/70">
              Emulsión Energética
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Deja de luchar contra tus emociones y aprende la arquitectura mental para crear una vida alineada.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">
              Una formación terapéutica, estructurada y profunda, libre de espiritualidad exagerada o promesas milagro. Psicología, neurociencia y regulación del sistema nervioso en un solo método.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <button
                onClick={scrollToCta}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base sm:text-lg rounded-full shadow-lg shadow-brand-dark-green/20 transition-all duration-300 hover:shadow-xl hover:shadow-brand-dark-green/30"
              >
                Quiero acceder a la formación
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Arquitectura emocional premium, sin atajos.
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Esta formación está diseñada para mujeres que desean estructura, claridad y responsabilidad radical. Aquí no hay positivismo tóxico: hay método, regulación y un mapa emocional preciso.
            </p>
            <div className="space-y-3">
              {[
                "Metodología Ainara para distinguir mente consciente e inconsciente.",
                "Herramientas tácticas para subir frecuencia emocional de forma gradual.",
                "Integración de neurociencia, psicología y logoterapia.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-mid-green mt-1" />
                  <p className="text-foreground/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-brand-beige/40 p-8 border border-brand-beige/60 shadow-sm space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-mid-green font-semibold">Posicionamiento</p>
            <p className="text-lg text-brand-dark-green font-semibold">
              Terapéutico · estructurado · profundo · responsable
            </p>
            <p className="text-foreground/70 leading-relaxed">
              La formación está pensada como un mini-curso evergreen de alto valor percibido, con acceso inmediato y materiales descargables para sostener la transformación.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-beige">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">Estructura de lecciones</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Ocho leyes universales convertidas en un sistema de regulación emocional y responsabilidad consciente.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {LESSONS.map((lesson, index) => (
              <AccordionItem
                key={lesson.title}
                value={`lesson-${index}`}
                className="bg-white border-brand-beige/50 rounded-2xl px-6 shadow-sm hover:shadow-lg hover:shadow-brand-mid-green/10 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.2em] text-brand-mid-green">
                      {`Módulo ${index + 1}`}
                    </p>
                    <p className="text-lg font-semibold text-brand-dark-green">
                      {lesson.title}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2 space-y-3">
                  <p className="text-foreground/75 leading-relaxed">{lesson.focus}</p>
                  <p className="text-foreground/75 leading-relaxed">
                    <strong className="text-brand-dark-green">Clave emocional:</strong> {lesson.key}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">
              Ecosistema de materiales tácticos
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Recursos diseñados para aumentar el valor percibido y sostener tu avance de forma concreta.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {RESOURCES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-brand-beige/60 bg-brand-beige/30 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 border border-brand-beige/60">
                    <Icon className="w-6 h-6 text-brand-mid-green" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark-green mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-beige">
        <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Puente a sesiones 1:1
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Al finalizar el curso tendrás claridad sobre tus bloqueos. El CTA es directo pero suave: reserva una sesión 1:1 para estructurar tu regulación emocional con el método Ainara.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-md border border-brand-beige/60 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-mid-green">CTA de continuidad</p>
            <p className="text-foreground/80">
              Si has identificado tus bloqueos en tu Mapa del Alma o en tu Péndulo, agenda tu sesión privada.
            </p>
            <Link
              href="/sesiones"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-brand-mid-green text-brand-dark-green hover:bg-brand-mid-green/10 transition-colors duration-300 font-medium"
            >
              Reservar sesión 1:1
            </Link>
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">
              Accede hoy a Emulsión Energética
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Acceso inmediato a la formación, materiales descargables y seguimiento estructurado.
            </p>
          </div>
          <div className="rounded-3xl bg-brand-beige/40 p-8 md:p-10 text-center space-y-6 border border-brand-beige/60 shadow-md">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-mid-green font-semibold">
              Oferta de lanzamiento
            </p>
            <p className="text-5xl md:text-6xl font-bold text-brand-dark-green">
              {PRODUCTS.EMULSION_ENERGETICA.displayPrice}
            </p>
            <p className="text-foreground/70">IVA incluido · pago único</p>
            <motion.div whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.95 }}>
              <CheckoutButton productKey={PRODUCTS.EMULSION_ENERGETICA.key} className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base sm:text-lg rounded-full shadow-lg shadow-brand-dark-green/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-dark-green/40 w-full">
                Sí, quiero transformar mi energía
              </CheckoutButton>
            </motion.div>
            <div className="flex items-center justify-center gap-2 text-foreground/60 text-sm">
              <Shield size={14} />
              Pago seguro con Stripe
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
