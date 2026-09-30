import Link from "next/link";
import { ArrowUpRight, BookOpen, MessageCircle, PenLine } from "lucide-react";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";

export default function ProductJourney({ kind = "resource" }: { kind?: "resource" | "program" }) {
  const steps = kind === "program"
    ? [{ icon: BookOpen, title: "Explora el contenido", text: "Consulta las lecciones y los materiales antes de decidir." },
       { icon: PenLine, title: "Llévalo a tu día a día", text: "Avanza a tu ritmo y dedica un espacio a las prácticas del programa." },
       { icon: MessageCircle, title: "Pregunta a Ainara", text: "Resuelve tus dudas sobre el formato y el acceso antes de comprar." }]
    : [{ icon: BookOpen, title: "Lee a tu ritmo", text: "Busca un momento tranquilo para acercarte al contenido." },
       { icon: PenLine, title: "Hazlo tuyo", text: "Detente en una pregunta, toma notas y observa qué te resuena." },
       { icon: MessageCircle, title: "Abre una conversación", text: "Si quieres acompañamiento, puedes hablar con Ainara sobre las sesiones." }];
  return <section className="product-journey container-editorial" aria-label="Cómo acercarte a este recurso">
    <div className="journey-heading"><p className="eyebrow">DEL CONTENIDO A TU DÍA A DÍA</p><h2>Un espacio para ti.<br /><em>Una forma de empezar.</em></h2></div>
    <div className="journey-steps">{steps.map((step, i) => <article key={step.title}><span className="journey-number">0{i + 1}</span><step.icon size={24} aria-hidden="true" /><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    <Link className="editorial-link" href={CONTACT_LINKS.whatsappUrl} target="_blank" rel="noopener noreferrer">Tengo una pregunta <ArrowUpRight size={16} aria-hidden="true" /></Link>
  </section>;
}
