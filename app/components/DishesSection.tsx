import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   SIGNATURE DISHES SECTION
   Premium dish cards with hover effects and
   glass-morphism styling.
   ═══════════════════════════════════════════════ */

const DISHES = [
  {
    name: "Ribeye a la Brasa",
    description:
      "Corte USDA Prime de 400g, madurado 28 dias. Sellado sobre brasa de encino y servido con reduccion de vino tinto y vegetales de temporada.",
    category: "Cortes Premium",
    image: IMAGES.dish1,
  },
  {
    name: "Salmon en Costra de Hierbas",
    description:
      "Filete de salmon del Atlantico con costra de hierbas finas, sobre puree de coliflor trufado y espuma de limon Meyer.",
    category: "Mar",
    image: IMAGES.dish2,
  },
  {
    name: "Cordero Confitado",
    description:
      "Pierna de cordero confitada 12 horas a baja temperatura, glaseada con miel de agave y chile guajillo, sobre polenta cremosa.",
    category: "Especialidades",
    image: IMAGES.dish3,
  },
  {
    name: "Tasting de la Casa",
    description:
      "Experiencia de cinco tiempos maridada con nuestra seleccion de vinos. Un recorrido por los sabores insignia de PUA.",
    category: "Experiencia",
    image: IMAGES.dish4,
  },
];

export function DishesSection() {
  return (
    <section id="carta" className="relative py-24 md:py-36 bg-brand-dark">
      {/* Subtle dot pattern texture */}
      <div className="absolute inset-0 opacity-[0.012]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(200,162,78,1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-20 md:mb-28 observe-fade">
          <span className="text-gold-500 text-[11px] tracking-widest-2xl uppercase font-light">
            Nuestra Carta
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-100 mt-4 mb-6">
            Platillos Insignia
          </h2>
          <p className="text-cream-200/50 font-light max-w-lg mx-auto text-base">
            Cada creacion refleja nuestra obsesion por la excelencia, los
            ingredientes de origen y el respeto por la brasa.
          </p>
          <div className="h-px w-20 bg-gold-500/60 mx-auto mt-8" />
        </div>

        {/* Dish grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {DISHES.map((dish, index) => (
            <article
              key={dish.name}
              className={`observe-fade observe-fade-delay-${index + 1} group relative overflow-hidden glass-card hover:border-gold-500/10 transition-all duration-700`}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Dish image */}
                <div className="relative w-full sm:w-48 md:w-56 h-56 sm:h-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out"
                    sizes="(max-width: 640px) 100vw, 240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-dark/50 hidden sm:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent sm:hidden" />
                </div>

                {/* Dish info */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                  <span className="text-gold-500/70 text-[10px] tracking-widest-2xl uppercase font-light mb-3">
                    {dish.category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-cream-100 mb-3 group-hover:text-gold-400 transition-colors duration-500">
                    {dish.name}
                  </h3>
                  <p className="text-cream-300/50 text-sm font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View full menu CTA */}
        <div className="text-center mt-16 observe-fade">
          <a
            href="#reservar"
            className="inline-flex items-center gap-3 text-gold-400 text-sm tracking-widest uppercase font-light hover:text-gold-300 transition-colors duration-300 group"
          >
            <span>Ver carta completa</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
