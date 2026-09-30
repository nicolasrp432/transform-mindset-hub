import Link from "next/link";
const services = [
  {
    title: "Sesiones 1:1",
    description:
      "Un espacio privado para explorar tus bloqueos, tus patrones y esas decisiones que sigues posponiendo.",
    detail: "ACOMPAÑAMIENTO PERSONAL",
    href: "/sesiones",
    action: "Conocer las sesiones",
  },
  {
    title: "Formaciones",
    description:
      "Procesos guiados de autoconocimiento. Explora los programas y la plataforma MITRA.",
    detail: "APRENDIZAJE A TU RITMO",
    href: "/formaciones",
    action: "Ver las formaciones",
  },
  {
    title: "Herramientas",
    description:
      "Una guía práctica, una agenda de reflexión, una historia. Pequeños espacios para volver a ti.",
    detail: "RECURSOS PARA EL DÍA A DÍA",
    href: "/herramientas",
    action: "Explorar los recursos",
  },
];
export default function ServiceGrid() {
  return (
    <section className="services-editorial" aria-labelledby="services-heading">
      <div className="editorial-wrap">
        <div className="services-heading">
          <p className="eyebrow">03 / CÓMO PUEDO ACOMPAÑARTE</p>
          <h2 id="services-heading">
            Distintas formas de empezar.
            <br />
            <em>Un mismo espacio para ti.</em>
          </h2>
        </div>
        <div>
          {services.map((service, i) => (
            <article className="service-row" key={service.title}>
              <span className="service-number">0{i + 1}</span>
              <div>
                <p className="eyebrow">{service.detail}</p>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <Link href={service.href} className="editorial-link">
                {service.action}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
