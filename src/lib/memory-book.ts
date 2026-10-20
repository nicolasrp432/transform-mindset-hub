/** Prelaunch only: deliberately excluded from the payable PRODUCTS registry. */
export const MEMORY_BOOK = {
  title: "Entre tú y yo",
  subtitle: "Mamá, quiero conocerte",
  href: "/entre-tu-y-yo",
  status: "Próximamente",
  questions: 48,
  encounters: 8,
  pages: 128,
} as const;

export const BOOK_ENCOUNTERS = [
  { title: "Tu mundo de pequeña", note: "Una casa, una costumbre, una pequeña aventura.", question: "Si entráramos en tu casa de infancia a la hora de cenar, ¿qué encontraríamos?" },
  { title: "Antes de ser mi madre", note: "Sus amistades, su música y la vida que no conociste.", question: "¿Qué versión de ti conocieron tus amistades de entonces que yo apenas conozco?" },
  { title: "Elegir tu camino", note: "Decisiones que hicieron su vida un poco más suya.", question: "¿Qué sabes hacer bien que casi nadie imagina cuánto te costó aprender?" },
  { title: "Convertirte en mamá", note: "Lo cotidiano, la ayuda y lo que se aprendió sobre la marcha.", question: "¿Qué resolvías sobre la marcha mientras yo pensaba que tú lo sabías todo?" },
  { title: "Lo que vivimos", note: "Dos personas pueden guardar versiones distintas del mismo día.", question: "¿Qué plan sencillo que hacías conmigo llevaba más preparación de la que yo veía?" },
  { title: "Lo que hoy ves diferente", note: "Ideas que cambian. Maneras nuevas de acompañarse.", question: "¿Qué gesto te hace sentir acompañada cuando no necesitas consejos?" },
  { title: "Tu vida de ahora", note: "Porque su historia también está ocurriendo hoy.", question: "¿Qué parte de tu vida actual crees que yo sigo imaginando como era antes?" },
  { title: "Lo que nos queda por compartir", note: "Una pregunta de vuelta y un motivo para volver a sentarse.", question: "Después de contarme tanto de ti, ¿qué te gustaría descubrir de mí?" },
] as const;
