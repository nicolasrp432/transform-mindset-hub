import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import type { IconItem } from "./types";

interface PurchaseSuccessProps {
  title?: string;
  message: ReactNode;
  cards: readonly IconItem[];
  primaryHref?: string;
  primaryLabel?: string;
  secondary?: ReactNode;
}

export default function PurchaseSuccess({
  title = "¡Gracias por tu compra!",
  message,
  cards,
  primaryHref = "/",
  primaryLabel = "Volver al inicio",
  secondary,
}: PurchaseSuccessProps) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="section">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative mx-auto mb-8 w-24 h-24">
              <div
                className="absolute inset-0 rounded-full bg-primary/10 animate-ping"
                aria-hidden="true"
              />
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-white" aria-hidden="true" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl mb-4">{title}</h1>
            <p className="text-text-muted text-lg md:text-xl max-w-xl mx-auto">
              {message}
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 text-left">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl bg-white border border-border p-6 shadow-sm"
                  >
                    <Icon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                    <h3 className="text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-text-muted">{card.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              {secondary}
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium tracking-wide shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-0.5"
              >
                {primaryLabel}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
