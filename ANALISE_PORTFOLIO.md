# Análise do Portfólio + Plano de Melhoria

> Objetivo: transformar o portfólio atual num site **moderno, fluido e que mostre claramente o trabalho de um desenvolvedor Full-Stack**, gastando o mínimo de tempo possível de manutenção depois.

---

## 1. Resumo rápido (TL;DR)

| Área | Situação atual | Nota |
|---|---|---|
| Posicionamento | Site diz "Desenvolvedor **Front-End**", mas você é Full-Stack | 🔴 |
| Projetos | Carrossel só com texto, todos os links `#`, sem imagem, sem repo | 🔴 |
| Navegação | Links "Projetos" e "Certificados" quebrados | 🔴 |
| Contato | Só um Linktree; sem e-mail, GitHub ou LinkedIn diretos | 🟠 |
| Design | Visual de 2020–2022 (MUI padrão, cards brancos, carrossel automático) | 🟠 |
| Responsivo | Navbar sem menu mobile, Hero com paddings "no olho" | 🟠 |
| Performance | Bundle JS de **552 KB**, dependências que não são usadas | 🟠 |
| SEO / Acessibilidade | `lang="en"`, sem meta description/OG, sem `alt` no avatar, nome animado letra por letra | 🟠 |
| Código | 2 componentes mortos, `styled()` criado dentro de componente, textos no meio do JSX | 🟡 |

**Recomendação principal:** em vez de remendar, **refazer a camada visual** no mesmo projeto (React + Vite + TS), trocando MUI por **Tailwind CSS + Motion**, e colocar **todo o conteúdo num único arquivo de dados**. Assim você só atualiza um `.ts` quando tiver projeto novo e não precisa mexer em componente nenhum.

---

## 2. Problemas encontrados

### 2.1 Conteúdo e posicionamento (o que mais pesa para recrutador)

1. **Cargo errado.** `hero.tsx:42` → `"Desenvolvedor Front-End"`, e o texto do Sobre (`About.tsx:149`) fala em "Desenvolvedor front-end". Para quem é Full-Stack isso tira metade do seu valor logo na primeira tela.
2. **Back-end não aparece.** As skills (`About.tsx:22-31`) só listam Node.js e MySQL como back-end, sem banco NoSQL, ORM, Docker, cloud, testes, APIs REST/GraphQL, filas etc. Um Full-Stack precisa mostrar as duas pontas **e a ligação entre elas**.
3. **Projetos não provam nada.** Em `projects.tsx:27-33` todos os projetos têm `link: "#"`, nenhum tem imagem, stack, repositório ou resultado. O recrutador não tem onde clicar.
4. **O melhor conteúdo está escondido.** `cards.tsx` e `p2.tsx` têm imagens, techs e descrições melhores, mas **nenhum dos dois é usado** na página. O projeto mais "Full-Stack" (API de Devocionais) e o de automação em Python (OneTapPromos) não têm destaque.
5. **"1+ Ano" de experiência** (`About.tsx:89`) provavelmente está desatualizado. Número fixo no código envelhece sem você perceber.
6. **Contato só pelo Linktree.** Isso obriga o visitante a dar um clique a mais e sair do seu site. GitHub, LinkedIn e e-mail precisam estar visíveis no topo e no rodapé.
7. **Idiomas misturados:** "Back to top", "All rights reserved" e `lang="en"` num site em português.

### 2.2 Bugs de navegação

| Onde | Problema |
|---|---|
| `NavBar.tsx:23` | Faz scroll para `id="projetos"`, mas nenhuma seção tem esse id (o carrossel não tem id, e o `p2.tsx` usa `projects`). O link não faz nada. |
| `NavBar.tsx:20` | "Skills" faz scroll para `sobre`, o mesmo destino de "Sobre". |
| `hero.tsx:116` e `Footer.tsx:57` | Botão "Certificados" chama `navigate("/certificates")`, mas a rota está **comentada** em `router.tsx`. O resultado é tela em branco. |
| `NavBar.tsx:15` | `position="absolute"` faz a navbar sumir quando a página rola, e no mobile não existe menu hambúrguer. |
| `AnimatedBackground.tsx` | `fill="#46737"` é uma cor inválida (faltou o `F`). |
| `index.html` | Aponta para `/vite.svg` e `/site.webmanifest`, que não existem em `public/` (dá 404). |

