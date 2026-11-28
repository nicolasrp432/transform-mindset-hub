"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import s from "./landing.module.css";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Pantalla tipo tablet con la portada de la formación en Mitra. */
export function EmulsionScreen({ priority = false, sizes = "220px" }: { priority?: boolean; sizes?: string }) {
  return (
    <div className={`${s.book} relative h-full w-full rounded-[14px] bg-[#111512] p-[5px]`}>
      <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-[#2a2620]">
        <Image
          src="/images/ainara-seated.webp"
          alt=""
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-[50%_32%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,19,17,0)_30%,rgba(14,19,17,0.85)_100%)]"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-[8%] pt-[7%] text-[clamp(6px,1.6vw,9px)] font-semibold uppercase tracking-[0.2em] text-white/85">
          <span>Mitra</span>
          <span>8 clases</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-[8%] pb-[9%] text-right text-white">
          <span className={`${s.serif} block text-[clamp(15px,4.4vw,26px)] leading-[0.95]`}>
            Emulsión
            <br />
            Energética
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PackShowcase() {
  const reduced = useReducedMotion();
  const enter = (delay: number, rotate: number) =>
    reduced
      ? { initial: false as const, animate: { rotate } }
      : {
          initial: { opacity: 0, y: 40, rotate: rotate * 1.6 },
          animate: { opacity: 1, y: 0, rotate },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-[#F5F3EF]">
      {/* Trama sutil: líneas de cuaderno */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent 0 31px, rgba(14,19,17,0.05) 31px 32px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[58%] h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(182,95,58,0.16),transparent)]"
      />

      {/* Agenda (izquierda, detrás) */}
      <motion.div
        {...enter(0.15, -8)}
        className="absolute left-[7%] top-[17%] z-10 w-[34%] aspect-[1001/1415]"
      >
        <div className={`${s.book} relative h-full w-full overflow-hidden rounded-[3px]`}>
          <Image
            src="/images/products/agenda-front.webp"
            alt="Agenda de reflexiones para la sanación emocional"
            fill
            priority
            sizes="(max-width: 640px) 34vw, 220px"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Emulsión (derecha, detrás) */}
      <motion.div
        {...enter(0.25, 7)}
        className="absolute right-[6%] top-[15%] z-10 w-[34%] aspect-[3/4]"
        aria-label="Emulsión Energética, formación de 8 clases en Mitra"
      >
        <EmulsionScreen priority sizes="(max-width: 640px) 34vw, 220px" />
      </motion.div>

      {/* Guía impresa (centro, delante) */}
      <motion.div
        {...enter(0, 0)}
        className="absolute left-1/2 top-[16%] z-20 w-[40%] -ml-[20%] aspect-[1000/1546]"
      >
        <div className={`${s.book} ${s.spine} relative h-full w-full overflow-hidden rounded-r-[4px] rounded-l-[2px]`}>
          <Image
            src="/images/products/guide-front.webp"
            alt="Guía integral de transformación, edición impresa de 80 páginas"
            fill
            priority
            sizes="(max-width: 640px) 40vw, 260px"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Sello −44 % */}
      <div className="absolute right-[4%] top-[4%] z-30 h-[25%] aspect-square">
        <svg viewBox="0 0 100 100" className={`${s.seal} absolute inset-0 h-full w-full`} aria-hidden="true">
          <defs>
            <path id="bf-seal-path" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <circle cx="50" cy="50" r="49" fill="#0E1311" />
          <text fill="#fff" fontSize="9.2" fontWeight="600" letterSpacing="2.6">
            <textPath href="#bf-seal-path">BLACK FRIDAY · BLACK FRIDAY ·</textPath>
          </text>
        </svg>
        <span className={`${s.num} absolute inset-0 flex items-center justify-center text-[clamp(18px,5.6vw,34px)] text-white`}>
          −44%
        </span>
      </div>

      {/* Leyenda */}
      <div className="absolute inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-[#0E1311]/10 bg-white/70 backdrop-blur-sm text-center">
        {[
          ["Guía", "impresa"],
          ["Agenda", "digital"],
          ["Formación", "8 clases"],
        ].map(([a, b], i) => (
          <div key={a} className={`py-2.5 sm:py-3 ${i > 0 ? "border-l border-[#0E1311]/10" : ""}`}>
            <span className="block text-[12px] sm:text-[13px] font-semibold text-[#0E1311] leading-tight">{a}</span>
            <span className="block text-[11px] sm:text-[12px] text-[#5C6560] leading-tight">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
