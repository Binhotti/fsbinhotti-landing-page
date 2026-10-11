"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { src: string; category: string; title: string };

const clamp = (value: number) => Math.min(1, Math.max(0, value));

function Arrow({ direction }: { direction: "up" | "down" }) {
  return (
    <svg className={direction === "up" ? "vertical-arrow-up" : "vertical-arrow-down"} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m12 19-7-7 7-7M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CarouselVertical({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollStep, setScrollStep] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (slides.length < 2) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setReduceMotion(motionPreference.matches);
    syncMotionPreference();
    motionPreference.addEventListener("change", syncMotionPreference);

    let frame = 0;
    const syncWithPage = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const track = trackRef.current;
        const sticky = stickyRef.current;
        if (!track || !sticky) return;

        const start = window.scrollY + track.getBoundingClientRect().top;
        const distance = track.offsetHeight - sticky.offsetHeight;
        const progress = clamp((window.scrollY - start) / distance) * (slides.length - 1);
        const index = Math.min(slides.length - 1, Math.floor(progress + 0.001));
        setScrollStep((current) => Math.abs(current - progress) < 0.001 ? current : progress);
        setActiveIndex((current) => current === index ? current : index);
      });
    };

    syncWithPage();
    window.addEventListener("scroll", syncWithPage, { passive: true });
    window.addEventListener("resize", syncWithPage);
    return () => {
      cancelAnimationFrame(frame);
      motionPreference.removeEventListener("change", syncMotionPreference);
      window.removeEventListener("scroll", syncWithPage);
      window.removeEventListener("resize", syncWithPage);
    };
  }, [slides.length]);

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky || slides.length < 2) return;
    const start = window.scrollY + track.getBoundingClientRect().top;
    const distance = track.offsetHeight - sticky.offsetHeight;
    const nextIndex = Math.min(slides.length - 1, Math.max(0, index));
    window.scrollTo({ top: start + distance * nextIndex / (slides.length - 1), behavior: "smooth" });
  };

  if (slides.length === 0) return null;

  const revealFor = (index: number) => index === 0 ? 1 : reduceMotion
    ? Number(scrollStep >= index)
    : clamp((scrollStep - (index - 1) - 0.18) / 0.82);

  return (
    <div className="projects-scroll-track" ref={trackRef} style={{ height: `calc(100vh + ${(slides.length - 1) * 75}vh)` }}>
      <div className="projects-scroll-sticky" ref={stickyRef}>
        <div className="vertical-carousel-layout">
        <div className="vertical-carousel" role="region" aria-roledescription="carrossel" aria-label="Imagens de projetos da FS Binhotti" onKeyDown={(event) => {
          if (event.key === "ArrowUp") { event.preventDefault(); goToSlide(activeIndex - 1); }
          if (event.key === "ArrowDown") { event.preventDefault(); goToSlide(activeIndex + 1); }
        }}>
          <div className="vertical-carousel-viewport">
            {slides.map((slide, index) => {
              const reveal = revealFor(index);
              const covered = reduceMotion ? 0 : clamp(scrollStep - index);

              return (
                <div
                  className="vertical-carousel-item"
                  key={slide.src}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={slide.title}
                  aria-hidden={index !== activeIndex}
                  style={{ transform: `translate3d(0, ${100 * (1 - reveal)}%, 0)`, zIndex: index }}
                >
                  <div className="vertical-carousel-frame" style={{ transform: `scale(${1 - covered * 0.045})`, filter: `brightness(${1 - covered * 0.16})` }}>
                    <Image src={slide.src} alt={slide.title} fill sizes="(max-width: 1100px) 100vw, 1200px" />
                  </div>
                </div>
              );
            })}
          </div>
          <button type="button" className="vertical-carousel-control vertical-carousel-previous" onClick={() => goToSlide(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Imagem anterior" title="Imagem anterior"><Arrow direction="up" /></button>
          <button type="button" className="vertical-carousel-control vertical-carousel-next" onClick={() => goToSlide(activeIndex + 1)} disabled={activeIndex === slides.length - 1} aria-label="Próxima imagem" title="Próxima imagem"><Arrow direction="down" /></button>
        </div>
        <div className="vertical-carousel-notes" aria-live="off">
          {slides.map((slide, index) => {
            const incoming = index === 0 ? 1 : clamp((revealFor(index) - 0.15) / 0.35);
            const outgoing = index < slides.length - 1 ? 1 - clamp((revealFor(index + 1) - 0.1) / 0.35) : 1;
            const visibility = incoming * outgoing;

            return (
              <div
                className="vertical-carousel-caption"
                key={slide.src}
                aria-hidden={index !== activeIndex}
                style={{ opacity: visibility, filter: `blur(${(1 - visibility) * 6}px)`, transform: `translate3d(0, ${(1 - visibility) * 12}px, 0)` }}
              >
                <span className="vertical-carousel-caption-rule" />
                <span className="vertical-carousel-caption-category">{slide.category}</span>
                <h3>{slide.title}</h3>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}
