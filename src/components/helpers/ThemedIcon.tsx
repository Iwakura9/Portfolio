import { cn } from "@/lib/utils";

/** Forma comum a `TechItem` e `SocialLink`. */
export type IconItem = {
  name: string;
  icon: string;
  darkIcon?: string;
};

type ThemedIconProps = {
  item: IconItem;
  className?: string;
};

/**
 * A variante escura é trocada via CSS, e não por `resolvedTheme`, para que o
 * ícone certo já apareça na primeira pintura.
 */
const ThemedIcon = ({ item, className }: ThemedIconProps) => {
  return (
    <span className="relative inline-flex shrink-0">
      <img
        src={item.icon}
        alt={item.name}
        loading="lazy"
        className={cn("block", className, item.darkIcon && "dark:hidden")}
      />
      {item.darkIcon && (
        <img
          src={item.darkIcon}
          alt={item.name}
          loading="lazy"
          className={cn("hidden dark:block", className)}
        />
      )}
    </span>
  );
};

export default ThemedIcon;
