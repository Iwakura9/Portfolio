import { projectTech } from "@/data/tech";
import type { TechItem } from "@/data/tech";

export interface Project {
  name: string;
  imgSrc: string;
  description: string;
  techStack: TechItem[];
  liveLink?: string;
  liveLabel?: string;
  githubLink: string;
  about: string;
  features: string[];
}

export const projects: Project[] = [
  {
    name: "wpaper",
    imgSrc: "/projects/wpaper.svg",
    description:
      "Aplicação TUI para anotações e organização pessoal, criada para um fluxo local, rápido e orientado ao teclado no Linux.",
    about:
      "O wpaper é uma aplicação de terminal para gerenciamento de anotações, tarefas e informações pessoais. A interface é construída com Textual, a persistência usa SQLite e as notas permanecem disponíveis como arquivos Markdown, permitindo edição direta fora da aplicação e integração com ferramentas como o Neovim.",
    features: [
      "Criação e gerenciamento de anotações pelo terminal",
      "Registro e organização de tarefas",
      "Dashboard com informações e estatísticas",
      "Navegação por atalhos de teclado e suporte a mouse",
      "Persistência local com SQLite",
      "Notas armazenadas em Markdown e integradas ao fluxo com Neovim",
    ],
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
    name: "Leitor de Gabarito",
    imgSrc: "/projects/leitor-gabarito.svg",
    description:
      "Backend para processamento e correção automatizada de gabaritos da OCI, com API para upload e manipulação dos dados.",
    about:
      "Projeto desenvolvido para o processo seletivo do PET Computação UFC. Minha atuação foi concentrada no backend do sistema, responsável por integrar o processamento em C ao serviço web e centralizar em SQLite os dados usados na leitura e correção dos gabaritos.",
    features: [
      "Processamento automatizado de gabaritos",
      "Backend desenvolvido para o fluxo da Olimpíada Cearense de Informática",
      "Integração entre o leitor implementado em C e a aplicação web",
      "Endpoints para upload e manipulação dos dados",
      "Persistência e organização das informações com SQLite",
      "Desenvolvimento colaborativo com divisão entre frontend, backend e banco de dados",
    ],
    techStack: [
      projectTech.c,
      projectTech.python,
      projectTech.djangoRest,
      projectTech.sqlite,
    ],
    githubLink: "https://github.com/Iwakura9/Lagostinha",
  },
  {
    name: "Unpoppable",
    imgSrc: "/projects/unpoppable.svg",
    description:
      "Jogo top-down 2D de sobrevivência com hordas, progressão de dificuldade, novas armas e suporte para Linux e Windows.",
    about:
      "Unpoppable foi desenvolvido do zero em Godot como projeto da disciplina de Programação para Jogos. O jogador controla Balum, um balão que precisa sobreviver a ondas de macacos inimigos; a cada rodada, a dificuldade aumenta e novas armas são liberadas.",
    features: [
      "Movimentação top-down com teclado",
      "Sistema de disparos e combate com o mouse",
      "Ondas de inimigos com dificuldade progressiva",
      "Desbloqueio de novas armas ao longo das rodadas",
      "Sistema de vidas com feedback visual no personagem",
      "Builds disponíveis para Linux e Windows",
    ],
    techStack: [
      projectTech.godot,
    ],
    liveLink: "https://github.com/Iwakura9/Unpoppable/releases",
    liveLabel: "Releases",
    githubLink: "https://github.com/Iwakura9/Unpoppable",
  },
  {
    name: "Portfólio",
    imgSrc: "/projects/portfolio.svg",
    description:
      "Este próprio portfólio: construído com React e Vite para apresentar projetos, experiência acadêmica, tecnologias e atividade no GitHub.",
    about:
      "Portfólio pessoal orientado por dados, com troca de tema, rolagem suave e seções animadas. O contador de visitantes no rodapé usa um fingerprint gerado localmente no navegador, enviado a um endpoint serverless na Vercel que persiste os dados no Supabase.",
    features: [
      "Página inicial com apresentação, tecnologias, projetos, experiência acadêmica e atividade no GitHub",
      "Páginas dedicadas para projetos, experiência e contato, com rotas de detalhe",
      "Troca de tema com suporte a sistema, claro e escuro",
      "Rolagem suave e revelações de seção animadas com Framer Motion",
      "Contador de visitantes no rodapé com fingerprint gerado localmente",
      "API serverless na Vercel com persistência em Supabase",
    ],
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
