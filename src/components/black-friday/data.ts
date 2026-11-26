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
    body: "Has leído y probado cosas sueltas, pero cuando llega un mal día te falta un protocolo concreto para volver a tu centro.",
  },
] as const;

export const BEFORE_AFTER = {
  before: [
    "Reaccionar desde el cansancio, la ansiedad o la autoexigencia sin saber cómo frenar.",
    "Empezar propósitos cada mes y abandonarlos a la semana porque no tienes estructura.",
    "Acumular lecturas y vídeos sueltos que entiendes en teoría, pero no aplicas en un mal día.",
    "Poner las necesidades de todo el mundo antes que tu propia calma mental.",
  ],
  after: [
    "Detectar en minutos qué emoción estás sintiendo y qué acción concreta te devuelve al centro.",
    "Sostener una pausa real de 10 minutos al día con preguntas guiadas que ordenan tu cabeza.",
    "Tener un mapa físico en papel y 8 clases estructuradas a las que volver de por vida.",
    "Tomar decisiones con más claridad, límites sanos y una voz interna más amable.",
  ],
} as const;

export const PACK_PIECES = [
  {
    step: "01",
    role: "Entender en papel",
    title: "Guía integral de transformación",
    subtitle: "Edición impresa · 80 páginas · Envío a tu casa en España",
    outcome:
      "Para silenciar la mente crítica y ordenar tus emociones con ejercicios claros lejos de las pantallas.",
    image: "/images/products/guide-front.webp",
    imageAlt: "Portada oficial de la Guía integral de transformación (edición impresa)",
    description:
      "El mapa físico para leer despacio, subrayar y conservar. Reúne inteligencia emocional aplicada, autoestima, rueda de la vida y prácticas paso a paso.",
    highlights: [
      "80 páginas en edición impresa para leer, escribir y volver a ellas",
      "Rueda de la vida, mindfulness y ejercicios contra el crítico interno",
      "Envío físico directo a cualquier dirección de España",
    ],
    badge: "Edición física · España",
  },
  {
    step: "02",
    role: "Sostener cada día",
    title: "Agenda de reflexión para la sanación emocional",
    subtitle: "Formato digital · PDF interactivo e imprimible · Un rato al día",
    outcome:
      "Para convertir la claridad en un hábito amable de 10 minutos al día, sin exigirte perfección.",
    image: "/images/products/agenda-front.webp",
    imageAlt: "Portada oficial de la Agenda de reflexiones para la sanación emocional",
    description:
      "Un espacio íntimo para bajar el ruido mental mañana y noche. Preguntas guiadas, diario de gratitud y prácticas breves de autocompasión.",
    highlights: [
      "Rituales breves de mañana y noche adaptables a tu ritmo real",
      "Preguntas de claridad emocional y seguimiento de autoestima",
      "Descarga digital inmediata para tablet, móvil o imprimir en casa",
    ],
    badge: "Acceso digital hoy",
  },
  {
    step: "03",
    role: "Transformar de raíz",
    title: "Emulsión Energética · Formación en Mitra",
    subtitle: "8 clases completas + 6 materiales tácticos · Acceso de por vida",
    outcome:
      "Para dejar de ir a remolque de tus emociones y tener un protocolo real en los días de bajón.",
    image: "/images/ainara-portrait.webp",
    imageAlt: "Ainara Unamunzaga, creadora de Emulsión Energética en Mitra",
    description:
      "La formación que une neurociencia, psicología y las ocho leyes universales en un sistema ordenado de regulación emocional. Sin positivismo tóxico ni promesas vacías.",
    highlights: [
      "8 clases estructuradas dentro de la plataforma Mitra, para siempre",
      "Incluye 6 materiales tácticos: Auditoría Mental, Reto de 9 Días y Termómetro Emocional",
      "Protocolo de Anclaje de 5 pasos + Audio terapéutico bonus",
    ],
    badge: "Formación en Mitra",
  },
] as const;

