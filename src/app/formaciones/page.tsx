import type { Metadata } from "next";
import FormacionesContent from "./FormacionesContent";

export const metadata: Metadata = {
  title: "Formaciones | Ainara Coaching",
  description:
    "Formaciones de transformación personal profunda: Re-conéctate y Emulsión Energética. Procesos grupales e individuales para tu evolución.",
};

export default function FormacionesPage() {
  return <FormacionesContent />;
}
