import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Instrument_Serif } from "next/font/google";
import BlackFridayLanding from "@/components/black-friday/BlackFridayLanding";

const display = Bricolage_Grotesque({
  variable: "--bf-display",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--bf-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Geist({
  variable: "--bf-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Friday · Pack «Empezar por dentro» (89 €) | Ainara Unamunzaga",
  description:
    "Del 27 al 30 de noviembre: Guía integral de transformación (edición impresa 80 págs., envío a España) + Agenda de reflexión digital + Formación Emulsión Energética en Mitra (8 clases). Antes 159 €, ahora 89 €.",
  openGraph: {
    title: "Black Friday · Pack «Empezar por dentro» — 89 € (antes 159 €)",
    description:
      "Guía integral impresa (80 págs.) + Agenda de reflexión digital + Emulsión Energética (8 clases en Mitra). Solo hasta el lunes 30 a las 23:59.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/images/black-friday-pack.jpg",
        width: 819,
        height: 1024,
        alt: "Pack Empezar por dentro — Oferta Black Friday de Ainara Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Friday · Pack «Empezar por dentro» — 89 €",
    description:
      "Guía integral impresa + Agenda digital + Emulsión Energética en Mitra. Del 27 al 30 de noviembre.",
    images: ["/images/black-friday-pack.jpg"],
  },
};

export default function BlackFridayPage() {
  return (
    <div className={`${display.variable} ${serif.variable} ${sans.variable}`}>
      <BlackFridayLanding />
    </div>
  );
}
