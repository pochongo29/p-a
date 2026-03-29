"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Inicio",       href: "#hero",        num: "01" },
  { label: "Experiencia",  href: "#experiencia",  num: "02" },
  { label: "Carta",        href: "#carta",        num: "03" },
  { label: "Galería",      href: "#galeria",      num: "04" },
  { label: "Contacto",     href: "#contacto",     num: "05" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 60;
      const isMobile = window.innerWidth < 768;
      setScrolled(isScrolled);
      if (!navRef.current) return;
      const bgClass = isMobile ? "bg-brand-black" : "bg-brand-black/90";
      navRef.current.classList.toggle(bgClass, isScrolled);
      navRef.current.classList.toggle("backdrop-blur-md", isScrolled);
      navRef.current.classList.toggle("shadow-[0_1px_0_rgba(200,162,78,0.08)]", isScrolled);
      navRef.current.classList.toggle("bg-transparent", !isScrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-500"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        {/* Gold accent line on scroll */}
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />

        <div className="px-5 md:px-16 py-4 md:py-5 flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3 z-[60]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-hero.png"
              alt="PÚA Brasa y Vino"
              width={44}
              height={44}
              className="w-9 h-9 md:w-12 md:h-12 object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-2xl font-light text-cream-100 tracking-wider leading-none">
                PÚA
              </span>
              <span className="text-[7px] md:text-[9px] tracking-widest-2xl text-gold-500/90 font-light uppercase mt-0.5">
                Brasa y Vino
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}
                className="hover-underline text-[11px] tracking-widest-xl uppercase text-cream-200/90 hover:text-cream-100 transition-colors duration-500 font-light"
              >
                {link.label}
              </a>
            ))}
            <a href="#reservar"
              className="ml-6 px-8 py-2 border border-gold-500/30 text-gold-500 text-[10px] tracking-widest-2xl uppercase hover:bg-gold-500 hover:text-brand-black hover:border-gold-500 transition-all duration-700 font-light"
            >
              Reservar
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden relative z-[60] flex flex-col justify-center items-end gap-[5px] w-10 h-10 touch-manipulation"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`block h-px transition-all duration-400 ease-out origin-center
              ${mobileOpen ? "w-6 bg-gold-400 rotate-45 translate-y-[5px]" : "w-6 bg-cream-100/80"}`}
            />
            <span className={`block h-px bg-gold-500 transition-all duration-400 ease-out
              ${mobileOpen ? "w-0 opacity-0" : "w-4 opacity-100"}`}
            />
            <span className={`block h-px transition-all duration-400 ease-out origin-center
              ${mobileOpen ? "w-6 bg-gold-400 -rotate-45 -translate-y-[5px]" : "w-6 bg-cream-100/80"}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu — slide-in drawer from right */}
      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[55] bg-brand-black/70 md:hidden transition-opacity duration-400
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer panel */}
      <div className={`fixed top-0 right-0 bottom-0 z-[58] w-[78vw] max-w-[320px] md:hidden
        bg-brand-charcoal flex flex-col
        border-l border-gold-500/10
        transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        {/* Gold top accent */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

        {/* Header inside drawer */}
        <div className="flex items-center justify-between px-7 pt-6 pb-8">
          <div>
            <span className="font-serif text-xl text-cream-100 font-light tracking-wider">PÚA</span>
            <p className="text-[8px] tracking-widest-2xl text-gold-500/90 font-light uppercase mt-0.5">Brasa y Vino</p>
          </div>
          <button
            onClick={close}
            aria-label="Cerrar menú"
            className="w-8 h-8 flex items-center justify-center text-cream-200/60 hover:text-gold-400 transition-colors touch-manipulation"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px mx-7 bg-white/[0.05] mb-6" />

        {/* Nav links */}
        <nav className="flex flex-col px-7 gap-1 flex-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className={`group flex items-center gap-4 py-3.5 border-b border-white/[0.04] last:border-0
                transition-all duration-300 touch-manipulation
                ${mobileOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
              style={{ transitionDelay: mobileOpen ? `${i * 60 + 80}ms` : "0ms" }}
            >
              <span className="text-[10px] text-gold-500/60 font-light tabular-nums w-5">{link.num}</span>
              <span className="font-serif text-lg text-cream-100/90 font-light tracking-wide group-hover:text-gold-400 transition-colors duration-300">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-7 pb-8 pt-6">
          <div className="h-px bg-white/[0.05] mb-6" />
          <a
            href="#reservar"
            onClick={close}
            className="flex items-center justify-center gap-3 w-full py-3.5 bg-gold-500/90 text-brand-black text-[10px] tracking-widest-2xl uppercase font-medium hover:bg-gold-400 transition-colors duration-500 touch-manipulation"
            style={{ transitionDelay: mobileOpen ? "420ms" : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease, background-color 0.5s" }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Reservar Mesa
          </a>
        </div>
      </div>
    </>
  );
}
