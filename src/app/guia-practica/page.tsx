import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Brain,
  CheckCircle2,
  Flame,
  HeartHandshake,
  Shield,
  Sparkles,
  Users,
  TimerReset,
  Zap,
  Star,
} from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";

const FEATURED_BENEFITS = [
  "Silenciar la mente crítica sin pelear con ella",
  "Reconectar con tu autoestima desde ejercicios prácticos",
  "Gestionar ansiedad y emociones con un método claro",
  "Aplicar un sistema de seguimiento para sostener tu avance",
];

const MODULES = [
  {
    title: "Inteligencia emocional aplicada",
    description:
      "Aprende a identificar, nombrar y responder a tus emociones con más calma y claridad.",
  },
  {
    title: "Rueda de la vida",
    description:
      "Visualiza dónde estás hoy y qué áreas necesitan más atención para recuperar equilibrio.",
  },
  {
    title: "Mindfulness y respiración",
    description:
      "Pequeñas prácticas para bajar la activación y volver al presente en pocos minutos.",
  },
  {
    title: "Diario de gratitud",
    description:
      "Escritura guiada para reordenar tu enfoque interno y reforzar una narrativa más amable.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "La estructura de la guía me ayudó a entender qué me estaba pasando y a sentirme mucho más en control.",
    name: "María G.",
    role: "Recuperó su autoestima",
    stars: 5,
  },
  {
    quote:
      "Dejé de luchar contra mi ansiedad y empecé a escucharla. Eso cambió por completo mi forma de vivir el día a día.",
    name: "Carlos R.",
    role: "Gestionó mejor su ansiedad",
    stars: 5,
  },
];

const FAQ = [
  {
    question: "¿En qué formato recibiré la guía?",
    answer:
      "Es un producto digital en PDF, listo para leer en móvil, tablet o computadora, con materiales complementarios descargables.",
  },
  {
    question: "¿Necesito experiencia previa?",
    answer:
      "No. Está pensada para empezar desde cero, con un lenguaje simple y pasos concretos para avanzar sin abrumarte.",
  },
  {
    question: "¿Cuánto tiempo necesito al día?",
    answer:
      "Con 15 a 20 minutos diarios puedes integrar el método sin complicarte y empezar a notar cambios sostenibles.",
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
    title: "Guía completa en PDF",
    text: "+80 páginas de contenido práctico y profundo.",
  },
  {
    icon: Zap,
    title: "Ejercicios paso a paso",
    text: "Cada módulo incluye actividades concretas para avanzar.",
  },
  {
    icon: Brain,
    title: "Audio de meditación",
    text: "Sesión guiada de mindfulness para integrar en tu rutina.",
  },
  {
    icon: Shield,
    title: "7 días de garantía",
    text: "Si no es para ti, te devolvemos el 100% de tu inversión.",
  },
];

export const metadata: Metadata = {
  title: "Guía Práctica de Transformación Integral | Ainara",
  description:
    "Silencia tu mente crítica, gestiona la ansiedad y reconecta con tu autoestima en menos de 21 días. Guía práctica con ejercicios, mindfulness y seguimiento.",
  openGraph: {
    title: "Guía Práctica de Transformación Integral | Ainara",
    description:
      "Un método claro para reducir ansiedad, ordenar emociones y reconectar con tu poder interior.",
    type: "website",
  },
};

export default function GuiaPracticaPage() {
  return (
    <main>
      {/* ── Urgency banner ── */}
      <section className="offer-banner bg-primary text-white text-center text-xs md:text-sm font-medium tracking-wide py-2.5 px-4">
        <span className="inline-flex items-center gap-2">
          🔥 Oferta limitada: acceso inmediato a la Guía Práctica — <strong>$27 USD</strong>
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
                Método probado
              </span>

              <div className="space-y-5">
                <h1>Silencia tu mente crítica y vuelve a creer en ti.</h1>
                <p className="text-text-muted text-lg md:text-xl max-w-2xl">
                  Una guía práctica para reducir ansiedad, ordenar tus emociones
                  y reconectar con tu poder interior en menos de 21 días.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CheckoutButton variant="primary">
                  Descargar ahora — $27
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
                  <BadgeCheck className="w-4 h-4 text-accent" /> Acceso
                  inmediato
                </div>
                <div className="flex items-center gap-2">
                  <TimerReset className="w-4 h-4 text-accent" /> Paso a paso
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-accent" /> 7 días de
                  garantía
                </div>
              </div>
            </div>

            {/* Product visual */}
            <div className="bg-white border border-border rounded-[2rem] p-8 shadow-lg">
              <div className="aspect-[3/4] rounded-[1.5rem] bg-gradient-to-br from-primary to-accent text-white p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Subtle decorative ring */}
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-white/10" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-white/10" />

                <div className="space-y-3 relative z-10">
                  <BookOpenText className="w-10 h-10 opacity-90" />
                  <p className="text-xs uppercase tracking-[0.3em] opacity-80">
                    Guía Práctica
                  </p>
                  <h2 className="text-3xl leading-tight text-white">
                    Transformación Integral
                  </h2>
                </div>
                <p className="text-sm opacity-90 relative z-10">
                  Autoestima • Ansiedad • Inteligencia emocional
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
            <h2>¿Te suena familiar alguna de estas situaciones?</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Flame,
                title: "Crítico interno agresivo",
                text: "Te hablas con dureza y te exiges más de lo que darías a cualquier persona que amas.",
              },
              {
                icon: Brain,
                title: "Ansiedad constante",
                text: "Te cuesta apagar la mente y sientes que todo se acumula al mismo tiempo.",
              },
              {
                icon: Users,
                title: "Desconexión contigo",
                text: "Has dejado tus necesidades en segundo plano para cumplir y sostener a los demás.",
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
              Contenido
            </p>
            <h2>Lo que descubrirás dentro</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="md:col-span-2 rounded-[2rem] bg-white border border-border p-8 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/40 text-xs uppercase tracking-[0.25em] text-text-subtle">
                    Módulo central
                  </span>
                  <h3 className="mt-4">Inteligencia emocional aplicada</h3>
                  <p className="mt-3 text-text-muted">
                    Aprende a identificar, validar y responder mejor a lo que
                    sientes para dejar de reaccionar desde el caos.
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
              Incluido
            </p>
            <h2>Todo lo que recibes</h2>
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
                Prueba social
              </p>
              <h2>Historias reales de transformación</h2>
              <p className="text-text-muted">
                Personas como tú que decidieron dar el paso y hoy viven con más
                calma y claridad.
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
                  Empieza tu transformación hoy
                </h2>
                <p className="text-white/80 max-w-2xl">
                  Todo lo que necesitas para sanar, en un solo lugar. Accede
                  ahora a la guía y comienza tu proceso con una estructura
                  clara.
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
                <p className="text-5xl font-serif mt-2 text-white">$27</p>
                <p className="text-xs text-white/60 mt-1">USD · Pago único</p>
                <div className="mt-6">
                  <CheckoutButton variant="inverse">
                    Comprar ahora
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
            <h2>Tu transformación comienza con una decisión.</h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Si quieres salir del ruido mental y volver a sentirte en control,
              esta guía es el punto de partida.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CheckoutButton variant="primary">
                Acceder a la guía — $27
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
