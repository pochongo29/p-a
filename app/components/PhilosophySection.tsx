import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   CHEF'S PHILOSOPHY SECTION
   New section: editorial-style storytelling moment.
   Full-width cinematic image with overlaid text,
   giving depth to the brand narrative.
   ═══════════════════════════════════════════════ */

export function PhilosophySection() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Full-bleed image background */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.chef}
            alt="Cocina de PUA Brasa y Vino"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-2xl observe-fade">
            {/* Decorative quote mark */}
            <span className="font-serif text-7xl md:text-8xl text-gold-500/20 leading-none block -mb-8 md:-mb-10">
              &ldquo;
            </span>

            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream-100 leading-snug mb-8 italic">
              La brasa no miente. Revela la verdad de cada ingrediente,
              lo eleva o lo delata. Nuestro trabajo es honrar ese fuego.
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gold-500/60" />
              <div>
                <p className="text-gold-400 text-sm font-medium tracking-wide">
                  Filosofia de PUA
                </p>
                <p className="text-cream-200/40 text-xs tracking-widest uppercase font-light mt-1">
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
