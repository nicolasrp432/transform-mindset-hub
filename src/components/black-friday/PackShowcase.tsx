"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { POSTER_SUMMARY_ROWS } from "./data";

const SILK_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PackShowcase() {
  const reduced = useReducedMotion();

  return (
    <div className="relative">
      {/* Glow ambiental sutil inspirado en el cartel oficial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-70"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(201, 138, 111, 0.20) 0%, rgba(40, 75, 64, 0.24) 45%, transparent 75%)",
        }}
      />

      <div className="relative rounded-[2rem] border border-white/12 bg-[#17221B]/90 p-5 sm:p-7 shadow-[0_28px_80px_-24px_rgba(0,0,0,0.65)] overflow-hidden">
        {/* Triptych visual fiel al cartel: Agenda (izq) + Guía impresa (centro) + Emulsión (der) */}
        <div className="relative mx-auto flex items-center justify-center min-h-[280px] sm:min-h-[340px] py-3">
          {/* Izquierda: Agenda de reflexión digital (portada oficial real) */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -16, rotate: -4 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            whileHover={reduced ? undefined : { y: -6, rotate: -2 }}
            transition={{ duration: reduced ? 0 : 0.65, ease: SILK_EASE }}
            className="relative z-10 -mr-7 sm:-mr-10 w-[132px] sm:w-[164px] aspect-[595/842] rounded-xl border-[5px] border-[#0C120E] overflow-hidden bg-[#1D241F] shadow-2xl select-none"
          >
            <Image
              src="/images/products/agenda-front.webp"
              alt="Portada de la Agenda de reflexiones para la sanación emocional (digital)"
              fill
              priority
              sizes="(max-width: 640px) 132px, 164px"
              className="object-cover"
            />
          </motion.div>

          {/* Centro en primer plano: Guía integral de transformación (edición impresa real) */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={reduced ? undefined : { y: -8, scale: 1.02 }}
            transition={{ duration: reduced ? 0 : 0.7, ease: SILK_EASE }}
            className="relative z-30 w-[166px] sm:w-[210px] drop-shadow-[0_26px_38px_rgba(0,0,0,0.68)]"
          >
            <Image
              src="/images/guide-mockup.webp"
              alt="Guía integral de transformación — edición impresa de 80 páginas"
              width={640}
              height={960}
              priority
              sizes="(max-width: 640px) 166px, 210px"
              className="w-full h-auto rounded-lg"
            />
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#C98A6F] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#141D17] shadow-lg">
              Edición impresa
            </span>
          </motion.div>

          {/* Derecha: Emulsión Energética · Formación en Mitra */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 16, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 4 }}
            whileHover={reduced ? undefined : { y: -6, rotate: 2 }}
            transition={{ duration: reduced ? 0 : 0.65, ease: SILK_EASE }}
            className="relative z-10 -ml-7 sm:-ml-10 w-[132px] sm:w-[164px] aspect-[3/4] rounded-xl border-[5px] border-[#0C120E] overflow-hidden shadow-2xl select-none bg-[#23201B]"
            aria-label="Emulsión Energética — formación en Mitra de 8 clases"
          >
            <Image
              src="/images/ainara-seated.webp"
              alt=""
              fill
              sizes="170px"
              className="object-cover opacity-45 scale-105 sepia-[0.25]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#EDE6D8]/85 via-[#DDD0BA]/75 to-[#3C3124]/90"
              aria-hidden="true"
            />
            <div className="relative z-10 h-full p-3.5 sm:p-4 flex flex-col justify-between text-center">
              <div className="flex items-center justify-between text-[7px] uppercase tracking-[0.18em] text-[#4C3F2F]">
                <span>Mitra</span>
                <span>8 clases</span>
              </div>
              <div>
                <p className="text-[7px] uppercase tracking-[0.22em] text-[#5C492F]">
                  Formación online
                </p>
                <p className="mt-1 font-serif text-[17px] sm:text-[21px] leading-[1.05] font-semibold text-[#8C6423]">
                  Emulsión
                  <br />
                  Energética
                </p>
              </div>
              <p className="text-[7px] sm:text-[8px] uppercase tracking-[0.22em] text-[#F6F2EA]/90">
                Acceso de por vida
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tabla resumen fiel a las 3 líneas exactas del cartel */}
        <div className="mt-6 border-t border-white/12 pt-4 divide-y divide-white/10">
          {POSTER_SUMMARY_ROWS.map((row) => (
            <div
              key={row.title}
              className="flex items-baseline justify-between gap-3 py-2.5 text-sm"
            >
              <p className="text-[#F6F2EA]">
                <strong className="font-semibold text-white">{row.title}</strong>{" "}
                <span className="text-[#9FB0A4]">· {row.format}</span>
              </p>
              <span className="shrink-0 font-medium text-[#D89A7E] text-xs sm:text-sm">
                {row.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
