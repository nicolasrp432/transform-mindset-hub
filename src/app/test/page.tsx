"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  ExternalLink,
  Lock,
  MessageCircle,
  RotateCcw,
  Share2,
  Sparkles,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

/* ============================================================
   CONFIGURACIÓN Y CONTACTOS REALES
   ============================================================ */
const CONFIG = {
  instagram: "ainaracoach",
  whatsappNumber: "34692627353",
  calendlyUrl: "https://calendly.com/ainaracoachpnl/reunion-con-ainara",
  platformLoginUrl: "https://v0-plataforma-ainara.vercel.app/login",
  puertas: {
    SESION: {
      palabra: "SESIÓN",
      ref: "mapa_sesion",
      tit: "Una sesión 1:1 con Ainara",
      desc: "Para algo concreto que te pesa ahora. En privado, online o presencial, sin prisa y sin tener que contar nada que no quieras.",
      actionLabel: "Agendar sesión 1:1",
      href: "/sesiones",
    },
    MITRA: {
      palabra: "MITRA",
      ref: "mapa_mitra",
      tit: "Mitra · Membresía & Plataforma",
      desc: "Un sitio al que volver cada semana: ejercicios de diez o quince minutos para momentos concretos y una comunidad donde nadie te juzga. Incluye la rueda de la vida completa para ver cómo se mueve tu mapa cada mes.",
      actionLabel: "Acceder a la plataforma",
      href: "https://v0-plataforma-ainara.vercel.app/login",
    },
    CIFRA: {
      palabra: "CIFRA",
      ref: "mapa_cifra",
      tit: "El ejercicio de la cifra",
      desc: "Gratis, tres pasos, cinco minutos. Te enseña qué frase inconsciente está poniendo tus precios y tu relación con el dinero. Es por donde empieza casi todo.",
      actionLabel: "Pedir el ejercicio gratis",
      href: "/herramientas",
    },
    LIBRO: {
      palabra: "LIBRO",
      ref: "mapa_libro",
      tit: "El libro de Ainara",
      desc: "«Si la princesa se despierta»: para entender el patrón vincular a tu ritmo, con claridad profunda y sin tener que exponerte.",
      actionLabel: "Conocer el libro",
      href: "/libro-princesa",
    },
  },
};

/* ============================================================
   DATOS DEL TEST: 5 ÁREAS + INTENCIÓN
   ============================================================ */
interface AreaInfo {
  n: string;
  art: string;
  reenc: string;
  cuerpo: string;
}

const AREAS: Record<string, AreaInfo> = {
  dinero: {
    n: "Dinero",
    art: "el dinero",
    reenc: "No es mala gestión. Es la cifra que te crees capaz de sostener.",
    cuerpo:
      "Lo que cobras, lo que te dura y la culpa al gastar suelen tener la misma raíz: una frase sobre el dinero que aprendiste en casa y que sigue poniendo tus precios.",
  },
  amor: {
    n: "Amor",
    art: "el amor",
    reenc: "No es mala suerte. Es que tu cuerpo confunde lo familiar con lo seguro.",
    cuerpo:
      "Si la calma te parece sospechosa o aguantas más de lo que le aguantarías a una amistad, no eliges mal: vuelves a lo que conoces. Y eso tiene una historia.",
  },
  cuerpo: {
    n: "Cuerpo",
    art: "tu cuerpo",
    reenc: "No es falta de deseo. Es que tu cuerpo sigue en alerta.",
    cuerpo:
      "Con la cabeza a mil, el cuerpo no siente. Y pedir lo que te gusta da más vergüenza que desnudarse. Las dos cosas tienen que ver con cómo te ves, no con la fuerza de voluntad.",
  },
  trabajo: {
    n: "Trabajo",
    art: "el trabajo",
    reenc: "No es que no estés a la altura. Es que el éxito todavía no te parece tuyo.",
    cuerpo:
      "Cuando algo funciona y te distraes, o piensas que ha sido suerte, no es modestia: es miedo a brillar. Y suele aparecer justo la semana que te va mejor.",
  },
  contigo: {
    n: "Contigo",
    art: "cómo te hablas",
    reenc: "No es falta de disciplina. Es la voz con la que te hablas.",
    cuerpo:
      "La voz que te corrige cuando te equivocas decide cuánto pides, cuánto aguantas y cuánto te permites. Y casi nunca es tuya: es aprendida.",
  },
};

const ORDEN = ["dinero", "amor", "cuerpo", "trabajo", "contigo"] as const;

interface Question {
  a: string;
  t: string;
  p?: string;
  ops: [string, number | string][];
}

