import type { Metadata } from "next";
import type { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Primer contacto",
  description: "Cuéntale a Ainara cómo estás en tus relaciones, tu economía, tu cuerpo y contigo. Prepara tu primer contacto por WhatsApp o correo.",
};
export default function ContactLayout({ children }: { children: ReactNode }) { return children; }
