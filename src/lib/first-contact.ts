export const CONTACT_QUESTIONS = [
  { topic: "Relaciones", question: "¿Cómo te sientes en tus relaciones personales?", note: "Piensa en tu pareja, familia, amistades o las personas con las que compartes tu día.", options: ["Me siento a gusto", "Hay cosas que me gustaría mejorar", "Me están pesando", "Prefiero no responder"] },
  { topic: "Economía", question: "¿Cómo vives tu situación económica?", note: "Nos interesa cómo te hace sentir, más que los números.", options: ["Me da tranquilidad", "Me preocupa a veces", "Me genera mucha presión", "Prefiero no responder"] },
  { topic: "Cuerpo y energía", question: "¿Cómo estás en tu cuerpo y con tu energía?", note: "Piensa en tu descanso, tus hábitos y cómo te sientes durante el día.", options: ["Me siento bien y con energía", "Tengo altibajos", "Me cuesta descansar o cuidarme", "Prefiero no responder"] },
  { topic: "Contigo", question: "¿Cómo te estás sintiendo contigo últimamente?", note: "Tu ánimo, tus pensamientos y el espacio que te das también cuentan.", options: ["Estoy a gusto conmigo", "A veces me cuesta escucharme", "Me siento sobrepasado/a", "Prefiero no responder"] },
] as const;
export const CONTACT_PRIORITIES = ["Mis relaciones", "Mi economía", "Mi cuerpo y energía", "Cómo me siento conmigo", "Todavía no lo sé"] as const;
export type ContactBrief = { name: string; email?: string; phone?: string; priority: string; note?: string; answers: readonly string[] };
export function buildContactMessage(brief: ContactBrief): string {
  return ["Hola Ainara, me gustaría iniciar una conversación contigo.", "", `Mi nombre: ${brief.name.trim()}`,
    ...(brief.email?.trim() ? [`Correo: ${brief.email.trim()}`] : []),
    ...(brief.phone?.trim() ? [`Teléfono: ${brief.phone.trim()}`] : []), "", "Así estoy en este momento:",
    ...CONTACT_QUESTIONS.map((q, i) => `${q.topic}: ${brief.answers[i] || "Prefiero no responder"}`), "",
    `Me gustaría empezar por: ${brief.priority}`,
    ...(brief.note?.trim() ? ["", `También quiero contarte: ${brief.note.trim()}`] : []),
    "", "Me gustaría conocer el acompañamiento y acordar un primer contacto.",
  ].join("\n");
}
export function buildContactLinks(brief: ContactBrief, whatsappNumber: string, email: string) {
  const message = buildContactMessage(brief);
  return { message, whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    email: `mailto:${email}?subject=${encodeURIComponent("Primer contacto con Ainara")}&body=${encodeURIComponent(message)}` };
}
