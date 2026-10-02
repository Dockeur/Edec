"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { translateText } from "../lib/i18n";
import { useLocale } from "./language-switcher";

const translatedAttributes = ["alt", "aria-label", "aria-roledescription", "placeholder", "title"];
const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();

function localizeNode(node: Node, locale: ReturnType<typeof useLocale>) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node as Text;
    const parentTag = text.parentElement?.tagName;
    if (parentTag === "SCRIPT" || parentTag === "STYLE" || parentTag === "NOSCRIPT") return;

    if (!originalText.has(text)) originalText.set(text, text.textContent ?? "");
    const source = originalText.get(text) ?? "";
    const translated = translateText(source, locale);
    if (text.textContent !== translated) text.textContent = translated;
    return;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return;
  const element = node as Element;
  let attributes = originalAttributes.get(element);
  if (!attributes) {
    attributes = new Map<string, string>();
    originalAttributes.set(element, attributes);
  }

  for (const name of translatedAttributes) {
    const value = element.getAttribute(name);
    if (value === null) continue;
    if (!attributes.has(name)) attributes.set(name, value);
    const translated = translateText(attributes.get(name) ?? value, locale);
    if (value !== translated) element.setAttribute(name, translated);
  }

  for (const child of Array.from(element.childNodes)) localizeNode(child, locale);
}

export default function LocalizedTree({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const sourceTitle = useRef<string | null>(null);

  useEffect(() => {
    const root = document.body;
    sourceTitle.current ??= document.title;
    const applyTitleTranslation = () => {
      const currentTitle = document.title;
      const translatedTitle = translateText(sourceTitle.current ?? currentTitle, locale);
      if (currentTitle !== translatedTitle) {
        if (currentTitle !== sourceTitle.current && currentTitle !== translatedTitle) {
          sourceTitle.current = currentTitle;
        }
        const nextTitle = translateText(sourceTitle.current ?? currentTitle, locale);
        if (document.title !== nextTitle) document.title = nextTitle;
      }
    };

    applyTitleTranslation();
    localizeNode(root, locale);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "characterData") {
          localizeNode(record.target, locale);
        } else {
          record.addedNodes.forEach((node) => localizeNode(node, locale));
          if (record.type === "attributes") localizeNode(record.target, locale);
        }
      }
    });

    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatedAttributes,
    });

    const titleObserver = new MutationObserver(applyTitleTranslation);
    titleObserver.observe(document.head, { subtree: true, childList: true, characterData: true });

    return () => {
      observer.disconnect();
      titleObserver.disconnect();
    };
  }, [locale]);

  return children;
}
