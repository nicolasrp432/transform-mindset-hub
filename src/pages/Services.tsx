import ServicesSection from '../components/ServicesSection';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <div className="content-center mb-20">
            <h1 className="title-hero text-foreground mb-10 title-gradient text-shadow-soft">
            Servicios de Coaching
          </h1>
            <p className="text-body-large leading-relaxed content-balanced text-sophisticated text-shadow-soft">
              Programas personalizados de coaching diseñados para transformar tu liderazgo 
              y potenciar tu inteligencia emocional desde la raíz.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Información Adicional sobre Servicios */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-20">
            <h2 className="title-section text-card-foreground mb-8">
              ¿Cómo Funcionan Mis Servicios?
            </h2>
            <p className="text-body-large text-sophisticated content-balanced">
              Cada servicio está diseñado con una metodología probada que garantiza resultados sostenibles y transformación profunda
            </p>
          </div>

          <div className="grid-services-info">
            <div>
              <h3 className="title-card text-card-foreground mb-8">
                Modalidades de Trabajo
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Sesiones Individuales</h4>
                    <p className="text-body-elegant text-sophisticated">Coaching personalizado 1:1 presencial u online</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Programas Intensivos</h4>
                    <p className="text-body-elegant text-sophisticated">Procesos de 3-6 meses con seguimiento continuo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Talleres Grupales</h4>
                    <p className="text-body-elegant text-sophisticated">Formaciones especializadas para equipos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Consultoría Empresarial</h4>
                    <p className="text-body-elegant text-sophisticated">Asesoramiento para organizaciones y equipos</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="title-card text-card-foreground mb-8">
                Qué Incluye Cada Servicio
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Evaluación Inicial</h4>
                    <p className="text-body-elegant text-sophisticated">Diagnóstico completo de tu situación actual</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Plan Personalizado</h4>
                    <p className="text-body-elegant text-sophisticated">Estrategia diseñada específicamente para ti</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Material de Apoyo</h4>
                    <p className="text-body-elegant text-sophisticated">Recursos, ejercicios y herramientas prácticas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-3">Seguimiento Continuo</h4>
                    <p className="text-body-elegant text-sophisticated">Acompañamiento durante todo el proceso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes sobre Servicios */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-20">
            <h2 className="title-section text-foreground mb-8">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="content-balanced space-y-8">
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                ¿Cuánto tiempo dura un proceso típico?
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Los procesos varían según los objetivos, pero típicamente van de 3 a 6 meses para transformaciones profundas. Las sesiones individuales pueden mostrar resultados desde la primera consulta.
              </p>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                ¿Ofrecés sesiones online?
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Sí, trabajo tanto presencial en Bilbao como online. Las sesiones virtuales son igual de efectivas y me permiten acompañar a clientes de cualquier ubicación.
              </p>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                ¿Cómo sé qué servicio es el adecuado para mí?
              </h3>
              <p className="text-body-elegant text-sophisticated">
                En nuestra primera consulta gratuita evaluamos tu situación específica y diseñamos el enfoque más adecuado. Cada persona es única y merece un plan personalizado.
              </p>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                ¿Qué garantías ofrecés en tus servicios?
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Mi compromiso es tu transformación. Si después de 3 sesiones no ves avances significativos, trabajamos juntos para ajustar el enfoque hasta encontrar la metodología que funcione para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="content-center">
            <h2 className="title-section mb-8">
              ¿Listo para Elegir tu Servicio?
            </h2>
            <p className="text-body-large mb-10 opacity-90 text-sophisticated">
              Conversemos sobre tus necesidades específicas y encontremos el servicio perfecto para tu transformación
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contacto"
              className="btn-secondary px-12 py-5 text-lg"
            >
              Consulta Gratuita
            </Link>
            <Link
              to="/regalo"
              className="btn-accent px-12 py-5 text-lg"
            >
              🎁 Recibe tu Guía Gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;