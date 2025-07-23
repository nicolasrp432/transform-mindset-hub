const Footer = () => {
  return (
    <footer className="bg-[#0F1F35] text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-accent">
              AINARA UNAMUNZAGA
            </h3>
            <p className="text-white/80 font-body leading-relaxed">
              Coach especialista en Inteligencia Emocional y PNL. 
              Transformando líderes desde la raíz emocional hacia resultados tangibles.
            </p>
            <p className="text-sm text-white/60 font-accent italic">
              "Cuando transformas tu mundo interior, transformas tu realidad exterior"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-white">
              Enlaces Rápidos
            </h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-accent transition-fast font-body"
              >
                Sobre Mí
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-accent transition-fast font-body"
              >
                Servicios
              </button>
              <button 
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-accent transition-fast font-body"
              >
                Mi Proceso
              </button>
              <button 
                onClick={() => document.getElementById('gift')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-white/80 hover:text-accent transition-fast font-body"
              >
                Guía Gratuita
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-white">
              Contacto
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:ainaraunamunzagacoach@gmail.com"
                className="flex items-center space-x-3 text-white/80 hover:text-accent transition-fast font-body"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>ainaraunamunzagacoach@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-white/80 font-body">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Zaratamo 48480, Bilbao</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://linkedin.com/in/ainaraunamunzaga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-fast hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/ainaraunamunzaga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-fast hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.573 14.24c.555.555 1.322.9 2.193.9c1.709 0 3.096-1.387 3.096-3.096s-1.387-3.096-3.096-3.096s-3.096 1.387-3.096 3.096c0 .871.346 1.638.9 2.193L5.118 15.69c-.807-.88-1.297-2.031-1.297-3.328c0-2.716 2.199-4.915 4.915-4.915s4.915 2.199 4.915 4.915S11.452 16.988 8.449 16.988zM16.988 8.733c-.608 0-1.101-.493-1.101-1.101s.493-1.101 1.101-1.101s1.101.493 1.101 1.101S17.596 8.733 16.988 8.733z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 font-body text-sm">
              © 2024 Ainara Unamunzaga. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-white/60 hover:text-accent transition-fast font-body">
                Política de Privacidad
              </button>
              <button className="text-white/60 hover:text-accent transition-fast font-body">
                Términos de Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;