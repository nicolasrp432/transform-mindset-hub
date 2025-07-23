import coachingSession from '../assets/coaching-session.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-secondary rounded-3xl transform rotate-3 opacity-20"></div>
            <img 
              src={coachingSession}
              alt="Sesión de coaching profesional"
              className="relative w-full h-96 object-cover rounded-3xl shadow-card hover-lift"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-1 w-16 bg-accent rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Sobre Mí
                </h2>
              </div>
              
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Mi nombre es <strong className="text-foreground">Ainara Unamunzaga</strong>, y durante más de una década he dedicado mi vida profesional a acompañar a líderes y profesionales en su proceso de transformación consciente.
              </p>
              
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Mi enfoque se basa en la certeza de que <strong className="text-foreground">cuando transformas tu mundo interior, transformas tu realidad exterior</strong>. A través de la Inteligencia Emocional, PNL y técnicas de crecimiento personal, ayudo a mis clientes a desarrollar un liderazgo auténtico y una comunicación asertiva.
              </p>

              <blockquote className="border-l-4 border-accent pl-6 py-4 bg-card rounded-r-2xl shadow-card">
                <p className="text-xl font-accent italic text-card-foreground">
                  "Mi misión es ayudarte a descubrir tu potencial oculto y convertir tus limitaciones en fortalezas que impulsen tu éxito personal y profesional."
                </p>
              </blockquote>
              
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Certificada por <strong className="text-accent">ASESCO (Asociación Española de Coaching)</strong> y especializada en técnicas avanzadas de PNL, combino rigor profesional con una aproximación humana y empática que ha transformado la vida de cientos de profesionales.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-card rounded-2xl shadow-card">
                <div className="text-3xl font-heading font-bold text-primary">+10</div>
                <div className="text-sm font-body text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 bg-card rounded-2xl shadow-card">
                <div className="text-3xl font-heading font-bold text-secondary">+500</div>
                <div className="text-sm font-body text-muted-foreground">Clientes Transformados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;