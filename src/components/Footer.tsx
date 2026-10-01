import Link from "next/link";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";
export function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="editorial-wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="wordmark">
              ainara<span>UNAMUNZAGA</span>
            </Link>
            <p className="footer-intro">
              Un espacio para escucharte.
              <br />
              Acompañamiento desde la claridad.
            </p>
          </div>
          <nav aria-label="Explorar">
            <p className="eyebrow">EXPLORAR</p>
            <Link href="/">Inicio</Link>
            <Link href="/sesiones">Sesiones 1:1</Link>
            <Link href="/evaluacion">Primer contacto</Link>
            <Link href="/herramientas">Herramientas</Link>
            <Link href="/formaciones">Formaciones</Link>
          </nav>
          <div className="footer-contact">
            <p className="eyebrow">HABLEMOS</p>
            <a
              href={CONTACT_LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp · +34 692 627 353
            </a>
            <a href={`mailto:${CONTACT_LINKS.email}`}>
              {CONTACT_LINKS.email}
            </a>
            <a
              href="https://www.instagram.com/ainaracoach/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram · @ainaracoach
            </a>
            <a
              href={CONTACT_LINKS.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar una conversación
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ainara Unamunzaga.</p>
          <p>Coaching y desarrollo personal.</p>
        </div>
      </div>
    </footer>
  );
}
