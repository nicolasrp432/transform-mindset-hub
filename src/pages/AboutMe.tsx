import AboutSection from '../components/AboutSection';
import { Link } from 'react-router-dom';
import coachingSessionImg from '../assets/coaching-session.jpg';

const AboutMe = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom px-4 text-center">
          <h1 className="title-hero font-heading font-bold mb-10 title-gradient text-shadow-soft">
          Conoce a Ainara
        </h1>
          <p className="text-body-large opacity-90 max-w-3xl mx-auto text-sophisticated text-shadow-soft">
          Coach especializada en Inteligencia Emocional y PNL, dedicada a transformar líderes desde la raíz emocional hacia resultados tangibles
        </p>
        </div>
      </section>

      <AboutSection />

      {/* Certificaciones Detalladas */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-20">
            <h2 className="title-section font-heading font-bold text-card-foreground mb-8">
              Formación y Certificaciones
            </h2>
            <p className="text-body-large text-muted-foreground content-balanced">
              Mi compromiso con la excelencia profesional se refleja en mi formación continua y certificaciones especializadas
            </p>
          </div>

          <div className="grid-cards">
            <div className="card-elegant p-10 hover-lift">
              <div className="text-4xl mb-6">🎓</div>
              <h3 className="title-card font-semibold text-foreground mb-4">
                Certificación Coaching ASESCO
              </h3>
              <p className="text-body-elegant text-muted-foreground">
                Asociación Española de Coaching - Formación oficial en metodologías de coaching profesional
              </p>
            </div>

            <div className="card-elegant p-10 hover-lift">
              <div className="text-4xl mb-6">❤️</div>
              <h3 className="title-card font-semibold text-foreground mb-4">
                Herramientas de Autoestima
              </h3>
              <p className="text-body-elegant text-muted-foreground">
                Especialización en técnicas para el desarrollo de la confianza personal y profesional
              </p>
            </div>

            <div className="card-elegant p-10 hover-lift">
              <div className="text-4xl mb-6">🧠</div>
              <h3 className="title-card font-semibold text-foreground mb-4">
                PNL Avanzada
              </h3>
              <p className="text-body-elegant text-muted-foreground">
                Certificación en Programación Neurolingüística y Técnicas Avanzadas
              </p>
            </div>

            <div className="card-elegant p-10 hover-lift">
              <div className="text-4xl mb-6">⚡</div>
              <h3 className="title-card font-semibold text-foreground mb-4">
                Reiki Nivel 2
              </h3>
              <p className="text-body-elegant text-muted-foreground">
                Sanación energética complementaria para equilibrio integral
              </p>
            </div>

            <div className="card-elegant p-10 hover-lift">
              <div className="text-4xl mb-6">🌱</div>
              <h3 className="title-card font-semibold text-foreground mb-4">
                Crecimiento Personal
              </h3>
              <p className="text-body-elegant text-muted-foreground">
                Formación continua en desarrollo personal y técnicas de transformación
              </p>
            </div>

            <div className="card-elegant p-10 hover-lift">
              <div className="text-4xl mb-6">👥</div>
              <h3 className="title-card font-semibold text-foreground mb-4">
                Liderazgo de Equipos
              </h3>
              <p className="text-body-elegant text-muted-foreground">
                Especialización en gestión emocional de equipos y resolución de conflictos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía y Enfoque */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="title-section font-heading font-bold text-foreground mb-8">
                Mi Filosofía de Trabajo
              </h2>
              <div className="space-y-8 text-muted-foreground">
                <p className="text-body-large">
                  Creo firmemente que <strong className="text-foreground">la transformación real comienza desde adentro hacia afuera</strong>. No se trata solo de cambiar comportamientos superficiales, sino de trabajar en la raíz emocional que impulsa nuestras decisiones.
                </p>
                <p>
                  Mi enfoque se basa en la <strong className="text-foreground">integración de múltiples disciplinas</strong>: Coaching, PNL, Inteligencia Emocional y Reiki, creando un proceso holístico que aborda tanto la mente consciente como los patrones inconscientes.
                </p>
                <p>
                  Cada persona es única, por eso <strong className="text-foreground">personalizo cada proceso</strong> según las necesidades específicas, objetivos y contexto de cada cliente, garantizando resultados sostenibles en el tiempo.
                </p>
              </div>

              <div className="mt-8 p-6 bg-card border-l-4 border-accent rounded-r-2xl">
                <blockquote className="text-lg font-accent italic text-card-foreground">
                  "Mi misión es acompañarte en el descubrimiento de tu verdadero potencial, eliminando las barreras internas que te impiden ser la mejor versión de ti mismo."
                </blockquote>
                <cite className="block mt-4 text-muted-foreground font-medium">- Ainara Unamunzaga</cite>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src={coachingSessionImg}
                alt="Ainara en sesión de coaching profesional"
                className="relative w-full h-auto rounded-3xl border border-border shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="title-section font-heading font-bold mb-8">
            ¿Quieres Conocer Más Sobre Mi Proceso?
          </h2>
          <p className="text-body-large mb-10 opacity-90">
            Descubre cómo trabajo y cómo puedo ayudarte en tu proceso de transformación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mi-proceso"
              className="btn-secondary"
            >
              Ver Mi Proceso
            </Link>
            <Link
              to="/contacto"
              className="btn-accent"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;