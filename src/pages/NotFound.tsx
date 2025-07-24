import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageTransition from '@/components/ui/page-transition';

const NotFound = () => {
  useEffect(() => {
    // Log para analytics - página no encontrada
    console.log('404 - Página no encontrada:', window.location.pathname);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container-custom mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-8xl font-bold text-primary mb-8">404</div>
          <h1 className="title-section text-foreground mb-8">
            Página No Encontrada
          </h1>
          <p className="text-body-large text-sophisticated mb-12">
            Lo siento, la página que buscas no existe o ha sido movida. 
            Pero no te preocupes, puedes encontrar lo que necesitas desde nuestra página principal.
          </p>
          
          <div className="space-y-6">
            <Link 
              to="/" 
              className="btn-primary inline-block hover-lift"
            >
              Volver al Inicio
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/servicios" className="btn-outline">
                Ver Servicios
              </Link>
              <Link to="/sobre-mi" className="btn-outline">
                Conocer a Ainara
              </Link>
              <Link to="/contacto" className="btn-outline">
                Contactar
              </Link>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-card rounded-2xl border border-border">
            <h2 className="text-xl font-semibold text-card-foreground mb-4">
              ¿Necesitas ayuda?
            </h2>
            <p className="text-body-elegant text-sophisticated mb-6">
              Si llegaste aquí siguiendo un enlace de nuestro sitio, por favor contáctanos 
              para que podamos solucionarlo.
            </p>
            <Link to="/contacto" className="btn-ghost">
              Reportar Problema
            </Link>
          </div>
        </div>
      </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;