export const FIT_CHECK = {
  yes: [
    "Quieres llegar a enero con calma mental y un sistema práctico, no con otro propósito vacío.",
    "Prefieres claridad, psicología aplicada y pasos concretos antes que frases motivadoras vacías.",
    "Puedes dedicar un rato al día (10–15 minutos) a escucharte y avanzar a tu propio ritmo.",
    "Vives en España (o quieres enviarlo como regalo a una dirección en España).",
  ],
  no: [
    "Buscas una solución mágica de la noche a la mañana sin implicarte en tu proceso.",
    "Quieres solo motivación pasajera en vez de herramientas que puedas sostener en los días difíciles.",
    "Necesitas envío físico fuera de España en esta campaña (el envío impreso es solo para España).",
  ],
} as const;

export const VALUE_STACK_ITEMS = [
  {
    name: "Guía integral de transformación (edición impresa · 80 págs.)",
    detail: "Libro físico + envío a tu domicilio en España",
    tag: "Físico · España",
  },
  {
    name: "Agenda de reflexión para la sanación emocional (digital)",
    detail: "PDF interactivo + listo para imprimir · empieza hoy mismo",
    tag: "Digital inmediato",
  },
  {
    name: "Formación Emulsión Energética en Mitra (8 clases)",
    detail: "Acceso de por vida desde móvil, tablet u ordenador",
    tag: "De por vida",
  },
  {
    name: "Bonus · 6 materiales tácticos + Audio terapéutico",
    detail: "Auditoría Mental, Termómetro Emocional, Reto 9 Días y Protocolo de Anclaje",
    tag: "Bonus incluido",
  },
] as const;

export const PACK_TESTIMONIALS = [
  {
    quote:
      "La estructura de la guía me ayudó a entender qué me estaba pasando y a sentirme mucho más en control.",
    name: "María G.",
    result: "Recuperó claridad y autoestima",
    piece: "Guía integral",
  },
  {
    quote:
      "Esta agenda se ha convertido en mi momento favorito del día. Escribir me ayuda a bajar la ansiedad y a entenderme mejor.",
    name: "Sofía T.",
    result: "Encontró su calma diaria",
    piece: "Agenda de reflexión",
  },
  {
    quote:
      "Es la primera formación que me da estructura de verdad. Dejé de buscar frases motivadoras y empecé a tener un protocolo para los días malos.",
    name: "Nuria B.",
    result: "Completó las 8 clases en Mitra",
    piece: "Emulsión Energética",
  },
  {
    quote:
      "Dejé de vivir en piloto automático. Los ejercicios son simples pero muy profundos, y me siento mucho más conectada conmigo misma.",
    name: "Carolina M.",
    result: "Mejoró su diálogo interno",
    piece: "Agenda de reflexión",
  },
  {
    quote:
      "El termómetro emocional lo tengo impreso en la nevera. Saber en qué grado estoy y qué acción toca me ha quitado muchísima ansiedad.",
    name: "Paula R.",
    result: "Aplica el protocolo de anclaje",
    piece: "Emulsión Energética",
  },
  {
    quote:
      "Dejé de luchar contra mi ansiedad y empecé a escucharla. Eso cambió por completo mi forma de vivir el día a día.",
    name: "Carlos R.",
    result: "Gestiona mejor su ansiedad",
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
    question: "¿Cuánto tiempo necesito al día para sacarle partido?",
    answer:
      "Está diseñado para vidas reales, no para acumular PDF. Con 10–15 minutos al día para tu Agenda de reflexión y una clase a tu ritmo en Mitra empezarás a notar orden mental desde la primera semana.",
  },
  {
    question: "¿Cómo y dónde se envía la Guía integral impresa?",
    answer:
      "Realizamos envíos exclusivamente a España. Durante el pago en Stripe te pediremos tu dirección postal y teléfono de contacto para coordinar la entrega de tu ejemplar impreso de 80 páginas.",
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
      "Tienes 7 días de garantía sin preguntas. Si al entrar y revisar el material sientes que no es lo que necesitas en este momento, me escribes y gestionamos la devolución con total tranquilidad.",
  },
  {
    question: "¿El pago con Stripe es seguro?",
    answer:
      "Sí, 100%. El cobro se realiza directamente en la pasarela oficial de Stripe con cifrado SSL y autenticación reforzada (SCA / 3D Secure). Puedes pagar con tarjeta, Apple Pay o Google Pay.",
  },
] as const;
