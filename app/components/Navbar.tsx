"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════
   NAVIGATION BAR — Michelin Edition
   Ultra-refined, razor-thin, invisible until needed.
   Transforms to a solid bar on scroll with
   smooth backdrop-blur transition.
   ═══════════════════════════════════════════════ */

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Carta", href: "#carta" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      setScrolled(isScrolled);
      if (!navRef.current) return;
      navRef.current.classList.toggle("bg-brand-black/90", isScrolled);
      navRef.current.classList.toggle("backdrop-blur-xl", isScrolled);
      navRef.current.classList.toggle("shadow-lg", isScrolled);
      navRef.current.classList.toggle("shadow-black/30", isScrolled);
      navRef.current.classList.toggle("bg-transparent", !isScrolled);
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
      className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-700 ease-out"
    >
      {/* Ultra-thin top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent transition-opacity duration-700 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 md:py-5 flex items-center justify-between">
        {/* Logo / Brand — tighter, more refined */}
        <a href="#" className="group flex items-center gap-3 relative z-[60]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-hero.png"
            alt="PÚA Brasa y Vino"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="flex flex-col items-start">
            <span className="font-serif text-xl md:text-2xl font-light text-cream-100 tracking-wider group-hover:text-gold-400 transition-colors duration-700 leading-none">
              PÚA
            </span>
            <span className="text-[8px] md:text-[9px] tracking-widest-3xl text-gold-500/95 font-light uppercase mt-0.5">
              Brasa y Vino
            </span>
          </div>
        </a>

        {/* Desktop Navigation — refined spacing and typography */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover-underline text-[11px] tracking-widest-xl uppercase text-cream-200/90 hover:text-cream-100 transition-colors duration-500 font-light"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#reservar"
            className="ml-6 px-8 py-2 border border-gold-500/30 text-gold-500 text-[10px] tracking-widest-2xl uppercase hover:bg-gold-500 hover:text-brand-black hover:border-gold-500 transition-all duration-700 font-light"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Hamburger — more minimal */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-[60]"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`block w-6 h-px transition-all duration-500 ease-out ${
              mobileOpen
                ? "bg-gold-400 rotate-45 translate-y-[3.5px]"
                : "bg-cream-200/60"
            }`}
          />
          <span
            className={`block h-px bg-gold-500/60 transition-all duration-500 ease-out ${
              mobileOpen ? "w-0 opacity-0" : "w-3 ml-auto opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-px transition-all duration-500 ease-out ${
              mobileOpen
                ? "bg-gold-400 -rotate-45 -translate-y-[3.5px]"
                : "bg-cream-200/60"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Panel — more cinematic */}
      <div
        className={`fixed inset-0 bg-brand-black/[0.98] backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden z-[55] flex flex-col items-center justify-center gap-6 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Decorative corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold-500/10" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold-500/10" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-hero.png"
          alt="PÚA Brasa y Vino"
          width={96}
          height={96}
          className="w-20 h-20 object-contain opacity-80"
        />
        <span className="text-[9px] tracking-widest-3xl text-gold-500/92 font-light uppercase -mt-4 mb-10">
          Brasa y Vino
        </span>

        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-base tracking-widest-xl uppercase text-cream-200/90 hover:text-gold-400 transition-all duration-500 font-extralight"
            style={{
              transitionDelay: mobileOpen ? `${i * 70 + 100}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {link.label}
          </a>
        ))}

        <div className="h-px w-12 bg-gold-500/20 my-4" />

        <a
          href="#reservar"
          onClick={() => setMobileOpen(false)}
          className="px-12 py-3 border border-gold-500/30 text-gold-400 text-[11px] tracking-widest-2xl uppercase hover:bg-gold-500 hover:text-brand-black transition-all duration-700 font-light"
          style={{
            transitionDelay: mobileOpen ? "550ms" : "0ms",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Reservar Mesa
        </a>
      </div>
    </nav>
  );
}
