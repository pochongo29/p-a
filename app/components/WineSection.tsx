import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   WINE EXPERIENCE SECTION — Michelin Edition
   Intimate, dramatic, editorial.
   Much larger heading, more breathing room,
   wine-toned accents for atmosphere.
   ═══════════════════════════════════════════════ */

const WINE_CATEGORIES = [
  "Tintos Reserva",
  "Blancos Premium",
  "Rosados",
  "Espumosos",
  "Destilados",
];

export function WineSection() {
  return (
    <section className="relative py-32 md:py-48 bg-brand-black overflow-hidden">
      {/* Subtle burgundy atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,32,53,0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Wine image — cinematic treatment */}
          <div className="observe-fade relative lg:col-span-5">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
              <Image
                src={IMAGES.wine}
                alt="Selección de vinos en PÚA Brasa y Vino"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-brand-black/10" />
              {/* Wine-toned overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-wine-900/8 via-transparent to-transparent" />
            </div>
            {/* Refined corner accent */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 border-b border-r border-gold-500/10" />
            {/* Small floating detail */}
            <div className="absolute top-8 -left-4 md:-left-8">
              <span className="text-[9px] tracking-widest-2xl text-gold-500/25 uppercase font-extralight [writing-mode:vertical-lr]">
                La Cava
              </span>
            </div>
          </div>

          {/* Wine narrative — much larger heading */}
          <div className="observe-fade observe-fade-delay-1 lg:col-span-7 lg:pl-8 lg:pt-8">
            <span className="text-gold-500/50 text-[10px] tracking-widest-3xl uppercase font-extralight block mb-8">
              La Cava
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-cream-100 font-light leading-none mb-12">
              Vinos que
              <br />
              <span className="text-gold-400/80 italic">cuentan historias</span>
            </h2>

            <div className="h-px w-16 bg-gold-500/20 mb-10" />

            <div className="space-y-7 text-cream-300/40 font-extralight leading-[1.9] text-[15px] md:text-base max-w-lg">
              <p>
                Nuestra cava reúne más de cien etiquetas seleccionadas de las
                regiones vinícolas más prestigiosas del mundo. Desde tintos
                robustos que abrazan nuestros cortes, hasta blancos frescos que
                elevan los sabores del mar.
              </p>
              <p>
                Nuestro sommelier está siempre disponible para guiarte en un
                maridaje que transforme cada bocado en un momento extraordinario.
              </p>
            </div>

            {/* Wine categories — more refined tags */}
            <div className="flex flex-wrap gap-3 mt-14">
              {WINE_CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="px-5 py-2.5 border border-white/[0.04] text-cream-200/30 text-[10px] tracking-widest-xl uppercase font-extralight hover:border-gold-500/20 hover:text-gold-400/60 transition-all duration-700 cursor-default"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
