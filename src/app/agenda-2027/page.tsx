import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, BookOpen, PenLine } from "lucide-react";
import { LandingHero, LandingSection, SectionHeading, FeatureGrid } from "@/components/landing";
import BookShowcase from "@/components/products/BookShowcase";
import BookPreview from "@/components/memory-book/BookPreview";
import { AGENDA_SAMPLES } from "@/lib/product-samples";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Agenda de reflexiones 2027 | Ainara",
  description: "Descubre la agenda 2027 de Ainara: cuatro tomos trimestrales, planificación y reflexión diaria. Mira sus portadas y páginas reales. Próximamente.",
  openGraph: { images: ["/images/products/agenda-front.webp"] },
};
const contact = `https://wa.me/${CONTACT_LINKS.whatsappNumber}?text=${encodeURIComponent("Hola Ainara, me gustaría conocer la disponibilidad y los formatos de la agenda 2027.")}`;
const volumes = ["Enero — marzo", "Abril — junio", "Julio — septiembre", "Octubre — diciembre"];

export default function Agenda2027Page() {
  return <main className="sales-landing">
    <LandingSection className="relative overflow-hidden">
      <LandingHero badge="AGENDA 2027 · PRÓXIMAMENTE" title={<>Haz espacio para tus planes.<br /><em>Y para ti.</em></>}
        lead="No todo lo importante cabe en una lista de tareas. Una agenda para organizar lo cotidiano, observar cómo te sientes y reservar un momento para escucharte."
        actions={<><a href={contact} target="_blank" rel="noopener noreferrer" className="editorial-button">Consultar disponibilidad ↗</a><a href="#por-dentro" className="editorial-link">Ver páginas reales</a></>}
        trust={[{ icon: CalendarDays, label: "Fechada: 2027" }, { icon: BookOpen, label: "4 tomos trimestrales" }, { icon: PenLine, label: "Cuaderno de recursos" }]}
        visual={<BookShowcase product="agenda" priority />}>
        <p className="text-sm text-text-muted">Nueva edición en preparación. Precio, formatos y fecha de venta pendientes de confirmar. Consultar no implica compra ni reserva.</p>
      </LandingHero>
    </LandingSection>
    <LandingSection tone="surface">
      <SectionHeading eyebrow="ORGANIZACIÓN + REFLEXIÓN" title="Lo que haces. Lo que necesitas. En un mismo lugar." />
      <FeatureGrid items={[
        { icon: CalendarDays, title: "Fechas claras", text: "Calendario y planificación para situar tus compromisos y prioridades durante el año." },
        { icon: PenLine, title: "Un espacio para escucharte", text: "Preguntas y escritura para observar tu día sin convertirlo en otra exigencia." },
        { icon: BookOpen, title: "Seguimiento cotidiano", text: "Hábitos, bienestar y planificación económica para mirar tu mes con perspectiva." },
      ]} />
    </LandingSection>
    <LandingSection>
      <SectionHeading eyebrow="LA COLECCIÓN COMPLETA" title="Un año. Cuatro capítulos." />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {volumes.map((label, index) => <figure key={label} className="text-center">
          <div className="p-5 md:p-8 bg-[#e8e8dc] rounded-2xl" style={{ perspective: "900px" }}>
            <Image src={`/images/products/${index === 0 ? "agenda-front" : `agenda-volume-${index+1}`}.webp`} alt={`Portada real del tomo ${index+1} de la agenda 2027`} width={595} height={842} sizes="(max-width:760px) 40vw, 230px" className="rounded-sm shadow-xl" style={{ transform: "rotateY(-13deg) rotateZ(-2deg)" }} />
          </div>
          <figcaption className="mt-4 text-sm text-text-muted">Tomo {index+1}<strong className="block text-text mt-1">{label}</strong></figcaption>
        </figure>)}
      </div>
      <p className="mt-6 text-sm text-text-muted">Portadas reales de la maqueta editorial. La fabricación y los formatos comerciales se confirmarán antes de la venta.</p>
    </LandingSection>
    <LandingSection tone="surface" id="por-dentro">
      <SectionHeading eyebrow="ÁBRELA ANTES DE ELEGIRLA" title="Así se ve por dentro." />
      <div className="max-w-4xl mx-auto"><BookPreview samples={AGENDA_SAMPLES} basePath="/images/products" aspectRatio="1190 / 842" /></div>
    </LandingSection>
    <LandingSection>
      <div className="rounded-3xl bg-[#3d4a35] text-[#f5f0e3] p-8 md:p-14">
        <p className="text-xs tracking-widest mb-5">TU PRÓXIMO AÑO EMPIEZA CON UN ESPACIO PARA TI</p>
        <h2 className="!text-[#f5f0e3] text-4xl md:text-5xl">¿Quieres saber cuándo estará disponible?</h2>
        <p className="my-6 max-w-2xl">Escríbenos para consultar la nueva edición. No hay alta automática, cobro ni reserva.</p>
        <a href={contact} target="_blank" rel="noopener noreferrer" className="editorial-button light">Preguntar por la agenda 2027 ↗</a>
      </div>
      <p className="mt-8 text-sm text-text-muted">Si buscas la edición digital actual, puedes ver la <Link href={PRODUCTS.AGENDA_REFLEXION.href} className="underline">Agenda de Reflexión — {PRODUCTS.AGENDA_REFLEXION.displayPrice}</Link>. Es un producto diferente de esta edición anual 2027.</p>
    </LandingSection>
  </main>;
}
