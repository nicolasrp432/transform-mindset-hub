import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom px-4">
          <div className="content-center mb-20">
            <h1 className="title-hero text-primary-foreground mb-10 title-gradient text-shadow-soft">
              Conversemos Sobre tu Transformación
            </h1>
            <p className="text-body-large leading-relaxed content-balanced opacity-90 text-sophisticated text-shadow-soft">
              Estoy aquí para ayudarte a alcanzar tu máximo potencial. Contáctame para comenzar tu viaje de transformación consciente
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Información Adicional de Contacto */}
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

      {/* Mapa de Ubicación */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-20">
            <h2 className="title-section text-foreground mb-8">
              Mi Ubicación
            </h2>
            <p className="text-body-large text-sophisticated content-balanced">
              Atiendo presencialmente en Bilbao y online para cualquier ubicación
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="title-card text-foreground mb-8">
                Sesiones Presenciales
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <div className="text-primary text-2xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Dirección</h4>
                    <p className="text-body-elegant text-sophisticated">Zaratamo 48480, Bilbao, España</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="text-primary text-2xl">🚇</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Transporte</h4>
                    <p className="text-body-elegant text-sophisticated">Fácil acceso en transporte público y privado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="text-primary text-2xl">🅿️</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Parking</h4>
                    <p className="text-body-elegant text-sophisticated">Parking gratuito disponible</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="text-primary text-2xl">☕</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ambiente</h4>
                    <p className="text-body-elegant text-sophisticated">Espacio cómodo y privado diseñado para la transformación</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elegant p-10 text-center">
              <div className="text-6xl mb-6">🗺️</div>
              <h3 className="title-card text-card-foreground mb-6">
                Bilbao, España
              </h3>
              <p className="text-body-elegant text-sophisticated mb-8">
                Ubicación estratégica en el corazón del País Vasco, con excelentes conexiones.
              </p>
              <div className="space-y-4 text-base text-sophisticated">
                <div className="flex justify-between">
                  <span>Madrid</span>
                  <span className="text-accent">5h en coche</span>
                </div>
                <div className="flex justify-between">
                  <span>San Sebastián</span>
                  <span className="text-accent">1h en coche</span>
                </div>
                <div className="flex justify-between">
                  <span>Barcelona</span>
                  <span className="text-accent">6h en coche</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios y Disponibilidad */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="content-center mb-20">
            <h2 className="title-section text-card-foreground mb-8">
              Horarios y Disponibilidad
            </h2>
          </div>

          <div className="grid-elegant grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-elegant p-8 text-center">
              <div className="text-4xl mb-6">🕘</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Horario Presencial
              </h3>
              <div className="space-y-3 text-body-elegant text-sophisticated">
                <p>Lunes a Viernes: 9:00 - 19:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>

            <div className="card-elegant p-8 text-center">
              <div className="text-4xl mb-6">💻</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Sesiones Online
              </h3>
              <div className="space-y-3 text-body-elegant text-sophisticated">
                <p>Lunes a Viernes: 8:00 - 21:00</p>
                <p>Sábados: 9:00 - 15:00</p>
                <p>Flexibilidad horaria para clientes internacionales</p>
              </div>
            </div>

            <div className="card-elegant p-8 text-center">
              <div className="text-4xl mb-6">⚡</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Urgencias
              </h3>
              <div className="space-y-3 text-body-elegant text-sophisticated">
                <p>Sesiones de emergencia disponibles</p>
                <p>24h previo aviso</p>
                <p>Para crisis empresariales o personales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="title-section mb-8">
            El Primer Paso es Siempre el Más Importante
          </h2>
          <p className="text-body-large mb-10 opacity-90 text-sophisticated">
            No esperes más para comenzar tu transformación. Tu futuro yo te lo agradecerá.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/regalo"
              className="btn-accent"
            >
              🎁 Comenzar con la Guía Gratuita
            </Link>
            <a
              href="mailto:ainaraunamunzagacoach@gmail.com"
              className="btn-secondary"
            >
              Escribir Email Ahora
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;