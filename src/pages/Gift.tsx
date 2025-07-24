import GiftSection from '../components/GiftSection';
import { Link } from 'react-router-dom';

const Gift = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-accent text-primary-foreground">
        <div className="container-custom px-4">
          <div className="content-center mb-20">
            <h1 className="title-hero font-heading font-bold mb-10 title-gradient text-shadow-soft">
              🎁 Tu Guía Gratuita de Autoevaluación Emocional
            </h1>
            <p className="text-body-large opacity-90 content-balanced text-sophisticated text-shadow-soft">
              Descubre tu nivel actual de Inteligencia Emocional y recibe un plan personalizado para potenciar tu liderazgo
            </p>
          </div>
        </div>
      </section>

      {/* Información sobre la Guía */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="grid-elegant lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="title-section font-heading font-bold text-foreground mb-8">
                ¿Qué Incluye tu Guía Gratuita?
              </h2>
              <div className="space-elegant">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Evaluación Completa de Inteligencia Emocional
                    </h3>
                    <p className="text-body-elegant text-sophisticated">
                      Test de 40 preguntas que evalúa las 5 competencias clave de la IE: autoconciencia, autorregulación, motivación, empatía y habilidades sociales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Análisis Personalizado de Resultados
                    </h3>
                    <p className="text-body-elegant text-sophisticated">
                      Informe detallado con tu perfil emocional, fortalezas actuales y áreas de oportunidad específicas para tu rol de liderazgo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Plan de Desarrollo de 90 Días
                    </h3>
                    <p className="text-body-elegant text-sophisticated">
                      Estrategia paso a paso con ejercicios prácticos, técnicas de PNL y herramientas de coaching para mejorar tu IE inmediatamente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Acceso a Recursos Exclusivos
                    </h3>
                    <p className="text-body-elegant text-sophisticated">
                      Videos de técnicas de respiración, ejercicios de mindfulness para líderes y plantillas para autoevaluación continua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elegant p-10 hover-lift">
              <h3 className="title-card font-heading font-semibold text-card-foreground mb-8 text-center">
                Valor de la Guía: €297
              </h3>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-accent mb-2">GRATIS</div>
                <p className="text-sophisticated">Por tiempo limitado</p>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Test de IE Profesional</span>
                  <span className="text-card-foreground font-semibold">€97</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Análisis Personalizado</span>
                  <span className="text-card-foreground font-semibold">€150</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Plan de 90 Días</span>
                  <span className="text-card-foreground font-semibold">€50</span>
                </div>
                <div className="flex justify-between items-center py-2 font-bold text-accent">
                  <span>Tu Precio Hoy</span>
                  <span className="text-2xl">€0</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  ⏰ Oferta válida por tiempo limitado
                </p>
                <a 
                  href="#gift-form" 
                  className="btn-accent w-full block text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('gift-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Recibir Mi Guía Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Específicos */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-card-foreground mb-6">
              ¿Por Qué Necesitas Esta Guía Ahora?
            </h2>
            <p className="text-lg text-sophisticated max-w-3xl mx-auto">
              En el entorno empresarial actual, la inteligencia emocional es el factor diferencial entre líderes promedio y líderes excepcionales
            </p>
          </div>

          <div className="grid-elegant md:grid-cols-3 gap-10">
            <div className="card-elegant p-10 text-center hover-lift">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="title-card font-semibold text-foreground mb-6">
                Mejora tu Performance
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Los líderes con alta IE tienen un 70% más probabilidades de superar sus objetivos de performance y generar resultados excepcionales en sus equipos.
              </p>
            </div>

            <div className="card-elegant p-10 text-center hover-lift">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="title-card font-semibold text-foreground mb-6">
                Transforma tus Relaciones
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Desarrolla la capacidad de conectar auténticamente con tu equipo, resolver conflictos efectivamente y crear un ambiente de confianza y colaboración.
              </p>
            </div>

            <div className="card-elegant p-10 text-center hover-lift">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="title-card font-semibold text-foreground mb-6">
                Gestiona el Estrés
              </h3>
              <p className="text-body-elegant text-sophisticated">
                Aprende técnicas probadas para mantener la calma bajo presión, tomar decisiones más claras y preservar tu bienestar mental y físico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios sobre la Guía */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Lo Que Dicen Sobre la Guía
            </h2>
          </div>

          <div className="grid-elegant md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="card-elegant p-8 hover-lift">
              <div className="text-accent text-2xl mb-4">"⭐⭐⭐⭐⭐"</div>
              <p className="text-body-elegant text-sophisticated mb-6 italic">
                "La guía me ayudó a identificar exactamente dónde necesitaba trabajar. Los ejercicios son prácticos y los pude aplicar inmediatamente en mi trabajo."
              </p>
              <cite className="text-card-foreground font-semibold">- Ana M., Directora de Marketing</cite>
            </div>

            <div className="card-elegant p-8 hover-lift">
              <div className="text-accent text-2xl mb-4">"⭐⭐⭐⭐⭐"</div>
              <p className="text-body-elegant text-sophisticated mb-6 italic">
                "Increíble la precisión del análisis. Me dio una perspectiva completamente nueva sobre mis fortalezas y áreas de mejora como líder."
              </p>
              <cite className="text-card-foreground font-semibold">- Carlos R., CEO</cite>
            </div>

            <div className="card-elegant p-8 hover-lift">
              <div className="text-accent text-2xl mb-4">"⭐⭐⭐⭐⭐"</div>
              <p className="text-body-elegant text-sophisticated mb-6 italic">
                "El plan de 90 días es oro puro. Cada semana veo mejoras en mi capacidad de gestionar mi equipo y mis propias emociones."
              </p>
              <cite className="text-card-foreground font-semibold">- Laura S., Directora de Operaciones</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <div id="gift-form">
        <GiftSection />
      </div>

      {/* Garantía y Confianza */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-card-foreground mb-6">
              100% Confiable y Seguro
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-semibold text-card-foreground mb-2">Datos Protegidos</h3>
                <p className="text-sophisticated text-sm">
                  Tu información está completamente segura y nunca será compartida con terceros
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-semibold text-card-foreground mb-2">Sin Spam</h3>
                <p className="text-sophisticated text-sm">
                  Solo recibirás contenido de valor y puedes cancelar la suscripción cuando quieras
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-semibold text-card-foreground mb-2">Entrega Inmediata</h3>
                <p className="text-sophisticated text-sm">
                  Recibirás tu guía en menos de 5 minutos en tu correo electrónico
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            ¿Tienes Alguna Pregunta?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estoy aquí para ayudarte en tu proceso de transformación
          </p>
          <Link
            to="/contacto"
            className="btn-secondary"
          >
            Contactar con Ainara
          </Link>
        </div>
      </section>
    </>
  );
};

export default Gift;