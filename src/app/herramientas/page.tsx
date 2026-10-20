"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Crown,
  CalendarHeart,
  FileText,
  Download,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadMagnetSchema, type LeadMagnetInput } from "@/lib/validations";
import { FloatingInput } from "@/components/ui/FloatingInput";
import { submitLeadMagnet } from "@/app/actions/lead";
import { PLATFORM_LOGIN_URL, PLATFORM_NAME, PRODUCTS } from "@/lib/products";
import { MEMORY_BOOK } from "@/lib/memory-book";
const ecosystemItems = [
  {
    title: "Guía Práctica",
    description:
      "Método de 21 días para reducir ansiedad, ordenar tus emociones y reconectar con tu poder interior.",
    icon: FileText,
    action: "Adquirir guía",
    href: PRODUCTS.GUIA_PRACTICA.href,
    price: `desde ${PRODUCTS.GUIA_PRACTICA.displayPrice}`,
    badge: "Más vendido",
    image: "/images/guide-mockup.webp",
    alt: "Guía práctica de Ainara",
    category: "GUÍA PRÁCTICA",
  },
  {
    title: "Agenda de Reflexión",
    description:
      "Un espacio diario íntimo de crecimiento personal para practicar gratitud y reconectar contigo misma.",
    icon: CalendarHeart,
    action: "Explorar agenda",
    href: PRODUCTS.AGENDA_REFLEXION.href,
    price: PRODUCTS.AGENDA_REFLEXION.displayPrice,
    badge: "Nuevo",
    image: "/images/reflection-agenda.webp",
    alt: "Visual ilustrativo de la agenda de reflexión",
    category: "REFLEXIÓN DIARIA",
  },
  {
    title: "La Princesa que Perdió su Corona",
    description:
      "Un cuento inspirador sobre el empoderamiento femenino y la sanación de heridas del pasado.",
    icon: Crown,
    action: "Leer historia",
    href: PRODUCTS.LIBRO_PRINCESA_TAPA_BLANDA.href,
    price: `desde ${PRODUCTS.LIBRO_PRINCESA_TAPA_BLANDA.displayPrice}`,
    badge: "Edición física",
    image: "/images/princess-mockup.webp",
    alt: "La Princesa que perdió su corona",
    category: "LECTURA",
  },
  {
    title: MEMORY_BOOK.title,
    description: "Mamá, quiero conocerte. Un libro para conversar y escribir entre dos: 48 preguntas, 8 encuentros y espacio para vuestras dos voces.",
    icon: BookOpen,
    action: "Descubrir el libro",
    href: MEMORY_BOOK.href,
    price: MEMORY_BOOK.status,
    badge: "Próximamente",
    image: "/images/entre-tu-y-yo/catalog.webp",
    alt: "Portada de Entre tú y yo · Mamá, quiero conocerte, de Ainara Coach. Visualización digital.",
    category: "CONVERSAR Y ESCRIBIR ENTRE DOS",
  },
];

