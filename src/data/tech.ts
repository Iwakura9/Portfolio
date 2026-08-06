export interface TechItem {
  name: string;
  icon: string;
  darkIcon?: string;
}

export const skills: TechItem[] = [
  { name: "Python", icon: "/tech/code.svg" },
  { name: "C", icon: "/tech/code.svg" },
  { name: "C++", icon: "/tech/code.svg" },
  { name: "Java", icon: "/tech/java.svg" },
  { name: "JavaScript", icon: "/tech/js.svg" },
  { name: "SQL", icon: "/tech/database.svg" },
];

export const languageSkills: TechItem[] = [
  { name: "Python", icon: "/tech/code.svg" },
  { name: "C", icon: "/tech/code.svg" },
  { name: "C++", icon: "/tech/code.svg" },
  { name: "Java", icon: "/tech/java.svg" },
  { name: "JavaScript", icon: "/tech/js.svg" },
  { name: "GDScript", icon: "/tech/game.svg" },
  { name: "SQL", icon: "/tech/database.svg" },
];

export const technologySkills: TechItem[] = [
  { name: "SQLite", icon: "/tech/database.svg" },
  { name: "Django REST", icon: "/tech/api.svg" },
  { name: "Textual", icon: "/tech/terminal.svg" },
  { name: "Godot", icon: "/tech/game.svg" },
];

export const toolsSkills: TechItem[] = [
  { name: "Git", icon: "/tech/git.svg" },
  {
    name: "GitHub",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
  },
  { name: "Linux", icon: "/tech/linux.svg" },
  { name: "Arch Linux", icon: "/tech/linux.svg" },
  { name: "Bash / Fish", icon: "/tech/terminal.svg" },
  { name: "Neovim", icon: "/tech/editor.svg" },
  { name: "VS Code", icon: "/tech/editor.svg" },
  { name: "Zed", icon: "/tech/editor.svg" },
  { name: "LaTeX", icon: "/tech/document.svg" },
];

export const skillRows: { direction: "left" | "right"; category: string; items: TechItem[] }[] = [
  {
    direction: "left",
    category: "Linguagens",
    items: languageSkills,
  },
  {
    direction: "right",
    category: "Tecnologias",
    items: technologySkills,
  },
  {
    direction: "left",
    category: "Ferramentas",
    items: toolsSkills,
  },
];

export const projectTech = {
  python: { name: "Python", icon: "/tech/code.svg" },
  c: { name: "C", icon: "/tech/code.svg" },
  cpp: { name: "C++", icon: "/tech/code.svg" },
  sql: { name: "SQL", icon: "/tech/database.svg" },
  sqlite: { name: "SQLite", icon: "/tech/database.svg" },
  djangoRest: { name: "Django REST", icon: "/tech/api.svg" },
  textual: { name: "Textual", icon: "/tech/terminal.svg" },
  godot: { name: "Godot", icon: "/tech/game.svg" },
  gdscript: { name: "GDScript", icon: "/tech/game.svg" },
  linux: { name: "Linux", icon: "/tech/linux.svg" },
  markdown: { name: "Markdown", icon: "/tech/document.svg" },
  neovim: { name: "Neovim", icon: "/tech/editor.svg" },
  javascript: { name: "JavaScript", icon: "/tech/js.svg" },
} as const;
