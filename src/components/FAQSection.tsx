import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Users, CreditCard, Shield, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'proceso' | 'modalidades' | 'inversion';
  icon?: React.ComponentType<any>;
}

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('general');

  const categories = [
    { id: 'general', label: 'General', icon: MessageCircle },
    { id: 'proceso', label: 'Proceso', icon: Calendar },
    { id: 'modalidades', label: 'Modalidades', icon: Users },
    { id: 'inversion', label: 'Inversión', icon: CreditCard }
  ];

  const faqs: FAQItem[] = [
    // General
    {
      category: 'general',
      question: '¿Qué es exactamente el coaching de transformación personal?',
      answer: 'Es un proceso de acompañamiento personalizado que combina técnicas de coaching tradicional con PNL, inteligencia emocional y neuroplasticidad. Te ayudo a identificar y superar patrones limitantes, desarrollar nuevas habilidades de liderazgo y crear la versión más auténtica y poderosa de ti mismo. No es terapia, sino un enfoque orientado a la acción y los resultados futuros.',
      icon: MessageCircle
    },
    {
      category: 'general',
      question: '¿Cómo sé si el coaching es adecuado para mí?',
      answer: 'El coaching es ideal si sientes que tienes potencial sin explotar, quieres mejorar tu liderazgo, buscas mayor claridad en tus objetivos, o simplemente sabes que puedes ser una mejor versión de ti mismo. Si estás dispuesto/a a comprometerte con el proceso y tomar acción, el coaching puede transformar tu vida. En nuestra consulta gratuita evaluaremos si es el momento adecuado para ti.',
      icon: Users
    },
    {
      category: 'general',
      question: '¿Cuál es la diferencia entre coaching y terapia?',
      answer: 'La terapia se enfoca en sanar heridas del pasado, mientras que el coaching se centra en crear tu futuro deseado. Como coach, trabajo contigo para establecer objetivos claros, desarrollar estrategias de acción y mantenerte accountable. No diagnostico ni trato problemas de salud mental. Si detectara que necesitas apoyo terapéutico, te referiría a un profesional adecuado.',
      icon: Shield
    },
    {
      category: 'general',
      question: '¿Qué resultados puedo esperar y en cuánto tiempo?',
      answer: 'Los primeros cambios suelen notarse en las primeras 2-3 sesiones: mayor claridad, confianza y motivación. Cambios más profundos en patrones de pensamiento y comportamiento se consolidan entre los 3-6 meses. Sin embargo, cada persona es única. Algunos clientes experimentan transformaciones dramáticas en pocas semanas, otros prefieren un proceso más gradual. Lo importante es que cada sesión te acerque a tus objetivos.'
    },

    // Proceso
    {
      category: 'proceso',
      question: '¿Cómo es una sesión típica de coaching?',
      answer: 'Cada sesión dura entre 60-90 minutos y sigue una estructura flexible: revisamos el progreso desde la última sesión, exploramos desafíos actuales, trabajamos con herramientas específicas (PNL, visualizaciones, etc.), establecemos objetivos claros para la siguiente semana y definimos acciones concretas. Siempre adaptamos el enfoque a tus necesidades del momento.',
      icon: Clock
    },
    {
      category: 'proceso',
      question: '¿Qué pasa entre sesiones?',
      answer: 'El trabajo real sucede entre sesiones. Te proporciono ejercicios específicos, reflexiones y pequeñas acciones para implementar. Tienes acceso directo a mí vía WhatsApp para dudas o apoyo. También envío recordatorios y recursos adicionales. El objetivo es que mantengas el momentum y integres los aprendizajes en tu día a día.',
      icon: MessageCircle
    },
    {
      category: 'proceso',
      question: '¿Cómo mides el progreso?',
      answer: 'Utilizamos múltiples métodos: evaluaciones iniciales y de seguimiento, escalas de satisfacción en diferentes áreas de tu vida, objetivos SMART con métricas específicas, y tu propia percepción del cambio. Cada 4 sesiones hacemos una revisión completa del progreso y ajustamos el plan si es necesario. Tu feedback es fundamental para adaptar el proceso.',
      icon: Calendar
    },
    {
      category: 'proceso',
      question: '¿Qué pasa si no puedo asistir a una sesión?',
      answer: 'Entiendo que la vida es impredecible. Puedes reprogramar cualquier sesión con 24 horas de antelación sin coste adicional. Si es una emergencia, siempre encontramos una solución. La flexibilidad es clave para que el coaching se adapte a tu vida, no al revés. También ofrezco sesiones de recuperación más cortas si es necesario.',
      icon: Clock
    },

    // Modalidades
    {
      category: 'modalidades',
      question: '¿Cuál es la diferencia entre coaching online y presencial?',
      answer: 'La efectividad es la misma en ambas modalidades. Online ofrece mayor flexibilidad y comodidad, mientras que presencial permite una conexión más directa y técnicas adicionales como Reiki. La elección depende de tus preferencias personales, ubicación y disponibilidad. Muchos clientes combinan ambas modalidades según sus necesidades.',
      icon: Users
    },
    {
      category: 'modalidades',
      question: '¿Ofrecés coaching grupal?',
      answer: 'Actualmente me enfoco en coaching individual para garantizar la máxima personalización. Sin embargo, organizo talleres grupales mensuales para mis clientes y eventos especiales. Si tienes un equipo empresarial interesado, puedo diseñar un programa específico. La comunidad exclusiva de clientes también ofrece apoyo grupal complementario.',
      icon: Users
    },
    {
      category: 'modalidades',
      question: '¿Qué incluye el programa intensivo de 30 días?',
      answer: 'Es un programa acelerado con 8 sesiones distribuidas estratégicamente, evaluación 360° inicial, plan de acción ultra-personalizado, seguimiento diario vía WhatsApp, herramientas de autoevaluación y acceso prioritario a mí. Está diseñado para líderes que necesitan resultados rápidos y pueden comprometerse intensivamente durante un mes.',
      icon: Calendar
    },

    // Inversión
    {
      category: 'inversion',
      question: '¿Cuánto cuesta el proceso de coaching?',
      answer: 'La inversión varía según la modalidad: individual presencial desde €140/sesión, online desde €100/sesión, programas intensivos desde €1,200. Incluye todas las bonificaciones (valor €185) sin coste adicional. Ofrezco planes de pago flexibles y la primera consulta es siempre gratuita. Considera que es una inversión en tu futuro que te acompañará toda la vida.',
      icon: CreditCard
    },
    {
      category: 'inversion',
      question: '¿Ofrecés planes de pago?',
      answer: 'Sí, entiendo que es una inversión importante. Ofrezco planes de pago personalizados: pago por sesión, paquetes con descuento, o financiación hasta en 6 cuotas sin intereses. En la consulta gratuita evaluamos la opción que mejor se adapte a tu situación. Mi objetivo es que el aspecto económico no sea una barrera para tu transformación.',
      icon: CreditCard
    },
    {
      category: 'inversion',
      question: '¿Hay garantía de satisfacción?',
      answer: 'Absolutamente. Si después de las primeras 3 sesiones sientes que no estamos avanzando hacia tus objetivos, te devuelvo el 100% de tu inversión. Además, me comprometo a trabajar contigo hasta que alcances los objetivos que definamos juntos. Tu éxito es mi éxito, y estoy completamente comprometida con tu transformación.',
      icon: Shield
    },
    {
      category: 'inversion',
      question: '¿Por qué debería invertir en coaching contigo específicamente?',
      answer: 'Combino 15+ años de experiencia empresarial con formación especializada en coaching, PNL e inteligencia emocional. Mi enfoque integra neuroplasticidad y técnicas energéticas como Reiki. Tengo un historial comprobado de resultados (95% de satisfacción) y ofrezco un acompañamiento personalizado que va más allá de las sesiones. Además, garantizo tu satisfacción y resultados.',
      icon: Users
    }
  ];

  const filteredFAQs = faqs.filter(faq => faq.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-card">
      <div className="container-custom mx-auto px-4">
        {/* Header */}
        <div className="content-center mb-16">
          <h2 className="title-section font-heading font-bold text-card-foreground mb-8">
            Preguntas Frecuentes
          </h2>
          <p className="text-body-large text-muted-foreground content-balanced">
            Resuelvo las dudas más comunes sobre el proceso de coaching y transformación personal
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openItems.includes(index);
              const IconComponent = faq.icon;
              
              return (
                <div key={index} className="card-elegant overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-background/50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {IconComponent && (
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                      )}
                      <h3 className="font-semibold text-card-foreground text-left">
                        {faq.question}
                      </h3>
                    </div>
                    
                    <div className="flex-shrink-0 ml-4">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className={IconComponent ? 'ml-14' : ''}>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-10">
            <h3 className="title-card font-semibold text-card-foreground mb-6">
              ¿Tienes alguna pregunta específica?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              En tu consulta gratuita de 30 minutos resolveremos todas tus dudas y evaluaremos si el coaching es adecuado para ti en este momento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar Consulta Gratuita
              </Link>
              <Link
                to="/regalo"
                className="btn-secondary"
              >
                Descargar Guía Gratuita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;