import { Link } from 'react-router-dom';

const Comenzar = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-accent text-primary-foreground">
        <div className="container-custom">
          <div className="content-center mb-20">
            <h1 className="title-hero text-primary-foreground mb-10 title-gradient text-shadow-soft">
              Comienza tu Transformación Hoy
            </h1>
            <p className="text-body-large opacity-90 content-balanced text-sophisticated text-shadow-soft">
              Tu viaje hacia un liderazgo auténtico y una vida más plena comienza con un solo paso. Elige tu camino
            </p>
          </div>
        </div>
      </section>

      {/* Proceso de 3 Pasos */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-20">
            <h2 className="title-section text-foreground mb-8">
              Tu Proceso de Transformación en 3 Pasos
            </h2>
            <p className="text-body-large text-sophisticated content-balanced">
              Un camino claro y estructurado hacia el crecimiento personal y profesional que buscas
            </p>
          </div>

          <div className="grid-elegant md:grid-cols-3 gap-10 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="title-card text-foreground mb-6">
                Evaluación Inicial
              </h3>
              <p className="text-body-elegant text-sophisticated mb-6">
                Comenzamos con una evaluación completa de tu situación actual, objetivos y desafíos específicos. Esta fase incluye:
              </p>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Sesión diagnóstico gratuita de 30 minutos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Test de Inteligencia Emocional</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Análisis de tu estilo de liderazgo</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Definición de objetivos SMART</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="title-card text-foreground mb-6">
                Desarrollo Personalizado
              </h3>
              <p className="text-body-elegant text-sophisticated mb-6">
                Diseñamos un programa específico para ti, combinando las mejores técnicas de coaching, PNL e Inteligencia Emocional:
              </p>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Sesiones de coaching personalizadas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Técnicas de PNL aplicadas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Ejercicios de Inteligencia Emocional</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Herramientas de autoconocimiento</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="title-card text-foreground mb-6">
                Integración y Crecimiento
              </h3>
              <p className="text-body-elegant text-sophisticated mb-6">
                Consolidamos los cambios y te preparamos para un crecimiento continuo y sostenible:
              </p>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-secondary">•</span>
                  <span>Práctica en situaciones reales</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary">•</span>
                  <span>Plan de mantenimiento personalizado</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary">•</span>
                  <span>Seguimiento post-programa</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-secondary">•</span>
                  <span>Acceso a recursos exclusivos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Línea de tiempo visual */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary transform -translate-y-1/2"></div>
            <div className="relative flex justify-between items-center">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
              <div className="w-4 h-4 bg-accent rounded-full"></div>
              <div className="w-4 h-4 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Opciones para Comenzar */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-20">
            <h2 className="title-section text-card-foreground mb-8">
              Elige Cómo Quieres Comenzar
            </h2>
            <p className="text-body-large text-sophisticated content-balanced">
              Tienes diferentes opciones para dar el primer paso hacia tu transformación
            </p>
          </div>

          <div className="grid-elegant lg:grid-cols-2 gap-12">
            {/* Opción 1: Guía Gratuita */}
            <div className="card-elegant p-10 hover-lift">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="title-card text-card-foreground mb-4">
                  Comienza con la Guía Gratuita
                </h3>
                <div className="text-3xl font-bold text-accent mb-2">GRATIS</div>
                <p className="text-sophisticated">Perfecto para explorar</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-body-elegant text-sophisticated">Test completo de Inteligencia Emocional</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-body-elegant text-sophisticated">Análisis personalizado de resultados</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-body-elegant text-sophisticated">Plan de desarrollo de 90 días</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-body-elegant text-sophisticated">Acceso a recursos exclusivos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-body-elegant text-sophisticated">Sin compromiso ni costo</span>
                </div>
              </div>

              <div className="text-center">
                <Link to="/regalo" className="btn-accent w-full block">
                  Descargar Guía Ahora
                </Link>
                <p className="text-sm text-muted-foreground mt-3">
                  ⏰ Oferta por tiempo limitado
                </p>
              </div>
            </div>

            {/* Opción 2: Consulta Individual */}
            <div className="card-elegant p-10 hover-lift border-2 border-primary">
              <div className="text-center mb-8">
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  MÁS POPULAR
                </div>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="title-card text-card-foreground mb-4">
                  Consulta Individual Personalizada
                </h3>
                <div className="text-3xl font-bold text-primary mb-2">€0</div>
                <p className="text-sophisticated">Primera sesión gratuita</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-body-elegant text-sophisticated">Sesión diagnóstico de 30 minutos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-body-elegant text-sophisticated">Evaluación completa de tu situación</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-body-elegant text-sophisticated">Plan de acción personalizado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-body-elegant text-sophisticated">Recomendaciones específicas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-body-elegant text-sophisticated">Sin compromiso de continuidad</span>
                </div>
              </div>

              <div className="text-center">
                <Link to="/contacto" className="btn-primary w-full block">
                  Agendar Consulta Gratuita
                </Link>
                <p className="text-sm text-muted-foreground mt-3">
                  📅 Disponibilidad limitada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantía y Compromiso */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-16">
            <h2 className="title-section text-foreground mb-8">
              Mi Compromiso Contigo
            </h2>
          </div>

          <div className="grid-elegant md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="title-card text-foreground mb-4">
                Garantía de Satisfacción
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Si después de las primeras 3 sesiones no sientes que estás avanzando hacia tus objetivos, te devuelvo el 100% de tu inversión.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="title-card text-foreground mb-4">
                Acompañamiento Continuo
              </h3>
              <p className="text-body-elegant text-sophisticated">
                No estarás solo en este proceso. Tendrás acceso directo a mí entre sesiones para resolver dudas y mantener el momentum.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="title-card text-foreground mb-4">
                Resultados Medibles
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Establecemos métricas claras desde el inicio y evaluamos el progreso regularmente para asegurar que alcances tus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Rápidos */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-16">
            <h2 className="title-section text-card-foreground mb-8">
              Lo Que Dicen Quienes Ya Comenzaron
            </h2>
          </div>

          <div className="grid-elegant md:grid-cols-3 gap-10">
            <div className="card-elegant p-8 text-center">
              <div className="text-accent text-2xl mb-4">"⭐⭐⭐⭐⭐"</div>
              <p className="text-body-elegant text-sophisticated mb-4 italic">
                "La primera sesión ya me dio claridad sobre lo que necesitaba cambiar."
              </p>
              <cite className="text-card-foreground font-semibold">- Patricia M.</cite>
            </div>

            <div className="card-elegant p-8 text-center">
              <div className="text-accent text-2xl mb-4">"⭐⭐⭐⭐⭐"</div>
              <p className="text-body-elegant text-sophisticated mb-4 italic">
                "El proceso es claro, estructurado y los resultados se ven desde el principio."
              </p>
              <cite className="text-card-foreground font-semibold">- Roberto C.</cite>
            </div>

            <div className="card-elegant p-8 text-center">
              <div className="text-accent text-2xl mb-4">"⭐⭐⭐⭐⭐"</div>
              <p className="text-body-elegant text-sophisticated mb-4 italic">
                "Ainara hace que el cambio se sienta natural y sostenible."
              </p>
              <cite className="text-card-foreground font-semibold">- Elena R.</cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="title-section text-primary-foreground mb-8">
            El Momento Perfecto es Ahora
          </h2>
          <p className="text-body-large opacity-90 mb-12 content-balanced">
            Cada día que esperas es un día menos para disfrutar de la vida y el liderazgo que realmente deseas
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contacto" className="btn-secondary hover-lift">
              Agendar Mi Consulta Gratuita
            </Link>
            <Link to="/regalo" className="btn-outline-light hover-lift">
              Comenzar con la Guía Gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comenzar;