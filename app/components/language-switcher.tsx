"use client";

import { useSyncExternalStore } from "react";
import { isLocale, localeLabels, locales, type Locale, translateText } from "../lib/i18n";

const STORAGE_KEY = "edec-locale";
let localeSnapshot: Locale = "fr";

if (typeof window !== "undefined") {
  const storedLocale = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(storedLocale)) localeSnapshot = storedLocale;
}

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return localeSnapshot;
}

function getServerSnapshot(): Locale {
  return "fr";
}

function notifyLocaleChange() {
  listeners.forEach((listener) => listener());
}

export function setLocale(nextLocale: Locale) {
  if (typeof window === "undefined") return;
  localeSnapshot = nextLocale;
  window.localStorage.setItem(STORAGE_KEY, nextLocale);
  document.documentElement.lang = nextLocale;
  notifyLocaleChange();
}

export function useLocale() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useTranslate() {
  const locale = useLocale();
  return (text: string) => translateText(text, locale);
}

export default function LanguageSwitcher() {
  const locale = useLocale();

  function changeLocale(nextLocale: Locale) {
    setLocale(nextLocale);
  }

  return (
    <div className="flex items-center rounded-full border border-[#24320F]/15 bg-white/70 p-1" aria-label={translateText("Choisir la langue", locale)}>
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={locale === item}
          onClick={() => changeLocale(item)}
          className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] transition ${locale === item ? "bg-[#24320F] text-white" : "text-[#24320F]/60 hover:text-[#24320F]"}`}
        >
          {localeLabels[item]}
        </button>
      ))}
    </div>
  );
}
