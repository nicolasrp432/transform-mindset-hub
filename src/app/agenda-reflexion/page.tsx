import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  Brain,
  CalendarHeart,
  HeartHandshake,
  Leaf,
  Shield,
  TimerReset,
  Users,
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
  PriceBand,
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

const AGENDA = PRODUCTS.AGENDA_REFLEXION;

const HERO_TRUST: readonly TrustItem[] = [
  { icon: BadgeCheck, label: "PDF Interactivo" },
  { icon: Leaf, label: "Diseño minimalista" },
  { icon: Shield, label: "7 días de garantía" },
];

const PAIN_POINTS: readonly IconItem[] = [
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
];

const FEATURED_BENEFITS = [
  "Mayor claridad emocional",
  "Menos sobrepensamiento y autocrítica",
  "Más calma y presencia en el día a día",
  "Mejora de la autoestima y conexión interior",
];

const MODULES: readonly ModuleItem[] = [
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

const INCLUDES: readonly IconItem[] = [
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

const TESTIMONIALS: readonly Testimonial[] = [
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

const FAQ: readonly FaqItem[] = [
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

const secondaryLink =
  "inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium tracking-wide text-text hover:bg-surface transition-colors duration-300";

export default function AgendaReflexionPage() {
  return (
    <main data-accent="verde" className="has-sticky-cta">
      <OfferBanner>
        🌿 Oferta especial: acceso inmediato a la Agenda Digital —{" "}
        <strong>{AGENDA.displayPrice}</strong>
      </OfferBanner>

      <LandingSection
        className="relative overflow-hidden"
        containerClassName="relative z-10"
      >
        <LandingHero
          badge="Autocuidado Diario"
          title="Dedicarte unos minutos al día puede cambiar tu vida."
          lead="Una herramienta de acompañamiento emocional diseñada para ayudarte a reconectar contigo misma, ordenar tus pensamientos y fortalecer tu autoestima."
          trust={HERO_TRUST}
          actions={
            <>
              <CheckoutButton productKey={AGENDA.key}>
                Descargar ahora — {AGENDA.displayPrice}
              </CheckoutButton>
              <Link href="#contenido" className={secondaryLink}>
                Ver qué incluye
              </Link>
            </>
          }
          visual={
            <div className="aspect-[3/4] rounded-[1.5rem] bg-gradient-to-br from-[#F5F5DC] to-[#E8E8D8] text-text p-8 flex flex-col justify-between relative overflow-hidden border border-mark/30">
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-mark/20 bg-mark-soft/40"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-mark/20 bg-mark-soft/40"
                aria-hidden="true"
              />
              <div className="space-y-3 relative z-10">
                <CalendarHeart
                  className="w-10 h-10 text-mark opacity-90"
                  aria-hidden="true"
                />
                <p className="text-xs uppercase tracking-[0.3em] opacity-60">
                  Ainara Coaching
                </p>
                <p className="text-3xl leading-tight font-serif">
                  Agenda de Reflexión Diaria
                </p>
              </div>
              <p className="text-sm opacity-80 relative z-10">
                Calma mental • Autocompasión • Claridad
              </p>
            </div>
          }
        />
      </LandingSection>

      <LandingSection tone="surface">
        <SectionHeading
          eyebrow="Identificación"
          title="¿Sientes que vives en piloto automático?"
        />
        <PainPointGrid items={PAIN_POINTS} />
      </LandingSection>

      <LandingSection id="contenido">
        <SectionHeading eyebrow="Contenido" title="Más que una agenda tradicional" />
        <ModulesSplitCard
          badge="Tu espacio íntimo"
          title="Transformación y bienestar"
          description="Cada página está creada para ayudarte a detener el ruido mental y volver a tu centro mediante ejercicios simples pero profundamente transformadores."
          benefits={FEATURED_BENEFITS}
          modules={MODULES}
        />
      </LandingSection>

      <LandingSection tone="surface">
        <SectionHeading eyebrow="Incluido" title="Tu kit de bienestar" />
        <FeatureGrid items={INCLUDES} />
      </LandingSection>

      <LandingSection>
        <TestimonialSplit
          eyebrow="Prueba social"
          title="Mujeres que ya han reconectado"
          description="Testimonios de quienes han integrado esta pausa consciente en sus vidas."
          items={TESTIMONIALS}
        />
      </LandingSection>

      <LandingSection>
        <PriceBand
          productKey={AGENDA.key}
          eyebrow="Oferta"
          title="Empieza a priorizarte hoy"
          description="Descarga tu Agenda de Reflexión Diaria y comienza a crear un espacio seguro para tu crecimiento personal."
          badges={[
            { icon: Shield, label: "Pago seguro" },
            { icon: HeartHandshake, label: "7 días de garantía" },
          ]}
          priceNote="Acceso inmediato"
          ctaLabel="Comprar Agenda"
        />
      </LandingSection>

      <LandingSection tone="surface">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Aclaramos tus dudas"
        />
        <FaqAccordion items={FAQ} />
      </LandingSection>

      <LandingSection>
        <FinalCtaCard
          icon={Leaf}
          title="Construye tu bienestar desde la calma y la autenticidad."
          description="Dedicarte unos minutos al día puede cambiar la forma en la que te hablas, te sientes y te relacionas contigo misma."
          actions={
            <>
              <CheckoutButton productKey={AGENDA.key}>
                Descargar Agenda — {AGENDA.displayPrice}
              </CheckoutButton>
              <Link href="/" className={secondaryLink}>
                Volver al inicio
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

      <StickyMobileCta productKey={AGENDA.key} label="Comprar" />
    </main>
  );
}
