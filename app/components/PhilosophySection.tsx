import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   CHEF'S PHILOSOPHY SECTION — Michelin Edition
   Full-screen editorial quote treatment.
   The quote mark becomes a massive design element.
   Almost cinematic — thinks Noma or Geranium.
   ═══════════════════════════════════════════════ */

export function PhilosophySection() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Full-bleed image background */}
      <div className="relative min-h-[80vh] md:min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.chef}
            alt="Cocina de PÚA Brasa y Vino"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Deeper, richer overlay */}
          <div className="absolute inset-0 bg-brand-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/70 to-brand-black/40" />
          {/* Subtle wine tone bleed */}
          <div className="absolute inset-0 bg-gradient-to-t from-wine-900/10 via-transparent to-transparent" />
        </div>

        {/* Enormous decorative quote mark — full design element */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-12 pointer-events-none select-none overflow-hidden">
          <span className="font-serif text-[20rem] md:text-[30rem] lg:text-[40rem] text-gold-500/[0.03] leading-none block -ml-8 md:-ml-4">
            &ldquo;
          </span>
        </div>

        {/* Fine geometric accents */}
        <div className="absolute top-16 right-16 w-24 h-24 border-t border-r border-gold-500/8 hidden md:block" />
        <div className="absolute bottom-16 left-16 w-24 h-24 border-b border-l border-gold-500/8 hidden md:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 md:py-40">
          <div className="max-w-4xl observe-fade">
            {/* Small gold accent line */}
            <div className="h-px w-20 bg-gold-500/30 mb-12" />

            <blockquote className="heading-glow font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-cream-100 leading-[1.15] mb-14 italic font-light">
              La brasa no miente. Revela la verdad de cada ingrediente,
              lo eleva o lo delata. Nuestro trabajo es honrar ese fuego.
            </blockquote>

            <div className="flex items-center gap-6">
              <div className="h-px w-16 bg-gold-500/40" />
              <div>
                <p className="shimmer-gold text-sm font-light tracking-wider">
                  Filosofía de PÚA
                </p>
                <p className="text-cream-200/90 text-[10px] tracking-widest-2xl uppercase font-extralight mt-2">
                  Cocina de Autor &middot; Chilpancingo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
