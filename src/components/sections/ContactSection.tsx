import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ContactInfoProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: React.ReactNode;
  delay: number;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon: Icon, title, content, delay }) => (
  <div className={`flex items-start space-x-4 animate-zoom-in hover-scale`} style={{ animationDelay: `${delay}ms` }}>
    <div className={`w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 animate-bounce-in`} style={{ animationDelay: `${delay + 100}ms` }}>
      <Icon className="w-6 h-6 text-accent-foreground" />
    </div>
    <div>
      <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-2">
        {title}
      </h3>
      <div className="text-primary-foreground/90 font-body">
        {content}
      </div>
    </div>
  </div>
);

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  delay: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, delay }) => (
  <a 
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    className={`w-12 h-12 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center transition-fast hover:scale-105 animate-bounce-in hover-rotate`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <Icon className="w-6 h-6 text-accent-foreground" />
  </a>
);

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Directo",
      content: (
        <a 
          href="mailto:ainaracoachpnl@gmail.com" 
          className="text-accent hover:text-accent/90 transition-fast hover-glow"
        >
          ainaracoachpnl@gmail.com
        </a>
      ),
      delay: 500
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: (
        <>
          Zaratamo, Bilbao<br />
          España
        </>
      ),
      delay: 700
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: (
        <>
          <a 
            href="tel:+34692627353" 
            className="text-accent hover:text-accent/90 transition-fast hover-glow block"
          >
            Móvil: +34 692 627 353
          </a>
          <a 
            href="tel:946523217" 
            className="text-accent hover:text-accent/90 transition-fast hover-glow block"
          >
            Fijo: 946 523 217
          </a>
        </>
      ),
      delay: 900
    }
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/ainaracoach/",
      icon: Instagram,
      delay: 1300
    },
    {
      href: "https://www.facebook.com/ainaracoach",
      icon: Facebook,
      delay: 1400
    }
  ];

  return (
    <section id="contact" className="bg-primary section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6 animate-slide-in-down animate-delay-200">
            Comienza tu Transformación Hoy
          </h2>
          <p className="text-xl font-body text-primary-foreground/90 max-w-3xl mx-auto animate-slide-in-up animate-delay-300">
            ¿Listo para desarrollar tu máximo potencial? Contacta conmigo y diseñemos juntos tu camino hacia un liderazgo auténtico y transformador.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left animate-delay-400">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} />
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-primary-foreground/20 animate-slide-in-up animate-delay-1100">
              <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-4 animate-fade-in-up animate-delay-1200">
                Sígueme en Redes Sociales
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <Card 
            className="p-8 animate-slide-in-right animate-delay-500"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-gray-800 animate-zoom-in animate-delay-700 text-center">
              Envíame un Mensaje
            </h3>
              
              <ContactForm />
              
              <div className="pt-6 border-t border-primary-foreground/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => window.open('mailto:ainaracoachpnl@gmail.com?subject=Consulta sobre Coaching&body=Hola Ainara, me interesa conocer más sobre tus servicios de coaching...')}
                    className="hover-glow"
                  >
                    Email Directo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('tel:+34692627353')}
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Llamar Móvil
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open('https://wa.me/34692627353?text=Hola Ainara, me interesa conocer más sobre tus servicios de coaching')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      const mailtoLink = `mailto:ainaracoachpnl@gmail.com?subject=${encodeURIComponent(formData.subject || 'Consulta sobre Coaching')}&body=${encodeURIComponent(
        `Nombre: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.phone}\n\n` +
        `Mensaje:\n${formData.message}`
      )}`;
      
      window.open(mailtoLink);
      setIsSubmitting(false);
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              placeholder="Tu nombre completo"
            />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              placeholder="tu@email.com"
            />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              placeholder="+34 600 000 000"
            />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-2">
              Asunto
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            >
            <option value="">Selecciona un tema</option>
            <option value="Consulta General">Consulta General</option>
            <option value="Coaching Personal">Coaching Personal</option>
            <option value="Coaching Empresarial">Coaching Empresarial</option>
            <option value="Conferencias y Talleres">Conferencias y Talleres</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-vertical"
            placeholder="Cuéntame sobre tu situación actual y qué objetivos te gustaría alcanzar..."
          />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-6 rounded-lg transition-all hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </Button>
    </form>
  );
};

export default ContactSection;