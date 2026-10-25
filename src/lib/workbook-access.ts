import { createHmac, timingSafeEqual, randomUUID } from "node:crypto";

export const WORKBOOK_COOKIE = "ainara_workbook_access";
export const ACCESS_SECONDS = 60 * 60;
export function createWorkbookToken(secret: string, now = Date.now()) {
  if (secret.length < 32) throw new Error("Download signing secret is not configured");
  const payload = `${Math.floor(now / 1000) + ACCESS_SECONDS}.${randomUUID()}`;
  return `${payload}.${createHmac("sha256", secret).update(payload).digest("hex")}`;
}
export function verifyWorkbookToken(token: string | undefined, secret: string, now = Date.now()) {
  if (!token || secret.length < 32) return false;
  const parts = token.split(".");
  if (parts.length !== 3 || !/^\d{10}$/.test(parts[0]) || !/^[a-f0-9-]{36}$/.test(parts[1]) || !/^[a-f0-9]{64}$/.test(parts[2])) return false;
  const remaining = Number(parts[0]) - Math.floor(now / 1000);
  if (remaining <= 0 || remaining > ACCESS_SECONDS) return false;
  const expected = createHmac("sha256", secret).update(`${parts[0]}.${parts[1]}`).digest();
  return timingSafeEqual(Buffer.from(parts[2], "hex"), expected);
}
