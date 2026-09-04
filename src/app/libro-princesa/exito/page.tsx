import type { Metadata } from "next";
import { BookOpenText, Mail } from "lucide-react";
import PurchaseSuccess from "@/components/landing/PurchaseSuccess";

export const metadata: Metadata = {
  title: "¡Compra exitosa! | La Princesa que perdió su corona",
  description:
    "Tu compra se ha realizado con éxito. Pronto recibirás la confirmación de tu libro físico.",
  robots: { index: false, follow: false },
};

export default function ExitoPage() {
  return (
    <PurchaseSuccess
      message="Tu ejemplar de «La Princesa que perdió su corona» ya fue confirmado. Revisa tu correo para ver los siguientes pasos."
      cards={[
        {
          icon: Mail,
          title: "Revisa tu email",
          text: "Recibirás un correo de confirmación con los detalles de tu compra y el acceso.",
        },
        {
          icon: BookOpenText,
          title: "Disfruta la lectura",
          text: "Tu libro físico te espera. Prepárate para un viaje mágico de autodescubrimiento.",
        },
      ]}
    />
  );
}
