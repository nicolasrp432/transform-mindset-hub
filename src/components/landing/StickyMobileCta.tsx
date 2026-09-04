"use client";

import { useEffect, useState } from "react";
import CheckoutButton from "@/components/CheckoutButton";
import { getProduct, type ProductKey } from "@/lib/products";

interface StickyMobileCtaProps {
  productKey: ProductKey;
  label: string;
  /** Píxeles de scroll tras los que aparece la barra. */
  showAfter?: number;
}

/**
 * Barra de compra fija en móvil. Aparece al pasar el hero, para que el precio y
 * el botón estén siempre a un toque durante todo el scroll.
 */
export default function StickyMobileCta({
  productKey,
  label,
  showAfter = 600,
}: StickyMobileCtaProps) {
  const product = getProduct(productKey);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-white/95 backdrop-blur-sm px-4 py-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-subtle">
            {product.shortName ?? product.name}
          </p>
          <p className="font-serif text-2xl text-text">{product.displayPrice}</p>
        </div>
        <CheckoutButton
          productKey={productKey}
          className="px-5 py-3 text-sm shrink-0"
        >
          {label}
        </CheckoutButton>
      </div>
    </div>
  );
}