### 2.3 Design / UX

- **Paleta genérica:** `#232323` + branco + um azul ciano (`#5ED3F3`) e mais um azul Material (`#2196f3`) hardcoded nos hovers. Dois azuis diferentes passam a impressão de falta de sistema.
- **Contraste entre seções:** a página alterna Hero escuro → Sobre branco → Projetos branco → Footer preto. Fica "quebrada" em vez de fluida.
- **Carrossel com autoplay** para projetos é um padrão ultrapassado: esconde conteúdo, o usuário não controla e no mobile mostra 1 card por vez.
- **Nome animado letra por letra:** cada letra vira um `<Typography variant="h3">`, então são ~23 headings, e o leitor de tela soletra o cargo.
- **Ícones de skill** em PNG de tamanhos e estilos diferentes (`mui.jpg`, `js.png`...) dão uma estética desigual.
- **Tipografia:** o site carrega Montserrat **e** Poppins (Poppins não é usada), e o footer pede `Lato`, que nunca é carregada.

### 2.4 Código e performance

- **`styled()` dentro do componente** (`hero.tsx`, `Footer.tsx`, `StyledButton.tsx`, `projects.tsx`, `certificates.tsx`). Isso cria um componente novo a cada render: o elemento é desmontado e remontado, perde o estado e fica mais lento.
- **`bgcolor: "primary.main.contrast"`** (`About.tsx:48, 70, 110`) não existe no tema e é ignorado silenciosamente.
- **Código morto:** `cards.tsx`, `p2.tsx`, `teste.txt`, `react-tsparticles`, `tsparticles`, `tsparticles-engine`, `react-masonry-css`, `react-material-ui-carousel` e `@types/swiper`.
- **Bundle de 552 KB** de JS (aviso do próprio Vite). Para um site de 1 página, o ideal é menos de 150 KB.
- **`<Button>` envolvendo `<StyledButton>`** (`cards.tsx:398`) coloca um botão dentro de outro, o que é HTML inválido.
- **Dois deploys configurados** (`gh-pages` no `package.json` e `netlify.toml`). Fique só com a Netlify.
- O `README.md` ainda é o template do Vite.

---

## 3. Proposta de novo design

### 3.1 Direção visual

**Conceito: "Dark, limpo, com cara de produto".** É o padrão dos portfólios de dev mais fortes de hoje: fundo escuro contínuo, tipografia grande, layout em **bento grid**, microinterações sutis e foco total em projetos.

- **Tema único escuro** (com toggle claro opcional), sem alternar branco/preto entre seções.
- **Uma cor de destaque só**, usada em CTA, links e foco.
- **Bastante respiro:** seções com `py-24`, conteúdo limitado em `max-w-6xl`.
- **Movimento com propósito:** fade + slide curto ao entrar na tela, hover com leve elevação, gradiente que segue o mouse nos cards. Tudo respeitando `prefers-reduced-motion`.

### 3.2 Design tokens

```css
/* Paleta sugerida */
--bg:          #0A0A0B;   /* fundo */
--surface:     #141416;   /* cards */
--border:      #27272A;   /* bordas sutis */
--text:        #FAFAFA;   /* texto principal */
--text-muted:  #A1A1AA;   /* texto secundário */
--accent:      #22D3EE;   /* ciano, evolução do seu #5ED3F3 atual */
--accent-2:    #A78BFA;   /* violeta, só para gradientes */

/* Tipografia */
--font-sans: "Geist", "Inter", system-ui, sans-serif;
--font-mono: "Geist Mono", "JetBrains Mono", monospace;  /* tags, código, labels */

/* Raio e sombra */
--radius: 16px;
--glow: 0 0 0 1px var(--border), 0 8px 32px -8px rgb(34 211 238 / .25);
```

