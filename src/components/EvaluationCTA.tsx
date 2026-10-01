import Link from "next/link";
export default function EvaluationCTA() {
  return (
    <section className="evaluation-invite" aria-labelledby="invite-heading">
      <div className="editorial-wrap">
        <p className="eyebrow">UN PRIMER MOMENTO CONTIGO</p>
        <h2 id="invite-heading">
          ¿Y si empiezas
          <br />
          por <em>escucharte?</em>
        </h2>
        <div className="invite-bottom">
          <p>
            Relaciones, economía, cuerpo y cómo te sientes.
            <br />
            Un primer contacto con Ainara, desde tu momento actual.
          </p>
          <Link className="editorial-button" href="/evaluacion">
            Preparar mi primer contacto
          </Link>
          <span>GRATUITA · SIN PRISA</span>
        </div>
      </div>
    </section>
  );
}
