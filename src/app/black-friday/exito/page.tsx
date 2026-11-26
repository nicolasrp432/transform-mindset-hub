import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Mail,
  MessageCircle,
  Truck,
} from "lucide-react";
import { PLATFORM_LOGIN_URL, PLATFORM_NAME } from "@/lib/products";
import { BLACK_FRIDAY_OFFER } from "@/components/black-friday/data";

export const metadata: Metadata = {
  title: "¡Bienvenida al Pack «Empezar por dentro»!",
  description:
    "Tu pedido de Black Friday está confirmado. Aquí tienes los siguientes pasos para tus materiales digitales y el envío en España.",
  robots: { index: false, follow: false },
};

export default function BlackFridayExitoPage() {
  return (
    <main className="min-h-screen bg-[#141D17] text-[#F6F2EA] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/12 bg-[#19241D] p-7 sm:p-11 shadow-[0_30px_90px_-24px_rgba(0,0,0,0.65)]">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#C98A6F]/18 border border-[#C98A6F]/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8B29A]">
          <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
          Pedido confirmado · Black Friday
        </div>

        <h1 className="mt-5 font-serif text-4xl sm:text-5xl leading-[1.08] text-white">
          ¡Gracias por{" "}
          <em className="italic text-[#D89A7E]">empezar por dentro</em>!
        </h1>

        <p className="mt-4 text-base text-[#C4D0C7] leading-relaxed">
          Tu compra del <strong>Pack «Empezar por dentro»</strong> se ha
          procesado correctamente en Stripe. Aquí tienes exactamente cómo
          recibirás las tres piezas de tu pack:
        </p>

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-[#121B15] p-5 flex items-start gap-4">
            <Mail className="w-5 h-5 text-[#D89A7E] mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-xl text-white">
                1. Agenda de reflexión digital + recibo
              </h2>
              <p className="mt-1 text-sm text-[#B4C2B8] leading-relaxed">
                Revisa el correo con el que has hecho la compra (y tu carpeta de
                spam por si acaso). Te enviaremos tu recibo de Stripe y el
                acceso a tu Agenda de reflexión digital.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121B15] p-5 flex items-start gap-4">
            <GraduationCap
              className="w-5 h-5 text-[#D89A7E] mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-serif text-xl text-white">
                2. Emulsión Energética en {PLATFORM_NAME} (8 clases)
              </h2>
              <p className="mt-1 text-sm text-[#B4C2B8] leading-relaxed">
                Recibirás tus credenciales de acceso a {PLATFORM_NAME} para
                disfrutar de las 8 clases y los 6 materiales tácticos con acceso
                de por vida.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121B15] p-5 flex items-start gap-4">
            <Truck className="w-5 h-5 text-[#D89A7E] mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-xl text-white">
                3. Guía integral impresa (80 páginas · España)
              </h2>
              <p className="mt-1 text-sm text-[#B4C2B8] leading-relaxed">
                Preparamos tu ejemplar físico y lo enviamos a la dirección en
                España que nos has indicado en Stripe.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={PLATFORM_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C98A6F] hover:bg-[#D7997E] px-7 py-3.5 text-sm font-semibold text-[#141D17] transition-colors"
          >
            Ir a {PLATFORM_NAME}
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href={BLACK_FRIDAY_OFFER.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.1] px-6 py-3.5 text-sm font-medium text-[#F6F2EA] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#D89A7E]" aria-hidden="true" />
            Escribir a Ainara por WhatsApp
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.2em] text-[#9FB0A4] hover:text-[#D89A7E] transition-colors"
          >
            Volver a ainaracoaching.com
          </Link>
        </div>
      </div>
    </main>
  );
}