> Dica: a fonte **mono** em labels (`// projetos`, chips de stack, datas) passa "dev" sem precisar de nenhum enfeite.

### 3.3 Nova estrutura da página

```
┌──────────────────────────────────────────────────────────────┐
│ NAV fixa com blur:  LG   Projetos  Stack  Experiência  Contato  [CV ↓] │
├──────────────────────────────────────────────────────────────┤
│ HERO                                                         │
│  ● Disponível para novos projetos                            │
│  Luis Gustavo                                                │
│  Desenvolvedor Full-Stack                                    │
│  "Construo produtos web de ponta a ponta — da API ao pixel." │
│  [Ver projetos]  [Baixar CV]     GitHub · LinkedIn · E-mail  │
├──────────────────────────────────────────────────────────────┤
│ PROJETOS EM DESTAQUE (bento grid)                            │
│  ┌──────────────┬───────┐                                    │
│  │  Projeto 1   │ Proj 2│   cada card: print, título,        │
│  │  (grande)    ├───────┤   1 linha de impacto, chips de     │
│  │              │ Proj 3│   stack, [Demo] [Código]           │
│  └──────────────┴───────┘                                    │
│  → "Ver todos os projetos" (grid simples com filtro)         │
├──────────────────────────────────────────────────────────────┤
│ STACK — agrupada em Front-end | Back-end | Banco | DevOps    │
├──────────────────────────────────────────────────────────────┤
│ EXPERIÊNCIA — timeline vertical (empresa, período, conquistas)│
├──────────────────────────────────────────────────────────────┤
│ SOBRE — foto + 1 parágrafo humano + números (anos, projetos) │
├──────────────────────────────────────────────────────────────┤
│ CONTATO — formulário (Netlify Forms) + links diretos         │
├──────────────────────────────────────────────────────────────┤
│ FOOTER — © ano · links · "feito com React + Vite"           │
└──────────────────────────────────────────────────────────────┘
```

**Certificados:** saem da navegação principal. Vire uma linha discreta em "Sobre" ("Certificações: HTML, CSS, JS, React, Node, Bootstrap →") abrindo um modal. Para um Full-Stack, projeto vale mais que certificado de curso.

### 3.4 Como mostrar que você é **Full-Stack**

Essa é a parte que mais diferencia:

1. **Cada projeto em destaque vira um mini case study** (página `/projetos/:slug` ou modal):
   - **Problema:** o que precisava ser resolvido.
   - **Solução:** o que você construiu.
   - **Arquitetura:** um diagrama simples `Front → API → Banco → Serviços externos`.
   - **Stack:** chips separados por camada.
   - **Desafio técnico:** 1 ou 2 parágrafos (autenticação, cache, deploy, scraping...).
   - **Resultado:** números quando houver (leads, usuários, tempo economizado).
   - **Links:** demo, repositório, documentação da API.
2. **Priorize projetos com back-end real:**
   - **API Devocionais Diárias** → mostre os endpoints, a documentação (Swagger/Scalar) e quem consome.
   - **OneTapPromos** → automação Python + Selenium + Pandas + envio de e-mail; diagrama de pipeline.
   - **Frete em Movimento** → projeto real de cliente, em produção. Ótimo como prova social.
3. **Stack agrupada por camada**, sem barras de "porcentagem de domínio" (ninguém acredita nelas):
   ```
   Front-end   React · TypeScript · Next.js · Tailwind · MUI
   Back-end    Node.js · Express/Nest · Python · REST · Auth (JWT)
   Banco       MySQL · PostgreSQL · Prisma · Redis
   DevOps      Git · Docker · Netlify/Vercel · CI (GitHub Actions)
   ```
   *(ajuste para o que você realmente usa hoje)*
