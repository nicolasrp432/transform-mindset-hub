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
import { ArrowLeft, BookOpen, Calendar, GraduationCap, FileText, ArrowRight } from "lucide-react";

const ecosystemItems = [
  {
    title: "Guía Práctica",
    description: "(Material descargable). Tu primer paso hacia la claridad mental.",
    icon: FileText,
    action: "Saber más",
    href: "#",
  },
  {
    title: "Agenda de Reflexión",
    description: "(Herramienta de introspección diaria). Un espacio diario para conectar con tu esencia.",
    icon: Calendar,
    action: "Explorar",
    href: "#",
  },
  {
    title: "Plataforma Educativa",
    description: "(Acceso a los cursos Re-conéctate y Emulsión Energética).",
    icon: GraduationCap,
    action: "Explorar",
    href: "/formaciones",
  },
  {
    title: "Libro / Cuento",
    description: "(La obra literaria de Ainara). Una historia para silenciar el ruido.",
    icon: BookOpen,
    action: "Saber más",
    href: "#",
  }
];

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
    <main className="flex flex-col relative w-full bg-[var(--color-base)]">
      {/* Funnel escape — Ratio 1:1: sutil, no compite con el CTA */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center gap-1.5 text-xs text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors duration-200 font-medium tracking-wide"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver a inicio
      </Link>

      {/* Sección Superior: Captura de Lead */}
      <section className="min-h-screen flex flex-col md:flex-row">
        {/* Mitad Izquierda (Copy y Dolor) */}
      <div className="md:w-5/12 bg-[var(--color-surface)] p-8 pt-28 md:pt-16 md:p-16 lg:p-24 flex flex-col justify-center text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center md:items-start"
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
      </section>

      {/* Nueva Sección: Recursos y Materiales */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[var(--color-surface)] border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 md:mb-24 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-text)] mb-6 text-balance">
              Recursos Premium
            </h2>
            <hr className="divider-breath mb-6 hidden md:block" />
            <p className="text-[var(--color-text-muted)] text-lg max-w-2xl leading-relaxed">
              Descubre todo el ecosistema de herramientas diseñadas para acompañarte 
              en tu proceso de transformación. Desde lecturas reflexivas hasta 
              nuestra plataforma educativa integral.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="group relative bg-white border border-border p-8 md:p-10 flex flex-col gap-6 rounded-2xl hover:shadow-xl transition-shadow duration-500 h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--color-base)] flex items-center justify-center border border-border group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 h-5 text-[var(--color-primary)]" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex flex-col flex-1 gap-3">
                    <h3 className="font-serif text-2xl text-[var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-subtle)] group-hover:text-[var(--color-primary)] transition-colors duration-300"
                    >
                      {item.action}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
