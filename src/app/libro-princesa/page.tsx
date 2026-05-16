import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  CheckCircle2,
  HeartHandshake,
  Shield,
  Sparkles,
  Star,
  Crown,
} from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";

const FEATURED_BENEFITS = [
  "Descubre una historia inspiradora sobre empoderamiento femenino",
  "Aprende a sanar las heridas del pasado",
  "Un viaje de autodescubrimiento para todas las edades",
  "Encuentra tu propia 'corona de luz' interior",
];

const MODULES = [
  {
    title: "El Reino de Candermul",
    description:
      "Conoce a la Reina Samira, quien vive atrapada por las expectativas y el peso de su linaje.",
  },
  {
    title: "La llegada del Sabio",
    description:
      "Un misterioso forastero trae consigo un relato ancestral que cambiará la perspectiva del reino.",
  },
  {
    title: "La historia de Sanahira",
    description:
      "El viaje de una joven princesa que huyó de un matrimonio forzado para encontrar su propia voz como 'la Guerrera'.",
  },
  {
    title: "La Corona de Luz",
    description:
      "El descubrimiento de que el verdadero poder no reside en el oro, sino en la libertad de ser uno mismo.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Un cuento precioso que me hizo reflexionar sobre mi propio valor. Se lo he leído a mi hija y ambas lo amamos.",
    name: "Laura M.",
    role: "Encontró su propia voz",
    stars: 5,
  },
  {
    quote:
      "La metáfora de la corona es tan poderosa. Me ayudó a darme cuenta de que mi verdadero valor no está en lo que esperan de mí.",
    name: "Elena S.",
    role: "Conectó con su fuerza interior",
    stars: 5,
  },
];

const FAQ = [
  {
    question: "¿Para qué edades está recomendado?",
    answer:
      "Es una lectura que invita tanto a niños como a adultos. La historia está escrita de manera accesible pero con un mensaje profundo que resuena en cualquier etapa de la vida.",
  },
  {
    question: "¿En qué formato recibiré el libro?",
    answer:
      "Es un producto digital en PDF y ePub, listo para leer en tu móvil, tablet, e-reader o computadora.",
  },
  {
    question: "¿De qué trata la historia?",
    answer:
      "Sigue a la Reina Samira, quien descubre a través de un relato ancestral sobre la Princesa Sanahira que el verdadero poder reside en la libertad de ser uno mismo.",
  },
  {
    question: "¿El pago es seguro?",
    answer:
      "Sí. Procesamos todos los pagos a través de Stripe, la plataforma de pagos más segura del mundo, con cifrado SSL y cumplimiento PCI.",
  },
];

const INCLUDES = [
  {
    icon: BookOpenText,
    title: "Libro digital completo",
    text: "Una historia cautivadora de empoderamiento y sanación.",
  },
  {
    icon: Sparkles,
    title: "Ilustraciones inspiradoras",
    text: "Un hermoso viaje visual que acompaña la narrativa.",
  },
  {
    icon: HeartHandshake,
    title: "Para todas las edades",
    text: "Mensajes profundos adaptados para conectar con niños y adultos.",
  },
  {
    icon: Shield,
    title: "7 días de garantía",
    text: "Si la historia no te conecta, te devolvemos el 100% de tu inversión.",
  },
];

export const metadata: Metadata = {
  title: "La Princesa que se le cayó la Corona | Libro",
  description:
    "Un cuento inspirador sobre el empoderamiento femenino, la sanación de las heridas del pasado y la búsqueda de la autoestima.",
  openGraph: {
    title: "La Princesa que se le cayó la Corona | Libro",
    description:
      "Descubre que el verdadero poder no reside en el oro, sino en la libertad de ser uno mismo.",
    type: "website",
  },
};

