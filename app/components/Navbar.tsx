"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════
   NAVIGATION BAR
   Floating, minimal, transparent -- becomes solid on scroll.
   Mobile: full-screen overlay with smooth transitions.
   ═══════════════════════════════════════════════ */

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Carta", href: "#carta" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      const scrolled = window.scrollY > 80;
      navRef.current.classList.toggle("bg-brand-black/90", scrolled);
      navRef.current.classList.toggle("backdrop-blur-md", scrolled);
      navRef.current.classList.toggle("shadow-lg", scrolled);
      navRef.current.classList.toggle("shadow-black/20", scrolled);
      navRef.current.classList.toggle("bg-transparent", !scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="group flex flex-col items-start relative z-[60]">
          <span className="font-serif text-2xl md:text-3xl font-semibold text-cream-100 tracking-wide group-hover:text-gold-400 transition-colors duration-500">
            PUA
          </span>
          <span className="text-[10px] md:text-xs tracking-widest-2xl text-gold-500 font-light uppercase">
            Brasa y Vino
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover-underline text-sm tracking-widest uppercase text-cream-200/80 hover:text-gold-400 transition-colors duration-300 font-light"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#reservar"
            className="ml-4 px-7 py-2.5 border border-gold-500/60 text-gold-400 text-xs tracking-widest-xl uppercase hover:bg-gold-500 hover:text-brand-black transition-all duration-500 font-medium"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-[60]"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              mobileOpen
                ? "bg-cream-200 rotate-45 translate-y-[3.5px]"
                : "bg-cream-200"
            }`}
          />
          <span
            className={`block h-px bg-gold-500 transition-all duration-300 ${
              mobileOpen ? "w-0 opacity-0" : "w-4 ml-auto opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-px transition-all duration-300 ${
              mobileOpen
                ? "bg-cream-200 -rotate-45 -translate-y-[3.5px]"
                : "bg-cream-200"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-brand-black/[0.97] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden z-[55] flex flex-col items-center justify-center gap-8 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="font-serif text-5xl text-cream-100 tracking-wide">
          PUA
        </span>
        <span className="text-xs tracking-widest-2xl text-gold-500 font-light uppercase -mt-6 mb-8">
          Brasa y Vino
        </span>

        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-lg tracking-widest uppercase text-cream-200/80 hover:text-gold-400 transition-all duration-300 font-light"
            style={{
              transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
            }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#reservar"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-10 py-3 border border-gold-500/60 text-gold-400 text-sm tracking-widest-xl uppercase hover:bg-gold-500 hover:text-brand-black transition-all duration-500"
          style={{
            transitionDelay: mobileOpen ? "500ms" : "0ms",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
          }}
        >
          Reservar Mesa
        </a>
      </div>
    </nav>
  );
}
