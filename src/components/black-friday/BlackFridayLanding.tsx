"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Lock, MessageCircle, Plus, ShieldCheck, Truck } from "lucide-react";
import { LESSONS } from "@/components/emulsion/data";
import BlackFridayCountdown from "./BlackFridayCountdown";
import PackShowcase, { EmulsionScreen } from "./PackShowcase";
import {
  BLACK_FRIDAY_OFFER as OFFER,
  INSIDE_PAGES,
  PACK_FAQ,
  PACK_PIECES,
  PACK_STATS,
  PACK_TESTIMONIALS,
  PURCHASE_STEPS,
  SHIFTS,
  VALUE_STACK_ITEMS,
} from "./data";
import s from "./landing.module.css";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/* Piezas reutilizables                                                */
/* ------------------------------------------------------------------ */

function BuyButton({
  label = `Quiero mi pack · ${OFFER.salePrice} €`,
  tone = "ink",
  compact = false,
  mid = false,
  className = "",
}: {
  label?: string;
  tone?: "ink" | "light";
  compact?: boolean;
  mid?: boolean;
  className?: string;
}) {
  const palette =
    tone === "ink"
      ? "bg-[#0E1311] text-white hover:bg-[#284B40] focus-visible:ring-[#0E1311]"
      : "bg-white text-[#0E1311] hover:bg-[#F7EBE3] focus-visible:ring-white";
  const size = compact
    ? "h-10 px-4 text-[13px]"
    : mid
      ? "h-12 px-5 text-[15px]"
      : "h-14 px-6 text-[15px] sm:text-[16px]";
  return (
    <a
      href={OFFER.stripePaymentLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[-0.01em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${palette} ${size} ${className}`}
    >
      <span>{label}</span>
      <ArrowRight
        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`${s.eyebrow} text-[#B65F3A] ${className}`}>{children}</p>;
}

const TICKER_ITEMS = [
  "Black Friday",
  `−${OFFER.discountPercent}%`,
  "Solo hasta el lunes 30 · 23:59",
  "Envío a España incluido",
  "Pago único",
  "Garantía 7 días",
];

/* ------------------------------------------------------------------ */
/* Landing                                                             */
/* ------------------------------------------------------------------ */

export default function BlackFridayLanding() {
  const reduced = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showLessons, setShowLessons] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${s.root} min-h-screen pb-24 md:pb-0`}>
      {/* ============ TICKER ============ */}
      <div className="overflow-hidden bg-[#0E1311] text-white" aria-label="Black Friday: 44 % de descuento hasta el lunes 30 a las 23:59">
        <div className={`${s.ticker} py-2`} aria-hidden="true">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={`${dup}-${i}`} className="flex items-center text-[11px] font-semibold uppercase tracking-[0.2em]">
                  <span className="px-5">{item}</span>
                  <span className="text-[#B65F3A]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-40 border-b border-[#E8E5DF] bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link href="/" className="flex items-baseline gap-2 text-[#0E1311]" aria-label="Ainara Unamunzaga · inicio">
            <span className={`${s.serif} text-[24px] sm:text-[26px] leading-none`}>ainara</span>
            <span className="hidden sm:inline text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5C6560]">
              Unamunzaga
            </span>
          </Link>
          <div className="hidden md:block">
            <BlackFridayCountdown variant="compact" />
          </div>
          <BuyButton label={`Comprar · ${OFFER.salePrice} €`} compact />
        </div>
      </header>

      <main>
        {/* ============ HERO ============ */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-6 sm:pt-14 pb-16 sm:pb-24">
          <div className="grid gap-7 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:items-center">
            <div className="lg:col-start-1">
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex flex-wrap items-center gap-2"
              >
                <span className="rounded-full bg-[#0E1311] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  Black Friday
                </span>
                <span className="rounded-full border border-[#E8E5DF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2A312D]">
                  27 — 30 nov
                </span>
              </motion.div>

              <motion.h1
                initial={reduced ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: EASE }}
                className={`${s.d1} mt-5 text-[#0E1311]`}
              >
                Empezar
                <br />
                <span className={`${s.serif} text-[#B65F3A]`}>por dentro.</span>
              </motion.h1>

              <motion.p
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                style={{ maxWidth: "34rem" }}
                className="mt-5 text-[17px] sm:text-[19px] text-[#2A312D]"
              >
                Guía impresa, agenda diaria y formación completa. Tres herramientas para ordenar tu mente,
                <span className="font-semibold text-[#0E1311]"> juntas por primera vez.</span>
              </motion.p>
            </div>

            {/* Visual: en móvil aparece entre titular y precio */}
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="mx-auto w-full max-w-[560px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:max-w-none"
            >
              <PackShowcase />
            </motion.div>

            {/* Precio + CTA */}
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
              className="lg:col-start-1 lg:row-start-2 lg:self-start"
            >
              <div className="flex items-end gap-4">
                <span className={`${s.num} text-[76px] sm:text-[96px] text-[#0E1311]`}>
                  {OFFER.salePrice}
                  <span className="text-[0.5em] align-top ml-1">€</span>
                </span>
                <div className="pb-2">
                  <span className={`${s.strike} text-[20px] sm:text-[22px] font-medium text-[#5C6560]`}>
                    {OFFER.originalPrice} €
                  </span>
                  <p className="mt-1 inline-flex rounded-full bg-[#F7EBE3] px-2.5 py-1 text-[12px] font-semibold text-[#8E4426]">
                    Ahorras {OFFER.savings} €
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BuyButton className="w-full sm:w-auto sm:min-w-[300px]" />
                <a
                  href={OFFER.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 text-[14px] font-medium text-[#2A312D] underline decoration-[#0E1311]/25 underline-offset-4 hover:decoration-[#0E1311]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Escríbeme «PACK»
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-[#5C6560]">
                <li className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-[#0E1311]" aria-hidden="true" /> Pago seguro
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 text-[#0E1311]" aria-hidden="true" /> Envío España incluido
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#0E1311]" aria-hidden="true" /> Garantía 7 días
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ============ CIFRAS ============ */}
        <section aria-label="El pack en cifras" className="border-y border-[#E8E5DF]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
            {PACK_STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.06}
                className={`px-4 sm:px-6 py-7 sm:py-10 ${i % 2 === 1 ? "border-l border-[#E8E5DF]" : ""} ${
                  i >= 2 ? "border-t border-[#E8E5DF] lg:border-t-0" : ""
                } ${i === 2 ? "lg:border-l" : ""}`}
              >
                <p className="flex items-baseline gap-1.5">
                  <span className={`${s.num} text-[56px] sm:text-[72px] text-[#0E1311]`}>{stat.value}</span>
                  <span className={`${s.serif} text-[20px] sm:text-[24px] text-[#B65F3A]`}>{stat.unit}</span>
                </p>
                <p className="mt-2 text-[13px] sm:text-[14px] text-[#5C6560]">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ QUÉ INCLUYE ============ */}
        <section id="que-incluye" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Qué incluye</Eyebrow>
              <h2 className={`${s.d2} mt-3 text-[#0E1311]`}>
                Tres piezas.
                <br />
                <span className={s.serif}>Un solo camino.</span>
              </h2>
            </div>
            <p style={{ maxWidth: "22rem" }} className="text-[15px] text-[#5C6560]">
              Lees en papel, lo sostienes cada día y lo transformas de raíz.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {PACK_PIECES.map((piece, i) => (
              <Reveal key={piece.step} delay={i * 0.08}>
                <article className="group flex h-full flex-col">
                  <div className="relative aspect-[5/4] sm:aspect-[4/5] overflow-hidden rounded-[24px] bg-[#F5F3EF]">
                    <span className={`${s.num} absolute left-5 top-5 z-10 text-[15px] text-[#0E1311]`}>
                      {piece.step}
                    </span>
                    <span className="absolute right-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0E1311]">
                      {piece.role}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center pt-[10%] transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.02]">
                      {piece.step === "03" ? (
                        <div className="relative h-[68%] aspect-[3/4] rotate-[3deg]">
                          <EmulsionScreen sizes="(max-width: 1024px) 70vw, 280px" />
                        </div>
                      ) : (
                        <div
                          className={`${s.book} ${s.spine} relative h-[72%] overflow-hidden rounded-[3px] ${
                            piece.step === "01" ? "aspect-[1000/1546] -rotate-[2deg]" : "aspect-[1001/1415] rotate-[2deg]"
                          }`}
                        >
                          <Image
                            src={piece.image}
                            alt={piece.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 70vw, 280px"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 px-1">
                    <h3 className={`${s.d3} text-[#0E1311]`}>{piece.title}</h3>
                    <p className="mt-1 text-[13px] font-medium text-[#284B40]">{piece.format}</p>
                    <p className="mt-3 text-[15px] text-[#2A312D]">{piece.outcome}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {piece.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full border border-[#E8E5DF] px-2.5 py-1 text-[12px] text-[#2A312D]"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Temario Emulsión */}
          <Reveal className="mt-10">
            <div className="rounded-[24px] border border-[#E8E5DF]">
              <button
                type="button"
                onClick={() => setShowLessons((v) => !v)}
                aria-expanded={showLessons}
                className="flex w-full items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left"
              >
                <span className="text-[15px] sm:text-[16px] font-semibold text-[#0E1311]">
                  Ver las 8 clases de Emulsión Energética
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-[#0E1311] transition-transform duration-300 ${showLessons ? "rotate-45" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {showLessons && (
                  <motion.div
                    initial={reduced ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduced ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <ol className="grid border-t border-[#E8E5DF] sm:grid-cols-2">
                      {LESSONS.map((lesson, i) => {
                        const [title, sub] = lesson.title.split(" (");
                        return (
                          <li
                            key={lesson.title}
                            className={`flex items-baseline gap-4 px-5 sm:px-7 py-4 border-[#E8E5DF] ${
                              i > 0 ? "border-t" : ""
                            } ${i === 1 ? "sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-l" : ""}`}
                          >
                            <span className={`${s.num} text-[22px] text-[#B65F3A]`}>{String(i + 1).padStart(2, "0")}</span>
                            <span>
                              <span className="block text-[15px] font-semibold text-[#0E1311]">{title}</span>
                              {sub && (
                                <span className="block text-[13px] text-[#5C6560]">{sub.replace(")", "")}</span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ol>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </section>

        {/* ============ POR DENTRO ============ */}
        <section aria-labelledby="por-dentro" className="bg-[#F5F3EF] py-20 sm:py-28">
          <Reveal className="mx-auto flex max-w-6xl items-end justify-between gap-4 px-4 sm:px-6">
            <div>
              <Eyebrow>Por dentro</Eyebrow>
              <h2 id="por-dentro" className={`${s.d2} mt-3 text-[#0E1311]`}>
                Páginas <span className={s.serif}>reales.</span>
              </h2>
            </div>
            <p className="pb-2 text-[13px] font-medium text-[#5C6560]">Desliza →</p>
          </Reveal>

          <div className={`${s.rail} mt-10`}>
            {INSIDE_PAGES.map((p) => (
              <figure key={p.src} className="w-[62vw] max-w-[260px] sm:w-[240px]">
                <div className={`${s.page} relative aspect-[1000/1546] overflow-hidden rounded-[4px] bg-white`}>
                  <Image
                    src={p.src}
                    alt={`${p.label} · ${p.page}`}
                    fill
                    sizes="260px"
                    className={p.label === "Guía" ? "object-cover" : "object-contain"}
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between text-[12px]">
                  <span className="font-semibold text-[#0E1311]">{p.label}</span>
                  <span className="text-[#5C6560]">{p.page}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ============ ANTES / AHORA ============ */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <Reveal>
            <Eyebrow>El cambio</Eyebrow>
            <h2 className={`${s.d2} mt-3 max-w-3xl text-[#0E1311]`}>
              De ir a remolque <span className={s.serif}>a volver a ti.</span>
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-[#0E1311]">
            {SHIFTS.map((shift, i) => (
              <Reveal key={shift.from} delay={i * 0.06}>
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 border-b border-[#E8E5DF] py-6 sm:grid-cols-[3rem_1fr_auto_1fr] sm:items-center sm:gap-x-8 sm:py-8">
                  <span className={`${s.num} row-span-2 text-[15px] text-[#5C6560] sm:row-span-1`}>0{i + 1}</span>
                  <p className="text-[16px] sm:text-[20px] text-[#5C6560] line-through decoration-[#B65F3A]/60 decoration-1">
                    {shift.from}
                  </p>
                  <ArrowRight className="hidden h-5 w-5 text-[#B65F3A] sm:block" aria-hidden="true" />
                  <p className={`${s.d3} text-[#0E1311]`}>{shift.to}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ OFERTA / TICKET ============ */}
        <section id="oferta" className="bg-[#F5F3EF] py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <Reveal>
              <Eyebrow>Solo 4 días</Eyebrow>
              <h2 className={`${s.d2} mt-3 text-[#0E1311]`}>
                Todo el sistema,
                <br />
                <span className={`${s.serif} text-[#B65F3A]`}>70 € menos.</span>
              </h2>
              <p style={{ maxWidth: "26rem" }} className="mt-5 text-[16px] text-[#2A312D]">
                El lunes 30 a las 23:59 el pack vuelve a {OFFER.originalPrice} €.
              </p>
              <div className="mt-8">
                <BlackFridayCountdown variant="tiles" />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className={s.ticket}>
                <div className="flex items-center justify-between gap-3 px-6 sm:px-8 pt-6 sm:pt-8">
                  <p className="text-[15px] font-semibold text-[#0E1311]">{OFFER.packName}</p>
                  <span className="rounded-full bg-[#0E1311] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                    −{OFFER.discountPercent}%
                  </span>
                </div>
                <ul className="mt-4 px-6 sm:px-8">
                  {VALUE_STACK_ITEMS.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-4 border-t border-[#E8E5DF] py-3.5"
                    >
                      <span>
                        <span className="block text-[15px] font-medium text-[#0E1311]">{item.name}</span>
                        <span className="block text-[13px] text-[#5C6560]">{item.detail}</span>
                      </span>
                      <span className="shrink-0 text-[12px] font-semibold text-[#284B40]">{item.tag}</span>
                    </li>
                  ))}
                </ul>

                <div className={`${s.perforation} mt-4`} />

                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-6">
                  <div className="flex items-center justify-between text-[14px] text-[#5C6560]">
                    <span>Precio habitual</span>
                    <span className={s.strike}>{OFFER.originalPrice} €</span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[14px] text-[#8E4426]">
                    <span>Black Friday</span>
                    <span>−{OFFER.savings} €</span>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <span className="pb-2 text-[14px] font-semibold text-[#0E1311]">Total hoy</span>
                    <span className={`${s.num} text-[64px] sm:text-[76px] text-[#0E1311]`}>
                      {OFFER.salePrice}
                      <span className="text-[0.5em] align-top ml-1">€</span>
                    </span>
                  </div>
                  <BuyButton className="mt-6 w-full" />
                  <p className="mt-3 text-center text-[12px] text-[#5C6560]">
                    Tarjeta · Apple Pay · Google Pay — IVA incluido
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ AINARA + GARANTÍA ============ */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="relative mx-auto aspect-square w-full max-w-[460px]">
                <div aria-hidden="true" className="absolute inset-[6%] rounded-full bg-[#F5F3EF]" />
                <Image
                  src="/images/ainara-hero-cutout.webp"
                  alt="Ainara Unamunzaga"
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-contain object-bottom"
                />
                {/* Sello de garantía */}
                <div className="absolute bottom-[6%] right-0 flex h-[30%] aspect-square flex-col items-center justify-center rounded-full bg-[#0E1311] text-center text-white shadow-[0_16px_40px_-16px_rgba(14,19,17,0.6)]">
                  <span className={`${s.num} text-[clamp(30px,9vw,44px)]`}>7</span>
                  <span className="mt-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em]">días de</span>
                  <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em]">garantía</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Eyebrow>Quién te acompaña</Eyebrow>
              <blockquote className={`${s.d2} mt-4 text-[#0E1311]`}>
                «Entender lo que te pasa no basta.{" "}
                <span className={`${s.serif} text-[#B65F3A]`}>Necesitas un sistema.</span>»
              </blockquote>
              <p className="mt-6 text-[15px] font-semibold text-[#0E1311]">Ainara Unamunzaga</p>
              <p className="text-[14px] text-[#5C6560]">Mentora en inteligencia emocional, autoconfianza y PNL</p>

              <div className="mt-8 flex items-start gap-3 rounded-[18px] border border-[#E8E5DF] p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#284B40]" aria-hidden="true" />
                <p className="text-[14px] text-[#2A312D]">
                  <span className="font-semibold text-[#0E1311]">Riesgo cero.</span> Si en 7 días sientes que no es
                  para ti, te devuelvo el dinero. Sin preguntas.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ TESTIMONIOS ============ */}
        <section aria-labelledby="testimonios" className="border-t border-[#E8E5DF] py-20 sm:py-28">
          <Reveal className="mx-auto flex max-w-6xl items-end justify-between gap-4 px-4 sm:px-6">
            <div>
              <Eyebrow>Experiencias reales</Eyebrow>
              <h2 id="testimonios" className={`${s.d2} mt-3 text-[#0E1311]`}>
                Lo que <span className={s.serif}>ya cambió.</span>
              </h2>
            </div>
            <p className="hidden pb-2 text-[13px] font-medium text-[#5C6560] sm:block">Desliza →</p>
          </Reveal>

          <div className={`${s.rail} mt-10`}>
            {PACK_TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex w-[82vw] max-w-[360px] flex-col justify-between rounded-[22px] bg-[#F5F3EF] p-6 sm:p-7"
              >
                <div>
                  <span aria-hidden="true" className={`${s.serif} block text-[56px] leading-[0.6] text-[#B65F3A]`}>
                    “
                  </span>
                  <blockquote className="mt-3 text-[17px] leading-[1.45] text-[#0E1311]">{t.quote}</blockquote>
                </div>
                <figcaption className="mt-6 flex items-center justify-between gap-3 text-[13px]">
                  <span className="font-semibold text-[#0E1311]">{t.name}</span>
                  <span className="text-[#5C6560]">{t.piece}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ============ CÓMO FUNCIONA ============ */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
          <Reveal>
            <Eyebrow>Tras el pago</Eyebrow>
            <h2 className={`${s.d2} mt-3 text-[#0E1311]`}>
              Así de <span className={s.serif}>sencillo.</span>
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[22px] border border-[#E8E5DF] bg-[#E8E5DF] md:grid-cols-3">
            {PURCHASE_STEPS.map((step, i) => (
              <li key={step.title} className="flex items-start gap-5 bg-white p-5 sm:p-8 md:block">
                <span className={`${s.num} w-8 shrink-0 text-[40px] sm:text-[44px] text-[#B65F3A]`}>{i + 1}</span>
                <div>
                  <p className={`${s.d3} md:mt-4 text-[#0E1311]`}>{step.title}</p>
                  <p className="mt-1.5 text-[14px] text-[#5C6560]">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ============ FAQ ============ */}
        <section id="preguntas" className="border-t border-[#E8E5DF] py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Eyebrow>Preguntas</Eyebrow>
              <h2 className={`${s.d2} mt-3 text-[#0E1311]`}>
                Antes de <span className={s.serif}>entrar.</span>
              </h2>
              <a
                href={OFFER.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0E1311] underline decoration-[#0E1311]/25 underline-offset-4 hover:decoration-[#0E1311]"
              >
                ¿Otra duda? Escríbeme por WhatsApp
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Reveal>

            <div className="border-t border-[#0E1311]">
              {PACK_FAQ.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.question} className="border-b border-[#E8E5DF]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="text-[16px] sm:text-[18px] font-semibold tracking-[-0.02em] text-[#0E1311]">
                        {item.question}
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-[#0E1311] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduced ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 pr-8 text-[15px] text-[#2A312D]">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ CIERRE ============ */}
        <section className="px-4 sm:px-6 pb-16 sm:pb-24">
          <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#0E1311] px-6 py-14 sm:px-12 sm:py-20 text-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(182,95,58,0.45),transparent)]"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <div>
                <p className={`${s.eyebrow} text-[#E6A385]`}>Black Friday · 27–30 nov</p>
                <h2 className={`${s.d2} mt-4 text-white`}>
                  Empieza diciembre
                  <br />
                  <span className={`${s.serif} text-[#E6A385]`}>por dentro.</span>
                </h2>
                <div className="mt-8">
                  <BlackFridayCountdown variant="tiles" tone="dark" />
                </div>
              </div>
              <div className="lg:text-right">
                <div className="flex items-end gap-4 lg:justify-end">
                  <span className={`${s.strike} pb-3 text-[20px] text-white/60`}>{OFFER.originalPrice} €</span>
                  <span className={`${s.num} text-[84px] sm:text-[104px] text-white`}>
                    {OFFER.salePrice}
                    <span className="text-[0.5em] align-top ml-1">€</span>
                  </span>
                </div>
                <BuyButton tone="light" className="mt-6 w-full lg:w-auto lg:min-w-[320px]" />
                <p className="mt-4 text-[12px] text-white/60">Pago único · Envío España · Garantía 7 días</p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[#E8E5DF]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:px-6 py-8 text-[12px] text-[#5C6560] sm:flex-row">
          <p className="flex gap-4 font-semibold uppercase tracking-[0.18em]">
            <a href={OFFER.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#0E1311]">
              @ainaracoach
            </a>
            <Link href="/" className="hover:text-[#0E1311]">
              ainaracoaching.com
            </Link>
          </p>
          <p>© {new Date().getFullYear()} Ainara Unamunzaga</p>
        </div>
      </footer>

      {/* ============ BARRA STICKY MÓVIL ============ */}
      <div
        aria-hidden={!showSticky}
        className={`md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-[#E8E5DF] bg-white/92 backdrop-blur-md px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="leading-none">
            <span className={`${s.strike} text-[12px] text-[#5C6560]`}>{OFFER.originalPrice} €</span>
            <span className={`${s.num} block mt-1 text-[30px] text-[#0E1311]`}>{OFFER.salePrice} €</span>
          </div>
          <BuyButton label="Comprar pack" mid className="flex-1 max-w-[220px]" />
        </div>
      </div>
    </div>
  );
}
