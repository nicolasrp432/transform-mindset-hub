import { z } from "zod";

export const LeadMagnetSchema = z.object({
  name: z.string().min(2, "Me encantaría saber tu nombre para enviarte el material."),
  email: z.string().email("Necesito un email válido para saber dónde enviar la guía."),
});

export const SessionBookingSchema = LeadMagnetSchema.extend({
  phone: z.string().min(6, "Un teléfono de contacto, por si surge algún cambio.").optional(),
  reason: z.string().min(10, "¿Cuéntame brevemente qué te trae por aquí? Me ayudará a preparar nuestra sesión."),
});

export type LeadMagnetInput = z.infer<typeof LeadMagnetSchema>;
export type SessionBookingInput = z.infer<typeof SessionBookingSchema>;
