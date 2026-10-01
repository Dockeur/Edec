import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import MobileNav from "./mobile-nav";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Présentation", href: "/presentation" },
  { label: "Services", href: "/services" },
  { label: "Réalisation", href: "/#realisations" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#24320F]/10 bg-[#F8FAF3]/95 shadow-[0_8px_32px_rgba(36,50,15,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/edec.png"
            alt="Logo EDEC"
            width={144}
            height={56}
            className="h-12 w-28 object-contain sm:h-14 sm:w-36"
            sizes="(max-width: 640px) 112px, 144px"
          />
        </Link>

        <nav className="hidden items-center gap-4 text-xs font-medium text-[#24320F] sm:gap-6 sm:text-sm md:flex md:gap-7">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="whitespace-nowrap py-1 transition-colors hover:text-[#70A030]">
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileNav items={navItems} />

        <Link
          href="/contact"
          className="hidden items-center justify-center rounded-full bg-[#90C030] px-4 py-2.5 text-xs font-bold text-[#24320F] shadow-[0_8px_24px_rgba(144,192,48,0.22)] transition hover:-translate-y-0.5 hover:bg-[#A0C040] sm:inline-flex sm:text-sm"
        >
          Demander un devis
        </Link>
      </div>
    </header>
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
    <div className="max-w-3xl">
      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${inverse ? "border-[#A0C040]/30 bg-[#90C030]/15 text-[#A0C040]" : "border-[#80B040]/30 bg-[#90C030]/10 text-[#24320F]"}`}>
        {eyebrow}
      </span>
      <h2 className={`mt-5 text-3xl font-bold tracking-[-0.045em] sm:text-4xl ${inverse ? "text-white" : "text-[#24320F]"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-8 ${inverse ? "text-white/70" : "text-slate-600"}`}>{description}</p> : null}
    </div>
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
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full border border-[#80B040]/30 bg-[#90C030]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#24320F]">
            {badge}
          </span>
          <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.06em] text-[#24320F] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{description}</p>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-[#A0C040]/35 blur-3xl" />
          <div className="absolute -right-4 bottom-4 h-32 w-32 rounded-full bg-[#90C030]/45 blur-3xl" />
          <div className="relative overflow-hidden rounded-[30px] border border-[#24320F]/10 bg-white p-2.5 shadow-[0_30px_80px_rgba(36,50,15,0.14)] sm:p-3">
            <img
              src={image}
              alt={title}
              className="h-[300px] w-full rounded-[24px] object-cover sm:h-[380px] lg:h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#24320F]/10 bg-[#F8FAF3]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="font-semibold text-slate-800">© 2025 EDEC. Tous droits réservés.</div>
        <div className="flex flex-wrap gap-5">
          <Link href="/" className="transition hover:text-[#70A030]">Accueil</Link>
          <Link href="/presentation" className="transition hover:text-[#70A030]">Présentation</Link>
          <Link href="/services" className="transition hover:text-[#70A030]">Services</Link>
          <Link href="/contact" className="transition hover:text-[#70A030]">Contact</Link>
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
