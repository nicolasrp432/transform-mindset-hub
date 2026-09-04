import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  HeartHandshake,
  Infinity as InfinityIcon,
  Shield,
  Sparkles,
} from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";
import {
  CountdownToMonthEnd,
  FaqAccordion,
  FeatureGrid,
  FinalCtaCard,
  GuaranteeBlock,
  LandingHero,
  LandingSection,
  OfferBanner,
  PainPointGrid,
  PriceAnchor,
  SectionHeading,
  StickyMobileCta,
  TestimonialSplit,
  type TrustItem,
} from "@/components/landing";
import LessonsAccordion from "@/components/emulsion/LessonsAccordion";
import { FAQ, PAIN_POINTS, RESOURCES, TESTIMONIALS } from "@/components/emulsion/data";
import { PRODUCTS } from "@/lib/products";

const PRODUCT = PRODUCTS.EMULSION_ENERGETICA;

const HERO_TRUST: readonly TrustItem[] = [
  { icon: BadgeCheck, label: "Acceso inmediato" },
  { icon: InfinityIcon, label: "Acceso de por vida" },
  { icon: HeartHandshake, label: "7 días de garantía" },
];

const POSITIONING = [
  "Metodología Ainara para distinguir mente consciente e inconsciente.",
  "Herramientas tácticas para subir tu frecuencia emocional de forma gradual.",
  "Integración de neurociencia, psicología y logoterapia.",
];

export const metadata: Metadata = {
  title: "Emulsión Energética | Formación de regulación emocional",
  description:
    "Ocho leyes universales convertidas en un método de regulación emocional y responsabilidad consciente. Formación terapéutica, estructurada y sin promesas milagro.",
  openGraph: {
    title: "Emulsión Energética | Formación de regulación emocional",
    description:
      "Deja de luchar contra tus emociones y aprende la arquitectura mental para crear una vida alineada.",
    type: "website",
  },
};

const secondaryLink =
  "inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium tracking-wide text-text hover:bg-surface transition-colors duration-300";

