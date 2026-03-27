"use client";

import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "./images";
import { FullMenuModal } from "./FullMenuModal";

/* ═══════════════════════════════════════════════
   SIGNATURE DISHES SECTION — Michelin Edition
   Magazine-editorial spread layout.
   Less card-like, more spread/feature style.
   Dramatic category labels, cinematic imagery.
   ═══════════════════════════════════════════════ */

const DISHES = [
  {
    name: "Ribeye a la Brasa",
    description:
      "Corte USDA Prime de 400g, madurado 28 días. Sellado sobre brasa de encino y servido con reducción de vino tinto y vegetales de temporada.",
    category: "Cortes Premium",
    image: IMAGES.dish1,
  },
  {
    name: "Salmón en Costra de Hierbas",
    description:
      "Filete de salmón del Atlántico con costra de hierbas finas, sobre puré de coliflor trufado y espuma de limón Meyer.",
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
      "Experiencia de cinco tiempos maridada con nuestra selección de vinos. Un recorrido por los sabores insignia de PÚA.",
    category: "Experiencia",
    image: IMAGES.dish4,
  },
];

export function DishesSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section id="carta" className="relative py-32 md:py-48 bg-brand-dark overflow-hidden">
        {/* Subtle dot pattern texture — more refined */}
        <div className="absolute inset-0 opacity-[0.008]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(200,162,78,1) 0.5px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-16">
          {/* Section header — editorial scale */}
          <div className="mb-24 md:mb-36 observe-fade">
            <div className="flex items-start justify-between flex-col md:flex-row md:items-end gap-8">
              <div>
                <span className="text-gold-500/50 text-[10px] tracking-widest-3xl uppercase font-extralight block mb-6">
                  Nuestra Carta
                </span>
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream-100 font-light leading-none">
                  Platillos<br />
                  <span className="text-cream-100/40">Insignia</span>
                </h2>
              </div>
              <p className="text-cream-200/35 font-extralight max-w-sm text-[15px] leading-relaxed md:text-right md:pb-2">
                Cada creación refleja nuestra obsesión por la excelencia, los
                ingredientes de origen y el respeto por la brasa.
              </p>
            </div>
            <div className="h-px w-full bg-white/[0.04] mt-12" />
          </div>

          {/* Dish editorial spread — alternating layout */}
          <div className="space-y-20 md:space-y-32">
            {DISHES.map((dish, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={dish.name}
                  className={`observe-fade observe-fade-delay-${(index % 3) + 1} group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      isEven
                        ? "md:col-span-7 md:order-1"
                        : "md:col-span-7 md:order-2"
                    }`}
                  >
                    <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                        sizes="(max-width: 768px) 100vw, 58vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                      {/* Wine-tinted overlay on hover */}
                      <div className="absolute inset-0 bg-wine-900/0 group-hover:bg-wine-900/5 transition-colors duration-700" />
                    </div>
                    {/* Category badge — positioned over image */}
                    <div className={`absolute bottom-6 ${isEven ? "left-6" : "right-6"}`}>
                      <span className="text-[9px] tracking-widest-2xl uppercase text-gold-400/70 font-extralight bg-brand-black/60 backdrop-blur-sm px-4 py-2 border border-gold-500/10">
                        {dish.category}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div
                    className={`flex flex-col justify-center ${
                      isEven
                        ? "md:col-span-5 md:order-2 md:pl-8 lg:pl-16"
                        : "md:col-span-5 md:order-1 md:pr-8 lg:pr-16"
                    }`}
                  >
                    <div className="h-px w-10 bg-gold-500/20 mb-8" />
                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream-100 font-light leading-tight mb-5 group-hover:text-gold-400 transition-colors duration-700">
                      {dish.name}
                    </h3>
                    <p className="text-cream-300/35 text-sm md:text-[15px] font-extralight leading-[1.9]">
                      {dish.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* View full menu CTA — more refined */}
          <div className="text-center mt-24 md:mt-36 observe-fade">
            <div className="h-px w-full bg-white/[0.04] mb-16" />
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center gap-4 text-gold-400/70 text-[11px] tracking-widest-xl uppercase font-extralight hover:text-gold-300 transition-all duration-500 group"
            >
              <span className="h-px w-8 bg-gold-500/30 group-hover:w-12 transition-all duration-500" />
              <span>Ver carta completa</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {menuOpen && <FullMenuModal onClose={() => setMenuOpen(false)} />}
    </>
  );
}
