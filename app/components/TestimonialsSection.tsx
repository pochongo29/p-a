"use client";

import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════
   TESTIMONIALS SECTION
   Auto-rotating testimonial cards with
   subtle fade transitions. Social proof
   that reinforces the premium positioning.
   ═══════════════════════════════════════════════ */

const TESTIMONIALS = [
  {
    quote:
      "Lugar elegante con buen sabor. Pedimos salmon y arrachera y ambos platillos cumplieron nuestras expectativas. Muy recomendado.",
    author: "Visitante de TripAdvisor",
    role: "Diciembre 2023",
    rating: 5,
  },
  {
    quote:
      "Una experiencia gastronomica inigualable en Chilpancingo. El ambiente es sofisticado y el servicio impecable. Los cortes a la brasa son excepcionales.",
    author: "Comensal Frecuente",
    role: "Cliente recurrente",
    rating: 5,
  },
  {
    quote:
      "La atencion al detalle en cada platillo es impresionante. La carta de vinos es extensa y el sommelier nos guio perfectamente. Sin duda, el mejor restaurante de la ciudad.",
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
    <section className="relative py-24 md:py-36 bg-brand-charcoal overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Section header */}
        <div className="mb-16 md:mb-20 observe-fade">
          <span className="text-gold-500 text-[11px] tracking-widest-2xl uppercase font-light">
            Testimonios
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mt-4">
            Lo que dicen nuestros invitados
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="relative min-h-[280px] md:min-h-[240px] observe-fade">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                index === active
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              {/* Rating stars */}
              <div className="flex gap-1.5 mb-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-gold-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-cream-100/90 leading-relaxed italic max-w-3xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8">
                <p className="text-gold-400 text-sm font-medium tracking-wide">
                  {testimonial.author}
                </p>
                <p className="text-cream-200/40 text-xs tracking-widest uppercase font-light mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`transition-all duration-500 ${
                index === active
                  ? "w-8 h-1 bg-gold-500"
                  : "w-3 h-1 bg-cream-200/20 hover:bg-cream-200/40"
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
