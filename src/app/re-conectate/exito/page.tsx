import type { Metadata } from "next";
import { ArrowUpRight, GraduationCap, Mail } from "lucide-react";
import PurchaseSuccess from "@/components/landing/PurchaseSuccess";
import { PLATFORM_LOGIN_URL, PLATFORM_NAME } from "@/lib/products";

export const metadata: Metadata = {
  title: "¡Bienvenida a Re-Conéctate!",
  description:
    "Tu inscripción se ha completado. Aquí tienes los siguientes pasos para empezar el programa.",
  robots: { index: false, follow: false },
};

export default function ExitoPage() {
  return (
    <PurchaseSuccess
      title="¡Bienvenida a Re-Conéctate!"
      message={`Tu plaza está confirmada. El programa vive dentro de ${PLATFORM_NAME}, la plataforma de formaciones de Ainara.`}
      cards={[
        {
          icon: Mail,
          title: "Revisa tu email",
          text: `Recibirás un correo con tus datos de acceso a ${PLATFORM_NAME}. Si no lo ves, mira en la carpeta de spam.`,
        },
        {
          icon: GraduationCap,
          title: "Empieza por la semana 1",
          text: "Las 6 semanas están disponibles desde el primer día, pero el orden importa: ve una por una.",
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
