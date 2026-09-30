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
            Cinco preguntas para observar cómo estás.
            <br />
            Una pausa que puedes hacer ahora.
          </p>
          <Link className="editorial-button" href="/evaluacion">
            Hacer mi autoevaluación
          </Link>
          <span>GRATUITA · SIN PRISA</span>
        </div>
      </div>
    </section>
  );
}
