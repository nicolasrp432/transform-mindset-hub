import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { getProduct, type ProductKey } from "@/lib/products";

interface ProductPriceProps {
  productKey: ProductKey;
  size?: "md" | "lg" | "xl";
  tone?: "ink" | "inverse";
  /** Muestra el precio de referencia tachado si el producto lo define. */
  showCompareAt?: boolean;
  note?: ReactNode;
  className?: string;
}

/** Único sitio donde se renderiza un importe. Siempre desde PRODUCTS. */
export default function ProductPrice({
  productKey,
  size = "lg",
  tone = "ink",
  showCompareAt = true,
  note,
  className,
}: ProductPriceProps) {
  const product = getProduct(productKey);
  const inverse = tone === "inverse";

  return (
    <div className={cn("flex flex-wrap items-baseline gap-x-3 gap-y-1", className)}>
      <span
        className={cn(
          "font-serif",
          size === "md" && "text-3xl",
          size === "lg" && "text-5xl",
          size === "xl" && "text-5xl md:text-6xl",
          inverse ? "text-white" : "text-text"
        )}
      >
        {product.displayPrice}
      </span>

      {showCompareAt && product.compareAtDisplayPrice && (
        <span
          className={cn(
            "text-lg line-through",
            inverse ? "text-white/60" : "text-text-subtle"
          )}
        >
          {product.compareAtDisplayPrice}
          {product.compareAtLabel && (
            <span className="ml-1 text-sm no-underline">
              {product.compareAtLabel}
            </span>
          )}
        </span>
      )}

      {note && (
        <span className={cn("text-sm", inverse ? "text-white/60" : "text-text-subtle")}>
          {note}
        </span>
      )}
    </div>
  );
}
