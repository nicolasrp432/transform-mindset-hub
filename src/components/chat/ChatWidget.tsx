import { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        '¡Hola! Soy el asistente de Ainara Coach. ¿En qué puedo ayudarte hoy? Puedo responder sobre el proceso, modalidades, inversión y más. 🙂'
    }
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Resolve API base by environment/domain
  const API_BASE = useMemo(() => {
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      // Production on Hostinger -> call Vercel API subdomain
      if (host.endsWith('ainaracoaching.com') && host !== 'api.ainaracoaching.com') {
        return 'https://api.ainaracoaching.com';
      }
      // Local dev (requires `vercel dev` for serverless functions)
      if (host === 'localhost' || host === '127.0.0.1') {
        return 'http://localhost:8080';
      }
    }
    // Fallback to same-origin (useful if frontend also deployed on Vercel)
    return '';
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  const send = async () => {
    if (!canSend) return;
    const userMsg: ChatMessage = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.content,
          history: messages.slice(-8) // last turns
        })
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || 'Error en el servidor');
      }
      const data = await res.json();
      const reply = String(data?.reply || '').trim();
      setMessages((m) => [...m, { role: 'assistant', content: reply || 'Lo siento, no pude generar una respuesta.' }]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            'Ha ocurrido un error al procesar tu mensaje. Por favor, inténtalo de nuevo o contáctanos desde /contacto.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          aria-label="Abrir chat"
          className="rounded-full bg-primary text-primary-foreground shadow-lg p-3 hover:scale-105 transition-transform"
          onClick={() => setOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {open && (
        <div className="w-[92vw] max-w-sm h-[70vh] max-h-[520px] bg-card text-card-foreground shadow-2xl rounded-2xl overflow-hidden flex flex-col border border-border">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold leading-tight">Asistente Ainara Coach</p>
                <p className="text-xs opacity-80 leading-tight">Respuestas rápidas sobre el proceso</p>
              </div>
            </div>
            <button aria-label="Cerrar chat" className="p-1" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={containerRef} className="flex-1 overflow-auto p-4 space-y-3 bg-background">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm ${
                    m.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-muted text-muted-foreground rounded-bl-sm'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground rounded-2xl rounded-bl-sm px-3 py-2 text-sm shadow-sm">
                  Escribiendo…
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 bg-card">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Escribe tu pregunta…"
                className="flex-1 px-3 py-2 rounded-xl bg-background text-foreground border border-input focus:outline-none focus:ring-2 focus:ring-primary/40"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                aria-label="Escribe tu mensaje"
              />
              <button
                disabled={!canSend}
                onClick={send}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-primary text-primary-foreground disabled:opacity-50"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4" />
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;