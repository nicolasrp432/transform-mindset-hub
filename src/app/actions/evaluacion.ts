"use server";

import { insforge } from "@/lib/insforge";
import { z } from "zod";

const EvaluacionSchema = z.object({
  name: z.string().min(2, "Necesito tu nombre para el diagnóstico."),
  email: z.string().email("Necesito un email válido para enviarte el resultado."),
  answers: z.array(z.string()).min(1, "Respuestas requeridas."),
});

export type EvaluacionInput = z.infer<typeof EvaluacionSchema>;

export async function submitEvaluacion(data: EvaluacionInput) {
  const parsed = EvaluacionSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Datos proporcionados no son válidos." };
  }

  try {
    const { error } = await insforge.database.from("leads").insert([
      {
        name: parsed.data.name,
        email: parsed.data.email,
        source: "evaluacion",
        evaluation_answers: JSON.stringify(parsed.data.answers),
      },
    ]);

    if (error) {
      // Duplicate = user already did test, still let them through
      if (
        error.code === "23505" ||
        error.message?.toLowerCase().includes("unique") ||
        error.message?.toLowerCase().includes("duplicate")
      ) {
        return { success: true, _note: "duplicate_lead_skipped" };
      }
      // SOFT FALLBACK: log error, but don't block user
      console.error("ERROR INSFORGE EVALUACION (soft fallback):", {
        message: error.message,
        code: error.code,
        fullError: JSON.stringify(error, null, 2),
      });
      return { success: true, _warning: "db_save_failed" };
    }

    return { success: true };
  } catch (err: any) {
    // SOFT FALLBACK: DB down = user still sees results
    console.error("ERROR INSFORGE EVALUACION DETALLADO (soft fallback):", {
      message: err?.message,
      code: err?.code,
      status: err?.status,
      stack: err?.stack,
      fullError: JSON.stringify(err, null, 2),
    });
    return { success: true, _warning: "server_error_fallback" };
  }
}
