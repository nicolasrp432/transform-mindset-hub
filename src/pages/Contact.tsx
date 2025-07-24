import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <div className="content-center mb-20">
            <h1 className="title-hero text-primary-foreground mb-10 title-gradient text-shadow-soft">
              Contacta Conmigo
            </h1>
            <p className="text-body-large opacity-90 content-balanced text-sophisticated text-shadow-soft">
              Estoy aquí para acompañarte en tu proceso de transformación. Elige la opción que mejor se adapte a tus necesidades
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Información de Contacto Adicional */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="grid-elegant md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="card-elegant p-8 text-center hover-lift">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="title-card text-card-foreground mb-4">
                Llamada Directa
              </h3>
              <p className="text-body-elegant text-sophisticated mb-6">
                Para consultas urgentes o información inmediata sobre mis servicios
              </p>
              <a href="tel:+34123456789" className="btn-outline text-sm">
                +34 123 456 789
              </a>
            </div>

            <div className="card-elegant p-8 text-center hover-lift">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="title-card text-card-foreground mb-4">
                Sesión Diagnóstico
              </h3>
              <p className="text-body-elegant text-sophisticated mb-6">
                Evaluación gratuita de 30 minutos para conocer tu situación actual
              </p>
              <Link to="/comenzar" className="btn-primary text-sm">
                Agendar Sesión
              </Link>
            </div>

            <div className="card-elegant p-8 text-center hover-lift">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="title-card text-card-foreground mb-4">
                Consultoría Empresarial
              </h3>
              <p className="text-body-elegant text-sophisticated mb-6">
                Programas de desarrollo organizacional y liderazgo para equipos
              </p>
              <a href="mailto:ainara@transformmindset.com?subject=Consultoría Empresarial" className="btn-outline text-sm">
                Más Información
              </a>
            </div>

            <div className="card-elegant p-8 text-center hover-lift">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="title-card text-card-foreground mb-4">
                Conferencias
              </h3>
              <p className="text-body-elegant text-sophisticated mb-6">
                Charlas inspiradoras sobre liderazgo e inteligencia emocional
              </p>
              <a href="mailto:ainara@transformmindset.com?subject=Solicitud de Conferencia" className="btn-outline text-sm">
                Solicitar Charla
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ de Contacto */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-16">
            <h2 className="title-section text-foreground mb-8">
              Preguntas Frecuentes sobre el Contacto
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card-elegant p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                ¿Cuál es el mejor momento para contactarte?
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Estoy disponible de lunes a viernes de 9:00 a 18:00 (CET). Para emergencias o consultas urgentes, puedes escribirme por WhatsApp y te responderé lo antes posible.
              </p>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                ¿Cuánto tiempo tardas en responder?
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Normalmente respondo a todos los emails y mensajes en un plazo máximo de 24 horas. Si es una consulta compleja, te enviaré una respuesta inicial confirmando la recepción y el tiempo estimado para una respuesta completa.
              </p>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                ¿Ofrecés consultas gratuitas?
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Sí, ofrezco una sesión diagnóstico gratuita de 30 minutos donde evaluamos tu situación actual, definimos objetivos y vemos si mi metodología es adecuada para ti. Esta sesión no tiene compromiso alguno.
              </p>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                ¿Trabajas con clientes internacionales?
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Absolutamente. Trabajo con clientes de todo el mundo a través de videoconferencias. Tengo experiencia con diferentes culturas empresariales y puedo adaptar mi metodología a contextos internacionales.
              </p>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                ¿Qué información necesitas para empezar?
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Para la primera consulta, solo necesito conocer tu situación actual, los desafíos que enfrentas y qué objetivos te gustaría alcanzar. Toda la información se maneja con absoluta confidencialidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="grid-elegant lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="title-section text-card-foreground mb-8">
                Mi Ubicación
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Oficina Principal
                    </h3>
                    <p className="text-body-elegant text-sophisticated">
                      Madrid, España<br />
                      Disponible para sesiones presenciales y online
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    🌍
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Alcance Global
                    </h3>
                    <p className="text-body-elegant text-sophisticated">
                      Sesiones online disponibles en cualquier zona horaria<br />
                      Experiencia con clientes en Europa, América y Asia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      Horarios Flexibles
                    </h3>
                    <p className="text-body-elegant text-sophisticated">
                      Adaptación a tu agenda y zona horaria<br />
                      Sesiones de mañana, tarde o fin de semana disponibles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elegant p-8">
              <h3 className="title-card text-card-foreground mb-6 text-center">
                ¿Listo para Comenzar?
              </h3>
              <p className="text-body-elegant text-sophisticated text-center mb-8">
                El primer paso hacia tu transformación está a un clic de distancia
              </p>
              <div className="space-y-4">
                <Link to="/comenzar" className="btn-primary w-full block text-center">
                  Agendar Consulta Gratuita
                </Link>
                <Link to="/regalo" className="btn-outline w-full block text-center">
                  Descargar Guía Gratuita
                </Link>
                <a 
                  href="mailto:ainara@transformmindset.com" 
                  className="btn-ghost w-full block text-center"
                >
                  Enviar Email Directo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;