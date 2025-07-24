import { ArrowRight, CheckCircle, Gift, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const benefits = [
    'Consulta inicial completamente gratuita',
    'Plan personalizado según tus objetivos',
    'Metodología probada con resultados medibles',
    'Acompañamiento continuo durante todo el proceso',
    'Herramientas prácticas que aplicarás inmediatamente'
  ];

  const urgencyFactors = [
    {
      icon: Calendar,
      text: 'Solo 5 consultas gratuitas disponibles este mes'
    },
    {
      icon: Gift,
      text: 'Incluye guía de Inteligencia Emocional valorada en €47'
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h2 className="title-hero font-heading font-bold mb-8 text-gray-800 text-shadow-soft">
            Transforma Tu Liderazgo en los Próximos 90 Días
          </h2>
          
          <p className="text-body-large text-gray-700 mb-12 content-balanced text-shadow-soft">
            No esperes más para convertirte en el líder que siempre has querido ser. 
            Agenda tu consulta gratuita y da el primer paso hacia tu transformación.
          </p>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Urgency factors */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Oferta Especial - Tiempo Limitado
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {urgencyFactors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-800 text-left">
                      {factor.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              to="/contacto"
              className="btn-accent inline-flex items-center gap-3 text-lg px-8 py-4 hover-lift"
            >
              <Calendar className="w-6 h-6" />
              Agendar Mi Consulta Gratuita
              <ArrowRight className="w-6 h-6" />
            </Link>
            
            <Link
              to="/regalo"
              className="btn-secondary-outline inline-flex items-center gap-3 text-lg px-8 py-4 border-2 border-gray-600 text-gray-800 hover:bg-gray-100 transition-all duration-300"
            >
              <Gift className="w-6 h-6" />
              Descargar Guía Gratuita
            </Link>
          </div>

          {/* Social proof */}
          <div className="text-center">
            <p className="text-gray-700 text-sm mb-4">
              Únete a más de 200+ líderes que ya han transformado su carrera
            </p>
            
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">95%</div>
                <div className="text-xs text-gray-700">Satisfacción</div>
              </div>
              <div className="w-px h-8 bg-gray-400"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">200+</div>
                <div className="text-xs text-gray-700">Clientes</div>
              </div>
              <div className="w-px h-8 bg-gray-400"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">5★</div>
                <div className="text-xs text-gray-700">Valoración</div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-400">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Sin compromiso inicial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Consulta 100% gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Resultados garantizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;