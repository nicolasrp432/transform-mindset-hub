import { Brain, Heart, Compass, Target, Users, Lightbulb, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhilosophySection = () => {
  const coreBeliefs = [
    {
      icon: Brain,
      title: 'El Cerebro es Maleable',
      description: 'Gracias a la neuroplasticidad, puedes crear nuevos patrones de pensamiento a cualquier edad. Tu pasado no determina tu futuro.',
      principle: 'Neuroplasticidad Aplicada',
      color: 'primary'
    },
    {
      icon: Heart,
      title: 'Las Emociones son Información',
      description: 'No hay emociones "buenas" o "malas". Todas nos dan información valiosa sobre nuestras necesidades y valores.',
      principle: 'Inteligencia Emocional',
      color: 'accent'
    },
    {
      icon: Compass,
      title: 'Cada Persona es Única',
      description: 'No existen fórmulas mágicas universales. Mi trabajo es encontrar el camino que funciona específicamente para ti.',
      principle: 'Personalización Total',
      color: 'secondary'
    },
    {
      icon: Target,
      title: 'La Acción Crea Transformación',
      description: 'El insight sin acción es solo entretenimiento. Los cambios reales suceden cuando pasas del conocimiento a la práctica.',
      principle: 'Orientación a Resultados',
      color: 'primary'
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Conciencia',
      description: 'Primero necesitas ver claramente dónde estás y hacia dónde quieres ir.',
      techniques: ['Evaluación 360°', 'Mapeo de valores', 'Identificación de patrones']
    },
    {
      step: '02',
      title: 'Comprensión',
      description: 'Entender el "por qué" detrás de tus comportamientos y limitaciones actuales.',
      techniques: ['Análisis de creencias', 'Línea del tiempo', 'Modelado de excelencia']
    },
    {
      step: '03',
      title: 'Transformación',
      description: 'Crear nuevos patrones de pensamiento y comportamiento alineados con tus objetivos.',
      techniques: ['Técnicas de PNL', 'Anclajes positivos', 'Reestructuración cognitiva']
    },
    {
      step: '04',
      title: 'Integración',
      description: 'Hacer que los nuevos comportamientos se conviertan en hábitos automáticos.',
      techniques: ['Práctica deliberada', 'Seguimiento continuo', 'Ajustes personalizados']
    }
  ];

  const principles = [
    {
      title: 'Confidencialidad Absoluta',
      description: 'Todo lo que compartimos queda entre nosotros. Creo un espacio seguro donde puedes ser completamente auténtico.'
    },
    {
      title: 'Sin Juicios',
      description: 'No estoy aquí para juzgarte, sino para acompañarte. Cada experiencia es válida y cada paso cuenta.'
    },
    {
      title: 'Colaboración Activa',
      description: 'Tú eres el experto en tu vida. Yo aporto herramientas y perspectiva, pero las decisiones siempre son tuyas.'
    },
    {
      title: 'Resultados Medibles',
      description: 'Establecemos objetivos claros y medimos el progreso constantemente. Si algo no funciona, lo ajustamos.'
    },
    {
      title: 'Crecimiento Mutuo',
      description: 'Cada cliente me enseña algo nuevo. Mantengo una mentalidad de aprendiz para ofrecerte siempre lo mejor.'
    },
    {
      title: 'Compromiso Total',
      description: 'Me comprometo al 100% con tu proceso. Espero el mismo nivel de compromiso de tu parte.'
    }
  ];

  const testimonialQuote = {
    text: "Ainara no solo me ayudó a cambiar mi perspectiva, sino que me dio las herramientas para mantener esa transformación a largo plazo. Su enfoque es profundo pero práctico, y siempre se adapta a lo que necesito en cada momento.",
    author: "María González",
    role: "Directora de Marketing",
    company: "Empresa Fortune 500"
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-custom mx-auto px-4">
        {/* Header */}
        <div className="content-center mb-20">
          <h2 className="title-section font-heading font-bold text-foreground mb-8">
            Mi Filosofía de Transformación
          </h2>
          <p className="text-body-large text-muted-foreground content-balanced">
            Los principios fundamentales que guían mi trabajo y definen cómo entiendo el proceso de cambio personal
          </p>
        </div>

        {/* Core Beliefs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {coreBeliefs.map((belief, index) => {
            const IconComponent = belief.icon;
            return (
              <div key={index} className="card-elegant p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 bg-${belief.color}/10 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-7 h-7 text-${belief.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className={`text-${belief.color} text-sm font-medium mb-2`}>
                      {belief.principle}
                    </div>
                    
                    <h3 className="title-card font-semibold text-foreground mb-4">
                      {belief.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {belief.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodology */}
        <div className="bg-card rounded-3xl p-10 mb-20">
          <div className="content-center mb-16">
            <h3 className="title-card font-semibold text-card-foreground mb-4">
              Mi Metodología: El Proceso C.C.T.I.
            </h3>
            <p className="text-muted-foreground">
              Un enfoque estructurado pero flexible que se adapta a tu ritmo y necesidades específicas
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-accent transform translate-x-4"></div>
                )}
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                    {phase.step}
                  </div>
                  
                  <h4 className="font-semibold text-card-foreground mb-4">
                    {phase.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {phase.description}
                  </p>
                  
                  <div className="space-y-2">
                    {phase.techniques.map((technique, techIndex) => (
                      <div key={techIndex} className="text-xs text-accent bg-accent/10 rounded-full px-3 py-1 inline-block mr-2 mb-2">
                        {technique}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Working Principles */}
        <div className="mb-20">
          <div className="content-center mb-16">
            <h3 className="title-card font-semibold text-foreground mb-4">
              Mis Principios de Trabajo
            </h3>
            <p className="text-muted-foreground">
              Los valores que definen cómo trabajo contigo y qué puedes esperar de nuestras sesiones
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="card-elegant p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      {principle.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy in Action - Testimonial */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-10 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="content-center mb-12">
              <Quote className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="title-card font-semibold text-foreground mb-4">
                Mi Filosofía en Acción
              </h3>
              <p className="text-muted-foreground">
                Lo que dicen mis clientes sobre cómo aplico estos principios en la práctica
              </p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                "{testimonialQuote.text}"
              </p>
              
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-foreground">{testimonialQuote.author}</div>
                <div className="text-muted-foreground text-sm">
                  {testimonialQuote.role} • {testimonialQuote.company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Mission */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 opacity-90" />
            
            <h3 className="title-card font-semibold mb-6">
              Mi Misión Personal
            </h3>
            
            <p className="text-xl text-white/95 mb-8 leading-relaxed">
              "Creo profundamente que cada persona tiene un potencial único e ilimitado. 
              Mi misión es ayudarte a descubrir ese potencial, desarrollarlo y expresarlo 
              de manera auténtica en tu vida personal y profesional."
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-white/90">
                No se trata de convertirte en alguien diferente, sino de convertirte en 
                la mejor y más auténtica versión de quien ya eres.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Comenzar mi Transformación
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/proceso"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Ver Cómo Trabajo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;