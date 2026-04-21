'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sesiones", href: "/sesiones" },
  { name: "Evaluación", href: "/evaluacion" },
  { name: "Herramientas", href: "/herramientas" },
  { name: "Formaciones", href: "/formaciones" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Check if scrolled past initial threshold
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide if scrolling down past 150px, show if scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Prevenir scroll en el body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden && !isMobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`flex items-center justify-between px-6 py-3 w-full max-w-4xl rounded-full transition-all duration-500 border
            ${scrolled
              ? "bg-base/70 backdrop-blur-xl border-border/50 shadow-sm"
              : "bg-surface/50 backdrop-blur-md border-transparent shadow-none"
            }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-medium tracking-tight text-text hover:opacity-80 transition-opacity"
          >
            Ainara Unamunzaga
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-sans tracking-wide text-text-muted hover:text-primary transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              href="/agendar"
              className="px-5 py-2 bg-primary text-white text-xs font-medium tracking-wider uppercase font-sans rounded-full hover:bg-secondary hover:text-text transition-colors duration-300 shadow-sm block"
            >
              Agendar
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-text focus:outline-none hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%", scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-base/95 backdrop-blur-xl flex flex-col overflow-hidden"
          >
            <div className="px-6 py-8 flex items-center justify-between w-full relative z-10">
              <Link
                href="/"
                className="font-serif text-2xl font-medium tracking-tight text-text"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ainara
              </Link>
              <button
                className="p-2 -mr-2 text-text focus:outline-none hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 pb-20 relative z-10">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl sm:text-5xl font-serif font-medium text-text hover:text-primary transition-colors block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12"
              >
                <Link
                  href="/agendar"
                  className="px-8 py-4 bg-primary text-white text-sm font-medium tracking-wider uppercase font-sans rounded-full hover:bg-secondary hover:text-text transition-colors duration-300 inline-block shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Comenzar Proceso
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
