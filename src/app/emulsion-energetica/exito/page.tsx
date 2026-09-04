import type { Metadata } from "next";
import { ArrowUpRight, GraduationCap, Mail } from "lucide-react";
import PurchaseSuccess from "@/components/landing/PurchaseSuccess";
import { PLATFORM_LOGIN_URL, PLATFORM_NAME } from "@/lib/products";

export const metadata: Metadata = {
  title: "¡Bienvenida a Emulsión Energética!",
  description:
    "Tu acceso a la formación está confirmado. Aquí tienes los siguientes pasos.",
  robots: { index: false, follow: false },
};

export default function ExitoPage() {
  return (
    <PurchaseSuccess
      title="¡Bienvenida a Emulsión Energética!"
      message={`Tu acceso está confirmado. La formación y sus materiales descargables viven dentro de ${PLATFORM_NAME}.`}
      cards={[
        {
          icon: Mail,
          title: "Revisa tu email",
          text: `Recibirás un correo con tus datos de acceso a ${PLATFORM_NAME}. Si no lo ves, mira en la carpeta de spam.`,
        },
        {
          icon: GraduationCap,
          title: "Descarga tu Auditoría Mental",
          text: "Es el primer material del programa: hazla antes de empezar la lección 1 para tener tu punto de partida.",
        },
      ]}
      secondary={
        <a
          href={PLATFORM_LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-full font-medium tracking-wide text-text hover:bg-surface transition-colors duration-300"
        >
          Entrar en {PLATFORM_NAME}
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>
      }
    />
  );
}
