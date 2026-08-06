/**
 * Gera o slug de URL de um projeto a partir do nome.
 * Usado tanto para montar os links quanto para resolvê-los em `/projects/:slug`,
 * então as duas pontas precisam compartilhar esta função.
 */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
