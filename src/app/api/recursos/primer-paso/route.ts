import { cookies } from "next/headers";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { FREE_WORKBOOK } from "@/lib/free-workbook";
import { verifyWorkbookToken, WORKBOOK_COOKIE } from "@/lib/workbook-access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const headers = { "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff", "X-Robots-Tag": "noindex, nofollow" };
export async function GET() {
  const token = (await cookies()).get(WORKBOOK_COOKIE)?.value;
  if (!verifyWorkbookToken(token, process.env.LEAD_DOWNLOAD_SECRET || "")) {
    return new Response('El acceso ha caducado o todavía no se ha confirmado. Vuelve a /herramientas#guia-gratuita para solicitar el cuaderno.', { status: 403, headers });
  }
  try {
    const pdf = await readFile(path.join(process.cwd(), "private-resources/de-la-pausa-al-primer-paso.pdf"));
    return new Response(new Uint8Array(pdf), { headers: { ...headers,
      "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="${FREE_WORKBOOK.filename}"`,
    } });
  } catch {
    console.error("workbook_file_unavailable");
    return new Response("No hemos podido abrir el cuaderno. Tu solicitud ya está registrada; vuelve a intentar la descarga.", { status: 503, headers });
  }
}
