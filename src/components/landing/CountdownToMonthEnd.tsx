"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface CountdownToMonthEndProps {
  label?: string;
  shortLabel?: string;
}

/** Milisegundos que faltan hasta el final del mes en curso. */
function msUntilMonthEnd(now: Date) {
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0, 0);
  return end.getTime() - now.getTime();
}

function split(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

/**
 * Cuenta atrás hasta el fin de mes real. A diferencia de un contador que se
 * reinicia en cada carga, esta fecha límite es la misma para todo el mundo:
 * si dice que quedan dos días, quedan dos días.
 */
export default function CountdownToMonthEnd({
  label = "El precio de lanzamiento termina en",
  shortLabel = "Termina en",
}: CountdownToMonthEndProps) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(msUntilMonthEnd(new Date()));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hasta que el cliente monta no hay valor: así el HTML del servidor y el del
  // cliente coinciden y no hay parpadeo de hidratación.
  const time = remaining === null ? null : split(remaining);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <span className="inline-flex items-center gap-2">
      <Clock className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span className="hidden md:inline">{label}</span>
      <span className="md:hidden">{shortLabel}</span>
      <span className="font-mono font-semibold tabular-nums">
        {time ? (
          <>
            {time.days > 0 && `${time.days}d `}
            {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
          </>
        ) : (
          "—"
        )}
      </span>
    </span>
  );
}
