"use client";

import { useEffect } from "react";

/**
 * Intersection Observer hook for scroll-triggered animations.
 * Watches elements with animation trigger classes and adds `.is-visible`
 * when they enter the viewport. One-shot: once visible, stays visible.
 *
 * Supported classes:
 * - .observe-fade (translateY reveal)
 * - .observe-fade-left (translateX from left)
 * - .observe-fade-right (translateX from right)
 * - .observe-scale (scale reveal for images)
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
      { threshold: 0.06, rootMargin: "0px 0px -60px 0px" }
    );

    const selectors = [
      ".observe-fade",
      ".observe-fade-left",
      ".observe-fade-right",
      ".observe-scale",
    ];

    document
      .querySelectorAll(selectors.join(","))
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
