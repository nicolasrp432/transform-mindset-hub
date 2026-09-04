import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface OfferBannerProps {
  tone?: "primary" | "surface";
  children: ReactNode;
}

/**
 * Banda sticky superior. No cambiar el padding: `--offer-banner-offset` en
 * globals.css desplaza el navbar asumiendo esta altura.
 */
export default function OfferBanner({
  tone = "primary",
  children,
}: OfferBannerProps) {
  return (
    <section
      className={cn(
        "offer-banner text-center text-xs md:text-sm font-medium tracking-wide py-2.5 px-4",
        tone === "primary" ? "bg-primary text-white" : "bg-surface text-text"
      )}
    >
      <span className="inline-flex items-center gap-2">{children}</span>
    </section>
  );
}
