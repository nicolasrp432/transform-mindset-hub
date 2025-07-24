import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui-elements/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-slide-in-down">
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 animate-fade-in-up animate-delay-200 hover-scale">
            <img 
              src="/Recurso 5-8.png" 
              alt="Ainara Coach Logo" 
              className="h-12 w-auto object-contain hover-rotate"
            />
            <span className="text-2xl font-heading font-bold text-foreground animate-slide-in-left animate-delay-300">
              Ainara Coach
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10 animate-fade-in-up animate-delay-400">
            <Link 
              to="/"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-slide-in-down animate-delay-500 ${
                isActivePage('/') ? 'text-accent' : ''
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/sobre-mi"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-slide-in-down animate-delay-600 ${
                isActivePage('/sobre-mi') ? 'text-accent' : ''
              }`}
            >
              Sobre Mí
            </Link>
            <Link 
              to="/servicios"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-slide-in-down animate-delay-700 ${
                isActivePage('/servicios') ? 'text-accent' : ''
              }`}
            >
              Servicios
            </Link>
            <Link 
              to="/mi-proceso"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-slide-in-down animate-delay-800 ${
                isActivePage('/mi-proceso') ? 'text-accent' : ''
              }`}
            >
              Mi Proceso
            </Link>
            <Link 
              to="/testimonios"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-slide-in-down animate-delay-900 ${
                isActivePage('/testimonios') ? 'text-accent' : ''
              }`}
            >
              Testimonios
            </Link>
            <Link 
              to="/regalo"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-slide-in-down animate-delay-1000 ${
                isActivePage('/regalo') ? 'text-accent' : ''
              }`}
            >
              Regalo
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block animate-zoom-in animate-delay-1100">
            <Button 
              variant="primary"
              size="lg"
              className="hover-glow animate-pulse"
              onClick={() => window.location.href = '/comenzar'}
            >
              Comenzar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 text-sophisticated hover:text-accent transition-colors animate-bounce-in animate-delay-1200 hover-rotate"
            aria-label="Toggle menu"
          >
            <svg className="icon-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border animate-slide-in-down animate-delay-200">
            <nav className="container-custom px-4 py-6 space-y-6">
              <Link 
                to="/"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-fade-in-up animate-delay-300 ${
                  isActivePage('/') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/sobre-mi"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-fade-in-up animate-delay-400 ${
                  isActivePage('/sobre-mi') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre Mí
              </Link>
              <Link 
                to="/servicios"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-fade-in-up animate-delay-500 ${
                  isActivePage('/servicios') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/mi-proceso"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-fade-in-up animate-delay-600 ${
                  isActivePage('/mi-proceso') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mi Proceso
              </Link>
              <Link 
                to="/testimonios"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-fade-in-up animate-delay-700 ${
                  isActivePage('/testimonios') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link 
                to="/regalo"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-fade-in-up animate-delay-800 ${
                  isActivePage('/regalo') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Regalo
              </Link>
              <Link 
                to="/contacto"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium hover-scale animate-fade-in-up animate-delay-900 ${
                  isActivePage('/contacto') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="mt-6 animate-zoom-in animate-delay-1000">
                <Button 
                  variant="primary"
                  size="lg"
                  className="w-full hover-glow"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = '/comenzar';
                  }}
                >
                  Comenzar Ahora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;