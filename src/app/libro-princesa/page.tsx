import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  Shield,
  Sparkles,
  Star,
  Crown,
  BookOpenText,
  Truck,
} from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";

const BOOK_IMAGE = encodeURI("/OBTÉN LA GUÍA AHORA EN AINARACOACH.COMGUÍA.png");

const EDITIONS = [
  {
    title: "Tapa blanda",
    amazonPrice: "22,37 €",
    checkoutPrice: "22,37 €",
    productKey: "libro-princesa-tapa-blanda",
    description: "Edición estándar para lectura cómoda y ligera.",
  },
  {
    title: "Tapa dura",
    amazonPrice: "26,84 €",
    checkoutPrice: "26,84 €",
    productKey: "libro-princesa-tapa-dura",
    description: "Edición premium para conservar y regalar.",
  },
] as const;

const FEATURED_BENEFITS = [
  "Historia inspiradora sobre empoderamiento y sanación",
  "Dos ediciones físicas disponibles en esta landing",
  "Pago seguro con Stripe desde la página de venta",
  "Envío del mensaje y confirmación tras la compra",
];

const TESTIMONIALS = [
  {
    quote:
      "Un cuento precioso que me hizo reflexionar sobre mi propio valor. Se lo he leído a mi hija y ambas lo amamos.",
    name: "Laura M.",
    role: "Conectó con la historia",
    stars: 5,
  },
  {
    quote:
      "La metáfora de la corona es tan poderosa. Me ayudó a darme cuenta de que mi verdadero valor no está en lo que esperan de mí.",
    name: "Elena S.",
    role: "Encontró su fuerza interior",
    stars: 5,
  },
] as const;

const FAQ = [
  {
    question: "¿Qué formato puedo comprar aquí?",
    answer:
      "En esta landing tienes disponibles las ediciones físicas en tapa blanda y tapa dura.",
  },
  {
    question: "¿Los precios son los mismos que Amazon?",
    answer:
      "Sí. Los importes mostrados corresponden a los precios publicados en Amazon para cada edición.",
  },
  {
    question: "¿Cómo se procesa el pago?",
    answer:
      "El cobro se realiza de forma segura con Stripe desde esta página de venta.",
  },
  {
    question: "¿Cuándo recibo la confirmación?",
    answer:
      "Después de pagar, recibirás la confirmación por correo con los siguientes pasos.",
  },
] as const;

export const metadata: Metadata = {
  title: "La Princesa que perdió su corona | Libro físico",
  description:
    "Compra la edición física de La Princesa que perdió su corona en tapa blanda o tapa dura con pago seguro por Stripe.",
  openGraph: {
    title: "La Princesa que perdió su corona | Libro físico",
    description:
      "Tapa blanda y tapa dura con precios de referencia según Amazon y cobro seguro por Stripe.",
    type: "website",
  },
};

