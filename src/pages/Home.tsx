import HeroSection from '../components/HeroSection';
import CertificationsBar from '../components/CertificationsBar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HeroSection />
      <CertificationsBar />
      
      {/* Resumen de Servicios */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Servicios de Transformación
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Descubre cómo puedo ayudarte a desarrollar tu inteligencia emocional y alcanzar tu máximo potencial profesional y personal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-card rounded-2xl border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-heading font-semibold text-card-foreground mb-3">
                Coaching Personal
              </h3>
              <p className="text-muted-foreground mb-4">
                Sesiones personalizadas para desarrollar tu liderazgo y comunicación efectiva.
              </p>
              <Link 
                to="/servicios" 
                className="text-primary hover:text-accent transition-fast font-medium"
              >
                Ver detalles →
              </Link>
            </div>

            <div className="group p-8 bg-card rounded-2xl border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-heading font-semibold text-card-foreground mb-3">
                Inteligencia Emocional
              </h3>
              <p className="text-muted-foreground mb-4">
                Programa integral para el desarrollo y gestión de tus emociones.
              </p>
              <Link 
                to="/servicios" 
                className="text-primary hover:text-accent transition-fast font-medium"
              >
                Ver detalles →
              </Link>
            </div>

            <div className="group p-8 bg-card rounded-2xl border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-heading font-semibold text-card-foreground mb-3">
                PNL y Transformación
              </h3>
              <p className="text-muted-foreground mb-4">
                Técnicas avanzadas para eliminar bloqueos y reprogramar patrones.
              </p>
              <Link 
                to="/servicios" 
                className="text-primary hover:text-accent transition-fast font-medium"
              >
                Ver detalles →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicios"
              className="btn-primary"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA hacia otras secciones */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            ¿Listo para Comenzar tu Transformación?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Descubre mi proceso y recibe tu guía gratuita de autoevaluación emocional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mi-proceso"
              className="btn-secondary"
            >
              Conoce Mi Proceso
            </Link>
            <Link
              to="/regalo"
              className="btn-accent"
            >
              🎁 Recibe tu Guía Gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;