import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "start" | "center";
  className?: string;
}

/**
 * Encabezado de sección. El `h2` va desnudo a propósito: su tamaño viene del
 * `clamp()` de globals.css, que es el contrato tipográfico del sitio.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && (
        <p className={cn("mt-4 text-text-muted", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}
