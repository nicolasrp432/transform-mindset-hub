import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/lib/routes';

interface NavigationState {
  isTransitioning: boolean;
  previousPath: string | null;
  currentPath: string;
}

export const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigateTimerRef = useRef<number | null>(null);
  const transitionTimerRef = useRef<number | null>(null);

  const [navigationState, setNavigationState] = useState<NavigationState>({
    isTransitioning: false,
    previousPath: null,
    currentPath: location.pathname,
  });

  useEffect(() => {
    setNavigationState((prev) => ({
      ...prev,
      isTransitioning: true,
      previousPath: prev.currentPath,
      currentPath: location.pathname,
    }));

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
    }

    transitionTimerRef.current = window.setTimeout(() => {
      setNavigationState((prev) => ({
        ...prev,
        isTransitioning: false,
      }));
    }, 300);

    return () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (navigateTimerRef.current) {
        window.clearTimeout(navigateTimerRef.current);
      }
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const navigateWithTransition = (path: string, options?: { replace?: boolean }) => {
    if (path === location.pathname) {
      return;
    }

    setNavigationState((prev) => ({ ...prev, isTransitioning: true }));

    if (navigateTimerRef.current) {
      window.clearTimeout(navigateTimerRef.current);
    }

    navigateTimerRef.current = window.setTimeout(() => {
      navigate(path, options);
    }, 150);
  };

  const scrollToSection = (sectionId: string, offset: number = 80) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const elementPosition = element.offsetTop - offset;
    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
  };

  const isActivePath = (path: string) => location.pathname === path;

  const getPageTitle = () => {
    const titles: Record<string, string> = {
      [ROUTES.home]: 'Inicio',
      [ROUTES.about]: 'Sobre Mí',
      [ROUTES.services]: 'Servicios',
      [ROUTES.process]: 'Mi Proceso',
      [ROUTES.testimonials]: 'Testimonios',
      [ROUTES.gift]: 'Regalo',
      [ROUTES.contact]: 'Contacto',
      [ROUTES.start]: 'Comenzar Ahora',
    };

    return titles[location.pathname] || 'Transform Mindset Hub';
  };

  return {
    navigationState,
    navigateWithTransition,
    scrollToSection,
    isActivePath,
    getPageTitle,
    currentPath: location.pathname,
  };
};
