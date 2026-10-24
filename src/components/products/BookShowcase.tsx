"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { RotateCw } from "lucide-react";
import { BOOK_VISUALS, type BookVisualKey } from "@/lib/product-visuals";
import styles from "./product-showcase.module.css";

export default function BookShowcase({ product, compact = false, priority = false }: { product: BookVisualKey; compact?: boolean; priority?: boolean }) {
  const [back, setBack] = useState(false);
  const book = BOOK_VISUALS[product];
  return <figure className={`${styles.scene} ${compact ? styles.compact : ""}`} style={{ "--book-color": book.color, "--book-ratio": book.ratio } as CSSProperties}>
    <span className={styles.edition}>{book.label}</span>
    <div className={styles.stage}>
      <div className={`${styles.book} ${back ? styles.turned : ""}`}>
        <div className={`${styles.face} ${styles.front}`} aria-hidden={back}>
          <Image src={book.front} alt={`Portada real de ${book.title}`} fill priority={priority} sizes={compact ? "(max-width: 760px) 60vw, 260px" : "(max-width: 760px) 65vw, 340px"} />
          {"wire" in book && <span className={styles.wire} aria-hidden="true" />}
        </div>
        <div className={`${styles.face} ${styles.back}`} aria-hidden={!back}><Image src={book.back} alt={`Contraportada de ${book.title}`} fill sizes="340px" /></div>
        <div className={styles.spine} aria-hidden="true"><span>AINARA</span></div>
        <div className={styles.pages} aria-hidden="true" />
      </div>
    </div>
    {!compact && <figcaption className={styles.caption}>
      <button type="button" onClick={() => setBack(value => !value)} aria-pressed={back} aria-label={`Ver ${back ? "portada" : "contraportada"} de ${book.title}`}><RotateCw size={16} aria-hidden="true" />{back ? "Ver portada" : "Girar el libro"}</button>
      <small>Portada real · Representación digital del formato</small>
    </figcaption>}
  </figure>;
}
