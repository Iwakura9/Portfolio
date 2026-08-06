🇧🇷 Português | 🇺🇸 [English](README.en.md)

# Portfólio — Gabriel Cavalcante

Portfólio pessoal construído com React e Vite para apresentar projetos,
experiência acadêmica, formação, tecnologias e atividade no GitHub.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- React Router
- next-themes
- Vercel serverless functions
- Supabase for visitor storage

## O Que Inclui

- Página inicial com apresentação, tecnologias, projetos, experiência acadêmica,
  atividade no GitHub e conquistas
- Páginas dedicadas para `projects`, `experiencia` e `contact`
- Rotas de detalhes para projetos e experiências
- Troca de tema com suporte a sistema, claro e escuro
- Rolagem suave e revelações de seção animadas
- Contador de visitantes no rodapé com fingerprint gerado localmente

## Rotas

- `/` início
- `/projects` todos os projetos
- `/projects/:slug` detalhe de projeto
- `/experiencia` trajetória acadêmica
- `/experiencia/:slug` detalhes de uma experiência
- `/contact` página de contato

## Rastreamento de Visitantes

O contador de visitantes no rodapé funciona em duas partes:

- O cliente cria um fingerprint local em `src/lib/fingerprint.ts`.
- Esse fingerprint é enviado ao endpoint serverless em `api/visitors.ts`.

### Rastreamento de User-Agent

O **user-agent faz parte explicitamente da entrada do fingerprint**. Ele é lido
de `navigator.userAgent`, combinado com outros sinais de navegador/dispositivo,
gerado como hash localmente e armazenado no `localStorage` sob `visitor_id`.

As entradas do fingerprint são:

- `navigator.userAgent`
- `navigator.language`
- `screen.width x screen.height`
- fuso horário do navegador via `Intl.DateTimeFormat().resolvedOptions().timeZone`
- `navigator.hardwareConcurrency`
- `navigator.deviceMemory` quando disponível
- um hash baseado em canvas gerado no navegador

Comportamento importante:

- Se `localStorage.visitor_id` já existir, o app reaproveita esse valor.
- As entradas brutas do fingerprint não são enviadas à API.
- Apenas o `visitor_id` (já em hash) é enviado para `/api/visitors`.

### Comportamento do Backend

A API de visitantes:

- aceita requisições `POST` com `{ visitor_id }`
- insere o visitante no Supabase com proteção contra duplicidade
- lê a contagem total de visitantes no Supabase
- retorna a posição ordinal do visitante mais a contagem total

Se as variáveis de ambiente do Supabase estiverem ausentes ou a API falhar, a
interface degrada graciosamente e mantém o rodapé silencioso.

## Desenvolvimento Local

1. Instale as dependências:
   ```bash
   bun install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   bun run dev
   ```
3. Gere o build de produção:
   ```bash
   bun run build
   ```

## Variáveis de Ambiente

O endpoint de visitantes espera:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Estrutura do Projeto

- `src/components/` componentes de UI e de seção reutilizáveis
- `src/pages/` páginas de rota
- `src/data/` conteúdo do portfólio para projetos, experiências, redes e tecnologias
- `src/lib/` utilitários compartilhados, incluindo geração de fingerprint
- `api/` endpoints serverless da Vercel
- `public/` assets estáticos

## Notas

- O app atualmente usa rewrites do Vite para que `/api/*` vá para o handler
  serverless e as demais rotas caiam no fallback de `index.html`.
- A maior parte do conteúdo da página principal é orientada por dados, então
  atualizar `src/data/*` muda o conteúdo público do portfólio sem tocar no
  código de layout.
