import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";
import {
  formatAmount,
  getProduct,
  getValueStackTotal,
  type ProductKey,
} from "@/lib/products";

interface PriceAnchorProps {
  productKey: ProductKey;
  eyebrow?: string;
  totalLabel?: string;
  todayLabel?: string;
  ctaLabel: string;
  note?: ReactNode;
}

/**
 * Anclaje de precio para los programas: desglose de valor, total calculado y
 * tachado, y precio de hoy. El total es la suma real de `valueStack`, así que
 * no puede desalinearse de lo que se muestra encima.
 */
export default function PriceAnchor({
  productKey,
  eyebrow = "Lo que incluye",
  totalLabel = "Valor total del programa",
  todayLabel = "Tu inversión hoy",
  ctaLabel,
  note,
}: PriceAnchorProps) {
  const product = getProduct(productKey);
  const total = getValueStackTotal(product);

  return (
    <div className="rounded-[2rem] bg-white border border-border p-6 sm:p-8 md:p-10 shadow-lg">
      <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-6">
        {eyebrow}
      </p>

      {product.valueStack && (
        <ul className="space-y-3">
          {product.valueStack.map((item) => (
            <li
              key={item.label}
              className="flex items-start justify-between gap-4 text-sm"
            >
              <span className="flex items-start gap-2 text-text-muted">
                <CheckCircle2
                  className="w-4 h-4 mt-0.5 text-mark shrink-0"
                  aria-hidden="true"
                />
                {item.label}
              </span>
              <span className="text-text-subtle whitespace-nowrap">
                {formatAmount(item.amount, product.currency)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {total && (
        <div className="mt-6 pt-6 border-t border-border flex items-center justify-between gap-4">
          <span className="text-text-muted">{totalLabel}</span>
          <span className="text-xl text-text-subtle line-through">{total}</span>
        </div>
      )}

      <div className="mt-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-text-subtle">
          {todayLabel}
        </p>
        <p className="mt-2 text-5xl md:text-6xl font-serif text-primary">
          {product.displayPrice}
        </p>
        {note && <p className="mt-2 text-sm text-text-muted">{note}</p>}
      </div>

      <div className="mt-8 flex justify-center">
        <CheckoutButton productKey={productKey} className="w-full sm:w-auto">
          {ctaLabel}
        </CheckoutButton>
      </div>
    </div>
  );
}
