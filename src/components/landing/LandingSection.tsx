import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LandingSectionProps {
  id?: string;
  /** Alterna el fondo para dar ritmo vertical a la página. */
  tone?: "base" | "surface";
  className?: string;
  containerClassName?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Envoltura estructural de todas las secciones de una landing. Es el único
 * sitio donde se emiten `.section` y `.container-editorial`: los componentes
 * de bloque nunca los ponen.
 */
export default function LandingSection({
  id,
  tone = "base",
  className,
  containerClassName,
  style,
  children,
}: LandingSectionProps) {
  return (
    <section
      id={id}
      style={style}
      className={cn("section", tone === "surface" && "bg-surface", className)}
    >
      <div className={cn("container-editorial", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
