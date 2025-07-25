import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useNavigation } from '@/hooks/use-navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isActivePath, navigateWithTransition, currentPath } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    navigateWithTransition(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom px-4">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <span className="text-2xl font-heading font-bold text-foreground">
              Ainara Coach
            </span>
          </Link>

          {/* Navigation - Desktop only */}
          <nav className="hidden md:flex items-center space-x-10 mx-auto">
            <Link 
              to="/"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium relative ${
                isActivePath('/') ? 'text-accent after:w-full' : 'after:w-0'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full`}
            >
              Inicio
            </Link>
            <Link 
              to="/sobre-mi"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium relative ${
                isActivePath('/sobre-mi') ? 'text-accent after:w-full' : 'after:w-0'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full`}
            >
              Sobre Mí
            </Link>
            <Link 
              to="/servicios"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium relative ${
                isActivePath('/servicios') ? 'text-accent after:w-full' : 'after:w-0'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full`}
            >
              Servicios
            </Link>
            <Link 
              to="/mi-proceso"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium relative ${
                isActivePath('/mi-proceso') ? 'text-accent after:w-full' : 'after:w-0'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full`}
            >
              Mi Proceso
            </Link>
            <Link 
              to="/testimonios"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium relative ${
                isActivePath('/testimonios') ? 'text-accent after:w-full' : 'after:w-0'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full`}
            >
              Testimonios
            </Link>
            <Link 
              to="/regalo"
              className={`text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium relative ${
                isActivePath('/regalo') ? 'text-accent after:w-full' : 'after:w-0'
              } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full`}
            >
              Regalo
            </Link>
          </nav>

          {/* CTA Button - Desktop only */}
          <div className="hidden md:block">
            <Button 
              variant="default"
              size="lg"
              className="transform hover:scale-105 transition-all duration-300"
              onClick={() => handleNavigation('/comenzar')}
            >
              Comenzar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 text-sophisticated hover:text-accent transition-colors ml-auto"
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
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-accent/10 ${
                  isActivePath('/') ? 'text-accent bg-accent/10' : ''
                }`}
                onClick={() => handleNavigation('/')}
              >
                Inicio
              </Link>
              <Link 
                to="/sobre-mi"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-accent/10 ${
                  isActivePath('/sobre-mi') ? 'text-accent bg-accent/10' : ''
                }`}
                onClick={() => handleNavigation('/sobre-mi')}
              >
                Sobre Mí
              </Link>
              <Link 
                to="/servicios"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-accent/10 ${
                  isActivePath('/servicios') ? 'text-accent bg-accent/10' : ''
                }`}
                onClick={() => handleNavigation('/servicios')}
              >
                Servicios
              </Link>
              <Link 
                to="/mi-proceso"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-accent/10 ${
                  isActivePath('/mi-proceso') ? 'text-accent bg-accent/10' : ''
                }`}
                onClick={() => handleNavigation('/mi-proceso')}
              >
                Mi Proceso
              </Link>
              <Link 
                to="/testimonios"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-accent/10 ${
                  isActivePath('/testimonios') ? 'text-accent bg-accent/10' : ''
                }`}
                onClick={() => handleNavigation('/testimonios')}
              >
                Testimonios
              </Link>
              <Link 
                to="/regalo"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-accent/10 ${
                  isActivePath('/regalo') ? 'text-accent bg-accent/10' : ''
                }`}
                onClick={() => handleNavigation('/regalo')}
              >
                Regalo
              </Link>
              <Link 
                to="/contacto"
                className={`block text-body-elegant text-sophisticated hover:text-accent transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-accent/10 ${
                  isActivePath('/contacto') ? 'text-accent bg-accent/10' : ''
                }`}
                onClick={() => handleNavigation('/contacto')}
              >
                Contacto
              </Link>
              <div className="mt-6">
                <Button 
                  variant="default"
                  size="lg"
                  className="w-full transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleNavigation('/comenzar')}
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