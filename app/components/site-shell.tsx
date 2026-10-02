"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { navigationLabels, translateText } from "../lib/i18n";
import { Floating, Reveal } from "./motion";
import LanguageSwitcher, { useLocale } from "./language-switcher";
import MobileNav from "./mobile-nav";

const navItems = [
  { key: "accueil", href: "/" },
  { key: "presentation", href: "/presentation" },
  { key: "services", href: "/services" },
  { key: "realisation", href: "/realisations" },
  { key: "contact", href: "/contact" },
];

export function SiteHeader({ id }: { id?: string } = {}) {
  const locale = useLocale();
  const labels = navigationLabels[locale];
  const localizedItems = navItems.map((item) => ({ ...item, label: labels[item.key] }));

  return (
    <motion.header
      id={id}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[#24320F]/10 bg-[#F8FAF3]/95 shadow-[0_8px_32px_rgba(36,50,15,0.06)] backdrop-blur-xl"
    >
      <div className="hidden bg-[#24320F] text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[11px] lg:px-8">
          <div className="flex items-center gap-2 font-medium tracking-wide text-white/85">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A0C040] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A0C040]" />
            </span>
            {translateText("Expertise environnementale, QHSE & développement durable", locale)}
          </div>
          <span className="font-semibold tracking-[0.12em] text-[#C4E27A]">DOUALA · CAMEROUN</span>
        </div>
      </div>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label={translateText("EDEC, accueil", locale)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-[0_5px_18px_rgba(36,50,15,0.1)] transition duration-300 group-hover:-rotate-6 group-hover:scale-105 sm:h-12 sm:w-12">
            <Image src="/images/edec.png" alt="" width={42} height={42} className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-[0.12em] text-[#24320F] sm:text-xl">EDEC</span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#70A030] sm:text-[10px]">Engineering & Consulting</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-semibold text-[#24320F] lg:flex lg:gap-2">
          {localizedItems.map((item, index) => (
            <motion.div key={item.key} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + index * 0.06 }}>
              <Link href={item.href} className="group relative inline-flex whitespace-nowrap px-3 py-3 transition-colors hover:text-[#70A030] lg:px-3.5">
                {item.label}
                <span aria-hidden="true" className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-[#90C030] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <MobileNav items={localizedItems} />
          <motion.div whileHover={{ y: -2, scale: 1.025 }} whileTap={{ scale: 0.97 }} className="hidden lg:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#90C030] px-4 py-3 text-xs font-extrabold text-[#24320F] shadow-[0_8px_24px_rgba(144,192,48,0.25)] transition hover:bg-[#A0C040] sm:text-sm"
            >
              {labels.contacter}
              <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-[#24320F]/10 text-base transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <Reveal className="max-w-3xl">
      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${inverse ? "border-[#A0C040]/30 bg-[#90C030]/15 text-[#A0C040]" : "border-[#80B040]/30 bg-[#90C030]/10 text-[#24320F]"}`}>
        {eyebrow}
      </span>
      <h2 className={`mt-5 text-3xl font-bold tracking-[-0.045em] sm:text-4xl ${inverse ? "text-white" : "text-[#24320F]"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-8 ${inverse ? "text-white/70" : "text-slate-600"}`}>{description}</p> : null}
    </Reveal>
  );
}

export function PageHero({
  badge,
  title,
  description,
  image,
}: {
  badge: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,_rgba(144,192,48,0.18),_transparent_30%),radial-gradient(circle_at_90%_78%,_rgba(128,176,64,0.12),_transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <Reveal direction="left" className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full border border-[#80B040]/30 bg-[#90C030]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#24320F]">
            {badge}
          </span>
          <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.06em] text-[#24320F] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{description}</p>
        </Reveal>

        <Reveal direction="right" className="relative">
          <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-[#A0C040]/35 blur-3xl" />
          <div className="absolute -right-4 bottom-4 h-32 w-32 rounded-full bg-[#90C030]/45 blur-3xl" />
          <Floating className="relative overflow-hidden rounded-[30px] border border-[#24320F]/10 bg-white p-2.5 shadow-[0_30px_80px_rgba(36,50,15,0.14)] sm:p-3">
            <img
              src={image}
              alt={title}
              className="h-[300px] w-full rounded-[24px] object-cover sm:h-[380px] lg:h-[460px]"
            />
          </Floating>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const locale = useLocale();
  return (
    <footer className="border-t border-[#24320F]/10 bg-[#F8FAF3]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="font-semibold text-slate-800">{translateText("© 2023 EDEC. Tous droits réservés.", locale)}</div>
        <div className="flex flex-wrap gap-5">
          <Link href="/" className="transition hover:text-[#70A030]">{translateText("Accueil", locale)}</Link>
          <Link href="/presentation" className="transition hover:text-[#70A030]">{translateText("Présentation", locale)}</Link>
          <Link href="/services" className="transition hover:text-[#70A030]">{translateText("Services", locale)}</Link>
          <Link href="/realisations" className="transition hover:text-[#70A030]">{translateText("Réalisations", locale)}</Link>
          <Link href="/contact" className="transition hover:text-[#70A030]">{translateText("Contact", locale)}</Link>
        </div>
      </div>
    </footer>
  );
}

export function FeatureCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-[28px] border border-[#24320F]/10 bg-white p-6 shadow-[0_20px_50px_rgba(36,50,15,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(36,50,15,0.1)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#90C030]/15 text-[#70A030]">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}
