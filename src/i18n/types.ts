export type Lang = "pt" | "en";

export const LANGS: Lang[] = ["pt", "en"];

/**
 * Conteúdo que existe em cada idioma suportado.
 * Usado nos arquivos de `src/data` para manter as duas versões lado a lado,
 * de forma que o TypeScript acuse qualquer tradução esquecida.
 */
export type Localized<T> = Record<Lang, T>;
