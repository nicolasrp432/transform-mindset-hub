"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
const links = [
  { name: "Conoce a Ainara", href: "/#conoce-a-ainara" },
  { name: "Sesiones", href: "/sesiones" },
  { name: "Herramientas", href: "/herramientas" },
  { name: "Formaciones", href: "/formaciones" },
];
const resources = ["/herramientas", "/guia-practica", "/agenda-reflexion", "/libro-princesa"];
const programs = ["/formaciones", "/re-conectate", "/emulsion-energetica"];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [focused, setFocused] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const last = useRef(0);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 40);
    const delta = value - last.current;
    if (Math.abs(delta) > 6) { setHidden(value > 180 && delta > 0); last.current = value; }
    if (value < 40) setHidden(false);
  });
  const active = (href: string) => href === "/herramientas" ? resources.includes(pathname) : href === "/formaciones" ? programs.includes(pathname) : pathname === href;
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    const opener = trigger.current;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const nodes = panel.current?.querySelectorAll<HTMLElement>("a, button");
      if (!nodes?.length) return;
      const first = nodes[0], end = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); end.focus(); }
      if (!event.shiftKey && document.activeElement === end) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", close);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", close); opener?.focus(); };
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">Saltar al contenido</a>
    <motion.header className={`editorial-nav floating-nav ${scrolled ? "is-scrolled" : ""}`}
      initial={false} animate={{ y: hidden && !open && !focused ? "-150%" : 0 }} transition={{ duration: reduced ? 0 : .3, ease: "easeInOut" }}
      onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className="editorial-wrap nav-inner">
        <Link className="wordmark" href="/" aria-label="Ainara Unamunzaga · Inicio">ainara<span>UNAMUNZAGA</span></Link>
        <nav className="desktop-nav" aria-label="Navegación principal">{links.map((link) => <Link key={link.name} href={link.href} aria-current={active(link.href) ? "page" : undefined}>
          {active(link.href) && <motion.span className="nav-active-pill" layoutId="ainara-nav-active" transition={{ duration: reduced ? 0 : .25 }} aria-hidden="true" />}<span>{link.name}</span>
        </Link>)}</nav>
        <Link className="nav-cta" href="/sesiones">Hablemos <ArrowUpRight size={16} aria-hidden="true" /></Link>
        <button ref={trigger} className="mobile-nav-toggle" onClick={() => setOpen(true)} aria-label="Abrir menú" aria-expanded={open} aria-controls={open ? "mobile-navigation" : undefined}><Menu size={22} /></button>
      </div>
    </motion.header>
    <AnimatePresence>{open && <motion.div ref={panel} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Menú de navegación" className="mobile-navigation modern-mobile-nav"
      initial={{ opacity: 0, y: reduced ? 0 : -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -10 }} transition={{ duration: reduced ? 0 : .25 }}>
      <div className="mobile-nav-heading"><Link className="wordmark" href="/" onClick={() => setOpen(false)}>ainara<span>UNAMUNZAGA</span></Link><button onClick={() => setOpen(false)} aria-label="Cerrar menú"><X size={24} /></button></div>
      <nav aria-label="Navegación móvil">{links.map((link, i) => <motion.div key={link.name} initial={{ opacity: 0, x: reduced ? 0 : -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduced ? 0 : i * .04 }}><Link href={link.href} aria-current={active(link.href) ? "page" : undefined} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link.name}<ArrowUpRight size={20} aria-hidden="true" /></Link></motion.div>)}</nav>
      <div className="mobile-nav-actions"><Link className="editorial-button" href="/sesiones" onClick={() => setOpen(false)}>Agendar una conversación <ArrowUpRight size={18} aria-hidden="true" /></Link><Link className="editorial-link" href="/evaluacion" onClick={() => setOpen(false)}>Todavía no sé por dónde empezar</Link></div>
      <p>Acompañamiento emocional.<br />A tu ritmo, desde ti.</p>
    </motion.div>}</AnimatePresence>
  </>;
}
