const ServicesSection = () => {
  const services = [
    {
      icon: "👥",
      title: "Coaching Personal y Ejecutivo",
      description: "Sesiones personalizadas diseñadas para potenciar tu liderazgo y comunicación en entornos profesionales exigentes.",
      benefits: [
        "Desarrollo de liderazgo auténtico",
        "Comunicación asertiva y eficaz",
        "Resolución estratégica de conflictos",
        "Toma de decisiones bajo presión"
      ]
    },
    {
      icon: "🧠",
      title: "Inteligencia Emocional Aplicada",
      description: "Programa integral para desarrollar tu capacidad de gestión emocional y crear relaciones más profundas y efectivas.",
      benefits: [
        "Autoconocimiento emocional profundo",
        "Gestión efectiva del estrés",
        "Desarrollo de la empatía",
        "Regulación emocional avanzada"
      ]
    },
    {
      icon: "🔄",
      title: "PNL y Transformación",
      description: "Técnicas avanzadas de Programación Neurolingüística para eliminar bloqueos y reprogramar patrones mentales limitantes.",
      benefits: [
        "Eliminación de creencias limitantes",
        "Reprogramación mental positiva",
        "Cambio de patrones de comportamiento",
        "Optimización del rendimiento personal"
      ]
    },
    {
      icon: "🏢",
      title: "Consultoría Empresarial",
      description: "Acompañamiento especializado para organizaciones en procesos de cambio y desarrollo de equipos de alto rendimiento.",
      benefits: [
        "Gestión efectiva de equipos",
        "Resolución de conflictos empresariales",
        "Desarrollo del liderazgo organizacional",
        "Cultura empresarial saludable"
      ]
    },
    {
      icon: "⚡",
      title: "Sesiones de Reiki",
      description: "Sanación energética complementaria para equilibrar tu energía vital y reducir el estrés acumulado.",
      benefits: [
        "Equilibrio energético integral",
        "Reducción profunda del estrés",
        "Relajación y bienestar físico",
        "Complemento perfecto al coaching"
      ]
    },
    {
      icon: "🎯",
      title: "Conferencias y Talleres",
      description: "Formaciones grupales especializadas para empresas y organizaciones que buscan transformar su cultura de liderazgo.",
      benefits: [
        "Talleres de liderazgo personalizado",
        "Conferencias motivacionales",
        "Formación en inteligencia emocional",
        "Dinámicas de team building"
      ]
    }
  ];

  return (
    <section id="services" className="bg-background section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 bg-accent rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Mis Servicios
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full"></div>
          </div>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Servicios especializados diseñados para transformar tu liderazgo desde la raíz emocional hacia resultados tangibles y duraderos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl shadow-card hover-lift group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-smooth">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-heading font-bold text-card-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-heading font-semibold text-card-foreground text-sm uppercase tracking-wide">
                  Beneficios Clave:
                </h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm font-body text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Consulta tu Caso Específico
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;