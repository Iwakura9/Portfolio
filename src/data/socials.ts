import type { Localized } from "@/i18n/types";

export interface SocialLink {
  name: Localized<string>;
  icon: string;
  darkIcon?: string;
  href: string;
}

import { githubUrl } from "./site";

export const socials: SocialLink[] = [
  {
    name: { pt: "GitHub", en: "GitHub" },
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
    href: githubUrl,
  },
  {
    name: { pt: "Linkedin", en: "Linkedin" },
    icon: "/social/linkedin.svg",
    darkIcon: "/social/linkedin-dark.svg",
    href: "https://linkedin.com/in/sousa-dev",
  },
  {
    name: { pt: "Gmail", en: "Gmail" },
    icon: "/social/gmail.svg",
    href: "mailto:sousa.cc.uni@gmail.com",
  },
  {
    name: { pt: "Telefone", en: "Phone" },
    icon: "/social/phone.svg",
    href: "tel:+5585989708715",
  },
];
