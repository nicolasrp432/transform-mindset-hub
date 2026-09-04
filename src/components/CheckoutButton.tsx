"use client";

import { useState } from "react";
import { AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import type { ProductKey } from "@/lib/products";

interface CheckoutButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "inverse";
  productKey?: ProductKey;
}

export default function CheckoutButton({
  children,
  className = "",
  variant = "primary",
  productKey = "guia-practica",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    setFailed(false);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productKey }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      console.error("No checkout URL returned", data);
      setFailed(true);
    } catch (error) {
      console.error("Checkout error:", error);
      setFailed(true);
    }

    setLoading(false);
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/20",
    inverse:
      "bg-white text-primary border border-border shadow-none hover:bg-surface",
  };

  return (
    <>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Procesando…
          </>
        ) : (
          <>
            {children}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </button>
      {failed && (
        <p
          role="alert"
          className="mt-3 flex items-center justify-center gap-1.5 text-sm text-red-700"
        >
          <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
          No hemos podido abrir el pago. Inténtalo de nuevo en unos segundos.
        </p>
      )}
    </>
  );
}
