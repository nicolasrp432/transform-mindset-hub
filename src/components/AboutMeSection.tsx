import { Heart, Users, Award, BookOpen, Lightbulb, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutMeSection = () => {
  const journey = [
    {
      year: '2008',
      title: 'Inicio en el Mundo Empresarial',
      description: 'Comencé mi carrera en consultoría empresarial, donde descubrí mi pasión por ayudar a las personas a alcanzar su máximo potencial.'
    },
    {
      year: '2015',
      title: 'Formación en Coaching y PNL',
      description: 'Me certifiqué como Coach Profesional y Master en PNL, combinando mi experiencia empresarial con herramientas de transformación personal.'
    },
    {
      year: '2018',
      title: 'Especialización en Inteligencia Emocional',
      description: 'Profundicé en neuroplasticidad e inteligencia emocional, entendiendo cómo el cerebro puede crear nuevos patrones de pensamiento.'
    },
    {
      year: '2020',
      title: 'Integración de Técnicas Energéticas',
      description: 'Incorporé Reiki y técnicas de equilibrio energético para ofrecer un enfoque más holístico de la transformación personal.'
    },
    {
      year: '2023',
      title: 'Transform Mindset Hub',
      description: 'Lancé mi práctica independiente, enfocándome exclusivamente en la transformación consciente de líderes y profesionales.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Autenticidad',
      description: 'Creo firmemente que la verdadera transformación solo ocurre cuando nos conectamos con nuestra esencia más auténtica.',
      color: 'accent'
    },
    {
      icon: Users,
      title: 'Conexión Humana',
      description: 'Cada persona es única. Mi enfoque se basa en crear una conexión genuina que permita un crecimiento real y duradero.',
      color: 'primary'
    },
    {
      icon: Target,
      title: 'Resultados Tangibles',
      description: 'No me conformo con cambios superficiales. Trabajo contigo hasta que veas transformaciones reales en tu vida.',
      color: 'secondary'
    },
    {
      icon: Lightbulb,
      title: 'Crecimiento Continuo',
      description: 'Sigo formándome constantemente para ofrecerte las técnicas más efectivas y actualizadas del coaching moderno.',
      color: 'accent'
    }
  ];

  const stats = [
    {
      number: '200+',
      label: 'Clientes Transformados',
      description: 'Profesionales que han alcanzado sus objetivos'
    },
    {
      number: '95%',
      label: 'Satisfacción',
      description: 'De clientes que recomiendan mis servicios'
    },
    {
      number: '15+',
      label: 'Años de Experiencia',
      description: 'En desarrollo personal y empresarial'
    },
    {
      number: '500+',
      label: 'Horas de Formación',
      description: 'En coaching, PNL e inteligencia emocional'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom mx-auto px-4">
        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="title-section font-heading font-bold text-foreground mb-8">
              Mi Historia Personal
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-body-large">
                Durante años trabajé en el mundo empresarial, ayudando a compañías a optimizar sus procesos. 
                Pero algo me faltaba: <strong className="text-foreground">el factor humano</strong>.
              </p>
              
              <p>
                Me di cuenta de que detrás de cada "problema empresarial" había personas con miedos, 
                limitaciones y un potencial increíble sin explotar. Fue entonces cuando decidí enfocar 
                mi carrera en lo que realmente me apasiona: <strong className="text-foreground">la transformación humana</strong>.
              </p>
              
              <p>
                Hoy combino mi experiencia empresarial con técnicas avanzadas de coaching, PNL e inteligencia 
                emocional para ayudar a profesionales como tú a crear la vida y carrera que realmente desean.
              </p>
              
              <p className="text-primary font-medium">
                "Mi misión es simple: ayudarte a convertirte en la versión más auténtica y poderosa de ti mismo."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-semibold text-foreground mb-6 text-center">
                  Lo que me diferencia
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">15+ años de experiencia empresarial real</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Certificaciones internacionales en coaching y PNL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Enfoque holístico: mente, emociones y energía</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Resultados medibles y transformaciones duraderas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <div className="content-center mb-16">
            <h3 className="title-card font-semibold text-foreground mb-4">
              Mi Camino hacia la Transformación Consciente
            </h3>
            <p className="text-muted-foreground">
              Un viaje de crecimiento personal y profesional que me llevó a especializarme en lo que realmente importa
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-accent h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {journey.map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="card-elegant p-6">
                      <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="font-semibold text-foreground mb-3">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg flex-shrink-0 hidden lg:block"></div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="content-center mb-16">
            <h3 className="title-card font-semibold text-foreground mb-4">
              Mis Valores Fundamentales
            </h3>
            <p className="text-muted-foreground">
              Los principios que guían mi trabajo y mi relación contigo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-${value.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`w-8 h-8 text-${value.color}`} />
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-4">
                    {value.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-10 text-white mb-20">
          <div className="content-center mb-12">
            <h3 className="title-card font-semibold mb-4">
              Resultados que Hablan por Sí Solos
            </h3>
            <p className="text-white/90">
              Números que reflejan el impacto real en la vida de mis clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="font-medium mb-2">{stat.label}</div>
                <div className="text-white/80 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="bg-card rounded-3xl p-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="title-card font-semibold text-card-foreground mb-6">
                Más Allá del Coaching Profesional
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cuando no estoy en sesiones de coaching, me encontrarás practicando yoga, 
                  meditando en la naturaleza o leyendo sobre neurociencia y desarrollo humano.
                </p>
                
                <p>
                  Creo firmemente que para ayudar a otros a transformarse, debo estar en 
                  constante crecimiento personal. Por eso dedico tiempo cada día a mi propia 
                  evolución y bienestar.
                </p>
                
                <p className="text-primary font-medium">
                  "Solo puedo llevarte tan lejos como yo misma haya llegado. Por eso nunca dejo de crecer."
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <BookOpen className="w-6 h-6 text-accent" />
                <span className="text-muted-foreground">Lectora voraz de desarrollo personal y neurociencia</span>
              </div>
              <div className="flex items-center gap-4">
                <Heart className="w-6 h-6 text-accent" />
                <span className="text-muted-foreground">Practicante de yoga y meditación desde hace 10 años</span>
              </div>
              <div className="flex items-center gap-4">
                <Award className="w-6 h-6 text-accent" />
                <span className="text-muted-foreground">En formación continua en nuevas técnicas de coaching</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="title-card font-semibold text-foreground mb-6">
            ¿Listo para Comenzar tu Transformación?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            En nuestra primera conversación, conoceremos tus objetivos y veremos si somos un buen match 
            para trabajar juntos en tu proceso de transformación.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="btn-primary"
            >
              Agendar Consulta Gratuita
            </Link>
            <Link
              to="/servicios"
              className="btn-secondary"
            >
              Ver Mis Servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;