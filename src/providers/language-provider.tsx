import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "@/i18n/context";
import { dictionaries } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/types";

const STORAGE_KEY = "lang";
const DEFAULT_LANG: Lang = "pt";

const readStoredLang = (): Lang => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "pt" || stored === "en" ? stored : DEFAULT_LANG;
  } catch {
    // localStorage pode estar bloqueado (modo privado, cookies desativados).
    return DEFAULT_LANG;
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sem persistência: a escolha vale apenas para esta sessão.
    }
  }, []);

  // O `index.html` é estático, então título, descrição e `lang` do documento
  // precisam ser atualizados na troca de idioma.
  useEffect(() => {
    const { meta } = dictionaries[lang];

    document.documentElement.lang = meta.htmlLang;
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
