"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Sparkles, X } from "lucide-react";
import {
  CHAT_ACTIONS,
  CHAT_QUICK_ACTION_IDS,
  type ChatActionId,
} from "@/lib/assistant-knowledge";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
  actions?: ChatActionId[];
};

const WELCOME_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "Hola, soy el asistente de Ainara. Estoy aquí para resolver tus dudas y guiarte hacia la mejor opción para ti. ¿En qué te puedo ayudar hoy?",
};

const FALLBACK_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "Ahora mismo no puedo acceder al chat inteligente. Si lo prefieres, puedes escribirme por WhatsApp o agendar una cita y te atenderemos enseguida.",
  actions: ["contactar_whatsapp", "agendar_cita"],
};

const panelMotion = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 16, scale: 0.98 },
};

const MAX_HISTORY = 12;

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
      { role: "user", content: trimmed },
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
            .slice(-MAX_HISTORY)
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

      const safeActions = Array.isArray(data.actions)
        ? data.actions.filter((actionId) =>
            Object.keys(CHAT_ACTIONS).includes(actionId)
          )
        : [];

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.message ||
            "Gracias por compartirlo. ¿Quieres que te guíe a alguna sección específica?",
          actions: safeActions as ChatActionId[],
        },
      ]);
    } catch (error) {
      console.error("Chat assistant error:", error);
      setHasError(true);
      setMessages((prev) => [...prev, FALLBACK_MESSAGE]);
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
          <motion.div
            className="chat-overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="ainara-chat-title"
            className="chat-panel"
            variants={panelMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <header className="chat-header">
              <div className="chat-title">
                <span className="chat-title__icon">
                  <Sparkles size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <p id="ainara-chat-title">Hablar con IA</p>
                  <span>Asistente de Ainara</span>
                </div>
              </div>
              <button
                type="button"
                className="chat-close"
                onClick={onClose}
                aria-label="Cerrar chat"
              >
                <X size={18} />
              </button>
            </header>

            <div className="chat-quick-actions" aria-label="Accesos rápidos">
              {quickActions.map(({ id, action }) => {
                const targetProps = action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <a
                    key={id}
                    href={action.href}
                    {...targetProps}
                    className="chat-quick-actions__item"
                  >
                    {action.label}
                  </a>
                );
              })}
            </div>

            <div className="chat-messages">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`chat-message chat-message--${message.role}`}
                >
                  <p>{message.content}</p>
                  {message.actions && message.actions.length > 0 && (
                    <div className="chat-actions">
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
                            className="chat-action"
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
                <div className="chat-message chat-message--assistant">
                  <span className="chat-typing">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form className="chat-input" onSubmit={handleSubmit}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={2}
                placeholder="Escribe tu pregunta aquí..."
                aria-label="Escribe tu mensaje"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-disabled={!input.trim() || isLoading}
              >
                <Send size={18} />
              </button>
            </form>

            {hasError && (
              <p className="chat-error">
                Si el chat no responde, puedes contactar por WhatsApp o agendar una
                cita en un click.
              </p>
            )}
          </motion.section>
        </>
      )}

      <style jsx>{`
        .chat-overlay {
          position: fixed;
          inset: 0;
          background: rgba(20, 18, 16, 0.35);
          backdrop-filter: blur(2px);
          z-index: 70;
        }

        .chat-panel {
          position: fixed;
          bottom: 6.5rem;
          right: 2rem;
          width: min(24rem, calc(100vw - 2.5rem));
          max-height: min(75vh, 42rem);
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 1.25rem;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 20px 60px rgba(22, 18, 15, 0.22);
          overflow: hidden;
          z-index: 80;
        }

        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.2rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          background: var(--color-surface);
        }

        .chat-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .chat-title__icon {
          width: 2.1rem;
          height: 2.1rem;
          border-radius: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(111, 78, 53, 0.12);
          color: var(--color-primary);
        }

        .chat-title p {
          margin: 0;
          font-size: 0.95rem;
        }

        .chat-title span {
          display: block;
          font-size: 0.75rem;
          color: var(--color-text-subtle);
          font-weight: 500;
        }

        .chat-close {
          width: 2rem;
          height: 2rem;
          border-radius: 9999px;
          border: none;
          background: transparent;
          color: var(--color-text);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .chat-close:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .chat-quick-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 0.85rem 1.2rem 0.4rem;
        }

        .chat-quick-actions__item {
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid var(--color-border);
          font-size: 0.72rem;
          color: var(--color-text);
          text-decoration: none;
          background: #fff;
          transition: all 0.18s ease;
        }

        .chat-quick-actions__item:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          transform: translateY(-1px);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 0.75rem 1.2rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .chat-message {
          max-width: 90%;
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .chat-message p {
          margin: 0;
        }

        .chat-message--assistant {
          background: rgba(111, 78, 53, 0.08);
          color: var(--color-text);
          align-self: flex-start;
        }

        .chat-message--user {
          background: var(--color-primary);
          color: #fff;
          align-self: flex-end;
        }

        .chat-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.6rem;
        }

        .chat-action {
          padding: 0.3rem 0.65rem;
          border-radius: 9999px;
          background: #fff;
          border: 1px solid rgba(111, 78, 53, 0.2);
          font-size: 0.72rem;
          text-decoration: none;
          color: var(--color-primary);
          font-weight: 600;
        }

        .chat-action:hover {
          border-color: var(--color-primary);
          background: rgba(111, 78, 53, 0.08);
        }

        .chat-typing {
          display: inline-flex;
          gap: 0.3rem;
          align-items: center;
        }

        .chat-typing span {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: var(--color-text-subtle);
          animation: chat-bounce 1s infinite ease-in-out;
        }

        .chat-typing span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .chat-typing span:nth-child(3) {
          animation-delay: 0.3s;
        }

        .chat-input {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 1.2rem 1.1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          background: #fff;
        }

        .chat-input textarea {
          flex: 1;
          border: none;
          resize: none;
          font-size: 0.85rem;
          line-height: 1.4;
          font-family: inherit;
          color: var(--color-text);
          background: transparent;
          outline: none;
        }

        .chat-input button {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 9999px;
          border: none;
          background: var(--color-primary);
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .chat-input button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .chat-input button:not(:disabled):hover {
          transform: translateY(-1px);
        }

        .chat-error {
          padding: 0 1.2rem 1rem;
          font-size: 0.72rem;
          color: var(--color-text-subtle);
        }

        @keyframes chat-bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          .chat-panel {
            bottom: 6.5rem;
            right: 1.25rem;
            width: calc(100vw - 2.5rem);
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
