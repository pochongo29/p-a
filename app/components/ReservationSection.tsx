import Image from "next/image";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   RESERVATION CTA SECTION
   Full-width cinematic call to action.
   WhatsApp as primary CTA, phone as secondary.
   ═══════════════════════════════════════════════ */

export function ReservationSection() {
  return (
    <section
      id="reservar"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.reservation}
          alt="Reserva en PUA Brasa y Vino"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,10,10,0.6)_100%)]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center observe-fade">
        <span className="text-gold-500 text-[11px] tracking-widest-2xl uppercase font-light">
          Te esperamos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream-100 mt-4 mb-8 leading-tight">
          Reserva tu
          <br />
          <span className="text-gold-400 italic">experiencia</span>
        </h2>
        <p className="text-cream-200/60 font-light text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Asegura tu mesa y preparate para vivir una velada inolvidable. Para
          grupos especiales o eventos privados, contactanos directamente.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/527471090227?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa%20en%20P%C3%9AA%20Brasa%20y%20Vino"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-10 py-4 bg-gold-500 text-brand-black text-xs tracking-widest-xl uppercase font-semibold overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <svg
              className="w-5 h-5 relative z-10"
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
            className="flex items-center gap-3 px-10 py-4 border border-cream-200/20 text-cream-200/80 text-xs tracking-widest-xl uppercase font-light hover:border-gold-500/60 hover:text-gold-400 transition-all duration-500"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
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
