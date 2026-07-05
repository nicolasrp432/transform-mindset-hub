import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  CheckCircle2,
  HeartHandshake,
  Shield,
  TimerReset,
  Users,
  Star,
  Leaf,
  CalendarHeart,
} from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";

const FEATURED_BENEFITS = [
  "Mayor claridad emocional",
  "Menos sobrepensamiento y autocrítica",
  "Más calma y presencia en el día a día",
  "Mejora de la autoestima y conexión interior",
  "Organización emocional y mental",
  "Desarrollo de hábitos conscientes",
  "Espacio seguro para expresarte sin juicio",
];

const MODULES = [
  {
    title: "Espacios diarios de reflexión",
    description:
      "Preguntas guiadas para detener el ruido mental y escuchar tus verdaderas necesidades.",
  },
  {
    title: "Ejercicios de autoestima",
    description:
      "Prácticas de autocompasión para desarrollar una relación más amable y paciente contigo misma.",
  },
  {
    title: "Gratitud y mindfulness",
    description:
      "Herramientas para enfocarte en el presente y encontrar calma a través de la gratitud diaria.",
  },
  {
    title: "Rituales de mañana y noche",
    description:
      "Seguimiento de hábitos emocionales para reconectar contigo al iniciar y terminar el día.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Esta agenda se ha convertido en mi momento favorito del día. Escribir me ayuda a bajar la ansiedad y a entenderme mejor.",
    name: "Sofía T.",
    role: "Encontró su calma mental",
    stars: 5,
  },
  {
    quote:
      "Dejé de vivir en piloto automático. Los ejercicios son simples pero muy profundos, y me siento mucho más conectada conmigo misma.",
    name: "Carolina M.",
    role: "Mejoró su autoestima",
    stars: 5,
  },
];

const FAQ = [
  {
    question: "¿Para quién es esta agenda?",
    answer:
      "Está diseñada para mujeres que sienten ansiedad, quieren mejorar su autoestima, necesitan volver a escucharse y buscan crear hábitos de amor propio.",
  },
  {
    question: "¿En qué formato recibiré la agenda?",
    answer:
      "Es una agenda digital descargable en PDF (interactivo y también listo para imprimir). Puedes usarla en tu tablet, móvil o en formato físico.",
  },
  {
    question: "¿Cuánto tiempo necesito dedicarle?",
    answer:
      "Con solo unos pocos minutos en tu ritual de mañana o de noche, podrás notar cómo cambia la forma en que te hablas y te sientes.",
  },
  {
    question: "¿El pago es seguro?",
    answer:
      "Sí. Procesamos todos los pagos a través de Stripe, la plataforma de pagos más segura del mundo, con cifrado SSL y cumplimiento PCI.",
  },
];

const INCLUDES = [
  {
    icon: CalendarHeart,
    title: "Agenda Digital Completa",
    text: "Diseño elegante y minimalista para tu uso diario.",
  },
  {
    icon: Leaf,
    title: "Ejercicios de sanación",
    text: "Preguntas guiadas y prácticas de mindfulness.",
  },
  {
    icon: TimerReset,
    title: "Rutinas guiadas",
    text: "Rituales de mañana y noche para centrarte.",
  },
  {
    icon: Shield,
    title: "7 días de garantía",
    text: "Si la agenda no es lo que esperabas, te devolvemos tu inversión.",
  },
];

export const metadata: Metadata = {
  title: "Agenda de Reflexión Diaria | Ainara Coaching",
  description:
    "Una herramienta de acompañamiento emocional para reconectar contigo misma, ordenar tus pensamientos y fortalecer tu autoestima.",
  openGraph: {
    title: "Agenda de Reflexión Diaria | Ainara Coaching",
    description:
      "Dedica unos minutos al día para cambiar la forma en la que te hablas, te sientes y te relacionas contigo misma.",
    type: "website",
  },
};

