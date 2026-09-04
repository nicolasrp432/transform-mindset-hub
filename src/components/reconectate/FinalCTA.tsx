"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Lock } from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";
import CountdownToMonthEnd from "@/components/landing/CountdownToMonthEnd";
import { VisaIcon, MastercardIcon } from "@/components/reconectate/PaymentIcons";
import {
  formatAmount,
  getValueStackTotal,
  PRODUCTS,
} from "@/lib/products";

const PRODUCT = PRODUCTS.RE_CONECTATE;
const VALUE_TOTAL = getValueStackTotal(PRODUCT);

const FinalCTA = () => {
  const includes = [
    "6 semanas de contenido transformador",
    "Acceso de por vida al programa",
    "Bitácora de Autoestima Diaria",
    "Sesión de grupo en vivo con Ainara",
    "Mini curso para silenciar la voz crítica",
    "Garantía de satisfacción de 7 días",
  ];

  return (
    <section id="cta" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">Tu mente puede ser tu aliada. Solo necesitas aprender a escucharla desde el amor.</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="bg-gradient-to-br from-surface to-white rounded-3xl p-6 md:p-10 space-y-8 shadow-2xl shadow-primary/20 border border-border">

          {/* Desglose de valor: el total es la suma real de lo que se lista */}
          <div className="rounded-2xl bg-white border border-border p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">
              Lo que recibes y lo que vale
            </p>
            {PRODUCT.valueStack?.map((item) => (
              <div key={item.label} className="flex items-start justify-between gap-4 text-sm">
                <span className="flex items-start gap-2 text-foreground/75">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" aria-hidden="true" />
                  </span>
                  {item.label}
                </span>
                <span className="text-text-subtle whitespace-nowrap">
                  {formatAmount(item.amount, PRODUCT.currency)}
                </span>
              </div>
            ))}
            {VALUE_TOTAL && (
              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between gap-4">
                <span className="font-medium text-text">Valor total del programa</span>
                <span className="text-xl text-text-subtle line-through">{VALUE_TOTAL}</span>
              </div>
            )}
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-wider text-mark-on-soft font-semibold">Tu inversión hoy</p>
            <div className="space-y-2">
              <p className="text-5xl md:text-7xl font-bold text-primary">
                {PRODUCT.displayPrice}
              </p>
              <p className="text-foreground/70">IVA incluido · pago único</p>
            </div>
            <p className="text-sm text-foreground/70">
              <CountdownToMonthEnd label="El precio de lanzamiento termina en" />
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <p className="font-semibold text-lg text-center">Esto es lo que incluye:</p>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {includes.map((item, index) => (
                <motion.div key={item} className="flex items-start gap-3" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" aria-hidden="true" />
                  </div>
                  <p className="text-foreground/80">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center pt-6 space-y-6">
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <CheckoutButton productKey={PRODUCT.key} className="px-6 sm:px-8 py-6 text-base sm:text-lg shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 w-full">
                🌸 Sí, quiero mi seguridad interior — {PRODUCT.displayPrice}
              </CheckoutButton>
            </motion.div>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-foreground/60 text-sm">
                <Lock size={14} aria-hidden="true" />
                <span>Pago 100% seguro con Stripe</span>
              </div>
              <div className="flex justify-center items-center gap-4 text-gray-500">
                <VisaIcon width={32} height={32} />
                <MastercardIcon width={32} height={32} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
