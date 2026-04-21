import type { Metadata } from "next";
import { notFound } from "next/navigation";

/* ============================================================
   Ruta dinámica: /formaciones/[slug]
   Preparada para SSG con generateStaticParams.
   ============================================================ */

const FORMACIONES = [
  {
    slug: "reconexion",
    title: "Reconexión",
    description:
      "Un proceso profundo para reconectarte con tu esencia, soltar patrones antiguos y reencontrar tu dirección interna.",
  },
  {
    slug: "leyes-universales",
    title: "Leyes Universales",
    description:
      "Comprende y aplica las leyes que rigen los procesos de vida para alinearte con tu propósito y fluir con mayor consciencia.",
  },
] as const;

type FormacionSlug = (typeof FORMACIONES)[number]["slug"];

export async function generateStaticParams() {
  return FORMACIONES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const formacion = FORMACIONES.find((f) => f.slug === slug);
  if (!formacion) return { title: "Formación no encontrada" };

  return {
    title: formacion.title,
    description: formacion.description,
  };
}

export default async function FormacionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formacion = FORMACIONES.find((f) => f.slug === slug);

  if (!formacion) {
    notFound();
  }

  return (
    <main>
      <section className="section" aria-labelledby="formacion-heading">
        <div className="container-editorial">
          <p className="text-text-subtle text-sm tracking-widest uppercase mb-4">
            Formación
          </p>
          <h1 id="formacion-heading" className="font-serif">
            {formacion.title}
          </h1>
          <hr className="divider-breath" />
          <p className="text-text-muted text-lg max-w-[58ch]">
            {formacion.description}
          </p>
        </div>
      </section>
    </main>
  );
}
