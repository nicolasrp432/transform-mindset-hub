import Image from "next/image";
import Link from "next/link";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";
const steps = [
  {
    title: "Escuchar y comprender",
    text: "Compartir lo que te preocupa, identificar tus patrones actuales y explorar qué quieres trabajar, sin juicios.",
  },
  {
    title: "Explorar otras perspectivas",
    text: "Herramientas de PNL y coaching para observar tu diálogo interno y construir nuevas formas de abordar tus decisiones.",
  },
  {
    title: "Llevarlo a tu día a día",
    text: "Traducir lo que has observado en pasos concretos, alineados con lo que necesitas y con tu propio ritmo.",
  },
];
export default function SesionesPage() {
  return (
    <main className="sessions-page">
      <section className="editorial-wrap sessions-hero">
        <div>
          <p className="eyebrow">SESIONES 1:1 / ACOMPAÑAMIENTO PERSONAL</p>
          <h1>
            Un espacio
            <br />
            para <em>ti.</em>
            <br />
            De verdad.
          </h1>
          <p className="hero-lead">
            No necesitas preparar un discurso ni tener todas las respuestas.
            Podemos empezar por lo que te pasa hoy.
          </p>
          <a className="editorial-button" href="#reserva">
            Reservar una conversación
          </a>
        </div>
        <figure className="sessions-photo">
          <Image
            src="/ainara-image.jpg"
            alt="Ainara en su espacio de acompañamiento"
            fill
            priority
            sizes="(max-width:760px) 100vw, 45vw"
          />
          <figcaption>
            UNA CONVERSACIÓN. SIN TENER QUE DEMOSTRAR NADA.
          </figcaption>
        </figure>
      </section>
      <section className="session-process">
        <div className="editorial-wrap">
          <p className="eyebrow">CÓMO TRABAJAMOS</p>
          <h2>
            Del ruido a<br />
            <em>un poco más de claridad.</em>
          </h2>
          <div className="session-steps">
            {steps.map((step, i) => (
              <article key={step.title}>
                <span>0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="reserva" className="session-booking">
        <div className="editorial-wrap booking-grid">
          <div>
            <p className="eyebrow">NUESTRA PRIMERA CONVERSACIÓN</p>
            <h2>
              Empezamos
              <br />
              <em>por escucharte.</em>
            </h2>
            <p>
              Elige un momento en la agenda de Ainara. Si tienes dudas sobre las
              sesiones, puedes escribirle primero.
            </p>
          </div>
          <div className="booking-panel">
            <h3>¿Hablamos?</h3>
            <p>
              Consulta los horarios disponibles y reserva en la agenda de
              Ainara.
            </p>
            <a
              className="editorial-button light"
              href={CONTACT_LINKS.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver disponibilidad en Calendly
            </a>
            <a
              className="editorial-link"
              href={CONTACT_LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Prefiero preguntar por WhatsApp
            </a>
            <Link href="/evaluacion" className="booking-evaluation">
              Antes quiero hacer la autoevaluación
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
