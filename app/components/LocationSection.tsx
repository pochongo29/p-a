/* ═══════════════════════════════════════════════
   LOCATION & HOURS SECTION
   Elegant info layout with Google Maps embed.
   ═══════════════════════════════════════════════ */

export function LocationSection() {
  return (
    <section className="relative py-24 md:py-36 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Info side */}
          <div className="observe-fade">
            <span className="text-gold-500 text-[11px] tracking-widest-2xl uppercase font-light">
              Visitanos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mt-4 mb-12">
              Ubicacion y Horarios
            </h2>

            {/* Address */}
            <div className="mb-10">
              <h3 className="text-gold-400 text-xs tracking-widest-xl uppercase font-medium mb-4">
                Direccion
              </h3>
              <p className="text-cream-200/70 font-light leading-relaxed text-lg">
                Av. Lazaro Cardenas, C. Eduardo Mendoza
                <br />
                No. 15-11, Lote 35
                <br />
                Chilpancingo de los Bravo, Guerrero
                <br />
                C.P. 39060, Mexico
              </p>
            </div>

            {/* Hours */}
            <div className="mb-10">
              <h3 className="text-gold-400 text-xs tracking-widest-xl uppercase font-medium mb-4">
                Horario
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Martes a Domingo", hours: "1:00 PM - 1:00 AM" },
                  { day: "Lunes", hours: "Cerrado" },
                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between max-w-sm"
                  >
                    <span className="text-cream-200/70 font-light">
                      {schedule.day}
                    </span>
                    <span
                      className={`font-light ${
                        schedule.hours === "Cerrado"
                          ? "text-wine-400/60 italic"
                          : "text-cream-100"
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
              <h3 className="text-gold-400 text-xs tracking-widest-xl uppercase font-medium mb-4">
                Contacto
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+527471090227"
                  className="flex items-center gap-3 text-cream-200/70 font-light hover:text-gold-400 transition-colors duration-300 group"
                >
                  <svg
                    className="w-4 h-4 text-gold-500/60 group-hover:text-gold-400 transition-colors duration-300"
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
                  +52 747 109 0227
                </a>
                <a
                  href="mailto:contacto.puabv@gmail.com"
                  className="flex items-center gap-3 text-cream-200/70 font-light hover:text-gold-400 transition-colors duration-300 group"
                >
                  <svg
                    className="w-4 h-4 text-gold-500/60 group-hover:text-gold-400 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contacto.puabv@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="observe-fade observe-fade-delay-1 relative">
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden bg-brand-charcoal">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.5!2d-99.4972!3d17.5429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMyJzM0LjMiTiA5OcKwMjknNTAuMCJX!5e0!3m2!1ses!2smx!4v1"
                className="absolute inset-0 w-full h-full border-0 grayscale contrast-125 opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion de PUA Brasa y Vino en Google Maps"
              />
              {/* Map overlay frame */}
              <div className="absolute inset-0 pointer-events-none border border-gold-500/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
