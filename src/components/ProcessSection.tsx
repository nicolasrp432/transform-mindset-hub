const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Inicial",
      description: "Realizamos una evaluación profunda de tu situación actual, identificando fortalezas, áreas de mejora y objetivos específicos de transformación.",
      features: [
        "Análisis de inteligencia emocional",
        "Evaluación de patrones de liderazgo",
        "Identificación de objetivos personalizados"
      ]
    },
    {
      number: "02",
      title: "Diseño Personalizado",
      description: "Creo un plan de trabajo completamente adaptado a tus necesidades, combinando coaching, PNL y técnicas de crecimiento personal.",
      features: [
        "Plan de acción personalizado",
        "Metodología adaptada a tu perfil",
        "Herramientas específicas seleccionadas"
      ]
    },
    {
      number: "03",
      title: "Implementación Activa",
      description: "Trabajamos juntos en sesiones regulares, aplicando técnicas prácticas y desarrollando nuevas habilidades de forma progresiva y sostenible.",
      features: [
        "Sesiones de coaching semanales",
        "Ejercicios prácticos específicos",
        "Seguimiento continuo del progreso"
      ]
    },
    {
      number: "04",
      title: "Integración y Seguimiento",
      description: "Consolidamos los cambios alcanzados y establecemos sistemas de mantenimiento para asegurar que la transformación sea duradera.",
      features: [
        "Integración de nuevos hábitos",
        "Sistema de seguimiento personalizado",
        "Sesiones de refuerzo estratégicas"
      ]
    }
  ];

  return (
    <section id="process" className="bg-muted section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 bg-accent rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Mi Proceso: "Transformación Consciente"
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full"></div>
          </div>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Un proceso estructurado y personalizado que te acompaña desde el autoconocimiento hasta la materialización de tu máximo potencial de liderazgo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl shadow-card hover-lift relative"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-heading font-bold shadow-gold">
                {step.number}
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-heading font-semibold text-card-foreground text-sm uppercase tracking-wide">
                    Incluye:
                  </h4>
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm font-body text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Indicator */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-px h-32 bg-accent opacity-30"></div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-body text-muted-foreground mb-6">
            Cada proceso es único y se adapta a tu ritmo y objetivos específicos
          </p>
          <button 
            onClick={() => document.getElementById('gift')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Comienza tu Evaluación Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;