import type { Dictionary } from "./pt";

export const en: Dictionary = {
  meta: {
    htmlLang: "en",
    title: "Gabriel Cavalcante — Computer Science",
    description:
      "Portfolio of Gabriel de Sousa Cavalcante, Computer Science student at UFC and member of PET Computação.",
  },

  nav: {
    projects: "Projects",
    experience: "Experience",
    theme: "Theme",
    language: "Language",
    toggleMenu: "Toggle menu",
  },

  hero: {
    avatarAlt: "Avatar of Gabriel de Sousa Cavalcante",
    headline: "Computer Science student",
    headlineAccent: "Software development and Linux.",
    bioBefore:
      "Undergraduate at UFC, currently in my sixth semester, and a member of PET Computação. I build complete projects with",
    bioAfter:
      "and compete in competitive programming, with 2nd place in Ceará at ICPC Regionals 2024.",
    contact: "Get in touch",
    resume: "Resume",
  },

  skills: {
    title: "Technologies",
    showAnimated: "Show animated rows",
    showList: "Show as a list",
    toggleView: "Toggle technologies view",
  },

  projects: {
    sectionTitle: "Projects",
    seeAll: "See all projects",
    details: "Details →",
    pageTitle: "All projects",
    pageSubtitle:
      "Academic and personal projects built with a focus on useful software, applied computing and hands-on learning.",
    notFound: "Project not found",
    back: "Back to projects",
    viewCode: "View code",
    openProject: "Open project",
    techUsed: "Technologies used",
    about: "About the project",
    features: "Key features",
  },

  experience: {
    sectionTitle: "Experience & Education",
    seeAll: "See full path",
    pageTitle: "Experience & Education",
    pageSubtitle:
      "My academic path, work at PET Computação and participation in teaching and outreach initiatives.",
    notFound: "Experience not found",
    back: "Back to experience",
    highlights: "Key activities and results",
  },

  contact: {
    title: "Let's talk",
    body: "I'm based in Fortaleza and open to talking about projects, opportunities, computing, Linux and software development. Reach out through any of the channels on the side.",
  },

  stats: {
    title: "GitHub activity",
    loading: "Loading GitHub activity...",
    loadError: "Could not load GitHub activity",
    scrollHint: "Scroll horizontally to view",
    dateLocale: "en-US",
    activityTooltip: (date: string, count: number) =>
      `${date} • ${count} contribution${count === 1 ? "" : "s"}`,
    contributionsInYear: (count: number, year: string) =>
      `${count} contribution${count === 1 ? "" : "s"} in ${year}`,
  },

  footer: {
    designedBy: "Designed and developed by",
  },

  visitors: {
    before: "You are visitor no.",
    after: "visitors",
  },

  player: {
    play: "Play",
    pause: "Pause",
  },

  common: {
    backHome: "Back to home",
  },

  a11y: {
    themeSystem: "System theme",
    themeLight: "Light theme",
    themeDark: "Dark theme",
    langPt: "Portuguese",
    langEn: "English",
    openProject: (name: string) => `Open ${name}`,
    viewSource: (name: string) => `View ${name} source on GitHub`,
  },
};
