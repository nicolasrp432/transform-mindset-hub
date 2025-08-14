import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToGift = () => {
    const element = document.getElementById('gift');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-muted min-h-screen flex items-center section-padding relative overflow-hidden animate-fade-in">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid-features">
          {/* Content */}
          <div className="content-left space-elegant fade-in hover:transform hover:scale-105 transition-all duration-700 ease-out">
            <div className="space-loose">
              <h1 className="title-hero text-foreground leading-[0.85] title-gradient text-shadow-soft animate-slide-up hover:text-accent transition-colors duration-500">
                Transforma tu{' '}
                <span className="text-accent-warm font-accent italic hover:text-primary transition-colors duration-300">Liderazgo</span>{' '}
                desde la Raíz Emocional
              </h1>
              
              <p className="text-body-large text-muted-foreground leading-relaxed content-balanced text-sophisticated text-shadow-soft animate-slide-up hover:text-foreground transition-colors duration-300" style={{animationDelay: '0.2s'}}>
                Coach especializada en Inteligencia Emocional y PNL. Te acompaño a desarrollar el liderazgo auténtico que genera resultados extraordinarios.
              </p>
              
              <div className="flex flex-wrap gap-3 animate-slide-up" style={{animationDelay: '0.4s'}}>
                <Link to="/servicios" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-base font-body font-medium shadow-soft hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-lg transition-all duration-300">
                  Coaching Especializado
                </Link>
                <Link to="/servicios" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-base font-body font-medium shadow-soft hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-lg transition-all duration-300">
                  PNL Certificada
                </Link>
                <Link to="/servicios" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-base font-body font-medium shadow-soft hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-lg transition-all duration-300">
                  Reiki Master
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Button 
                variant="default"
                size="lg"
                asChild
                className="scale-in hover:scale-110 hover:shadow-xl hover:bg-accent/90 transition-all duration-300 group"
              >
                <Link to="/regalo">
                  <span className="group-hover:animate-bounce">🎁</span> Recibe tu Guía Gratuita
                </Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                asChild
                className="hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
              >
                <Link to="/contacto">
                  <span className="group-hover:animate-pulse">💬</span> Trabajemos Juntos
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="content-center flex items-start pt-8 animate-slide-up" style={{animationDelay: '0.8s'}}>
            <div className="relative scale-in hover:scale-105 transition-transform duration-500 group">
              {/* Professional Certification Badge */}
              <div className="absolute -top-6 -right-6 z-20 animate-bounce hover:animate-pulse group-hover:scale-110 transition-transform duration-300">
                <div className="bg-accent/10 text-accent px-6 py-3 rounded-full text-base font-body font-medium shadow-lg backdrop-blur-sm border border-accent/20">
                  <span className="icon-small inline-block mr-2">✨</span>
                  Coaching Profesional Certificado
                </div>
              </div>
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl opacity-60 pulse-gentle group-hover:opacity-80 group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-secondary to-background p-10 rounded-3xl shadow-large group-hover:shadow-2xl group-hover:from-accent/10 group-hover:to-primary/10 transition-all duration-500">
                <img 
                  src="/imagenhero.png"
                  alt="Ainara Unamunzaga - Coach en Inteligencia Emocional y PNL"
                  className="w-96 h-96 md:w-[28rem] md:h-[28rem] image-hero transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-accent group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold">+15</div>
                    <div className="text-base font-body">Años de Experiencia</div>
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