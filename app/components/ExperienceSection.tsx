import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   EXPERIENCE / CONCEPT SECTION
   Split layout: narrative left + atmospheric image right.
   Tells the brand story with refined copywriting.
   ═══════════════════════════════════════════════ */

export function ExperienceSection() {
  return (
    <section id="experiencia" className="relative py-24 md:py-36 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-28 observe-fade">
          <span className="text-gold-500 text-[11px] tracking-widest-2xl uppercase font-light">
            Nuestra Esencia
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-100 mt-4 mb-6">
            La Experiencia PUA
          </h2>
          <div className="h-px w-20 bg-gold-500/60 mx-auto" />
        </div>

        {/* Split content: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Narrative */}
          <div className="observe-fade order-2 lg:order-1">
            <p className="text-cream-200/60 text-sm tracking-widest-xl uppercase font-light mb-6">
              Cocina de autor
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-cream-100 leading-snug mb-8">
              Fuego, tradicion y
              <span className="text-gold-400 italic"> vanguardia</span>
            </h3>
            <div className="space-y-6 text-cream-300/70 font-light leading-relaxed text-base md:text-lg">
              <p>
                En PUA, cada platillo nace del dialogo entre el fuego y los
                ingredientes mas selectos. Nuestros cortes premium son tratados
                con la reverencia que merecen: madurados con precision, asados
                sobre brasa viva y presentados como piezas de arte culinario.
              </p>
              <p>
                Nuestra cocina contemporanea fusiona la riqueza de la tradicion
                mexicana con tecnicas de vanguardia, creando una propuesta
                gastronomica que desafia expectativas y celebra cada ingrediente
                en su maxima expresion.
              </p>
              <p>
                Acompanado de una carta de vinos cuidadosamente curada, cada
                visita se transforma en un viaje sensorial completo donde sabor,
                ambiente y servicio se entrelazan en armonia.
              </p>
            </div>

            {/* Signature details */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-white/[0.06]">
              {[
                { number: "5.0", label: "TripAdvisor" },
                { number: "100+", label: "Etiquetas de Vino" },
                { number: "2023", label: "Fundacion" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-serif text-2xl md:text-3xl text-gold-400">
                    {stat.number}
                  </span>
                  <p className="text-cream-200/50 text-[10px] md:text-xs tracking-widest uppercase mt-2 font-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Atmospheric image */}
          <div className="observe-fade observe-fade-delay-1 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={IMAGES.ambiance}
                alt="Interior elegante de PUA Brasa y Vino"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-brand-black/20" />
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-gold-500/30" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-gold-500/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
