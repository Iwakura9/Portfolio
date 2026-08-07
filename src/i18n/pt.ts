/**
 * Dicionário de referência da interface.
 * `en.ts` é tipado contra este arquivo (`Dictionary`), então adicionar uma chave
 * aqui quebra o build até que a tradução correspondente exista.
 */
export const pt = {
  meta: {
    htmlLang: "pt-BR",
    title: "Gabriel Cavalcante — Ciência da Computação",
    description:
      "Portfólio de Gabriel de Sousa Cavalcante, estudante de Ciência da Computação na UFC e membro do PET Computação.",
  },

  nav: {
    projects: "Projetos",
    experience: "Experiência",
    theme: "Tema",
    language: "Idioma",
    toggleMenu: "Alternar menu",
  },

  hero: {
    avatarAlt: "Avatar de Gabriel de Sousa Cavalcante",
    headline: "Estudante de Ciência da Computação",
    headlineAccent: "Desenvolvimento de software e Linux.",
    // A frase é cortada ao meio pelos chips de tecnologia renderizados no JSX.
    bioBefore:
      "Graduando na UFC, atualmente no sexto semestre, e membro do PET Computação. Desenvolvo projetos completos com",
    bioAfter:
      "e compito em programação competitiva, com 2º lugar no Ceará no ICPC Regionals 2024.",
    contact: "Entre em contato",
    resume: "Currículo",
  },

  skills: {
    title: "Tecnologias",
    showAnimated: "Exibir linhas animadas",
    showList: "Exibir em lista",
    toggleView: "Alternar visualização das tecnologias",
  },

  projects: {
    sectionTitle: "Projetos",
    seeAll: "Ver todos os projetos",
    details: "Detalhes →",
    pageTitle: "Todos os projetos",
    pageSubtitle:
      "Projetos acadêmicos e pessoais desenvolvidos com foco em software útil, computação aplicada e aprendizado prático.",
    notFound: "Projeto não encontrado",
    back: "Voltar aos projetos",
    viewCode: "Ver código",
    openProject: "Abrir projeto",
    techUsed: "Tecnologias utilizadas",
    about: "Sobre o projeto",
    features: "Principais recursos",
  },

  experience: {
    sectionTitle: "Experiência & Formação",
    seeAll: "Ver trajetória",
    pageTitle: "Experiência & Formação",
    pageSubtitle:
      "Minha trajetória acadêmica, atuação no PET Computação e participação em iniciativas de ensino e extensão.",
    notFound: "Experiência não encontrada",
    back: "Voltar à trajetória",
    highlights: "Principais atividades e resultados",
  },

  contact: {
    title: "Vamos conversar",
    body: "Estou em Fortaleza e aberto a conversar sobre projetos, oportunidades, computação, Linux e desenvolvimento de software. Entre em contato por qualquer um dos canais ao lado.",
  },

  stats: {
    title: "Atividade no GitHub",
    loading: "Carregando atividade do GitHub...",
    loadError: "Não foi possível carregar a atividade do GitHub",
    scrollHint: "Role horizontalmente para visualizar",
    dateLocale: "pt-BR",
    activityTooltip: (date: string, count: number) =>
      `${date} • ${count} contribuiç${count === 1 ? "ão" : "ões"}`,
    contributionsInYear: (count: number, year: string) =>
      `${count} contribuiç${count === 1 ? "ão" : "ões"} em ${year}`,
  },

  footer: {
    designedBy: "Projetado e desenvolvido por",
  },

  visitors: {
    before: "Você é o visitante nº",
    after: "visitantes",
  },

  player: {
    play: "Tocar",
    pause: "Pausar",
  },

  common: {
    backHome: "Voltar ao início",
  },

  a11y: {
    themeSystem: "Tema do sistema",
    themeLight: "Tema claro",
    themeDark: "Tema escuro",
    langPt: "Português",
    langEn: "Inglês",
    openProject: (name: string) => `Abrir ${name}`,
    viewSource: (name: string) => `Ver código de ${name} no GitHub`,
  },
};

export type Dictionary = typeof pt;
