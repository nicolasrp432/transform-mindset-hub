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

/** Cifras grandes que sustituyen párrafos: se leen en un segundo. */
export const PACK_STATS = [
  { value: "80", unit: "págs.", label: "Guía impresa en tu casa" },
  { value: "10", unit: "min", label: "Al día con tu Agenda" },
  { value: "8", unit: "clases", label: "Formación en Mitra" },
  { value: "6", unit: "extras", label: "Materiales tácticos" },
] as const;

export const PACK_PIECES = [
  {
    step: "01",
    role: "Entender",
    title: "Guía integral de transformación",
    format: "Impresa · 80 págs. · Envío España",
    outcome: "Silencia al crítico interno con ejercicios en papel, lejos de las pantallas.",
    highlights: ["Rueda de la vida", "Autoestima aplicada", "Prácticas paso a paso"],
    image: "/images/products/guide-front.webp",
    imageAlt: "Portada de la Guía integral de transformación (edición impresa)",
  },
  {
    step: "02",
    role: "Sostener",
    title: "Agenda de reflexión",
    format: "Digital · PDF imprimible · Hoy mismo",
    outcome: "Una pausa de 10 minutos al día que ordena tu cabeza sin exigirte perfección.",
    highlights: ["Rituales mañana y noche", "Preguntas guiadas", "Diario de gratitud"],
    image: "/images/products/agenda-front.webp",
    imageAlt: "Portada de la Agenda de reflexiones para la sanación emocional",
  },
  {
    step: "03",
    role: "Transformar",
    title: "Emulsión Energética",
    format: "8 clases en Mitra · Acceso de por vida",
    outcome: "Un protocolo real para los días de bajón: neurociencia, psicología y las 8 leyes.",
    highlights: ["Protocolo de anclaje", "Termómetro emocional", "Audio terapéutico"],
    image: "/images/ainara-seated.webp",
    imageAlt: "Ainara Unamunzaga, creadora de Emulsión Energética",
  },
] as const;

/** Páginas reales para el carrusel «Por dentro». */
export const INSIDE_PAGES = [
  { src: "/images/products/guide-page-15.webp", label: "Guía", page: "p. 15" },
  { src: "/images/products/agenda-page-10.webp", label: "Agenda", page: "Hábitos" },
  { src: "/images/products/guide-page-7.webp", label: "Guía", page: "p. 7" },
  { src: "/images/products/agenda-page-9.webp", label: "Agenda", page: "Enero" },
  { src: "/images/products/guide-page-16.webp", label: "Guía", page: "p. 16" },
  { src: "/images/products/agenda-page-11.webp", label: "Agenda", page: "Reflexión" },
  { src: "/images/products/guide-page-8.webp", label: "Guía", page: "p. 8" },
] as const;

export const SHIFTS = [
  { from: "Una mente que no para", to: "Calma en 10 minutos" },
  { from: "Propósitos que abandonas", to: "Un hábito que sostienes" },
  { from: "Teoría que no aplicas", to: "Un protocolo para los días malos" },
] as const;

export const VALUE_STACK_ITEMS = [
  { name: "Guía integral impresa", detail: "80 págs. + envío a España", tag: "Físico" },
  { name: "Agenda de reflexión", detail: "PDF interactivo e imprimible", tag: "Digital" },
  { name: "Emulsión Energética", detail: "8 clases en Mitra", tag: "De por vida" },
  { name: "6 materiales + audio", detail: "Auditoría, Termómetro, Reto 9 días…", tag: "Bonus" },
] as const;

export const PACK_TESTIMONIALS = [
  {
    quote: "La estructura de la guía me ayudó a entender qué me pasaba y a sentirme en control.",
    name: "María G.",
    piece: "Guía integral",
  },
  {
    quote: "Esta agenda es mi momento favorito del día. Escribir me baja la ansiedad.",
    name: "Sofía T.",
    piece: "Agenda",
  },
  {
    quote: "La primera formación que me da estructura de verdad. Ahora tengo un protocolo para los días malos.",
    name: "Nuria B.",
    piece: "Emulsión Energética",
  },
  {
    quote: "El termómetro emocional lo tengo en la nevera. Saber qué toca me ha quitado muchísima ansiedad.",
    name: "Paula R.",
    piece: "Emulsión Energética",
  },
  {
    quote: "Dejé de vivir en piloto automático. Ejercicios simples, pero muy profundos.",
    name: "Carolina M.",
    piece: "Agenda",
  },
  {
    quote: "Dejé de luchar contra mi ansiedad y empecé a escucharla. Cambió mi día a día.",
    name: "Carlos R.",
    piece: "Guía integral",
  },
] as const;

export const PURCHASE_STEPS = [
  { title: "Pagas en Stripe", text: "Pago único de 89 €. 30 segundos." },
  { title: "Empiezas hoy", text: "Agenda digital y acceso a Mitra al instante." },
  { title: "Recibes la guía", text: "Tu ejemplar impreso llega a casa (España)." },
] as const;

export const PACK_FAQ = [
  {
    question: "¿Hasta cuándo está la oferta?",
    answer:
      "Del 27 al 30 de noviembre, hasta las 23:59 (hora peninsular). Después el pack vuelve a 159 €.",
  },
  {
    question: "¿Cuánto tiempo necesito al día?",
    answer:
      "10–15 minutos con tu Agenda y una clase de Mitra a tu ritmo. Notarás orden mental desde la primera semana.",
  },
  {
    question: "¿Cómo se envía la guía impresa?",
    answer:
      "Solo enviamos a España. En el pago te pedimos dirección y teléfono para coordinar la entrega.",
  },
  {
    question: "¿Cuándo tengo la Agenda y la formación?",
    answer:
      "Nada más pagar. Recibes las instrucciones de acceso a la Agenda digital y a las 8 clases en Mitra sin esperar al envío.",
  },
  {
    question: "¿Es un pago único?",
    answer:
      "Sí: 89 € IVA incluido. Sin cuotas ni renovaciones. El acceso a Mitra y a la Agenda es para siempre.",
  },
  {
    question: "¿Puedo regalarlo?",
    answer:
      "Claro. Pon la dirección de envío en España durante el pago o escríbeme por WhatsApp para personalizar el acceso a Mitra.",
  },
  {
    question: "¿Y si no es para mí?",
    answer:
      "Tienes 7 días de garantía sin preguntas. Me escribes y gestionamos la devolución con total tranquilidad.",
  },
] as const;
