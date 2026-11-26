"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  Check,
  CheckCircle2,
  ChevronDown,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  X,
} from "lucide-react";
import { LESSONS, RESOURCES } from "@/components/emulsion/data";
import BlackFridayCountdown from "./BlackFridayCountdown";
import PackShowcase from "./PackShowcase";
import {
  BEFORE_AFTER,
  BLACK_FRIDAY_OFFER,
  FIT_CHECK,
  PACK_FAQ,
  PACK_PIECES,
  PACK_TESTIMONIALS,
  PAIN_POINTS,
  VALUE_STACK_ITEMS,
} from "./data";

const SILK_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface StripeCtaButtonProps {
  label: string;
  size?: "md" | "lg";
  variant?: "terracotta" | "forest";
  className?: string;
}

/**
 * Nota importante de Tailwind v4 en este repositorio:
 * `--color-base: #ffffff` convierte `text-base` en `color: #fff`.
 * Por eso aquí usamos tamaños explícitos (`text-[15px]`, `text-[16px]`, `text-[17px]`)
 * en lugar de `text-base` para garantizar contraste WCAG AAA en todos los breakpoints.
 */
function StripeCtaButton({
  label,
  size = "lg",
  variant = "terracotta",
  className = "",
}: StripeCtaButtonProps) {
  const reduced = useReducedMotion();

  const sizeStyles =
    size === "lg"
      ? "px-7 sm:px-9 py-4 text-[15px] sm:text-[16px]"
      : "px-5 py-2.5 text-xs sm:text-sm";

  const variantStyles =
    variant === "terracotta"
      ? "bg-[#D39478] hover:bg-[#DF9F83] text-[#111914] shadow-[0_14px_34px_-10px_rgba(211,148,120,0.55)]"
      : "bg-[#1D3B31] hover:bg-[#284B40] text-white shadow-[0_14px_32px_-12px_rgba(20,29,23,0.45)]";

  return (
    <motion.a
      href={BLACK_FRIDAY_OFFER.stripePaymentLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={reduced ? undefined : { y: -2 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3A98F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141D17] ${sizeStyles} ${variantStyles} ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
    </motion.a>
  );
}

export default function BlackFridayLanding() {
  const reduced = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showLessons, setShowLessons] = useState(false);
  const [showStickyMobile, setShowStickyMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyMobile(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#192820] pb-20 md:pb-0">
      {/* ============================================================
          1. BARRA SUPERIOR FIJA DE CAMPAÑA (SIN FUGAS DE ATENCIÓN)
          ============================================================ */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111914]/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="font-serif text-xl sm:text-2xl tracking-tight text-[#F6F2EA] hover:text-[#E3A98F] transition-colors flex items-baseline gap-1.5"
            aria-label="Ainara Unamunzaga · Volver al inicio"
          >
            <span>ainara</span>
            <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-[#A9B9AE]">
              UNAMUNZAGA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <span className="rounded-sm bg-[#D39478] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#111914]">
              {BLACK_FRIDAY_OFFER.badge}
            </span>
            <BlackFridayCountdown variant="compact" />
          </div>

          <StripeCtaButton
            label="Comprar Pack · 89 €"
            size="md"
            className="shrink-0"
          />
        </div>
      </header>

      <main>
        {/* ============================================================
            2. HERO — TEST DE 5 SEGUNDOS + ECUACIÓN DE VALOR INMEDIATA
            ============================================================ */}
        <section className="relative overflow-hidden bg-[#141D17] text-[#F6F2EA] pt-10 pb-16 sm:pt-14 sm:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 72% 35%, rgba(211,148,120,0.16) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 15% 80%, rgba(40,75,64,0.40) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              {/* Columna izquierda: Mensaje directo + Precio anclado sin delay */}
              <div>
                <div className="inline-flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center rounded-sm bg-[#D39478] px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#111914]">
                    {BLACK_FRIDAY_OFFER.badge}
                  </span>
                  <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#E6ECE7]">
                    {BLACK_FRIDAY_OFFER.dateRange}
                  </span>
                </div>

                <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-[4.25rem] leading-[1.02] tracking-tight text-white">
                  Pack{" "}
                  <em className="italic font-normal text-[#E2A58A]">
                    «Empezar por dentro»
                  </em>
                </h1>

                <p className="mt-5 max-w-xl text-[16px] sm:text-[18px] leading-relaxed text-[#D8E1DB]">
                  Ordena tu mente, baja la ansiedad y recupera tu calma diaria{" "}
                  <strong className="text-white font-semibold">
                    sin esperar a enero ni depender de la fuerza de voluntad
                  </strong>
                  . Las 3 herramientas clave de Ainara juntas por primera vez:
                  Guía impresa en tu casa, Agenda digital y formación completa en
                  Mitra.
                </p>

                {/* Micro-prueba social inmediata sobre el pliegue */}
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-[#C8D4CC]">
                  <span className="inline-flex items-center gap-1 text-[#E2A58A]" aria-label="Valoración 5 estrellas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </span>
                  <span>+80 págs. impresas · Agenda diaria · 8 clases + 6 materiales</span>
                </div>

                {/* Tarjeta de precio + CTA principal */}
                <div className="mt-6 rounded-2xl border border-white/14 bg-white/[0.05] p-5 sm:p-6">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#B9C7BE]">
                        Oferta única al año · Pago único
                      </p>
                      <div className="mt-1.5 flex items-baseline gap-3.5">
                        <span className="relative font-serif text-2xl sm:text-3xl text-[#A3B2A8]">
                          {BLACK_FRIDAY_OFFER.originalPrice} €
                          <span
                            aria-hidden="true"
                            className="absolute left-[-4%] right-[-4%] top-1/2 h-[2.5px] -rotate-6 bg-[#D39478]"
                          />
                        </span>
                        <span className="font-serif text-5xl sm:text-6xl font-medium leading-none text-[#E2A58A]">
                          {BLACK_FRIDAY_OFFER.salePrice} €
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-1.5">
                      <span className="inline-flex items-center rounded-full bg-[#D39478]/20 border border-[#D39478]/50 px-3 py-1 text-xs font-semibold text-[#F1C3AE]">
                        Ahorras {BLACK_FRIDAY_OFFER.savings} € (-{BLACK_FRIDAY_OFFER.discountPercent}%)
                      </span>
                      <span className="text-xs text-[#B9C7BE]">
                        Menos de 30 € por herramienta · IVA incluido
                      </span>
                    </div>
                  </div>

                  {/* CTAs: Acción principal en 1ª persona + alternativa humana del cartel */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <StripeCtaButton
                      label="Quiero mi Pack por 89 €"
                      className="w-full sm:w-auto flex-1 whitespace-nowrap"
                    />
                    <a
                      href={BLACK_FRIDAY_OFFER.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.05] hover:bg-white/[0.12] px-6 py-4 text-sm font-medium text-[#F6F2EA] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#E2A58A]" aria-hidden="true" />
                      <span>Escríbeme PACK</span>
                    </a>
                  </div>

                  {/* Micro-confianza bajo el botón */}
                  <div className="mt-4 pt-4 border-t border-white/12 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[11px] sm:text-xs text-[#D3DDD6]">
                    <span className="inline-flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#E2A58A] shrink-0" aria-hidden="true" />
                      Pago seguro Stripe
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#E2A58A] shrink-0" aria-hidden="true" />
                      Envío solo España
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#E2A58A] shrink-0" aria-hidden="true" />
                      Empiezas hoy mismo
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#E2A58A] shrink-0" aria-hidden="true" />
                      7 días de garantía
                    </span>
                  </div>
                </div>
              </div>

              {/* Columna derecha: Tríptico real + Cuenta atrás sincronizada */}
              <div className="space-y-4">
                <PackShowcase />
                <BlackFridayCountdown variant="tiles" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. ESPEJO EMOCIONAL + PUENTE ANTES / DESPUÉS (STORYBRAND / PAS)
            ============================================================ */}
        <section className="py-16 sm:py-24 bg-[#FAF8F4]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9E5B40]">
                El momento en el que estás
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl leading-[1.1] text-[#192820]">
                No necesitas otro propósito vacío para enero.{" "}
                <em className="italic text-[#284B40]">
                  Necesitas un sistema sencillo para volver a ti hoy.
                </em>
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] text-[#3E4F46] leading-relaxed">
                Diciembre suele amplificar el cansancio acumulado de todo el año.
                Si te reconoces en estas tres señales, este pack fue diseñado
                para darte claridad, estructura y alivio real desde el primer
                día.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {PAIN_POINTS.map((item) => (
                <article
                  key={item.tag}
                  className="rounded-[1.75rem] border border-[#DCE5DE] bg-white p-7 shadow-[0_8px_28px_-14px_rgba(25,40,32,0.09)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9E5B40]">
                    {item.tag}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-snug text-[#192820]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#42534A]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            {/* Puente de transformación Antes -> Después */}
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[#E6DFD6] bg-[#F5F1EB] p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8E523A]">
                  Sin método · Seguir igual
                </p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#192820]">
                  Cerrar el año a remolque de tu mente
                </h3>
                <ul className="mt-5 space-y-3">
                  {BEFORE_AFTER.before.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#47554D]"
                    >
                      <X
                        className="w-4 h-4 mt-1 text-[#A85A41] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-[#284B40]/25 bg-[#E9F2EC] p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1F4236]">
                  Con el Pack «Empezar por dentro»
                </p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#14231C]">
                  Entrar en diciembre con calma y protocolo
                </h3>
                <ul className="mt-5 space-y-3">
                  {BEFORE_AFTER.after.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#1F352B]"
                    >
                      <CheckCircle2
                        className="w-4 h-4 mt-1 text-[#1F4236] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            4. EL SISTEMA DE 3 CAPAS (UNBOXING ORIENTADO A RESULTADOS)
            ============================================================ */}
        <section id="que-incluye" className="py-16 sm:py-24 bg-[#F1F5F2] border-y border-[#DCE5DE]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#284B40]">
                El método completo · 3 piezas que se potencian
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl leading-[1.1] text-[#192820]">
                Qué incluye exactamente tu Pack «Empezar por dentro»
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] text-[#3E4F46] leading-relaxed">
                No es una colección de archivos sueltos para acumular. Cada
                pieza cumple un rol distinto: lees y ordenas en papel, lo
                sostienes 10 minutos al día y transformas de raíz en Mitra.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {PACK_PIECES.map((piece) => (
                <article
                  key={piece.step}
                  className="grid gap-6 lg:grid-cols-[0.40fr_0.60fr] items-center rounded-[2rem] border border-[#DCE5DE] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_-20px_rgba(25,40,32,0.12)]"
                >
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-[#F5F8F6] border border-[#E3EBE5] aspect-[4/3] flex items-center justify-center p-5">
                    <Image
                      src={piece.image}
                      alt={piece.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className={
                        piece.step === "01" || piece.step === "02"
                          ? "object-contain p-5"
                          : "object-cover"
                      }
                    />
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-[#141D17] px-3 py-1 text-[11px] font-semibold tracking-wide text-[#F6F2EA] shadow-sm">
                      {piece.badge}
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#284B40] text-xs font-semibold text-white">
                        {piece.step}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9E5B40]">
                        {piece.role}
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-3xl sm:text-4xl leading-[1.12] text-[#192820]">
                      {piece.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-semibold text-[#284B40]">
                      {piece.subtitle}
                    </p>
                    <p className="mt-3 rounded-xl bg-[#FAF8F4] border border-[#E7ECE8] px-4 py-3 text-[15px] font-medium text-[#1D3228]">
                      {piece.outcome}
                    </p>
                    <p className="mt-3.5 text-[15px] leading-relaxed text-[#42534A]">
                      {piece.description}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {piece.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-[15px] text-[#22362D]"
                        >
                          <CheckCircle2
                            className="w-4 h-4 mt-1 text-[#284B40] shrink-0"
                            aria-hidden="true"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            {/* Desplegable con el temario completo de Emulsión Energética */}
            <div className="mt-8 rounded-[1.75rem] border border-[#DCE5DE] bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setShowLessons((prev) => !prev)}
                aria-expanded={showLessons}
                className="w-full px-6 sm:px-8 py-5 flex items-center justify-between gap-4 text-left hover:bg-[#FAF8F4] transition-colors cursor-pointer"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9E5B40]">
                    Transparencia total · Dentro de Mitra
                  </p>
                  <p className="mt-1 font-serif text-xl sm:text-2xl text-[#192820]">
                    Ver las 8 clases de Emulsión Energética y sus 6 materiales tácticos
                  </p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#284B40] shrink-0 transition-transform duration-300 ${
                    showLessons ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {showLessons && (
                  <motion.div
                    initial={reduced ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduced ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: reduced ? 0 : 0.35, ease: SILK_EASE }}
                    className="overflow-hidden border-t border-[#E6EDE8]"
                  >
                    <div className="p-6 sm:p-8 space-y-8">
                      <div className="grid gap-3.5 md:grid-cols-2">
                        {LESSONS.map((lesson, i) => (
                          <div
                            key={lesson.title}
                            className="rounded-2xl border border-[#E5ECE7] bg-[#FAF8F4] p-4"
                          >
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E5B40]">
                              Clase 0{i + 1}
                            </p>
                            <h4 className="mt-1 font-serif text-lg text-[#192820]">
                              {lesson.title}
                            </h4>
                            <p className="mt-1.5 text-sm text-[#42534A] leading-relaxed">
                              {lesson.focus}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#284B40] mb-3">
                          6 recursos descargables incluidos en Mitra
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {RESOURCES.map((res) => (
                            <div
                              key={res.title}
                              className="flex items-start gap-2.5 rounded-xl border border-[#E5ECE7] bg-white p-3.5"
                            >
                              <Check
                                className="w-4 h-4 mt-0.5 text-[#284B40] shrink-0"
                                aria-hidden="true"
                              />
                              <div>
                                <p className="text-sm font-semibold text-[#192820]">
                                  {res.title}
                                </p>
                                <p className="text-xs text-[#4C5E55] mt-0.5">
                                  {res.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA intermedio para lectoras decididas tras ver el contenido */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[1.75rem] bg-[#141D17] px-6 sm:px-8 py-6 text-[#F6F2EA]">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#E2A58A] font-semibold">
                  Todo incluido · Pago único
                </p>
                <p className="mt-1 font-serif text-2xl sm:text-3xl text-white">
                  Las 3 herramientas por{" "}
                  <span className="text-[#E2A58A]">89 €</span>{" "}
                  <span className="text-lg text-[#95A49A] line-through">159 €</span>
                </p>
              </div>
              <StripeCtaButton
                label="Reservar mi Pack ahora"
                className="w-full sm:w-auto shrink-0"
              />
            </div>
          </div>
        </section>

        {/* ============================================================
            5. CUALIFICACIÓN HONESTA (PARA QUIÉN SÍ / PARA QUIÉN NO)
            ============================================================ */}
        <section className="py-16 sm:py-20 bg-[#FAF8F4]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9E5B40]">
                Honestidad ante todo
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl leading-[1.1] text-[#192820]">
                ¿Es este pack para ti en este momento?
              </h2>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[#284B40]/20 bg-white p-7 sm:p-8 shadow-sm">
                <p className="inline-flex items-center gap-2 rounded-full bg-[#E9F2EC] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1D3B31]">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  Sí es para ti si…
                </p>
                <ul className="mt-5 space-y-3.5">
                  {FIT_CHECK.yes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#22362D]"
                    >
                      <CheckCircle2
                        className="w-4 h-4 mt-1 text-[#284B40] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-[#DCE5DE] bg-[#F5F7F5] p-7 sm:p-8">
                <p className="inline-flex items-center gap-2 rounded-full bg-[#ECE7E0] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#7B4530]">
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                  Mejor no entrar si…
                </p>
                <ul className="mt-5 space-y-3.5">
                  {FIT_CHECK.no.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#42534A]"
                    >
                      <X
                        className="w-4 h-4 mt-1 text-[#9E5B40] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            6. BLOQUE CENTRAL DE OFERTA Y ANCLAJE DE VALOR (CONVERSIÓN)
            ============================================================ */}
        <section id="oferta" className="py-16 sm:py-24 bg-[#141D17] text-[#F6F2EA] relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(211,148,120,0.18) 0%, transparent 55%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center rounded-sm bg-[#D39478] px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#111914]">
                Solo del 27 al 30 de noviembre
              </span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-[1.08] text-white">
                Todo el sistema completo por{" "}
                <em className="italic text-[#E2A58A]">70 € menos</em>
              </h2>
              <p className="mt-3 text-[16px] text-[#D0DBD3]">
                Edición física preparada para envío en España. El lunes 30 a las
                23:59 esta oferta se cierra definitivamente.
              </p>
            </div>

            <div className="mt-10 rounded-[2rem] border border-[#D39478]/40 bg-[#19241D] p-6 sm:p-10 shadow-[0_30px_90px_-24px_rgba(0,0,0,0.7)]">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/12">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#E2A58A] font-semibold">
                    Resumen de tu Pack Black Friday
                  </p>
                  <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-white">
                    {BLACK_FRIDAY_OFFER.packName}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs text-[#E6ECE7]">
                  <MapPin className="w-3.5 h-3.5 text-[#E2A58A]" aria-hidden="true" />
                  Envío exclusivo España
                </span>
              </div>

              <ul className="mt-6 divide-y divide-white/10">
                {VALUE_STACK_ITEMS.map((item) => (
                  <li
                    key={item.name}
                    className="py-4 flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D39478]/20 text-[#F1C3AE] shrink-0">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-medium text-white text-[15px]">
                          {item.name}
                        </p>
                        <p className="text-xs sm:text-sm text-[#B8C6BD] mt-0.5">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-[#D39478]/35 bg-[#D39478]/12 px-2.5 py-0.5 text-[11px] font-semibold text-[#F1C3AE]">
                      {item.tag}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Anclaje de precio final + matemática tangible */}
              <div className="mt-6 rounded-2xl bg-[#101813] border border-white/12 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#A9B9AE]">
                    Precio habitual: <span className="line-through">159 €</span>
                  </p>
                  <div className="mt-1 flex items-baseline gap-3">
                    <span className="font-serif text-5xl sm:text-6xl font-medium text-[#E2A58A] leading-none">
                      89 €
                    </span>
                    <span className="text-sm text-[#D0DBD3]">
                      pago único · IVA incluido
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[#B8C6BD]">
                    Equivale a menos de 30 € por pieza (incluyendo libro físico
                    en España + formación de por vida).
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="inline-flex items-center rounded-full bg-[#D39478] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#111914]">
                    Ahorras 70 € hoy
                  </p>
                  <p className="mt-2 text-xs text-[#B8C6BD]">
                    {BLACK_FRIDAY_OFFER.deadlineLabel}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <StripeCtaButton
                  label="Sí, quiero mi Pack «Empezar por dentro» — 89 €"
                  className="w-full py-4 text-[16px] sm:text-[17px]"
                />
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 text-xs text-[#B9C7BE]">
                  <span className="inline-flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#E2A58A]" aria-hidden="true" />
                    Checkout oficial de Stripe (SSL)
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E2A58A]" aria-hidden="true" />
                    7 días de garantía sin preguntas
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpenText className="w-3.5 h-3.5 text-[#E2A58A]" aria-hidden="true" />
                    Tarjeta · Apple Pay · Google Pay
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. QUÉ PASA TRAS EL PAGO + AUTORIDAD + GARANTÍA (CONTRASTE AAA)
            ============================================================ */}
        <section className="py-16 sm:py-24 bg-[#FAF8F4]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9E5B40]">
                Sin sorpresas · Proceso claro
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl leading-[1.1] text-[#192820]">
                Qué ocurre en cuanto completas tu pedido
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Lock,
                  step: "Paso 1 · 30 segundos",
                  title: "Pago seguro en Stripe",
                  text: "Haces el pago único de 89 € y dejas tu email, teléfono y dirección de entrega en España.",
                },
                {
                  icon: Mail,
                  step: "Paso 2 · Empiezas hoy",
                  title: "Acceso digital inmediato",
                  text: "Recibes las instrucciones para descargar tu Agenda de reflexión digital y entrar en las 8 clases en Mitra.",
                },
                {
                  icon: Package,
                  step: "Paso 3 · En tu buzón",
                  title: "Envío físico en España",
                  text: "Preparamos y enviamos tu Guía integral de transformación impresa (80 págs.) directa a tu dirección.",
                },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="rounded-[1.75rem] border border-[#DCE5DE] bg-white p-7 shadow-[0_8px_24px_-14px_rgba(25,40,32,0.08)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ECF3ED] text-[#284B40]">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9E5B40]">
                      {step.step}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-[#192820]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] text-[#3F5148] leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bloque de Autoridad + Garantía humana con contraste máximo */}
            <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] items-stretch">
              <div className="rounded-[2rem] border border-[#DCE5DE] bg-white p-7 sm:p-9 flex flex-col sm:flex-row gap-6 items-center shadow-sm">
                <div className="relative w-32 h-40 sm:w-36 sm:h-44 shrink-0 rounded-2xl overflow-hidden border border-[#DCE5DE]">
                  <Image
                    src="/images/ainara-portrait.webp"
                    alt="Ainara Unamunzaga, mentora en claridad y regulación emocional"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9E5B40]">
                    Quién te acompaña
                  </p>
                  <h3 className="mt-1.5 font-serif text-2xl sm:text-3xl text-[#192820]">
                    Soy Ainara Unamunzaga
                  </h3>
                  <p className="mt-3 text-[15px] text-[#3F5148] leading-relaxed">
                    Mentora en autoconfianza, inteligencia emocional y PNL.
                    Diseñé este pack porque entender un patrón en la cabeza no
                    basta: hace falta un mapa claro, una pausa diaria y un
                    protocolo real para sostenerte cuando llegan los días
                    difíciles.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border-2 border-[#284B40]/30 bg-[#E6F0E9] p-7 sm:p-9 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#1C3A30] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F6F2EA]">
                    <ShieldCheck className="w-4 h-4 text-[#E2A58A]" aria-hidden="true" />
                    <span>Garantía «Empieza sin miedo» · 7 días</span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-[#111E18]">
                    Pruébalo sin presión ni riesgo
                  </h3>
                  <p className="mt-3 text-[15px] sm:text-[16px] text-[#1D3128] leading-relaxed">
                    Quiero que entres porque sientes que te suma, no por impulso.
                    Tienes <strong>7 días completos</strong> desde tu compra para
                    revisar los materiales y comprobar si este enfoque encaja
                    contigo. Si sientes que no es para ti, me escribes un correo
                    y gestionamos la devolución. Sin preguntas y sin juicios.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#284B40]/15 flex items-center justify-between gap-3">
                  <p className="font-serif italic text-xl text-[#1C3A30]">
                    — Ainara · @ainaracoach
                  </p>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#284B40]">
                    Riesgo cero
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            8. PRUEBA SOCIAL REAL (LAS 3 PIEZAS VALIDADAS)
            ============================================================ */}
        <section className="py-16 sm:py-24 bg-[#F1F5F2] border-y border-[#DCE5DE]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#284B40]">
                Experiencias reales
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl leading-[1.1] text-[#192820]">
                Lo que ya han vivido quienes usan estas herramientas
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {PACK_TESTIMONIALS.map((t) => (
                <article
                  key={t.name}
                  className="rounded-[1.75rem] border border-[#DCE5DE] bg-white p-6 sm:p-7 flex flex-col justify-between shadow-[0_6px_24px_-14px_rgba(25,40,32,0.08)]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-0.5 text-[#C98A6F]" aria-label="5 de 5 estrellas">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className="w-3.5 h-3.5 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="rounded-full bg-[#ECF3ED] px-2.5 py-0.5 text-[11px] font-semibold text-[#1F4236]">
                        {t.piece}
                      </span>
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#22362D]">
                      “{t.quote}”
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#EDF2EE]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#192820]">
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[#4C5E55]">{t.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            9. PREGUNTAS FRECUENTES (OBJECIONES RESUELTAS)
            ============================================================ */}
        <section id="preguntas" className="py-16 sm:py-24 bg-[#FAF8F4]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9E5B40]">
                Preguntas frecuentes
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl leading-[1.1] text-[#192820]">
                Resolvemos tus dudas antes de entrar
              </h2>
            </div>

            <div className="mt-10 divide-y divide-[#DCE5DE] rounded-[1.75rem] border border-[#DCE5DE] bg-white px-6 sm:px-8">
              {PACK_FAQ.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.question} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                    >
                      <span className="font-serif text-xl sm:text-2xl text-[#192820] leading-snug">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#284B40] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduced ? undefined : { height: 0, opacity: 0 }}
                          transition={{
                            duration: reduced ? 0 : 0.28,
                            ease: SILK_EASE,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 pr-6 text-[15px] leading-relaxed text-[#3F5148]">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            10. CIERRE FINAL DE ALTA CONVERSIÓN
            ============================================================ */}
        <section className="py-16 sm:py-24 bg-[#141D17] text-[#F6F2EA]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <span className="inline-flex items-center rounded-sm bg-[#D39478] px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#111914]">
              {BLACK_FRIDAY_OFFER.badge} · {BLACK_FRIDAY_OFFER.dateRange}
            </span>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.06] text-white">
              Empieza diciembre con{" "}
              <em className="italic text-[#E2A58A]">calma, orden y método</em>
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-[16px] sm:text-[18px] text-[#D0DBD3] leading-relaxed">
              Guía integral impresa (80 págs., envío a España) + Agenda de
              reflexión digital + Formación Emulsión Energética en Mitra (8
              clases + 6 materiales).
            </p>

            <div className="mt-7 flex items-baseline justify-center gap-4">
              <span className="relative font-serif text-3xl text-[#A3B2A8]">
                {BLACK_FRIDAY_OFFER.originalPrice} €
                <span
                  aria-hidden="true"
                  className="absolute left-[-4%] right-[-4%] top-1/2 h-[2.5px] -rotate-6 bg-[#D39478]"
                />
              </span>
              <span className="font-serif text-6xl sm:text-7xl font-medium leading-none text-[#E2A58A]">
                {BLACK_FRIDAY_OFFER.salePrice} €
              </span>
            </div>

            <div className="mt-7 max-w-md mx-auto">
              <BlackFridayCountdown variant="tiles" />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <StripeCtaButton
                label="Sí, quiero mi Pack por 89 €"
                className="w-full sm:w-auto min-w-[280px]"
              />
              <a
                href={BLACK_FRIDAY_OFFER.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.05] hover:bg-white/[0.12] px-7 py-4 text-sm font-medium text-[#F6F2EA] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#E2A58A]" aria-hidden="true" />
                ¿Dudas? Escríbeme PACK
              </a>
            </div>

            <p className="mt-5 text-xs text-[#B2C1B7]">
              Pago 100% seguro con Stripe · Envío físico a España · 7 días de
              garantía · {BLACK_FRIDAY_OFFER.deadlineLabel}
            </p>
          </div>
        </section>
      </main>

      {/* Footer minimalista fiel al cierre del cartel */}
      <footer className="bg-[#0F1612] border-t border-white/10 py-8 text-center text-xs text-[#A3B2A8]">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="tracking-[0.22em] uppercase">
            <a
              href={BLACK_FRIDAY_OFFER.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E2A58A] transition-colors"
            >
              @AINARACOACH
            </a>{" "}
            ·{" "}
            <Link href="/" className="hover:text-[#E2A58A] transition-colors">
              AINARACOACHING.COM
            </Link>
          </p>
          <p>© {new Date().getFullYear()} Ainara Unamunzaga · Coaching y claridad emocional</p>
        </div>
      </footer>

      {/* ============================================================
          11. BARRA STICKY DE CONVERSIÓN EN MÓVIL
          ============================================================ */}
      <div
        aria-hidden={!showStickyMobile}
        className={`md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-white/12 bg-[#141D17]/95 backdrop-blur-md px-4 py-3 transition-transform duration-300 ${
          showStickyMobile
            ? "translate-y-0"
            : "translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#E2A58A] font-semibold">
              Lunes 30 · 23:59
            </p>
            <div className="mt-0.5 flex items-baseline gap-2">
              <span className="text-xs text-[#A3B2A8] line-through">159 €</span>
              <span className="font-serif text-2xl font-medium text-white leading-none">
                89 €
              </span>
            </div>
          </div>
          <StripeCtaButton
            label="Comprar Pack"
            size="md"
            className="px-5 py-3 text-sm shrink-0"
          />
        </div>
      </div>
    </div>
  );
}
