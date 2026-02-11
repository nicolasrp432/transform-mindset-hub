import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

const Footer = () => {
  return (
    <footer className="relative border-t border-border/40 bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-foreground">Ainara Coach</h3>
            <p className="max-w-sm text-muted-foreground">
              Transformación consciente para líderes, equipos y personas que desean vivir con propósito, claridad y coherencia.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/ainaracoach/" target="_blank" rel="noopener noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent/40 transition-all hover:scale-110 hover:from-accent hover:to-accent/80">
                <Instagram className="h-5 w-5 text-accent group-hover:text-white" />
              </a>
              <a href="https://www.facebook.com/ainaracoach" target="_blank" rel="noopener noreferrer" className="group flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent/40 transition-all hover:scale-110 hover:from-accent hover:to-accent/80">
                <Facebook className="h-5 w-5 text-accent group-hover:text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-heading font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent/40">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <a href="mailto:ainaracoachpnl@gmail.com" className="text-muted-foreground transition-colors hover:text-accent">
                  ainaracoachpnl@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent/40">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div className="text-muted-foreground">
                  <a href="tel:+34692627353" className="block transition-colors hover:text-accent">Móvil: +34 692 627 353</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent/40">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div className="text-muted-foreground">
                  <div>Basauri, Calle Uribarri, 2</div>
                  <div>Entreplanta 2-Dpto.C</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">¿Listo para empezar?</h4>
            <p className="text-muted-foreground">Reserva una sesión de descubrimiento y da el primer paso hacia tu transformación.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90">
                <Link to={ROUTES.contact}>Reserva tu sesión</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                <a href="https://wa.me/34692627353" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ainara Coach. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">Hecho con <Heart className="h-3 w-3 text-accent" /> para tu transformación.</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 bg-gradient-to-t from-accent/10 to-transparent" />
    </footer>
  );
};

export default Footer;
