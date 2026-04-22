import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface pt-12 pb-8 overflow-hidden rounded-t-[2.5rem] mt-12">
      <div className="container-editorial">
        {/* Superior Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10">

          {/* Col 1: CTA and Pitch */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl md:text-5xl text-text mb-6 max-w-sm leading-tight text-balance">
              ¿Comenzamos tu proceso de claridad?
            </h3>
            <p className="text-text-muted text-sm max-w-xs mb-8 leading-relaxed">
              Descubre qué decisiones son auténticamente tuyas y cuáles te mantienen en el ruido.
            </p>
            <Link
              href="/sesiones"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-xs font-medium tracking-wider uppercase font-sans hover:bg-secondary hover:text-text transition-colors duration-300 rounded-full"
            >
              Agenda una sesión
            </Link>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-text-subtle mb-6">Explorar</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-sm font-sans text-text-muted hover:text-primary transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/sesiones" className="text-sm font-sans text-text-muted hover:text-primary transition-colors">Sesiones 1:1</Link>
              </li>
              <li>
                <Link href="/herramientas" className="text-sm font-sans text-text-muted hover:text-primary transition-colors">Herramientas</Link>
              </li>
              <li>
                <Link href="/formaciones" className="text-sm font-sans text-text-muted hover:text-primary transition-colors">Formaciones</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Legal */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-text-subtle mb-6">Conectar</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:hola@ainara.com" className="text-sm font-sans text-text-muted hover:text-primary transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> hola@ainara.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ainara.unamunzaga" target="_blank" rel="noopener noreferrer" className="text-sm font-sans text-text-muted hover:text-primary transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/34600000000?text=Hola%20Ainara%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20tus%20sesiones..." target="_blank" rel="noopener noreferrer" className="text-sm font-sans text-text-muted hover:text-primary transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Big Typographic Logo */}
        <div className="flex justify-center mb-6 border-b border-border/50 pb-6">
          <span className="font-serif text-5xl md:text-[7vw] leading-none tracking-tight text-primary/10 select-none pointer-events-none" aria-hidden="true">
            Ainara Unamunzaga
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-subtle text-xs font-sans tracking-wide">
            © {currentYear} Ainara. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-text-subtle hover:text-text text-xs transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/cookies" className="text-text-subtle hover:text-text text-xs transition-colors">
              Política de Cookies
            </Link>
            <Link href="/legales" className="text-text-subtle hover:text-text text-xs transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