export default function EmulsionEnergeticaPage() {
  return (
    <main data-accent="stone" className="has-sticky-cta">
      <OfferBanner>
        <CountdownToMonthEnd label="Precio de lanzamiento · termina en" />
      </OfferBanner>

      <LandingSection
        className="relative overflow-hidden"
        containerClassName="relative z-10"
      >
        <LandingHero
          badge="Formación premium"
          title="Deja de luchar contra tus emociones y aprende la arquitectura mental para crear una vida alineada."
          lead="Una formación terapéutica, estructurada y profunda, libre de espiritualidad exagerada o promesas milagro. Psicología, neurociencia y regulación del sistema nervioso en un solo método."
          trust={HERO_TRUST}
          actions={
            <>
              <CheckoutButton productKey={PRODUCT.key}>
                Acceder a la formación — {PRODUCT.displayPrice}
              </CheckoutButton>
              <Link href="#lecciones" className={secondaryLink}>
                Ver las 8 lecciones
              </Link>
            </>
          }
          visual={
            <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5]">
              <Image
                src="/ainara-image.jpg"
                alt="Ainara, autora de la formación Emulsión Energética"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 32rem"
                className="object-cover"
              />
            </div>
          }
        />
      </LandingSection>

      <LandingSection tone="surface">
        <SectionHeading
          eyebrow="Identificación"
          title="¿Te reconoces en alguna de estas situaciones?"
        />
        <PainPointGrid items={PAIN_POINTS} />
      </LandingSection>

      <LandingSection>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <SectionHeading
              eyebrow="Posicionamiento"
              title="Arquitectura emocional premium, sin atajos."
              description="Esta formación está diseñada para mujeres que desean estructura, claridad y responsabilidad radical. Aquí no hay positivismo tóxico: hay método, regulación y un mapa emocional preciso."
              className="max-w-3xl mb-8"
            />
            <ul className="space-y-3">
              {POSITIONING.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-1 text-mark shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-surface p-8 border border-border shadow-sm space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-mark-on-soft font-semibold">
              Quién soy
            </p>
            <p className="text-lg text-text">
              Soy Ainara, mentora en autoconfianza y regulación emocional.
            </p>
            <p className="text-text-muted leading-relaxed">
              Pasé años estudiando por qué entender un patrón no basta para
              cambiarlo. Esta formación es el mapa que me habría ahorrado ese
              camino: ocho leyes traducidas a método, con materiales para
              sostener la transformación cuando llega el bajón.
            </p>
          </div>
        </div>
      </LandingSection>

      <LandingSection id="lecciones" tone="surface">
        <SectionHeading
          eyebrow="Programa"
          title="Estructura de lecciones"
          description="Ocho leyes universales convertidas en un sistema de regulación emocional y responsabilidad consciente."
        />
        <LessonsAccordion />
      </LandingSection>

      <LandingSection>
        <SectionHeading
          eyebrow="Materiales"
          title="Ecosistema de recursos tácticos"
          description="Seis materiales descargables diseñados para sostener tu avance de forma concreta, no para acumular PDF."
        />
        <FeatureGrid items={RESOURCES} columns={3} />
      </LandingSection>

      <LandingSection tone="surface">
        <TestimonialSplit
          eyebrow="Prueba social"
          title="Lo que cuentan quienes ya la han hecho"
          description="Mujeres que buscaban estructura y dejaron de depender de la motivación puntual."
          items={TESTIMONIALS}
        />
      </LandingSection>

      <LandingSection id="cta">
        <SectionHeading
          eyebrow="Tu acceso"
          title="Accede hoy a Emulsión Energética"
          description="Acceso inmediato y de por vida a la formación, a los seis materiales descargables y a las actualizaciones futuras."
          align="center"
        />
        <div className="max-w-2xl mx-auto">
          <PriceAnchor
            productKey={PRODUCT.key}
            eyebrow="Lo que incluye y lo que vale"
            ctaLabel={`Sí, quiero transformar mi energía — ${PRODUCT.displayPrice}`}
            note="IVA incluido · pago único · acceso de por vida"
          />
          <p className="mt-6 text-center text-sm text-text-muted flex items-center justify-center gap-1.5">
            <Shield className="w-4 h-4" aria-hidden="true" />
            Pago seguro con Stripe · Cifrado SSL
          </p>
        </div>
      </LandingSection>

      <LandingSection tone="surface">
        <GuaranteeBlock signature="Ainara" signatureRole="Mentora en autoconfianza y regulación emocional">
          Si durante los primeros 7 días sientes que esta formación no es para
          ti, te devolvemos tu inversión completa. Sin preguntas, sin juicios.
        </GuaranteeBlock>
      </LandingSection>

      <LandingSection>
        <SectionHeading eyebrow="Preguntas frecuentes" title="Resuelve tus dudas" />
        <FaqAccordion items={FAQ} />
      </LandingSection>

      <LandingSection>
        <FinalCtaCard
          icon={Sparkles}
          title="Tus emociones dejan de mandar cuando entiendes cómo funcionan."
          description="Ocho lecciones y seis materiales para pasar de reaccionar a decidir, con acceso de por vida."
          actions={
            <>
              <CheckoutButton productKey={PRODUCT.key}>
                Acceder ahora — {PRODUCT.displayPrice}
              </CheckoutButton>
              <Link href="#lecciones" className={secondaryLink}>
                Ver el programa
              </Link>
            </>
          }
          footnote={
            <>
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              Pago 100% seguro · Stripe · 7 días de garantía
            </>
          }
        />
      </LandingSection>

      {/* El puente a 1:1 va después del CTA de compra: es continuidad para quien
          ya ha decidido, no una salida antes de decidir. */}
      <LandingSection tone="surface">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h2>¿Prefieres acompañamiento uno a uno?</h2>
            <p className="mt-4 text-text-muted">
              Si ya has identificado tus bloqueos y quieres trabajarlos con
              acompañamiento directo, puedes reservar una sesión privada.
            </p>
          </div>
          <div className="lg:text-right">
            <Link href="/sesiones" className={secondaryLink}>
              Reservar sesión 1:1
            </Link>
          </div>
        </div>
      </LandingSection>

      <StickyMobileCta productKey={PRODUCT.key} label="Acceder" />
    </main>
  );
}
