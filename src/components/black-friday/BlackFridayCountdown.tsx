"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { BLACK_FRIDAY_OFFER } from "./data";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function getTimeLeft(deadlineIso: string): TimeLeft {
  const diff = new Date(deadlineIso).getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    expired: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

interface BlackFridayCountdownProps {
  variant?: "compact" | "tiles";
}

export default function BlackFridayCountdown({
  variant = "tiles",
}: BlackFridayCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft(BLACK_FRIDAY_OFFER.deadlineIso));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (variant === "compact") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-wide text-[#F6F2EA]">
        <Clock className="w-3.5 h-3.5 text-[#D89A7E] shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline text-[#C9D3CB]">Cierra el lunes 30 ·</span>
        <span className="font-mono tabular-nums font-semibold text-[#F6F2EA]">
          {timeLeft === null
            ? "27–30 NOV"
            : timeLeft.expired
              ? "Oferta cerrada"
              : `${timeLeft.days > 0 ? `${timeLeft.days}d ` : ""}${pad(timeLeft.hours)}:${pad(timeLeft.minutes)}:${pad(timeLeft.seconds)}`}
        </span>
      </span>
    );
  }

  const units = timeLeft
    ? [
        { value: pad(timeLeft.days), label: "Días" },
        { value: pad(timeLeft.hours), label: "Horas" },
        { value: pad(timeLeft.minutes), label: "Min" },
        { value: pad(timeLeft.seconds), label: "Seg" },
      ]
    : [
        { value: "—", label: "Días" },
        { value: "—", label: "Horas" },
        { value: "—", label: "Min" },
        { value: "—", label: "Seg" },
      ];

  if (timeLeft?.expired) {
    return (
      <div className="rounded-2xl border border-[#C98A6F]/30 bg-[#1B2720] px-5 py-4 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D89A7E] font-semibold">
          Ventana de Black Friday finalizada
        </p>
        <p className="mt-1 text-sm text-[#D6DDD7]">
          Escríbeme por WhatsApp si quieres consultar disponibilidad del pack.
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-4 sm:p-5"
      aria-label="Cuenta atrás de la oferta de Black Friday"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#D89A7E] font-semibold">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D89A7E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D89A7E]" />
          </span>
          Cierra el lunes 30 · 23:59
        </span>
        <span className="text-[11px] text-[#A8B5AC]">Hora España (CET)</span>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((u) => (
          <div
            key={u.label}
            className="rounded-xl bg-[#0F1712]/80 border border-white/10 py-2.5 px-2 text-center"
          >
            <div className="font-mono text-xl sm:text-2xl font-semibold tabular-nums text-[#F6F2EA] leading-none">
              {u.value}
            </div>
            <div className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-[#9EAD9F]">
              {u.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
