/* ═══════════════════════════════════════════════
   FOOTER
   Minimal, premium, consistent with brand.
   Three-column layout with brand, navigation, contact.
   ═══════════════════════════════════════════════ */

const FOOTER_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Carta", href: "#carta" },
  { label: "Galeria", href: "#galeria" },
  { label: "Reservar", href: "#reservar" },
];

export function Footer() {
  return (
    <footer className="relative bg-brand-black border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand column */}
          <div>
            <span className="font-serif text-3xl text-cream-100 tracking-wide">
              PUA
            </span>
            <p className="text-[10px] tracking-widest-2xl text-gold-500 uppercase font-light mt-1">
              Brasa y Vino
            </p>
            <p className="text-cream-200/40 text-sm font-light mt-4 leading-relaxed max-w-xs">
              Una experiencia gastronomica donde el fuego, la tradicion y la
              innovacion se encuentran.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gold-500/70 text-[10px] tracking-widest-2xl uppercase mb-6">
              Navegar
            </h4>
            <div className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-cream-200/40 text-sm font-light hover:text-gold-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-gold-500/70 text-[10px] tracking-widest-2xl uppercase mb-6">
              Contacto
            </h4>
            <div className="space-y-3 text-cream-200/40 text-sm font-light">
              <p>Av. Lazaro Cardenas, No. 15-11</p>
              <p>Chilpancingo, Guerrero, Mexico</p>
              <a
                href="tel:+527471090227"
                className="block hover:text-gold-400 transition-colors duration-300"
              >
                +52 747 109 0227
              </a>
              <a
                href="mailto:contacto.puabv@gmail.com"
                className="block hover:text-gold-400 transition-colors duration-300"
              >
                contacto.puabv@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-200/20 text-xs font-light">
            &copy; {new Date().getFullYear()} PUA Brasa y Vino. Todos los
            derechos reservados.
          </p>
          <p className="text-cream-200/[0.15] text-[10px] tracking-widest uppercase font-light">
            Chilpancingo de los Bravo, Guerrero
          </p>
        </div>
      </div>
    </footer>
  );
}
