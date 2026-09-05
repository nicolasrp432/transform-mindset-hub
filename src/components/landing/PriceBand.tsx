import type { ReactNode } from "react";
import CheckoutButton from "@/components/CheckoutButton";
import { getProduct, type ProductKey } from "@/lib/products";
import type { TrustItem } from "./types";
import ProductPrice from "./ProductPrice";

interface PriceBandProps {
  productKey: ProductKey;
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  badges?: readonly TrustItem[];
  priceLabel?: string;
  priceNote?: string;
  ctaLabel: string;
}

/**
 * Banda de precio a ancho completo. Monta su propio CheckoutButton a partir de
 * `productKey`: el precio que se enseña y el que se cobra salen del mismo sitio.
 */
export default function PriceBand({
  productKey,
  eyebrow,
  title,
  description,
  badges,
  priceLabel = "Precio",
  priceNote,
  ctaLabel,
}: PriceBandProps) {
  const product = getProduct(productKey);

  return (
    <div className="rounded-[2rem] bg-band text-band-ink p-8 md:p-12 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3"
        aria-hidden="true"
      />

      <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-band-muted mb-4">
            {eyebrow}
          </p>
          <h2 className="text-white">{title}</h2>
          <p className="mt-4 text-band-muted">{description}</p>

          {badges && badges.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-band-muted">
              {badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <li key={badge.label} className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                    {badge.label}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="text-center lg:text-right">
          <p className="text-xs uppercase tracking-[0.25em] text-band-muted">
            {priceLabel}
          </p>
          <ProductPrice
            productKey={productKey}
            size="lg"
            tone="inverse"
            className="mt-2 justify-center lg:justify-end"
          />
          {priceNote && (
            <p className="mt-2 text-sm text-band-muted">{priceNote}</p>
          )}
          <div className="mt-6">
            <CheckoutButton productKey={product.key as ProductKey} variant="inverse">
              {ctaLabel}
            </CheckoutButton>
          </div>
        </div>
      </div>
    </div>
  );
}
