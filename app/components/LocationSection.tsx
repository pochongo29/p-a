/* ═══════════════════════════════════════════════
   LOCATION & HOURS SECTION — Michelin Edition
   More editorial, generous spacing, refined details.
   Map with cinematic treatment.
   ═══════════════════════════════════════════════ */

export function LocationSection() {
  return (
    <section className="relative py-20 md:py-48 bg-brand-black overflow-hidden">
      {/* Subtle top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Info side — 5 columns for asymmetry */}
          <div className="observe-fade lg:col-span-5">
            <span className="shimmer-gold text-[10px] tracking-widest-3xl uppercase font-extralight block mb-6">
              Visítanos
            </span>
            <h2 className="heading-glow font-serif text-4xl md:text-6xl lg:text-7xl text-cream-100 font-light leading-none mb-10 md:mb-16">
              Ubicación y Horarios
            </h2>

            <div className="h-px w-16 bg-gold-500/20 mb-14" />

            {/* Address */}
            <div className="mb-12">
              <h3 className="text-gold-400/90 text-[10px] tracking-widest-2xl uppercase font-extralight mb-5">
                Dirección
              </h3>
              <p className="text-cream-200/90 font-extralight leading-[2] text-base">
                Av. Lázaro Cárdenas, C. Eduardo Mendoza
                <br />
                No. 15-11, Lote 35
                <br />
                Chilpancingo de los Bravo, Guerrero
                <br />
                C.P. 39060, México
              </p>
            </div>

            {/* Hours */}
            <div className="mb-12">
              <h3 className="text-gold-400/90 text-[10px] tracking-widest-2xl uppercase font-extralight mb-5">
                Horario
              </h3>
              <div className="space-y-4">
                {[
                  { day: "Martes a Domingo", hours: "1:00 PM - 1:00 AM" },
                  { day: "Lunes", hours: "Cerrado" },
                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between max-w-sm border-b border-white/[0.03] pb-4"
                  >
                    <span className="text-cream-200/90 font-extralight text-sm">
                      {schedule.day}
                    </span>
                    <span
                      className={`font-extralight text-sm ${
                        schedule.hours === "Cerrado"
                          ? "text-wine-500/50 italic"
                          : "text-cream-100/92"
                      }`}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-gold-400/90 text-[10px] tracking-widest-2xl uppercase font-extralight mb-5">
                Contacto
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+527471090227"
                  className="flex items-center gap-4 text-cream-200/90 font-extralight hover:text-gold-400 transition-colors duration-500 group text-sm"
                >
                  <svg
                    className="w-3.5 h-3.5 text-gold-500/68 group-hover:text-gold-400/90 transition-colors duration-500"
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
                  +52 747 109 0227
                </a>
                <a
                  href="mailto:contacto.puabv@gmail.com"
                  className="flex items-center gap-4 text-cream-200/90 font-extralight hover:text-gold-400 transition-colors duration-500 group text-sm"
                >
                  <svg
                    className="w-3.5 h-3.5 text-gold-500/68 group-hover:text-gold-400/90 transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contacto.puabv@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Map embed — 7 columns, cinematic treatment */}
          <div className="observe-fade observe-fade-delay-1 relative lg:col-span-7">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px] md:min-h-[400px] overflow-hidden bg-brand-charcoal">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5!2d-99.4972!3d17.5429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMyJzM0LjMiTiA5OcKwMjknNTAuMCJX!5e0!3m2!1ses!2smx!4v1"
                className="absolute inset-0 w-full h-full border-0 grayscale contrast-125 opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-1000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de PÚA Brasa y Vino en Google Maps"
              />
              {/* Map overlay frame — refined */}
              <div className="absolute inset-0 pointer-events-none border border-gold-500/5" />
              {/* Inner frame accent */}
              <div className="absolute inset-4 pointer-events-none border border-gold-500/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
