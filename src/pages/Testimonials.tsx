import TestimonialsSection from '../components/TestimonialsSection';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">
            Testimonios de Transformación
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Historias reales de profesionales que han transformado su liderazgo y vida personal a través de mi metodología
          </p>
        </div>
      </section>

      <TestimonialsSection />

      {/* Casos de Éxito Detallados */}
      <section className="py-20 bg-card">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-card-foreground mb-6">
              Casos de Éxito Detallados
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Profundiza en las transformaciones reales que mis clientes han experimentado
            </p>
          </div>

          <div className="space-y-12">
            {/* Caso 1 */}
            <div className="bg-background p-8 rounded-3xl border border-border">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      MC
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">María Carmen R.</h3>
                      <p className="text-muted-foreground">Directora de Recursos Humanos</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Situación Inicial:</h4>
                      <p className="text-muted-foreground">
                        Lideraba un equipo de 25 personas pero experimentaba alta rotación de personal y conflictos frecuentes. Se sentía abrumada por las responsabilidades y cuestionaba sus habilidades de liderazgo.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Proceso Aplicado:</h4>
                      <p className="text-muted-foreground">
                        Programa intensivo de 4 meses combinando Coaching ejecutivo, técnicas de Inteligencia Emocional y PNL para gestión de equipos. Sesiones semanales con práctica aplicada en tiempo real.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Resultados Obtenidos:</h4>
                      <p className="text-muted-foreground">
                        Reducción del 70% en la rotación de personal, mejora significativa en la comunicación del equipo y aumento de su confianza como líder. Fue promovida a Directora Regional tras 6 meses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h4 className="font-semibold text-card-foreground mb-4">Métricas de Transformación</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground">Confianza en Liderazgo</span>
                        <span className="text-sm text-accent">+85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground">Gestión de Conflictos</span>
                        <span className="text-sm text-primary">+90%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-muted-foreground">Comunicación Efectiva</span>
                        <span className="text-sm text-secondary">+80%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 2 */}
            <div className="bg-background p-8 rounded-3xl border border-border">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      JM
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Javier M.</h3>
                      <p className="text-muted-foreground">CEO de Startup Tecnológica</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Situación Inicial:</h4>
                      <p className="text-muted-foreground">
                        Su empresa estaba en crecimiento acelerado pero él experimentaba burnout severo, dificultades para delegar y problemas de comunicación con inversores y equipo técnico.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Proceso Aplicado:</h4>
                      <p className="text-muted-foreground">
                        Programa de 6 meses enfocado en gestión del estrés, desarrollo de habilidades de delegación y comunicación estratégica. Combinación de PNL, técnicas de Reiki y coaching ejecutivo.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Resultados Obtenidos:</h4>
                      <p className="text-muted-foreground">
                        Logró equilibrio trabajo-vida personal, cerró una ronda de inversión de €2M y construyó un equipo de liderazgo sólido. La empresa creció 300% durante el proceso.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h4 className="font-semibold text-card-foreground mb-4">Resultados Empresariales</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-1">€2M</div>
                      <p className="text-sm text-muted-foreground">Ronda de inversión cerrada</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">300%</div>
                      <p className="text-sm text-muted-foreground">Crecimiento de la empresa</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-1">12</div>
                      <p className="text-sm text-muted-foreground">Nuevos miembros en el equipo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caso 3 */}
            <div className="bg-background p-8 rounded-3xl border border-border">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                      SL
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Sofía L.</h3>
                      <p className="text-muted-foreground">Directora Comercial</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Situación Inicial:</h4>
                      <p className="text-muted-foreground">
                        Excelente profesional técnica pero luchaba con la comunicación persuasiva, presentaciones a alta dirección y negociación con clientes importantes. Perdía oportunidades de negocio por falta de confianza.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Proceso Aplicado:</h4>
                      <p className="text-muted-foreground">
                        Programa intensivo de 3 meses centrado en comunicación persuasiva, PNL para ventas y desarrollo de presencia ejecutiva. Técnicas específicas para presentaciones de alto impacto.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Resultados Obtenidos:</h4>
                      <p className="text-muted-foreground">
                        Aumentó sus ventas en un 150%, se convirtió en la directora comercial más exitosa de la empresa y fue invitada a formar parte del comité ejecutivo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-2xl border border-border">
                  <h4 className="font-semibold text-card-foreground mb-4">Impacto Comercial</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-1">150%</div>
                      <p className="text-sm text-muted-foreground">Aumento en ventas</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">85%</div>
                      <p className="text-sm text-muted-foreground">Tasa de cierre mejorada</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-1">#1</div>
                      <p className="text-sm text-muted-foreground">Directora comercial del año</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología de Seguimiento */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Cómo Mido el Éxito de Mis Clientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Utilizo métricas objetivas y evaluaciones 360° para garantizar transformaciones reales y medibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                📊
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Evaluaciones Pre/Post</h3>
              <p className="text-muted-foreground text-sm">
                Medición objetiva de competencias antes y después del proceso
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                360°
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Feedback 360°</h3>
              <p className="text-muted-foreground text-sm">
                Evaluación de colegas, supervisores y equipos sobre el progreso
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                📈
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">KPIs Específicos</h3>
              <p className="text-muted-foreground text-sm">
                Indicadores personalizados según objetivos profesionales
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-muted text-muted-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                📝
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Seguimiento Continuo</h3>
              <p className="text-muted-foreground text-sm">
                Evaluaciones trimestrales durante el primer año post-proceso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            ¿Quieres Ser el Próximo Caso de Éxito?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a los profesionales que ya han transformado su liderazgo y alcanzado resultados extraordinarios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/regalo"
              className="btn-accent"
            >
              🎁 Comenzar Evaluación Gratuita
            </Link>
            <Link
              to="/contacto"
              className="btn-secondary"
            >
              Conversemos sobre tu Caso
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;