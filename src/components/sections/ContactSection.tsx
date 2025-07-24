import { Mail, MapPin, Clock, Linkedin, Instagram } from 'lucide-react';
import Button from '../ui-elements/Button';
import Card from '../ui-elements/Card';

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
          href="mailto:ainaraunamunzagacoach@gmail.com" 
          className="text-accent hover:text-accent/90 transition-fast hover-glow"
        >
          ainaraunamunzagacoach@gmail.com
        </a>
      ),
      delay: 500
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: (
        <>
          Zaratamo 48480<br />
          Bilbao, España
        </>
      ),
      delay: 700
    },
    {
      icon: Clock,
      title: "Modalidad de Trabajo",
      content: (
        <>
          Presencial en Bilbao<br />
          Online en toda España
        </>
      ),
      delay: 900
    }
  ];

  const socialLinks = [
    {
      href: "https://linkedin.com/in/ainaraunamunzaga",
      icon: Linkedin,
      delay: 1300
    },
    {
      href: "https://instagram.com/ainaraunamunzaga",
      icon: Instagram,
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

          {/* CTA Section */}
          <Card 
            variant="glass" 
            className="p-8 animate-slide-in-right animate-delay-500" 
            hover={true}
            animate={true}
            delay="animate-delay-600"
          >
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-heading font-bold text-primary-foreground animate-zoom-in animate-delay-700">
                ¿Hablamos de tu Proyecto?
              </h3>
              <p className="text-primary-foreground/90 font-body animate-fade-in-up animate-delay-800">
                Cada proceso de transformación es único. Contacta conmigo para una conversación inicial gratuita donde evaluaremos tu situación y diseñaremos el mejor camino para alcanzar tus objetivos.
              </p>
              
              <div className="space-y-4">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() => window.open('mailto:ainaraunamunzagacoach@gmail.com?subject=Consulta sobre Coaching&body=Hola Ainara, me interesa conocer más sobre tus servicios de coaching...')}
                  className="w-full hover-glow"
                  animate={true}
                >
                  Escribir Email Directo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('gift')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  animate={true}
                >
                  Comenzar con la Evaluación Gratuita
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;