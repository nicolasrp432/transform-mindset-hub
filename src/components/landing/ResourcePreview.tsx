import Image from "next/image";
export default function ResourcePreview() {
  return <figure className="agenda-product-scene"><Image src="/images/reflection-agenda.webp" alt="Composición ilustrativa con cuaderno abierto, bolígrafo y tablet para la agenda de reflexión" width={1122} height={1402} priority sizes="(max-width: 760px) calc(100vw - 64px), (max-width: 1100px) 90vw, 500px" /><figcaption>Agenda de Reflexión Diaria · visual ilustrativo</figcaption></figure>;
}
