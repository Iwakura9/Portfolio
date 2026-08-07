import { cn } from "@/lib/utils";

/** Forma comum a `TechItem` e `SocialLink`. */
export type IconItem = {
  icon: string;
  darkIcon?: string;
};

type ThemedIconProps = {
  item: IconItem;
  /** Texto alternativo já resolvido no idioma atual. */
  alt: string;
  className?: string;
};

/**
 * A variante escura é trocada via CSS, e não por `resolvedTheme`, para que o
 * ícone certo já apareça na primeira pintura.
 */
const ThemedIcon = ({ item, alt, className }: ThemedIconProps) => {
  return (
    <span className="relative inline-flex shrink-0">
      <img
        src={item.icon}
        alt={alt}
        loading="lazy"
        className={cn("block", className, item.darkIcon && "dark:hidden")}
      />
      {item.darkIcon && (
        <img
          src={item.darkIcon}
          alt={alt}
          loading="lazy"
          className={cn("hidden dark:block", className)}
        />
      )}
    </span>
  );
};

export default ThemedIcon;
