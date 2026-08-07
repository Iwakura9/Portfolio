import { createContext } from "react";
import type { Lang } from "./types";

export type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

// Fica isolado do provider para não quebrar o Fast Refresh, mesmo motivo de
// `ui/button-variants.ts` e `ui/tabs-variants.ts` existirem em arquivos próprios.
export const LanguageContext = createContext<LanguageContextValue | null>(null);
