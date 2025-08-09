import { CheckCircle } from 'lucide-react';
import Card from '@/components/ui-elements/Card';

const ServicesSection = () => {
  const services = [
    {
      icon: "🧠",
      title: "Coaching Personal & Ejecutivo",
      description: "Potencia tu liderazgo y comunicación en entornos profesionales exigentes.",
      benefits: ["Liderazgo auténtico", "Comunicación asertiva", "Resolución de conflictos"],
      price: "Desde €120",
      popular: false
    },
    {
      icon: "💡",
      title: "Inteligencia Emocional",
      description: "Desarrolla tu capacidad de gestión emocional y crea relaciones más efectivas.",
      benefits: ["Autoconocimiento profundo", "Gestión del estrés", "Regulación emocional"],
      price: "Desde €100",
      popular: true
    },
    {
      icon: "🚀",
      title: "PNL & Transformación",
      description: "Elimina bloqueos y reprograma patrones mentales limitantes.",
      benefits: ["Eliminación de creencias limitantes", "Reprogramación mental", "Optimización personal"],
      price: "Desde €140",
      popular: false
    },
    {
      icon: "🎯",
      title: "Consultoría Empresarial",
      description: "Acompañamiento para organizaciones en procesos de cambio y desarrollo de equipos.",
      benefits: ["Gestión de equipos", "Liderazgo organizacional", "Cultura empresarial"],
      price: "Desde €200",
      popular: false
    }
  ];

  return (
    <section id="services" className="bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4 md:mb-6 animate-slide-in-down animate-delay-200">
            <div className="hidden sm:block h-1 w-12 md:w-16 bg-accent rounded-full animate-slide-in-left"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground animate-zoom-in px-4 sm:px-6">
              Servicios de Transformación
            </h2>
            <div className="hidden sm:block h-1 w-12 md:w-16 bg-accent rounded-full animate-slide-in-right"></div>
          </div>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-300 px-4 sm:px-0">
            Servicios especializados para crear transformaciones profundas y duraderas en tu vida personal y profesional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              variant="elegant"
              className={`p-6 md:p-8 hover-lift animate-fade-in-up relative ${
                service.popular ? 'border-accent/50 shadow-accent/20' : ''
              }`}
              delay={index * 150}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Más Popular
                  </div>
                </div>
              )}
              
              {/* Service Header */}
              <div className="text-center mb-4 md:mb-6">
                <div
                  className={`text-3xl md:text-4xl mb-3 md:mb-4 transition-transform duration-300 ${
                    service.popular ? 'scale-110' : ''
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 md:mb-4">
                  {service.description}
                </p>
                
                <div className={`text-lg sm:text-xl font-bold ${
                  service.popular ? 'text-accent' : 'text-foreground'
                }`}>
                  {service.price}
                  <span className="text-xs sm:text-sm font-normal text-muted-foreground block sm:inline sm:ml-1">
                    por sesión
                  </span>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="space-y-2 md:space-y-3">
                {service.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start">
                    <CheckCircle className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0 mt-0.5 ${
                      service.popular ? 'text-accent' : 'text-muted-foreground'
                    }`} />
                    <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
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