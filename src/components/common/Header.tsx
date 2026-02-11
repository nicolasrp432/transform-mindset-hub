import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

const navItems = [
  { label: 'Inicio', path: ROUTES.home },
  { label: 'Sobre Mí', path: ROUTES.about },
  { label: 'Servicios', path: ROUTES.services },
  { label: 'Contacto', path: ROUTES.contact },
  { label: 'Regalo', path: ROUTES.gift },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="container-custom px-4">
        <div className={`flex h-20 items-center gap-4 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          <Link to={ROUTES.home} className="flex items-center">
            <img src="/logoainaratr.png" alt="Ainara Coach Logo" className="h-11 w-auto" />
          </Link>

          <nav className="mx-auto hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-body-elegant font-medium relative transition-colors duration-300 hover:text-accent ${
                    isActive
                      ? 'text-accent after:w-full'
                      : 'text-sophisticated after:w-0'
                  } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-accent after:content-[''] after:transition-all after:duration-300 hover:after:w-full`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              variant="default"
              size="lg"
              className="transition-transform duration-300 hover:scale-105"
              onClick={() => navigate(ROUTES.start)}
            >
              Comenzar Ahora
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="ml-auto rounded-md p-3 text-sophisticated transition-colors hover:text-accent md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
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

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/70 bg-background/95 py-4">
            <nav className="container-custom flex flex-col gap-3 px-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2 text-body-elegant font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-sophisticated hover:bg-accent/10 hover:text-accent'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                variant="default"
                size="lg"
                className="mt-2 w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate(ROUTES.start);
                }}
              >
                Comenzar Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
