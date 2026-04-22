import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/LayoutShell";
import CustomCursor from "@/components/ui/CustomCursor";

/* ============================================================
   Tipografía: Silencio Arquitectónico
   - Cormorant: Serif editorial para encabezados (h1-h4).
     Transmite autoridad intelectual sin frialdad.
   - Inter: Sans-serif de alta legibilidad para cuerpo.
     Neutra, ultra-limpia, optimizada para pantalla.
   ============================================================ */

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ainara · Claridad Emocional",
    template: "%s | Ainara · Claridad Emocional",
  },
  description:
    "Acompañamiento para personas que buscan claridad emocional, orden mental y transformación personal profunda. Sesiones 1:1, formaciones y herramientas prácticas.",
  keywords: [
    "coaching emocional",
    "claridad emocional",
    "acompañamiento personal",
    "gestión emocional",
    "desarrollo personal",
    "sesiones coaching",
    "formaciones transformación",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Ainara · Claridad Emocional",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <CustomCursor />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
