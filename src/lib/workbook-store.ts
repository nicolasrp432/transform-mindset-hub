import { Pool } from "pg";
import { attachDatabasePool } from "@vercel/functions";
import type { LeadRow } from "./lead-capture";

let pool: Pool | undefined;
function getPool() {
  if (!pool) {
    if (!process.env.WORKBOOK_DATABASE_URL) throw new Error("workbook_database_not_configured");
    pool = new Pool({
      connectionString: process.env.WORKBOOK_DATABASE_URL,
      max: 3, idleTimeoutMillis: 5000, connectionTimeoutMillis: 10000,
      statement_timeout: 10000,
    });
    attachDatabasePool(pool);
    pool.on("error", () => console.error("workbook_database_pool_error"));
  }
  return pool;
}

/** Server-only connection with INSERT permission, never exposed to the browser. */
export async function writeWorkbookLead(row: LeadRow) {
  await getPool().query(
    `INSERT INTO public.workbook_requests
      (id,name,email,resource_id,source,privacy_accepted,marketing_consent,
       consent_version,privacy_text,marketing_text,consent_recorded_at,followup_status)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
    [row.id,row.name,row.email,row.resource_id,row.source,row.privacy_accepted,
      row.marketing_consent,row.consent_version,row.privacy_text,row.marketing_text,
      row.consent_recorded_at,row.followup_status],
  );
  return { error: null };
}
