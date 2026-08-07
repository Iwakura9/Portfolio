import { projectTech } from "@/data/tech";
import type { TechItem } from "@/data/tech";
import type { Localized } from "@/i18n/types";

export interface Project {
  /** Estável e independente de idioma: define a URL em `/projects/:slug`. */
  slug: string;
  name: Localized<string>;
  imgSrc: string;
  description: Localized<string>;
  techStack: TechItem[];
  liveLink?: string;
  liveLabel?: Localized<string>;
  githubLink: string;
  about: Localized<string>;
  features: Localized<string[]>;
}

export const projects: Project[] = [
  {
    slug: "wpaper",
    name: { pt: "wpaper", en: "wpaper" },
    imgSrc: "/projects/wpaper.svg",
    description: {
      pt: "Aplicação TUI para anotações e organização pessoal, criada para um fluxo local, rápido e orientado ao teclado no Linux.",
      en: "TUI application for notes and personal organization, built for a local, fast, keyboard-driven workflow on Linux.",
    },
    about: {
      pt: "O wpaper é uma aplicação de terminal para gerenciamento de anotações, tarefas e informações pessoais. A interface é construída com Textual, a persistência usa SQLite e as notas permanecem disponíveis como arquivos Markdown, permitindo edição direta fora da aplicação e integração com ferramentas como o Neovim.",
      en: "wpaper is a terminal application for managing notes, tasks and personal information. The interface is built with Textual, persistence uses SQLite, and notes remain available as Markdown files, allowing direct editing outside the application and integration with tools such as Neovim.",
    },
    features: {
      pt: [
        "Criação e gerenciamento de anotações pelo terminal",
        "Registro e organização de tarefas",
        "Dashboard com informações e estatísticas",
        "Navegação por atalhos de teclado e suporte a mouse",
        "Persistência local com SQLite",
        "Notas armazenadas em Markdown e integradas ao fluxo com Neovim",
      ],
      en: [
        "Creating and managing notes from the terminal",
        "Recording and organizing tasks",
        "Dashboard with information and statistics",
        "Keyboard-shortcut navigation with mouse support",
        "Local persistence with SQLite",
        "Notes stored in Markdown and integrated into the Neovim workflow",
      ],
    },
    techStack: [
      projectTech.python,
      projectTech.textual,
      projectTech.sqlite,
      projectTech.markdown,
      projectTech.linux,
    ],
    githubLink: "https://github.com/Iwakura9/wpaper",
  },
  {
    slug: "leitor-de-gabarito",
    name: { pt: "Leitor de Gabarito", en: "Answer Sheet Reader" },
    imgSrc: "/projects/leitor-gabarito.svg",
    description: {
      pt: "Backend para processamento e correção automatizada de gabaritos da OCI, com API para upload e manipulação dos dados.",
      en: "Backend for automated processing and grading of OCI answer sheets, with an API for uploading and handling the data.",
    },
    about: {
      pt: "Projeto desenvolvido para o processo seletivo do PET Computação UFC. Minha atuação foi concentrada no backend do sistema, responsável por integrar o processamento em C ao serviço web e centralizar em SQLite os dados usados na leitura e correção dos gabaritos.",
      en: "Project developed for the PET Computação UFC selection process. My work focused on the system backend, responsible for integrating the C processing into the web service and centralizing in SQLite the data used to read and grade the answer sheets.",
    },
    features: {
      pt: [
        "Processamento automatizado de gabaritos",
        "Backend desenvolvido para o fluxo da Olimpíada Cearense de Informática",
        "Integração entre o leitor implementado em C e a aplicação web",
        "Endpoints para upload e manipulação dos dados",
        "Persistência e organização das informações com SQLite",
        "Desenvolvimento colaborativo com divisão entre frontend, backend e banco de dados",
      ],
      en: [
        "Automated answer sheet processing",
        "Backend built for the Ceará Informatics Olympiad workflow",
        "Integration between the reader implemented in C and the web application",
        "Endpoints for uploading and handling the data",
        "Persistence and organization of the information with SQLite",
        "Collaborative development split between frontend, backend and database",
      ],
    },
    techStack: [
      projectTech.c,
      projectTech.python,
      projectTech.djangoRest,
      projectTech.sqlite,
    ],
    githubLink: "https://github.com/Iwakura9/Lagostinha",
  },
  {
    slug: "unpoppable",
    name: { pt: "Unpoppable", en: "Unpoppable" },
    imgSrc: "/projects/unpoppable_demo.png",
    description: {
      pt: "Jogo top-down 2D de sobrevivência com hordas, progressão de dificuldade, novas armas e suporte para Linux e Windows.",
      en: "2D top-down survival game with hordes, escalating difficulty, new weapons and support for Linux and Windows.",
    },
    about: {
      pt: "Unpoppable foi desenvolvido do zero em Godot como projeto da disciplina de Programação para Jogos. O jogador controla Balum, um balão que precisa sobreviver a ondas de macacos inimigos; a cada rodada, a dificuldade aumenta e novas armas são liberadas.",
      en: "Unpoppable was built from scratch in Godot as a project for the Game Programming course. The player controls Balum, a balloon that has to survive waves of enemy monkeys; each round raises the difficulty and unlocks new weapons.",
    },
    features: {
      pt: [
        "Movimentação top-down com teclado",
        "Sistema de disparos e combate com o mouse",
        "Ondas de inimigos com dificuldade progressiva",
        "Desbloqueio de novas armas ao longo das rodadas",
        "Sistema de vidas com feedback visual no personagem",
        "Builds disponíveis para Linux e Windows",
      ],
      en: [
        "Top-down movement with the keyboard",
        "Shooting and combat system with the mouse",
        "Enemy waves with progressive difficulty",
        "New weapons unlocked across the rounds",
        "Lives system with visual feedback on the character",
        "Builds available for Linux and Windows",
      ],
    },
    techStack: [
      projectTech.godot,
    ],
    liveLink: "https://github.com/Iwakura9/Unpoppable/releases",
    liveLabel: { pt: "Releases", en: "Releases" },
    githubLink: "https://github.com/Iwakura9/Unpoppable",
  },
  {
    slug: "portfolio",
    name: { pt: "Portfólio", en: "Portfolio" },
    imgSrc: "/projects/portfolio.png",
    description: {
      pt: "Este próprio portfólio: construído com React e Vite para apresentar projetos, experiência acadêmica, tecnologias e atividade no GitHub.",
      en: "This very portfolio: built with React and Vite to showcase projects, academic experience, technologies and GitHub activity.",
    },
    about: {
      pt: "Portfólio pessoal orientado por dados, com troca de tema, rolagem suave e seções animadas. O contador de visitantes no rodapé usa um fingerprint gerado localmente no navegador, enviado a um endpoint serverless na Vercel que persiste os dados no Supabase.",
      en: "Data-driven personal portfolio with theme switching, smooth scrolling and animated sections. The visitor counter in the footer uses a fingerprint generated locally in the browser, sent to a serverless endpoint on Vercel that persists the data in Supabase.",
    },
    features: {
      pt: [
        "Página inicial com apresentação, tecnologias, projetos, experiência acadêmica e atividade no GitHub",
        "Páginas dedicadas para projetos, experiência e contato, com rotas de detalhe",
        "Troca de tema com suporte a sistema, claro e escuro",
        "Troca de idioma entre português e inglês, com a escolha persistida",
        "Rolagem suave e revelações de seção animadas com Framer Motion",
        "Contador de visitantes no rodapé com fingerprint gerado localmente",
        "API serverless na Vercel com persistência em Supabase",
      ],
      en: [
        "Home page with introduction, technologies, projects, academic experience and GitHub activity",
        "Dedicated pages for projects, experience and contact, with detail routes",
        "Theme switching with system, light and dark support",
        "Language switching between Portuguese and English, with the choice persisted",
        "Smooth scrolling and animated section reveals with Framer Motion",
        "Visitor counter in the footer with a locally generated fingerprint",
        "Serverless API on Vercel with persistence in Supabase",
      ],
    },
    techStack: [
      projectTech.react,
      projectTech.typescript,
      projectTech.vite,
      projectTech.tailwindcss,
      projectTech.supabase,
    ],
    githubLink: "https://github.com/Iwakura9/Portfolio",
  },
];

// End of projects data
