/**
 * `mailto:` e `tel:` devem abrir no handler do sistema, não em uma nova aba.
 * Retorna os atributos de âncora adequados ao tipo de href.
 */
export function externalLinkProps(href: string) {
  const isSameWindow = href.startsWith("mailto:") || href.startsWith("tel:");

  return isSameWindow
    ? {}
    : { target: "_blank" as const, rel: "noreferrer" as const };
}
