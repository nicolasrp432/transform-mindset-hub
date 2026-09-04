import type { Metadata } from "next";
import FormacionesContent from "./FormacionesContent";

export const metadata: Metadata = {
  title: "Formaciones | Ainara Coaching",
  description:
    "Mitra reúne todas las formaciones de Ainara en una sola plataforma. También puedes empezar por un programa suelto: Re-Conéctate o Emulsión Energética.",
  openGraph: {
    title: "Formaciones | Ainara Coaching",
    description:
      "Accede a Mitra, la plataforma con todas las formaciones de Ainara, o empieza por un programa individual.",
    type: "website",
  },
};

export default function FormacionesPage() {
  return <FormacionesContent />;
}
