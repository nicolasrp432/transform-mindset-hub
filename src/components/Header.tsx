import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
              T
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">
              Transform Mindset Hub
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link 
              to="/"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                isActivePage('/') ? 'text-accent' : ''
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/about"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                isActivePage('/about') ? 'text-accent' : ''
              }`}
            >
              Sobre Mí
            </Link>
            <Link 
              to="/services"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                isActivePage('/services') ? 'text-accent' : ''
              }`}
            >
              Servicios
            </Link>
            <Link 
              to="/process"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                isActivePage('/process') ? 'text-accent' : ''
              }`}
            >
              Mi Proceso
            </Link>
            <Link 
              to="/testimonials"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                isActivePage('/testimonials') ? 'text-accent' : ''
              }`}
            >
              Testimonios
            </Link>
            <Link 
              to="/gift"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                isActivePage('/gift') ? 'text-accent' : ''
              }`}
            >
              Regalo
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/comenzar"
              className="btn-cta px-8 py-3 text-lg hover-lift"
            >
              Comenzar Ahora
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 text-sophisticated hover:text-accent transition-colors"
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
          <div className="md:hidden bg-background border-b border-border">
            <nav className="container-custom px-4 py-6 space-y-6">
              <Link 
                to="/"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                  isActivePage('/') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/about"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                  isActivePage('/about') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre Mí
              </Link>
              <Link 
                to="/services"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                  isActivePage('/services') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                to="/process"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                  isActivePage('/process') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mi Proceso
              </Link>
              <Link 
                to="/testimonials"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                  isActivePage('/testimonials') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link 
                to="/gift"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                  isActivePage('/gift') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Regalo
              </Link>
              <Link 
                to="/contact"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-colors font-medium ${
                  isActivePage('/contact') ? 'text-accent' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link 
                to="/comenzar"
                className="block btn-cta px-8 py-3 text-lg mt-6 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Comenzar Ahora
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;