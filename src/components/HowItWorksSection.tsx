import { Calendar, MessageCircle, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calendar,
      number: '01',
      title: 'Consulta Inicial Gratuita',
      description: 'Conversamos sobre tus objetivos, desafíos actuales y diseñamos un plan personalizado para tu transformación.',
      duration: '60 minutos',
      highlight: 'Sin compromiso'
    },
    {
      icon: MessageCircle,
      number: '02',
      title: 'Sesiones de Coaching Personalizadas',
      description: 'Trabajamos juntos en sesiones estructuradas combinando PNL, Inteligencia Emocional y técnicas de liderazgo.',
      duration: '8-12 sesiones',
      highlight: 'Metodología probada'
    },
    {
      icon: Target,
      number: '03',
      title: 'Implementación y Práctica',
      description: 'Aplicas las herramientas en tu día a día con mi acompañamiento continuo y ajustes según tus avances.',
      duration: 'Seguimiento continuo',
      highlight: 'Resultados medibles'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Transformación Sostenible',
      description: 'Consolidas los cambios y desarrollas autonomía para mantener tu crecimiento a largo plazo.',
      duration: 'Impacto permanente',
      highlight: 'Cambio duradero'
    }
  ];

  const benefits = [
    {
      stat: '95%',
      description: 'de mis clientes reportan mejora significativa en su liderazgo'
    },
    {
      stat: '3-6',
      description: 'meses promedio para ver transformaciones profundas'
    },
    {
      stat: '100%',
      description: 'personalización según tus necesidades específicas'
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
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <div className="card-elegant p-8 hover-lift h-full">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-accent opacity-20">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="title-card font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                          {step.highlight}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-accent font-medium">
                        <Calendar className="w-4 h-4" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connector line for desktop */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Benefits Stats */}
        <div className="bg-card rounded-3xl p-10 mb-16">
          <h3 className="title-card font-semibold text-card-foreground text-center mb-12">
            Resultados que Puedes Esperar
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-3">
                  {benefit.stat}
                </div>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Preview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="title-section font-bold text-foreground mb-8">
              Mi Metodología Integral
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold text-sm">PNL</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Programación Neurolingüística</h4>
                  <p className="text-muted-foreground text-sm">
                    Reprogramamos patrones mentales limitantes y creamos nuevas conexiones neuronales para el éxito.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold text-sm">IE</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Inteligencia Emocional</h4>
                  <p className="text-muted-foreground text-sm">
                    Desarrollamos tu capacidad de reconocer, entender y gestionar emociones propias y ajenas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold text-sm">C</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Coaching Estratégico</h4>
                  <p className="text-muted-foreground text-sm">
                    Estructuramos un plan de acción claro con objetivos medibles y seguimiento continuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-card p-8 rounded-3xl border border-border">
              <h4 className="font-semibold text-card-foreground mb-6 text-center">
                Proceso Personalizado
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-background rounded-xl">
                  <span className="text-sm text-muted-foreground">Evaluación inicial</span>
                  <span className="text-accent font-medium">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-xl">
                  <span className="text-sm text-muted-foreground">Plan personalizado</span>
                  <span className="text-accent font-medium">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-xl">
                  <span className="text-sm text-muted-foreground">Sesiones estructuradas</span>
                  <span className="text-accent font-medium">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-xl">
                  <span className="text-sm text-muted-foreground">Seguimiento continuo</span>
                  <span className="text-accent font-medium">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-xl">
                  <span className="text-sm text-muted-foreground">Resultados medibles</span>
                  <span className="text-accent font-medium">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="title-card font-semibold text-foreground mb-6">
            ¿Listo para Comenzar Tu Transformación?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            El primer paso es siempre el más importante. Agenda tu consulta gratuita y descubre cómo puedo ayudarte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="btn-primary"
            >
              Agendar Consulta Gratuita
            </Link>
            <Link
              to="/mi-proceso"
              className="btn-secondary"
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