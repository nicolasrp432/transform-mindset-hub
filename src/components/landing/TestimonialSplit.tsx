import { Star } from "lucide-react";
import type { ReactNode } from "react";
import type { Testimonial } from "./types";

interface TestimonialSplitProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  items: readonly Testimonial[];
}

/**
 * Único bloque que absorbe su propio encabezado: aquí el heading es la columna
 * izquierda del layout, no una cabecera previa.
 */
export default function TestimonialSplit({
  eyebrow,
  title,
  description,
  items,
}: TestimonialSplitProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-text-subtle">
          {eyebrow}
        </p>
        <h2>{title}</h2>
        {description && <p className="text-text-muted">{description}</p>}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <blockquote
            key={item.name}
            className="bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex gap-0.5 mb-4" aria-label={`${item.stars} de 5 estrellas`}>
              {Array.from({ length: item.stars }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-text-muted italic">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-6">
              <strong className="block">{item.name}</strong>
              <span className="text-sm text-text-subtle">{item.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
