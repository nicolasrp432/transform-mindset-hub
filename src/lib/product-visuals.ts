/** Real artwork exported from the final print PDFs. No paid PDF is published. */
export const BOOK_VISUALS = {
  free: { title: "De la pausa al primer paso", front: "/images/free-workbook/cover.webp", back: "/images/free-workbook/back.webp", ratio: "420 / 595", color: "#3d4a35", label: "CUADERNO GRATUITO · 10 PÁGINAS" },
  guide: { title: "Guía integral de transformación", front: "/images/products/guide-front.webp", back: "/images/products/guide-back.webp", ratio: "396 / 612", color: "#697554", label: "GUÍA · AINARA UNAMUNZAGA" },
  princess: { title: "La Princesa que Perdió su Corona", front: "/images/products/princess-front.webp", back: "/images/products/princess-back.webp", ratio: "360 / 576", color: "#293c30", label: "UN CUENTO PARA VOLVER A TI" },
  agenda: { title: "Agenda de reflexiones 2027 · Tomo 1", front: "/images/products/agenda-front.webp", back: "/images/products/agenda-back.webp", ratio: "595 / 842", color: "#233e30", label: "2027 · ENERO — MARZO", wire: true },
  memory: { title: "Entre tú y yo · Mamá, quiero conocerte", front: "/images/entre-tu-y-yo/cover.webp", back: "/images/entre-tu-y-yo/back.webp", ratio: "170 / 240", color: "#40533e", label: "MAMÁ, QUIERO CONOCERTE" },
} as const;
export type BookVisualKey = keyof typeof BOOK_VISUALS;
