import { projectTech } from "@/data/tech";
import type { TechItem } from "@/data/tech";
import type { Localized } from "@/i18n/types";
import wineQualityArticleUrl from "@/assets/wine-quality-artigo.pdf?url";

export interface Project {
  /** Estável e independente de idioma: define a URL em `/projects/:slug`. */
  slug: string;
  name: Localized<string>;
  imgSrc: string;
  description: Localized<string>;
  techStack: TechItem[];
  liveLink?: string;
  liveLabel?: Localized<string>;
  githubLink?: string;
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
  {
    slug: "gvp",
    name: { pt: "GVP", en: "GVP" },
    imgSrc: "/projects/gvp.svg",
    description: {
      pt: "Gestor de Vestuário Pessoal: aplicação gráfica desktop para Windows, feita sozinho para a disciplina de Técnicas de Programação I da UFC.",
      en: "Personal Wardrobe Manager: a desktop GUI application for Windows, built solo for the Programming Techniques I course at UFC.",
    },
    about: {
      pt: "GVP (Gestor de Vestuário Pessoal) é uma aplicação gráfica desktop desenvolvida individualmente como projeto da disciplina de Técnicas de Programação I da UFC. O objetivo do trabalho era demonstrar, na prática, os conceitos de Programação Orientada a Objetos vistos na disciplina — classes, encapsulamento, herança e composição — aplicados a um sistema real em Java, com múltiplas janelas e telas de interação em vez de uma interface de linha de comando.",
      en: "GVP (Personal Wardrobe Manager) is a desktop GUI application built individually as the final project for the Programming Techniques I course at UFC. The goal was to put into practice the Object-Oriented Programming concepts covered in the course — classes, encapsulation, inheritance and composition — applied to a real Java system with multiple windows and interactive screens instead of a command-line interface.",
    },
    features: {
      pt: [
        "Aplicação gráfica desktop nativa para Windows",
        "Múltiplas janelas e telas de interação",
        "Modelagem orientada a objetos do domínio (peças de roupa, categorias, combinações)",
        "Desenvolvido individualmente do início ao fim",
        "Projeto final da disciplina de Técnicas de Programação I (UFC)",
      ],
      en: [
        "Native desktop GUI application for Windows",
        "Multiple windows and interactive screens",
        "Object-oriented modeling of the domain (clothing items, categories, outfits)",
        "Built individually from start to finish",
        "Final project for the Programming Techniques I course (UFC)",
      ],
    },
    techStack: [projectTech.java],
  },
  {
    slug: "wine-quality-ml",
    name: { pt: "Wine Quality ML", en: "Wine Quality ML" },
    imgSrc: "/projects/wine-quality-ml.png",
    description: {
      pt: "Comparação de modelos de Machine Learning implementados do zero (sem scikit-learn) para prever a qualidade de vinhos, com artigo científico completo em PDF.",
      en: "Comparison of Machine Learning models implemented from scratch (no scikit-learn) to predict wine quality, with a full scientific paper in PDF.",
    },
    about: {
      pt: "Wine Quality ML compara modelos de aprendizado de máquina no dataset Wine Quality (Cortez et al., 2009), usando os arquivos de vinho tinto e vinho branco da UCI. O diferencial do projeto é que nenhum modelo é importado de scikit-learn ou biblioteca equivalente: todos os algoritmos foram reescritos manualmente usando apenas numpy para álgebra linear e cálculos vetorizados, e pandas para leitura e manipulação dos dados. O problema foi modelado de duas formas: regressão, prevendo diretamente a nota de qualidade, e classificação em três classes (ruim, mediano, bom). Foram implementados três modelos: uma Random Forest com árvores CART construídas manualmente, amostragem bootstrap e seleção aleatória de features em cada divisão; uma Softmax Regression treinada por gradiente descendente com softmax estável, regularização L2 e pesos balanceados por classe; e um K-Nearest Neighbors para regressão e classificação, com o valor de k escolhido por validação cruzada manual. O pipeline completo cobre leitura e limpeza dos dados, divisão treino/teste estratificada, padronização das features refeita a cada fold da validação cruzada, treinamento dos modelos finais e cálculo manual de métricas como RMSE, MAE, R², acurácia, F1 macro e AUC-ROC macro. Na execução validada, a Random Forest manual obteve o melhor RMSE entre os regressores (0.6235) e o melhor AUC-ROC macro entre eles (0.8582), mantendo resultados consistentes (RMSE médio de 0.6225 ± 0.0023) em cinco divisões treino/teste repetidas. Todo o processo, as decisões de modelagem e os resultados estão documentados no artigo científico em PDF disponível para download.",
      en: "Wine Quality ML compares machine learning models on the Wine Quality dataset (Cortez et al., 2009), using the UCI red and white wine files. The key constraint of the project is that no model is imported from scikit-learn or an equivalent library: every algorithm was rewritten manually using only numpy for linear algebra and vectorized computation, and pandas for reading and handling the data. The problem was modeled in two ways: regression, predicting the quality score directly, and three-class classification (poor, average, good). Three models were implemented: a Random Forest built from manual CART trees with bootstrap sampling and random feature selection at each split; a Softmax Regression trained with gradient descent, numerically stable softmax, L2 regularization and class-balanced weights; and a K-Nearest Neighbors model for both regression and classification, with k chosen via manual cross-validation. The full pipeline covers data reading and cleaning, stratified train/test splitting, feature standardization redone within each cross-validation fold, training of the final models, and manual computation of metrics such as RMSE, MAE, R², accuracy, macro F1 and macro AUC-ROC. In the validated run, the manual Random Forest achieved the best RMSE among regressors (0.6235) and the best macro AUC-ROC among them (0.8582), staying consistent (mean RMSE of 0.6225 ± 0.0023) across five repeated train/test splits. The full process, modeling decisions and results are documented in the scientific paper available for download as a PDF.",
    },
    features: {
      pt: [
        "Três modelos de ML implementados manualmente, sem scikit-learn: Random Forest, Softmax Regression e KNN",
        "Duas formulações do problema: regressão da nota de qualidade e classificação em três classes",
        "Validação cruzada manual para escolha de hiperparâmetros",
        "Padronização de features refeita dentro de cada fold, evitando vazamento de dados",
        "Métricas calculadas manualmente: RMSE, MAE, R², acurácia, F1 macro e AUC-ROC macro",
        "Repetição dos modelos finais em cinco divisões treino/teste para média e intervalo de confiança de 95%",
        "Artigo científico completo em PDF disponível para download",
      ],
      en: [
        "Three ML models implemented from scratch, no scikit-learn: Random Forest, Softmax Regression and KNN",
        "Two problem formulations: regression of the quality score and three-class classification",
        "Manual cross-validation for hyperparameter selection",
        "Feature standardization redone within each fold to avoid data leakage",
        "Manually computed metrics: RMSE, MAE, R², accuracy, macro F1 and macro AUC-ROC",
        "Final models repeated across five train/test splits for mean and 95% confidence interval",
        "Full scientific paper available as a PDF download",
      ],
    },
    techStack: [projectTech.python],
    liveLink: wineQualityArticleUrl,
    liveLabel: { pt: "Baixar Artigo (PDF)", en: "Download Paper (PDF)" },
  },
];

// End of projects data
