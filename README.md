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
- valida o formato do `visitor_id` antes de tocar no banco
- insere o visitante no Supabase com proteção contra duplicidade
- lê a contagem total de visitantes no Supabase
- retorna a posição ordinal do visitante mais a contagem total

A posição ordinal é contada no próprio banco (via `count=exact` sobre os
registros anteriores), e não baixando a tabela de visitantes a cada acesso.

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

Ambas são lidas apenas no servidor, em `api/visitors.ts`, e nunca chegam ao
bundle do cliente. Configure-as no painel da Vercel; localmente, use um `.env`
(ignorado pelo Git). A chave `service_role` do Supabase concede acesso total ao
banco — nunca a exponha em código versionado ou em variáveis `VITE_*`.

## Estrutura do Projeto

```
api/                    endpoints serverless da Vercel
  visitors.ts           contagem de visitantes (lê/escreve no Supabase)
public/                 assets servidos como estão
  assets/               foto, capa e faixa do player
  projects/             capas dos projetos
  social/               ícones das redes sociais
  tech/                 ícones de tecnologias
src/
  assets/               arquivos importados pelo bundler (currículo)
  components/           seções e componentes de UI
    helpers/            componentes utilitários de apresentação
    ui/                 primitivos shadcn/ui
  data/                 conteúdo do portfólio (projetos, experiências, etc.)
  lib/                  utilitários compartilhados
  pages/                páginas de rota
  providers/            provedores de contexto (tema)
  App.tsx               composição da página inicial
  main.tsx              entrada e definição de rotas
```

## Convenções

- Componentes em `PascalCase.tsx`; utilitários e dados em `camelCase.ts`.
- Assets em minúsculas, sem espaços nem acentos.
- Todo conteúdo do portfólio vive em `src/data/*` — atualizar esses arquivos
  muda o site sem tocar no código de layout.
- Ícones que mudam com o tema usam `ThemedIcon`, que troca a variante por CSS
  (`dark:`) em vez de ler o tema em JavaScript, evitando piscar na primeira
  pintura.
- Slugs de projeto são derivados do nome por `slugify` (`src/lib/slug.ts`),
  usada tanto para montar quanto para resolver as URLs.

## Notas

- `vercel.json` roteia `/api/*` para as funções serverless e faz fallback das
  demais rotas para `index.html` (SPA).
- O projeto tem `package-lock.json` e `bun.lock` versionados. Use apenas um
  gerenciador para evitar que os lockfiles divirjam.
