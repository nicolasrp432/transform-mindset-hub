export const ROUTES = {
  home: '/',
  about: '/sobre-mi',
  services: '/servicios',
  process: '/mi-proceso',
  testimonials: '/testimonios',
  gift: '/regalo',
  contact: '/contacto',
  start: '/comenzar',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
