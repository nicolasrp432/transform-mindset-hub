"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import Image from "next/image";
import {
  CHAT_ACTIONS,
  CHAT_QUICK_ACTION_IDS,
  filterActionIds,
  type ChatActionId,
} from "@/lib/assistant-knowledge";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
  actions?: ChatActionId[];
};

const createMessageId = () =>
  `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const createMessage = (message: Omit<ChatMessage, "id">): ChatMessage => ({
  id: createMessageId(),
  ...message,
});

const WELCOME_MESSAGE = createMessage({
  role: "assistant",
  content:
    "Hola, soy el asistente de Ainara. Estoy aquí para resolver tus dudas y guiarte hacia la mejor opción para ti. ¿En qué te puedo ayudar hoy?",
});

const buildFallbackMessage = () =>
  createMessage({
    role: "assistant",
    content:
      "Ahora mismo no puedo acceder al chat inteligente. Si lo prefieres, puedes escribirme por WhatsApp o agendar una cita y te atenderemos enseguida.",
    actions: ["contactar_whatsapp", "agendar_cita"],
  });

const SUGGESTIONS = [
  "¿Quién es Ainara?",
  "¿Qué es Re-Conéctate?",
  "¿Cómo agendar una sesión?",
  "¿Qué recursos tienes?",
];

const panelMotion = {
  initial: { opacity: 0, y: 32, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 24, scale: 0.96 },
};

// Limitamos el historial para mantener el contexto ligero.
const MAX_HISTORY_MESSAGES = 12;

interface AinaraChatProps {
  open: boolean;
  onClose: () => void;
}

export function AinaraChat({ open, onClose }: AinaraChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  const quickActions = useMemo(
    () =>
      CHAT_QUICK_ACTION_IDS.map((actionId) => ({
        id: actionId,
        action: CHAT_ACTIONS[actionId],
      })),
    []
  );

  const scrollToBottom = () => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, open]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setHasError(false);
    const nextMessages: ChatMessage[] = [
      ...messages,
      createMessage({ role: "user", content: trimmed }),
    ];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .slice(-MAX_HISTORY_MESSAGES)
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = (await response.json()) as {
        message?: string;
        actions?: string[];
      };

      const safeActions = filterActionIds(data.actions);

      setMessages((prev) => [
        ...prev,
        createMessage({
          role: "assistant",
          content:
            data.message ||
            "Gracias por compartirlo. ¿Quieres que te guíe a alguna sección específica?",
          actions: safeActions as ChatActionId[],
        }),
      ]);
    } catch (error) {
      console.error("Chat assistant error:", error);
      setHasError(true);
      setMessages((prev) => [...prev, buildFallbackMessage()]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay de fondo - solo se activa en móviles */}
          <motion.div
            className="fixed inset-0 bg-neutral-900/10 backdrop-blur-xs z-[70] hidden max-sm:block"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Panel de chat flotante */}
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="ainara-chat-title"
            className="fixed bottom-26 right-8 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-10rem)] max-h-[38rem] flex flex-col bg-[#FDFCFB] rounded-3xl border border-[#6F4E35]/15 shadow-2xl z-[80] overflow-hidden max-sm:bottom-0 max-sm:right-0 max-sm:w-full max-sm:h-full max-sm:max-h-full max-sm:rounded-none max-sm:border-none"
            variants={panelMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Cabecera del chat */}
            <header className="flex items-center justify-between p-4 border-b border-[#6F4E35]/10 bg-[#F5F1EE] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/ainara-image.jpg"
                    alt="Ainara"
                    width={40}
                    height={40}
                    className="rounded-full object-cover border border-[#D0C4B0] w-full h-full"
                    priority
                  />
                  {/* Indicador de estado online pulsante */}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#F5F1EE] shadow-[0_0_0_1.5px_rgba(34,197,94,0.25)] animate-pulse" />
                </div>
                <div>
                  <p id="ainara-chat-title" className="margin-0 font-serif text-base font-semibold text-[#2E2B28] leading-tight">Ainara AI</p>
                  <span className="block text-[11px] text-[#7C919D] font-medium mt-0.5">Mentora Virtual · En línea</span>
                </div>
              </div>
              <button
                type="button"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#6B6560] hover:bg-[#6F4E35]/10 hover:text-[#6F4E35] transition-colors cursor-pointer border-none bg-transparent"
                onClick={onClose}
                aria-label="Cerrar chat"
              >
                <X size={18} />
              </button>
            </header>

            {/* Accesos rápidos de navegación */}
            <div className="flex flex-wrap gap-1.5 px-4 py-3 bg-[#FDFCFB] flex-shrink-0 border-b border-[#6F4E35]/5" aria-label="Accesos rápidos">
              {quickActions.map(({ id, action }) => {
                const targetProps = action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <a
                    key={id}
                    href={action.href}
                    {...targetProps}
                    className="px-3 py-1 rounded-full border border-[#D8D2CC] text-[11px] font-medium text-[#6B6560] no-underline hover:border-[#6F4E35] hover:text-[#6F4E35] hover:bg-[#6F4E35]/5 transition-all cursor-pointer"
                  >
                    {action.label}
                  </a>
                );
              })}
            </div>

            {/* Listado de mensajes */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3.5 bg-[#FDFCFB]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[85%] p-3.5 px-4 rounded-2xl text-[13.5px] leading-relaxed tracking-tight ${
                    message.role === "assistant"
                      ? "bg-[#F5F1EE] text-[#2E2B28] self-start rounded-bl-xs border border-[#6F4E35]/5"
                      : "bg-[#6F4E35] text-white self-end rounded-br-xs shadow-md shadow-[#6F4E35]/10"
                  }`}
                >
                  <p className="m-0 white-space-pre-wrap">{message.content}</p>
                  {message.actions && message.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {message.actions.map((actionId) => {
                        const action = CHAT_ACTIONS[actionId];
                        if (!action) return null;
                        const targetProps = action.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {};
                        return (
                          <a
                            key={actionId}
                            href={action.href}
                            {...targetProps}
                            className="px-3 py-1.5 rounded-full bg-white border border-[#6F4E35]/20 text-[11px] font-semibold text-[#6F4E35] no-underline hover:border-[#6F4E35] hover:bg-[#6F4E35]/5 transition-all cursor-pointer"
                          >
                            {action.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="max-w-[85%] p-3.5 px-4 rounded-2xl text-[13.5px] bg-[#F5F1EE] text-[#2E2B28] self-start rounded-bl-xs border border-[#6F4E35]/5">
                  <div className="inline-flex gap-1 items-center px-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9C9590] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9C9590] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9C9590] animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Chips de sugerencias interactivas */}
            {!isLoading && messages.length <= 3 && (
              <div className="flex gap-2 px-4 py-2.5 overflow-x-auto bg-[#FDFCFB] border-t border-[#6F4E35]/5 flex-shrink-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" aria-label="Sugerencias rápidas">
                {SUGGESTIONS.map((suggestion, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="px-3.5 py-1.5 rounded-full bg-[#F5F1EE] border border-[#D8D2CC] text-[11.5px] font-medium text-[#6B6560] whitespace-nowrap hover:bg-[#6F4E35] hover:text-white hover:border-[#6F4E35] transition-all cursor-pointer flex-shrink-0"
                    onClick={() => void sendMessage(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Input y botón de envío */}
            <form className="flex items-center gap-3 p-4 border-t border-[#6F4E35]/10 bg-white flex-shrink-0" onSubmit={handleSubmit}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Escribe tu pregunta aquí..."
                aria-label="Escribe tu mensaje"
                disabled={isLoading}
                className="flex-1 border-none resize-none text-[13.5px] leading-normal font-sans text-[#2E2B28] bg-transparent outline-none max-h-16 py-1 placeholder:text-[#9C9590]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-disabled={!input.trim() || isLoading}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer border-none flex-shrink-0 ${
                  input.trim()
                    ? "bg-[#6F4E35] text-white shadow-lg shadow-[#6F4E35]/25 hover:scale-105 active:scale-95"
                    : "bg-[#F5F1EE] text-[#9C9590]"
                }`}
              >
                <Send size={15} />
              </button>
            </form>

            {hasError && (
              <p className="px-4 pb-3 m-0 text-[11px] text-[#9C9590] bg-white">
                Si el chat no responde, puedes contactar por WhatsApp o agendar una
                cita en un click.
              </p>
            )}
          </motion.section>

          {/* Flecha indicadora que apunta al botón flotante - solo visible en escritorio */}
          <div className="fixed bottom-[6.1rem] right-[3.45rem] w-3 h-3 bg-white border-r border-b border-[#6F4E35]/15 rotate-45 z-[79] shadow-[2px_2px_5px_rgba(46,43,40,0.03)] max-sm:hidden" />
        </>
      )}
    </AnimatePresence>
  );
}
