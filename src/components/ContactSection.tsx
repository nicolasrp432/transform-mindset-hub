const ContactSection = () => {
  return (
    <section id="contact" className="bg-primary section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Comienza tu Transformación Hoy
          </h2>
          <p className="text-xl font-body text-primary-foreground/90 max-w-3xl mx-auto">
            ¿Listo para desarrollar tu máximo potencial? Contacta conmigo y diseñemos juntos tu camino hacia un liderazgo auténtico y transformador.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                    Email Directo
                  </h3>
                  <a 
                    href="mailto:ainaraunamunzagacoach@gmail.com" 
                    className="text-accent hover:text-accent/90 transition-fast font-body"
                  >
                    ainaraunamunzagacoach@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                    Ubicación
                  </h3>
                  <p className="text-primary-foreground/90 font-body">
                    Zaratamo 48480<br />
                    Bilbao, España
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
                    Modalidad de Trabajo
                  </h3>
                  <p className="text-primary-foreground/90 font-body">
                    Presencial en Bilbao<br />
                    Online en toda España
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-primary-foreground/20">
              <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-4">
                Sígueme en Redes Sociales
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/ainaraunamunzaga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center transition-fast hover:scale-105"
                >
                  <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/ainaraunamunzaga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center transition-fast hover:scale-105"
                >
                  <svg className="w-6 h-6 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.573 14.24c.555.555 1.322.9 2.193.9c1.709 0 3.096-1.387 3.096-3.096s-1.387-3.096-3.096-3.096s-3.096 1.387-3.096 3.096c0 .871.346 1.638.9 2.193L5.118 15.69c-.807-.88-1.297-2.031-1.297-3.328c0-2.716 2.199-4.915 4.915-4.915s4.915 2.199 4.915 4.915S11.452 16.988 8.449 16.988zM16.988 8.733c-.608 0-1.101-.493-1.101-1.101s.493-1.101 1.101-1.101s1.101.493 1.101 1.101S17.596 8.733 16.988 8.733z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary-foreground/10 p-8 rounded-3xl">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-heading font-bold text-primary-foreground">
                ¿Hablamos de tu Proyecto?
              </h3>
              <p className="text-primary-foreground/90 font-body">
                Cada proceso de transformación es único. Contacta conmigo para una conversación inicial gratuita donde evaluaremos tu situación y diseñaremos el mejor camino para alcanzar tus objetivos.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={() => window.open('mailto:ainaraunamunzagacoach@gmail.com?subject=Consulta sobre Coaching&body=Hola Ainara, me interesa conocer más sobre tus servicios de coaching...')}
                  className="btn-accent w-full"
                >
                  Escribir Email Directo
                </button>
                <button 
                  onClick={() => document.getElementById('gift')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-accent text-accent px-8 py-4 rounded-2xl font-heading font-semibold text-lg transition-smooth hover:bg-accent hover:text-accent-foreground w-full"
                >
                  Comenzar con la Evaluación Gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;