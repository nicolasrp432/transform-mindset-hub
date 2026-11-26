export const BLACK_FRIDAY_OFFER = {
  badge: "BLACK FRIDAY",
  dateRange: "DEL 27 AL 30 DE NOVIEMBRE",
  deadlineLabel: "Hasta el lunes 30 · 23:59",
  deadlineIso: "2026-11-30T23:59:59+01:00",
  packName: "Pack «Empezar por dentro»",
  originalPrice: 159,
  salePrice: 89,
  savings: 70,
  discountPercent: 44,
  stripePaymentLink: "https://buy.stripe.com/cNi7sL9Lp4kwfz02G33sI00",
  whatsappUrl:
    "https://wa.me/34692627353?text=Hola%20Ainara%2C%20vengo%20de%20la%20web%20por%20el%20PACK%20%C2%ABEmpezar%20por%20dentro%C2%BB%20de%20Black%20Friday%20(89%20%E2%82%AC).",
  instagramUrl: "https://www.instagram.com/ainaracoach/",
  shippingScope: "Envío físico incluido en España",
} as const;

export const POSTER_SUMMARY_ROWS = [
  {
    title: "Guía integral",
    format: "edición impresa",
    detail: "80 páginas",
  },
  {
    title: "Agenda de reflexión",
    format: "digital",
    detail: "un rato al día",
  },
  {
    title: "Emulsión Energética",
    format: "formación en Mitra",
    detail: "8 clases",
  },
] as const;

export const PAIN_POINTS = [
  {
    tag: "01 · Ruido mental",
    title: "Tu cabeza no descansa ni cuando por fin paras",
    body: "Repasas conversaciones, te exiges más de lo que le exigirías a nadie y sientes que el crítico interno lleva meses al mando.",
  },
  {
    tag: "02 · Piloto automático",
    title: "Llegas al final del año agotada y desconectada de ti",
    body: "Cumples con todo y sostienes a los demás, pero hace tiempo que no tienes un espacio real para escucharte sin culpa.",
  },
  {
    tag: "03 · Teoría sin sistema",
    title: "Entiendes lo que te pasa, pero vuelves al mismo bucle",
    body: "Has leído y probado cosas sueltas, pero cuando llega un mal día te falta una herramienta concreta para volver a tu centro.",
  },
] as const;

export const PACK_PIECES = [
  {
    step: "01",
    role: "Entender en papel",
    title: "Guía integral de transformación",
    subtitle: "Edición impresa · 80 páginas · Envío a tu casa en España",
    image: "/images/guide-mockup.webp",
    imageAlt: "Portada de la Guía integral de transformación en edición impresa",
    description:
      "El mapa en papel para leer despacio, subrayar y volver a él lejos de las pantallas. Inteligencia emocional, autoestima y ejercicios prácticos paso a paso.",
    highlights: [
      "80 páginas en edición física para leer, escribir y conservar",
      "Rueda de la vida, mindfulness y prácticas contra el crítico interno",
      "Envío físico directo a cualquier dirección en España",
    ],
    badge: "Edición física · España",
  },
  {
    step: "02",
    role: "Sostener cada día",
    title: "Agenda de reflexión para la sanación emocional",
    subtitle: "Formato digital · PDF interactivo e imprimible · Un rato al día",
    image: "/images/products/agenda-front.webp",
    imageAlt: "Portada oficial de la Agenda de reflexiones para la sanación emocional",
    description:
      "Un espacio íntimo para bajar el ruido mental en 10 minutos. Preguntas guiadas, rituales de mañana y noche y ejercicios de autocompasión para sostener lo que aprendes.",
    highlights: [
      "Rituales breves de mañana y noche sin exigirte perfección",
      "Preguntas de claridad emocional y diario de gratitud guiado",
      "Descarga inmediata para tablet, móvil o imprimir en casa",
    ],
    badge: "Acceso digital inmediato",
  },
  {
    step: "03",
    role: "Transformar de raíz",
    title: "Emulsión Energética · Formación en Mitra",
    subtitle: "8 clases completas + 6 materiales tácticos · Acceso de por vida",
    image: "/images/ainara-portrait.webp",
    imageAlt: "Ainara Unamunzaga, creadora de Emulsión Energética en Mitra",
    description:
      "La formación que une neurociencia, psicología y las ocho leyes universales en un método claro de regulación emocional. Sin positivismo tóxico ni frases vacías.",
    highlights: [
      "8 clases estructuradas dentro de la plataforma Mitra",
      "Incluye 6 recursos descargables: Auditoría Mental, Reto de 9 Días y Termómetro Emocional",
      "Protocolo de Anclaje + Audio terapéutico bonus con acceso de por vida",
    ],
    badge: "Formación en Mitra",
  },
] as const;

