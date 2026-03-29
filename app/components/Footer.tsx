/* ═══════════════════════════════════════════════
   FOOTER — Michelin Edition
   More refined, more negative space, logo included.
   Ultra-minimal with strong typographic hierarchy.
   ═══════════════════════════════════════════════ */

const FOOTER_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Carta", href: "#carta" },
  { label: "Galería", href: "#galeria" },
  { label: "Reservar", href: "#reservar" },
];

export function Footer() {
  return (
    <footer className="relative bg-brand-black">
      {/* Top divider — ultra-thin */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Brand column — with logo */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-hero.png"
                alt="PÚA Brasa y Vino"
                width={48}
                height={48}
                className="w-10 h-10 object-contain opacity-60"
              />
              <div>
                <span className="font-serif text-2xl text-cream-100/80 tracking-wider font-light">
                  PÚA
                </span>
                <p className="text-[8px] tracking-widest-3xl text-gold-500/40 uppercase font-extralight">
                  Brasa y Vino
                </p>
              </div>
            </div>
            <p className="text-cream-200/45 text-sm font-extralight mt-4 leading-[1.9] max-w-xs">
              Una experiencia gastronómica donde el fuego, la tradición y la
              innovación se encuentran.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-gold-500/30 text-[9px] tracking-widest-3xl uppercase mb-8 font-extralight">
              Navegar
            </h4>
            <div className="space-y-4">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-cream-200/50 text-sm font-extralight hover:text-gold-400/60 transition-colors duration-500 touch-manipulation"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4">
            <h4 className="text-gold-500/30 text-[9px] tracking-widest-3xl uppercase mb-8 font-extralight">
              Contacto
            </h4>
            <div className="space-y-4 text-cream-200/25 text-sm font-extralight">
              <p>Av. Lázaro Cárdenas, No. 15-11</p>
              <p>Chilpancingo, Guerrero, México</p>
              <div className="h-px w-10 bg-white/[0.03] my-2" />
              <a
                href="tel:+527471090227"
                className="block hover:text-gold-400/50 transition-colors duration-500"
              >
                +52 747 109 0227
              </a>
              <a
                href="mailto:contacto.puabv@gmail.com"
                className="block hover:text-gold-400/50 transition-colors duration-500"
              >
                contacto.puabv@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar — extreme refinement */}
        <div className="mt-12 md:mt-28 pt-8 md:pt-10 border-t border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-200/10 text-[11px] font-extralight tracking-wider">
            &copy; {new Date().getFullYear()} PÚA Brasa y Vino. Todos los
            derechos reservados.
          </p>
          <p className="text-cream-200/[0.07] text-[9px] tracking-widest-2xl uppercase font-extralight">
            Chilpancingo de los Bravo, Guerrero
          </p>
        </div>
      </div>
    </footer>
  );
}
