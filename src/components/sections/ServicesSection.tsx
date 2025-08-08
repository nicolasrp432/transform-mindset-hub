import { Users, Brain, Zap, Target, CheckCircle } from 'lucide-react';
import Card from '@/components/ui-elements/Card';

const ServicesSection = () => {
  const services = [
    {
      icon: "🧠",
      title: "Coaching Personal & Ejecutivo",
      description: "Potencia tu liderazgo y comunicación en entornos profesionales exigentes.",
      benefits: ["Liderazgo auténtico", "Comunicación asertiva", "Resolución de conflictos"]
    },
    {
      icon: "💡",
      title: "Inteligencia Emocional",
      description: "Desarrolla tu capacidad de gestión emocional y crea relaciones más efectivas.",
      benefits: ["Autoconocimiento profundo", "Gestión del estrés", "Regulación emocional"]
    },
    {
      icon: "🚀",
      title: "PNL & Transformación",
      description: "Elimina bloqueos y reprograma patrones mentales limitantes.",
      benefits: ["Eliminación de creencias limitantes", "Reprogramación mental", "Optimización personal"]
    },
    {
      icon: "🎯",
      title: "Consultoría Empresarial",
      description: "Acompañamiento para organizaciones en procesos de cambio y desarrollo de equipos.",
      benefits: ["Gestión de equipos", "Liderazgo organizacional", "Cultura empresarial"]
    },
    {
      icon: "⚡",
      title: "Sesiones de Breakthrough",
      description: "Sesiones intensivas para superar bloqueos específicos y crear cambios inmediatos.",
      benefits: ["Resultados inmediatos", "Técnicas avanzadas de PNL", "Transformación acelerada"]
    },
    {
      icon: "🌟",
      title: "Programas VIP",
      description: "Acompañamiento exclusivo y personalizado para líderes que buscan la excelencia.",
      benefits: ["Acceso prioritario", "Sesiones ilimitadas", "Soporte 24/7"]
    }
  ];

  return (
    <section id="services" className="bg-background section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-4 mb-6 animate-slide-in-down animate-delay-200">
            <div className="h-1 w-16 bg-accent rounded-full animate-slide-in-left"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground animate-zoom-in">
              Servicios de Transformación: Potencia tu Máximo Potencial
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full animate-slide-in-right"></div>
          </div>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            Servicios especializados diseñados para crear transformaciones profundas y duraderas en tu vida personal y profesional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-services">
          {services.map((service, index) => (
            <Card 
              key={index}
              variant="elegant"
              className="p-8 hover-lift animate-fade-in-up"
              delay={index * 150}
            >
              {/* Icon */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Benefits */}
              <div className="space-y-3">
                {service.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;