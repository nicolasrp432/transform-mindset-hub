"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronLeft, Mail, Music2, RotateCcw } from "lucide-react";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";
import { BOOK_ENCOUNTERS, MEMORY_BOOK } from "@/lib/memory-book";
import styles from "./memory-book.module.css";
import BookPreview from "./BookPreview";

const message = "Hola Ainara, me interesa el libro Entre tú y yo · Mamá, quiero conocerte. ¿Podrías avisarme por aquí cuando confirméis el precio y la fecha de lanzamiento? Gracias.";
const whatsapp = `https://wa.me/${CONTACT_LINKS.whatsappNumber}?text=${encodeURIComponent(message)}`;
const email = `mailto:${CONTACT_LINKS.email}?subject=${encodeURIComponent("Me interesa Entre tú y yo")}&body=${encodeURIComponent(message)}`;
const faqs = [
  ["¿Ya se puede comprar?", "Todavía no. Estamos preparando la edición física. Puedes escribir a Ainara para pedir información del lanzamiento. El precio, los acabados y la fecha de entrega se comunicarán antes de abrir los pedidos. Ahora no se realiza ningún cobro ni reserva."],
  ["¿Para quién está pensado?", "Para una madre y su hijo o hija adulta que quieran compartir un rato y conocerse un poco más. No hace falta escribir bien ni tener una historia extraordinaria. Podéis adaptar las palabras con las que os nombráis."],
  ["¿Tenemos que completarlo todo?", "No. Podéis empezar por cualquier encuentro, saltar una pregunta o dejar una página en blanco. Tampoco hay un tiempo obligatorio para terminarlo."],
  ["¿Y si una pregunta resulta incómoda?", "Podéis pasar a otra o parar. Nadie tiene que contar algo que prefiera guardar. Este libro invita a conversar; no es terapia ni promete reparar una relación."],
  ["¿Se puede usar a distancia?", "Sí. Podéis conversar por teléfono o videollamada y acordar quién escribe. La propuesta original está pensada para compartir el libro físico, sin necesidad de una pantalla."],
  ["¿Necesito MITRA o alguna suscripción?", "No. Es un libro independiente. No requiere acceso a MITRA, una aplicación ni una suscripción."],
];

