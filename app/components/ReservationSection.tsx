import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   RESERVATION CTA SECTION — Michelin Edition
   The most dramatic section of the entire site.
   Full cinematic treatment, enormous heading,
   commanding presence. This is the crescendo.
   ═══════════════════════════════════════════════ */

export function ReservationSection() {
  return (
    <section
      id="reservar"
      className="relative py-40 md:py-56 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.reservation}
          alt="Reserva en PÚA Brasa y Vino"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(8,7,6,0.8)_100%)]" />
        {/* Wine-toned atmospheric warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-wine-900/10 via-transparent to-transparent" />
      </div>

      {/* Decorative frame */}
      <div className="absolute top-16 left-16 w-24 h-24 border-t border-l border-gold-500/8 hidden md:block" />
      <div className="absolute bottom-16 right-16 w-24 h-24 border-b border-r border-gold-500/8 hidden md:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center observe-fade">
        <span className="text-gold-500/50 text-[10px] tracking-widest-3xl uppercase font-extralight block mb-10">
          Te esperamos
        </span>

        {/* Enormous heading — the climax */}
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cream-100 font-light leading-[0.95] mb-10">
          Reserva tu
          <br />
          <span className="text-gold-400/80 italic">experiencia</span>
        </h2>

        <div className="h-px w-16 bg-gold-500/20 mx-auto mb-10" />

        <p className="text-cream-200/35 font-extralight text-base md:text-lg max-w-xl mx-auto mb-16 leading-relaxed">
          Asegura tu mesa y prepárate para vivir una velada inolvidable. Para
          grupos especiales o eventos privados, contáctanos directamente.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {/* WhatsApp CTA — the primary action */}
          <a
            href="https://wa.me/527471090227?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa%20en%20P%C3%9AA%20Brasa%20y%20Vino"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 px-14 py-4 bg-gold-500/90 text-brand-black text-[10px] tracking-widest-2xl uppercase font-medium overflow-hidden transition-all duration-700"
          >
            <span className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <svg
              className="w-4 h-4 relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="relative z-10">Reservar por WhatsApp</span>
          </a>

          {/* Phone CTA */}
          <a
            href="tel:+527471090227"
            className="flex items-center gap-4 px-14 py-4 border border-cream-200/10 text-cream-200/50 text-[10px] tracking-widest-2xl uppercase font-extralight hover:border-gold-500/30 hover:text-gold-400/80 transition-all duration-700"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
