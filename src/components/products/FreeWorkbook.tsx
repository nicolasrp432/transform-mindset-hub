"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Download } from "lucide-react";
import { FloatingInput } from "@/components/ui/FloatingInput";
import { LeadMagnetSchema, type LeadMagnetInput } from "@/lib/validations";
import { FREE_WORKBOOK } from "@/lib/free-workbook";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";
import { submitLeadMagnet } from "@/app/actions/lead";
import BookShowcase from "./BookShowcase";

export default function FreeWorkbook() {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, setError, clearErrors, formState: { errors, isSubmitting } } = useForm<LeadMagnetInput>({
    resolver: zodResolver(LeadMagnetSchema),
    defaultValues: { name: "", email: "", privacyAccepted: false, marketingConsent: false, website: "" },
  });
  async function download(url: string) {
    setDownloading(true); setDownloadError(false);
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok || !response.headers.get("content-type")?.includes("application/pdf")) throw new Error("download_failed");
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl; a.download = FREE_WORKBOOK.filename;
      document.body.appendChild(a); a.click(); a.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 30000);
    } catch { setDownloadError(true); }
    finally { setDownloading(false); }
  }
  const onSubmit = async (data: LeadMagnetInput) => {
    clearErrors("root");
    try {
      const result = await submitLeadMagnet(data);
      if (!result.success) { setError("root", { message: result.error }); return; }
      setDownloadUrl(result.downloadUrl);
      window.requestAnimationFrame(() => successRef.current?.focus());
      await download(result.downloadUrl);
    } catch { setError("root", { message: "No hemos podido confirmar la solicitud. Revisa la conexión e inténtalo de nuevo." }); }
  };
  return <section id="guia-gratuita" className="free-guide">
    <div className="editorial-wrap free-guide-grid">
      <div>
        <p className="eyebrow">UN PRIMER PASO / CUADERNO GRATUITO</p>
        <h2>Haz una pausa.<br /><em>Elige por dónde empezar.</em></h2>
        <p>Tres ejercicios para ordenar una situación, reconocer qué puedes cuidar y elegir una acción pequeña. Después, un plan de siete días para probarla a tu ritmo.</p>
        <div className="max-w-sm mt-8"><BookShowcase product="free" compact /></div>
        <span className="free-guide-note">10 PÁGINAS · PDF A5 PARA IMPRIMIR · SIN COMPRA</span>
        <p className="mt-4 text-sm">Tus respuestas son para ti: no se recogen en la web.</p>
      </div>
      <div className="free-guide-form">
        {!downloadUrl ? <>
          <h3>{FREE_WORKBOOK.title}.</h3>
          <p>Déjanos tu nombre y correo. Tras confirmar el registro, el cuaderno se descargará aquí mismo.</p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FloatingInput label="Tu nombre" autoComplete="given-name" {...register("name")} error={errors.name?.message} />
            <FloatingInput label="Tu correo electrónico" type="email" autoComplete="email" {...register("email")} error={errors.email?.message} />
            <div className="hidden" aria-hidden="true"><label>Deja este campo vacío<input tabIndex={-1} autoComplete="off" {...register("website")} /></label></div>
            <label className="flex items-start gap-3 text-sm leading-relaxed my-5">
              <input type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-[#3d4a35]" {...register("privacyAccepted")} aria-invalid={!!errors.privacyAccepted} aria-describedby={errors.privacyAccepted ? "workbook-privacy-error" : undefined} />
              <span>{FREE_WORKBOOK.privacyText} <Link href="/privacidad-recursos" className="underline">Leer información de privacidad</Link>.</span>
            </label>
            {errors.privacyAccepted && <p id="workbook-privacy-error" role="alert" className="submission-error">{errors.privacyAccepted.message}</p>}
            <label className="flex items-start gap-3 text-sm leading-relaxed my-5">
              <input type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-[#3d4a35]" {...register("marketingConsent")} />
              <span>{FREE_WORKBOOK.marketingText}</span>
            </label>
            <p className="text-xs leading-relaxed my-4">Puedes descargarlo sin aceptar correos de seguimiento. Responsable: Ainara Unamunzaga. Contacto y bajas: {CONTACT_LINKS.email}.</p>
            {errors.root && <div role="alert" className="submission-error"><p>{errors.root.message}</p><a href={`mailto:${CONTACT_LINKS.email}?subject=Solicitud%20del%20cuaderno%20gratuito`} className="underline">Solicitar ayuda por correo</a></div>}
            <button className="editorial-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Confirmando tu solicitud…" : "Descargar mi cuaderno gratuito"}</button>
          </form>
          <p className="free-guide-help">No se realiza ningún cobro. La descarga no te suscribe automáticamente a novedades.</p>
        </> : <div className="guide-success" ref={successRef} tabIndex={-1}>
          <div role="status"><CheckCircle2 size={36} /><h3>Tu primer paso empieza aquí.</h3><p>Tu solicitud se ha guardado. Hemos preparado la descarga; si no aparece, utiliza el botón.</p></div>
          <button className="editorial-button" onClick={() => download(downloadUrl)} disabled={downloading}><Download size={18} />{downloading ? "Preparando PDF…" : "Descargar el cuaderno"}</button>
          {downloadError && <div role="alert" className="submission-error"><p>No hemos podido completar la descarga. Puedes reintentarlo. El acceso dura una hora; si ha caducado, solicita de nuevo el cuaderno.</p><a href="/herramientas#guia-gratuita" className="underline">Volver al formulario</a></div>}
          <p className="mt-6 text-sm">Empieza con una sola situación. Cuando quieras continuar, la última página te ayuda a elegir el siguiente paso.</p>
          <Link href="/evaluacion" className="editorial-link mt-4">Quiero conocer el acompañamiento →</Link>
        </div>}
      </div>
    </div>
  </section>;
}
