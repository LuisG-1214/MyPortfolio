# Portfólio — Luis Gustavo

Portfólio pessoal de desenvolvedor Full-Stack, feito com **React 18 + TypeScript + Vite + Tailwind CSS v4 + Motion**, hospedado na **Netlify**.

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:5173
```

| Script | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Checa tipos e gera o build em `dist/` |
| `npm run preview` | Serve o build localmente |
| `npm run lint` | ESLint |

## Como atualizar o conteúdo

**Todo o texto, projetos, stack, trajetória e certificados ficam em [`src/data/portfolio.ts`](src/data/portfolio.ts).**
Para atualizar o site, normalmente você só precisa editar esse arquivo.

- **Novo projeto:** salve os prints em `src/assets/projects/` (de preferência `.webp`, ~1280px de largura), importe no topo do arquivo e adicione um objeto em `projects`. Use `featured: true` para aparecer no bento grid de destaque (o ideal são 3 destaques).
- **Nova tecnologia com ícone:** adicione o nome em `src/components/TechIcon.tsx` (ícones de [react-icons/si](https://react-icons.github.io/react-icons/icons/si/)).
- **Links (GitHub, LinkedIn, e-mail, CV):** preencha `profile.links`. Os que ficarem vazios não aparecem.
- **Currículo:** coloque o PDF em `public/` e preencha `profile.links.cv`.

Procure por `TODO` no `portfolio.ts` para ver o que ainda falta preencher.

## Estrutura

```
src/
├── data/portfolio.ts     ← conteúdo do site
├── sections/             ← seções da home (Hero, Projects, Stack, Journey, About, Contact)
├── pages/                ← Home, página de projeto (/projetos/:slug) e 404
├── components/           ← componentes reutilizáveis (Navbar, ProjectCard, ...)
├── hooks/ · lib/         ← scroll-spy e helpers
└── index.css             ← tokens de design (cores e fontes) do Tailwind
```

## Formulário de contato

Usa **Netlify Forms**: as mensagens aparecem no painel da Netlify em *Site → Forms*. Na primeira vez, ative a detecção de formulários em *Forms → Enable form detection* e faça um novo deploy. O envio só funciona no site publicado, não no `npm run dev`.
