import Image from "next/image";
import { BookOpen, HeartHandshake, Layers } from "lucide-react";
import LandingHero from "@/components/landing/LandingHero";
import LandingSection from "@/components/landing/LandingSection";
import { PRODUCTS } from "@/lib/products";
import CheckoutButton from "@/components/CheckoutButton";
export default function Hero() {
  return <LandingSection className="relative overflow-hidden"><LandingHero category="program"
    badge="MITRA / RE-CONÉCTATE"
    title={<>Vuelve a escucharte.<br /><em>Reconecta contigo.</em></>}
    lead="Un programa guiado de seis semanas para explorar tu autocrítica, tu autoestima y tu seguridad interior, con el acompañamiento y los materiales de Ainara."
    trust={[{ icon: BookOpen, label: "6 semanas de contenido" }, { icon: Layers, label: "Materiales incluidos" }, { icon: HeartHandshake, label: "7 días de garantía" }]}
    actions={<><CheckoutButton productKey={PRODUCTS.RE_CONECTATE.key}>Empezar — {PRODUCTS.RE_CONECTATE.displayPrice}</CheckoutButton><a className="editorial-link" href="#contenido">Explorar el programa</a></>}
    visual={<div className="program-portrait"><Image src="/images/ainara-seated.webp" alt="Ainara, autora de Re-Conéctate" fill priority sizes="(max-width: 1024px) 100vw, 42vw" /><div className="program-photo-label"><span>RE-CONÉCTATE</span><strong>Tu proceso.<br />A tu ritmo.</strong><span>CON AINARA · EN MITRA</span></div></div>}
  /></LandingSection>;
}