const PREGUNTAS: Question[] = [
  {
    a: "dinero",
    t: "Tienes que decir tu precio o pedir un aumento. ¿Qué haces?",
    ops: [
      ["Lo digo sin más", 3],
      ["Lo digo, pero lo justifico", 2],
      ["Lo bajo antes de que me lo pidan", 1],
      ["Prefiero que lo diga otra persona", 0],
    ],
  },
  {
    a: "dinero",
    t: "A los pocos días de cobrar…",
    ops: [
      ["Sé dónde está y me sienta bien", 3],
      ["Voy justo, pero con calma", 2],
      ["No sé en qué se me ha ido", 1],
      ["Siento prisa por gastarlo o culpa por tenerlo", 0],
    ],
  },
  {
    a: "amor",
    t: "Alguien te trata bien, sin drama. Lo primero que sientes es…",
    p: "Si ahora no tienes pareja, piensa en la última vez.",
    ops: [
      ["Que estoy en casa", 3],
      ["Que me cuesta creérmelo", 2],
      ["Que espero el momento en que cambie", 1],
      ["Que me aburro", 0],
    ],
  },
  {
    a: "amor",
    t: "Lo que aguantas en pareja, comparado con lo que le aguantarías a una amistad:",
    ops: [
      ["Lo mismo", 3],
      ["Un poco más", 2],
      ["Bastante más", 1],
      ["Prefiero no pensarlo", 0],
    ],
  },
  {
    a: "cuerpo",
    t: "Al final del día, tu cuerpo…",
    ops: [
      ["Está aquí, conmigo", 3],
      ["Tarda en bajar el ritmo", 2],
      ["Sigue en alerta", 1],
      ["La cabeza a mil y el cuerpo en ninguna parte", 0],
    ],
  },
  {
    a: "cuerpo",
    t: "Decir «esto me gusta así» en la intimidad…",
    ops: [
      ["Me sale natural", 3],
      ["Me cuesta, pero lo digo", 2],
      ["Prefiero que lo adivinen", 1],
      ["Ni me lo planteo", 0],
    ],
  },
  {
    a: "trabajo",
    t: "Cuando algo te sale bien…",
    ops: [
      ["Lo disfruto", 3],
      ["Lo celebro poco y sigo", 2],
      ["Pienso que ha sido suerte", 1],
      ["Espero que nadie note que no es para tanto", 0],
    ],
  },
  {
    a: "trabajo",
    t: "La semana que mejor te va en el trabajo…",
    ops: [
      ["Todo va bien también en casa", 3],
      ["Me cuesta desconectar", 2],
      ["Me distraigo justo cuando funciona", 1],
      ["Discuto más o lo estropeo de alguna forma", 0],
    ],
  },
  {
    a: "contigo",
    t: "Cuando te equivocas, la voz de dentro…",
    ops: [
      ["Me habla como a una amistad", 3],
      ["Me exige un poco", 2],
      ["Me repite que siempre igual", 1],
      ["Es la más dura que conozco", 0],
    ],
  },
  {
    a: "contigo",
    t: "Pedir ayuda…",
    ops: [
      ["Lo hago cuando lo necesito", 3],
      ["Me cuesta, pero lo hago", 2],
      ["Lo dejo para cuando ya no puedo más", 1],
      ["Prefiero arreglármelas sin nadie al lado", 0],
    ],
  },
  {
    a: "intencion",
    t: "Última. Ahora mismo, ¿qué te vendría mejor?",
    ops: [
      ["Entenderlo a mi ritmo", "ritmo"],
      ["Un sitio al que volver cada semana", "volver"],
      ["Hablarlo con alguien ya", "hablar"],
      ["Solo quería saber en qué punto estoy", "saber"],
    ],
  },
];

const LETRAS = ["A", "B", "C", "D"];

function nivel(v: number): string {
  if (v >= 5) return "En calma";
  if (v >= 3) return "Con ruido";
  if (v >= 1) return "Pesa";
  return "Pide atención";
}

function decidePuerta(
  scores: Record<string, number>,
  foco: string,
  intencion: string
) {
  const media =
    ORDEN.reduce((total, a) => total + scores[a], 0) / 30;
  const enCalma = scores[foco] >= 5;
  let p: keyof typeof CONFIG.puertas = "MITRA";
  let alt: keyof typeof CONFIG.puertas | null = null;

  if (enCalma) {
    p = intencion === "hablar" ? "SESION" : "MITRA";
  } else if (intencion === "hablar") {
    p = "SESION";
    alt = foco === "cuerpo" ? null : "MITRA";
  } else if (foco === "cuerpo") {
    p = "SESION";
  } else if (media < 0.3) {
    p = "SESION";
    alt = foco === "dinero" ? "CIFRA" : "MITRA";
  } else if (intencion === "volver") {
    p = "MITRA";
    alt = "SESION";
  } else if (foco === "dinero") {
    p = "CIFRA";
    alt = "MITRA";
  } else if (foco === "amor") {
    p = "LIBRO";
    alt = "MITRA";
  } else {
    p = "MITRA";
    alt = "SESION";
  }

  if (alt === p) alt = null;
  return { p, alt, media, enCalma };
}

/* ============================================================
   CANVAS GENERATOR: FICHA DE RESULTADOS EN ALTA RESOLUCIÓN
   ============================================================ */
