import { NextResponse } from "next/server";
import { ASSISTANT_SYSTEM_PROMPT, CHAT_ACTIONS } from "@/lib/assistant-knowledge";

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_MODEL = "meta-llama/llama-3.1-8b-instruct:free";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

const filterActions = (actions?: string[]) =>
  Array.isArray(actions)
    ? actions.filter((actionId) => Object.keys(CHAT_ACTIONS).includes(actionId))
    : [];

export async function POST(req: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { message: "Falta configurar OPENROUTER_API_KEY." },
      { status: 500 }
    );
  }

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

  const model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL;
  const referer =
    process.env.OPENROUTER_REFERER ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:3000";
  const title = process.env.OPENROUTER_TITLE || "Transform Mindset Hub";

  try {
    const response = await fetch(OPENROUTER_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": referer,
        "X-Title": title,
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        max_tokens: 550,
        messages: [
          { role: "system", content: ASSISTANT_SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter error:", errorText);
      return NextResponse.json(
        { message: "No pudimos completar la consulta al asistente." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    if (!content || typeof content !== "string") {
      return NextResponse.json({
        message:
          "Gracias por tu mensaje. ¿Quieres que te guíe hacia alguna sección específica?",
        actions: ["ver_formaciones", "ver_herramientas"],
      });
    }

    let parsed: { message?: string; actions?: string[] } | null = null;

    try {
      parsed = JSON.parse(content);
    } catch (error) {
      console.warn("OpenRouter JSON parse failed:", error);
      parsed = { message: content };
    }

    return NextResponse.json({
      message:
        parsed?.message ||
        "Gracias por tu mensaje. ¿Quieres que te ayude a agendar o conocer las formaciones?",
      actions: filterActions(parsed?.actions),
    });
  } catch (error) {
    console.error("OpenRouter request failed:", error);
    return NextResponse.json(
      { message: "No pudimos conectar con el asistente." },
      { status: 500 }
    );
  }
}
