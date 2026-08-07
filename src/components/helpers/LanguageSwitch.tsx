import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useI18n } from "@/i18n/useI18n";
import type { Lang } from "@/i18n/types";
import { switchListClass, switchTriggerClass } from "./ThemeSwitch";

const LanguageSwitch = () => {
  const { lang, setLang, t } = useI18n();

  const languages = [
    { value: "pt", short: "PT", label: t.a11y.langPt },
    { value: "en", short: "EN", label: t.a11y.langEn },
  ];

  return (
    <Tabs value={lang} onValueChange={(v) => setLang(v as Lang)}>
      <TabsList className={switchListClass}>
        {languages.map(({ value, short, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            aria-label={label}
            className={`h-6 px-2 text-[11px] font-medium tracking-wide ${switchTriggerClass}`}
          >
            {short}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default LanguageSwitch;
