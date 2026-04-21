"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CalendarDays, X } from "lucide-react";

/* ============================================================
   FloatingContact — FAB de Contacto Persistente
   
   Punto de contacto unificado (WhatsApp + Calendly) siempre
   visible en la esquina inferior derecha, excepto en rutas
   de embudo donde se aplica el Ratio 1:1.
   ============================================================ */

const WHATSAPP_NUMBER = "34600000000";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Ainara%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tu%20trabajo.`;
const CALENDLY_URL = "https://calendly.com/ainara"; // Reemplazar con URL real

const springConfig = {
  type: "spring" as const,
  stiffness: 420,
  damping: 28,
  mass: 0.8,
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...springConfig, delay: i * 0.07 },
  }),
  exit: { opacity: 0, y: 8, scale: 0.9, transition: { duration: 0.15 } },
};

interface ContactOptionProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  index: number;
}

function ContactOption({ href, icon, label, index }: ContactOptionProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fab-option"
      aria-label={label}
    >
      <span className="fab-option__icon">{icon}</span>
      <span className="fab-option__label">{label}</span>
    </motion.a>
  );
}

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay backdrop al abrir */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="fab-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fab-overlay"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Contenedor principal del FAB */}
      <div className="fab-root" role="region" aria-label="Contacto rápido">
        {/* Opciones de contacto */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="fab-options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fab-options"
            >
              <ContactOption
                href={CALENDLY_URL}
                icon={<CalendarDays size={17} strokeWidth={1.75} />}
                label="Agendar Sesión"
                index={1}
              />
              <ContactOption
                href={WHATSAPP_URL}
                icon={<MessageCircle size={17} strokeWidth={1.75} />}
                label="Enviar WhatsApp"
                index={0}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón principal */}
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          className="fab-trigger"
          aria-label={isOpen ? "Cerrar contacto" : "Abrir opciones de contacto"}
          aria-expanded={isOpen}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={springConfig}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="fab-trigger__icon"
              >
                <X size={26} strokeWidth={2} />
              </motion.span>
            ) : (
              <motion.span
                key="wa"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="fab-trigger__icon"
              >
                {/* WhatsApp SVG */}
                <svg
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Estilos encapsulados */}
      <style jsx>{`
        .fab-overlay {
          position: fixed;
          inset: 0;
          z-index: 49;
        }

        .fab-root {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 50;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.625rem;
        }

        .fab-options {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.5rem;
        }

        .fab-option {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.65rem 1.1rem 0.65rem 0.9rem;
          border-radius: 9999px;
          background: #ffffff;
          border: 1.5px solid rgba(37, 211, 102, 0.35);
          box-shadow:
            0 4px 20px rgba(0, 0, 0, 0.18),
            0 1px 4px rgba(0, 0, 0, 0.12);
          color: #1a1a1a;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.84rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.18s ease, box-shadow 0.18s ease, transform 0.15s ease;
        }

        .fab-option:hover {
          background: #f0fdf4;
          box-shadow:
            0 8px 28px rgba(0, 0, 0, 0.22),
            0 2px 6px rgba(37, 211, 102, 0.18);
          transform: translateX(-4px);
        }

        .fab-option__icon {
          display: flex;
          align-items: center;
          color: var(--color-primary, #b08d6a);
          flex-shrink: 0;
        }

        .fab-option__label {
          line-height: 1;
        }

        .fab-trigger {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 9999px;
          background: #25D366;
          color: #fff;
          border: none;
          cursor: pointer;
          box-shadow:
            0 8px 32px rgba(37, 211, 102, 0.5),
            0 3px 10px rgba(0, 0, 0, 0.18);
          outline: none;
          position: relative;
          overflow: visible;
        }

        .fab-trigger::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 3px solid rgba(37, 211, 102, 0.45);
          animation: fab-pulse 2.2s ease-out infinite;
          pointer-events: none;
        }

        @keyframes fab-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        .fab-trigger::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: radial-gradient(
            circle at 35% 35%,
            rgba(255, 255, 255, 0.28) 0%,
            transparent 65%
          );
          pointer-events: none;
          z-index: 1;
        }

        .fab-trigger:focus-visible {
          outline: 2px solid #25D366;
          outline-offset: 4px;
        }

        .fab-trigger__icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 640px) {
          .fab-root {
            bottom: 1.25rem;
            right: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
