"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IMAGES } from "./images";

/* ═══════════════════════════════════════════════
   HERO SECTION — Michelin Edition
   Full-viewport cinematic opener.
   Dramatic scale, floating logo, editorial typography.
   Multi-layered depth with parallax.
   ═══════════════════════════════════════════════ */

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const parallaxOffset = isMobile ? 0 : scrollY * 0.35;
  const opacityFade = isMobile ? 1 : Math.max(0, 1 - scrollY / 700);
  const logoScale = isMobile ? 1 : 1 + scrollY * 0.0003;

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.15)` }}
      >
        <Image
          src={IMAGES.hero}
          alt="Corte premium a la brasa en PÚA Brasa y Vino"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Multi-layer overlay for extreme cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/20 to-brand-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-brand-black/40" />
      {/* Warm deep vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(8,7,6,0.85)_100%)]" />
      {/* Subtle wine-tone warmth in corners */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,32,53,0.08)_0%,transparent_60%)]" />

      {/* Decorative frame corners */}
      <div className="absolute top-12 left-12 w-20 h-20 border-t border-l border-gold-500/10 hidden md:block animate-fade-in [animation-delay:1500ms]" />
      <div className="absolute top-12 right-12 w-20 h-20 border-t border-r border-gold-500/10 hidden md:block animate-fade-in [animation-delay:1500ms]" />
      <div className="absolute bottom-12 left-12 w-20 h-20 border-b border-l border-gold-500/10 hidden md:block animate-fade-in [animation-delay:1500ms]" />
      <div className="absolute bottom-12 right-12 w-20 h-20 border-b border-r border-gold-500/10 hidden md:block animate-fade-in [animation-delay:1500ms]" />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity: opacityFade }}
      >
        {/* Pre-title accent with horizontal rules */}
        <div className="animate-fade-in mb-8 flex items-center justify-center gap-6">
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-gold-500/40" />
          <span className="shimmer-gold inline-block text-[10px] md:text-[11px] tracking-widest-3xl uppercase font-extralight">
            Chilpancingo de los Bravo, Guerrero
          </span>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-gold-500/40" />
        </div>

        {/* Logo principal — larger, floating presence */}
        <div
          className="animate-fade-in-up flex justify-center mb-10"
          style={{ transform: `scale(${logoScale})` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-hero.png"
            alt="PÚA Brasa y Vino"
            width={320}
            height={320}
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain drop-shadow-[0_0_80px_rgba(200,162,78,0.08)]"
          />
        </div>

        {/* Tagline — bigger, more editorial */}
        <p className="animate-fade-in [animation-delay:600ms] text-flicker text-cream-200/80 text-lg md:text-xl lg:text-2xl font-extralight tracking-wide max-w-2xl mx-auto mb-16 leading-relaxed">
          Donde el fuego transforma la materia prima en arte culinario.
          <br className="hidden md:block" />
          Una experiencia gastronómica de autor.
        </p>

        {/* CTAs — more refined, thinner borders */}
        <div className="animate-fade-in-up [animation-delay:900ms] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full px-4 sm:px-0">
          <a
            href="#reservar"
            className="group relative w-full sm:w-auto text-center px-10 sm:px-14 py-4 bg-gold-500/90 text-brand-black text-[10px] tracking-widest-2xl uppercase font-medium overflow-hidden transition-all duration-700 touch-manipulation"
          >
            <span className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative z-10">Reservar Mesa</span>
          </a>
          <a
            href="#carta"
            className="w-full sm:w-auto text-center px-10 sm:px-14 py-4 border border-cream-200/10 text-cream-200/90 text-[10px] tracking-widest-2xl uppercase font-extralight hover:border-gold-500/40 hover:text-gold-400 transition-all duration-700 touch-manipulation"
          >
            Explorar Carta
          </a>
        </div>
      </div>

      {/* Bottom scroll indicator — more elegant */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:1600ms]">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] tracking-widest-3xl text-cream-200/90 uppercase font-extralight">
            Descubre
          </span>
          <div className="relative w-px h-16">
            <div className="absolute inset-0 bg-gradient-to-b from-gold-500/40 to-transparent" />
            <div className="absolute top-0 w-px h-6 bg-gold-500/60 animate-pulse-subtle" />
          </div>
        </div>
      </div>
    </section>
  );
}