export default function HerramientasPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LeadMagnetInput>({ resolver: zodResolver(LeadMagnetSchema) });
  const onSubmit = async (data: LeadMagnetInput) => {
    try {
      const result = await submitLeadMagnet(data);
      if (!result.success) {
        setError("root", {
          message:
            result.error ||
            "No hemos podido completar la solicitud. Inténtalo de nuevo.",
        });
        return;
      }
      setWarning("_warning" in result && !!result._warning);
      setIsSuccess(true);
    } catch {
      setError("root", {
        message: "No hemos podido conectar. Inténtalo de nuevo en un momento.",
      });
    }
  };
  return (
    <main className="resources-page">
      <section className="editorial-wrap resources-intro">
        <div>
          <p className="eyebrow">HERRAMIENTAS / A TU RITMO</p>
          <h1>
            Pequeños espacios.
            <br />
            <em>Para volver a ti.</em>
          </h1>
        </div>
        <div>
          <p>
            Una lectura, una pregunta, un momento de reflexión. Explora los
            recursos de Ainara y encuentra tu forma de empezar.
          </p>
          <a className="editorial-link" href="#guia-gratuita">
            Empezar con la guía gratuita
          </a>
        </div>
      </section>
      <section
        className="editorial-wrap resource-catalog"
        aria-label="Recursos de Ainara"
      >
        {ecosystemItems.map((item, i) => (
          <Link key={item.title} href={item.href} className="resource-card resource-card-link" aria-label={`${item.title}: ${item.action}`}>
            <div className={`resource-cover resource-cover-${i}`}>
              <Image src={item.image}
                alt={item.alt}
                fill sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 45vw, 400px" />
              {i === 1 && <span className="resource-image-caption">Visual ilustrativo</span>}
              {item.href === MEMORY_BOOK.href && <span className="resource-image-caption">Próximamente · Visualización digital</span>}
            </div>
            <div className="resource-card-body">
              <p className="eyebrow">
                0{i + 1} /{" "}
                {item.category}
              </p>
              <h2>
                {item.title}
              </h2>
              <p>{item.description}</p>
              <div className="resource-card-bottom">
                <span className="editorial-link">{item.action}<span aria-hidden="true"> ↗</span></span>
                <span>{item.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <section className="resource-platform">
        <div className="editorial-wrap">
          <div>
            <p className="eyebrow">EL CAMINO DE LAS FORMACIONES</p>
            <h2>
              {PLATFORM_NAME}
              <em>Desde la raíz.</em>
            </h2>
            <p>
              Todas las formaciones de Ainara en un mismo lugar, con sus
              materiales y tu progreso.
            </p>
          </div>
          <div>
            <a
              className="editorial-button light"
              href={PLATFORM_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar acceso a MITRA
            </a>
            <Link href="/formaciones" className="editorial-link">
              Conocer las formaciones
            </Link>
          </div>
        </div>
      </section>
      <section id="guia-gratuita" className="free-guide">
        <div className="editorial-wrap free-guide-grid">
          <div>
            <p className="eyebrow">UN PRIMER RECURSO / GRATUITO</p>
            <h2>
              Cuando la cabeza
              <br />
              no para,
              <br />
              <em>haz una pausa.</em>
            </h2>
            <p>
              He diseñado esta guía gratuita como un espacio de reflexión.
              Herramientas sencillas para observar lo que te pasa y conectar con
              tu propio ritmo.
            </p>
            <span className="free-guide-note">
              GUÍA DE CLARIDAD · DESCARGA EN PDF
            </span>
          </div>
          <div className="free-guide-form">
            {!isSuccess ? (
              <>
                <h3>Tu guía de claridad.</h3>
                <p>
                  Comparte tu nombre y correo con Ainara para acceder a la
                  descarga aquí mismo.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <FloatingInput
                    label="Tu nombre"
                    autoComplete="given-name"
                    {...register("name")}
                    error={errors.name?.message}
                  />
                  <FloatingInput
                    label="Tu correo electrónico"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                  {errors.root && (
                    <p role="alert" className="submission-error">
                      {errors.root.message}
                    </p>
                  )}
                  <button
                    className="editorial-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Preparando…"
                      : "Acceder a la guía gratuita"}
                  </button>
                </form>
                <p className="free-guide-help">
                  La descarga estará disponible al completar el formulario.
                </p>
              </>
            ) : (
              <div className="guide-success" role="status">
                <CheckCircle2 size={36} />
                <h3>Un momento para ti.</h3>
                <p>Tu guía está lista para descargar.</p>
                {warning && (
                  <p className="submission-error">
                    La guía está disponible, aunque no hemos podido guardar tus
                    datos de contacto.
                  </p>
                )}
                <a
                  className="editorial-button"
                  href="/guia-claridad.pdf"
                  download="Guia-Claridad-Ainara.pdf"
                >
                  <Download size={18} /> Descargar la guía
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
