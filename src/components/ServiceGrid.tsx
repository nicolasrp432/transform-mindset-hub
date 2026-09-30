import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import InteractiveSurface from "@/components/ui/InteractiveSurface";
const services = [
 { title: "Sesiones 1:1", detail: "UNA CONVERSACIÓN CONTIGO", description: "Un espacio privado para explorar tus bloqueos, tus patrones y esas decisiones que sigues posponiendo.", href: "/sesiones", action: "Conocer las sesiones", image: "/images/ainara-seated.webp", alt: "Ainara en su espacio de trabajo" },
 { title: "Formaciones", detail: "APRENDE A TU RITMO", description: "Procesos guiados de autoconocimiento. Explora los programas y la plataforma MITRA.", href: "/formaciones", action: "Ver las formaciones" },
 { title: "Herramientas", detail: "PEQUEÑOS ESPACIOS PARA TI", description: "Una guía práctica, una agenda de reflexión, una historia. Recursos para llevar contigo.", href: "/herramientas", action: "Explorar los recursos", image: "/images/guide-mockup.webp", alt: "Guía práctica de Ainara" },
];
export default function ServiceGrid() {
 return <section className="services-editorial" aria-labelledby="services-heading"><div className="editorial-wrap"><div className="services-heading"><p className="eyebrow">03 / CÓMO PUEDO ACOMPAÑARTE</p><h2 id="services-heading">Distintas formas de empezar.<br /><em>Un mismo espacio para ti.</em></h2></div>
  <div className="service-bento">{services.map((service, i) => <article className="service-card" key={service.title}>
   <InteractiveSurface className={`service-card-visual service-visual-${i}`}>
    {service.image ? <Image src={service.image} alt={service.alt!} fill sizes="(max-width: 760px) 100vw, 33vw" /> : <div className="mitra-visual" aria-label="MITRA, plataforma de formaciones"><span className="radical-symbol" aria-hidden="true">√</span><strong>MITRA</strong><span>Desde la raíz.</span><div className="mitra-path"><span>Observar</span><span>Comprender</span><span>Explorar</span></div></div>}
    <span className="service-card-index">0{i + 1}</span>
   </InteractiveSurface><div className="service-card-copy"><p className="eyebrow">{service.detail}</p><h3>{service.title}</h3><p>{service.description}</p><Link className="editorial-link" href={service.href}>{service.action}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
  </article>)}</div>
 </div></section>;
}
