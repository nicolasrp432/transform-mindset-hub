import type { Metadata } from "next";
import { Download, Mail } from "lucide-react";
import PurchaseSuccess from "@/components/landing/PurchaseSuccess";

export const metadata: Metadata = {
  title: "¡Compra exitosa! | Guía Práctica",
  description:
    "Tu compra se ha realizado con éxito. Pronto recibirás tu Guía Práctica.",
  robots: { index: false, follow: false },
};

export default function ExitoPage() {
  return (
    <PurchaseSuccess
      message="Tu Guía Práctica de Transformación Integral ya está en camino. Revisa tu correo electrónico para acceder al contenido."
      cards={[
        {
          icon: Mail,
          title: "Revisa tu email",
          text: "Recibirás un correo de confirmación con los detalles de tu compra y acceso a la guía.",
        },
        {
          icon: Download,
          title: "Descarga inmediata",
          text: "Tu guía en formato PDF está lista para descargar. Comienza tu transformación hoy.",
        },
      ]}
    />
  );
}
