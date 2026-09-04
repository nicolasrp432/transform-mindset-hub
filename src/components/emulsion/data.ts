import {
  Brain,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import type { FaqItem, IconItem, Testimonial } from "@/components/landing";

export const LESSONS = [
  {
    title: "Ley del Mentalismo (El Origen de la Experiencia)",
    focus:
      "La mente no es un receptor pasivo, es la matriz. Diferencia entre Espíritu (mente consciente) y Alma (mente inconsciente).",
    key: "El conflicto nace cuando el espíritu adopta miedos y culpas que no resuenan con el propósito del alma.",
  },
  {
    title: "El Mapa de Tu Energía (Los Arquetipos)",
    focus:
      "Los 12 arquetipos zodiacales como psicología evolutiva para aterrizar la teoría en identidad.",
    key: "Comprender el Héroe interior: la vida te rompe para liberar tu energía auténtica.",
  },
  {
    title: "Ley de la Correspondencia (El Espejo de la Realidad)",
    focus:
      "Del victimismo a la maestría: lo exterior revela con precisión lo que necesita sanarse.",
    key: "Ordenar el plano físico inferior para reconfigurar el plano mental superior.",
  },
  {
    title: "Ley de la Vibración (La Frecuencia de tu Realidad)",
    focus:
      "Fusión de hermetismo con física térmica. La emoción define la realidad que sintonizas.",
    key: "Acciones tácticas para subir la vibración: ira = escribir sin filtro, miedo = acción inmediata.",
  },
  {
    title: "Ley de la Polaridad (La Escala de tus Emociones)",
    focus:
      "El arte de la transmutación mental: amor y odio son la misma energía en distintos grados.",
    key: "Deslizarse conscientemente por la escala emocional, un grado a la vez.",
  },
  {
    title: "Ley del Ritmo (El Péndulo de la Vida)",
    focus:
      "Erradicar la culpa del retroceso: los bajones son parte del péndulo natural.",
    key: "Protocolo de válvula emocional y reglas de altitud: no decidir en el bajón.",
  },
  {
    title: "Ley de Causa y Efecto (De Víctima a Creador)",
    focus: "Responsabilidad radical: el karma es ley natural, no castigo.",
    key: "El espacio de libertad de Viktor Frankl: pausa consciente entre estímulo y respuesta.",
  },
  {
    title: "Ley de la Generación (El Arte de Crear tu Realidad)",
    focus:
      "Integración del sistema nervioso: energía femenina y masculina como fuerzas creadoras.",
    key: "Equilibrio entre sentir/recibir y actuar/estructurar para evitar caos o rigidez.",
  },
] as const;

export const RESOURCES: readonly IconItem[] = [
  {
    icon: Brain,
    title: "Auditoría Mental (PDF)",
    text: "Plantilla para distinguir la energía del alma y la energía adquirida.",
  },
  {
    icon: Target,
    title: "Reto de los 9 Días",
    text: "Limpieza física, erradicación de quejas y ruptura de bucles mentales.",
  },
  {
    icon: Zap,
    title: "Termómetro Emocional (PDF)",
    text: "Escala de vibración con acciones físicas para transmutar emociones.",
  },
  {
    icon: HeartHandshake,
    title: "Protocolo de Anclaje de 5 Pasos",
    text: "Rutina específica para los días de bajón y recalibración emocional.",
  },
  {
    icon: Sparkles,
    title: "Audio Terapéutico Bonus",
    text: "Guía breve para frenar el péndulo emocional con un mantra de centro.",
  },
  {
    icon: CheckCircle2,
    title: "Guía de Activación de Energías",
    text: "Checklist diario para equilibrar energía femenina y masculina.",
  },
];

export const PAIN_POINTS: readonly IconItem[] = [
  {
    icon: Zap,
    title: "Vas a remolque de tus emociones",
    text: "Un mal día te descoloca la semana entera y sientes que no controlas cuándo llega ni cuánto dura.",
  },
  {
    icon: Target,
    title: "Sabes mucho y aplicas poco",
    text: "Has leído, escuchado y probado de todo, pero te falta un método ordenado que sostenga el avance.",
  },
  {
    icon: Brain,
    title: "Te repites los mismos bucles",
    text: "Cambias de trabajo, de pareja o de ciudad y el patrón vuelve a aparecer con otra cara.",
  },
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "Es la primera formación que me da estructura de verdad. Dejé de buscar frases motivadoras y empecé a tener un protocolo para los días malos.",
    name: "Nuria B.",
    role: "Completó las 8 lecciones",
    stars: 5,
  },
  {
    quote:
      "El termómetro emocional lo tengo impreso en la nevera. Saber en qué grado estoy y qué acción toca me ha quitado muchísima ansiedad.",
    name: "Paula R.",
    role: "Aplicó el protocolo de anclaje",
    stars: 5,
  },
];

export const FAQ: readonly FaqItem[] = [
  {
    question: "¿Necesito saber de leyes universales o espiritualidad?",
    answer:
      "No. La formación parte de cero y traduce cada ley a psicología, neurociencia y acciones concretas. No hay positivismo tóxico ni promesas milagro.",
  },
  {
    question: "¿En qué se diferencia de Re-Conéctate?",
    answer:
      "Re-Conéctate trabaja tu relación contigo misma y tu autoestima. Emulsión Energética es la capa de arriba: el mapa completo para regular tus emociones y sostener decisiones. Puedes hacerlas en cualquier orden, y dentro de Mitra tienes las dos.",
  },
  {
    question: "¿Cuánto tiempo necesito?",
    answer:
      "Son 8 lecciones y seis materiales descargables, con acceso de por vida. La mayoría avanza a razón de una lección por semana, pero puedes ir a tu ritmo.",
  },
  {
    question: "¿Cómo accedo después de pagar?",
    answer:
      "Recibirás por correo tus datos de acceso a la plataforma, donde están la formación y todos los materiales descargables.",
  },
  {
    question: "¿Y si no es para mí?",
    answer:
      "Tienes 7 días de garantía desde la compra. Si sientes que no es lo que esperabas, te devolvemos la inversión completa.",
  },
];
