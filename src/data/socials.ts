export interface SocialLink {
  name: string;
  icon: string;
  darkIcon?: string;
  href: string;
}

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
    href: "https://github.com/Iwakura9",
  },
  {
    name: "Linkedin",
    icon: "/social/linkedin.svg",
    darkIcon: "/social/linkedin-dark.svg",
    href: "https://linkedin.com/in/sousa-dev",
  },
  {
    name: "Gmail",
    icon: "/social/gmail.svg",
    href: "mailto:sousa.cc.uni@gmail.com",
  },
  {
    name: "Telefone",
    icon: "/social/phone.svg",
    href: "tel:+5585989708715",
  },
];
