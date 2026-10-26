import Link from "next/link";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";
import { FREE_WORKBOOK } from "@/lib/free-workbook";
export const metadata = { title: "Privacidad del cuaderno gratuito" };
export default function ResourcePrivacyPage() {
  return <main className="container-editorial py-24 max-w-3xl space-y-8">
    <p className="eyebrow">CUADERNO GRATUITO / PRIVACIDAD</p><h1 className="text-5xl">Tus datos y tu elección.</h1>
    <section className="space-y-3"><h2 className="text-3xl">Quién gestiona tu solicitud</h2><p>Ainara Unamunzaga (Ainara Coach). Puedes contactar en <a className="underline" href={`mailto:${CONTACT_LINKS.email}`}>{CONTACT_LINKS.email}</a>.</p></section>
    <section className="space-y-3"><h2 className="text-3xl">Qué se recoge y para qué</h2><p>Tu nombre, correo, recurso solicitado, origen y fecha de la solicitud, y el texto y la elección de los permisos del formulario. Se utilizan para gestionar el acceso al cuaderno y resolver incidencias, con tu consentimiento. Las respuestas que escribas en el PDF no se envían a la web.</p><p>El permiso opcional de seguimiento es independiente: solo si lo marcas podremos utilizar tu correo para enviarte ejercicios, orientación y novedades sobre productos y servicios de Ainara. No marcarlo no impide la descarga.</p></section>
    <section className="space-y-3"><h2 className="text-3xl">Conservación y acceso</h2><p>Los datos se conservan durante la gestión de la solicitud y, si autorizas seguimiento, mientras mantengas ese permiso. Podrá mantenerse la evidencia mínima necesaria para atender responsabilidades y respetar las bajas. El equipo debe revisar periódicamente los registros y retirar los que ya no sean necesarios.</p><p>La web utiliza Vercel para su alojamiento y Neon para guardar la solicitud. No se publica una lista de contactos ni se venden tus datos. El acceso administrativo queda limitado al equipo autorizado.</p></section>
    <section className="space-y-3"><h2 className="text-3xl">Tus derechos y cómo darte de baja</h2><p>Puedes retirar el consentimiento, pedir acceso, rectificación, supresión, limitación, oposición o portabilidad escribiendo al correo anterior. Para dejar de recibir seguimiento, escribe «Baja». Retirar el permiso no afecta al uso previo realizado con él. También puedes reclamar ante la <a href="https://www.aepd.es" className="underline" target="_blank" rel="noopener noreferrer">Agencia Española de Protección de Datos</a>.</p></section>
    <section className="space-y-3"><h2 className="text-3xl">Descarga y cookie necesaria</h2><p>Después de registrar la solicitud, una cookie técnica permite descargar el cuaderno durante una hora. No contiene tu nombre ni tu correo y no se usa para publicidad. Si caduca, puedes solicitar de nuevo el recurso.</p></section>
    <p className="text-xs text-text-muted">Versión del formulario: {FREE_WORKBOOK.consentVersion}.</p>
    <Link href="/herramientas#guia-gratuita" className="editorial-link">Volver al cuaderno gratuito →</Link>
  </main>;
}
