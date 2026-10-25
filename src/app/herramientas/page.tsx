"use client";
import {
  Crown,
  CalendarHeart,
  FileText,
  BookOpen,
} from "lucide-react";
import FreeWorkbook from "@/components/products/FreeWorkbook";
import BookShowcase from "@/components/products/BookShowcase";
import type { BookVisualKey } from "@/lib/product-visuals";
import Link from "next/link";
import { PLATFORM_LOGIN_URL, PLATFORM_NAME, PRODUCTS } from "@/lib/products";
import { MEMORY_BOOK } from "@/lib/memory-book";
const ecosystemItems = [
  {
    title: "Guía integral de transformación",
    description:
      "Lecturas y ejercicios para explorar tu autoestima, tu bienestar y tu inteligencia emocional. Un espacio para pasar de la reflexión a la práctica.",
    icon: FileText,
    action: "Adquirir guía",
    href: PRODUCTS.GUIA_PRACTICA.href,
    price: `desde ${PRODUCTS.GUIA_PRACTICA.displayPrice}`,
    badge: "Más vendido",
    product: "guide",
    alt: "Guía práctica de Ainara",
    category: "GUÍA PRÁCTICA",
  },
  {
    title: "Agenda de reflexiones 2027",
    description:
      "Un año para organizarte y escucharte. Cuatro tomos trimestrales con fechas, reflexión diaria y un cuaderno de recursos.",
    icon: CalendarHeart,
    action: "Explorar agenda",
    href: "/agenda-2027",
    price: "Próximamente",
    badge: "Nuevo",
    product: "agenda",
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
    product: "princess",
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
    product: "memory",
    alt: "Portada de Entre tú y yo · Mamá, quiero conocerte, de Ainara Coach. Visualización digital.",
    category: "CONVERSAR Y ESCRIBIR ENTRE DOS",
  },
];

export default function HerramientasPage() {
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
            Empezar con el cuaderno gratuito
          </a>
        </div>
      </section>
      <section
        className="editorial-wrap resource-catalog"
        aria-label="Recursos de Ainara"
      >
        {ecosystemItems.map((item, i) => (
          <Link key={item.title} href={item.href} className="resource-card resource-card-link" aria-label={`${item.title}: ${item.action}`}>
            <BookShowcase product={item.product as BookVisualKey} compact priority={i < 2} />
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
      <div className="editorial-wrap pb-12 text-sm text-text-muted">
        ¿Buscas la agenda digital actual? <Link href={PRODUCTS.AGENDA_REFLEXION.href} className="editorial-link">Agenda de Reflexión — {PRODUCTS.AGENDA_REFLEXION.displayPrice}</Link>
        <p className="mt-2">Es una edición distinta de la agenda anual 2027, todavía en preparación.</p>
      </div>
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
      <FreeWorkbook />
    </main>
  );
}
