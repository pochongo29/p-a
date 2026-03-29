import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   EXPERIENCE / CONCEPT SECTION — Michelin Edition
   Asymmetric editorial layout with dramatic stat
   typography. More whitespace, more presence.
   ═══════════════════════════════════════════════ */

export function ExperienceSection() {
  return (
    <section id="experiencia" className="relative py-20 md:py-48 bg-brand-black overflow-hidden">
      {/* Subtle decorative line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section header — much more dramatic */}
        <div className="text-center mb-14 md:mb-40 observe-fade">
          <span className="shimmer-gold text-[10px] tracking-widest-3xl uppercase font-extralight block mb-6">
            Nuestra Esencia
          </span>
          <h2 className="heading-glow font-serif text-5xl md:text-7xl lg:text-8xl text-cream-100 font-light leading-none">
            La Experiencia PÚA
          </h2>
          <div className="h-px w-16 bg-gold-500/30 mx-auto mt-10" />
        </div>

        {/* Split content: text + image — more asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Narrative — takes 5 columns for asymmetry */}
          <div className="observe-fade order-2 lg:order-1 lg:col-span-5 lg:pt-12">
            <p className="shimmer-gold text-[10px] tracking-widest-3xl uppercase font-extralight mb-8">
              Cocina de autor
            </p>
            <h3 className="heading-glow font-serif text-3xl md:text-4xl lg:text-5xl text-cream-100 font-light leading-[1.15] mb-10">
              Fuego, tradición y
              <span className="shimmer-gold italic block mt-1"> vanguardia</span>
            </h3>
            <div className="space-y-7 text-cream-300/75 font-extralight leading-[1.9] text-[15px] md:text-base">
              <p>
                En PÚA, cada platillo nace del diálogo entre el fuego y los
                ingredientes más selectos. Nuestros cortes premium son tratados
                con la reverencia que merecen: madurados con precisión, asados
                sobre brasa viva y presentados como piezas de arte culinario.
              </p>
              <p>
                Nuestra cocina contemporánea fusiona la riqueza de la tradición
                mexicana con técnicas de vanguardia, creando una propuesta
                gastronómica que desafía expectativas y celebra cada ingrediente
                en su máxima expresión.
              </p>
              <p>
                Acompañado de una carta de vinos cuidadosamente curada, cada
                visita se transforma en un viaje sensorial completo donde sabor,
                ambiente y servicio se entrelazan en armonía.
              </p>
            </div>

            {/* Signature stats — dramatically larger */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 mt-12 md:mt-16 pt-10 md:pt-12 border-t border-white/[0.04]">
              {[
                { number: "5.0", label: "TripAdvisor" },
                { number: "100+", label: "Etiquetas de Vino" },
                { number: "2023", label: "Fundación" },
              ].map((stat) => (
                <div key={stat.label} className="observe-fade">
                  <span className="shimmer-gold font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-none block">
                    {stat.number}
                  </span>
                  <p className="text-cream-200/60 text-[9px] md:text-[10px] tracking-widest-2xl uppercase mt-4 font-extralight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Atmospheric image — takes 7 columns */}
          <div className="observe-fade observe-fade-delay-1 order-1 lg:order-2 lg:col-span-7 relative">
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
              <Image
                src={IMAGES.ambiance}
                alt="Interior elegante de PÚA Brasa y Vino"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-brand-black/10" />
              {/* Wine-tone overlay for warmth */}
              <div className="absolute inset-0 bg-gradient-to-br from-wine-900/10 via-transparent to-transparent" />
            </div>
            {/* Decorative corner accents — thinner, more refined */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-gold-500/15" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-gold-500/15" />
            {/* Floating label */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
              <span className="text-[9px] tracking-widest-2xl text-gold-500/40 uppercase font-extralight">
                Est. 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
