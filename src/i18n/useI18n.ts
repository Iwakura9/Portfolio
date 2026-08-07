import { useCallback, useContext } from "react";
import { LanguageContext } from "./context";
import { dictionaries } from "./dictionaries";
import type { Localized } from "./types";

/**
 * Acesso ao idioma atual.
 *
 * - `t` é o dicionário da UI, acessado por propriedade (`t.nav.projects`).
 * - `pick` resolve os campos `Localized<T>` dos arquivos de `src/data`.
 */
export function useI18n() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useI18n precisa ser usado dentro de <LanguageProvider>");
  }

  const { lang, setLang } = context;

  const pick = useCallback(
    <T>(value: Localized<T>): T => value[lang],
    [lang],
  );

  return { lang, setLang, t: dictionaries[lang], pick };
}
