const CertificationsBar = () => {
  const certifications = [
    {
      icon: "🎓",
      title: "Coaching ASESCO",
      description: "Certificación Oficial en Coaching"
    },
    {
      icon: "🧠",
      title: "Especialista PNL",
      description: "Técnicas Avanzadas en PNL"
    },
    {
      icon: "❤️",
      title: "Inteligencia Emocional",
      description: "Especialista en Herramientas de Autoestima"
    },
    {
      icon: "✨",
      title: "Reiki Nivel 2",
      description: "Sanación Energética Complementaria"
    }
  ];

  return (
    <section className="bg-card py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="text-center space-y-3 hover-lift group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-smooth">
                {cert.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold text-card-foreground">
                {cert.title}
              </h3>
              <p className="text-muted-foreground font-body">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;