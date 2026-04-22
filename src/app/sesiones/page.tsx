"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/ainaracoachpnl/reunion-con-ainara";
const WHATSAPP_URL =
  "https://wa.me/34692627353?text=Hola%20Ainara%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20tus%20sesiones...";

const steps = [
  {
    number: "01",
    title: "Diagnóstico Silencioso",
    description:
      "Identificar el ruido que bloquea tu toma de decisiones y entender tus patrones actuales de pensamiento sin juicios.",
  },
  {
    number: "02",
    title: "Re-estructuración",
    description:
      "Herramientas de PNL y Coaching para cambiar la narrativa interna y construir bases sólidas y realistas.",
  },
  {
    number: "03",
    title: "Integración",
    description:
      "Planes de acción alineados con tu esencia, no con el miedo. Llevar la claridad obtenida a la vida diaria.",
  },
];

export default function SesionesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-base)] pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <TextReveal
            text="Acompañamiento desde la Claridad"
            className="mb-6 text-4xl md:text-5xl font-serif text-[var(--color-text)]"
            as="h1"
          />
          <p className="text-[var(--color-text-muted)] text-xl font-sans font-light max-w-xl mx-auto leading-relaxed mt-6">
            El Método de Ainara. Un espacio seguro diseñado para escuchar, reflexionar y trazar un
            camino claro hacia la mentalidad que deseas construir.
          </p>
        </motion.div>

        {/* Proceso / Timeline Section */}
        <div className="mb-24 relative">
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-[var(--color-border)] hidden md:block" />
          
          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-6 md:gap-12"
              >
                <div className="flex justify-center md:justify-start gap-4 md:w-32 shrink-0">
                  <div className="w-14 h-14 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center text-sm font-serif text-[var(--color-primary)] z-10">
                    {step.number}
                  </div>
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-2xl font-serif mb-3 text-[var(--color-text)]">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[var(--color-surface)] p-8 md:p-12 shadow-sm border border-[var(--color-border)] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-primary)] opacity-30" />

          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif mb-2">Comienza tu proceso</h3>
            <p className="text-[var(--color-text-subtle)] text-sm uppercase tracking-widest font-semibold">
              Reserva tu sesión
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 max-w-lg mx-auto">
            {/* Calendly CTA */}
            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-4 px-6 bg-[var(--color-primary)] text-white hover:opacity-90 transition-all duration-300 flex justify-center items-center gap-3 font-medium tracking-wide uppercase text-xs sm:text-sm shadow-lg shadow-[var(--color-primary)]/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              Calendly
            </motion.a>

            {/* WhatsApp CTA */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-4 px-6 border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-base)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-300 flex justify-center items-center gap-3 font-medium tracking-wide uppercase text-xs sm:text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              WhatsApp
            </motion.a>
          </div>

          <p className="text-center text-xs text-[var(--color-text-subtle)] mt-8 font-light">
            Tus conversaciones son confidenciales y serán atendidas únicamente por Ainara.
          </p>
        </div>
      </div>
    </div>
  );
}
