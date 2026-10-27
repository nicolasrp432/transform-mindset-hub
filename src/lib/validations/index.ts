import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre.").max(100, "El nombre es demasiado largo."),
  email: z.string().trim().toLowerCase().email("Escribe un correo electrónico válido.").max(254),
});

export const LeadMagnetSchema = ContactSchema.extend({
  privacyAccepted: z.boolean().refine(value => value, "Necesitamos tu permiso para gestionar la solicitud."),
  marketingConsent: z.boolean(),
  website: z.string().max(0, "No hemos podido validar el formulario."),
});

export const SessionBookingSchema = ContactSchema.extend({
  phone: z.string().min(6, "Un teléfono de contacto, por si surge algún cambio.").optional(),
  reason: z.string().min(10, "¿Cuéntame brevemente qué te trae por aquí? Me ayudará a preparar nuestra sesión."),
});

export type LeadMagnetInput = z.infer<typeof LeadMagnetSchema>;
export type SessionBookingInput = z.infer<typeof SessionBookingSchema>;
