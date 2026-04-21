"use server";

import { insforge } from "@/lib/insforge";
import { LeadMagnetSchema, type LeadMagnetInput } from "@/lib/validations";

export async function submitLeadMagnet(data: LeadMagnetInput) {
  // 1. Re-validación estricta en el servidor
  const parsed = LeadMagnetSchema.safeParse(data);
  
  if (!parsed.success) {
    return { success: false, error: "Datos proporcionados no son válidos." };
  }

  try {
    // 2. Inserción usando el cliente de InsForge
    const { error } = await insforge.database.from("leads").insert([
      {
        name: parsed.data.name,
        email: parsed.data.email,
        // created_at asume un "default now()" en la configuración de la BD
      }
    ]);

    // 3. Manejo de Errores - SOFT FALLBACK
    if (error) {
      // Duplicate = user already got guide, let them download again
      if (
        error.code === "23505" || 
        error.message?.toLowerCase().includes("unique") || 
        error.message?.toLowerCase().includes("duplicate")
      ) {
        return { success: true, _note: "duplicate_lead_skipped" };
      }
      // SOFT FALLBACK: log but don't block user
      console.error("InsForge Insert Error (soft fallback):", error);
      return { success: true, _warning: "db_save_failed" };
    }

    return { success: true };
  } catch (err: any) {
    // SOFT FALLBACK: DB down = user still gets download
    console.error("ERROR INSFORGE DETALLADO (soft fallback):", {
      message: err?.message,
      code: err?.code,
      status: err?.status,
      stack: err?.stack,
      fullError: JSON.stringify(err, null, 2),
    });
    return { success: true, _warning: "server_error_fallback" };
  }
}
