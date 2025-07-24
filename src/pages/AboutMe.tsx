import { useEffect, useState } from 'react';
import AboutMeSection from '../components/sections/AboutMeSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import PhilosophySection from '../components/sections/PhilosophySection';
import PageTransition from '@/components/ui/page-transition';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <PageTransition>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className={`content-center mb-20 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="title-hero text-gray-800 mb-10 title-gradient text-shadow-soft animate-fade-in-up">
              Conoce a Ainara
            </h1>
            <p className={`text-body-large text-gray-700 content-balanced text-sophisticated text-shadow-soft transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Coach certificada en PNL e Inteligencia Emocional, especializada en transformación consciente y liderazgo auténtico
            </p>
          </div>
        </div>
      </section>

      <div className={`transition-all duration-1000 delay-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <AboutMeSection />
      </div>
      
      <div className={`transition-all duration-1000 delay-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <CertificationsSection />
      </div>
      
      <div className={`transition-all duration-1000 delay-900 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <PhilosophySection />
      </div>
    </PageTransition>
  );
};

export default AboutMe;