export const VALUE_STACK_ITEMS = [
  {
    name: "Guía integral de transformación (edición impresa · 80 págs.)",
    detail: "Libro físico + envío incluido a toda España",
    included: true,
  },
  {
    name: "Agenda de reflexión para la sanación emocional (digital)",
    detail: "PDF interactivo + listo para imprimir · acceso inmediato",
    included: true,
  },
  {
    name: "Formación Emulsión Energética en Mitra (8 clases)",
    detail: "Acceso de por vida desde móvil, tablet u ordenador",
    included: true,
  },
  {
    name: "Pack de 6 materiales tácticos + Audio terapéutico",
    detail: "Auditoría Mental, Termómetro Emocional, Reto 9 Días y Protocolo de Anclaje",
    included: true,
  },
] as const;

export const PACK_TESTIMONIALS = [
  {
    quote:
      "La estructura de la guía me ayudó a entender qué me estaba pasando y a sentirme mucho más en control.",
    name: "María G.",
    piece: "Guía integral",
  },
  {
    quote:
      "Esta agenda se ha convertido en mi momento favorito del día. Escribir me ayuda a bajar la ansiedad y a entenderme mejor.",
    name: "Sofía T.",
    piece: "Agenda de reflexión",
  },
  {
    quote:
      "Es la primera formación que me da estructura de verdad. Dejé de buscar frases motivadoras y empecé a tener un protocolo para los días malos.",
    name: "Nuria B.",
    piece: "Emulsión Energética",
  },
  {
    quote:
      "Dejé de vivir en piloto automático. Los ejercicios son simples pero muy profundos, y me siento mucho más conectada conmigo misma.",
    name: "Carolina M.",
    piece: "Agenda de reflexión",
  },
  {
    quote:
      "El termómetro emocional lo tengo impreso en la nevera. Saber en qué grado estoy y qué acción toca me ha quitado muchísima ansiedad.",
    name: "Paula R.",
    piece: "Emulsión Energética",
  },
  {
    quote:
      "Dejé de luchar contra mi ansiedad y empecé a escucharla. Eso cambió por completo mi forma de vivir el día a día.",
    name: "Carlos R.",
    piece: "Guía integral",
  },
] as const;

export const PACK_FAQ = [
  {
    question: "¿Hasta cuándo está disponible esta oferta de Black Friday?",
    answer:
      "El Pack «Empezar por dentro» a 89 € (en lugar de 159 €) está disponible únicamente del 27 al 30 de noviembre hasta las 23:59 (hora peninsular española). Al terminar el plazo, la oferta se cierra y no se mantiene este precio.",
  },
  {
    question: "¿Cómo y dónde se envía la Guía integral impresa?",
    answer:
      "Realizamos envíos a toda España. Durante el pago en Stripe te pediremos tu dirección postal y teléfono de contacto para coordinar la entrega de tu ejemplar impreso de 80 páginas.",
  },
  {
    question: "¿Cuándo recibo la Agenda digital y el acceso a Emulsión Energética en Mitra?",
    answer:
      "No tienes que esperar al envío físico para empezar. Al completar el pago en Stripe recibirás tu confirmación y las instrucciones de acceso a la Agenda de reflexión digital y a las 8 clases de Emulsión Energética en Mitra.",
  },
  {
    question: "¿El pago es único o hay alguna suscripción oculta?",
    answer:
      "Es un pago único de 89 € (IVA incluido). No hay cuotas mensuales ni renovaciones automáticas, y el acceso a la formación en Mitra y a la Agenda digital es para siempre.",
  },
  {
    question: "¿Puedo comprarlo para regalar en Navidad?",
    answer:
      "Sí. Muchas personas aprovechan el Black Friday para regalarlo o empezar diciembre con él. Si es un regalo, puedes poner la dirección de envío en España durante el pago o escribirme por WhatsApp tras la compra para personalizar el acceso a Mitra.",
  },
  {
    question: "¿Qué pasa si lo pruebo y siento que no es para mí?",
    answer:
      "Tienes 7 días de garantía. Si al entrar y revisar el material sientes que no es lo que necesitas en este momento, me escribes y revisamos la devolución con total tranquilidad.",
  },
  {
    question: "¿El pago con Stripe es seguro?",
    answer:
      "Sí, 100%. El cobro se realiza directamente en la pasarela oficial de Stripe con cifrado SSL y autenticación reforzada (SCA / 3D Secure). Puedes pagar con tarjeta, Apple Pay o Google Pay.",
  },
] as const;
