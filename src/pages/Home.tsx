import HeroSection from '../components/HeroSection';
import CertificationsBar from '../components/CertificationsBar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HeroSection />
      
      {/* Mental Health Assessment Section */}
      <section className="section-padding bg-soft-gradient">
        <div className="container-custom">
          <div className="content-center space-elegant">
            <h2 className="title-section text-foreground mb-8 title-gradient text-shadow-soft">
              Tu Salud Mental es Importante
            </h2>
            <p className="text-body-large content-balanced text-sophisticated text-shadow-soft">
              Descubre cómo te sientes hoy y recibe apoyo personalizado para tu bienestar emocional.
            </p>
            
            {/* Quick Assessment Cards */}
            <div className="grid-cards mt-20">
              <div className="card-elegant p-10 hover-lift group">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-elegant">
                  <svg className="icon-large text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="title-card text-card-foreground mb-4">
                  Evaluación Rápida
                </h3>
                <p className="text-body-elegant text-sophisticated mb-8">
                  Completa nuestra evaluación de 2 minutos para entender tu estado emocional actual.
                </p>
                <Link to="/evaluacion" className="btn-accent">
                  Evaluar
                </Link>
              </div>

              <div className="card-elegant p-10 hover-lift group">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-elegant">
                  <svg className="icon-large text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="title-card text-card-foreground mb-4">
                  Apoyo Profesional
                </h3>
                <p className="text-body-elegant text-sophisticated mb-8">
                  Conecta con terapeutas especializados que entienden tus necesidades específicas.
                </p>
                <Link to="/terapeutas" className="btn-primary">
                  Conectar
                </Link>
              </div>

              <div className="card-elegant p-10 hover-lift group">
                <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-elegant">
                  <svg className="icon-large text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="title-card text-card-foreground mb-4">
                  Recursos Gratuitos
                </h3>
                <p className="text-body-elegant text-sophisticated mb-8">
                  Accede a herramientas, ejercicios y contenido educativo para tu bienestar diario.
                </p>
                <Link to="/recursos" className="btn-secondary">
                  Explorar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="content-center mb-20">
            <h2 className="title-section text-foreground mb-8 title-gradient text-shadow-soft">
              Cómo Funciona
            </h2>
            <p className="text-body-large content-balanced text-sophisticated text-shadow-soft">
              Un proceso simple y efectivo para cuidar tu salud mental
            </p>
          </div>

          <div className="grid-elegant grid-cols-1 lg:grid-cols-2">
            <div className="flex items-start space-x-8 slide-in-left">
              <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="title-card text-foreground mb-6">
                  Evalúa tu Estado Actual
                </h3>
                <p className="text-body-elegant text-sophisticated">
                  Completa nuestra evaluación confidencial para entender mejor tu bienestar emocional y identificar áreas de mejora.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-8 slide-in-right">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="title-card text-foreground mb-6">
                  Encuentra tu Apoyo Ideal
                </h3>
                <p className="text-body-elegant text-sophisticated">
                  Te conectamos con profesionales especializados que se adaptan a tus necesidades específicas y preferencias personales.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-8 slide-in-left">
              <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="title-card text-foreground mb-6">
                  Comienza tu Viaje de Bienestar
                </h3>
                <p className="text-body-elegant text-sophisticated">
                  Inicia sesiones personalizadas y accede a recursos que te ayudarán a desarrollar herramientas para una vida más plena.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-8 slide-in-right">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="title-card text-foreground mb-6">
                  Mantén tu Progreso
                </h3>
                <p className="text-body-elegant text-sophisticated">
                  Monitorea tu evolución y mantén el impulso con herramientas de seguimiento y apoyo continuo de nuestra comunidad.
                </p>
              </div>
            </div>
          </div>

          <div className="content-center mt-20">
            <Link to="/comenzar" className="btn-cta">
              Comenzar Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-primary-foreground">
        <div className="container-custom">
          <div className="content-center space-elegant">
            <h2 className="title-section mb-8">
              Tu Bienestar Mental Merece Atención
            </h2>
            <p className="text-body-large leading-relaxed opacity-90 content-balanced mb-12">
              No esperes más para cuidar tu salud mental. Da el primer paso hacia una vida más equilibrada y plena.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link to="/evaluacion" className="btn-accent text-lg px-12 py-5">
                Evaluación Gratuita
              </Link>
              <Link to="/contacto" className="btn-secondary text-lg px-12 py-5">
                Hablar con un Especialista
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;