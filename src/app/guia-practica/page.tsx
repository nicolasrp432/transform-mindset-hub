import type { Metadata } from "next";
import Image from "next/image";
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
} from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";
import {
  FaqAccordion,
  FeatureGrid,
  FinalCtaCard,
  LandingHero,
  LandingSection,
  ModulesSplitCard,
  OfferBanner,
  PainPointGrid,
  SectionHeading,
  StickyMobileCta,
  TestimonialSplit,
  type FaqItem,
  type IconItem,
  type ModuleItem,
  type Testimonial,
  type TrustItem,
} from "@/components/landing";
import { PRODUCTS } from "@/lib/products";

const PDF = PRODUCTS.GUIA_PRACTICA;
const IMPRESA = PRODUCTS.GUIA_PRACTICA_IMPRESA;

const HERO_TRUST: readonly TrustItem[] = [
  { icon: BadgeCheck, label: "Acceso inmediato" },
  { icon: TimerReset, label: "Paso a paso" },
  { icon: HeartHandshake, label: "7 días de garantía" },
];

const PAIN_POINTS: readonly IconItem[] = [
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
];

const FEATURED_BENEFITS = [
  "Silenciar la mente crítica sin pelear con ella",
  "Reconectar con tu autoestima desde ejercicios prácticos",
  "Gestionar ansiedad y emociones con un método claro",
  "Aplicar un sistema de seguimiento para sostener tu avance",
];

