"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Crown, CalendarHeart, ArrowLeft, GraduationCap, FileText, ArrowRight } from "lucide-react";
import { LeadMagnetSchema, type LeadMagnetInput } from "@/lib/validations";
import { FloatingInput } from "@/components/ui/FloatingInput";
import TextReveal from "@/components/ui/TextReveal";
import { submitLeadMagnet } from "@/app/actions/lead";
import Link from "next/link";

const ecosystemItems = [
  {
    title: "Guía Práctica",
    description: "Método de 21 días para reducir ansiedad, ordenar tus emociones y reconectar con tu poder interior.",
    icon: FileText,
    action: "Adquirir guía",
    href: "/guia-practica",
    badge: "Más vendido",
  },
  {
    title: "Agenda de Reflexión",
    description: "Un espacio diario íntimo de crecimiento personal para practicar gratitud y reconectar contigo misma.",
    icon: CalendarHeart,
    action: "Explorar agenda",
    href: "/agenda-reflexion",
    badge: "Nuevo",
  },
  {
    title: "Libro: La Princesa...",
    description: "Un cuento inspirador sobre el empoderamiento femenino y la sanación de heridas del pasado.",
    icon: Crown,
    action: "Leer historia",
    href: "/libro-princesa",
    badge: "Digital",
  },
  {
    title: "Plataforma Educativa",
    description: "Acceso completo a formaciones profundas como Re-conéctate y Emulsión Energética.",
    icon: GraduationCap,
    action: "Ver cursos",
    href: "/formaciones",
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
    <main className="flex flex-col relative w-full bg-[var(--color-base)] min-h-screen">
      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center gap-1.5 text-xs text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors duration-200 font-medium tracking-wide"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver a inicio
      </Link>

      {/* Sección Superior: Recursos Premium (Hero) */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-20 text-center flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white text-xs uppercase tracking-[0.25em] text-[var(--color-text-subtle)] mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              Ecosistema Ainara
            </span>
            <TextReveal text="Herramientas para tu Transformación" className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text)] mb-6 text-balance" as="h1" />
            <p className="text-[var(--color-text-muted)] text-lg max-w-2xl leading-relaxed">
              Descubre los recursos diseñados para acompañarte en tu proceso de sanación, 
              claridad mental y reconexión contigo misma. 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="group relative bg-white border border-border p-8 flex flex-col gap-6 rounded-[2rem] hover:shadow-xl transition-all duration-500 h-full hover:-translate-y-1"
                >
                  {item.badge && (
                    <div className="absolute top-6 right-6 px-3 py-1 bg-[var(--color-surface)] text-[var(--color-text-muted)] text-[10px] uppercase tracking-wider rounded-full border border-border font-medium">
                      {item.badge}
                    </div>
                  )}
                  
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-surface)] flex items-center justify-center border border-border group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex flex-col flex-1 gap-3 mt-2">
                    <h3 className="font-serif text-xl text-[var(--color-text)] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-2 border-t border-border/50">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
                    >
                      {item.action}
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección Inferior: Lead Magnet */}
      <section className="bg-[var(--color-surface)] border-t border-border">
        <div className="flex flex-col lg:flex-row min-h-[60vh]">
          {/* Mitad Izquierda (Copy) */}
          <div className="lg:w-1/2 p-8 py-20 lg:p-24 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start max-w-xl mx-auto lg:mx-0"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-serif text-balance text-[var(--color-text)]">¿Sientes que la cabeza no te para?</h2>
              <hr className="divider-breath mb-6 hidden lg:block" />
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
          <div className="lg:w-1/2 p-8 py-20 lg:p-24 flex items-center justify-center bg-white lg:border-l border-border">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-10 text-center lg:text-left">
                      <h3 className="text-2xl md:text-3xl mb-3 font-medium text-[var(--color-text)]">Descarga la guía gratis</h3>
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

                      <div className="pt-4">
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
                          className="w-full py-4 px-6 rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center font-medium tracking-wide shadow-lg shadow-primary/20 hover:-translate-y-0.5"
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
                            "Recibir guía gratuita"
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
                    <h3 className="text-3xl mb-3 font-serif text-[var(--color-text)]">Todo listo.</h3>
                    <p className="text-[var(--color-text-muted)] text-lg mb-8">
                      Tu guía está lista. Descárgala ahora.
                    </p>
                    <motion.a
                      href="/guia-claridad.pdf"
                      download="Guia-Claridad-Ainara.pdf"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 w-full rounded-full bg-[var(--color-primary)] text-white font-medium tracking-wide shadow-lg shadow-primary/20 hover:bg-[var(--color-primary)]/90 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <DownloadIcon className="w-5 h-5" />
                      Descargar Guía Ahora
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" x2="12" y1="15" y2="3"/>
    </svg>
  );
}
