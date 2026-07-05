"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, MessageSquare, Sparkles, X } from "lucide-react";
import { AinaraChat } from "@/components/AinaraChat";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";

const WHATSAPP_URL = CONTACT_LINKS.whatsappUrl;
const CALENDLY_URL = CONTACT_LINKS.calendlyUrl;

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
  href?: string;
  icon: React.ReactNode;
  label: string;
  index: number;
  onClick?: () => void;
}

function ContactOption({ href, icon, label, index, onClick }: ContactOptionProps) {
  const isExternal = href ? href.startsWith("http") : false;
  const targetProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  const commonClass = "group/option flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#FDFCFB] border border-[#D8D2CC] shadow-md text-[#2E2B28] text-[13px] font-semibold tracking-tight whitespace-nowrap hover:bg-[#6F4E35] hover:text-white hover:border-[#6F4E35] hover:shadow-lg hover:-translate-x-1 transition-all duration-200 cursor-pointer no-underline";

  if (href) {
    return (
      <motion.a
        href={href}
        {...targetProps}
        custom={index}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={commonClass}
        aria-label={label}
      >
        <span className="flex items-center text-[#6F4E35] group-hover/option:text-white transition-colors flex-shrink-0">{icon}</span>
        <span className="leading-none">{label}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={commonClass}
      aria-label={label}
    >
      <span className="flex items-center text-[#6F4E35] group-hover/option:text-white transition-colors flex-shrink-0">{icon}</span>
      <span className="leading-none">{label}</span>
    </motion.button>
  );
}

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Hook para cerrar el panel de opciones al hacer click fuera
  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".fab-root")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      {/* Contenedor principal del FAB con clase group para activar hover del tooltip */}
      <div className="fab-root group fixed bottom-8 right-8 z-[50] flex flex-col items-end gap-2.5 max-sm:bottom-6 max-sm:right-6" role="region" aria-label="Contacto rápido">
        {/* Tooltip flotante informativo en hover */}
        {!isOpen && !isChatOpen && (
          <div className="absolute right-19 top-1/2 -translate-y-1/2 bg-[#FDFCFB] border border-[#D8D2CC] text-[#2E2B28] px-4 py-2 rounded-full text-[12.5px] font-medium shadow-md whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 max-sm:hidden z-10">
            ¿Alguna duda? Escríbeme
          </div>
        )}

        {/* Opciones de contacto */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="fab-options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-end gap-2 mb-1"
            >
              <ContactOption
                href={CALENDLY_URL}
                icon={<CalendarDays size={18} strokeWidth={1.5} />}
                label="Agendar Sesión"
                index={0}
              />
              <ContactOption
                icon={<Sparkles size={18} strokeWidth={1.5} />}
                label="Hablar con IA"
                index={1}
                onClick={() => {
                  setIsOpen(false);
                  setIsChatOpen(true);
                }}
              />
              <ContactOption
                href={WHATSAPP_URL}
                icon={<MessageSquare size={18} strokeWidth={1.5} />}
                label="Enviar WhatsApp"
                index={2}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón principal */}
        <motion.button
          onClick={() => {
            if (isChatOpen) setIsChatOpen(false);
            setIsOpen((prev) => !prev);
          }}
          className="flex items-center justify-center w-15 h-15 rounded-full bg-[#25D366] text-white border-none cursor-pointer shadow-lg shadow-[#25D366]/40 relative overflow-visible select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
          aria-label={isOpen ? "Cerrar contacto" : "Abrir opciones de contacto"}
          aria-expanded={isOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={springConfig}
        >
          {/* Anillo de pulso concéntrico */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/40 animate-ping pointer-events-none" />
          )}

          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center z-10"
              >
                <X size={24} strokeWidth={2} />
              </motion.span>
            ) : (
              <motion.span
                key="wa"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center z-10"
              >
                {/* WhatsApp SVG oficial */}
                <svg
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
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

      <AinaraChat open={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
