"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { LeadMagnetSchema, type LeadMagnetInput } from "@/lib/validations";
import { FloatingInput } from "@/components/ui/FloatingInput";
import TextReveal from "@/components/ui/TextReveal";
import { submitLeadMagnet } from "@/app/actions/lead";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HerramientasPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LeadMagnetInput>({
    resolver: zodResolver(LeadMagnetSchema),
  });

  const onSubmit = async (data: LeadMagnetInput) => {
    const result = await submitLeadMagnet(data);
    
    if (!result.success) {
      setError("root", {
        type: "server",
        message: result.error || "Ocurrió un error inesperado.",
      });
      return;
    }

    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-base)] flex flex-col md:flex-row relative">
      {/* Funnel escape — Ratio 1:1: sutil, no compite con el CTA */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center gap-1.5 text-xs text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors duration-200 font-medium tracking-wide"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver a inicio
      </Link>

      {/* Mitad Izquierda (Copy y Dolor) */}
      <div className="md:w-5/12 bg-[var(--color-surface)] p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <TextReveal text="¿Sientes que la cabeza no te para?" className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif" as="h1" />
          <hr className="divider-breath" />
          <p className="text-[var(--color-text-muted)] text-lg mb-6 leading-relaxed">
            Vivimos en una época de saturación constante. El ruido exterior se
            convierte en ruido interior, y de repente, tomar una decisión o
            simplemente descansar parece imposible.
          </p>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
            He diseñado esta guía gratuita como un refugio. Un espacio donde 
            podrás encontrar herramientas sencillas pero profundas para silenciar 
            el caos y volver a conectar con tu propio ritmo.
          </p>
        </motion.div>
      </div>

      {/* Mitad Derecha (Formulario) */}
      <div className="md:w-7/12 p-8 md:p-16 lg:p-24 flex items-center justify-center">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                <div className="mb-10">
                  <h2 className="text-3xl mb-2">Accede al material</h2>
                  <p className="text-[var(--color-text-subtle)]">
                    Déjame tus datos para enviarte la guía a tu bandeja de entrada.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <FloatingInput
                    label="Tu nombre"
                    type="text"
                    {...register("name")}
                    error={errors.name?.message}
                  />

                  <FloatingInput
                    label="Tu correo electrónico"
                    type="email"
                    {...register("email")}
                    error={errors.email?.message}
                  />

                  <div className="pt-6">
                    {errors.root && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 rounded bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-medium text-center"
                      >
                        {errors.root.message}
                      </motion.div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center font-medium tracking-wide"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                            transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                          />
                          Procesando...
                        </>
                      ) : (
                        "Descargar Guía Gratuita"
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                  }}
                  className="w-16 h-16 bg-[var(--color-surface)] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-8 h-8 text-[var(--color-primary)]" />
                </motion.div>
                <h2 className="text-3xl mb-3">Todo listo.</h2>
                <p className="text-[var(--color-text-muted)] text-lg mb-8">
                  Tu guía está lista. Descárgala ahora.
                </p>
                <motion.a
                  href="/guia-claridad.pdf"
                  download="Guia-Claridad-Ainara.pdf"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-white font-medium tracking-wide hover:bg-[var(--color-primary)]/90 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Descargar Guía Ahora
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
