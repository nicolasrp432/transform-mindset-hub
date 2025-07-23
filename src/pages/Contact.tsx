import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">
            Conversemos Sobre tu Transformación
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Estoy aquí para ayudarte a alcanzar tu máximo potencial. Contáctame para comenzar tu viaje de transformación consciente
          </p>
        </div>
      </section>

      <ContactSection />

      {/* Información Adicional de Contacto */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-card-foreground mb-8">
                Diferentes Formas de Conectar
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Consulta Telefónica Gratuita
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Agenda una llamada de 15 minutos para conversar sobre tus objetivos y cómo puedo ayudarte.
                    </p>
                    <p className="text-sm text-accent font-medium">
                      Perfecto para: Primeras consultas, dudas generales
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Sesión de Diagnóstico
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Sesión de 60 minutos para evaluar tu situación actual y diseñar un plan personalizado.
                    </p>
                    <p className="text-sm text-accent font-medium">
                      Perfecto para: Evaluación profunda, plan de acción
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    🏢
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Consultoría Empresarial
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Para equipos y organizaciones que buscan desarrollar la inteligencia emocional colectiva.
                    </p>
                    <p className="text-sm text-accent font-medium">
                      Perfecto para: Equipos, departamentos, empresas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted text-muted-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    🎤
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Conferencias y Talleres
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Charlas inspiradoras y talleres prácticos para eventos corporativos y conferencias.
                    </p>
                    <p className="text-sm text-accent font-medium">
                      Perfecto para: Eventos, conferencias, formaciones grupales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Preguntas Frecuentes
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Cuál es el tiempo de respuesta?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Respondo a todos los mensajes en un máximo de 24 horas laborables, aunque generalmente lo hago mucho antes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Trabajas con clientes internacionales?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Sí, trabajo con clientes de toda España y Latinoamérica mediante sesiones online, con excelentes resultados.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Qué información necesitas para comenzar?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Solo necesito conocer tus objetivos principales y el contexto de tu situación actual para diseñar un enfoque personalizado.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Hay garantía en tus servicios?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Mi compromiso es tu transformación. Si no ves resultados en las primeras sesiones, ajustamos el enfoque hasta encontrar lo que funciona para ti.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Puedo hacer una consulta antes de decidir?
                  </h4>
                  <p className="text-muted-foreground text-sm">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Mi Ubicación
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Atiendo presencialmente en Bilbao y online para cualquier ubicación
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Sesiones Presenciales
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Dirección</h4>
                    <p className="text-muted-foreground">Zaratamo 48480, Bilbao, España</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl">🚇</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Transporte</h4>
                    <p className="text-muted-foreground">Fácil acceso en transporte público y privado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl">🅿️</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Parking</h4>
                    <p className="text-muted-foreground">Parking gratuito disponible</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl">☕</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ambiente</h4>
                    <p className="text-muted-foreground">Espacio cómodo y privado diseñado para la transformación</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-border text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-heading font-semibold text-card-foreground mb-4">
                Bilbao, España
              </h3>
              <p className="text-muted-foreground mb-6">
                Ubicación estratégica en el corazón del País Vasco, con excelentes conexiones.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-card-foreground mb-6">
              Horarios y Disponibilidad
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-2xl border border-border text-center">
              <div className="text-3xl mb-4">🕘</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Horario Presencial
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Lunes a Viernes: 9:00 - 19:00</p>
                <p>Sábados: 10:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border text-center">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Sesiones Online
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Lunes a Viernes: 8:00 - 21:00</p>
                <p>Sábados: 9:00 - 15:00</p>
                <p>Flexibilidad horaria para clientes internacionales</p>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-border text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Urgencias
              </h3>
              <div className="space-y-2 text-muted-foreground">
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
          <h2 className="text-3xl font-heading font-bold mb-6">
            El Primer Paso es Siempre el Más Importante
          </h2>
          <p className="text-xl mb-8 opacity-90">
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