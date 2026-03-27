"use client";

import { useScrollObserver } from "./components/ScrollObserver";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { DishesSection } from "./components/DishesSection";
import { WineSection } from "./components/WineSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { LocationSection } from "./components/LocationSection";
import { ReservationSection } from "./components/ReservationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

/* ═══════════════════════════════════════════════
   PUA BRASA Y VINO — Michelin Star Edition

   Visual direction: Noma meets Mexican fire.
   Editorial, cinematic, unapologetically premium.
   Deep warm darks, restrained gold, wine accents.

   Structure:
   1. Hero (cinematic full-screen with parallax)
   2. Experience / Concept (editorial brand story)
   3. Chef's Philosophy (full-screen quote moment)
   4. Signature Dishes (magazine-style spread)
   5. Wine Section (intimate cellar experience)
   6. Gallery (cinematic asymmetric grid)
   7. Testimonials (theatrical quote carousel)
   8. Location & Hours
   9. Reservation CTA (the crescendo)
   10. Social / Contact
   11. Footer
   ═══════════════════════════════════════════════ */

export default function PuaRestaurantPage() {
  useScrollObserver();

  return (
    <main className="min-h-screen bg-brand-black noise-overlay">
      <CustomCursor />
      <Navbar />
      <HeroSection />

      <div className="section-divider" />

      <ExperienceSection />
      <PhilosophySection />
      <DishesSection />

      <div className="section-divider" />

      <WineSection />
      <GallerySection />

      <div className="section-divider" />

      <TestimonialsSection />
      <LocationSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
