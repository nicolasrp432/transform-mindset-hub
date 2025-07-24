const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToGift = () => {
    document.getElementById('gift')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse-gentle"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse-gentle animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse-gentle animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent font-heading font-semibold text-sm">Coach Certificada Internacional</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                Transforma tu
                <span className="block text-accent">Liderazgo</span>
                <span className="block">y Potencial</span>
              </h1>
              <p className="text-xl md:text-2xl font-body text-primary-foreground/90 max-w-2xl">
                Desarrollo tu inteligencia emocional y habilidades de liderazgo a través de coaching personalizado, PNL y técnicas de crecimiento personal.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                "Coaching Ejecutivo",
                "Inteligencia Emocional", 
                "PNL",
                "Liderazgo Auténtico"
              ].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 rounded-full text-sm font-body"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={navigateToGift}
                className="btn-accent text-lg px-8 py-4"
              >
                Evaluación Gratuita
              </button>
              <button 
                onClick={scrollToAbout}
                className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-2xl font-heading font-semibold text-lg transition-smooth hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              >
                Conoce mi Historia
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-heading font-bold text-accent">+15</div>
                <div className="text-primary-foreground/80 font-body text-sm">Años de Experiencia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-heading font-bold text-accent">+200</div>
                <div className="text-primary-foreground/80 font-body text-sm">Clientes Transformados</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face" 
                alt="Ainara Unamunzaga - Coach Profesional"
                className="w-full max-w-md mx-auto rounded-3xl shadow-hero object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-gold">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold">95%</div>
                  <div className="text-sm font-body">Éxito en Transformación</div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/20 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary/20 rounded-full"></div>
            <div className="absolute top-1/2 -right-8 w-20 h-20 bg-accent/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-end justify-center pb-2 hover:border-primary-foreground/50 transition-fast"
        >
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full"></div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;