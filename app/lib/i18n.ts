import enTranslations from "./translations-en";

export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
};

export const navigationLabels: Record<Locale, Record<string, string>> = {
  fr: {
    accueil: "Accueil",
    presentation: "Présentation",
    services: "Services",
    realisation: "Réalisations",
    contact: "Contact",
    contacter: "Contacter",
  },
  en: {
    accueil: "Home",
    presentation: "About",
    services: "Services",
    realisation: "Projects",
    contact: "Contact",
    contacter: "Contact us",
  },
};

export function isLocale(value: string | null): value is Locale {
  return value === "fr" || value === "en";
}

export function translateText(text: string, locale: Locale): string {
  if (locale === "fr") return text;

  const leadingWhitespace = text.match(/^\s*/)?.[0] ?? "";
  const trailingWhitespace = text.match(/\s*$/)?.[0] ?? "";
  const normalized = text.trim().replace(/\s+/g, " ");
  let translated = enTranslations[normalized];

  if (!translated) {
    const dynamicPatterns: Array<[RegExp, (match: RegExpMatchArray) => string]> = [
      [/^Afficher la diapositive (\d+)$/, (match) => `Show slide ${match[1]}`],
      [/^Expertise 0(\d+)$/, (match) => `Expertise 0${match[1]}`],
      [/^Agrandir\s*:\s*(.+)$/, (match) => `Enlarge: ${translateText(match[1], locale)}`],
      [/^Illustration\s*:\s*(.+)$/, (match) => `Illustration: ${translateText(match[1], locale)}`],
      [/^Photo de réalisation\s+(.+)$/, (match) => `Project photo: ${translateText(match[1], locale)}`],
    ];

    for (const [pattern, format] of dynamicPatterns) {
      const match = normalized.match(pattern);
      if (match) {
        translated = format(match);
        break;
      }
    }
  }

  return translated ? `${leadingWhitespace}${translated}${trailingWhitespace}` : text;
}