export default function AgendaReflexionPage() {
  return (
    <main>
      {/* ── Urgency banner ── */}
      <section className="offer-banner bg-primary text-white text-center text-xs md:text-sm font-medium tracking-wide py-2.5 px-4">
        <span className="inline-flex items-center gap-2">
          🌿 Oferta especial: acceso inmediato a la Agenda Digital — <strong>$19 USD</strong>
        </span>
      </section>

      {/* ── Hero ── */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-emerald-100/50 blur-3xl opacity-50" />
        </div>

        <div className="container-editorial relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white text-xs uppercase tracking-[0.25em] text-text-subtle">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                Autocuidado Diario
              </span>

              <div className="space-y-5">
                <h1>Dedicarte unos minutos al día puede cambiar tu vida.</h1>
                <p className="text-text-muted text-lg md:text-xl max-w-2xl">
                  Una herramienta de acompañamiento emocional diseñada para ayudarte a reconectar contigo misma, ordenar tus pensamientos y fortalecer tu autoestima.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CheckoutButton variant="primary" productKey="agenda-reflexion">
                  Descargar ahora — $19
                </CheckoutButton>
                <Link
                  href="#contenido"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium tracking-wide text-text hover:bg-surface transition-colors duration-300"
                >
                  Ver qué incluye
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 text-sm text-text-muted">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-emerald-600" /> PDF Interactivo
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-emerald-600" /> Diseño minimalista
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" /> 7 días de
                  garantía
                </div>
              </div>
            </div>

            {/* Product visual */}
            <div className="bg-white border border-border rounded-[2rem] p-8 shadow-lg">
              <div className="aspect-[3/4] rounded-[1.5rem] bg-gradient-to-br from-[#F5F5DC] to-[#E8E8D8] text-text p-8 flex flex-col justify-between relative overflow-hidden border border-[#D4AF37]/30">
                {/* Subtle decorative botanical/organic shapes */}
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-[#D4AF37]/20 bg-emerald-50/30" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-[#D4AF37]/20 bg-emerald-50/30" />

                <div className="space-y-3 relative z-10">
                  <CalendarHeart className="w-10 h-10 text-[#D4AF37] opacity-90" />
                  <p className="text-xs uppercase tracking-[0.3em] opacity-60 text-text">
                    Ainara Coaching
                  </p>
                  <h2 className="text-3xl leading-tight text-text font-serif">
                    Agenda de Reflexión Diaria
                  </h2>
                </div>
                <p className="text-sm opacity-80 relative z-10 text-text">
                  Calma mental • Autocompasión • Claridad
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
              Identificación
            </p>
            <h2>¿Sientes que vives en piloto automático?</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "Ansiedad y estrés",
                text: "El sobrepensamiento no te permite tener calma mental y te agota diariamente.",
              },
              {
                icon: Users,
                title: "Desconexión interior",
                text: "Hace tiempo que no te escuchas ni atiendes a tus propias necesidades emocionales.",
              },
              {
                icon: HeartHandshake,
                title: "Falta de amor propio",
                text: "Necesitas desarrollar una relación más amable y compasiva contigo misma.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4 border border-emerald-100">
                    <Icon className="w-6 h-6 text-emerald-600" />
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
              Contenido
            </p>
            <h2>Más que una agenda tradicional</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="md:col-span-2 rounded-[2rem] bg-white border border-border p-8 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs uppercase tracking-[0.25em] text-emerald-700">
                    Tu espacio íntimo
                  </span>
                  <h3 className="mt-4">Transformación y bienestar</h3>
                  <p className="mt-3 text-text-muted">
                    Cada página está creada para ayudarte a detener el ruido mental y volver a tu centro mediante ejercicios simples pero profundamente transformadores.
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-text-muted">
                    {FEATURED_BENEFITS.slice(0, 4).map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />{" "}
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
                          <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold flex items-center justify-center shrink-0">
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
              Incluido
            </p>
            <h2>Tu kit de bienestar</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-border shadow-sm text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                    <Icon className="w-7 h-7 text-emerald-600" />
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
                Prueba social
              </p>
              <h2>Mujeres que ya han reconectado</h2>
              <p className="text-text-muted">
                Testimonios de quienes han integrado esta pausa consciente en sus vidas.
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
          <div className="rounded-[2rem] bg-emerald-800 text-white p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

            <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">
                  Oferta
                </p>
                <h2 className="text-white">
                  Empieza a priorizarte hoy
                </h2>
                <p className="text-emerald-50 max-w-2xl">
                  Descarga tu Agenda de Reflexión Diaria y comienza a crear un espacio seguro para tu crecimiento personal.
                </p>
                <div className="flex items-center gap-4 text-sm text-emerald-100/80">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4" /> Pago seguro
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4" /> 7 días de garantía
                  </span>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-200/70">
                  Precio
                </p>
                <p className="text-5xl font-serif mt-2 text-white">$19</p>
                <p className="text-xs text-emerald-100/60 mt-1">USD · Acceso Inmediato</p>
                <div className="mt-6">
                  <CheckoutButton variant="inverse" productKey="agenda-reflexion">
                    Comprar Agenda
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
            <h2>Aclaramos tus dudas</h2>
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
            <Leaf className="w-10 h-10 text-emerald-600 mx-auto mb-6" />
            <h2>Construye tu bienestar desde la calma y la autenticidad.</h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Dedicarte unos minutos al día puede cambiar la forma en la que te hablas, te sientes y te relacionas contigo misma.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CheckoutButton variant="primary" productKey="agenda-reflexion">
                Descargar Agenda — $19
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
