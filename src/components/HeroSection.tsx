const HeroSection = () => {
  const scrollToGift = () => {
    const element = document.getElementById('gift');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    window.location.href = '/contacto';
  };

  return (
    <section id="hero" className="bg-background min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid-features">
          {/* Content */}
          <div className="content-left space-elegant fade-in">
            <div className="space-loose">
              <h1 className="title-hero text-foreground leading-[0.85] title-gradient text-shadow-soft">
                Transforma tu{' '}
                <span className="text-accent-warm font-accent italic">Liderazgo</span>{' '}
                desde la Raíz Emocional
              </h1>
              
              <p className="text-body-large text-muted-foreground leading-relaxed content-balanced text-sophisticated text-shadow-soft">
                Coach especializada en Inteligencia Emocional y PNL. Te acompaño a desarrollar el liderazgo auténtico que genera resultados extraordinarios.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-base font-body font-medium shadow-soft hover-lift">
                  Coaching Especializado
                </span>
                <span className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-base font-body font-medium shadow-soft hover-lift">
                  PNL Certificada
                </span>
                <span className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-base font-body font-medium shadow-soft hover-lift">
                  Reiki Master
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => window.location.href = '/regalo'}
                className="btn-cta scale-in inline-flex items-center gap-3 px-8 py-4"
              >
                <span className="text-2xl">🎁</span>
                Recibe tu Guía Gratuita
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-outline text-lg px-8 py-4 inline-flex items-center gap-3"
              >
                <span className="icon-medium">💬</span>
                Trabajemos Juntos
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="content-center flex items-start pt-8">
            <div className="relative scale-in">
              {/* Professional Certification Badge */}
              <div className="absolute -top-6 -right-6 z-20 animate-bounce">
                <div className="bg-accent/10 text-accent px-6 py-3 rounded-full text-base font-body font-medium shadow-lg backdrop-blur-sm border border-accent/20">
                  <span className="icon-small inline-block mr-2">✨</span>
                  Coaching Profesional Certificado
                </div>
              </div>
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl opacity-60 pulse-gentle"></div>
              <div className="relative bg-gradient-to-br from-secondary to-background p-10 rounded-3xl shadow-large">
                <img 
                  src="/WhatsApp Image 2025-07-12 at 6.16.14 PM (1).jpeg"
                  alt="Ainara Unamunzaga - Coach en Inteligencia Emocional y PNL"
                  className="w-96 h-96 md:w-[28rem] md:h-[28rem] image-hero transition-smooth hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-accent">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold">500+</div>
                    <div className="text-base font-body">Clientes Transformados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;