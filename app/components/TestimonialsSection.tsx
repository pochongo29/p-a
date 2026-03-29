"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   TESTIMONIALS SECTION — Michelin Edition
   Theatrical presentation with viewport-filling
   quote text. Minimal, dramatic, editorial.
   ═══════════════════════════════════════════════ */

const TESTIMONIALS = [
  {
    quote:
      "Lugar elegante con buen sabor. Pedimos salmón y arrachera y ambos platillos superaron nuestras expectativas. Muy recomendable.",
    author: "Visitante de TripAdvisor",
    role: "Diciembre 2023",
    rating: 5,
  },
  {
    quote:
      "Una experiencia gastronómica inigualable en Chilpancingo. El ambiente es sofisticado y el servicio impecable. Los cortes a la brasa son excepcionales.",
    author: "Comensal Frecuente",
    role: "Cliente recurrente",
    rating: 5,
  },
  {
    quote:
      "La atención al detalle en cada platillo es impresionante. La carta de vinos es extensa y el sommelier nos guió perfectamente. Sin duda, el mejor restaurante de la ciudad.",
    author: "Amante de la Gastronomia",
    role: "Experiencia de cena",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-52 bg-brand-charcoal overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.testimonial}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-charcoal/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 via-transparent to-brand-charcoal/60" />
      </div>

      {/* Decorative top/bottom lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      {/* Enormous background quote mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-serif text-[24rem] md:text-[36rem] text-gold-500/[0.02] leading-none">
          &ldquo;
        </span>
      </div>

      {/* Geometric corner accents */}
      <div className="absolute top-16 left-16 w-20 h-20 border-t border-l border-gold-500/8 hidden md:block" />
      <div className="absolute bottom-16 right-16 w-20 h-20 border-b border-r border-gold-500/8 hidden md:block" />

      <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
        {/* Section header — minimal */}
        <div className="mb-10 md:mb-28 observe-fade">
          <span className="text-gold-500/90 text-[10px] tracking-widest-3xl uppercase font-extralight">
            Testimonios
          </span>
        </div>

        {/* Testimonial — dramatic viewport-filling quote */}
        <div className="relative min-h-[380px] sm:min-h-[320px] observe-fade" aria-live="polite" aria-atomic="true">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                index === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              {/* Rating — minimal gold dots instead of stars */}
              <div className="flex gap-2 mb-12">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-gold-500/60"
                  />
                ))}
              </div>

              {/* Quote — much larger, editorial */}
              <blockquote className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl text-cream-100 leading-[1.4] italic font-light max-w-4xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author — refined */}
              <div className="mt-8 md:mt-16">
                <div className="h-px w-10 bg-gold-500/20 mx-auto mb-6" />
                <p className="text-gold-400/92 text-xs font-light tracking-wider">
                  {testimonial.author}
                </p>
                <p className="text-cream-200/90 text-[10px] tracking-widest-xl uppercase font-extralight mt-2">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination — thinner, more refined */}
        <div className="flex items-center justify-center gap-4 mt-16">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`transition-all duration-700 ease-out ${
                index === active
                  ? "w-12 h-px bg-gold-500/60"
                  : "w-4 h-px bg-cream-200/10 hover:bg-cream-200/25"
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
