import ContactSection from '../components/sections/ContactSection';
// Removed PageHero import to avoid duplicate title
import PageTransition from '@/components/ui/page-transition';
import { MapPin, Globe, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <PageTransition>
      <>
        {/* Single page title using PageHero typography */}
        <ContactSection />

        {/* Mapa de Ubicación */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container-custom mx-auto">
            {/* Section title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Mi Ubicación</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Basauri, Calle Uribarri, 2 Entreplanta 2-Dpto.C
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <div className="flex items-start space-x-4 p-5 bg-background/50 backdrop-blur-sm rounded-xl border border-border hover:border-accent/30 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/40 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Dirección
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Basauri, Calle Uribarri, 2<br />
                      Entreplanta 2-Dpto.C
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-5 bg-background/50 backdrop-blur-sm rounded-xl border border-border hover:border-accent/30 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/40 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Modalidades
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Sesiones presenciales en Basauri / Bilbao<br />
                      Sesiones online para toda España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-5 bg-background/50 backdrop-blur-sm rounded-xl border border-border hover:border-accent/30 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/40 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Horarios
                    </h3>
                    <p className="text-muted-foreground font-body">
                      Lunes a Viernes: 9:00 - 18:00<br />
                      Horarios flexibles disponibles
                    </p>
                  </div>
                </div>
              </div>

              {/* Mapa embebido */}
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg animate-slide-in-right">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.8234567890123!2d-2.9876543210987654!3d43.2345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE0JzA0LjQiTiAywrA1OSczMC4yIlc!5e0!3m2!1ses!2ses!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Ainara Coach en Basauri (Bilbao)"
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