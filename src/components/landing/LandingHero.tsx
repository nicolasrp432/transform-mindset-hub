import Link from "next/link";
import InteractiveSurface from "@/components/ui/InteractiveSurface";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { TrustItem } from "./types";

interface LandingHeroProps {
  badge: string;
  category?: "resource" | "program";
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
  category = "resource",
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
      <nav className="sales-breadcrumb" aria-label="Ruta de navegación"><Link href="/">Ainara</Link><span>/</span><Link href={category === "program" ? "/formaciones" : "/herramientas"}>{category === "program" ? "Formaciones" : "Herramientas"}</Link><span>/</span><span>{badge}</span></nav>
      {/* pointer-events-none es imprescindible: al ser absoluto, este adorno se
          pinta por encima del contenido estático y si no, se traga los clics de
          los CTA del hero. */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-50 bg-mark-soft"
        aria-hidden="true"
      />
      <div
        className={cn(
          "sales-hero-grid relative grid gap-12 items-center",
          ratio === "wide-copy"
            ? "lg:grid-cols-[1.15fr_0.85fr]"
            : "lg:grid-cols-[1.05fr_0.95fr]",
        )}
      >
        <div className="sales-hero-copy space-y-8">
          <span className="eyebrow text-text-subtle">{badge}</span>

          <div className="space-y-5">
            <h1>{title}</h1>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl">
              {lead}
            </p>
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

        <InteractiveSurface className="landing-visual">{visual}</InteractiveSurface>
      </div>
    </>
  );
}
