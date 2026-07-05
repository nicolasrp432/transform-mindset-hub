import { NextResponse } from "next/server";
import {
  ASSISTANT_SYSTEM_PROMPT,
  filterActionIds,
} from "@/lib/assistant-knowledge";

// Usamos el modelo estable gemini-2.5-flash
const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

// NLP Fallback local en español basado en la base de conocimientos oficial
function getLocalFallbackResponse(userMessage: string): { message: string; actions: string[] } {
  const text = userMessage.toLowerCase().trim();

  // Caso: Ainara o Sobre Mí
  if (
    text.includes("quien") ||
    text.includes("quién") ||
    text.includes("ainara") ||
    text.includes("perfil") ||
    text.includes("sobre ti") ||
    text.includes("eres") ||
    text.includes("hace") ||
    text.includes("mentora") ||
    text.includes("coach")
  ) {
    return {
      message: "Soy el asistente de Ainara. Ella es una mentora y coach emocional especializada en autoconfianza y seguridad interior. Acompaña a personas a silenciar su mente crítica, gestionar la ansiedad y reconectar con su autoestima para vivir desde la paz y el amor propio. ¿Te gustaría conocer el programa de 6 semanas 'Re-Conéctate' o agendar una cita gratuita?",
      actions: ["ver_reconectate", "agendar_cita"],
    };
  }

  // Caso: Programa Re-Conéctate
  if (
    text.includes("reconectate") ||
    text.includes("re-conectate") ||
    text.includes("programa") ||
    text.includes("semanas") ||
    text.includes("taller") ||
    text.includes("acompañamiento") ||
    text.includes("6 semanas")
  ) {
    return {
      message: "El programa 'Re-Conéctate' es un acompañamiento guiado de 6 semanas diseñado especialmente para ayudarte a sanar la relación con tu mente crítica, soltar el sobrepensamiento y construir una autoconfianza real e inquebrantable desde el amor propio. ¿Te gustaría agendar una sesión gratuita de diagnóstico de 30 minutos para conversar sobre ello?",
      actions: ["ver_reconectate", "agendar_cita"],
    };
  }

  // Caso: Guía Práctica o Libro
  if (
    text.includes("guia") ||
    text.includes("guía") ||
    text.includes("pdf") ||
    text.includes("libro") ||
    text.includes("tapa blanda") ||
    text.includes("comprar") ||
    text.includes("princesa") ||
    text.includes("agenda") ||
    text.includes("reflexion") ||
    text.includes("reflexión") ||
    text.includes("recurso") ||
    text.includes("recursos")
  ) {
    return {
      message: "Ainara ofrece dos excelentes recursos de lectura y ejercicios prácticos:\n\n1. La Guía Práctica de Transformación Integral: disponible en formato PDF digital por 12 € (descarga directa tras el pago) o en edición impresa física por 18 € (compras a través de Stripe con descuento).\n2. El Libro 'La princesa que creyó en los cuentos de hadas' (tapa blanda) para reconectar con tu esencia.\n3. La Agenda de Reflexión diaria.",
      actions: ["ver_guia", "ver_libro", "ver_agenda"],
    };
  }

  // Caso: Agendar sesión, Calendly o Diagnóstico gratis
  if (
    text.includes("agendar") ||
    text.includes("sesion") ||
    text.includes("sesión") ||
    text.includes("cita") ||
    text.includes("calendly") ||
    text.includes("reunion") ||
    text.includes("reunión") ||
    text.includes("gratis") ||
    text.includes("hablar") ||
    text.includes("zoom") ||
    text.includes("llamada")
  ) {
    return {
      message: "Puedes agendar una sesión de diagnóstico 1:1 de 30 minutos totalmente gratuita con Ainara a través de su calendario de Calendly. En esta llamada analizaremos tu situación actual y cómo superar los bloqueos de tu autocrítica.",
      actions: ["agendar_cita", "contactar_whatsapp"],
    };
  }

  // Caso: Formaciones
  if (
    text.includes("formacion") ||
    text.includes("formaciones") ||
    text.includes("curso") ||
    text.includes("cursos") ||
    text.includes("aprender") ||
    text.includes("plataforma") ||
    text.includes("estudiar")
  ) {
    return {
      message: "Ainara ofrece formaciones premium orientadas al crecimiento personal en nuestra plataforma. Las principales son 'Reconexión' y 'Leyes Universales'.",
      actions: ["ver_formaciones", "ver_herramientas"],
    };
  }

  // Caso: Herramientas o Test
  if (
    text.includes("herramientas") ||
    text.includes("recursos") ||
    text.includes("test") ||
    text.includes("evaluacion") ||
    text.includes("evaluación") ||
    text.includes("saturacion") ||
    text.includes("saturación")
  ) {
    return {
      message: "Disponemos de herramientas prácticas como nuestra Autoevaluación de saturación mental interactiva y herramientas prácticas de descarga para ayudarte a medir tu nivel de autocrítica y sobrepensamiento.",
      actions: ["evaluacion", "ver_herramientas"],
    };
  }

  // Caso: WhatsApp o Contacto
  if (
    text.includes("whatsapp") ||
    text.includes("contacto") ||
    text.includes("escribir") ||
    text.includes("teléfono") ||
    text.includes("telefono") ||
    text.includes("contacto directo")
  ) {
    return {
      message: "Puedes contactar y escribir directamente a Ainara por WhatsApp al número +34 692 627 353 para cualquier duda sobre sus sesiones o recursos.",
      actions: ["contactar_whatsapp", "agendar_cita"],
    };
  }

  // Caso: Saludos
  if (
    text.includes("hola") ||
    text.includes("buenos") ||
    text.includes("tardes") ||
    text.includes("noches") ||
    text.includes("saludos") ||
    text.includes("hey") ||
    text.includes("que tal") ||
    text.includes("cómo estás")
  ) {
    return {
      message: "¡Hola! Qué alegría saludarte. Soy el asistente virtual de Ainara. Estoy aquí para resolver tus dudas sobre el acompañamiento emocional, el programa Re-Conéctate, formaciones y herramientas. ¿En qué te puedo ayudar hoy?",
      actions: ["ver_reconectate", "evaluacion", "agendar_cita"],
    };
  }

  // Respuesta por defecto
  return {
    message: "Gracias por tu mensaje. Para darte la mejor orientación, ¿te gustaría saber más sobre el programa de 6 semanas 'Re-Conéctate', agendar una sesión gratuita de diagnóstico 1:1 o conocer nuestras guías y herramientas?",
    actions: ["ver_reconectate", "agendar_cita", "ver_herramientas"],
  };
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  const body = await req.json().catch(() => ({}));
  const messages: IncomingMessage[] = Array.isArray(body.messages)
    ? body.messages
        .filter(
          (message: IncomingMessage) =>
            (message.role === "user" || message.role === "assistant") &&
            typeof message.content === "string" &&
            message.content.trim().length > 0
        )
        .map((message: IncomingMessage) => ({
          role: message.role,
          content: message.content.trim(),
        }))
    : [];

  const lastUserMessage = messages.filter(m => m.role === "user").pop()?.content || "";

  // Si no está configurada la API key, usamos el motor NLP local
  if (!apiKey) {
    console.warn("GEMINI_API_KEY no configurada. Usando fallback NLP local.");
    const localResult = getLocalFallbackResponse(lastUserMessage);
    return NextResponse.json({
      message: localResult.message,
      actions: filterActionIds(localResult.actions),
    });
  }

  // Mapeamos los mensajes al formato de contenido de Gemini
  const contents = messages.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  try {
    const response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: ASSISTANT_SYSTEM_PROMPT }],
        },
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.4,
          maxOutputTokens: 800,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      // Fallback local en caso de error en la API externa
      const fallbackResult = getLocalFallbackResponse(lastUserMessage);
      return NextResponse.json({
        message: fallbackResult.message,
        actions: filterActionIds(fallbackResult.actions),
      });
    }

    const data = await response.json();
    const content = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!content || typeof content !== "string") {
      const fallbackResult = getLocalFallbackResponse(lastUserMessage);
      return NextResponse.json({
        message: fallbackResult.message,
        actions: filterActionIds(fallbackResult.actions),
      });
    }

    let parsed: { message?: string; actions?: string[] } | null = null;

    try {
      parsed = JSON.parse(content);
    } catch (error) {
      console.warn("Failed to parse Gemini response as JSON:", error);
      parsed = {
        message: content, // Si devuelve texto plano, lo usamos como mensaje
      };
    }

    const safeMessage = String(
      parsed?.message ||
        content ||
        "Gracias por tu mensaje. ¿Quieres que te ayude a agendar o conocer las formaciones?"
    ).trim();

    return NextResponse.json({
      message: safeMessage,
      actions: filterActionIds(parsed?.actions),
    });
  } catch (error) {
    console.error("Gemini request failed, fallback to local NLP:", error);
    const fallbackResult = getLocalFallbackResponse(lastUserMessage);
    return NextResponse.json({
      message: fallbackResult.message,
      actions: filterActionIds(fallbackResult.actions),
    });
  }
}
