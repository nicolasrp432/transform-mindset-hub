export const PLATFORM_LOGIN_URL = "https://v0-plataforma-ainara.vercel.app/login";

/** Nombre público de la plataforma que agrupa todas las formaciones. */
export const PLATFORM_NAME = "Mitra";

export type ValueStackItem = {
  label: string;
  /** Importe en céntimos. El total siempre se calcula, nunca se escribe. */
  amount: number;
};

export type ProductDefinition = {
  key: string;
  name: string;
  /** Nombre corto para tarjetas y listados. */
  shortName?: string;
  description: string;
  currency: string;
  /** Importe que se cobra, en céntimos. */
  unitAmount: number;
  displayPrice: string;
  /** Precio de referencia tachado (p. ej. el de Amazon). */
  compareAtDisplayPrice?: string;
  compareAtLabel?: string;
  /** Enlace de compra externo (Amazon). */
  externalUrl?: string;
  /** Desglose de valor para el anclaje de precio de los programas. */
  valueStack?: readonly ValueStackItem[];
  href: string;
  successPath: string;
  cancelPath: string;
  category: "programa" | "recurso";
};

export const PRODUCTS = {
  RE_CONECTATE: {
    key: "re-conectate",
    name: "Re-Conéctate",
    shortName: "Re-Conéctate",
    description:
      "Programa de transformación personal para reconstruir tu seguridad interior y autoestima.",
    currency: "eur",
    unitAmount: 4700,
    displayPrice: "47 €",
    valueStack: [
      { label: "Programa Re-Conéctate — 6 semanas de contenido", amount: 24700 },
      { label: "Mini curso «5 ejercicios para silenciar la voz crítica»", amount: 9700 },
      { label: "Bitácora de Autoestima Diaria", amount: 4700 },
      { label: "Sesión de grupo en vivo con Ainara", amount: 14700 },
    ],
    href: "/re-conectate",
    successPath: "/re-conectate/exito",
    cancelPath: "/re-conectate",
    category: "programa",
  },
  EMULSION_ENERGETICA: {
    key: "emulsion-energetica",
    name: "Emulsión Energética",
    shortName: "Emulsión Energética",
    description:
      "Formación premium de leyes universales y regulación emocional para crear una vida alineada.",
    currency: "eur",
    unitAmount: 6700,
    displayPrice: "67 €",
    valueStack: [
      { label: "Formación completa — 8 lecciones", amount: 29700 },
      { label: "Auditoría Mental + Termómetro Emocional (PDF)", amount: 6700 },
      { label: "Reto de los 9 Días", amount: 4700 },
      { label: "Protocolo de Anclaje + Audio terapéutico", amount: 4700 },
      { label: "Guía de Activación de Energías", amount: 3700 },
    ],
    href: "/emulsion-energetica",
    successPath: "/emulsion-energetica/exito",
    cancelPath: "/emulsion-energetica",
    category: "programa",
  },
  GUIA_PRACTICA: {
    key: "guia-practica",
    name: "Guía Práctica — Transformación Integral (PDF digital)",
    shortName: "Guía en PDF digital",
    description:
      "Guía de Ainara en PDF: silencia tu mente crítica, gestiona la ansiedad y reconecta con tu autoestima en 21 días.",
    currency: "eur",
    unitAmount: 1200,
    displayPrice: "12 €",
    href: "/guia-practica",
    successPath: "/guia-practica/exito",
    cancelPath: "/guia-practica",
    category: "recurso",
  },
  GUIA_PRACTICA_IMPRESA: {
    key: "guia-practica-impresa",
    name: "Guía Práctica — Edición impresa",
    shortName: "Edición impresa",
    description:
      "Edición impresa de la Guía Práctica de Transformación Integral, con descuento al pagar por Stripe.",
    currency: "eur",
    unitAmount: 1800,
    displayPrice: "18 €",
    compareAtDisplayPrice: "20,50 €",
    compareAtLabel: "en Amazon",
    externalUrl: "https://amzn.eu/d/0g8E9jIm",
    href: "/guia-practica",
    successPath: "/guia-practica/exito",
    cancelPath: "/guia-practica",
    category: "recurso",
  },
  AGENDA_REFLEXION: {
    key: "agenda-reflexion",
    name: "Agenda de Reflexión Diaria",
    shortName: "Agenda de Reflexión",
    description:
      "Espacio íntimo de crecimiento personal para reflexionar, practicar gratitud y reconectar contigo.",
    currency: "eur",
    unitAmount: 1900,
    displayPrice: "19 €",
    href: "/agenda-reflexion",
    successPath: "/agenda-reflexion/exito",
    cancelPath: "/agenda-reflexion",
    category: "recurso",
  },
  LIBRO_PRINCESA_TAPA_BLANDA: {
    key: "libro-princesa-tapa-blanda",
    name: "La Princesa que perdió su corona — Tapa blanda",
    shortName: "Tapa blanda",
    description:
      "Edición física en tapa blanda de La Princesa que perdió su corona.",
    currency: "eur",
    unitAmount: 2237,
    displayPrice: "22,37 €",
    href: "/libro-princesa",
    successPath: "/libro-princesa/exito",
    cancelPath: "/libro-princesa",
    category: "recurso",
  },
  LIBRO_PRINCESA_TAPA_DURA: {
    key: "libro-princesa-tapa-dura",
    name: "La Princesa que perdió su corona — Tapa dura",
    shortName: "Tapa dura",
    description:
      "Edición física en tapa dura de La Princesa que perdió su corona.",
    currency: "eur",
    unitAmount: 2684,
    displayPrice: "26,84 €",
    href: "/libro-princesa",
    successPath: "/libro-princesa/exito",
    cancelPath: "/libro-princesa",
    category: "recurso",
  },
} as const satisfies Record<string, ProductDefinition>;

export const PRODUCT_LIST = Object.values(PRODUCTS);

/** Unión de las claves literales de PRODUCTS: un typo no compila. */
export type ProductKey = (typeof PRODUCTS)[keyof typeof PRODUCTS]["key"];

/**
 * Forma con la que se consumen los productos. Se ensancha a propósito desde la
 * unión literal: los componentes necesitan leer campos opcionales como
 * `valueStack`, que no existen en todos los miembros de la unión.
 */
export type Product = ProductDefinition;

const BY_KEY = new Map<string, Product>(
  PRODUCT_LIST.map((product) => [product.key, product])
);

/** Devuelve el producto con esa clave, o `undefined` si no existe. */
export const findProduct = (key: string): Product | undefined => BY_KEY.get(key);

/** Devuelve el producto con esa clave. Lanza si la clave no existe. */
export function getProduct(key: ProductKey): Product {
  const product = BY_KEY.get(key);
  if (!product) throw new Error(`Producto desconocido: ${key}`);
  return product;
}

/** Formatea un importe en céntimos con la moneda del producto. */
export function formatAmount(cents: number, currency = "eur"): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

/** Suma el desglose de valor de un producto. Devuelve `null` si no tiene. */
export function getValueStackTotal(product: Product): string | null {
  if (!product.valueStack?.length) return null;
  const total = product.valueStack.reduce((sum, item) => sum + item.amount, 0);
  return formatAmount(total, product.currency);
}
