import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface PlatformHighlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

interface PlatformHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  highlights?: readonly PlatformHighlight[];
  ctaLabel: string;
  ctaHref: string;
  ctaId?: string;
  note?: ReactNode;
}

/**
 * Bloque destacado de la plataforma. Domina la página por color, escala y por
 * ser el único CTA sólido: no por ser "más grande".
 */
export default function PlatformHero({
  eyebrow,
  title,
  lead,
  highlights,
  ctaLabel,
  ctaHref,
  ctaId,
  note,
}: PlatformHeroProps) {
  return (
    <div className="rounded-[2rem] bg-band text-band-ink p-6 sm:p-8 md:p-14 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_auto] lg:items-end">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.25em] text-band-muted mb-4">
              {eyebrow}
            </p>
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h2>
            <p className="mt-6 text-band-muted text-lg max-w-2xl">{lead}</p>
          </div>

          <div className="min-w-0 flex flex-col items-stretch sm:items-start lg:items-end gap-3">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              id={ctaId}
              className="inline-flex items-center justify-center gap-3 text-center px-6 sm:px-10 py-4 sm:py-5 bg-white text-primary rounded-full text-sm font-medium tracking-wide shadow-lg transition-all duration-300 hover:gap-4 hover:-translate-y-0.5"
            >
              {ctaLabel}
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
            {note && (
              <p className="text-xs text-band-muted max-w-full sm:max-w-[32ch] lg:text-right">
                {note}
              </p>
            )}
          </div>
        </div>

        {highlights && highlights.length > 0 && (
          <ul className="mt-12 grid gap-4 sm:grid-cols-3 border-t border-white/15 pt-10">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title}>
                  <Icon
                    className="w-6 h-6 text-white/80 mb-3"
                    aria-hidden="true"
                  />
                  <h3 className="text-white text-xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-band-muted">{item.text}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
