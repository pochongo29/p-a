"use client";

import Image from "next/image";

/* ═══════════════════════════════════════════════
   GALLERY SECTION — Michelin Edition
   Dramatic cinematic grid with varying proportions.
   Some full-bleed, some intimate.
   Refined hover overlays with editorial labels.
   ═══════════════════════════════════════════════ */

const GALLERY_ITEMS = [
  { src: "/gallery-1.jpg", alt: "Experiencia gastronómica en PÚA", label: "La Experiencia", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery-2.jpg", alt: "Corte premium a la brasa", label: "A la Brasa", span: "" },
  { src: "/gallery-3.jpg", alt: "Ambiente de PÚA Brasa y Vino", label: "Ambiente", span: "" },
  { src: "/gallery-4.jpg", alt: "Plato de autor", label: "Cocina de Autor", span: "md:col-span-2" },
  { src: "/gallery-5.jpg", alt: "Ingredientes frescos", label: "Ingredientes", span: "" },
  { src: "/gallery-6.jpg", alt: "Copa de vino tinto", label: "La Cava", span: "" },
  { src: "/gallery-7.jpg", alt: "Detalle del restaurante", label: "Detalle", span: "" },
];

export function GallerySection() {
  return (
    <section id="galeria" className="relative py-32 md:py-48 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section header — dramatic editorial */}
        <div className="mb-20 md:mb-32 observe-fade">
          <div className="flex items-end justify-between flex-col md:flex-row gap-8">
            <div>
              <span className="text-gold-500/50 text-[10px] tracking-widest-3xl uppercase font-extralight block mb-6">
                Momentos
              </span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream-100 font-light leading-none">
                Galería
              </h2>
            </div>
            <div className="h-px w-32 bg-gold-500/20 hidden md:block mb-4" />
          </div>
          <div className="h-px w-full bg-white/[0.04] mt-12" />
        </div>

        {/* Cinematic asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {GALLERY_ITEMS.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={`${img.span} observe-fade observe-fade-delay-${(i % 4) + 1} relative group overflow-hidden ${
                img.span?.includes("row-span-2") ? "aspect-square md:aspect-auto md:min-h-[500px]" :
                img.span?.includes("col-span-2") ? "aspect-[2/1] md:aspect-[2.5/1]" :
                "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                sizes={img.span?.includes("col-span-2") ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              {/* Overlay — more cinematic gradient */}
              <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/50 transition-all duration-700" />
              {/* Wine-tone tint on hover */}
              <div className="absolute inset-0 bg-wine-900/0 group-hover:bg-wine-900/5 transition-colors duration-700" />

              {/* Label reveal */}
              <div className="absolute inset-0 flex items-end justify-start p-4 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <div className="h-px w-8 bg-gold-500/40 mb-3" />
                  <span className="text-gold-400/80 text-[10px] md:text-[11px] tracking-widest-xl uppercase font-extralight">
                    {img.label}
                  </span>
                </div>
              </div>

              {/* Fine inner border on hover */}
              <div className="absolute inset-2 border border-transparent group-hover:border-gold-500/10 transition-colors duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
