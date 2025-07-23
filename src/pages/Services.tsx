import ServicesSection from '../components/ServicesSection';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">
            Mis Servicios
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Servicios especializados en Inteligencia Emocional, Coaching y PNL diseñados para transformar tu liderazgo y potencial personal
          </p>
        </div>
      </section>

      <ServicesSection />

      {/* Información Adicional sobre Servicios */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-card-foreground mb-6">
              ¿Cómo Funcionan Mis Servicios?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cada servicio está diseñado con una metodología probada que garantiza resultados sostenibles y transformación profunda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-card-foreground mb-6">
                Modalidades de Trabajo
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Sesiones Individuales</h4>
                    <p className="text-muted-foreground">Coaching personalizado 1:1 presencial u online</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Programas Intensivos</h4>
                    <p className="text-muted-foreground">Procesos de 3-6 meses con seguimiento continuo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Talleres Grupales</h4>
                    <p className="text-muted-foreground">Formaciones especializadas para equipos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Consultoría Empresarial</h4>
                    <p className="text-muted-foreground">Asesoramiento para organizaciones y equipos</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-semibold text-card-foreground mb-6">
                Qué Incluye Cada Servicio
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Evaluación Inicial</h4>
                    <p className="text-muted-foreground">Diagnóstico completo de tu situación actual</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Plan Personalizado</h4>
                    <p className="text-muted-foreground">Estrategia diseñada específicamente para ti</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Material de Apoyo</h4>
                    <p className="text-muted-foreground">Recursos, ejercicios y herramientas prácticas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Seguimiento Continuo</h4>
                    <p className="text-muted-foreground">Acompañamiento durante todo el proceso</p>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                ¿Cuánto tiempo dura un proceso típico?
              </h3>
              <p className="text-muted-foreground">
                Los procesos varían según los objetivos, pero típicamente van de 3 a 6 meses para transformaciones profundas. Las sesiones individuales pueden mostrar resultados desde la primera consulta.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                ¿Ofrecés sesiones online?
              </h3>
              <p className="text-muted-foreground">
                Sí, trabajo tanto presencial en Bilbao como online. Las sesiones virtuales son igual de efectivas y me permiten acompañar a clientes de cualquier ubicación.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                ¿Cómo sé qué servicio es el adecuado para mí?
              </h3>
              <p className="text-muted-foreground">
                En nuestra primera consulta gratuita evaluamos tu situación específica y diseñamos el enfoque más adecuado. Cada persona es única y merece un plan personalizado.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                ¿Qué garantías ofrecés en tus servicios?
              </h3>
              <p className="text-muted-foreground">
                Mi compromiso es tu transformación. Si después de 3 sesiones no ves avances significativos, trabajamos juntos para ajustar el enfoque hasta encontrar la metodología que funcione para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            ¿Listo para Elegir tu Servicio?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Conversemos sobre tus necesidades específicas y encontremos el servicio perfecto para tu transformación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="btn-secondary"
            >
              Consulta Gratuita
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

export default Services;