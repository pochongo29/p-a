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

/* ═══════════════════════════════════════════════
   PUA BRASA Y VINO — Premium Restaurant Landing Page

   Visual direction: Dark, warm, cinematographic.
   Like stepping into an upscale steakhouse at golden hour.
   Palette: charcoal/black base, warm gold accents,
   burgundy wine, cream typography.

   Structure:
   1. Hero (cinematic full-screen with parallax)
   2. Experience / Concept (brand story)
   3. Chef's Philosophy (editorial quote moment)
   4. Signature Dishes (menu highlights)
   5. Wine Section (the cellar experience)
   6. Gallery (asymmetric masonry grid)
   7. Testimonials (social proof carousel)
   8. Location & Hours
   9. Reservation CTA
   10. Social / Contact
   11. Footer
   ═══════════════════════════════════════════════ */

export default function PuaRestaurantPage() {
  useScrollObserver();

  return (
    <main className="min-h-screen bg-brand-black">
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
