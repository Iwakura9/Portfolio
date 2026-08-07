import type { Localized } from "@/i18n/types";

export interface Quote {
  text: Localized<string>;
  author: string;
}

export const quotes: Quote[] = [
  {
    text: {
      pt: "2º lugar no Ceará na Maratona Brasileira de Programação.",
      en: "2nd place in Ceará at the Brazilian Programming Marathon.",
    },
    author: "ICPC Regionals 2024",
  },
  {
    text: {
      pt: "Medalhista da Olimpíada Brasileira de Matemática das Escolas Públicas.",
      en: "Medalist at the Brazilian Mathematical Olympiad for Public Schools.",
    },
    author: "OBMEP 2022",
  },
  {
    text: {
      pt: "Medalhista da Olimpíada Brasileira de Raciocínio Lógico.",
      en: "Medalist at the Brazilian Logical Reasoning Olympiad.",
    },
    author: "OBRL 2022",
  },
  {
    text: {
      pt: "Menção honrosa na Olimpíada Cearense de Informática.",
      en: "Honorable mention at the Ceará Informatics Olympiad.",
    },
    author: "OCI 2022",
  },
];
