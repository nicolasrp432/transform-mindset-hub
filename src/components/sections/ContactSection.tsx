import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ContactInfoProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: React.ReactNode;
  delay: number;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon: Icon, title, content, delay }) => (
  <div className={`group flex items-start space-x-4 p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg animate-fade-in-up`} style={{ animationDelay: `${delay}ms` }}>
    <div className={`w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/40 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="w-6 h-6 text-accent" />
    </div>
    <div className="flex-1">
      <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <div className="text-muted-foreground font-body">
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
    className={`group w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/40 hover:from-accent hover:to-accent/80 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg animate-bounce-in`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
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
          className="text-accent hover:text-accent/80 transition-colors font-medium hover:underline"
        >
          ainaracoachpnl@gmail.com
        </a>
      ),
      delay: 300
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: (
        <div className="text-muted-foreground">
          <div className="font-medium">Basauri, Calle Uribarri, 2</div>
          <div>Entreplanta 2-Dpto.C</div>
          <div className="sr-only">Basauri, Calle Uribarri, 2 Entreplanta 2-Dpto.C</div>
          <div className="text-sm opacity-75">Vizcaya, España</div>
        </div>
      ),
      delay: 400
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: (
        <div className="space-y-1">
          <a 
            href="tel:+34692627353" 
            className="text-accent hover:text-accent/80 transition-colors font-medium hover:underline block"
          >
            Móvil: +34 692 627 353
          </a>
          <a 
            href="tel:946523217" 
            className="text-accent hover:text-accent/80 transition-colors font-medium hover:underline block"
          >
            Fijo: 946 523 217
          </a>
        </div>
      ),
      delay: 500
    }
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/ainaracoach/",
      icon: Instagram,
      delay: 600
    },
    {
      href: "https://www.facebook.com/ainaracoach",
      icon: Facebook,
      delay: 700
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Send className="w-4 h-4" />
            <span>Comienza tu Transformación</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            Conversemos Sobre tu 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70"> Futuro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿Listo para desarrollar tu máximo potencial? Contacta conmigo y diseñemos juntos tu camino hacia un liderazgo auténtico y transformador.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} />
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Sígueme en Redes Sociales
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => window.open('mailto:ainaracoachpnl@gmail.com?subject=Consulta sobre Coaching&body=Hola Ainara, me interesa conocer más sobre tus servicios de coaching...')}
                  className="group"
                >
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Email Directo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('tel:+34692627353')}
                  className="group border-accent text-accent hover:bg-accent hover:text-white"
                >
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Llamar
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('https://wa.me/34692627353?text=Hola Ainara, me interesa conocer más sobre tus servicios de coaching')}
                  className="group bg-green-600 hover:bg-green-700 text-white"
                >
                  <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 animate-slide-in-right shadow-xl border-border/50">
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Envíame un Mensaje
                </h3>
                <p className="text-muted-foreground">
                  Cuéntame sobre tu situación y objetivos
                </p>
              </div>
              
              <ContactForm />
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

    const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

    try {
      const response = await fetch(`${API_BASE}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      alert('Mensaje enviado con éxito. ¡Gracias por contactarme!');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
            placeholder="Tu nombre completo"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
            placeholder="+34 600 000 000"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Asunto
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
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
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-vertical"
          placeholder="Cuéntame sobre tu situación actual y qué objetivos te gustaría alcanzar..."
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
            Enviando...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
            Enviar Mensaje
          </div>
        )}
      </Button>
    </form>
  );
};

export default ContactSection;