const MODULES: readonly ModuleItem[] = [
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

const INCLUDES: readonly IconItem[] = [
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

const TESTIMONIALS: readonly Testimonial[] = [
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

const FAQ: readonly FaqItem[] = [
  {
    question: "¿En qué formatos puedo conseguir la guía?",
    answer: `En PDF digital por ${PDF.displayPrice} (acceso inmediato para leer en móvil, tablet o computadora) o en edición impresa: ${IMPRESA.compareAtDisplayPrice} en Amazon o ${IMPRESA.displayPrice} pagando directamente por Stripe en esta página.`,
  },
  {
    question: "¿Por qué es más barata por Stripe que en Amazon?",
    answer: `Al pagar la edición impresa directamente por Stripe te aplicamos un descuento (${IMPRESA.displayPrice} en lugar de los ${IMPRESA.compareAtDisplayPrice} de Amazon), porque evitamos las comisiones del marketplace.`,
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

const secondaryLink =
  "inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium tracking-wide text-text hover:bg-surface transition-colors duration-300";

export default function GuiaPracticaPage() {
  return (
    <main data-accent="stone" className="has-sticky-cta">
      <OfferBanner>
        🔥 Guía Práctica desde <strong>{PDF.displayPrice}</strong> — PDF digital
        o edición impresa
      </OfferBanner>

      <LandingSection
        className="relative overflow-hidden"
        containerClassName="relative z-10"
      >
        <LandingHero
          badge="Método probado"
          title="Silencia tu mente crítica y vuelve a creer en ti."
          lead="Una guía práctica para reducir ansiedad, ordenar tus emociones y reconectar con tu poder interior en menos de 21 días."
          trust={HERO_TRUST}
          actions={
            <>
              <CheckoutButton productKey={PDF.key}>
                Descargar PDF — {PDF.displayPrice}
              </CheckoutButton>
              <Link href="#precios" className={secondaryLink}>
                Ver opciones (PDF / impresa)
              </Link>
            </>
          }
          visual={
            <div className="relative overflow-hidden rounded-[1.5rem] bg-surface p-4 md:p-6 shadow-sm">
              <div className="relative animate-book-float origin-center">
                <Image
                  width={1200}
                  height={1600}
                  priority
                  className="w-full h-auto rounded-[1.25rem] shadow-2xl shadow-black/20"
                  alt="Guía Práctica de Transformación Integral"
                  src="/guia-practica.png"
                />
              </div>
            </div>
          }
        />
      </LandingSection>

      <LandingSection tone="surface">
        <SectionHeading
          eyebrow="Identificación"
          title="¿Te suena familiar alguna de estas situaciones?"
        />
        <PainPointGrid items={PAIN_POINTS} />
      </LandingSection>

      <LandingSection id="contenido">
        <SectionHeading eyebrow="Contenido" title="Lo que descubrirás dentro" />
        <ModulesSplitCard
          badge="Módulo central"
          title="Inteligencia emocional aplicada"
          description="Aprende a identificar, validar y responder mejor a lo que sientes para dejar de reaccionar desde el caos."
          benefits={FEATURED_BENEFITS}
          modules={MODULES}
        />
      </LandingSection>

      <LandingSection tone="surface">
        <SectionHeading eyebrow="Incluido" title="Todo lo que recibes" />
        <FeatureGrid items={INCLUDES} />
      </LandingSection>

      <LandingSection>
        <TestimonialSplit
          eyebrow="Prueba social"
          title="Historias reales de transformación"
          description="Personas como tú que decidieron dar el paso y hoy viven con más calma y claridad."
          items={TESTIMONIALS}
        />
      </LandingSection>

      {/* Precios: es la sección con la oferta concreta de esta página, así que
          se mantiene explícita en vez de esconderse tras un componente. */}
      <LandingSection id="precios" tone="surface">
        <SectionHeading
          eyebrow="Precios"
          title="Elige cómo quieres tu guía"
          description="El mismo contenido en dos formatos. Paga de forma segura con Stripe o consíguela impresa en Amazon."
        />

        <div className="grid gap-6 lg:grid-cols-2 items-stretch">
          <article className="relative flex flex-col rounded-[2rem] bg-primary text-white p-8 md:p-10 shadow-lg overflow-hidden">
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3"
              aria-hidden="true"
            />
            <span className="relative z-10 inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/15 text-xs uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" /> Más popular
            </span>
            <div className="relative z-10 mt-6">
              <h3 className="text-white">{PDF.shortName}</h3>
              <p className="mt-2 text-white/80">
                Acceso inmediato · descarga al instante tras el pago.
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-serif text-white">
                  {PDF.displayPrice}
                </span>
                <span className="text-sm text-white/60">pago único</span>
              </div>
            </div>
            <ul className="relative z-10 mt-6 space-y-3 text-sm text-white/85">
              {[
                "+80 páginas en PDF",
                "Ejercicios y audio de meditación",
                "7 días de garantía",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="relative z-10 mt-8">
              <CheckoutButton variant="inverse" productKey={PDF.key}>
                Descargar PDF — {PDF.displayPrice}
              </CheckoutButton>
            </div>
          </article>

          <article className="flex flex-col rounded-[2rem] bg-white border border-border p-8 md:p-10 shadow-sm">
            <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-secondary/40 text-xs uppercase tracking-[0.25em] text-text-subtle">
              <BookOpenText className="w-3.5 h-3.5" aria-hidden="true" /> Edición
              impresa
            </span>
            <div className="mt-6">
              <h3>Guía impresa en casa</h3>
              <p className="mt-2 text-text-muted">
                El libro físico para leer, subrayar y conservar.
              </p>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-5xl font-serif text-text">
                  {IMPRESA.displayPrice}
                </span>
                <span className="text-lg text-text-subtle line-through">
                  {IMPRESA.compareAtDisplayPrice}
                </span>
              </div>
              <p className="mt-1 text-sm text-mark font-medium">
                Ahorra pagando directamente por Stripe.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <CheckoutButton productKey={IMPRESA.key}>
                Comprar impresa — {IMPRESA.displayPrice}
              </CheckoutButton>
              <a
                href={IMPRESA.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryLink}
              >
                Comprar en Amazon — {IMPRESA.compareAtDisplayPrice}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-mark" aria-hidden="true" /> Pago
            seguro con Stripe
          </span>
          <span className="flex items-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-mark" aria-hidden="true" /> 7
            días de garantía
          </span>
        </div>
      </LandingSection>

      <LandingSection>
        <SectionHeading eyebrow="Preguntas frecuentes" title="Resuelve tus dudas" />
        <FaqAccordion items={FAQ} />
      </LandingSection>

      <LandingSection>
        <FinalCtaCard
          icon={Sparkles}
          title="Tu transformación comienza con una decisión."
          description="Si quieres salir del ruido mental y volver a sentirte en control, esta guía es el punto de partida."
          actions={
            <>
              <CheckoutButton productKey={PDF.key}>
                Descargar PDF — {PDF.displayPrice}
              </CheckoutButton>
              <Link href="#precios" className={secondaryLink}>
                Ver todas las opciones
              </Link>
            </>
          }
          footnote={
            <>
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              Pago 100% seguro · Stripe · Cifrado SSL
            </>
          }
        />
      </LandingSection>

      <StickyMobileCta productKey={PDF.key} label="Comprar" />
    </main>
  );
}
