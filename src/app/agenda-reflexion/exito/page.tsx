import type { Metadata } from "next";
import { CalendarHeart, Mail } from "lucide-react";
import PurchaseSuccess from "@/components/landing/PurchaseSuccess";

export const metadata: Metadata = {
  title: "¡Compra exitosa! | Agenda de Reflexión Diaria",
  description:
    "Tu compra se ha realizado con éxito. Pronto recibirás tu agenda digital.",
  robots: { index: false, follow: false },
};

export default function ExitoPage() {
  return (
    <PurchaseSuccess
      message="Tu Agenda de Reflexión Diaria ya está en camino. Revisa tu correo electrónico para acceder al material."
      cards={[
        {
          icon: Mail,
          title: "Revisa tu email",
          text: "Recibirás un correo de confirmación con los detalles de tu compra y el acceso.",
        },
        {
          icon: CalendarHeart,
          title: "Descarga inmediata",
          text: "Tu agenda en formato PDF está lista. Puedes usarla en tu tablet o imprimirla para escribir a mano.",
        },
      ]}
    />
  );
}
