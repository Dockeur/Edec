"use client";

import { useState } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Une équipe de professionnels pour vous fournir le meilleur service possible en matière de Q.H.S.E.",
    description:
      "Environment Development Engineering Consulting (EDEC). Nous mettons nos experts à votre disposition afin de vous fournir des services de qualité.",
  },
  {
    title:
      "Un cabinet d’ingénierie en Q.H.S.E d’excellence offrant des prestations de qualité en matière d’études.",
    description:
      "Environment Development Engineering Consulting (EDEC). Nous mettons nos experts à votre disposition afin de vous fournir des services de qualité.",
  },
  {
    title:
      "EDEC, votre partenaire de référence pour une transition réussie vers un développement durable.",
    description:
      "Environment Development Engineering Consulting (EDEC). Nous mettons nos experts à votre disposition afin de vous fournir des services de qualité.",
  },
];

export default function HomeSlides() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  function showSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  return (
    <div
      role="region"
      aria-label="Présentation d’EDEC"
      aria-roledescription="carrousel"
      className="flex min-h-[390px] flex-col justify-center sm:min-h-[430px]"
    >
      <div aria-live="polite" aria-atomic="true" className="premium-reveal" key={activeIndex}>
        <span className="inline-flex items-center rounded-full border border-[#80B040]/30 bg-[#90C030]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#24320F]">
          Environment Development Engineering Consulting
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.055em] text-[#24320F] sm:text-5xl lg:text-6xl">
          {activeSlide.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          {activeSlide.description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" aria-label="Choisir une diapositive">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Afficher la diapositive ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => showSlide(index)}
              className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-[#70A030]" : "w-2.5 bg-[#80B040]/40 hover:bg-[#80B040]"}`}
            />
          ))}
          <span className="ml-2 text-xs font-semibold tabular-nums text-[#24320F]/65">
            0{activeIndex + 1} / 0{slides.length}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Diapositive précédente"
            onClick={() => showSlide(activeIndex - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#24320F]/15 bg-white text-lg text-[#24320F] transition hover:border-[#90C030] hover:bg-[#90C030]/10"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Diapositive suivante"
            onClick={() => showSlide(activeIndex + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#90C030] text-lg text-[#24320F] transition hover:bg-[#A0C040]"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-full bg-[#90C030] px-6 py-3 text-sm font-bold text-[#24320F] shadow-[0_18px_35px_rgba(144,192,48,0.24)] transition hover:-translate-y-0.5 hover:bg-[#A0C040]"
        >
          Découvrir nos services
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-[#dfeee2] bg-white px-6 py-3 text-sm font-semibold text-[#24320F] transition hover:border-[#90C030]"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
