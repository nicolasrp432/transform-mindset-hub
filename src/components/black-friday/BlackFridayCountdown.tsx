"use client";

import { useEffect, useState } from "react";
import { BLACK_FRIDAY_OFFER } from "./data";
import s from "./landing.module.css";

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
  const total = Math.floor(diff / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
    expired: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

function useTimeLeft() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft(BLACK_FRIDAY_OFFER.deadlineIso));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);
  return timeLeft;
}

interface Props {
  variant?: "compact" | "tiles";
  tone?: "light" | "dark";
}

export default function BlackFridayCountdown({ variant = "tiles", tone = "light" }: Props) {
  const t = useTimeLeft();
  const dark = tone === "dark";

  if (variant === "compact") {
    return (
      <span
        className={`inline-flex items-center gap-2 text-[13px] font-medium tabular-nums ${
          dark ? "text-white" : "text-[#0E1311]"
        }`}
      >
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B65F3A] opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B65F3A]" />
        </span>
        {t === null
          ? "27–30 nov"
          : t.expired
            ? "Oferta cerrada"
            : `Cierra en ${t.days > 0 ? `${t.days}d ` : ""}${pad(t.hours)}:${pad(t.minutes)}:${pad(t.seconds)}`}
      </span>
    );
  }

  if (t?.expired) {
    return (
      <p className={`text-[14px] ${dark ? "text-white/80" : "text-[#5C6560]"}`}>
        La ventana de Black Friday ha terminado. Escríbeme por WhatsApp para consultar disponibilidad.
      </p>
    );
  }

  const units = [
    { value: t ? pad(t.days) : "--", label: "días" },
    { value: t ? pad(t.hours) : "--", label: "horas" },
    { value: t ? pad(t.minutes) : "--", label: "min" },
    { value: t ? pad(t.seconds) : "--", label: "seg" },
  ];

  return (
    <div role="timer" aria-label="Tiempo restante de la oferta" className="flex items-end gap-1.5 sm:gap-2.5">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-end gap-1.5 sm:gap-2.5">
          <div className="text-center">
            <div
              className={`${s.num} min-w-[2.1ch] text-[40px] sm:text-[52px] ${
                dark ? "text-white" : "text-[#0E1311]"
              }`}
            >
              {u.value}
            </div>
            <div
              className={`mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                dark ? "text-white/60" : "text-[#5C6560]"
              }`}
            >
              {u.label}
            </div>
          </div>
          {i < units.length - 1 && (
            <span
              aria-hidden="true"
              className={`${s.num} pb-6 text-[28px] sm:text-[36px] ${dark ? "text-white/30" : "text-[#0E1311]/25"}`}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
