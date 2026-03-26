"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   HERO SECTION
   Full-screen cinematic opener.
   Multi-layered overlay for depth.
   Subtle parallax on scroll.
   ═══════════════════════════════════════════════ */

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;
  const opacityFade = Math.max(0, 1 - scrollY / 800);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}
      >
        <Image
          src={IMAGES.hero}
          alt="Corte premium a la brasa en PUA Brasa y Vino"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Multi-layer overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/30 to-brand-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/50 via-transparent to-brand-black/30" />
      {/* Warm vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.7)_100%)]" />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity: opacityFade }}
      >
        {/* Pre-title accent */}
        <div className="animate-fade-in mb-6">
          <span className="inline-block text-gold-500 text-[11px] md:text-xs tracking-widest-2xl uppercase font-light">
            Chilpancingo de los Bravo, Guerrero
          </span>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-in-up font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-cream-50 leading-[0.9] tracking-tight mb-2">
          PUA
        </h1>

        {/* Subtitle with decorative lines */}
        <div className="animate-fade-in-up [animation-delay:200ms] flex items-center justify-center gap-4 md:gap-6 mb-8">
          <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-gold-500" />
          <span className="font-serif text-lg md:text-2xl text-gold-400 tracking-widest-xl uppercase font-light italic">
            Brasa y Vino
          </span>
          <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold-500" />
        </div>

        {/* Tagline */}
        <p className="animate-fade-in [animation-delay:500ms] text-cream-200/70 text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mb-12 leading-relaxed">
          Donde el fuego transforma la materia prima en arte culinario.
          <br className="hidden md:block" />
          Una experiencia gastronomica de autor.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up [animation-delay:700ms] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#reservar"
            className="group relative px-10 py-4 bg-gold-500 text-brand-black text-xs tracking-widest-xl uppercase font-semibold overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10">Reservar Mesa</span>
          </a>
          <a
            href="#carta"
            className="px-10 py-4 border border-cream-200/20 text-cream-200/80 text-xs tracking-widest-xl uppercase font-light hover:border-gold-500/60 hover:text-gold-400 transition-all duration-500"
          >
            Explorar Carta
          </a>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:1200ms]">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-widest-2xl text-cream-200/30 uppercase">
            Descubre
          </span>
          <div className="relative w-px h-12">
            <div className="absolute inset-0 bg-gradient-to-b from-gold-500/60 to-transparent" />
            <div className="absolute top-0 w-px h-4 bg-gold-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
