import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlackFridayAnnouncement() {
  return (
    <section
      aria-label="Oferta especial Black Friday"
      className="bg-[#141D17] text-[#F6F2EA] border-y border-white/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="inline-flex items-center rounded-sm bg-[#D39478] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#111914] shrink-0">
            Black Friday · 27–30 nov
          </span>
          <p className="text-sm sm:text-[16px] text-[#DDE4DE]">
            <strong className="font-semibold text-white">
              Pack{" "}
              <em className="font-serif italic text-[#E2A58A] text-lg font-normal">
                «Empezar por dentro»
              </em>
            </strong>
            <span className="hidden lg:inline text-[#B4C3B9]">
              {" "}
              · Guía impresa + Agenda digital + Emulsión Energética (Mitra)
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-white/55 line-through">159 €</span>
            <span className="font-serif text-3xl leading-none text-[#E2A58A] font-medium">
              89 €
            </span>
          </div>
          <Link
            href="/black-friday"
            className="inline-flex items-center gap-2 rounded-full bg-[#D39478] hover:bg-[#DF9F83] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#111914] transition-colors"
          >
            Ver la oferta
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
