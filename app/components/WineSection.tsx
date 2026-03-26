import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   WINE EXPERIENCE SECTION
   Horizontal split: wine imagery + narrative.
   Dark, intimate, sensorial feel.
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
    <section className="relative py-24 md:py-36 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Wine image */}
          <div className="observe-fade relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
              <Image
                src={IMAGES.wine}
                alt="Seleccion de vinos en PUA Brasa y Vino"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-brand-black/20" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b border-r border-gold-500/20" />
          </div>

          {/* Wine narrative */}
          <div className="observe-fade observe-fade-delay-1">
            <span className="text-gold-500 text-[11px] tracking-widest-2xl uppercase font-light">
              La Cava
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mt-4 mb-8 leading-tight">
              Vinos que
              <br />
              <span className="text-gold-400 italic">cuentan historias</span>
            </h2>
            <div className="space-y-6 text-cream-300/70 font-light leading-relaxed text-base md:text-lg">
              <p>
                Nuestra cava reune mas de cien etiquetas seleccionadas de las
                regiones vinicolas mas prestigiosas del mundo. Desde tintos
                robustos que abrazan nuestros cortes, hasta blancos frescos que
                elevan los sabores del mar.
              </p>
              <p>
                Nuestro sommelier esta siempre disponible para guiarte en un
                maridaje que transforme cada bocado en un momento extraordinario.
              </p>
            </div>

            {/* Wine categories */}
            <div className="flex flex-wrap gap-3 mt-10">
              {WINE_CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="px-5 py-2.5 border border-white/[0.08] text-cream-200/50 text-xs tracking-widest uppercase font-light hover:border-gold-500/40 hover:text-gold-400 transition-all duration-300 cursor-default"
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
