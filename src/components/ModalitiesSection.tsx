import { Clock, Users, Video, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModalitiesSection = () => {
  const modalities = [
    {
      icon: Users,
      title: 'Coaching Individual',
      description: 'Sesiones personalizadas uno a uno, completamente adaptadas a tus objetivos específicos y ritmo de aprendizaje.',
      features: [
        'Sesiones de 60-90 minutos',
        'Plan personalizado según tus objetivos',
        'Flexibilidad total de horarios',
        'Seguimiento continuo entre sesiones',
        'Material de apoyo exclusivo'
      ],
      duration: '3-6 meses',
      sessions: '8-12 sesiones',
      price: 'Desde €120/sesión',
      highlight: 'Más Popular',
      color: 'accent'
    },
    {
      icon: Video,
      title: 'Coaching Online',
      description: 'La misma calidad y efectividad del coaching presencial, pero con la comodidad de conectar desde cualquier lugar.',
      features: [
        'Plataforma segura y privada',
        'Grabación de sesiones (opcional)',
        'Recursos digitales incluidos',
        'Disponible en cualquier ubicación',
        'Misma metodología que presencial'
      ],
      duration: '3-6 meses',
      sessions: '8-12 sesiones',
      price: 'Desde €100/sesión',
      highlight: 'Flexibilidad Total',
      color: 'secondary'
    },
    {
      icon: MapPin,
      title: 'Coaching Presencial',
      description: 'Sesiones cara a cara en mi consulta, creando un espacio seguro y confidencial para tu transformación.',
      features: [
        'Ambiente profesional y acogedor',
        'Conexión directa y personal',
        'Técnicas de relajación incluidas',
        'Material físico de apoyo',
        'Sesiones de Reiki complementarias'
      ],
      duration: '3-6 meses',
      sessions: '8-12 sesiones',
      price: 'Desde €140/sesión',
      highlight: 'Experiencia Completa',
      color: 'primary'
    }
  ];

  const intensivePrograms = [
    {
      title: 'Programa Intensivo de Liderazgo',
      description: 'Transformación acelerada en 30 días para líderes que necesitan resultados rápidos.',
      duration: '30 días',
      sessions: '8 sesiones + seguimiento',
      includes: [
        'Evaluación 360° inicial',
        'Plan de acción personalizado',
        'Sesiones semanales intensivas',
        'Seguimiento diario vía WhatsApp',
        'Herramientas de autoevaluación',
        'Certificado de finalización'
      ],
      price: '€1,200',
      savings: 'Ahorra €400 vs sesiones individuales'
    },
    {
      title: 'Retiro de Transformación Personal',
      description: 'Experiencia inmersiva de fin de semana para un cambio profundo y duradero.',
      duration: '2 días (fin de semana)',
      sessions: 'Programa completo',
      includes: [
        'Alojamiento en entorno natural',
        'Todas las comidas incluidas',
        'Sesiones de coaching grupales',
        'Talleres de PNL e Inteligencia Emocional',
        'Sesiones de Reiki y relajación',
        'Material de seguimiento post-retiro'
      ],
      price: '€800',
      savings: 'Experiencia única e inmersiva'
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container-custom mx-auto px-4">
        {/* Header */}
        <div className="content-center mb-20">
          <h2 className="title-section font-heading font-bold text-card-foreground mb-8">
            Modalidades de Coaching
          </h2>
          <p className="text-body-large text-muted-foreground content-balanced">
            Elige la modalidad que mejor se adapte a tu estilo de vida y preferencias de aprendizaje
          </p>
        </div>

        {/* Main Modalities */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {modalities.map((modality, index) => {
            const IconComponent = modality.icon;
            return (
              <div key={index} className="relative">
                {modality.highlight && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-${modality.color} text-white text-sm font-medium rounded-full z-10`}>
                    {modality.highlight}
                  </div>
                )}
                
                <div className="card-elegant p-8 hover-lift h-full">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-${modality.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className={`w-8 h-8 text-${modality.color}`} />
                    </div>
                    
                    <h3 className="title-card font-semibold text-foreground mb-4">
                      {modality.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {modality.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {modality.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                      <div>
                        <div className="text-muted-foreground">Duración</div>
                        <div className="font-medium text-foreground">{modality.duration}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Sesiones</div>
                        <div className="font-medium text-foreground">{modality.sessions}</div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-${modality.color} mb-4`}>
                        {modality.price}
                      </div>
                      
                      <Link
                        to="/contacto"
                        className={`btn-${modality.color === 'accent' ? 'primary' : 'secondary'} w-full`}
                      >
                        Más Información
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Intensive Programs */}
        <div className="bg-background rounded-3xl p-10">
          <div className="content-center mb-12">
            <h3 className="title-card font-semibold text-foreground mb-4">
              Programas Intensivos Especiales
            </h3>
            <p className="text-muted-foreground">
              Para quienes buscan una transformación acelerada o una experiencia inmersiva única
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {intensivePrograms.map((program, index) => (
              <div key={index} className="card-elegant p-8">
                <h4 className="title-card font-semibold text-foreground mb-4">
                  {program.title}
                </h4>
                
                <p className="text-muted-foreground mb-6">
                  {program.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                  <div>
                    <div className="text-muted-foreground">Duración</div>
                    <div className="font-medium text-foreground">{program.duration}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Formato</div>
                    <div className="font-medium text-foreground">{program.sessions}</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <h5 className="font-medium text-foreground">Incluye:</h5>
                  {program.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-accent">{program.price}</div>
                    <div className="text-sm text-muted-foreground">{program.savings}</div>
                  </div>
                  
                  <Link
                    to="/contacto"
                    className="btn-primary w-full"
                  >
                    Consultar Disponibilidad
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="title-card font-semibold text-foreground mb-6">
            ¿No estás seguro de qué modalidad elegir?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            En tu consulta gratuita evaluaremos juntos cuál es la mejor opción según tus objetivos, disponibilidad y preferencias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Clock className="w-5 h-5" />
              Agendar Consulta Gratuita
            </Link>
            <Link
              to="/regalo"
              className="btn-secondary"
            >
              Descargar Guía Gratuita
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;