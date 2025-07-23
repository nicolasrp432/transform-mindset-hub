import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
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
            <h1 
              className="text-2xl font-heading font-bold text-primary-foreground cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              AINARA
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-primary-foreground hover:text-accent transition-fast font-body font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-primary-foreground hover:text-accent transition-fast font-body font-medium"
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-primary-foreground hover:text-accent transition-fast font-body font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-primary-foreground hover:text-accent transition-fast font-body font-medium"
            >
              Mi Proceso
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-primary-foreground hover:text-accent transition-fast font-body font-medium"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('gift')}
              className="text-primary-foreground hover:text-accent transition-fast font-body font-medium"
            >
              Regalo
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-accent"
            >
              Contactar
            </button>
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
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium"
              >
                Sobre Mí
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium"
              >
                Mi Proceso
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('gift')}
                className="text-left text-primary-foreground hover:text-accent transition-fast font-body font-medium"
              >
                Regalo
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-accent mt-4"
              >
                Contactar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;