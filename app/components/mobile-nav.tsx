"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export default function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#24320F]/15 bg-white text-[#24320F] transition hover:border-[#90C030] hover:bg-[#90C030]/10"
      >
        <span className="sr-only">Menu</span>
        <span aria-hidden="true" className="flex w-5 flex-col gap-1">
          <span className="h-0.5 w-full bg-current" />
          <span className="h-0.5 w-full bg-current" />
          <span className="h-0.5 w-full bg-current" />
        </span>
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="absolute right-0 top-12 z-50 min-w-48 rounded-2xl border border-[#24320F]/10 bg-[#F8FAF3] p-2 shadow-[0_18px_45px_rgba(36,50,15,0.14)]"
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-[#24320F] transition hover:bg-[#90C030]/15 hover:text-[#70A030]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
