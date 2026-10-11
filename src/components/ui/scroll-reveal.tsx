"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const titles = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-title]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      titles.forEach((title) => title.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" },
    );

    titles.forEach((title) => observer.observe(title));
    return () => observer.disconnect();
  }, []);

  return null;
}
