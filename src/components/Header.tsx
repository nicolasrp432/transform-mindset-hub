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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/95 backdrop-blur-md shadow-elegant' 
        : 'bg-primary'
    }`}>
      <nav className="container-custom mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/"
              className="text-2xl font-heading font-bold text-primary-foreground hover:text-accent transition-fast"
            >
              AINARA
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                isActivePage('/') ? 'text-accent' : ''
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/sobre-mi"
              className={`text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                isActivePage('/sobre-mi') ? 'text-accent' : ''
              }`}
            >
              Sobre Mí
            </Link>
            <Link 
              to="/servicios"
              className={`text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                isActivePage('/servicios') ? 'text-accent' : ''
              }`}
            >
              Servicios
            </Link>
            <Link 
              to="/mi-proceso"
              className={`text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                isActivePage('/mi-proceso') ? 'text-accent' : ''
              }`}
            >
              Mi Proceso
            </Link>
            <Link 
              to="/testimonios"
              className={`text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                isActivePage('/testimonios') ? 'text-accent' : ''
              }`}
            >
              Testimonios
            </Link>
            <Link 
              to="/regalo"
              className={`text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                isActivePage('/regalo') ? 'text-accent' : ''
              }`}
            >
              Regalo
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contacto"
              className="btn-accent"
            >
              Contactar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/"
                className={`text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                  isActivePage('/') ? 'text-accent' : ''
                }`}
              >
                Inicio
              </Link>
              <Link 
                to="/sobre-mi"
                className={`text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                  isActivePage('/sobre-mi') ? 'text-accent' : ''
                }`}
              >
                Sobre Mí
              </Link>
              <Link 
                to="/servicios"
                className={`text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                  isActivePage('/servicios') ? 'text-accent' : ''
                }`}
              >
                Servicios
              </Link>
              <Link 
                to="/mi-proceso"
                className={`text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                  isActivePage('/mi-proceso') ? 'text-accent' : ''
                }`}
              >
                Mi Proceso
              </Link>
              <Link 
                to="/testimonios"
                className={`text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                  isActivePage('/testimonios') ? 'text-accent' : ''
                }`}
              >
                Testimonios
              </Link>
              <Link 
                to="/regalo"
                className={`text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium ${
                  isActivePage('/regalo') ? 'text-accent' : ''
                }`}
              >
                Regalo
              </Link>
              <Link 
                to="/contacto"
                className="btn-accent mt-4"
              >
                Contactar
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;