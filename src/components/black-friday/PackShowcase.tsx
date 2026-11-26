"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { POSTER_SUMMARY_ROWS } from "./data";

const SILK_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PackShowcase() {
  const reduced = useReducedMotion();

  return (
    <div className="relative">
      {/* Glow ambiental cálido inspirado en el cartel oficial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-85"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(216, 154, 126, 0.24) 0%, rgba(40, 75, 64, 0.28) 46%, transparent 75%)",
        }}
      />

      <div className="relative rounded-[2rem] border border-white/14 bg-[#18241C] p-5 sm:p-7 shadow-[0_28px_80px_-24px_rgba(0,0,0,0.72)] overflow-hidden">
        {/* Halo interior para dar contraste y nitidez a las tres portadas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[360px]"
          style={{
            background:
              "radial-gradient(circle at 50% 48%, rgba(246, 242, 234, 0.14) 0%, rgba(201, 138, 111, 0.08) 40%, transparent 72%)",
          }}
        />

        {/* Tríptico visual fiel al cartel: Agenda oficial (izq) + Guía oficial impresa (centro) + Emulsión (der) */}
        <div className="relative mx-auto flex items-center justify-center min-h-[285px] sm:min-h-[345px] py-3">
          {/* Izquierda: Agenda de reflexión digital (portada oficial real) */}
          <motion.div
            initial={reduced ? false : { y: 6, rotate: -4 }}
            animate={{ y: 0, rotate: -4 }}
            whileHover={reduced ? undefined : { y: -6, rotate: -2 }}
            transition={{ duration: reduced ? 0 : 0.55, ease: SILK_EASE }}
            className="relative z-10 -mr-7 sm:-mr-9 w-[128px] sm:w-[160px] aspect-[595/842] rounded-xl border-[4px] border-[#0C120E] overflow-hidden bg-[#263129] shadow-[0_20px_40px_rgba(0,0,0,0.55)] select-none"
          >
            <Image
              src="/images/products/agenda-front.webp"
              alt="Portada oficial de la Agenda de reflexiones para la sanación emocional (digital)"
              fill
              priority
              sizes="(max-width: 640px) 128px, 160px"
              className="object-cover"
            />
          </motion.div>

          {/* Centro en primer plano: Guía integral de transformación (portada oficial impresa del cartel) */}
          <motion.div
            initial={reduced ? false : { y: 8 }}
            animate={{ y: 0 }}
            whileHover={reduced ? undefined : { y: -8, scale: 1.02 }}
            transition={{ duration: reduced ? 0 : 0.6, ease: SILK_EASE }}
            className="relative z-30 w-[162px] sm:w-[202px] aspect-[396/612] rounded-r-lg rounded-l-[3px] overflow-hidden bg-[#FAF8F4] shadow-[0_28px_50px_-10px_rgba(0,0,0,0.82),-6px_0_16px_rgba(0,0,0,0.45)] ring-1 ring-white/25"
          >
            <Image
              src="/images/products/guide-front.webp"
              alt="Portada oficial de la Guía integral de transformación — edición impresa de 80 páginas"
              fill
              priority
              sizes="(max-width: 640px) 162px, 202px"
              className="object-cover"
            />
            {/* Efecto lomo sutil de libro impreso */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 via-white/20 to-transparent"
            />
            <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#141D17] border border-[#C98A6F]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F6F2EA] shadow-lg">
              Edición impresa · 80 págs.
            </span>
          </motion.div>

          {/* Derecha: Emulsión Energética · Formación en Mitra */}
          <motion.div
            initial={reduced ? false : { y: 6, rotate: 4 }}
            animate={{ y: 0, rotate: 4 }}
            whileHover={reduced ? undefined : { y: -6, rotate: 2 }}
            transition={{ duration: reduced ? 0 : 0.55, ease: SILK_EASE }}
            className="relative z-10 -ml-7 sm:-ml-9 w-[128px] sm:w-[160px] aspect-[595/842] rounded-xl border-[4px] border-[#0C120E] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.55)] select-none bg-[#23201B]"
            aria-label="Emulsión Energética — formación en Mitra de 8 clases"
          >
            <Image
              src="/images/ainara-seated.webp"
              alt=""
              fill
              sizes="165px"
              className="object-cover opacity-40 scale-105 sepia-[0.25]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#F5EFE3]/92 via-[#E7DBC6]/82 to-[#4B3D2C]/92"
              aria-hidden="true"
            />
            <div className="relative z-10 h-full p-3.5 sm:p-4 flex flex-col justify-between text-center">
              <div className="flex items-center justify-between text-[7.5px] font-semibold uppercase tracking-[0.18em] text-[#4C3F2F]">
                <span>Mitra</span>
                <span>8 clases</span>
              </div>
              <div>
                <p className="text-[7.5px] font-medium uppercase tracking-[0.22em] text-[#5C492F]">
                  Formación online
                </p>
                <p className="mt-1 font-serif text-[18px] sm:text-[22px] leading-[1.05] font-semibold text-[#7A541A]">
                  Emulsión
                  <br />
                  Energética
                </p>
              </div>
              <p className="text-[7.5px] font-semibold uppercase tracking-[0.2em] text-[#FAF6EE]">
                Acceso de por vida
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tabla resumen fiel a las 3 líneas exactas del cartel */}
        <div className="relative z-10 mt-6 border-t border-white/14 pt-4 divide-y divide-white/10">
          {POSTER_SUMMARY_ROWS.map((row) => (
            <div
              key={row.title}
              className="flex items-baseline justify-between gap-3 py-2.5 text-sm"
            >
              <p className="text-[#F6F2EA]">
                <strong className="font-semibold text-white">{row.title}</strong>{" "}
                <span className="text-[#B4C3B9]">· {row.format}</span>
              </p>
              <span className="shrink-0 font-semibold text-[#E2A58A] text-xs sm:text-sm">
                {row.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
