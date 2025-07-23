import ainaraHero from '../assets/ainara-hero.jpg';

const HeroSection = () => {
  const scrollToGift = () => {
    const element = document.getElementById('gift');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left space-y-6 float-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                Transforma tu Liderazgo desde la{' '}
                <span className="text-accent">Inteligencia Emocional</span>
              </h1>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-2 text-lg font-body font-medium text-primary-foreground/90">
                <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">
                  Coaching Especializado
                </span>
                <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">
                  PNL
                </span>
                <span className="bg-primary-foreground/20 px-4 py-2 rounded-full">
                  Reiki
                </span>
              </div>
              
              <p className="text-xl md:text-2xl font-body text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Soy Ainara Unamunzaga, y ayudo a profesionales y líderes como tú a desarrollar su máximo potencial a través del autoconocimiento emocional y herramientas de transformación consciente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToGift}
                className="btn-accent text-lg px-10 py-5"
              >
                🎁 Recibe tu Guía Gratuita
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-foreground text-primary-foreground px-10 py-5 rounded-2xl font-heading font-semibold text-lg transition-smooth hover:bg-primary-foreground hover:text-primary"
              >
                Conoce mi Historia
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-30 pulse-gentle"></div>
              <img 
                src={ainaraHero}
                alt="Ainara Unamunzaga - Coach en Inteligencia Emocional y PNL"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-accent shadow-gold transition-smooth hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;