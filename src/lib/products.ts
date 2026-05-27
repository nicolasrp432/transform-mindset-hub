export const PLATFORM_LOGIN_URL = "https://v0-plataforma-ainara.vercel.app/login";

export type ProductDefinition = {
  key: string;
  name: string;
  description: string;
  currency: string;
  unitAmount: number;
  displayPrice: string;
  href: string;
  successPath: string;
  cancelPath: string;
  category: "programa" | "recurso";
};

export const PRODUCTS = {
  RE_CONECTATE: {
    key: "re-conectate",
    name: "Re-Conéctate",
    description:
      "Programa de transformación personal para reconstruir tu seguridad interior y autoestima.",
    currency: "eur",
    unitAmount: 6700,
    displayPrice: "67€",
    href: "/re-conectate",
    successPath: "/re-conectate",
    cancelPath: "/re-conectate",
    category: "programa",
  },
  EMULSION_ENERGETICA: {
    key: "emulsion-energetica",
    name: "Emulsión Energética",
    description:
      "Formación premium de leyes universales y regulación emocional para crear una vida alineada.",
    currency: "eur",
    unitAmount: 8700,
    displayPrice: "87€",
    href: "/emulsion-energetica",
    successPath: "/emulsion-energetica",
    cancelPath: "/emulsion-energetica",
    category: "programa",
  },
  GUIA_PRACTICA: {
    key: "guia-practica",
    name: "Guía Práctica — Transformación Integral",
    description:
      "Guía de Ainara: silencia tu mente crítica, gestiona la ansiedad y reconecta con tu autoestima en 21 días.",
    currency: "usd",
    unitAmount: 2700,
    displayPrice: "$27",
    href: "/guia-practica",
    successPath: "/guia-practica/exito",
    cancelPath: "/guia-practica",
    category: "recurso",
  },
  AGENDA_REFLEXION: {
    key: "agenda-reflexion",
    name: "Agenda de Reflexión Diaria",
    description:
      "Espacio íntimo de crecimiento personal para reflexionar, practicar gratitud y reconectar contigo.",
    currency: "usd",
    unitAmount: 1900,
    displayPrice: "$19",
    href: "/agenda-reflexion",
    successPath: "/agenda-reflexion/exito",
    cancelPath: "/agenda-reflexion",
    category: "recurso",
  },
  LIBRO_PRINCESA: {
    key: "libro-princesa",
    name: "La Princesa que se le cayó la Corona",
    description:
      "Un cuento inspirador sobre el empoderamiento femenino, la sanación y la búsqueda de la autoestima.",
    currency: "usd",
    unitAmount: 1500,
    displayPrice: "$15",
    href: "/libro-princesa",
    successPath: "/libro-princesa/exito",
    cancelPath: "/libro-princesa",
    category: "recurso",
  },
} as const;

export const PRODUCT_LIST = Object.values(PRODUCTS);
