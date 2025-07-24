import ProcessSection from '../components/ProcessSection';
import { Link } from 'react-router-dom';

const Process = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <div className="content-center mb-20">
            <h1 className="title-hero text-primary-foreground mb-10 title-gradient text-shadow-soft">
            Mi Proceso de Transformación Consciente
          </h1>
            <p className="text-body-large opacity-90 content-balanced text-sophisticated text-shadow-soft">
            Una metodología probada que integra Coaching, PNL e Inteligencia Emocional para generar cambios profundos y duraderos
          </p>
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* Metodología Detallada */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-20">
            <h2 className="title-section text-card-foreground mb-8">
              La Ciencia Detrás del Proceso
            </h2>
            <p className="text-body-large text-sophisticated content-balanced">
              Mi metodología combina las últimas investigaciones en neurociencia, psicología positiva e inteligencia emocional
            </p>
          </div>

          <div className="grid-elegant grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="card-elegant p-10 bg-background rounded-2xl border border-border hover-lift">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="title-card text-foreground mb-6">
                Neuroplasticidad
              </h3>
              <p className="text-body-elegant text-sophisticated mb-6">
                Aprovechamos la capacidad del cerebro para formar nuevas conexiones neuronales, creando patrones de pensamiento más efectivos.
              </p>
              <ul className="space-y-4 text-body-elegant text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Reprogramación de creencias limitantes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Instalación de nuevos hábitos emocionales</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Fortalecimiento de la autoconfianza</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-background rounded-2xl border border-border">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="title-card text-foreground mb-6">
                Inteligencia Emocional
              </h3>
              <p className="text-body-elegant text-sophisticated mb-6">
                Desarrollamos las cinco competencias fundamentales para la gestión emocional efectiva y el liderazgo auténtico.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Autoconciencia emocional</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Autorregulación y gestión del estrés</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Empatía y habilidades sociales</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-background rounded-2xl border border-border">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="title-card text-foreground mb-6">
                PNL Aplicada
              </h3>
              <p className="text-body-elegant text-sophisticated mb-6">
                Utilizamos técnicas de Programación Neurolingüística para acelerar el cambio y asegurar la integración de nuevos patrones.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Reestructuración cognitiva</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Anclajes positivos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Modelado de excelencia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline del Proceso */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-20">
            <h2 className="title-section text-foreground mb-8">
              Cronograma Típico de Transformación
            </h2>
            <p className="text-body-large text-sophisticated content-balanced">
              Cada proceso es único, pero aquí tienes una guía general de lo que puedes esperar en tu viaje de transformación
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="title-card text-foreground mb-3">Semanas 1-2: Diagnóstico y Conexión</h3>
                  <p className="text-body-elegant text-sophisticated mb-4">
                    Evaluación completa, establecimiento de rapport y definición de objetivos específicos.
                  </p>
                  <div className="text-sm text-accent">✓ Evaluación 360° • ✓ Plan personalizado • ✓ Primeras herramientas</div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="title-card text-foreground mb-3">Semanas 3-8: Desarrollo Intensivo</h3>
                  <p className="text-body-elegant text-sophisticated mb-4">
                    Trabajo profundo en patrones limitantes, desarrollo de nuevas competencias y práctica intensiva.
                  </p>
                  <div className="text-sm text-accent">✓ Sesiones semanales • ✓ Ejercicios prácticos • ✓ Seguimiento continuo</div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="title-card text-foreground mb-3">Semanas 9-16: Implementación Activa</h3>
                  <p className="text-body-elegant text-sophisticated mb-4">
                    Aplicación real en tu entorno profesional y personal, con ajustes y optimización continua.
                  </p>
                  <div className="text-sm text-accent">✓ Práctica real • ✓ Feedback constante • ✓ Resolución de desafíos</div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-muted text-muted-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="title-card text-foreground mb-3">Semanas 17-24: Integración y Autonomía</h3>
                  <p className="text-body-elegant text-sophisticated mb-4">
                    Consolidación de cambios, desarrollo de autonomía y plan de mantenimiento a largo plazo.
                  </p>
                  <div className="text-sm text-accent">✓ Consolidación • ✓ Plan de mantenimiento • ✓ Evaluación final</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-20">
            <h2 className="title-section text-card-foreground mb-8">
              Resultados Reales de Mi Proceso
            </h2>
            <p className="text-body-large text-sophisticated content-balanced">
              Datos y testimonios que demuestran la efectividad del proceso de Transformación Consciente
            </p>
          </div>

          <div className="grid-elegant grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="p-8">
              <div className="text-5xl font-bold text-primary mb-4">95%</div>
              <p className="text-body-elegant text-muted-foreground">Mejora en liderazgo reportada por clientes</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-accent mb-4">87%</div>
              <p className="text-body-elegant text-muted-foreground">Reducción significativa en niveles de estrés</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-secondary mb-4">92%</div>
              <p className="text-body-elegant text-muted-foreground">Mejora en comunicación con equipos</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-primary mb-4">6</div>
              <p className="text-body-elegant text-muted-foreground">Meses promedio para transformación completa</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="title-section text-foreground mb-8">
            ¿Listo para Comenzar tu Transformación?
          </h2>
          <p className="text-body-large text-sophisticated mb-12 content-balanced">
            El momento perfecto para cambiar tu vida es ahora. Comienza con una consulta gratuita
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contacto" className="btn-primary hover-lift">
              Agenda tu Consulta Gratuita
            </Link>
            <Link to="/regalo" className="btn-outline hover-lift">
              Descarga la Guía Gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;