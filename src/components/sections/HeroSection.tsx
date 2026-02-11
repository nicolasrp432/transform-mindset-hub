import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="section-padding relative flex min-h-screen items-center overflow-hidden bg-muted animate-fade-in">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent/5 to-primary/5 blur-3xl motion-safe:animate-[spin_30s_linear_infinite]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid-features">
          <div className="content-left space-elegant fade-in transition-all duration-700 ease-out md:hover:scale-[1.02]">
            <div className="space-loose">
              <h1 className="title-hero title-gradient text-shadow-soft animate-slide-up leading-[0.9] text-foreground transition-colors duration-500">
                Transforma tu <span className="font-accent italic text-accent-warm transition-colors duration-300 hover:text-primary">Liderazgo</span> desde la Raíz Emocional
              </h1>

              <p className="content-balanced text-body-large text-shadow-soft animate-slide-up text-muted-foreground text-sophisticated transition-colors duration-300 hover:text-foreground" style={{ animationDelay: '0.2s' }}>
                Coach especializada en Inteligencia Emocional y PNL. Te acompaño a desarrollar el liderazgo auténtico que genera resultados extraordinarios.
              </p>

              <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <span className="cursor-default rounded-full bg-secondary px-6 py-3 text-base font-body font-medium text-secondary-foreground shadow-soft transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:shadow-lg">
                  Coaching Especializado
                </span>
                <span className="cursor-default rounded-full bg-secondary px-6 py-3 text-base font-body font-medium text-secondary-foreground shadow-soft transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:shadow-lg">
                  PNL Certificada
                </span>
                <span className="cursor-default rounded-full bg-secondary px-6 py-3 text-base font-body font-medium text-secondary-foreground shadow-soft transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:shadow-lg">
                  Reiki Master
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6 animate-slide-up sm:flex-row" style={{ animationDelay: '0.6s' }}>
              <Button
                variant="default"
                size="lg"
                onClick={() => navigate(ROUTES.gift)}
                className="group transition-all duration-300 hover:scale-105 hover:bg-accent/90 hover:shadow-xl"
              >
                <span className="group-hover:animate-bounce">🎁</span> Recibe tu Guía Gratuita
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate(ROUTES.contact)}
                className="group transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <span className="group-hover:animate-pulse">💬</span> Trabajemos Juntos
              </Button>
            </div>
          </div>

          <div className="content-center flex items-start pt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="group relative transition-transform duration-500 hover:scale-105">
              <div className="absolute -right-6 -top-6 z-20 transition-transform duration-300 group-hover:scale-110 motion-safe:animate-bounce">
                <div className="rounded-full border border-accent/20 bg-accent/10 px-6 py-3 text-base font-body font-medium text-accent shadow-lg backdrop-blur-sm">
                  <span className="icon-small mr-2 inline-block">✨</span>
                  Coaching Profesional Certificado
                </div>
              </div>
              <div className="pulse-gentle absolute inset-0 rounded-3xl bg-accent/20 opacity-60 blur-2xl transition-all duration-500 group-hover:bg-primary/20 group-hover:opacity-80"></div>
              <div className="relative rounded-3xl bg-gradient-to-br from-secondary to-background p-10 shadow-large transition-all duration-500 group-hover:from-accent/10 group-hover:to-primary/10 group-hover:shadow-2xl">
                <img
                  src="/imagenhero.png"
                  alt="Ainara Unamunzaga - Coach en Inteligencia Emocional y PNL"
                  className="image-hero h-96 w-96 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110 md:h-[28rem] md:w-[28rem]"
                />
                <div className="absolute -bottom-6 -right-6 rounded-2xl bg-accent p-6 text-accent-foreground shadow-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-2xl">
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
