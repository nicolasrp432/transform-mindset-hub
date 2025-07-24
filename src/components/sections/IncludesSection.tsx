import { CheckCircle, Gift, BookOpen, Users, Headphones, Calendar, MessageCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const IncludesSection = () => {
  const mainIncludes = [
    {
      icon: Calendar,
      title: 'Sesiones de Coaching Personalizadas',
      description: 'Entre 8-12 sesiones individuales de 60-90 minutos, completamente adaptadas a tus objetivos específicos.',
      details: [
        'Evaluación inicial completa',
        'Plan de acción personalizado',
        'Seguimiento de progreso',
        'Ajustes según evolución'
      ]
    },
    {
      icon: BookOpen,
      title: 'Material de Apoyo Exclusivo',
      description: 'Recursos digitales y físicos diseñados específicamente para reforzar tu aprendizaje.',
      details: [
        'Workbook personalizado',
        'Ejercicios de autoevaluación',
        'Técnicas de PNL aplicadas',
        'Herramientas de inteligencia emocional'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Soporte Continuo Entre Sesiones',
      description: 'Acompañamiento constante para resolver dudas y mantener el momentum de tu transformación.',
      details: [
        'WhatsApp directo conmigo',
        'Respuesta en 24h máximo',
        'Micro-sesiones de apoyo',
        'Recordatorios de práctica'
      ]
    },
    {
      icon: Users,
      title: 'Acceso a Comunidad Exclusiva',
      description: 'Conecta con otros profesionales en proceso de transformación y comparte experiencias.',
      details: [
        'Grupo privado de LinkedIn',
        'Eventos mensuales online',
        'Intercambio de experiencias',
        'Red de networking profesional'
      ]
    }
  ];

  const bonusIncludes = [
    {
      icon: Gift,
      title: 'Sesión de Reiki Complementaria',
      description: 'Una sesión de Reiki incluida para trabajar el equilibrio energético y la relajación profunda.',
      value: '€80'
    },
    {
      icon: Headphones,
      title: 'Audios de Meditación Guiada',
      description: 'Colección exclusiva de meditaciones grabadas por mí para diferentes momentos del proceso.',
      value: '€50'
    },
    {
      icon: BookOpen,
      title: 'E-book "Liderazgo Consciente"',
      description: 'Mi guía completa sobre liderazgo emocional y transformación personal (próximamente en librerías).',
      value: '€25'
    },
    {
      icon: Award,
      title: 'Certificado de Finalización',
      description: 'Reconocimiento oficial de tu proceso de transformación y las competencias desarrolladas.',
      value: '€30'
    }
  ];

  const guarantees = [
    {
      title: 'Garantía de Satisfacción',
      description: 'Si después de las primeras 3 sesiones no sientes que estamos avanzando hacia tus objetivos, te devuelvo el 100% de tu inversión.',
      icon: CheckCircle
    },
    {
      title: 'Compromiso de Resultados',
      description: 'Me comprometo a trabajar contigo hasta que alcances los objetivos que definamos juntos en la primera sesión.',
      icon: CheckCircle
    },
    {
      title: 'Flexibilidad Total',
      description: 'Puedes reprogramar sesiones con 24h de antelación sin coste adicional. Tu vida es impredecible, tu coaching debe ser flexible.',
      icon: CheckCircle
    }
  ];

  const totalValue = bonusIncludes.reduce((sum, item) => sum + parseInt(item.value.replace('€', '')), 0);

  return (
    <section className="py-20 bg-background">
      <div className="container-custom mx-auto px-4">
        {/* Header */}
        <div className="content-center mb-20">
          <h2 className="title-section font-heading font-bold text-foreground mb-8">
            Todo lo que Incluye tu Proceso de Transformación
          </h2>
          <p className="text-body-large text-muted-foreground content-balanced">
            Un programa completo diseñado para garantizar tu éxito y transformación duradera
          </p>
        </div>

        {/* Main Includes */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {mainIncludes.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="card-elegant p-8 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="title-card font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {item.description}
                    </p>
                    
                    <div className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bonus Section */}
        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-10 mb-20">
          <div className="content-center mb-12">
            <h3 className="title-card font-semibold text-foreground mb-4">
              Bonificaciones Exclusivas
            </h3>
            <p className="text-muted-foreground mb-6">
              Recursos adicionales que potencian tu transformación
            </p>
            <div className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
              <Gift className="w-4 h-4" />
              Valor total: €{totalValue} - ¡Incluido sin coste adicional!
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {bonusIncludes.map((bonus, index) => {
              const IconComponent = bonus.icon;
              return (
                <div key={index} className="bg-white/50 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{bonus.title}</h4>
                        <span className="text-accent font-medium">{bonus.value}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{bonus.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-card rounded-3xl p-10">
          <div className="content-center mb-12">
            <h3 className="title-card font-semibold text-card-foreground mb-4">
              Mis Garantías para Ti
            </h3>
            <p className="text-muted-foreground">
              Tu tranquilidad y confianza son fundamentales para el éxito del proceso
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h4 className="font-semibold text-card-foreground mb-4">
                    {guarantee.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm">
                    {guarantee.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Investment Summary */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-10 text-white mt-20">
          <div className="content-center">
            <h3 className="title-card font-semibold mb-6">
              Resumen de tu Inversión
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8-12</div>
                <div className="text-white/80">Sesiones Personalizadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">€{totalValue}</div>
                <div className="text-white/80">En Bonificaciones</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3-6</div>
                <div className="text-white/80">Meses de Transformación</div>
              </div>
            </div>
            
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Una inversión en ti mismo que transformará no solo tu carrera profesional, sino toda tu vida. 
              Los resultados que obtengas te acompañarán para siempre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center"
              >
                Comenzar mi Transformación
              </Link>
              <Link
                to="/regalo"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Descargar Guía Gratuita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludesSection;