import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="editorial-hero" aria-labelledby="hero-heading">
      <div className="editorial-wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AINARA UNAMUNZAGA · COACH IE + PNL</p>
          <h1 id="hero-heading">
            Menos ruido.
            <br />
            Más <em>tú.</em>
          </h1>
          <p className="hero-lead">
            Un espacio para escucharte, entender lo que te pasa y volver a
            decidir desde la claridad.
          </p>
          <div className="hero-actions">
            <Link className="editorial-button" href="/evaluacion">
              Empieza por escucharte
            </Link>
            <a className="editorial-link" href="#conoce-a-ainara">
              Conoce a Ainara
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <p>
              No tienes que tenerlo todo claro
              <br />
              para empezar a hablar.
            </p>
          </div>
        </div>
        <figure className="hero-portrait">
          <Image
            src="/ainara-image.jpg"
            alt="Ainara sonriendo en su espacio de trabajo"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 46vw"
          />
          <figcaption>
            <span>ESCUCHA. PERSPECTIVA. CLARIDAD.</span>
            <p>
              Vamos a empezar
              <br />
              por lo que <em>sientes.</em>
            </p>
          </figcaption>
          <span className="portrait-index" aria-hidden="true">
            01 / UN ESPACIO PARA TI
          </span>
        </figure>
      </div>
      <div className="expertise-strip editorial-wrap">
        <span>Inteligencia emocional</span>
        <span>Programación neurolingüística</span>
        <span>Acompañamiento personal</span>
        <a href="#tu-punto-de-partida">Encuentra tu punto de partida</a>
      </div>
    </section>
  );
}
