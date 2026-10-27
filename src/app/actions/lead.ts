"use server";

import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { writeWorkbookLead } from "@/lib/workbook-store";
import { LeadMagnetSchema, type LeadMagnetInput } from "@/lib/validations";
import { FREE_WORKBOOK } from "@/lib/free-workbook";
import { persistLead, type LeadRow } from "@/lib/lead-capture";
import { ACCESS_SECONDS, createWorkbookToken, WORKBOOK_COOKIE } from "@/lib/workbook-access";

export async function submitLeadMagnet(data: LeadMagnetInput) {
  const parsed = LeadMagnetSchema.safeParse(data);
  if (!parsed.success) return { success: false as const, error: "Revisa el nombre, correo y permiso de privacidad." };
  const reference = randomUUID();
  const fail = (reason: string) => {
    console.error("workbook_lead_failed", { reference, reason });
    return { success: false as const, error: `No hemos podido confirmar tu solicitud. Inténtalo de nuevo o escríbenos. Referencia: ${reference.slice(0,8)}.` };
  };
  const secret = process.env.LEAD_DOWNLOAD_SECRET || "";
  if (!process.env.WORKBOOK_DATABASE_URL || secret.length < 32) return fail("configuration_missing");
  try {
    const token = createWorkbookToken(secret);
    const row: LeadRow = {
      id: reference, name: parsed.data.name, email: parsed.data.email,
      resource_id: FREE_WORKBOOK.id, source: "herramientas/cuaderno-gratuito",
      privacy_accepted: true, marketing_consent: parsed.data.marketingConsent,
      consent_version: FREE_WORKBOOK.consentVersion,
      privacy_text: FREE_WORKBOOK.privacyText, marketing_text: FREE_WORKBOOK.marketingText,
      consent_recorded_at: new Date().toISOString(),
      followup_status: parsed.data.marketingConsent ? "permission_to_verify" : "resource_only",
    };
    // Insert-only; no SELECT permission. Repeated emails are audit events, not errors.
    const saved = await persistLead(row, writeWorkbookLead);
    if (!saved.success) return fail(saved.reason);
    (await cookies()).set(WORKBOOK_COOKIE, token, {
      httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax",
      path: FREE_WORKBOOK.downloadUrl, maxAge: ACCESS_SECONDS,
    });
    return { success: true as const, downloadUrl: FREE_WORKBOOK.downloadUrl };
  } catch {
    return fail("request_incomplete");
  }
}
