export interface TechItem {
  name: string;
  icon: string;
  darkIcon?: string;
}

export const skills: TechItem[] = [
  { name: "Python", icon: "/tech/python.svg" },
  { name: "C", icon: "/tech/c.svg" },
  { name: "C++", icon: "/tech/cpp.svg" },
  { name: "Java", icon: "/tech/java.svg" },
  { name: "JavaScript", icon: "/tech/js.svg" },
  { name: "SQL", icon: "/tech/database.svg" },
];

export const languageSkills: TechItem[] = [
  { name: "Python", icon: "/tech/python.svg" },
  { name: "C", icon: "/tech/c.svg" },
  { name: "C++", icon: "/tech/cpp.svg" },
  { name: "Java", icon: "/tech/java.svg" },
  { name: "JavaScript", icon: "/tech/js.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "Rust", icon: "/tech/rust.svg" },
  { name: "GDScript", icon: "/tech/godot.svg" },
  { name: "SQL", icon: "/tech/database.svg" },
  { name: "HTML5", icon: "/tech/html5.svg" },
  { name: "CSS3", icon: "/tech/css3.svg", darkIcon: "/tech/css3-dark.svg" },
];

export const technologySkills: TechItem[] = [
  { name: "SQLite", icon: "/tech/sqlite.svg" },
  { name: "Django REST", icon: "/tech/django.svg" },
  { name: "Textual", icon: "/tech/terminal.svg" },
  { name: "Godot", icon: "/tech/godot.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "Vite", icon: "/tech/vite.svg" },
  { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  {
    name: "shadcn/ui",
    icon: "/tech/shadcn-ui-light.svg",
    darkIcon: "/tech/shadcn-ui-dark.svg",
  },
  { name: "Framer Motion", icon: "/tech/motion.svg" },
  { name: "React Router", icon: "/tech/reactrouter.svg" },
  {
    name: "Radix UI",
    icon: "/tech/radixui.svg",
    darkIcon: "/tech/radixui-dark.svg",
  },
  { name: "Supabase", icon: "/tech/supabase.svg" },
  { name: "Node.js", icon: "/tech/nodejs.svg", darkIcon: "/tech/nodejs-dark.svg" },
];

export const toolsSkills: TechItem[] = [
  { name: "Git", icon: "/tech/git.svg" },
  {
    name: "GitHub",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
  },
  { name: "Linux", icon: "/tech/linux-tux.svg" },
  { name: "Arch Linux", icon: "/tech/archlinux.svg" },
  { name: "Bash", icon: "/tech/bash.svg" },
  { name: "Fish", icon: "/tech/fish.svg" },
  { name: "Neovim", icon: "/tech/neovim.svg" },
  { name: "VS Code", icon: "/tech/vscode.svg" },
  { name: "Zed", icon: "/tech/zed.svg" },
  { name: "LaTeX", icon: "/tech/latex.svg" },
  { name: "Markdown", icon: "/tech/markdown.svg" },
  {
    name: "Vercel",
    icon: "/tech/vercel-light.svg",
    darkIcon: "/tech/vercel-dark.svg",
  },
  { name: "Bun", icon: "/tech/bun.svg", darkIcon: "/tech/bun-dark.svg" },
  { name: "npm", icon: "/tech/npm.svg" },
  { name: "ESLint", icon: "/tech/eslint.svg" },
  { name: "Claude Code", icon: "/tech/claude.svg" },
  { name: "Codex", icon: "/tech/codex.svg" },
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
  python: { name: "Python", icon: "/tech/python.svg" },
  c: { name: "C", icon: "/tech/c.svg" },
  cpp: { name: "C++", icon: "/tech/cpp.svg" },
  sql: { name: "SQL", icon: "/tech/database.svg" },
  sqlite: { name: "SQLite", icon: "/tech/sqlite.svg" },
  djangoRest: { name: "Django REST", icon: "/tech/django.svg" },
  textual: { name: "Textual", icon: "/tech/terminal.svg" },
  godot: { name: "Godot", icon: "/tech/godot.svg" },
  gdscript: { name: "GDScript", icon: "/tech/godot.svg" },
  linux: { name: "Linux", icon: "/tech/linux-tux.svg" },
  markdown: { name: "Markdown", icon: "/tech/markdown.svg" },
  neovim: { name: "Neovim", icon: "/tech/neovim.svg" },
  javascript: { name: "JavaScript", icon: "/tech/js.svg" },
} as const;