export default function MemoryBookLanding() {
  const [back, setBack] = useState(false);
  const [encounter, setEncounter] = useState(1);
  const selected = BOOK_ENCOUNTERS[encounter];
  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="book-title">
      <div className={styles.heroCopy}>
        <Link href="/herramientas" className={styles.backLink}><ChevronLeft size={14} /> Herramientas de Ainara</Link>
        <p className={styles.eyebrow}>UN LIBRO PARA CONVERSAR ENTRE DOS</p>
        <h1 id="book-title">Conoces a tu mamá.<br />Todavía puedes<br /><em>descubrir a la persona.</em></h1>
        <p className={styles.intro}>Su primera casa. La música que bailaba. Lo que aprendió mientras te veía crecer. Hay historias que empiezan con una pregunta que nunca hiciste.</p>
        <div className={styles.actions}><a className={styles.primary} href="#lanzamiento">Me interesa el libro <ArrowUpRight size={18} /></a><a className={styles.textLink} href="#por-dentro">Ver por dentro <ArrowDown size={16} /></a></div>
        <p className={styles.fine}>Edición física en preparación · Sin cobros ni reservas</p>
      </div>
      <div className={styles.heroVisual}>
        <span className={styles.visualWord} aria-hidden="true">nosotras</span>
        <div className={styles.orbit} aria-hidden="true" />
        <div className={styles.bookStage}>
          <button className={`${styles.book} ${back ? styles.bookBack : ""}`} onClick={() => setBack(!back)} aria-label={back ? "Ver portada del libro" : "Girar libro para ver contraportada"} aria-pressed={back}>
            <span className={styles.front}><Image src="/images/entre-tu-y-yo/cover.webp" alt="Entre tú y yo · Mamá, quiero conocerte. Portada ilustrada de Ainara Coach." fill sizes="(max-width: 700px) 65vw, 340px" priority /></span>
            <span className={styles.bookSpine} aria-hidden="true">AINARA · ENTRE TÚ Y YO</span>
            <span className={styles.bookPages} aria-hidden="true" />
            <span className={styles.rear}><Image src="/images/entre-tu-y-yo/back.webp" alt="Contraportada del libro Entre tú y yo" fill sizes="340px" /></span>
          </button>
        </div>
        <button className={styles.rotate} onClick={() => setBack(!back)}><RotateCcw size={14} /> {back ? "Volver a la portada" : "Gira el libro"}</button>
        <p className={styles.visualCaption}>Visualización digital · Acabados por confirmar</p>
      </div>
    </section>
    <div className={styles.facts} aria-label="Contenido del libro"><span><strong>48</strong> preguntas para descubrir</span><span><strong>8</strong> encuentros a vuestro ritmo</span><span><strong>2</strong> voces en el mismo libro</span></div>

    <section className={styles.manifesto}>
      <p className={styles.eyebrow}>ENTRE TÚ Y YO / MAMÁ, QUIERO CONOCERTE</p>
      <h2>No es un libro para<br /><em>que ella lo rellene sola.</em></h2>
      <div className={styles.manifestoText}><p>Es una invitación a sentarte con ella. Escuchar una historia y dejar también algo de ti en la página de al lado.</p><p>Su recuerdo. Tu sorpresa. Una frase con sus propias palabras. Cuando volváis a abrirlo, estarán las dos voces.</p></div>
    </section>

    <section id="por-dentro" className={styles.inside} aria-labelledby="inside-heading">
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>01 / ASÍ SE VE POR DENTRO</p><h2 id="inside-heading">Su historia.<br /><em>Tu manera de escucharla.</em></h2></div><p>No tienes que improvisar una entrevista. Cada pregunta trae espacio para escribir, escuchar y seguir conversando.</p></div>
      <BookPreview />
    </section>

    <section className={styles.questions} aria-labelledby="questions-heading">
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>02 / PRUEBA UNA PREGUNTA</p><h2 id="questions-heading">Hay mucho de ella<br /><em>que aún no conoces.</em></h2></div><p>Ocho encuentros. No hace falta seguir un orden. Elige uno y encuentra una forma de empezar.</p></div>
      <div className={styles.questionGrid}><div className={styles.encounters} aria-label="Elige un encuentro">{BOOK_ENCOUNTERS.map((item, i) => <button key={item.title} aria-pressed={encounter === i} onClick={() => setEncounter(i)}><span>0{i + 1}</span>{item.title}<ArrowUpRight size={16} /></button>)}</div>
        <div className={styles.questionCard} aria-live="polite"><p className={styles.eyebrow}>ENCUENTRO 0{encounter + 1}</p><span className={styles.quoteMark} aria-hidden="true">“</span><blockquote>{selected.question}</blockquote><p>{selected.note}</p><span className={styles.questionFoot}>No busques la respuesta perfecta. Escucha la suya.</span></div>
      </div>
    </section>

    <section className={styles.ritual} aria-labelledby="ritual-heading"><div><Music2 size={26} strokeWidth={1} /><p className={styles.eyebrow}>03 / UN RATO QUE SEA VUESTRO</p><h2 id="ritual-heading">Una canción.<br />Dos sillas.<br /><em>Por dónde empezar.</em></h2><p>Si os apetece, que ella elija una canción. Bajad el volumen cuando empecéis a hablar. El silencio también está bien.</p></div><ol>{[
      ["Haced un hueco", "Dejad el móvil a un lado. Elegid un momento sin prisas; no hay una duración obligatoria."],
      ["Abrid una conversación", "Leed una pregunta. Podéis seguir una historia inesperada o pasar a otra página."],
      ["Guardad algo de ese rato", "Escribid un recuerdo o una frase. Acordad qué queréis dejar escrito y quién podrá leerlo."],
    ].map(([title, text], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>

    <section className={styles.details}><div><p className={styles.eyebrow}>UN REGALO QUE SE COMPARTE</p><h2>El regalo es el libro.<br /><em>Y el rato que le propones.</em></h2><p>Para una madre y su hijo o hija adulta. Para un cumpleaños, una visita, un domingo cualquiera. No hace falta esperar a una fecha especial.</p><ul>{["48 preguntas repartidas en 8 encuentros", "128 páginas de interior: historias, escucha y recuerdos", "Espacio para cartas y planes por compartir", "Sin aplicación ni suscripción a MITRA"].map(text => <li key={text}><Check size={17} />{text}</li>)}</ul></div><div className={styles.dedication}><p className={styles.eyebrow}>UNA DEDICATORIA POSIBLE</p><blockquote>“Mamá, este libro viene con una propuesta: que lo empecemos juntas.”</blockquote><p>Puedes cambiar «juntas» por «juntos».<br />Lo importante es que suene a ti.</p><BookOpen size={36} strokeWidth={1} /></div></section>

    <section className={styles.faq} aria-labelledby="faq-heading"><div><p className={styles.eyebrow}>ANTES DE EMPEZAR</p><h2 id="faq-heading">Quizá te<br /><em>lo estás preguntando.</em></h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>

    <section id="lanzamiento" className={styles.launch} aria-labelledby="launch-heading"><span className={styles.launchWord} aria-hidden="true">conocerte</span><p className={styles.eyebrow}>{MEMORY_BOOK.status.toUpperCase()} / EDICIÓN FÍSICA</p><h2 id="launch-heading">La primera pregunta<br /><em>puede ser el principio.</em></h2><p>Estamos preparando el lanzamiento de <strong>Entre tú y yo</strong>. Escribe a Ainara para pedir que te avise cuando estén confirmados el precio y la disponibilidad.</p><div className={styles.actions}><a className={styles.primaryLight} href={whatsapp} target="_blank" rel="noopener noreferrer">Pedir aviso por WhatsApp <ArrowUpRight size={18} /></a><a className={styles.email} href={email}><Mail size={16} /> Prefiero escribir por correo</a></div><p className={styles.launchNote}>Se abrirá un mensaje que tú decides enviar. No hay alta automática, compra ni reserva. Puedes pedir que no te contacten de nuevo.</p><Link href="/herramientas" className={styles.allResources}>Ver otras herramientas de Ainara <ArrowRight size={16} /></Link></section>
    <div className={styles.mobileCta}><span>Entre tú y yo<small>Próximamente</small></span><a href="#lanzamiento">Me interesa <ArrowUpRight size={16} /></a></div>
  </main>;
}
