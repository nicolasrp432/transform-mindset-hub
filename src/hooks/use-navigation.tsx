import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationState {
  isTransitioning: boolean;
  previousPath: string | null;
  currentPath: string;
}

export const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navigationState, setNavigationState] = useState<NavigationState>({
    isTransitioning: false,
    previousPath: null,
    currentPath: location.pathname
  });

  // Smooth scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setNavigationState(prev => ({
        ...prev,
        isTransitioning: true,
        previousPath: prev.currentPath,
        currentPath: location.pathname
      }));

      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      // Reset transition state after animation
      const timer = setTimeout(() => {
        setNavigationState(prev => ({
          ...prev,
          isTransitioning: false
        }));
      }, 300);

      return () => clearTimeout(timer);
    };

    handleRouteChange();
  }, [location.pathname]);

  // Enhanced navigation with transition
  const navigateWithTransition = (path: string, options?: { replace?: boolean }) => {
    setNavigationState(prev => ({
      ...prev,
      isTransitioning: true
    }));

    // Small delay for smooth transition
    setTimeout(() => {
      navigate(path, options);
    }, 150);
  };

  // Smooth scroll to section within page
  const scrollToSection = (sectionId: string, offset: number = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Check if current path matches
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  // Get page title based on current path
  const getPageTitle = () => {
    const titles: Record<string, string> = {
      '/': 'Inicio',
      '/sobre-mi': 'Sobre Mí',
      '/servicios': 'Servicios',
      '/mi-proceso': 'Mi Proceso',
      '/testimonios': 'Testimonios',
      '/regalo': 'Regalo',
      '/contacto': 'Contacto',
      '/comenzar': 'Comenzar Ahora'
    };
    return titles[location.pathname] || 'Transform Mindset Hub';
  };

  return {
    navigationState,
    navigateWithTransition,
    scrollToSection,
    isActivePath,
    getPageTitle,
    currentPath: location.pathname
  };
};