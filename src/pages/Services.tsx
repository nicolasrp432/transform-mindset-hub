import { CheckCircle, Users, Video, MapPin, Star, Brain, Lightbulb, Rocket, Target, Zap, Crown } from 'lucide-react';
import Card from '@/components/ui-elements/Card';
import FAQSection from '@/components/sections/FAQSection';

export default function Services() {
  const transformationServices = [
    {
      icon: Brain,
      title: "Coaching Personal & Ejecutivo",
      description: "Potencia tu liderazgo y comunicación en entornos profesionales exigentes.",
      benefits: ["Liderazgo auténtico", "Comunicación asertiva", "Resolución de conflictos"],
      popular: false
    },
    {
      icon: Lightbulb,
      title: "Inteligencia Emocional",
      description: "Desarrolla tu capacidad de gestión emocional y crea relaciones más efectivas.",
      benefits: ["Autoconocimiento profundo", "Gestión del estrés", "Regulación emocional"],
      popular: true
    },
    {
      icon: Rocket,
      title: "PNL & Transformación",
      description: "Elimina bloqueos y reprograma patrones mentales limitantes.",
      benefits: ["Eliminación de creencias limitantes", "Reprogramación mental", "Optimización personal"],
      popular: false
    },
    {
      icon: Target,
      title: "Consultoría Empresarial",
      description: "Acompañamiento para organizaciones en procesos de cambio y desarrollo de equipos.",
      benefits: ["Gestión de equipos", "Liderazgo organizacional", "Cultura empresarial"],
      popular: false
    },
    {
      icon: Zap,
      title: "Sesiones de Breakthrough",
      description: "Sesiones intensivas para superar bloqueos específicos y crear cambios inmediatos.",
      benefits: ["Resultados inmediatos", "Técnicas avanzadas de PNL", "Transformación acelerada"],
      popular: false
    },
    {
      icon: Crown,
      title: "Programas VIP",
      description: "Acompañamiento exclusivo y personalizado para líderes que buscan la excelencia.",
      benefits: ["Acceso prioritario", "Sesiones ilimitadas", "Soporte 24/7"],
      popular: false
    }
  ];

  const modalities = [
    {
      icon: Users,
      title: 'Coaching Individual',
      description: 'Sesiones personalizadas uno a uno, completamente adaptadas a tus objetivos.',
      features: ['Sesiones de 60-90 min', 'Plan personalizado', 'Flexibilidad total', 'Seguimiento continuo'],
      price: 'Desde €120',
      popular: true,
    },
    {
      icon: Video,
      title: 'Coaching Online',
      description: 'La misma calidad del coaching presencial con total flexibilidad de ubicación.',
      features: ['Plataforma segura', 'Recursos digitales', 'Disponible globalmente', 'Grabación opcional'],
      price: 'Desde €100',
      popular: false,
    },
    {
      icon: MapPin,
      title: 'Coaching Presencial',
      description: 'Sesiones cara a cara en un ambiente profesional y acogedor.',
      features: ['Ambiente profesional', 'Conexión personal', 'Técnicas de relajación', 'Reiki complementario'],
      price: 'Desde €140',
      popular: false,
    },
  ];

  return (
    <main id="servicios" className="section-padding">
      {/* Título Principal */}
      <div className="container-custom text-center mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4 md:mb-6 animate-fade-in-up">
          Servicios de Transformación
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
          Potencia tu Máximo Potencial
        </p>
      </div>

      {/* Retícula para espaciar toda la página */}
      <div className="container-custom grid grid-cols-1 gap-16 md:gap-20">
        {/* Servicios de Transformación - Sin Precios */}
        <section>
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-300 px-4 sm:px-0">
              Servicios especializados diseñados para crear transformaciones profundas y duraderas en tu vida personal y profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {transformationServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
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
                      <div className="bg-accent text-accent-foreground px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-lg">
                        <Star className="w-4 h-4" />
                        Más Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Service Header */}
                  <div className="text-center mb-4 md:mb-6">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-transform duration-300 ${
                        service.popular ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2 md:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                      {service.description}
                    </p>
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
              );
            })}
          </div>
        </section>

        {/* Modalidades de Trabajo */}
        <section>
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4 md:mb-6 animate-slide-in-down animate-delay-200">
              <div className="hidden sm:block h-1 w-12 md:w-16 bg-accent rounded-full animate-slide-in-left"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground animate-zoom-in px-4 sm:px-6">
                Modalidades de Trabajo
              </h2>
              <div className="hidden sm:block h-1 w-12 md:w-16 bg-accent rounded-full animate-slide-in-right"></div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-delay-300 px-4 sm:px-0">
              Todas las modalidades mantienen la misma calidad y efectividad, adaptándose a tu estilo de vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {modalities.map((modality, index) => {
              const IconComponent = modality.icon;
              return (
                <Card
                  key={index}
                  variant="elegant"
                  className={`p-6 md:p-8 hover-lift animate-fade-in-up relative ${
                    modality.popular ? 'border-accent/50 shadow-accent/20' : ''
                  }`}
                  delay={index * 150}
                >
                  {modality.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-accent text-accent-foreground px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-lg">
                        <Star className="w-4 h-4" />
                        Más Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-4 md:mb-6">
                    <div
                      className={`w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl flex items-center justify-center mb-3 md:mb-4 transition-transform duration-300 ${
                        modality.popular ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2 md:mb-3">
                      {modality.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 md:mb-4">
                      {modality.description}
                    </p>
                    <div
                      className={`text-lg sm:text-xl font-bold ${
                        modality.popular ? 'text-accent' : 'text-foreground'
                      }`}
                    >
                      {modality.price}
                      <span className="text-xs sm:text-sm font-normal text-muted-foreground ml-1">/sesión</span>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    {modality.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle
                          className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0 mt-0.5 ${
                            modality.popular ? 'text-accent' : 'text-muted-foreground'
                          }`}
                        />
                        <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section>
          <FAQSection />
        </section>
      </div>
    </main>
  );
}