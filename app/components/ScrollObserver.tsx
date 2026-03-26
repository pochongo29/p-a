"use client";

import { useEffect } from "react";

/**
 * Intersection Observer hook for scroll-triggered fade-in animations.
 * Watches elements with `.observe-fade` and adds `.is-visible` when they
 * enter the viewport. One-shot: once visible, stays visible.
 */
export function useScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".observe-fade").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
