import React from 'react';
import { ArrowRight, CheckCircle, Gift, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BenefitItemProps {
  benefit: string;
  index: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ benefit, index }) => (
  <div 
    className="flex items-center gap-3 text-left animate-slide-in-left" 
    style={{ animationDelay: `${600 + index * 100}ms` }}
  >
    <CheckCircle 
      className="w-6 h-6 text-accent flex-shrink-0 animate-bounce-in" 
      style={{ animationDelay: `${700 + index * 100}ms` }} 
    />
    <span className="text-gray-800">{benefit}</span>
  </div>
);

interface UrgencyFactorProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  index: number;
}

const UrgencyFactor: React.FC<UrgencyFactorProps> = ({ icon: Icon, text, index }) => (
  <div 
    className="flex items-center gap-4 animate-slide-in-right" 
    style={{ animationDelay: `${1200 + index * 200}ms` }}
  >
    <div 
      className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 hover-rotate animate-zoom-in" 
      style={{ animationDelay: `${1300 + index * 200}ms` }}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>
    <span className="text-gray-800 text-left">{text}</span>
  </div>
);

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => (
  <div className="text-center animate-zoom-in" style={{ animationDelay: `${delay}ms` }}>
    <div className="text-2xl font-bold text-gray-800">{value}</div>
    <div className="text-xs text-gray-700">{label}</div>
  </div>
);

interface TrustIndicatorProps {
  text: string;
  delay: number;
}

const TrustIndicator: React.FC<TrustIndicatorProps> = ({ text, delay }) => (
  <div className="flex items-center gap-2 animate-slide-in-left" style={{ animationDelay: `${delay}ms` }}>
    <CheckCircle className="w-4 h-4 animate-bounce-in" style={{ animationDelay: `${delay + 100}ms` }} />
    <span>{text}</span>
  </div>
);

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

  const stats = [
    { value: '95%', label: 'Satisfacción', delay: 1900 },
    { value: '200+', label: 'Clientes', delay: 2000 },
    { value: '5★', label: 'Valoración', delay: 2100 }
  ];

  const trustIndicators = [
    { text: 'Sin compromiso inicial', delay: 2300 },
    { text: 'Consulta 100% gratuita', delay: 2400 },
    { text: 'Resultados garantizados', delay: 2500 }
  ];

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float animate-delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl opacity-50 animate-pulse"></div>
      </div>

      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h2 className="title-hero font-heading font-bold mb-8 text-gray-800 text-shadow-soft animate-zoom-in">
            Transforma Tu Liderazgo en los Próximos 90 Días
          </h2>
          
          <p className="text-body-large text-gray-700 mb-12 content-balanced text-shadow-soft animate-fade-in-up animate-delay-300">
            No esperes más para convertirte en el líder que siempre has querido ser. 
            Agenda tu consulta gratuita y da el primer paso hacia tu transformación.
          </p>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in-up animate-delay-500">
            {benefits.map((benefit, index) => (
              <BenefitItem key={index} benefit={benefit} index={index} />
            ))}
          </div>

          {/* Urgency factors */}
          <Card variant="default" className="bg-white/10 backdrop-blur-sm p-8 mb-12 animate-slide-in-up animate-delay-1000">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 animate-fade-in-up animate-delay-1100">
              Oferta Especial - Tiempo Limitado
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {urgencyFactors.map((factor, index) => (
                <UrgencyFactor key={index} icon={factor.icon} text={factor.text} index={index} />
              ))}
            </div>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up animate-delay-1500">
            <Button
              variant="default"
              size="large"
              href="/contacto"
              animate={true}
              className="text-lg px-8 py-4 hover-glow animate-pulse"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Mi Consulta Gratuita
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            
            <Button
              variant="secondary"
              size="large"
              href="/regalo"
              animate={true}
              className="text-lg px-8 py-4 border-2 border-gray-600 text-gray-800 hover:bg-gray-100"
            >
              <Gift className="w-5 h-5 mr-2" />
              Descargar Guía Gratuita
            </Button>
          </div>

          {/* Social proof */}
          <div className="text-center animate-fade-in-up animate-delay-1700">
            <p className="text-gray-700 text-sm mb-4 animate-slide-in-up animate-delay-1800">
              Únete a más de 200+ líderes que ya han transformado su carrera
            </p>
            
            <div className="flex justify-center items-center gap-8 opacity-60">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <StatItem value={stat.value} label={stat.label} delay={stat.delay} />
                  {index < stats.length - 1 && (
                    <div className="w-px h-8 bg-gray-400 animate-slide-in-down ml-8" style={{ animationDelay: `${stat.delay + 100}ms` }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-400 animate-fade-in-up animate-delay-2200">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-700">
              {trustIndicators.map((indicator, index) => (
                <TrustIndicator key={index} text={indicator.text} delay={indicator.delay} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;