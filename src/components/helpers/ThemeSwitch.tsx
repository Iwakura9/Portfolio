import { Moon, Sun, TvMinimal } from "lucide-react";
import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useI18n } from "@/i18n/useI18n";

/** Estilo compartilhado com o `LanguageSwitch`, para os dois lerem como um par. */
export const switchListClass =
  "flex rounded-full border border-dashed border-border/70 bg-muted/30 gap-1 p-1";

export const switchTriggerClass =
  "rounded-full flex items-center justify-center bg-transparent text-muted-foreground transition-colors hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground! data-[state=active]:shadow-sm";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useI18n();
  const currentTheme = theme ?? "system";

  const themes = [
    { value: "system", icon: TvMinimal, label: t.a11y.themeSystem },
    { value: "light", icon: Sun, label: t.a11y.themeLight },
    { value: "dark", icon: Moon, label: t.a11y.themeDark },
  ];

  return (
    <Tabs
      value={currentTheme}
      onValueChange={(v) => setTheme(v as "light" | "dark" | "system")}
    >
      <TabsList className={switchListClass}>
        {themes.map(({ value, icon: Icon, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            aria-label={label}
            className={`h-6 w-6 ${switchTriggerClass}`}
          >
            <Icon className="size-[16px]" />
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitch;
