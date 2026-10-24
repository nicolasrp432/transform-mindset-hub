"use client";

import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./book-preview.module.css";

const defaultSamples = [
  { pages: ["page-006.webp", "page-007.webp"], title: "Antes de empezar, podéis elegir.", caption: "Música si os apetece, permiso para pasar y un ritmo que os resulte cómodo.", descriptions: ["Cómo conversar y escribir entre dos", "Acuerdos para conversar y cuidar lo que compartimos"] },
  { pages: ["page-040.webp", "page-041.webp"], title: "Una pregunta. Dos maneras de recordarla.", caption: "A la izquierda, la historia de mamá. A la derecha, lo que descubre quien escucha.", descriptions: ["Pregunta 09: ¿Qué versión de ti conocieron tus amistades de entonces que yo apenas conozco?", "Espacio de quien escucha para guardar una frase de mamá y seguir conversando"] },
];
type Direction = -1 | 1;
type Gesture = { x: number; y: number; width: number; direction: Direction; progress: number; id: number };

export type BookSample = { pages: string[]; title: string; caption: string; descriptions: string[] };
export default function BookPreview({ samples = defaultSamples, basePath = "/images/entre-tu-y-yo", aspectRatio = "340 / 240" }: { samples?: BookSample[]; basePath?: string; aspectRatio?: string }) {
  const helpId = useId();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction | null>(null);
  const progress = useMotionValue(0);
  const angle = useTransform(progress, value => (direction === -1 ? 180 : -180) * value);
  const shade = useTransform(progress, [0, .5, 1], [0, .24, 0]);
  const reduceMotion = useReducedMotion();
  const gesture = useRef<Gesture | null>(null);
  const busy = useRef(false);
  const animation = useRef<ReturnType<typeof animate> | null>(null);
  useEffect(() => () => animation.current?.stop(), []);

  function settle(next: Direction, complete: boolean) {
    busy.current = true;
    const finish = () => {
      if (complete) setIndex(current => current + next);
      setDirection(null);
      gesture.current = null;
      busy.current = false;
      progress.set(0);
    };
    if (reduceMotion) { finish(); return; }
    animation.current = animate(progress, complete ? 1 : 0, {
      duration: Math.max(.22, Math.abs((complete ? 1 : 0) - progress.get()) * .85),
      ease: [.22, .65, .25, 1], onComplete: finish,
    });
  }
  function turn(next: Direction) {
    if (busy.current || gesture.current || index + next < 0 || index + next >= samples.length) return;
    setDirection(next);
    settle(next, true);
  }
  function start(event: PointerEvent<HTMLDivElement>) {
    if (busy.current || gesture.current || !event.isPrimary || event.button !== 0) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const next: Direction = event.clientX < bounds.left + bounds.width / 2 ? -1 : 1;
    if (index + next < 0 || index + next >= samples.length) return;
    gesture.current = { x: event.clientX, y: event.clientY, width: bounds.width, direction: next, progress: 0, id: event.pointerId };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDirection(next);
  }
  function move(event: PointerEvent<HTMLDivElement>) {
    const drag = gesture.current;
    if (!drag || busy.current || drag.id !== event.pointerId) return;
    const dx = drag.x - event.clientX;
    if (Math.abs(event.clientY - drag.y) > Math.abs(dx) + 12) { cancel(); return; }
    drag.progress = Math.max(0, Math.min(1, dx * drag.direction / (drag.width * .75)));
    if (!reduceMotion) progress.set(drag.progress);
  }
  function end(event: PointerEvent<HTMLDivElement>) {
    const drag = gesture.current;
    if (!drag || busy.current || drag.id !== event.pointerId) return;
    settle(drag.direction, drag.progress > .18);
  }
  function cancel() {
    const drag = gesture.current;
    if (drag && !busy.current) settle(drag.direction, false);
  }
  const target = index + (direction ?? 0);
  function page(sample: number, side: number, decorative = false) {
    return <Image src={`${basePath}/${samples[sample].pages[side]}`} alt={decorative ? "" : samples[sample].descriptions[side]} fill unoptimized loading="eager" draggable={false} />;
  }
  return <div className={styles.preview}>
    <p className={styles.hint} id={helpId}>Desliza una hoja desde el borde hacia el otro lado, o utiliza las flechas.</p>
    <div className={styles.openBook} style={{ aspectRatio }} tabIndex={0} role="group" aria-label="Muestra interactiva del interior del libro" aria-describedby={helpId} onKeyDown={event => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); turn(event.key === "ArrowRight" ? 1 : -1); }
    }} onPointerDown={start} onPointerMove={move} onPointerUp={end} onPointerCancel={cancel} onLostPointerCapture={cancel}>
      <div className={`${styles.fixedPage} ${styles.leftPage}`}>{page(direction === -1 && !reduceMotion ? target : index, 0)}</div>
      <div className={`${styles.fixedPage} ${styles.rightPage}`}>{page(direction === 1 && !reduceMotion ? target : index, 1)}</div>
      <div className={styles.binding} aria-hidden="true" />
      {direction !== null && !reduceMotion && <motion.div className={`${styles.leaf} ${direction === -1 ? styles.backward : styles.forward}`} style={{ rotateY: angle }} aria-hidden="true">
        <div className={`${styles.face} ${styles.faceFront}`}>{page(index, direction === 1 ? 1 : 0, true)}<motion.span className={styles.shading} style={{ opacity: shade }} /></div>
        <div className={`${styles.face} ${styles.faceBack}`}>{page(target, direction === 1 ? 0 : 1, true)}<motion.span className={styles.shading} style={{ opacity: shade }} /></div>
      </motion.div>}
    </div>
    <div className={styles.controls}>
      <button type="button" onClick={() => turn(-1)} disabled={index === 0 || direction !== null} aria-label="Ver muestra anterior"><ChevronLeft /></button>
      <p aria-live="polite"><strong>{samples[index].title}</strong>{samples[index].caption}<small>Selección de páginas de la maqueta, no consecutivas · {index + 1} / {samples.length}</small></p>
      <button type="button" onClick={() => turn(1)} disabled={index === samples.length - 1 || direction !== null} aria-label="Ver muestra siguiente"><ChevronRight /></button>
    </div>
  </div>;
}
