export type LeadRow = {
  id: string; name: string; email: string; resource_id: string; source: string;
  privacy_accepted: boolean; marketing_consent: boolean; consent_version: string;
  privacy_text: string; marketing_text: string; consent_recorded_at: string;
  followup_status: "permission_to_verify" | "resource_only";
};
export type LeadWriteResult = { error: { code?: string } | null };

/** No false success, email enumeration, or PII in error reports. */
export async function persistLead(row: LeadRow, write: (row: LeadRow) => PromiseLike<LeadWriteResult>) {
  try {
    const result = await write(row);
    if (result.error) return { success: false as const, reason: "storage_rejected" };
    return { success: true as const };
  } catch {
    return { success: false as const, reason: "storage_unavailable" };
  }
}
