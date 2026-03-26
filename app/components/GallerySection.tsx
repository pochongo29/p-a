"use client";

import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   GALLERY SECTION
   Asymmetric masonry-inspired grid with
   hover overlays showing descriptive labels.
   ═══════════════════════════════════════════════ */

const GALLERY_ITEMS = [
  { src: IMAGES.gallery1, alt: "Experiencia gastronomica en PUA", label: "La Experiencia", span: "col-span-2 row-span-2" },
  { src: IMAGES.gallery2, alt: "Corte premium a la brasa", label: "A la Brasa", span: "" },
  { src: IMAGES.gallery3, alt: "Ambiente de PUA Brasa y Vino", label: "Ambiente", span: "" },
  { src: IMAGES.gallery4, alt: "Plato de autor", label: "Cocina de Autor", span: "" },
  { src: IMAGES.gallery5, alt: "Ingredientes frescos", label: "Ingredientes", span: "" },
  { src: IMAGES.gallery6, alt: "Copa de vino tinto", label: "La Cava", span: "" },
  { src: IMAGES.concept, alt: "Detalle del restaurante", label: "Detalle", span: "" },
];

export function GallerySection() {
  return (
    <section id="galeria" className="relative py-24 md:py-36 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24 observe-fade">
          <span className="text-gold-500 text-[11px] tracking-widest-2xl uppercase font-light">
            Momentos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-100 mt-4 mb-6">
            Galeria
          </h2>
          <div className="h-px w-20 bg-gold-500/60 mx-auto" />
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={`${img.span} observe-fade observe-fade-delay-${(i % 4) + 1} relative group overflow-hidden ${
                img.span ? "aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                sizes={img.span ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
              />
              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/50 transition-all duration-700" />
              <div className="absolute inset-0 flex items-end justify-start p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold-400 text-xs tracking-widest uppercase font-light">
                    {img.label}
                  </span>
                </div>
              </div>
              {/* Subtle gold border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold-500/20 transition-colors duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
