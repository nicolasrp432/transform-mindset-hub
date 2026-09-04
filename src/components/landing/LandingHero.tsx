import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { TrustItem } from "./types";

interface LandingHeroProps {
  badge: string;
  title: ReactNode;
  lead: ReactNode;
  /** Fila de CTAs. Va como slot: cada landing combina botones distintos. */
  actions: ReactNode;
  trust?: readonly TrustItem[];
  /** Contenido de la columna derecha, dentro del marco blanco. */
  visual: ReactNode;
  ratio?: "wide-copy" | "balanced";
  /** Extras bajo la fila de confianza. */
  children?: ReactNode;
}

export default function LandingHero({
  badge,
  title,
  lead,
  actions,
  trust,
  visual,
  ratio = "wide-copy",
  children,
}: LandingHeroProps) {
  return (
    <>
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-50 bg-mark-soft"
        aria-hidden="true"
      />
      <div
        className={cn(
          "grid gap-12 items-center",
          ratio === "wide-copy"
            ? "lg:grid-cols-[1.15fr_0.85fr]"
            : "lg:grid-cols-[1.05fr_0.95fr]"
        )}
      >
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white text-xs uppercase tracking-[0.25em] text-text-subtle">
            <span className="w-2 h-2 rounded-full bg-mark" aria-hidden="true" />
            {badge}
          </span>

          <div className="space-y-5">
            <h1>{title}</h1>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl">{lead}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">{actions}</div>

          {trust && trust.length > 0 && (
            <ul className="grid gap-3 sm:grid-cols-3 text-sm text-text-muted">
              {trust.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-2">
                    <Icon
                      className="w-4 h-4 text-mark shrink-0"
                      aria-hidden="true"
                    />
                    {item.label}
                  </li>
                );
              })}
            </ul>
          )}

          {children}
        </div>

        <div className="bg-white border border-border rounded-[2rem] p-6 md:p-8 shadow-lg">
          {visual}
        </div>
      </div>
    </>
  );
}
