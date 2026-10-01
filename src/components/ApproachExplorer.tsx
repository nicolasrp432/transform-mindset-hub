"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AmbientOrbit from "@/components/ui/AmbientOrbit";
const steps = [
  { title: "Notar", label: "Lo que está pasando", text: "Haz una pausa. Observa qué pensamientos, sensaciones o situaciones se repiten en tu día.", question: "¿Qué está ocupando espacio en mí?" },
  { title: "Nombrar", label: "Poner palabras", text: "No necesitas explicarlo perfectamente. Puedes empezar por una emoción, una frase o algo que te cuesta decir.", question: "¿Cómo puedo expresar lo que siento?" },
  { title: "Elegir", label: "Un siguiente paso", text: "Explora qué necesitas ahora: una conversación, una práctica de reflexión o un espacio de aprendizaje.", question: "¿Qué pequeño paso puedo dar hoy?" },
];
export default function ApproachExplorer() {
  const [active, setActive] = useState(0); const reduced = useReducedMotion();
  return <section className="approach-explorer editorial-wrap" aria-labelledby="approach-heading">
    <div><p className="eyebrow">EL ENFOQUE / EMPIEZA EN LO COTIDIANO</p><h2 id="approach-heading">Entenderte también<br />puede empezar <em>aquí.</em></h2><p>Explora estas tres preguntas. Una invitación a observarte, sin respuestas correctas.</p><Link className="editorial-link" href="/evaluacion">Haz tu primera pausa <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
    <div className="approach-canvas"><AmbientOrbit />
      <div className="approach-tabs" role="tablist" aria-label="Explora el enfoque">{steps.map((step, i) => <button key={step.title} type="button" role="tab" id={`approach-tab-${i}`} aria-controls="approach-panel" aria-selected={active === i} onClick={() => setActive(i)} onKeyDown={(event) => { if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return; event.preventDefault(); const next = (i + (event.key === "ArrowRight" ? 1 : -1) + steps.length) % steps.length; setActive(next); document.getElementById(`approach-tab-${next}`)?.focus(); }} tabIndex={active === i ? 0 : -1}>{String(i + 1).padStart(2, "0")} {step.title}</button>)}</div>
      <motion.div id="approach-panel" role="tabpanel" aria-labelledby={`approach-tab-${active}`} key={active} initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="approach-answer"><p className="eyebrow">{steps[active].label}</p><h3>{steps[active].question}</h3><p>{steps[active].text}</p></motion.div>
    </div>
  </section>;
}
