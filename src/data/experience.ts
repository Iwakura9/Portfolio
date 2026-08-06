export interface Experience {
  slug: string;
  title: string;
  organization: string;
  description: string;
  period: string;
  location: string;
  tags: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    slug: "pet-computacao-ufc",
    title: "Programa de Educação Tutorial (PET)",
    organization: "Ciência da Computação — UFC",
    description:
      "Atuação em ensino, organização acadêmica, software livre, olimpíadas de informática e recepção de novos estudantes.",
    period: "2025 — Presente",
    location: "Fortaleza, CE",
    tags: ["Ensino", "Linux", "Organização", "Computação"],
    highlights: [
      "Líder do Grupo de Estudos em Linux e Software Livre da UFC (GELSOL), atuando como professor e organizador.",
      "Organização e elaboração de questões para a Olimpíada Cearense de Informática (OCI) 2025.",
      "Professor auxiliar no projeto Graviola em 2025, iniciativa voltada ao ensino de desenvolvimento de jogos.",
      "Organizador no Include em 2026, programa de recepção de calouros de Ciência da Computação.",
    ],
  },
  {
    slug: "ciencia-da-computacao-ufc",
    title: "Bacharelado em Ciência da Computação",
    organization: "Universidade Federal do Ceará (UFC)",
    description:
      "Formação em Ciência da Computação com participação ativa em projetos acadêmicos e competições de programação.",
    period: "2024 — 2028",
    location: "Fortaleza, CE",
    tags: ["Graduação", "Computação", "ICPC", "UFC"],
    highlights: [
      "Graduação em andamento na Universidade Federal do Ceará.",
      "2º lugar no Ceará na Maratona Brasileira de Programação — ICPC Regionals 2024.",
      "Participação no PET Computação e em iniciativas de ensino, extensão e organização acadêmica.",
    ],
  },
  {
    slug: "ensino-medio-farias-brito",
    title: "Ensino Médio",
    organization: "Organização Educacional Farias Brito",
    description:
      "Formação de ensino médio acompanhada por participação e reconhecimento em olimpíadas acadêmicas.",
    period: "2021 — 2023",
    location: "Fortaleza, CE",
    tags: ["Formação", "Matemática", "Lógica", "Informática"],
    highlights: [
      "Medalhista da OBMEP 2022.",
      "Medalhista da OBRL 2022.",
      "Menção honrosa na Olimpíada Cearense de Informática 2022.",
    ],
  },
];
