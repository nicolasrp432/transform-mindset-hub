const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      position: "Director General, Empresa Tecnológica",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "Trabajar con Ainara ha sido transformador para mi liderazgo. En 6 meses logré mejorar significativamente la comunicación con mi equipo y reducir los conflictos internos en un 80%. Su enfoque con PNL me ayudó a identificar y cambiar patrones que llevaba años arrastrando.",
      rating: 5
    },
    {
      name: "María José Fernández",
      position: "Gerente de Recursos Humanos, Multinacional",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "La metodología de Ainara es única. Su combinación de inteligencia emocional y coaching ejecutivo me permitió gestionar mejor el estrés y liderar con mayor autenticidad. Mi equipo nota la diferencia y los resultados hablan por sí solos: 40% de mejora en satisfacción laboral.",
      rating: 5
    },
    {
      name: "Javier Ruiz",
      position: "Emprendedor y CEO, Startup Fintech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "Ainara me ayudó a superar mis bloqueos como líder novel. Sus técnicas de PNL fueron clave para desarrollar confianza en mí mismo y mejorar mi capacidad de toma de decisiones bajo presión. Hoy lidero mi empresa con una claridad que antes no tenía.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-accent text-xl">★</span>
    ));
  };

  return (
    <section id="testimonials" className="bg-background section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 bg-accent rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Historias de Transformación
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full"></div>
          </div>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo profesionales como tú han transformado su liderazgo y alcanzado resultados extraordinarios.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-3xl shadow-card hover-lift relative"
            >
              {/* Quote Mark */}
              <div className="absolute -top-4 -left-4 text-6xl text-accent opacity-20 font-accent">
                "
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground font-body leading-relaxed mb-6 font-accent italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-border">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-card-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-primary/5 rounded-2xl">
            <div className="text-4xl font-heading font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground font-body">Mejora en Liderazgo</div>
          </div>
          <div className="text-center p-6 bg-secondary/5 rounded-2xl">
            <div className="text-4xl font-heading font-bold text-secondary mb-2">90%</div>
            <div className="text-muted-foreground font-body">Reducción de Conflictos</div>
          </div>
          <div className="text-center p-6 bg-accent/5 rounded-2xl">
            <div className="text-4xl font-heading font-bold text-accent mb-2">88%</div>
            <div className="text-muted-foreground font-body">Satisfacción del Cliente</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('gift')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Únete a estas Historias de Éxito
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;