4. **Links de GitHub em todo lugar.** Recrutador técnico vai querer ler código.

---

## 4. Stack técnica recomendada

Manter **React + Vite + TypeScript** (você já domina e o deploy na Netlify já está pronto), mas trocar a camada de UI:

| Sai | Entra | Por quê |
|---|---|---|
| MUI + Emotion | **Tailwind CSS v4** | Visual próprio (sem "cara de MUI"), zero runtime, bundle bem menor |
| framer-motion v11 | **motion** (sucessor oficial) | Mesma API, mais leve |
| react-slick + slick-carousel | Grid CSS | Carrossel não é necessário |
| react-scroll | `scroll-behavior: smooth` + âncoras | Nativo |
| PNG de skills | **simple-icons** / `react-icons` (SVG) | Ícones uniformes e nítidos |
| HashRouter | `BrowserRouter` + `_redirects` (você já tem) | URLs limpas (`/projetos/x` em vez de `/#/projetos/x`) |
| tsparticles (3 pacotes) | — | Não é usado |

Componentes prontos e bonitos para acelerar: **shadcn/ui** (copia o componente para o seu projeto, funciona com Tailwind) e, para efeitos de destaque, **Magic UI** ou **Aceternity UI** (spotlight, bento grid, border-beam). Use pouco: 1 ou 2 efeitos no site inteiro.

> **Alternativa, se SEO importar muito:** Astro + Tailwind (com React só onde houver interação). Gera HTML estático, nota ~100 no Lighthouse. Dá mais trabalho de migração, então eu só faria se você quiser blog/artigos no futuro.

---

## 5. Conteúdo como dado (para você não precisar codar depois)

Centralize **tudo** em `src/data/portfolio.ts`. Adicionar um projeto vira editar um objeto:

```ts
// src/data/portfolio.ts
export const profile = {
  name: "Luis Gustavo",
  role: "Desenvolvedor Full-Stack",
  tagline: "Construo produtos web de ponta a ponta — da API ao pixel.",
  available: true,
  startedCodingYear: 2023, // anos de experiência calculados automaticamente
  links: {
    github: "https://github.com/LuisG-1214",
    linkedin: "https://linkedin.com/in/SEU-USUARIO",
    email: "mailto:SEU-EMAIL",
    cv: "/cv-luis-gustavo.pdf",
  },
};

export type Project = {
  slug: string;
  title: string;
  summary: string;          // 1 linha de impacto
  cover: string;            // print 16:9 em .webp
  stack: { front?: string[]; back?: string[]; db?: string[]; infra?: string[] };
  links: { demo?: string; repo?: string; docs?: string };
  featured?: boolean;
  caseStudy?: { problem: string; solution: string; challenge: string; result?: string };
};

export const projects: Project[] = [
  {
    slug: "frete-em-movimento",
    title: "Frete em Movimento",
    summary: "Site institucional em produção para empresa de transporte, focado em captação de leads.",
    cover: "/projects/frete.webp",
    stack: { front: ["HTML", "Tailwind", "JavaScript"], infra: ["Netlify"] },
    links: { demo: "https://freteemmovimento.com.br/" },
    featured: true,
  },
  // ...
];

export const experience = [/* { company, role, period, highlights: [] } */];
export const skills = {/* front: [], back: [], db: [], devops: [] */};
```

Componentes **só leem** esse arquivo. Nunca mais tem texto solto no meio do JSX.

---

## 6. Detalhes que deixam o site "fluido"

- **Navbar fixa** com `backdrop-blur` e borda que aparece quando a página rola; destaca a seção atual (scroll-spy com `IntersectionObserver`).
- **Animações de entrada** de 300 a 500 ms, `ease-out`, deslocamento de no máximo 16–24px. Nada de entrar deslizando de 100% da tela (como em `About.tsx:37`).
- **Hover nos cards:** borda em gradiente + spotlight seguindo o cursor + leve `scale(1.01)`.
- **Imagens** em `.webp`, com `loading="lazy"`, `width` e `height` definidos (sem layout pulando).
- **Transição de página** suave entre a home e o case study (View Transitions API).
- **`prefers-reduced-motion`**: desliga as animações para quem pediu.
- **Foco visível** em todos os elementos clicáveis (navegação por teclado).