async function generateResultCardBlob(
  scores: Record<string, number>,
  foco: string,
  media: number,
  fecha: string
): Promise<{ blob: Blob; dataUrl: string }> {
  const width = 1080;
  const height = 1440;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Canvas context not available");

  // 1. Fondo elegante Pergamino Claro
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, "#FBF9F7");
  bgGrad.addColorStop(1, "#F3EFEA");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Textura sutil y marco exterior
  ctx.strokeStyle = "#D0C4B0";
  ctx.lineWidth = 3;
  ctx.strokeRect(36, 36, width - 72, height - 72);

  ctx.strokeStyle = "rgba(111, 78, 53, 0.12)";
  ctx.lineWidth = 1;
  ctx.strokeRect(48, 48, width - 96, height - 96);

  // 2. Encabezado de Marca
  ctx.textAlign = "center";
  ctx.fillStyle = "#8A8070";
  ctx.font = "600 22px 'Inter', sans-serif";
  ctx.fillText("AUTOEVALUACIÓN DE CLARIDAD · MAPA VITAL", width / 2, 105);

  ctx.fillStyle = "#2E2B28";
  ctx.font = "500 58px 'Cormorant Garamond', serif";
  ctx.fillText("Ainara Unamunzaga", width / 2, 175);

  ctx.fillStyle = "#6F4E35";
  ctx.font = "italic 500 26px 'Cormorant Garamond', serif";
  ctx.fillText("Inteligencia Emocional & PNL · @ainaracoach", width / 2, 218);

  // Línea divisoria
  ctx.beginPath();
  ctx.moveTo(120, 250);
  ctx.lineTo(width - 120, 250);
  ctx.strokeStyle = "#E5DFD9";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // 3. Resumen y Fecha
  ctx.fillStyle = "#8A8070";
  ctx.font = "500 22px 'Inter', sans-serif";
  ctx.fillText(`Diagnóstico · ${fecha}`, width / 2, 295);

  const pct = Math.round(media * 100);
  ctx.fillStyle = "#2E2B28";
  ctx.font = "600 42px 'Cormorant Garamond', serif";
  ctx.fillText(`Estado general: ${pct}% en calma`, width / 2, 345);

  const areaFoco = AREAS[foco]?.n || foco;
  ctx.fillStyle = "#6F4E35";
  ctx.font = "600 26px 'Inter', sans-serif";
  ctx.fillText(`Área prioritaria que tira de las demás: ${areaFoco.toUpperCase()}`, width / 2, 390);

  // 4. Dibujo del Radar Chart
  const cx = width / 2;
  const cy = 620;
  const R = 175;
  const n = ORDEN.length;

  const getPt = (k: number, r: number): [number, number] => {
    const ang = -Math.PI / 2 + (k * 2 * Math.PI) / n;
    return [cx + Math.cos(ang) * r, cy + Math.sin(ang) * r];
  };

  // Anillos concéntricos
  [0.25, 0.5, 0.75, 1].forEach((factor) => {
    ctx.beginPath();
    ORDEN.forEach((_, k) => {
      const [x, y] = getPt(k, R * factor);
      if (k === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = factor === 1 ? "rgba(111,78,53,0.3)" : "rgba(111,78,53,0.12)";
    ctx.lineWidth = factor === 1 ? 2 : 1;
    ctx.stroke();
  });

  // Ejes radiales
  ORDEN.forEach((_, k) => {
    const [x, y] = getPt(k, R);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "rgba(111,78,53,0.14)";
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Polígono de datos del usuario
  const pts = ORDEN.map((a, k) => {
    const score = scores[a] || 0;
    const factor = Math.max(0.12, score / 6);
    return getPt(k, R * factor);
  });

  ctx.beginPath();
  pts.forEach(([x, y], k) => {
    if (k === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(111, 78, 53, 0.22)";
  ctx.fill();
  ctx.strokeStyle = "#6F4E35";
  ctx.lineWidth = 4;
  ctx.stroke();

  // Puntos y Etiquetas
  ORDEN.forEach((a, k) => {
    const [x, y] = pts[k];
    const isFoco = a === foco;

    // Punto
    ctx.beginPath();
    ctx.arc(x, y, isFoco ? 9 : 6, 0, Math.PI * 2);
    ctx.fillStyle = isFoco ? "#6F4E35" : "#FFFFFF";
    ctx.fill();
    ctx.strokeStyle = "#6F4E35";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Etiqueta
    const [lx, ly] = getPt(k, R + 42);
    ctx.textAlign = "center";
    ctx.font = isFoco ? "700 22px 'Inter', sans-serif" : "600 20px 'Inter', sans-serif";
    ctx.fillStyle = isFoco ? "#6F4E35" : "#2E2B28";
    ctx.fillText(`${AREAS[a].n.toUpperCase()} (${scores[a]}/6)`, lx, ly);
  });

  // 5. Desglose detallado inferior
  let rowY = 880;
  ctx.textAlign = "left";

  ORDEN.forEach((a) => {
    const score = scores[a] || 0;
    const isFoco = a === foco;
    const estado = nivel(score);

    // Fondo fila sutil si es foco
    if (isFoco) {
      ctx.fillStyle = "rgba(111, 78, 53, 0.08)";
      ctx.fillRect(100, rowY - 26, width - 200, 52);
    }

    // Nombre
    ctx.font = isFoco ? "700 24px 'Inter', sans-serif" : "500 22px 'Inter', sans-serif";
    ctx.fillStyle = isFoco ? "#6F4E35" : "#2E2B28";
    ctx.fillText(AREAS[a].n, 120, rowY + 6);

    // Barra
    const barWidth = 440;
    const barX = 320;
    ctx.fillStyle = "#E5DFD9";
    ctx.fillRect(barX, rowY - 6, barWidth, 12);

    ctx.fillStyle = isFoco ? "#6F4E35" : "#8A8070";
    ctx.fillRect(barX, rowY - 6, Math.max(12, (score / 6) * barWidth), 12);

    // Puntuación y Estado
    ctx.textAlign = "right";
    ctx.font = isFoco ? "700 22px 'Inter', sans-serif" : "500 20px 'Inter', sans-serif";
    ctx.fillStyle = isFoco ? "#6F4E35" : "#6B6560";
    ctx.fillText(`${estado} (${score}/6)`, width - 120, rowY + 6);
    ctx.textAlign = "left";

    rowY += 62;
  });

  // 6. Pie de Página y Contacto
  ctx.beginPath();
  ctx.moveTo(120, 1250);
  ctx.lineTo(width - 120, 1250);
  ctx.strokeStyle = "#E5DFD9";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = "#2E2B28";
  ctx.font = "500 24px 'Cormorant Garamond', serif";
  ctx.fillText("Ainara · Acompañamiento en Claridad y Gestión Emocional", width / 2, 1295);

  ctx.fillStyle = "#8A8070";
  ctx.font = "400 18px 'Inter', sans-serif";
  ctx.fillText("Haz tu test en ainara.coach/test · WhatsApp: +34 692 62 73 53", width / 2, 1335);

  ctx.fillStyle = "#6F4E35";
  ctx.font = "600 17px 'Inter', sans-serif";
  ctx.fillText("100% privado y confidencial", width / 2, 1370);

  const dataUrl = canvas.toDataURL("image/png");
  const blob = await new Promise<Blob>((resolve) =>
    canvas.toBlob((b) => resolve(b || new Blob()), "image/png")
  );

  return { blob, dataUrl };
}

/* ============================================================
   COMPONENTE PRINCIPAL
   ============================================================ */
export default function TestPage() {
  const [screen, setScreen] = useState<"intro" | "test" | "calc" | "result">("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | string>>({});
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [savedImageUrl, setSavedImageUrl] = useState<string | null>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  }, []);

  const handleSelectOption = (value: number | string) => {
    if (isAdvancing) return;
    setIsAdvancing(true);

    const nextAnswers = { ...answers, [step]: value };
    setAnswers(nextAnswers);

    setTimeout(() => {
      setIsAdvancing(false);
      if (step < PREGUNTAS.length - 1) {
        setStep(step + 1);
      } else {
        setScreen("calc");
        setTimeout(() => {
          setScreen("result");
        }, 1400);
      }
    }, 240);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setStep(0);
    setScreen("intro");
    setSavedImageUrl(null);
  };

  // Puntuaciones
  const scores: Record<string, number> = {
    dinero: 0,
    amor: 0,
    cuerpo: 0,
    trabajo: 0,
    contigo: 0,
  };

  PREGUNTAS.forEach((q, idx) => {
    if (q.a !== "intencion" && typeof answers[idx] === "number") {
      scores[q.a] += answers[idx] as number;
    }
  });

  const intencion = (answers[10] as string) || "saber";

  // Identificar el área foco (la que más pesa)
  const foco = [...ORDEN].sort(
    (a, b) =>
      scores[a] - scores[b] ||
      ["contigo", "trabajo", "dinero", "amor", "cuerpo"].indexOf(a) -
        ["contigo", "trabajo", "dinero", "amor", "cuerpo"].indexOf(b)
  )[0];

  const decision = decidePuerta(scores, foco, intencion);
  const infoFoco = AREAS[foco];
  const fechaStr = new Date().toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
  });

  // Construcción de texto para WhatsApp
  const whatsappSummaryText = `Hola Ainara, acabo de hacer el test «¿En qué punto estás?».

📊 Mi estado: ${Math.round(decision.media * 100)}% en calma
🎯 Lo que más tira de mí ahora: ${infoFoco.n} (${nivel(scores[foco])} - ${scores[foco]}/6)

Desglose de mis 5 áreas:
• Dinero: ${scores.dinero}/6 (${nivel(scores.dinero)})
• Amor: ${scores.amor}/6 (${nivel(scores.amor)})
• Cuerpo: ${scores.cuerpo}/6 (${nivel(scores.cuerpo)})
• Trabajo: ${scores.trabajo}/6 (${nivel(scores.trabajo)})
• Contigo: ${scores.contigo}/6 (${nivel(scores.contigo)})

Me gustaría hablar contigo sobre esto.`;

  const whatsappDirectUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    whatsappSummaryText
  )}`;

  // Función para compartir por WhatsApp con imagen
  const handleShareWhatsAppWithImage = async () => {
    setIsGeneratingImage(true);
    showToast("Generando tu ficha de resultados...");

    try {
      const { blob, dataUrl } = await generateResultCardBlob(
        scores,
        foco,
        decision.media,
        fechaStr
      );
      setSavedImageUrl(dataUrl);

      const file = new File([blob], "mapa-resultados-ainara.png", {
        type: "image/png",
      });

      // Si el navegador soporta compartir archivos nativamente (iOS Safari / Android Chrome)
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "Mi mapa · Ainara Unamunzaga",
          text: whatsappSummaryText,
          files: [file],
        });
        showToast("¡Listo! Elige WhatsApp para enviar la imagen a Ainara.");
      } else {
        // Fallback: Descarga la imagen en su móvil/ordenador y abre el WhatsApp con el texto
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = `mapa-ainara-${foco}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        showToast("¡Ficha descargada! Abriendo WhatsApp con Ainara...");
        setTimeout(() => {
          window.open(whatsappDirectUrl, "_blank", "noopener,noreferrer");
        }, 800);
      }
    } catch (err) {
      console.error("Error al compartir con imagen:", err);
      // Fallback a WhatsApp texto directo
      window.open(whatsappDirectUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // Función para solo descargar la imagen
  const handleDownloadOnlyImage = async () => {
    setIsGeneratingImage(true);
    try {
      const { dataUrl } = await generateResultCardBlob(
        scores,
        foco,
        decision.media,
        fechaStr
      );
      setSavedImageUrl(dataUrl);

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `mapa-ainara-${foco}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      showToast("Ficha guardada en tu dispositivo. Puedes adjuntarla en cualquier chat o subirla a historias.");
    } catch (err) {
      console.error(err);
      showToast("No se pudo generar la imagen.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  // Compartir test con amigos
  const handleShareTest = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://ainara.coach/test";
    const shareData = {
      title: "¿En qué punto estás? · Test de Ainara Unamunzaga",
      text: "Diez preguntas, dos minutos. Descubre qué parte de tu vida tira de las demás:",
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Ignorar cancelación
      }
    } else {
      await navigator.clipboard.writeText(url);
      showToast("Enlace del test copiado al portapapeles.");
    }
  };

  // Enlace a Instagram DM
  const handleInstagramDM = (palabra: string) => {
    navigator.clipboard.writeText(palabra);
    showToast(`Palabra «${palabra}» copiada. Pégala en el chat de Instagram.`);
    const igUrl = `https://ig.me/m/${CONFIG.instagram}`;
    window.open(igUrl, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [screen, step]);

  return (
    <div className="min-h-screen bg-[#F8F6F4] text-[#2E2B28] font-sans selection:bg-[#D0C4B0] selection:text-[#2E2B28] relative">
      {/* Fondo editorial con atmósfera de luz */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(208,196,176,0.25) 0%, transparent 70%), radial-gradient(ellipse 90% 60% at 50% 100%, rgba(111,78,53,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Contenedor centralizado para test */}
      <div className="max-w-[560px] mx-auto min-h-screen flex flex-col px-5 py-6 md:py-8">
        {/* Barra superior de marca minimalista */}
        <header className="flex items-center justify-between text-xs tracking-wider uppercase text-[#8A8070] font-semibold pb-4 border-b border-[#E5DFD9]">
          <Link
            href="/"
            className="hover:text-[#6F4E35] transition-colors flex items-center gap-2 group"
          >
            <span className="w-5 h-5 rounded-full bg-[#6F4E35] text-white flex items-center justify-center text-[10px] font-serif font-bold">
              a
            </span>
            <span>Ainara Unamunzaga</span>
          </Link>
          <span className="text-[#6F4E35] font-medium font-mono text-[11px]">
            @ainaracoach
          </span>
        </header>

        {/* ============================================================
            PANTALLA 1: INTRODUCCIÓN
           ============================================================ */}
        {screen === "intro" && (
          <motion.main
            key="intro"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col justify-between pt-10 pb-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4DC] text-[#6F4E35] text-[11px] font-semibold tracking-widest uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Autoevaluación Gratuita</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#2E2B28] mb-6">
                ¿En qué punto{" "}
                <em className="italic text-[#6F4E35] font-normal font-serif">estás?</em>
              </h1>

              <p className="text-[#6B6560] text-lg sm:text-xl leading-relaxed mb-8">
                Diez preguntas rápidas. Dos minutos. Al final descubres tu mapa vital
                y qué área de tu vida está tirando de las demás.
              </p>

              {/* Chips de las 5 áreas */}
              <div className="flex flex-wrap gap-2.5 mb-10" aria-label="Las cinco áreas analizadas">
                {ORDEN.map((areaKey) => (
                  <span
                    key={areaKey}
                    className="text-xs uppercase tracking-wider font-semibold px-3.5 py-1.5 rounded-full bg-white border border-[#E5DFD9] text-[#6B6560] shadow-xs"
                  >
                    {AREAS[areaKey].n}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <button
                type="button"
                onClick={() => {
                  setStep(0);
                  setScreen("test");
                }}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#6F4E35] text-white font-semibold text-lg shadow-md hover:bg-[#5A3E2A] active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <span>Empezar el test</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/70 border border-[#E5DFD9] text-[#8A8070] text-xs leading-relaxed">
                <Lock className="w-4 h-4 text-[#6F4E35] shrink-0 mt-0.5" />
                <span>
                  <strong>100% privado:</strong> Tus respuestas se procesan en tu
                  propio dispositivo y no se guardan en ningún servidor. No es un test
                  clínico, es un espejo honesto para avanzar.
                </span>
              </div>
            </div>
          </motion.main>
        )}

        {/* ============================================================
            PANTALLA 2: PREGUNTAS (1 A 11)
           ============================================================ */}
        {screen === "test" && (
          <motion.main
            key={`question-${step}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.28 }}
            className="flex-1 flex flex-col justify-between pt-6 pb-6"
          >
            <div>
              {/* Barra de progreso y botón atrás */}
              <div className="flex items-center gap-3 mb-8">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 0}
                  aria-label="Pregunta anterior"
                  className={`w-9 h-9 rounded-lg border border-[#E5DFD9] bg-white flex items-center justify-center transition-opacity ${
                    step === 0
                      ? "opacity-30 cursor-not-allowed"
                      : "hover:border-[#6F4E35] hover:text-[#6F4E35] cursor-pointer"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex-1 h-2 bg-[#E5DFD9] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#6F4E35] rounded-full"
                    initial={{ width: `${(step / PREGUNTAS.length) * 100}%` }}
                    animate={{ width: `${((step + 1) / PREGUNTAS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <span className="text-xs font-mono font-semibold text-[#8A8070] min-w-[44px] text-right">
                  {step + 1}/{PREGUNTAS.length}
                </span>
              </div>

              {/* Encabezado de la pregunta */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-[#6F4E35]">
                  {PREGUNTAS[step].a === "intencion"
                    ? "Para terminar"
                    : AREAS[PREGUNTAS[step].a]?.n}
                </span>

                <h2
                  ref={headingRef}
                  className="font-serif text-2xl sm:text-3xl leading-snug text-[#2E2B28] mt-2 text-balance"
                >
                  {PREGUNTAS[step].t}
                </h2>

                {PREGUNTAS[step].p && (
                  <p className="text-sm text-[#8A8070] italic mt-2">
                    {PREGUNTAS[step].p}
                  </p>
                )}
              </div>

              {/* Opciones */}
              <div className="space-y-3" role="radiogroup">
                {PREGUNTAS[step].ops.map(([opTexto, opValor], idx) => {
                  const isSelected = answers[step] === opValor;

                  return (
                    <button
                      key={idx}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => handleSelectOption(opValor)}
                      className={`w-full flex items-center gap-4 p-4 text-left rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#6F4E35] border-[#6F4E35] text-white shadow-md"
                          : "bg-white border-[#E5DFD9] text-[#2E2B28] hover:border-[#D0C4B0] hover:bg-[#FAF8F5] shadow-xs"
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? "bg-white text-[#6F4E35] border-white"
                            : "bg-[#F3EFEA] text-[#8A8070] border-[#E5DFD9]"
                        }`}
                      >
                        {isSelected ? (
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          LETRAS[idx]
                        )}
                      </span>
                      <span className="text-base sm:text-lg leading-snug">
                        {opTexto}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="text-center text-xs text-[#9C9590] pt-6">
              Toca la respuesta que más se acerque a tu verdad hoy.
            </p>
          </motion.main>
        )}

        {/* ============================================================
            PANTALLA 3: CALCULANDO (PULSO EDITORIAL)
           ============================================================ */}
        {screen === "calc" && (
          <motion.main
            key="calc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#6F4E35]/30"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="w-12 h-12 rounded-full bg-[#6F4E35] text-white flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2E2B28] mb-3">
              Dibujando tu{" "}
              <em className="italic text-[#6F4E35] font-serif">mapa…</em>
            </h2>
            <p className="text-[#6B6560] text-sm max-w-xs">
              Conectando el dinero, el amor, tu cuerpo, el trabajo y cómo te hablas.
            </p>
          </motion.main>
        )}

        {/* ============================================================
            PANTALLA 4: RESULTADO Y ACCIONES DE CONTACTO
           ============================================================ */}
        {screen === "result" && (
          <motion.main
            key="result"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-8 pt-8 pb-12"
          >
            {/* Título y Diagnóstico */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#8A8070] uppercase tracking-wider mb-2">
                <span>Tu Mapa Vital</span>
                <span>{fechaStr}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#2E2B28] leading-tight mb-3">
                {decision.enCalma ? (
                  <>
                    Tu mapa está{" "}
                    <em className="italic text-[#6F4E35] font-serif">en calma.</em>
                  </>
                ) : (
                  <>
                    Lo que tira de lo demás es{" "}
                    <em className="italic text-[#6F4E35] font-serif">
                      {infoFoco.art}.
                    </em>
                  </>
                )}
              </h2>

              <p className="text-[#6B6560] text-sm">
                Has completado la autoevaluación. Aquí tienes tu radiografía y las
                puertas exactas para avanzar a partir de este punto.
              </p>
            </div>

            {/* Radar Chart Interactivo en Light Mode */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD9] shadow-sm">
              <div className="flex justify-between items-baseline text-xs text-[#8A8070] font-semibold mb-2">
                <span className="uppercase tracking-wider">Cinco Áreas</span>
                <span className="text-[#6F4E35] font-bold">
                  {Math.round(decision.media * 100)}% en calma
                </span>
              </div>

              {/* SVG Radar */}
              <div className="relative w-full aspect-4/3 max-w-[420px] mx-auto">
                <svg
                  viewBox="-30 -20 440 340"
                  className="w-full h-full overflow-visible"
                  role="img"
                  aria-label="Mapa de radar en cinco áreas"
                >
                  {/* Círculos / Pentágonos concéntricos */}
                  {[0.25, 0.5, 0.75, 1].map((f, idx) => {
                    const cx = 190;
                    const cy = 150;
                    const R = 110;
                    const points = ORDEN.map((_, k) => {
                      const ang = -Math.PI / 2 + (k * 2 * Math.PI) / ORDEN.length;
                      return `${cx + Math.cos(ang) * R * f},${cy + Math.sin(ang) * R * f}`;
                    }).join(" ");

                    return (
                      <polygon
                        key={idx}
                        points={points}
                        fill="none"
                        stroke={f === 1 ? "rgba(111,78,53,0.3)" : "rgba(111,78,53,0.12)"}
                        strokeWidth={f === 1 ? "1.5" : "1"}
                      />
                    );
                  })}

                  {/* Radios desde el centro */}
                  {ORDEN.map((_, k) => {
                    const cx = 190;
                    const cy = 150;
                    const R = 110;
                    const ang = -Math.PI / 2 + (k * 2 * Math.PI) / ORDEN.length;
                    return (
                      <line
                        key={k}
                        x1={cx}
                        y1={cy}
                        x2={cx + Math.cos(ang) * R}
                        y2={cy + Math.sin(ang) * R}
                        stroke="rgba(111,78,53,0.14)"
                        strokeWidth="1"
                      />
                    );
                  })}

                  {/* Polígono de resultados */}
                  {(() => {
                    const cx = 190;
                    const cy = 150;
                    const R = 110;
                    const pts = ORDEN.map((a, k) => {
                      const ang = -Math.PI / 2 + (k * 2 * Math.PI) / ORDEN.length;
                      const factor = Math.max(0.12, scores[a] / 6);
                      return [cx + Math.cos(ang) * R * factor, cy + Math.sin(ang) * R * factor];
                    });

                    const polygonStr = pts.map((p) => p.join(",")).join(" ");

                    return (
                      <>
                        <polygon
                          points={polygonStr}
                          fill="rgba(111, 78, 53, 0.20)"
                          stroke="#6F4E35"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                        />
                        {pts.map(([x, y], k) => {
                          const isFoco = ORDEN[k] === foco;
                          return (
                            <circle
                              key={k}
                              cx={x}
                              cy={y}
                              r={isFoco ? 6 : 4}
                              fill={isFoco ? "#6F4E35" : "#FFFFFF"}
                              stroke="#6F4E35"
                              strokeWidth="2"
                            />
                          );
                        })}
                      </>
                    );
                  })()}

                  {/* Etiquetas de las áreas */}
                  {ORDEN.map((a, k) => {
                    const cx = 190;
                    const cy = 150;
                    const R = 110;
                    const ang = -Math.PI / 2 + (k * 2 * Math.PI) / ORDEN.length;
                    const lx = cx + Math.cos(ang) * (R + 28);
                    const ly = cy + Math.sin(ang) * (R + 28);
                    const isFoco = a === foco;

                    let anchor: "middle" | "start" | "end" = "middle";
                    if (Math.abs(lx - cx) > 15) {
                      anchor = lx > cx ? "start" : "end";
                    }

                    return (
                      <text
                        key={a}
                        x={lx}
                        y={ly + 4}
                        textAnchor={anchor}
                        className={`text-[11px] font-bold tracking-wider uppercase font-sans ${
                          isFoco ? "fill-[#6F4E35]" : "fill-[#2E2B28]"
                        }`}
                      >
                        {AREAS[a].n} {scores[a]}/6
                      </text>
                    );
                  })}
                </svg>
              </div>

              {/* Desglose en filas */}
              <div className="divide-y divide-[#E5DFD9] mt-4 pt-2">
                {ORDEN.map((a) => {
                  const isFoco = a === foco && !decision.enCalma;
                  const score = scores[a];
                  return (
                    <div
                      key={a}
                      className={`py-2.5 px-2 flex items-center justify-between text-sm rounded-lg transition-colors ${
                        isFoco ? "bg-[#6F4E35]/5 font-semibold text-[#6F4E35]" : "text-[#2E2B28]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isFoco && <span className="w-2 h-2 rounded-full bg-[#6F4E35]" />}
                        <span>{AREAS[a].n}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs uppercase tracking-wider font-medium text-[#8A8070]">
                          {nivel(score)}
                        </span>
                        <div className="w-20 h-2 bg-[#E5DFD9] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              isFoco ? "bg-[#6F4E35]" : "bg-[#8A8070]"
                            }`}
                            style={{ width: `${Math.max(8, (score / 6) * 100)}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono font-bold w-6 text-right">
                          {score}/6
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reencuadre y Explicación del área foco */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD9] shadow-xs space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#6F4E35]">
                {decision.enCalma ? "Lo que dice tu mapa" : `Por qué ${infoFoco.art}`}
              </span>

              <p className="font-serif text-2xl sm:text-3xl text-[#2E2B28] leading-snug">
                {decision.enCalma
                  ? "Estás en un buen punto vital. Eso también se cuida y se nutre."
                  : infoFoco.reenc}
              </p>

              <p className="text-[#6B6560] text-base leading-relaxed">
                {decision.enCalma
                  ? `Ninguna de las cinco áreas está sobrecargada ahora mismo. Si en algún momento notas que algo se desestabiliza, ya sabes dónde mirar primero: ${infoFoco.art}.`
                  : infoFoco.cuerpo}
              </p>

              {foco === "cuerpo" && !decision.enCalma && (
                <div className="p-3.5 rounded-xl bg-[#FAF5F2] border border-[#EADBD4] text-xs text-[#8A5A4A] leading-relaxed">
                  Si hay dolor, molestias físicas o un cambio brusco en el deseo o energía,
                  lo primero es una consulta médica. Es fundamental que lo revise quien tiene
                  formación sanitaria reglada.
                </div>
              )}
            </div>

            {/* ============================================================
                ZONA PRINCIPAL DE ACCIONES: WHATSAPP, IMAGEN Y CONTACTO
               ============================================================ */}
            <div className="p-6 rounded-2xl bg-[#F4EFEB] border-2 border-[#D0C4B0] space-y-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#6F4E35]">
                <MessageCircle className="w-4 h-4" />
                <span>Hablar con Ainara con tus resultados</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#2E2B28] mb-1">
                  Continúa la conversación con tu mapa
                </h3>
                <p className="text-sm text-[#6B6560]">
                  Puedes enviar el resumen directo a Ainara por WhatsApp. Te responderá
                  personalmente para orientarte sobre qué paso te conviene dar ahora.
                </p>
              </div>

              {/* Botón WhatsApp Principal con Imagen */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  disabled={isGeneratingImage}
                  onClick={handleShareWhatsAppWithImage}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-md hover:bg-[#20BE5A] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>
                    {isGeneratingImage
                      ? "Preparando tu ficha..."
                      : "Enviar resultados por WhatsApp a Ainara"}
                  </span>
                </button>

                <button
                  type="button"
                  disabled={isGeneratingImage}
                  onClick={handleDownloadOnlyImage}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#D0C4B0] text-[#2E2B28] font-semibold text-sm hover:border-[#6F4E35] hover:bg-[#FAF8F5] transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#6F4E35]" />
                  <span>Descargar ficha de resultados en imagen (PNG)</span>
                </button>
              </div>

              <p className="text-xs text-[#8A8070] leading-relaxed">
                Al enviar por WhatsApp, se abre el chat directo con Ainara (
                <strong className="text-[#2E2B28]">+34 692 62 73 53</strong>) con tu
                diagnóstico redactado para que no tengas que escribirlo todo de cero.
              </p>
            </div>

            {/* Alternativa: Instagram DM */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5DFD9] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#8A8070]">
                  ¿Prefieres Instagram?
                </span>
                <span className="text-xs text-[#6F4E35] font-semibold">@ainaracoach</span>
              </div>

              <p className="text-sm text-[#6B6560]">
                Escribe un mensaje directo a su Instagram con la palabra clave{" "}
                <strong className="text-[#6F4E35]">
                  «{CONFIG.puertas[decision.p].palabra}»
                </strong>
                . Se abrirá la conversación y te contestará por privado.
              </p>

              <button
                type="button"
                onClick={() => handleInstagramDM(CONFIG.puertas[decision.p].palabra)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FAF8F6] border border-[#E5DFD9] text-[#2E2B28] font-semibold text-sm hover:border-[#6F4E35] hover:text-[#6F4E35] transition-all cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                <span>
                  Escribir «{CONFIG.puertas[decision.p].palabra}» al DM de Instagram
                </span>
              </button>
            </div>

            {/* Puerta Recomendada / Siguiente Paso */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5DFD9] shadow-xs space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#6F4E35]">
                Tu siguiente paso recomendado
              </span>

              <h3 className="font-serif text-2xl text-[#2E2B28]">
                {CONFIG.puertas[decision.p].tit}
              </h3>

              <p className="text-sm text-[#6B6560] leading-relaxed">
                {CONFIG.puertas[decision.p].desc}
              </p>

              <div className="pt-2">
                <a
                  href={CONFIG.puertas[decision.p].href}
                  target={
                    CONFIG.puertas[decision.p].href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    CONFIG.puertas[decision.p].href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#6F4E35] text-white font-semibold text-sm hover:bg-[#5A3E2A] transition-all"
                >
                  <span>{CONFIG.puertas[decision.p].actionLabel}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Si hay puerta alternativa */}
              {decision.alt && (
                <div className="pt-3 border-t border-[#E5DFD9]">
                  <p className="text-xs text-[#8A8070] mb-2">
                    {decision.alt === "SESION"
                      ? "¿Prefieres hablarlo directamente?"
                      : decision.alt === "CIFRA"
                      ? "¿Prefieres empezar por un ejercicio práctico gratuito?"
                      : "¿Prefieres avanzar a tu propio ritmo semana a semana?"}
                  </p>
                  <a
                    href={CONFIG.puertas[decision.alt].href}
                    className="text-xs font-semibold text-[#6F4E35] hover:underline flex items-center gap-1"
                  >
                    <span>{CONFIG.puertas[decision.alt].tit} →</span>
                  </a>
                </div>
              )}
            </div>

            {/* Acceso a la Plataforma */}
            <div className="p-4 rounded-xl bg-white border border-[#E5DFD9] flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#8A8070]">
                  Área de miembros
                </p>
                <p className="text-sm font-medium text-[#2E2B28]">
                  ¿Ya tienes cuenta o estás en un programa?
                </p>
              </div>
              <a
                href={CONFIG.platformLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#FAF8F6] border border-[#D0C4B0] text-xs font-semibold text-[#6F4E35] hover:bg-[#6F4E35] hover:text-white transition-all whitespace-nowrap"
              >
                Ir a la Plataforma
              </a>
            </div>

            {/* Compartir test y repetir */}
            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={handleShareTest}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white border border-[#D0C4B0] text-[#2E2B28] text-sm font-semibold hover:border-[#6F4E35] transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-[#6F4E35]" />
                <span>Mandar este test a un amigo/a</span>
              </button>

              <div className="flex justify-between items-center px-1 text-xs text-[#8A8070]">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="hover:text-[#6F4E35] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Volver a hacer el test</span>
                </button>

                <Link
                  href="/"
                  className="hover:text-[#6F4E35] transition-colors py-1"
                >
                  Ir a la web principal de Ainara →
                </Link>
              </div>
            </div>

            {/* Aviso de contención ética */}
            <div className="p-4 rounded-xl border-l-2 border-[#C4856A] bg-white text-xs text-[#8A8070] leading-relaxed">
              <p>
                <strong>Nota ética:</strong> Este test es un mapa orientativo de
                autoconciencia y no constituye un diagnóstico clínico o psicológico.
                Si estás pasando por una crisis profunda, recuerda que en España cuentas
                con el <strong>024</strong> (atención a la conducta suicida, 24 h) o el{" "}
                <strong>112</strong>. Fuera de España, acude a tus servicios médicos o
                de urgencias locales.
              </p>
            </div>
          </motion.main>
        )}

        {/* Pie de página minimalista del test */}
        <footer className="mt-auto pt-8 pb-4 text-center text-xs text-[#9C9590] border-t border-[#E5DFD9]/60">
          <p>© {new Date().getFullYear()} Ainara Unamunzaga · Claridad Emocional</p>
          <p className="mt-1">Tus respuestas son 100% privadas y confidenciales.</p>
        </footer>
      </div>

      {/* Toast flotante */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#2E2B28] text-white px-5 py-3 rounded-full text-xs sm:text-sm font-medium shadow-xl flex items-center gap-2 max-w-[90vw] text-center"
            role="status"
          >
            <Check className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
