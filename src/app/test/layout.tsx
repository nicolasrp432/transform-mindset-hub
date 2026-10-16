import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "¿En qué punto estás? · Ainara Unamunzaga",
  description:
    "Diez preguntas rápidas. Dos minutos. Descubre tu mapa emocional y qué área de tu vida está tirando de las demás: dinero, amor, cuerpo, trabajo y contigo. Por Ainara Unamunzaga.",
  openGraph: {
    title: "¿En qué punto estás? · Ainara Unamunzaga",
    description:
      "Diez preguntas, dos minutos. Descubre tu mapa y qué parte de tu vida está tirando de las demás.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿En qué punto estás? · Ainara Unamunzaga",
    description:
      "Diez preguntas, dos minutos. Descubre tu mapa y qué parte de tu vida está tirando de las demás.",
  },
};

export default function TestLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
