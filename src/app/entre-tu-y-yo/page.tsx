import type { Metadata } from "next";
import { headers } from "next/headers";
import MemoryBookLanding from "@/components/memory-book/MemoryBookLanding";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "localhost:3000";
  const local = /^(localhost|127\.0\.0\.1)(:|$)/.test(host);
  const origin = process.env.NEXT_PUBLIC_BASE_URL || `${local ? "http" : "https"}://${host}`;
  return {
  metadataBase: new URL(origin),
  title: "Entre tú y yo · Mamá, quiero conocerte",
  description: "Un libro físico de Ainara para conversar y escribir entre dos. 48 preguntas, 8 encuentros y espacio para su historia y tu manera de escucharla. Próximamente.",
  openGraph: {
    title: "Entre tú y yo · Mamá, quiero conocerte",
    description: "Conoces a tu mamá. Todavía puedes descubrir a la persona. Un libro para conversar y escribir entre dos. Próximamente.",
    images: [{ url: "/images/entre-tu-y-yo/social.jpg", width: 1200, height: 630, alt: "Entre tú y yo, el libro de conversaciones de Ainara" }],
    type: "website",
    locale: "es_ES",
  },
  twitter: { card: "summary_large_image", images: ["/images/entre-tu-y-yo/social.jpg"] },
  };
}

export default function Page() { return <MemoryBookLanding />; }
