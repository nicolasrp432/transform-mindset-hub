"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
const links = [
  { name: "Conoce a Ainara", href: "/#conoce-a-ainara" },
  { name: "Sesiones", href: "/sesiones" },
  { name: "Herramientas", href: "/herramientas" },
  { name: "Formaciones", href: "/formaciones" },
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab") return;
      const nodes = panel.current?.querySelectorAll<HTMLElement>("a, button");
      if (!nodes?.length) return;
      const first = nodes[0],
        last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", close);
      trigger.current?.focus();
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <header className="editorial-nav">
        <div className="editorial-wrap nav-inner">
          <Link
            className="wordmark"
            href="/"
            aria-label="Ainara Unamunzaga · Inicio"
          >
            ainara<span>UNAMUNZAGA</span>
          </Link>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link className="nav-cta" href="/evaluacion">
            ¿Por dónde empiezo?
          </Link>
          <button
            ref={trigger}
            className="mobile-nav-toggle"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      {open && (
        <div
          ref={panel}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="mobile-navigation"
        >
          <div className="mobile-nav-heading">
            <span className="wordmark">ainara</span>
            <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
              <X />
            </button>
          </div>
          <nav aria-label="Navegación móvil">
            {links.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <span>0{i + 1}</span>
                {link.name}
              </Link>
            ))}
            <Link href="/evaluacion" onClick={() => setOpen(false)}>
              Mi punto de partida
            </Link>
          </nav>
          <p>
            Acompañamiento emocional.
            <br />A tu ritmo, desde ti.
          </p>
        </div>
      )}
    </>
  );
}
