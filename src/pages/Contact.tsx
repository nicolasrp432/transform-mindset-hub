import ContactSection from '../components/sections/ContactSection';
import PageHero from '../components/ui-elements/PageHero';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <PageHero 
        title="Conversemos Sobre tu Transformación"
        subtitle="Estoy aquí para ayudarte a alcanzar tu máximo potencial. Contáctame para comenzar tu viaje de transformación consciente"
        backgroundVariant="primary"
      />

      <ContactSection />

      {/* Información de Contacto Adicional */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="title-section text-card-foreground mb-12">
                Diferentes Formas de Conectar
              </h2>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      Consulta Telefónica Gratuita
                    </h3>
                    <p className="text-body-elegant text-sophisticated mb-4">
                      Agenda una llamada de 15 minutos para conversar sobre tus objetivos y cómo puedo ayudarte.
                    </p>
                    <p className="text-base text-accent font-medium">
                      Perfecto para: Primeras consultas, dudas generales
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      Sesión de Diagnóstico
                    </h3>
                    <p className="text-body-elegant text-sophisticated mb-4">
                      Sesión de 60 minutos para evaluar tu situación actual y diseñar un plan personalizado.
                    </p>
                    <p className="text-base text-accent font-medium">
                      Perfecto para: Evaluación profunda, plan de acción
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    🏢
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      Consultoría Empresarial
                    </h3>
                    <p className="text-body-elegant text-sophisticated mb-4">
                      Para equipos y organizaciones que buscan desarrollar la inteligencia emocional colectiva.
                    </p>
                    <p className="text-base text-accent font-medium">
                      Perfecto para: Equipos, departamentos, empresas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-muted text-muted-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    🎤
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      Conferencias y Talleres
                    </h3>
                    <p className="text-body-elegant text-sophisticated mb-4">
                      Charlas inspiradoras y talleres prácticos para eventos corporativos y conferencias.
                    </p>
                    <p className="text-base text-accent font-medium">
                      Perfecto para: Eventos, conferencias, formaciones grupales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elegant p-10">
              <h3 className="title-card text-foreground mb-8">
                Preguntas Frecuentes
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    ¿Cuál es el tiempo de respuesta?
                  </h4>
                  <p className="text-body-elegant text-sophisticated">
                    Respondo a todos los mensajes en un máximo de 24 horas laborables, aunque generalmente lo hago mucho antes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    ¿Trabajas con clientes internacionales?
                  </h4>
                  <p className="text-body-elegant text-sophisticated">
                    Sí, trabajo con clientes de toda España y Latinoamérica mediante sesiones online, con excelentes resultados.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    ¿Qué información necesitas para comenzar?
                  </h4>
                  <p className="text-body-elegant text-sophisticated">
                    Solo necesito conocer tus objetivos principales y el contexto de tu situación actual para diseñar un enfoque personalizado.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    ¿Hay garantía en tus servicios?
                  </h4>
                  <p className="text-body-elegant text-sophisticated">
                    Mi compromiso es tu transformación. Si no ves resultados en las primeras sesiones, ajustamos el enfoque hasta encontrar lo que funciona para ti.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    ¿Puedo hacer una consulta antes de decidir?
                  </h4>
                  <p className="text-body-elegant text-sophisticated">
                    Absolutamente. Ofrezco una conversación inicial gratuita de 15 minutos para que conozcas mi enfoque y evalúes si es el adecuado para ti.
                  </p>
                </div>
              </div>
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