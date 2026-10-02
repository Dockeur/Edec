"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { translateText } from "../lib/i18n";
import { useLocale } from "./language-switcher";

type NavItem = {
  label: string;
  href: string;
};

export default function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={translateText(isOpen ? "Fermer le menu" : "Ouvrir le menu", locale)}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#24320F]/10 bg-white text-[#24320F] shadow-sm transition hover:border-[#90C030] hover:bg-[#90C030]/10"
      >
        <span className="sr-only">{translateText("Menu", locale)}</span>
        <span aria-hidden="true" className="flex h-4 w-5 flex-col justify-between">
          <motion.span animate={isOpen ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }} className="h-0.5 w-full rounded-full bg-current" />
          <motion.span animate={isOpen ? { opacity: 0, scaleX: 0.4 } : { opacity: 1, scaleX: 1 }} className="h-0.5 w-full rounded-full bg-current" />
          <motion.span animate={isOpen ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }} className="h-0.5 w-full rounded-full bg-current" />
        </span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-[3.5rem] z-50 w-64 overflow-hidden rounded-[24px] border border-[#24320F]/10 bg-[#F8FAF3] p-2 shadow-[0_22px_60px_rgba(36,50,15,0.2)]"
          >
            <div className="mb-1 rounded-2xl bg-[#24320F] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C4E27A]">
              {translateText("Explorer EDEC", locale)}
            </div>
            {items.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#24320F] transition hover:bg-[#90C030]/15 hover:text-[#70A030]"
                >
                  {item.label}
                  <span aria-hidden="true" className="translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">→</span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
