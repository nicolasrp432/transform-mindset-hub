import Image from "next/image";
import AmbientOrbit from "@/components/ui/AmbientOrbit";
export default function AinaraPortrait({ variant = "hero", priority = false }: { variant?: "hero" | "contact"; priority?: boolean }) {
  return <div className={`hero-portrait-composition portrait-scene--${variant}`}>
    <AmbientOrbit variant="portrait" />
    <Image src="/images/ainara-hero-cutout.webp" alt="Ainara sonriendo" width={1218} height={1291} priority={priority}
      sizes={variant === "hero" ? "(max-width: 760px) 85vw, (max-width: 1100px) 47vw, 620px" : "(max-width: 760px) 100px, 340px"} className="hero-cutout-image" />
  </div>;
}
