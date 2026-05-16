import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Mail, CalendarHeart } from "lucide-react";

export const metadata: Metadata = {
  title: "¡Compra exitosa! | Agenda de Reflexión Diaria",
  description: "Tu compra se ha realizado con éxito. Pronto recibirás tu agenda digital.",
};

export default function ExitoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="section">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success icon */}
            <div className="relative mx-auto mb-8 w-24 h-24">
              <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping" />
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl mb-4">¡Gracias por tu compra!</h1>
            <p className="text-text-muted text-lg md:text-xl max-w-xl mx-auto">
              Tu Agenda de Reflexión Diaria ya está en camino. Revisa tu correo electrónico para acceder al material.
            </p>

            {/* What to expect */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 text-left">
              <div className="rounded-2xl bg-white border border-border p-6 shadow-sm">
                <Mail className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="text-lg mb-2">Revisa tu email</h3>
                <p className="text-sm text-text-muted">
                  Recibirás un correo de confirmación con los detalles de tu compra y el acceso.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-border p-6 shadow-sm">
                <CalendarHeart className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="text-lg mb-2">Descarga inmediata</h3>
                <p className="text-sm text-text-muted">
                  Tu agenda en formato PDF está lista. Puedes usarla en tu tablet o imprimirla para escribir a mano.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium tracking-wide shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Volver al inicio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
