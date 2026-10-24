import Image from "next/image";
import { Play, BookOpen, Sparkles } from "lucide-react";
import styles from "./product-showcase.module.css";

export default function ProgramShowcase({ title, detail, digital = false }: { title: string; detail: string; digital?: boolean }) {
  return <figure className={`${styles.scene} ${styles.programScene}`}>
    <span className={styles.edition}>{digital ? "TU ESPACIO DE ESCRITURA" : "AINARA · FORMACIÓN ONLINE"}</span>
    <div className={styles.deviceStage}>
      <div className={styles.device}>
        <div className={styles.deviceHeader}><span>{digital ? "REFLEXIÓN DIARIA" : "MITRA"}</span><span aria-hidden="true">● ● ●</span></div>
        <div className={styles.screenPhoto}><Image src={digital ? "/images/reflection-agenda.webp" : "/images/ainara-seated.webp"} alt={digital ? "Composición ilustrativa de un espacio de escritura" : "Ainara, creadora de las formaciones"} fill sizes="(max-width:760px) 75vw, 400px" priority /><span className={styles.play} aria-hidden="true">{digital ? <BookOpen /> : <Play fill="currentColor" />}</span></div>
        <div className={styles.screenCopy}><span>{digital ? "UN MOMENTO PARA TI" : "DESDE LA RAÍZ"}</span><strong>{title}</strong><p>{detail}</p></div>
      </div>
      <div className={styles.floatingNote}><Sparkles size={18} aria-hidden="true" /><span>Tu proceso.<br /><strong>A tu ritmo.</strong></span></div>
    </div>
    <figcaption className={styles.caption}><small>Composición editorial · No es una captura de la plataforma</small></figcaption>
  </figure>;
}
