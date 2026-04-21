import { createClient } from "@insforge/sdk";

const insforgeUrl = (process.env.INSFORGE_URL || "").replace(/\/+$/, "");
const insforgeKey = process.env.INSFORGE_SECRET_KEY || "";

// Solo alertamos en el servidor si faltan las credenciales
if (!insforgeUrl || !insforgeKey) {
  console.warn("⚠️ Advertencia: Faltan INSFORGE_URL o INSFORGE_SECRET_KEY en el entorno.");
}

export const insforge = createClient({
  baseUrl: insforgeUrl,
  anonKey: insforgeKey,
});
