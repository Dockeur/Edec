"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslate } from "./language-switcher";

const slides = [
  {
    title: "Une équipe de professionnels pour vous fournir le meilleur service possible en matière de Q.H.S.E.",
    description: "Environment Development Engineering Consulting (EDEC). Nous mettons nos experts à votre disposition afin de vous fournir des services de qualité.",
    image: "/images/hero/slide-1.jpg",
    imageAlt: "Intervention professionnelle EDEC sur le terrain",
    tag: "Ingénierie environnementale & QHSE",
  },
  {
    title: "Un cabinet d’ingénierie en Q.H.S.E d’excellence offrant des prestations de qualité en matière d’études.",
    description: "Environment Development Engineering Consulting (EDEC). Nous mettons nos experts à votre disposition afin de vous fournir des services de qualité.",
    image: "/images/hero/slide-2.jpeg",
    imageAlt: "Réalisation et expertise EDEC",
    tag: "Études • Audits • Conformité",
  },
  {
    title: "EDEC, votre partenaire de référence pour une transition réussie vers un développement durable.",
    description: "Environment Development Engineering Consulting (EDEC). Nous mettons nos experts à votre disposition afin de vous fournir des services de qualité.",
    image: "/images/hero/slide-4.jpg",
    imageAlt: "Équipe EDEC en visite dans une installation industrielle",
    tag: "Un partenaire de proximité au Cameroun",
  },
];

export default function HomeSlides() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];
  const t = useTranslate();

  function showSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      role="region"
      aria-label={t("Présentation d’EDEC")}
      aria-roledescription="carrousel"
      className="relative isolate flex min-h-[680px] items-end overflow-hidden bg-[#18230F] sm:min-h-[720px] lg:min-h-[min(790px,calc(100svh-88px))]"
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          aria-label={t(activeSlide.imageAlt)}
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${activeSlide.image})` }}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10190D]/85 via-[#10190D]/45 to-[#10190D]/5" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-10 pt-28 sm:px-8 sm:pb-12 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:pb-14">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.19em] text-white shadow-lg backdrop-blur-md sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-[#B9DD68] shadow-[0_0_12px_#B9DD68]" />
                {t(activeSlide.tag)}
              </span>
              <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white drop-shadow sm:text-5xl lg:text-6xl">
                {t(activeSlide.title)}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 drop-shadow sm:text-lg sm:leading-8">
                {t(activeSlide.description)}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/services" className="group inline-flex items-center gap-3 rounded-full bg-[#A6CF43] px-6 py-3.5 text-sm font-bold text-[#1B2910] shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:bg-[#B9DD68]">
                  {t("Découvrir nos services")} <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
                  {t("Parlons de votre projet")}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-end justify-between gap-6 border-t border-white/30 pt-5 lg:min-w-[230px] lg:flex-col lg:items-end lg:border-l lg:border-t-0 lg:pb-1 lg:pl-7 lg:pt-0">
          <div className="flex items-center gap-3" aria-label={t("Choisir une diapositive")}>
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                aria-label={t(`Afficher la diapositive ${index + 1}`)}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => showSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === activeIndex ? "w-12 bg-[#B9DD68]" : "w-5 bg-white/55 hover:bg-white"}`}
              />
            ))}
            <span className="ml-1 text-xs font-semibold tabular-nums tracking-[0.18em] text-white/80">0{activeIndex + 1} <span className="text-white/45">/ 0{slides.length}</span></span>
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label={t("Diapositive précédente")} onClick={() => showSlide(activeIndex - 1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xl text-white backdrop-blur transition hover:border-white hover:bg-white/20">
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" aria-label={t("Diapositive suivante")} onClick={() => showSlide(activeIndex + 1)} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A6CF43] text-xl text-[#1B2910] transition hover:bg-[#B9DD68]">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
