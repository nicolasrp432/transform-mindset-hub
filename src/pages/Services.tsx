import ServicesSection from '../components/sections/ServicesSection';
import FAQSection from '../components/sections/FAQSection';
import PageHero from '../components/ui-elements/PageHero';
import PageTransition from '@/components/ui/page-transition';
import { CheckCircle, Clock, Users, Video, MapPin, Gift, BookOpen, MessageCircle, Award, Star, ArrowRight } from 'lucide-react';
import Card from '@/components/ui-elements/Card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const modalities = [
    {
      icon: Users,
      title: 'Coaching Individual',
      description: 'Sesiones personalizadas uno a uno, completamente adaptadas a tus objetivos.',
      features: ['Sesiones de 60-90 min', 'Plan personalizado', 'Flexibilidad total', 'Seguimiento continuo'],
      price: 'Desde €120',
      popular: true
    },
    {
      icon: Video,
      title: 'Coaching Online',
      description: 'La misma calidad del coaching presencial con total flexibilidad de ubicación.',
      features: ['Plataforma segura', 'Recursos digitales', 'Disponible globalmente', 'Grabación opcional'],
      price: 'Desde €100',
      popular: false
    },
    {
      icon: MapPin,
      title: 'Coaching Presencial',
      description: 'Sesiones cara a cara en un ambiente profesional y acogedor.',
      features: ['Ambiente profesional', 'Conexión personal', 'Técnicas de relajación', 'Reiki complementario'],
      price: 'Desde €140',
      popular: false
    }
  ];

  const includes = [
    { icon: CheckCircle, title: 'Evaluación inicial completa', description: 'Análisis profundo de tu situación actual' },
    { icon: BookOpen, title: 'Material exclusivo personalizado', description: 'Workbook y recursos adaptados a ti' },
    { icon: MessageCircle, title: 'Soporte continuo 24/7', description: 'WhatsApp directo para dudas urgentes' },
    { icon: Users, title: 'Comunidad exclusiva', description: 'Acceso a red de profesionales en transformación' },
    { icon: Gift, title: 'Sesión de seguimiento gratuita', description: 'Revisión de progreso a los 30 días' },
    { icon: Award, title: 'Certificado de finalización', description: 'Reconocimiento de tu proceso de transformación' }
  ];

  return (
    <PageTransition>
      <>
        <PageHero 
          title="Servicios de Transformación"
          subtitle="Programas especializados que combinan Coaching, PNL e Inteligencia Emocional para potenciar tu máximo potencial"
          backgroundVariant="primary"
        />

        <ServicesSection />
        
        {/* Modalidades Section */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="flex items-center justify-center space-x-4 mb-6 animate-slide-in-down animate-delay-200">
                <div className="h-1 w-16 bg-accent rounded-full animate-slide-in-left"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground animate-zoom-in">
                  Modalidades de Trabajo
                </h2>
                <div className="h-1 w-16 bg-accent rounded-full animate-slide-in-right"></div>
              </div>
              <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
                Todas las modalidades mantienen la misma calidad y efectividad, adaptándose a tu estilo de vida.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {modalities.map((modality, index) => {
                const IconComponent = modality.icon;
                return (
                  <Card 
                    key={index}
                    variant="elegant"
                    className={`p-8 hover-lift animate-fade-in-up relative ${
                      modality.popular ? 'border-accent shadow-accent' : ''
                    }`}
                    delay={index * 150}
                  >
                    {modality.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          Más Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110 ${
                        modality.popular ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{modality.title}</h3>
                      <p className="text-muted-foreground mb-4">{modality.description}</p>
                      <div className={`text-2xl font-bold ${
                        modality.popular ? 'text-accent' : 'text-foreground'
                      }`}>
                        {modality.price}
                        <span className="text-sm font-normal text-muted-foreground">/sesión</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {modality.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className={`w-5 h-5 mr-3 ${
                            modality.popular ? 'text-accent' : 'text-muted-foreground'
                          }`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's Included Section - Modernized */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Gift className="w-4 h-4" />
                Qué Incluye
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Todo lo que Necesitas
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                  para tu Éxito
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Cada programa incluye herramientas, recursos y soporte diseñados para maximizar tu transformación.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {includes.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index}
                    variant="elegant"
                    className="p-6 hover-lift animate-fade-in-up"
                    delay={index * 150}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <FAQSection />
      </>
    </PageTransition>
  );
};

export default Services;