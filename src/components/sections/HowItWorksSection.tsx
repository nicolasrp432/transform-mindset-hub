import { Calendar, MessageCircle, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calendar,
      number: '01',
      title: 'Consulta Inicial Gratuita',
      description: 'Conversamos sobre tus objetivos y diseñamos un plan personalizado para tu transformación.',
      duration: '60 minutos',
      highlight: 'Sin compromiso'
    },
    {
      icon: MessageCircle,
      number: '02',
      title: 'Sesiones Personalizadas',
      description: 'Trabajamos juntos combinando PNL, Inteligencia Emocional y técnicas de liderazgo.',
      duration: '8-12 sesiones',
      highlight: 'Metodología probada'
    },
    {
      icon: Target,
      number: '03',
      title: 'Implementación Práctica',
      description: 'Aplicas las herramientas en tu día a día con acompañamiento continuo.',
      duration: 'Seguimiento continuo',
      highlight: 'Resultados medibles'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Transformación Sostenible',
      description: 'Consolidas los cambios y desarrollas autonomía para mantener tu crecimiento.',
      duration: 'Impacto permanente',
      highlight: 'Cambio duradero'
    }
  ];

  const benefits = [
    {
      stat: '95%',
      description: 'de mis clientes reportan mejora significativa'
    },
    {
      stat: '3-6',
      description: 'meses promedio para transformaciones profundas'
    },
    {
      stat: '100%',
      description: 'personalización según tus necesidades'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom mx-auto px-4">
        {/* Header */}
        <div className="content-center mb-20">
          <h2 className="title-section font-heading font-bold text-foreground mb-8">
            Cómo Funciona Mi Proceso de Transformación
          </h2>
          <p className="text-body-large text-muted-foreground content-balanced">
            Un método estructurado y personalizado que te lleva desde donde estás hasta donde quieres llegar
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="group relative">
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                        {step.highlight}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-accent font-medium pt-2">
                      <Calendar className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 z-10">
                    <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                      <ArrowRight className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Benefits Stats */}
        <div className="relative bg-gradient-to-br from-accent/5 via-white to-accent/5 rounded-3xl p-12 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">
              Resultados que Puedes Esperar
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-4">
                    <div className="text-5xl font-bold bg-gradient-to-br from-accent to-accent/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {benefit.stat}
                    </div>
                    <div className="absolute -inset-2 bg-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-accent/10 via-white to-accent/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            ¿Listo para Comenzar Tu Transformación?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            El primer paso es siempre el más importante. Agenda tu consulta gratuita y descubre cómo puedo ayudarte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contacto"
              className="group inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-2xl hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-1"
            >
              Agendar Consulta Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/mi-proceso"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent text-accent font-semibold rounded-2xl hover:bg-accent hover:text-white transition-all duration-300"
            >
              Conocer Más del Proceso
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;