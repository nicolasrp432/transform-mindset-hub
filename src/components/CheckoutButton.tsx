"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

interface CheckoutButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "inverse";
  productKey?: string;
}

export default function CheckoutButton({
  children,
  className = "",
  variant = "primary",
  productKey = "guia-practica",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productKey }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned");
        setLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false);
    }
  };

  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-white shadow-lg shadow-primary/20",
    inverse:
      "bg-white text-primary",
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Procesando…
        </>
      ) : (
        <>
          {children}
          <ArrowRight className="w-4 h-4" />
        </>
      )}
    </button>
  );
}
