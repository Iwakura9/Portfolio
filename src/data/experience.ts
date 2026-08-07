import type { Localized } from "@/i18n/types";

export interface Experience {
  slug: string;
  title: Localized<string>;
  organization: Localized<string>;
  description: Localized<string>;
  period: Localized<string>;
  location: Localized<string>;
  tags: Localized<string[]>;
  highlights: Localized<string[]>;
}

export const experiences: Experience[] = [
  {
    slug: "pet-computacao-ufc",
    title: {
      pt: "Programa de Educação Tutorial (PET)",
      en: "Tutorial Education Program (PET)",
    },
    organization: {
      pt: "Ciência da Computação — UFC",
      en: "Computer Science — UFC",
    },
    description: {
      pt: "Atuação em ensino, organização acadêmica, software livre, olimpíadas de informática e recepção de novos estudantes.",
      en: "Work in teaching, academic organization, free software, informatics olympiads and welcoming new students.",
    },
    period: { pt: "2025 — Presente", en: "2025 — Present" },
    location: { pt: "Fortaleza, CE", en: "Fortaleza, Brazil" },
    tags: {
      pt: ["Ensino", "Linux", "Organização", "Computação"],
      en: ["Teaching", "Linux", "Organization", "Computing"],
    },
    highlights: {
      pt: [
        "Líder do Grupo de Estudos em Linux e Software Livre da UFC (GELSOL), atuando como professor e organizador.",
        "Organização e elaboração de questões para a Olimpíada Cearense de Informática (OCI) 2025.",
        "Professor auxiliar no projeto Graviola em 2025, iniciativa voltada ao ensino de desenvolvimento de jogos.",
        "Organizador no Include em 2026, programa de recepção de calouros de Ciência da Computação.",
      ],
      en: [
        "Leader of UFC's Linux and Free Software Study Group (GELSOL), acting as instructor and organizer.",
        "Organization and question writing for the Ceará Informatics Olympiad (OCI) 2025.",
        "Assistant instructor on the Graviola project in 2025, an initiative focused on teaching game development.",
        "Organizer at Include in 2026, a welcome program for Computer Science freshmen.",
      ],
    },
  },
  {
    slug: "ciencia-da-computacao-ufc",
    title: {
      pt: "Bacharelado em Ciência da Computação",
      en: "Bachelor's Degree in Computer Science",
    },
    organization: {
      pt: "Universidade Federal do Ceará (UFC)",
      en: "Federal University of Ceará (UFC)",
    },
    description: {
      pt: "Formação em Ciência da Computação com participação ativa em projetos acadêmicos e competições de programação.",
      en: "Computer Science degree with active participation in academic projects and programming competitions.",
    },
    period: { pt: "2024 — 2028", en: "2024 — 2028" },
    location: { pt: "Fortaleza, CE", en: "Fortaleza, Brazil" },
    tags: {
      pt: ["Graduação", "Computação", "ICPC", "UFC"],
      en: ["Undergraduate", "Computing", "ICPC", "UFC"],
    },
    highlights: {
      pt: [
        "Graduação em andamento na Universidade Federal do Ceará.",
        "2º lugar no Ceará na Maratona Brasileira de Programação — ICPC Regionals 2024.",
        "Participação no PET Computação e em iniciativas de ensino, extensão e organização acadêmica.",
      ],
      en: [
        "Degree in progress at the Federal University of Ceará.",
        "2nd place in Ceará at the Brazilian Programming Marathon — ICPC Regionals 2024.",
        "Participation in PET Computação and in teaching, outreach and academic organization initiatives.",
      ],
    },
  },
  {
    slug: "ensino-medio-farias-brito",
    title: { pt: "Ensino Médio", en: "High School" },
    organization: {
      pt: "Organização Educacional Farias Brito",
      en: "Farias Brito Educational Organization",
    },
    description: {
      pt: "Formação de ensino médio acompanhada por participação e reconhecimento em olimpíadas acadêmicas.",
      en: "High school education accompanied by participation and recognition in academic olympiads.",
    },
    period: { pt: "2021 — 2023", en: "2021 — 2023" },
    location: { pt: "Fortaleza, CE", en: "Fortaleza, Brazil" },
    tags: {
      pt: ["Formação", "Matemática", "Lógica", "Informática"],
      en: ["Education", "Mathematics", "Logic", "Informatics"],
    },
    highlights: {
      pt: [
        "Medalhista da OBMEP 2022.",
        "Medalhista da OBRL 2022.",
        "Menção honrosa na Olimpíada Cearense de Informática 2022.",
      ],
      en: [
        "OBMEP 2022 medalist.",
        "OBRL 2022 medalist.",
        "Honorable mention at the Ceará Informatics Olympiad 2022.",
      ],
    },
  },
];
