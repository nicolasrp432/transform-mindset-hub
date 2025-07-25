import { Heart, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import coachingSession from '../../assets/coaching-session.png';
import { Card } from '@/components/ui/card';

const AboutMeSection = () => {
  const journey = [
    {
      year: '2008-2015',
      title: 'Mundo Empresarial',
      icon: Users
    },
    {
      year: '2015-2020',
      title: 'Formación en Coaching',
      icon: Award
    },
    {
      year: '2023',
      title: 'Transform Mindset Hub',
      icon: Target
    }
  ];

  const stats = [
    { number: '200+', label: 'Clientes' },
    { number: '15+', label: 'Años Experiencia' },
    { number: '95%', label: 'Satisfacción' }
  ];

  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container-custom mx-auto px-4">
        {/* Sección principal con imagen y contenido detallado */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-secondary rounded-3xl transform rotate-3 opacity-20"></div>
            <img 
              src={coachingSession}
              alt="Sesión de coaching profesional"
              className="relative w-full h-96 object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-1 w-16 bg-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Sobre Mí
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi nombre es <strong className="text-foreground">Ainara Unamunzaga</strong>, y durante más de una década he dedicado mi vida profesional a acompañar a líderes y profesionales en su proceso de transformación consciente.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi enfoque se basa en la certeza de que <strong className="text-foreground">cuando transformas tu mundo interior, transformas tu realidad exterior</strong>. A través de la Inteligencia Emocional, PNL y técnicas de crecimiento personal, ayudo a mis clientes a desarrollar un liderazgo auténtico y una comunicación asertiva.
              </p>

              <Card className="border-l-4 border-accent pl-6 py-4">
                <p className="text-xl font-medium italic text-foreground">
                  "Mi misión es ayudarte a descubrir tu potencial oculto y convertir tus limitaciones en fortalezas que impulsen tu éxito personal y profesional."
                </p>
              </Card>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Certificada por <strong className="text-accent">ASESCO (Asociación Española de Coaching)</strong> y especializada en técnicas avanzadas de PNL, combino rigor profesional con una aproximación humana y empática que ha transformado la vida de cientos de profesionales.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Simplificado */}
        <div className="mb-16">
          <div className="content-center mb-8">
            <h3 className="title-card font-semibold text-foreground mb-2">
              Mi Camino
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {journey.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-primary font-bold mb-2">{item.year}</div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Simplificados */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="title-card font-semibold text-foreground mb-4">
            ¿Listo para tu Transformación?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Agenda una consulta gratuita y descubre cómo puedo ayudarte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="btn-primary">
              Consulta Gratuita
            </Link>
            <Link to="/servicios" className="btn-secondary">
              Ver Servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;