import { useEffect, useState } from 'react';
import { Heart, Award, Target } from 'lucide-react';
import AboutMeSection from '../components/sections/AboutMeSection';
import PageTransition from '@/components/ui/page-transition';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const storyParts = [
    {
      icon: Heart,
      title: 'El Despertar',
      description: 'Del mundo empresarial descubrí mi verdadera pasión: la transformación humana.',
      color: 'primary'
    },
    {
      icon: Award,
      title: 'La Formación',
      description: 'Me certifiqué en Coaching, PNL e Inteligencia Emocional para ayudar de manera integral.',
      color: 'accent'
    },
    {
      icon: Target,
      title: 'La Misión',
      description: 'Hoy ayudo a profesionales a crear la vida auténtica que realmente desean.',
      color: 'secondary'
    }
  ] as const;

  const storyStyles = {
    primary: { iconWrapper: 'bg-primary/10', icon: 'text-primary' },
    accent: { iconWrapper: 'bg-accent/10', icon: 'text-accent' },
    secondary: { iconWrapper: 'bg-secondary/10', icon: 'text-secondary' },
  } as const;
  return (
    <PageTransition>
      {/* Hero simplificado */}
      <section className="pt-32 pb-16 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className={`content-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="title-hero text-gray-800 mb-6 title-gradient text-shadow-soft">
              Conoce a Ainara
            </h1>
            <p className="text-body-large text-gray-700 max-w-2xl mx-auto text-shadow-soft">
              Coach certificada especializada en transformación consciente
            </p>
          </div>
        </div>
      </section>

      {/* Mi Historia en 3 partes */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="content-center mb-12">
            <h2 className="title-section font-bold text-foreground mb-4">
              Mi Historia en 3 Capítulos
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {storyParts.map((part, index) => {
              const IconComponent = part.icon;
              return (
                <div key={index} className={`text-center transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                  style={{ transitionDelay: `${(index + 1) * 120}ms` }}>
                  <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl ${storyStyles[part.color].iconWrapper}`}>
                    <IconComponent className={`h-10 w-10 ${storyStyles[part.color].icon}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {part.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {part.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección principal simplificada */}
      <div className={`transition-all duration-1000 delay-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <AboutMeSection />
      </div>
    </PageTransition>
  );
};

export default AboutMe;