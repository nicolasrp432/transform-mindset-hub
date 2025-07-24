import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Star, Users, Target, Heart } from 'lucide-react';
=======
>>>>>>> ab5ec508cd7e68798cad2ab23e1219f6ab0a7a5c

const Comenzar = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
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
>>>>>>> ab5ec508cd7e68798cad2ab23e1219f6ab0a7a5c
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
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
>>>>>>> ab5ec508cd7e68798cad2ab23e1219f6ab0a7a5c
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
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
>>>>>>> ab5ec508cd7e68798cad2ab23e1219f6ab0a7a5c
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
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
>>>>>>> ab5ec508cd7e68798cad2ab23e1219f6ab0a7a5c
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comenzar;