export default function LibroPrincesaPage() {
  return (
    <main>
      <section className="offer-banner bg-primary text-white text-center text-xs md:text-sm font-medium tracking-wide py-2.5 px-4">
        <span className="inline-flex items-center gap-2">
          <Shield className="w-3.5 h-3.5" />
          Libro físico disponible — pago seguro con Stripe
        </span>
      </section>

      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-secondary/30 blur-3xl opacity-50" />
        </div>

        <div className="container-editorial relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white text-xs uppercase tracking-[0.25em] text-text-subtle">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Edición física
              </span>

              <div className="space-y-5">
                <h1>La Princesa que perdió su corona</h1>
                <p className="text-text-muted text-lg md:text-xl max-w-2xl">
                  Un cuento inspirador sobre el empoderamiento femenino, la sanación de las heridas del pasado y la búsqueda de la autoestima.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CheckoutButton variant="primary" productKey="libro-princesa-tapa-blanda">
                  Comprar tapa blanda — 22,37 €
                </CheckoutButton>
                <CheckoutButton variant="inverse" productKey="libro-princesa-tapa-dura">
                  Comprar tapa dura — 26,84 €
                </CheckoutButton>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-accent" /> Tapa blanda
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-accent" /> Tapa dura
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" /> Stripe seguro
                </div>
              </div>

              <p className="text-sm text-text-muted">
                Precios de referencia según Amazon. El cobro final en esta página se procesa con Stripe.
              </p>

              <div className="grid gap-3 text-sm text-text-muted">
                {FEATURED_BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-accent shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-border rounded-[2rem] p-6 md:p-8 shadow-lg">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#d2ad57] p-4 md:p-6 shadow-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.24),transparent_45%)]" />
                <div className="relative animate-book-float origin-center">
                  <Image
                    width={1200}
                    height={1600}
                    className="w-full h-auto rounded-[1.25rem] shadow-2xl shadow-black/20"
                    alt="Portada de La Princesa que perdió su corona"
                    src={BOOK_IMAGE}
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-black/55 px-4 py-2 text-white backdrop-blur-sm">
                  <span className="text-sm font-medium">La Princesa que perdió su corona</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/70">Amazon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-editorial">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">
              Versiones disponibles
            </p>
            <h2>Elige tu edición física</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {EDITIONS.map((edition) => (
              <article
                key={edition.title}
                className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-text-subtle">
                      Amazon
                    </p>
                    <h3 className="mt-2">{edition.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.25em] text-text-subtle">
                      Precio
                    </p>
                    <p className="text-2xl md:text-3xl font-semibold text-text">
                      {edition.amazonPrice}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-text-muted">{edition.description}</p>

                <div className="mt-6 rounded-2xl bg-surface border border-border p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-text">Pago por Stripe</p>
                    <p className="text-sm text-text-muted">
                      Cobro en la landing con checkout seguro.
                    </p>
                  </div>
                  <CheckoutButton variant="primary" productKey={edition.productKey}>
                    Pagar {edition.checkoutPrice}
                  </CheckoutButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">
              Lo que incluye
            </p>
            <h2>Todo lo que necesitas saber</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpenText,
                title: "Edición física",
                text: "Un libro impreso para leer, conservar o regalar.",
              },
              {
                icon: Crown,
                title: "Dos formatos",
                text: "Tapa blanda y tapa dura según tu preferencia.",
              },
              {
                icon: Truck,
                title: "Compra clara",
                text: "Los precios mostrados corresponden a Amazon.",
              },
              {
                icon: Shield,
                title: "Stripe",
                text: "Pago final seguro desde esta página.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-border shadow-sm text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-editorial">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-text-subtle">
                Reseñas
              </p>
              <h2>Lo que dicen los lectores</h2>
              <p className="text-text-muted">
                Una historia para quienes quieren reconectar con su valor y su voz interior.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((item) => (
                <blockquote
                  key={item.name}
                  className="bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-text-muted italic">&ldquo;{item.quote}&rdquo;</p>
                  <footer className="mt-6">
                    <strong className="block">{item.name}</strong>
                    <span className="text-sm text-text-subtle">{item.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <div className="rounded-[2rem] bg-primary text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

            <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                  Compra segura
                </p>
                <h2 className="text-white">Elige tu edición y paga con Stripe</h2>
                <p className="text-white/80 max-w-2xl">
                  Los precios visibles son los publicados en Amazon para cada formato. Aquí haces el pago final de manera segura.
                </p>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4" /> Stripe
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4" /> Edición física
                  </span>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                  Desde
                </p>
                <p className="text-5xl font-serif mt-2 text-white">22,37 €</p>
                <p className="text-xs text-white/60 mt-1">Tapa blanda · pago único</p>
                <div className="mt-6">
                  <CheckoutButton variant="inverse" productKey="libro-princesa-tapa-blanda">
                    Comprar ahora
                  </CheckoutButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-editorial">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">
              Preguntas frecuentes
            </p>
            <h2>Resuelve tus dudas</h2>
          </div>

          <div className="space-y-4 max-w-3xl">
            {FAQ.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-white border border-border p-5 transition-shadow duration-300 hover:shadow-sm"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-medium">{item.question}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 shrink-0">
                    <ArrowRight className="w-4 h-4 -rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 text-text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <div className="rounded-[2rem] border border-border bg-white p-8 md:p-12 text-center">
            <Sparkles className="w-10 h-10 text-accent mx-auto mb-6" />
            <h2>La corona verdadera se elige en voz propia.</h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Lleva contigo esta historia en el formato que prefieras y completa tu compra con Stripe.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CheckoutButton variant="primary" productKey="libro-princesa-tapa-blanda">
                Tapa blanda — 22,37 €
              </CheckoutButton>
              <CheckoutButton variant="inverse" productKey="libro-princesa-tapa-dura">
                Tapa dura — 26,84 €
              </CheckoutButton>
            </div>
            <p className="mt-6 text-xs text-text-subtle flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Precios Amazon · pago seguro con Stripe
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium text-text hover:bg-surface transition-colors duration-300"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
