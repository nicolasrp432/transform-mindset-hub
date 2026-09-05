import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BookOpenText,
  Crown,
  HeartHandshake,
  Shield,
  Sparkles,
  Truck,
} from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";
import {
  FaqAccordion,
  FeatureGrid,
  FinalCtaCard,
  LandingHero,
  LandingSection,
  OfferBanner,
  PriceBand,
  SectionHeading,
  StickyMobileCta,
  TestimonialSplit,
  type FaqItem,
  type IconItem,
  type Testimonial,
  type TrustItem,
} from "@/components/landing";
import { getProduct, PRODUCTS, type ProductKey } from "@/lib/products";

const BOOK_IMAGE = encodeURI("/OBTÉN LA GUÍA AHORA EN AINARACOACH.COMGUÍA.png");

const BLANDA = PRODUCTS.LIBRO_PRINCESA_TAPA_BLANDA;
const DURA = PRODUCTS.LIBRO_PRINCESA_TAPA_DURA;

/** Solo lo que no vive en PRODUCTS: título y precio salen del catálogo. */
const EDITIONS: readonly { productKey: ProductKey; description: string }[] = [
  {
    productKey: BLANDA.key,
    description: "Edición estándar para lectura cómoda y ligera.",
  },
  {
    productKey: DURA.key,
    description: "Edición premium para conservar y regalar.",
  },
];

const HERO_TRUST: readonly TrustItem[] = [
  { icon: BadgeCheck, label: "Tapa blanda" },
  { icon: HeartHandshake, label: "Tapa dura" },
  { icon: Shield, label: "Stripe seguro" },
];

const FEATURED_BENEFITS = [
  "Historia inspiradora sobre empoderamiento y sanación",
  "Dos ediciones físicas disponibles en esta landing",
  "Pago seguro con Stripe desde la página de venta",
  "Envío del mensaje y confirmación tras la compra",
];

const INCLUDES: readonly IconItem[] = [
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
];

const TESTIMONIALS: readonly Testimonial[] = [
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
];

const FAQ: readonly FaqItem[] = [
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
];

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

const secondaryLink =
  "inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium text-text hover:bg-surface transition-colors duration-300";

export default function LibroPrincesaPage() {
  return (
    <main data-accent="stone" className="has-sticky-cta">
      <OfferBanner>
        <Shield className="w-3.5 h-3.5" aria-hidden="true" />
        Libro físico disponible — pago seguro con Stripe
      </OfferBanner>

      <LandingSection
        className="relative overflow-hidden"
        containerClassName="relative z-10"
      >
        <LandingHero
          ratio="balanced"
          badge="Edición física"
          title="La Princesa que perdió su corona"
          lead="Un cuento inspirador sobre el empoderamiento femenino, la sanación de las heridas del pasado y la búsqueda de la autoestima."
          trust={HERO_TRUST}
          actions={
            <>
              <CheckoutButton productKey={BLANDA.key}>
                Comprar tapa blanda — {BLANDA.displayPrice}
              </CheckoutButton>
              <CheckoutButton variant="inverse" productKey={DURA.key}>
                Comprar tapa dura — {DURA.displayPrice}
              </CheckoutButton>
            </>
          }
          visual={
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#d2ad57] p-4 md:p-6 shadow-sm">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.24),transparent_45%)]"
                aria-hidden="true"
              />
              <div className="relative animate-book-float origin-center">
                <Image
                  width={1200}
                  height={1600}
                  priority
                  className="w-full h-auto rounded-[1.25rem] shadow-2xl shadow-black/20"
                  alt="Portada de La Princesa que perdió su corona"
                  src={BOOK_IMAGE}
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full bg-black/55 px-4 py-2 text-white backdrop-blur-sm">
                <span className="text-sm font-medium">
                  La Princesa que perdió su corona
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Amazon
                </span>
              </div>
            </div>
          }
        >
          <p className="text-sm text-text-muted">
            Precios de referencia según Amazon. El cobro final en esta página se
            procesa con Stripe.
          </p>

          <ul className="grid gap-3 text-sm text-text-muted">
            {FEATURED_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <BadgeCheck
                  className="w-4 h-4 text-mark shrink-0"
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </LandingHero>
      </LandingSection>

      <LandingSection tone="surface">
        <SectionHeading
          eyebrow="Versiones disponibles"
          title="Elige tu edición física"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {EDITIONS.map((edition) => {
            const product = getProduct(edition.productKey);
            return (
              <article
                key={edition.productKey}
                className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-text-subtle">
                      Amazon
                    </p>
                    <h3 className="mt-2">{product.shortName}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.25em] text-text-subtle">
                      Precio
                    </p>
                    <p className="text-2xl md:text-3xl font-semibold text-text">
                      {product.displayPrice}
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
                  <CheckoutButton productKey={edition.productKey}>
                    Pagar {product.displayPrice}
                  </CheckoutButton>
                </div>
              </article>
            );
          })}
        </div>
      </LandingSection>

      <LandingSection>
        <SectionHeading
          eyebrow="Lo que incluye"
          title="Todo lo que necesitas saber"
        />
        <FeatureGrid items={INCLUDES} />
      </LandingSection>

      <LandingSection tone="surface">
        <TestimonialSplit
          eyebrow="Reseñas"
          title="Lo que dicen los lectores"
          description="Una historia para quienes quieren reconectar con su valor y su voz interior."
          items={TESTIMONIALS}
        />
      </LandingSection>

      <LandingSection>
        <PriceBand
          productKey={BLANDA.key}
          eyebrow="Compra segura"
          title="Elige tu edición y paga con Stripe"
          description="Los precios visibles son los publicados en Amazon para cada formato. Aquí haces el pago final de manera segura."
          badges={[
            { icon: Shield, label: "Stripe" },
            { icon: HeartHandshake, label: "Edición física" },
          ]}
          priceLabel="Desde"
          priceNote="Tapa blanda · pago único"
          ctaLabel="Comprar ahora"
        />
      </LandingSection>

      <LandingSection tone="surface">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Resuelve tus dudas" />
        <FaqAccordion items={FAQ} />
      </LandingSection>

      <LandingSection>
        <FinalCtaCard
          icon={Sparkles}
          title="La corona verdadera se elige en voz propia."
          description="Lleva contigo esta historia en el formato que prefieras y completa tu compra con Stripe."
          actions={
            <>
              <CheckoutButton productKey={BLANDA.key}>
                Tapa blanda — {BLANDA.displayPrice}
              </CheckoutButton>
              <CheckoutButton variant="inverse" productKey={DURA.key}>
                Tapa dura — {DURA.displayPrice}
              </CheckoutButton>
            </>
          }
          footnote={
            <>
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              Precios Amazon · pago seguro con Stripe
            </>
          }
        >
          <div className="mt-8">
            <Link href="/" className={secondaryLink}>
              Volver al inicio
            </Link>
          </div>
        </FinalCtaCard>
      </LandingSection>

      <StickyMobileCta productKey={BLANDA.key} label="Comprar" />
    </main>
  );
}