---

## 7. SEO, acessibilidade e "profissionalismo"

- [ ] `<html lang="pt-BR">`
- [ ] `<meta name="description">` + Open Graph (`og:title`, `og:description`, `og:image` 1200×630), para o link ficar bonito no LinkedIn e no WhatsApp
- [ ] Favicon real (você já tem os arquivos em `src/assets/Images/`; mova-os para `public/`)
- [ ] `alt` descritivo em todas as imagens (o avatar do Hero não tem)
- [ ] Um único `<h1>` (seu nome); seções com `<h2>`
- [ ] CV em PDF para download
- [ ] Domínio próprio (ex.: `luisgustavo.dev`), barato e passa muita credibilidade
- [ ] Meta: Lighthouse acima de 95 em Performance, Acessibilidade, Boas Práticas e SEO
- [ ] README do repositório explicando o projeto (o repo do portfólio também é portfólio)

---

## 8. Plano de execução (pensado para quem tem pouco tempo)

### Fase 0 — Correções rápidas no site atual (~1–2 h)
Se quiser algo apresentável **já**, antes do redesign:
1. Trocar "Front-End" por "Full-Stack" (`hero.tsx`, `About.tsx`).
2. Colocar `id="projetos"` na seção de projetos e corrigir o link "Skills".
3. Descomentar a rota `/certificates` (ou remover os botões).
4. Colocar links reais nos projetos (demo/GitHub) e trocar o carrossel pelo grid do `p2.tsx`.
5. Adicionar GitHub/LinkedIn/e-mail no Hero e no Footer.
6. `lang="pt-BR"`, meta description e favicon.

### Fase 1 — Base do redesign (~1 dia)
- Instalar Tailwind v4 + motion, criar os tokens (seção 3.2).
- Criar `src/data/portfolio.ts` com todo o conteúdo.
- Navbar, Hero, Footer novos.

### Fase 2 — Projetos e Stack (~1 dia)
- Bento grid de destaques + grid "todos os projetos".
- Página de case study (`/projetos/:slug`).
- Stack por camada com ícones SVG.

### Fase 3 — Experiência, Sobre, Contato (~meio dia)
- Timeline, seção Sobre com números calculados, formulário com Netlify Forms.

### Fase 4 — Polimento (~meio dia)
- Remover MUI e as dependências mortas, otimizar imagens, SEO/OG, Lighthouse, README.

**Total estimado: 3 a 4 dias de trabalho focado**, ou a Fase 0 em uma tarde.

---

## 9. O que você precisa providenciar (só você pode fazer)

- [ ] Prints atualizados de cada projeto (1600×900, de preferência em `.webp`)
- [ ] Links de repositório e demo de cada projeto
- [ ] Experiências profissionais (empresa, cargo, período, 2–3 conquistas cada)
- [ ] Stack que você usa **hoje**, separada em front / back / banco / devops
- [ ] Uma frase de apresentação (tagline) e um parágrafo "sobre"
- [ ] Links de LinkedIn e e-mail profissional
- [ ] CV atualizado em PDF
- [ ] Uma foto recente com fundo neutro

Com esse material em mãos, a implementação das fases 1 a 4 é praticamente mecânica.

---

## 10. Referências de inspiração

Bons portfólios de dev para olhar o estilo (dark, bento, foco em projeto):
- **brittanychiang.com**: layout em 2 colunas, navegação lateral com scroll-spy, muito limpo
- **leerob.com**: minimalismo extremo, tipografia forte
- **Galerias:** [godly.website](https://godly.website), [bentogrids.com](https://bentogrids.com) e a vitrine de templates do [Magic UI](https://magicui.design)
