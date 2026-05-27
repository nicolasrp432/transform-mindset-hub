import { PLATFORM_LOGIN_URL, PRODUCT_LIST, PRODUCTS } from "@/lib/products";

const WHATSAPP_NUMBER = "34692627353";
const WHATSAPP_MESSAGE =
  "Hola Ainara, me gustaría saber más sobre tu trabajo.";
const CALENDLY_URL = "https://calendly.com/ainaracoachpnl/reunion-con-ainara";

export const CONTACT_LINKS = {
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage: WHATSAPP_MESSAGE,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`,
  calendlyUrl: CALENDLY_URL,
};

export const CHAT_ACTIONS = {
  ver_formaciones: {
    label: "Ver formaciones",
    href: "/formaciones",
    external: false,
  },
  ver_herramientas: {
    label: "Explorar herramientas",
    href: "/herramientas",
    external: false,
  },
  agendar_cita: {
    label: "Agendar cita",
    href: CALENDLY_URL,
    external: true,
  },
  pagar_productos: {
    label: "Pagar productos",
    href: "/herramientas",
    external: false,
  },
  acceder_plataforma: {
    label: "Acceder a la plataforma",
    href: PLATFORM_LOGIN_URL,
    external: true,
  },
  contactar_whatsapp: {
    label: "Hablar por WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    external: true,
  },
  ver_sesiones: {
    label: "Ver sesiones",
    href: "/sesiones",
    external: false,
  },
  evaluacion: {
    label: "Autoevaluación",
    href: "/evaluacion",
    external: false,
  },
  ver_reconectate: {
    label: "Programa Re-Conéctate",
    href: PRODUCTS.RE_CONECTATE.href,
    external: false,
  },
  ver_emulsion: {
    label: "Emulsión Energética",
    href: PRODUCTS.EMULSION_ENERGETICA.href,
    external: false,
  },
  ver_guia: {
    label: "Guía práctica",
    href: PRODUCTS.GUIA_PRACTICA.href,
    external: false,
  },
  ver_agenda: {
    label: "Agenda de reflexión",
    href: PRODUCTS.AGENDA_REFLEXION.href,
    external: false,
  },
  ver_libro: {
    label: "Libro: La princesa",
    href: PRODUCTS.LIBRO_PRINCESA.href,
    external: false,
  },
} as const;

export type ChatActionId = keyof typeof CHAT_ACTIONS;

export const CHAT_QUICK_ACTION_IDS: ChatActionId[] = [
  "ver_formaciones",
  "ver_herramientas",
  "agendar_cita",
  "pagar_productos",
  "acceder_plataforma",
];

const productSummary = PRODUCT_LIST.map(
  (product) =>
    `- ${product.name} (${product.displayPrice}): ${product.description} • ${product.href}`
).join("\n");

const servicesSummary = [
  "- Sesiones privadas 1:1 • /sesiones",
  "- Autoevaluación de saturación mental • /evaluacion",
  "- Formaciones premium (plataforma externa) • /formaciones",
  "- Herramientas digitales y recursos • /herramientas",
].join("\n");

const linksSummary = [
  `- WhatsApp directo: ${CONTACT_LINKS.whatsappUrl}`,
  `- Agendar cita: ${CONTACT_LINKS.calendlyUrl}`,
  `- Acceso plataforma: ${PLATFORM_LOGIN_URL}`,
].join("\n");

export const ASSISTANT_CONTEXT = [
  "Marca: Ainara (coach emocional y transformación personal).",
  "Tono: humano, cercano, empático, claro y orientado a ayudar.",
  "",
  "Productos y recursos disponibles:",
  productSummary,
  "",
  "Servicios y rutas clave:",
  servicesSummary,
  "",
  "Enlaces externos:",
  linksSummary,
].join("\n");

const actionIds = Object.keys(CHAT_ACTIONS).join(", ");

export const ASSISTANT_SYSTEM_PROMPT = [
  "Eres el asistente oficial de Ainara. Responde siempre en español con calidez y cercanía.",
  "Usa solo la información del contexto. No inventes precios, enlaces ni servicios.",
  "Si faltan datos o la pregunta es ambigua, pide aclaración de forma amable.",
  "Cuando sea útil, sugiere acciones con botones.",
  `Solo puedes usar estos action ids: ${actionIds}.`,
  "Formato de salida estricto en JSON:",
  '{"message":"respuesta al usuario","actions":["action_id","action_id"]}',
  "No incluyas texto fuera del JSON.",
  "",
  "CONTEXTO:",
  ASSISTANT_CONTEXT,
].join("\n");
