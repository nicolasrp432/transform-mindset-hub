import ContactSection from '../components/sections/ContactSection';
import PageHero from '../components/ui-elements/PageHero';
import PageTransition from '@/components/ui/page-transition';

const Contact = () => {
  return (
    <PageTransition>
      <>
        <PageHero 
          title="Conversemos Sobre tu Transformación"
          subtitle="Estoy aquí para ayudarte a alcanzar tu máximo potencial. Contáctame para comenzar tu viaje de transformación consciente"
          backgroundVariant="primary"
        />

        <ContactSection />

        {/* Mapa de Ubicación */}
        <section className="py-20 bg-card">
          <div className="container-custom mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-card-foreground mb-6">
                Mi Ubicación
              </h2>
              <p className="text-xl font-body text-card-foreground/90 max-w-2xl mx-auto">
                Ubicada en Zaratamo, Bilbao, con sesiones presenciales y online disponibles.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Dirección
                    </h3>
                    <p className="text-card-foreground/90 font-body">
                      Zaratamo, Bilbao<br />
                      País Vasco, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    🌍
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Modalidades
                    </h3>
                    <p className="text-card-foreground/90 font-body">
                      Sesiones presenciales en Bilbao<br />
                      Sesiones online en toda España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Horarios
                    </h3>
                    <p className="text-card-foreground/90 font-body">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Horarios flexibles disponibles
                    </p>
                  </div>
                </div>
              </div>

              {/* Mapa embebido */}
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.8234567890123!2d-2.9876543210987654!3d43.2345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE0JzA0LjQiTiAywrA1OSczMC4yIlc!5e0!3m2!1ses!2ses!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Ainara Coaching en Zaratamo, Bilbao"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </>
    </PageTransition>
  );
};

export default Contact;