import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Users, Target, Heart } from 'lucide-react';

const Comenzar = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-6xl font-heading font-bold mb-8 title-gradient text-shadow-soft">
            Comienza tu Transformación
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12 text-sophisticated text-shadow-soft">
            Da el primer paso hacia una vida más plena y consciente. Tu viaje de crecimiento personal comienza aquí.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/regalo" 
              className="btn-cta hover-lift inline-flex items-center gap-3 text-lg px-8 py-4"
            >
              <Star className="w-5 h-5" />
              Recibe tu Guía Gratuita
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contacto" 
              className="btn-outline hover-lift inline-flex items-center gap-3 text-lg px-8 py-4"
            >
              <Heart className="w-5 h-5" />
              Agenda una Consulta
            </Link>
          </div>
        </div>
      </section>

      {/* Pasos para Comenzar */}
      <section className="py-24 bg-background">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-heading font-bold mb-8 title-gradient text-shadow-soft">
              Tu Camino en 3 Pasos
            </h2>
            <p className="text-xl text-sophisticated max-w-3xl mx-auto text-shadow-soft">
              Un proceso simple y efectivo diseñado para maximizar tu crecimiento personal
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Paso 1 */}
            <div className="text-center group hover-lift">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-3xl font-heading font-semibold mb-6 text-foreground">
                Evaluación Inicial
              </h3>
              <p className="text-sophisticated text-lg mb-8">
                Comenzamos con una evaluación completa de tu situación actual, objetivos y desafíos específicos.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Análisis de personalidad</span>
                </div>
                <div className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Identificación de objetivos</span>
                </div>
                <div className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Mapeo de recursos internos</span>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="text-center group hover-lift">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-3xl font-heading font-semibold mb-6 text-foreground">
                Plan Personalizado
              </h3>
              <p className="text-sophisticated text-lg mb-8">
                Diseñamos juntos una estrategia única adaptada a tu estilo de vida y necesidades específicas.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Estrategia personalizada</span>
                </div>
                <div className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Herramientas específicas</span>
                </div>
                <div className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Cronograma realista</span>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="text-center group hover-lift">
              <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-3xl font-heading font-semibold mb-6 text-foreground">
                Transformación Activa
              </h3>
              <p className="text-sophisticated text-lg mb-8">
                Implementamos el plan con acompañamiento continuo y ajustes según tu progreso.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Sesiones regulares</span>
                </div>
                <div className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Seguimiento continuo</span>
                </div>
                <div className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Resultados medibles</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary transform -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Opciones de Inicio */}
      <section className="py-24 bg-muted/30">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-heading font-bold mb-8 title-gradient text-shadow-soft">
              Elige tu Punto de Partida
            </h2>
            <p className="text-xl text-sophisticated max-w-3xl mx-auto text-shadow-soft">
              Diferentes opciones para comenzar tu viaje según tus necesidades y disponibilidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Opción 1: Guía Gratuita */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift border border-border/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                  Guía Gratuita
                </h3>
                <p className="text-accent font-semibold text-lg">Gratis</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Autoevaluación completa</span>
                </li>
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Plan de acción personalizado</span>
                </li>
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Ejercicios prácticos</span>
                </li>
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Acceso a newsletter</span>
                </li>
              </ul>
              <Link 
                to="/regalo" 
                className="btn-primary w-full hover-lift inline-flex items-center justify-center gap-2"
              >
                <Star className="w-4 h-4" />
                Obtener Guía
              </Link>
            </div>

            {/* Opción 2: Consulta Individual */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift border border-accent/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Más Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                  Consulta Individual
                </h3>
                <p className="text-accent font-semibold text-lg">Desde €80/sesión</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Sesión personalizada 1:1</span>
                </li>
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Análisis profundo</span>
                </li>
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Plan de acción inmediato</span>
                </li>
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Seguimiento por email</span>
                </li>
              </ul>
              <Link 
                to="/contacto" 
                className="btn-accent w-full hover-lift inline-flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                Agendar Consulta
              </Link>
            </div>

            {/* Opción 3: Programa Completo */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift border border-border/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                  Programa Completo
                </h3>
                <p className="text-accent font-semibold text-lg">Consultar precio</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Proceso completo 3-6 meses</span>
                </li>
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Sesiones semanales</span>
                </li>
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Material exclusivo</span>
                </li>
                <li className="flex items-center gap-3 text-sophisticated">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Soporte 24/7</span>
                </li>
              </ul>
              <Link 
                to="/contacto" 
                className="btn-outline w-full hover-lift inline-flex items-center justify-center gap-2"
              >
                <Target className="w-4 h-4" />
                Más Información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 bg-gradient-accent text-white">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-5xl font-heading font-bold mb-8">
            ¿Listo para Transformar tu Vida?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
            No esperes más. Tu mejor versión te está esperando. Da el primer paso hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/regalo" 
              className="bg-white text-accent hover:bg-gray-100 transition-fast px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-3 hover-lift"
            >
              <Star className="w-5 h-5" />
              Comenzar Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contacto" 
              className="border-2 border-white text-white hover:bg-white hover:text-accent transition-fast px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-3 hover-lift"
            >
              <Heart className="w-5 h-5" />
              Hablar Conmigo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comenzar;