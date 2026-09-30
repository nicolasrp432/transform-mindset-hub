import { PenLine } from "lucide-react";

/** An illustrative interface, never presented as an actual page of the paid PDF. */
export default function ResourcePreview() {
  return <div className="journal-preview">
    <div className="journal-spine" aria-hidden="true" />
    <div className="journal-page"><span className="eyebrow">UN MOMENTO PARA TI</span><PenLine size={26} aria-hidden="true" /><h3>Hoy me<br /><em>escucho.</em></h3>
      <p>¿Qué está ocupando espacio en mi mente?</p><div className="journal-lines" aria-hidden="true" />
      <p>¿Qué necesito hoy?</p><div className="journal-lines short" aria-hidden="true" />
      <span className="journal-footnote">Visual ilustrativo · no es una página del PDF</span>
    </div>
    <div className="journal-caption"><span>Agenda de Reflexión</span><span>PDF digital</span></div>
  </div>;
}
