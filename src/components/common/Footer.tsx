import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative border-t border-border/40 bg-gradient-to-b from-background to-muted/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-foreground">Ainara Coach</h3>
            <p className="text-muted-foreground max-w-sm">
              Transformación consciente para líderes, equipos y personas que desean vivir con propósito, claridad y coherencia.
            </p>
            <div className="flex space-x-3 items-center md:items-start">
              <a href="https://www.instagram.com/ainaracoach/" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/40 hover:from-accent hover:to-accent/80 flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-5 h-5 text-accent group-hover:text-white" />
              </a>
              <a href="https://www.facebook.com/ainaracoach" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/40 hover:from-accent hover:to-accent/80 flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-5 h-5 text-accent group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-lg font-heading font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:ainaracoachpnl@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                  ainaracoachpnl@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div className="text-muted-foreground">
                  <a href="tel:+34692627353" className="hover:text-accent transition-colors block">Móvil: +34 692 627 353</a>
                  {/* WhatsApp is the same as mobile; removed duplicate per request */}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div className="text-muted-foreground">
                  <div>Basauri, Calle Uribarri, 2</div>
                  <div>Entreplanta 2-Dpto.C</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">¿Listo para empezar?</h4>
            <p className="text-muted-foreground">Reserva una sesión de descubrimiento y da el primer paso hacia tu transformación.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link to="/contacto">
                  Reserva tu sesión
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white">
                <a href="https://wa.me/34692627353" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 flex flex-row items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ainara Coach. Todos los derechos reservados.</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">Hecho con <Heart className="w-3 h-3 text-accent" /> para tu transformación.</p>
        </div>
      </div>

      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-24 bg-gradient-to-t from-accent/10 to-transparent" />
    </footer>
  );
};

export default Footer;