export default function LibroPrincesaPage() {
  return (
    <main>
      {/* ── Urgency banner ── */}
      <section className="bg-primary text-white text-center text-xs md:text-sm font-medium tracking-wide py-2.5 px-4">
        <span className="inline-flex items-center gap-2">
          ✨ Oferta especial: descarga inmediata del libro — <strong>$15 USD</strong>
        </span>
      </section>

      {/* ── Hero ── */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-secondary/30 blur-3xl opacity-50" />
        </div>

        <div className="container-editorial relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white text-xs uppercase tracking-[0.25em] text-text-subtle">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Cuento Inspirador
              </span>

              <div className="space-y-5">
                <h1>¿Qué sucede cuando la corona que llevas pesa más que tus propios sueños?</h1>
                <p className="text-text-muted text-lg md:text-xl max-w-2xl">
                  Un cuento inspirador sobre el empoderamiento femenino, la sanación de las heridas del pasado y la búsqueda de la autoestima.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CheckoutButton variant="primary" productKey="libro-princesa">
                  Descargar ahora — $15
                </CheckoutButton>
                <Link
                  href="#contenido"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium tracking-wide text-text hover:bg-surface transition-colors duration-300"
                >
                  Ver de qué trata
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-accent" /> Acceso
                  inmediato
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-accent" /> Para todas las edades
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" /> 7 días de
                  garantía
                </div>
              </div>
            </div>

            {/* Product visual */}
            <div className="bg-white border border-border rounded-[2rem] p-8 shadow-lg">
              <div className="aspect-[3/4] rounded-[1.5rem] bg-gradient-to-br from-indigo-900 to-purple-800 text-white p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Subtle decorative ring */}
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-white/10" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-white/10" />

                <div className="space-y-3 relative z-10">
                  <Crown className="w-10 h-10 text-yellow-400 opacity-90" />
                  <p className="text-xs uppercase tracking-[0.3em] opacity-80 text-yellow-200">
                    Libro Digital
                  </p>
                  <h2 className="text-3xl leading-tight text-white font-serif">
                    La Princesa que se le cayó la Corona
                  </h2>
                </div>
                <p className="text-sm opacity-90 relative z-10 text-purple-200">
                  Encuentra tu propia corona de luz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain points ── */}
      <section className="section bg-surface">
        <div className="container-editorial">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">
              La historia
            </p>
            <h2>Una invitación a reconectar contigo</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Crown,
                title: "El peso de las expectativas",
                text: "Como la Reina Samira, muchas veces vivimos atrapados por lo que los demás esperan de nosotros.",
              },
              {
                icon: Shield,
                title: "La fuerza interior",
                text: "A través de Sanahira, descubre cómo transformar el miedo en fuerza y encontrar tu propia voz.",
              },
              {
                icon: Sparkles,
                title: "El verdadero poder",
                text: "El valor real no reside en los títulos ni en el oro, sino en la libertad de ser verdaderamente uno mismo.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-3">{item.title}</h3>
                  <p className="text-text-muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Content / Modules ── */}
      <section id="contenido" className="section">
        <div className="container-editorial">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">
              Argumento
            </p>
            <h2>Un viaje a través de Candermul</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="md:col-span-2 rounded-[2rem] bg-white border border-border p-8 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/40 text-xs uppercase tracking-[0.25em] text-text-subtle">
                    La esencia del libro
                  </span>
                  <h3 className="mt-4">Empoderamiento y sanación</h3>
                  <p className="mt-3 text-text-muted">
                    Sumérgete en un relato mágico que actúa como espejo para el alma. Un cuento diseñado para despertar la guerrera interior que todos llevamos dentro.
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-text-muted">
                    {FEATURED_BENEFITS.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />{" "}
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] bg-surface p-6 border border-border">
                  <div className="space-y-4">
                    {MODULES.map((module, i) => (
                      <div
                        key={module.title}
                        className="pb-4 border-b border-border last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          <h4 className="text-lg">{module.title}</h4>
                        </div>
                        <p className="text-sm text-text-muted mt-2 pl-10">
                          {module.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="section bg-surface">
        <div className="container-editorial">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-text-subtle mb-4">
              Tu Compra
            </p>
            <h2>¿Qué te llevas?</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDES.map((item) => {
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

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="container-editorial">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-text-subtle">
                Reseñas
              </p>
              <h2>Lo que dicen los lectores</h2>
              <p className="text-text-muted">
                Niños y adultos por igual han encontrado en esta historia un mensaje transformador.
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
                    <span className="text-sm text-text-subtle">
                      {item.role}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section className="section">
        <div className="container-editorial">
          <div className="rounded-[2rem] bg-primary text-white p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

            <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                  Oferta
                </p>
                <h2 className="text-white">
                  Descubre tu propia corona hoy
                </h2>
                <p className="text-white/80 max-w-2xl">
                  Lleva a casa esta historia mágica y comienza tu viaje hacia el autodescubrimiento y la sanación.
                </p>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4" /> Pago seguro con Stripe
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4" /> 7 días de garantía
                  </span>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                  Precio
                </p>
                <p className="text-5xl font-serif mt-2 text-white">$15</p>
                <p className="text-xs text-white/60 mt-1">USD · Pago único</p>
                <div className="mt-6">
                  <CheckoutButton variant="inverse" productKey="libro-princesa">
                    Adquirir el libro
                  </CheckoutButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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

      {/* ── Final CTA ── */}
      <section className="section">
        <div className="container-editorial">
          <div className="rounded-[2rem] border border-border bg-white p-8 md:p-12 text-center">
            <Sparkles className="w-10 h-10 text-accent mx-auto mb-6" />
            <h2>El verdadero poder no reside en el oro.</h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Sino en la libertad de ser uno mismo. Acompaña a la Princesa Sanahira en su viaje de empoderamiento.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CheckoutButton variant="primary" productKey="libro-princesa">
                Comprar libro digital — $15
              </CheckoutButton>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium text-text hover:bg-surface transition-colors duration-300"
              >
                Volver al inicio
              </Link>
            </div>
            <p className="mt-6 text-xs text-text-subtle flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Pago 100% seguro · Stripe · Cifrado SSL
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
