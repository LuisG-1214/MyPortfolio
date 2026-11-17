/**
 * ============================================================
 *  TODO O CONTEÚDO DO PORTFÓLIO FICA AQUI.
 *  Para atualizar o site, edite só este arquivo.
 *
 *  Procure por "TODO" para ver o que ainda falta preencher.
 *  Campos opcionais que ficarem vazios simplesmente não aparecem no site.
 * ============================================================
 */

import avatar from "../assets/avatar.webp";

import devburguer1 from "../assets/projects/devburguer-1.webp";
import devburguer2 from "../assets/projects/devburguer-2.webp";
import devburguer3 from "../assets/projects/devburguer-3.webp";
import palette1 from "../assets/projects/palette-1.webp";
import palette2 from "../assets/projects/palette-2.webp";
import palette3 from "../assets/projects/palette-3.webp";
import petlife1 from "../assets/projects/petlife-1.webp";
import petlife2 from "../assets/projects/petlife-2.webp";
import petlife3 from "../assets/projects/petlife-3.webp";
import petlifeMobile from "../assets/projects/petlife-mobile.webp";
import freteMobile from "../assets/projects/frete-mobile.webp";
import inconformadosMobile from "../assets/projects/inconformados-mobile.webp";

import certHtml from "../assets/certificates/html.webp";
import certCss from "../assets/certificates/css.webp";
import certJs from "../assets/certificates/javascript.webp";
import certReact from "../assets/certificates/react.webp";
import certBootstrap from "../assets/certificates/bootstrap.webp";

/* ------------------------------------------------------------------ */
/* Perfil                                                              */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Luis Gustavo",
  role: "Desenvolvedor Full-Stack",
  tagline: "Desenvolvo aplicações web completas — da arquitetura e da API até o deploy.",
  /** Mostra o selo "Disponível para novos projetos" no topo. */
  available: true,
  /** Início da atuação como dev full stack (o "X anos de experiência" é calculado a partir daqui). */
  fullStackSince: new Date(2025, 2), // março de 2025
  avatar,
  about: [
    "Sou desenvolvedor Full-Stack, formado em Análise e Desenvolvimento de Sistemas. Crio aplicações web completas: desenho a arquitetura, construo a API e o banco de dados, desenvolvo a interface e cuido do deploy.",
    "No back-end trabalho com Node.js, Express, TypeScript e PHP, usando arquitetura em camadas e princípios SOLID para que o sistema seja seguro e fácil de evoluir. No front-end, uso React, Material UI e Tailwind. Para colocar tudo no ar com confiança, uso Docker e pipelines de CI/CD com GitHub Actions.",
  ],
  links: {
    // TODO: confirme se este é o seu usuário do GitHub.
    github: "https://github.com/LuisG-1214",
    // TODO: coloque a URL do seu LinkedIn.
    linkedin: undefined as string | undefined,
    // TODO: coloque seu e-mail profissional (ex.: "voce@email.com").
    email: undefined as string | undefined,
    linktree: "https://linktr.ee/LuisGustavoAlves1214",
    /** Opcional: PDF em /public (ex.: "/cv-luis-gustavo.pdf"). Para clientes, normalmente não é necessário. */
    cv: undefined as string | undefined,
  },
};

/* ------------------------------------------------------------------ */
/* Serviços (o que você oferece aos clientes)                          */
/* ------------------------------------------------------------------ */

export type ServiceIcon = "system" | "api" | "site" | "deploy";

export const services: { icon: ServiceIcon; title: string; description: string; techs: string[] }[] = [
  {
    icon: "system",
    title: "Sistemas web sob medida",
    description: "Sistemas internos, painéis e ferramentas de gestão feitos para o fluxo da sua empresa — do banco de dados à interface.",
    techs: ["React", "Node.js", "TypeScript"],
  },
  {
    icon: "api",
    title: "APIs e back-end",
    description: "APIs seguras e bem estruturadas, com arquitetura em camadas, autenticação robusta e banco de dados relacional.",
    techs: ["Node.js", "Express", "Prisma", "PostgreSQL"],
  },
  {
    icon: "site",
    title: "Sites e landing pages",
    description: "Sites rápidos, responsivos e pensados para transformar visitantes em clientes.",
    techs: ["React", "Tailwind CSS"],
  },
  {
    icon: "deploy",
    title: "Modernização e deploy",
    description: "Refatoração de sistemas legados, containerização e deploy automatizado para publicar com segurança e sem dor de cabeça.",
    techs: ["Docker", "GitHub Actions", "Linux"],
  },
];

/* ------------------------------------------------------------------ */
/* Projetos                                                            */
/* ------------------------------------------------------------------ */

export type Layer = "front" | "back" | "db" | "infra" | "arch";

export type Project = {
  slug: string;
  title: string;
  /** Uma linha de impacto (aparece no card). */
  summary: string;
  /** Rótulo curto do tipo de projeto. */
  kind: string;
  /** Imagens: a primeira é a capa. */
  images: string[];
  /** "landscape" = print de desktop; "portrait" = print de celular/logo. */
  coverStyle?: "landscape" | "portrait";
  /** Texto da capa gerada quando o projeto não tem imagem. */
  coverLabel?: string;
  /** Diagrama de arquitetura usado como capa quando não há imagem (ex.: projetos confidenciais). */
  diagram?: { label: string; detail: string; techs?: string[] }[];
  stack: Partial<Record<Layer, string[]>>;
  links: { demo?: string; repo?: string; docs?: string };
  /** Aparece no bento grid de destaque (ideal: 3). O primeiro fica grande. */
  featured?: boolean;
  /** Projeto em produção / em uso real. */
  live?: boolean;
  /** Projeto corporativo: código e telas não podem ser divulgados. */
  confidential?: boolean;
  caseStudy?: {
    problem: string;
    solution: string;
    highlights?: string[];
    result?: string;
  };
};

export const layerLabel: Record<Layer, string> = {
  front: "Front-end",
  back: "Back-end",
  db: "Banco de dados",
  infra: "DevOps",
  arch: "Arquitetura",
};

export const projects: Project[] = [
  {
    slug: "sistema-de-gestao",
    title: "Sistema de Gestão Interno",
    kind: "Sistema web full stack",
    coverLabel: "{ full stack }",
    diagram: [
      { label: "Interface", detail: "SPA em React", techs: ["React", "Material UI"] },
      { label: "API", detail: "REST em TypeScript", techs: ["Node.js", "Express"] },
      { label: "Deploy", detail: "CI/CD automatizado", techs: ["Docker", "GitHub Actions"] },
    ],
    summary: "Sistema corporativo desenvolvido do zero: módulos que levavam minutos passaram a carregar em segundos.",
    images: [],
    stack: {
      front: ["React", "TypeScript", "Material UI"],
      back: ["Node.js", "Express", "TypeScript"],
      infra: ["Docker", "GitHub Actions"],
    },
    links: {},
    featured: true,
    live: true,
    confidential: true,
    caseStudy: {
      problem: "A equipe dependia de ferramentas lentas: alguns módulos levavam minutos para carregar, o que travava o trabalho do dia a dia.",
      solution: "Desenvolvi do zero um sistema interno full stack, com API em Node.js, Express e TypeScript e interface em React com Material UI, além de todo o fluxo de deploy.",
      highlights: [
        "Autenticação segura com hash de senhas usando salt e pepper",
        "Aplicação containerizada com Docker",
        "Pipeline de CI/CD com GitHub Actions e self-hosted runner, deixando os deploys confiáveis e padronizados",
      ],
      result: "Módulos que antes levavam minutos passaram a carregar em segundos, aumentando a produtividade dos usuários.",
    },
  },
  {
    slug: "frete-em-movimento",
    title: "Frete em Movimento",
    kind: "Site institucional",
    summary: "Site em produção para empresa de transporte, focado em converter visitantes em contatos pelo WhatsApp.",
    images: [freteMobile],
    coverStyle: "portrait",
    stack: { front: ["HTML", "Tailwind CSS", "JavaScript"] },
    links: { demo: "https://freteemmovimento.com.br/" },
    featured: true,
    live: true,
    caseStudy: {
      problem: "A empresa precisava de presença online para captar clientes e transmitir confiança no serviço de fretes.",
      solution: "Desenvolvi um site institucional mobile-first, com mensagem clara dos diferenciais (coleta agendada, suporte e rastreamento) e chamada direta para o WhatsApp.",
      highlights: [
        "Layout mobile-first, pensado para quem chega pelo celular",
        "CTA de WhatsApp sempre visível para reduzir atrito no contato",
        "Publicado em domínio próprio e em uso pelo cliente",
      ],
    },
  },
  {
    slug: "modernizacao-de-sistema",
    title: "Modernização de Sistema Crítico",
    kind: "Arquitetura de software",
    coverLabel: "Domain → Service → Repository",
    diagram: [
      { label: "Domain", detail: "regras de negócio" },
      { label: "Service", detail: "casos de uso" },
      { label: "Repository", detail: "acesso a dados" },
    ],
    summary: "Migração de um sistema crítico para arquitetura em camadas com SOLID, mais seguro e fácil de evoluir.",
    images: [],
    stack: { arch: ["Domain / Service / Repository", "SOLID"] },
    links: {},
    featured: true,
    live: true,
    confidential: true,
    caseStudy: {
      problem: "Um sistema crítico de padronização tinha regras de negócio misturadas pelo código, o que deixava manutenções arriscadas e novas funcionalidades lentas de entregar.",
      solution: "Migrei o sistema para uma arquitetura em camadas — Domain, Service e Repository — seguindo os princípios SOLID, separando regras de negócio, orquestração e acesso a dados.",
      highlights: [
        "Regras de negócio isoladas na camada de domínio",
        "Acesso a dados centralizado em repositórios",
        "Base preparada para receber novas funcionalidades com menos risco",
      ],
      result: "Mais segurança, manutenção mais simples e novas funcionalidades adicionadas com menos esforço.",
    },
  },
  {
    slug: "devocionais-api",
    title: "Devocionais Diárias",
    kind: "API",
    coverLabel: "{ API }",
    summary: "API que fornece devocionais diárias para serem consumidas por sites de igrejas.",
    images: [],
    // TODO: confirme/ajuste a stack usada na API.
    stack: { back: ["API REST"] },
    links: {}, // TODO: adicione repo e documentação (Swagger/Scalar) se houver
    caseStudy: {
      problem: "Sites de igrejas queriam exibir um devocional diferente a cada dia sem precisar atualizar conteúdo manualmente.",
      solution: "Desenvolvi uma API que entrega o devocional do dia, pronta para ser consumida por qualquer site.",
    },
  },
  {
    slug: "inconformados",
    title: "Inconformados",
    kind: "Landing page",
    summary: "Landing page para o grupo de jovens da Igreja Metodista Londrina Sul.",
    images: [inconformadosMobile],
    coverStyle: "portrait",
    stack: { front: ["React", "TypeScript", "Material UI"] },
    links: {}, // TODO: adicione repo/demo
    live: true,
  },
  {
    slug: "dev-burguer",
    title: "Dev Burguer",
    kind: "Web app",
    summary: "Cardápio online com carrinho de compras, construído mobile-first com Tailwind.",
    images: [devburguer1, devburguer2, devburguer3],
    coverStyle: "landscape",
    stack: { front: ["HTML", "Tailwind CSS", "JavaScript"] },
    links: {}, // TODO: adicione repo/demo
    caseStudy: {
      problem: "Restaurantes pequenos precisam de um cardápio digital simples que permita montar o pedido pelo celular.",
      solution: "Cardápio responsivo com carrinho: o cliente adiciona itens, acompanha o total e finaliza o pedido.",
    },
  },
  {
    slug: "palette-creator",
    title: "Palette Creator",
    kind: "Ferramenta web",
    summary: "Gerador de paletas de cores com conversões HEX/HSL e layout SPA responsivo.",
    images: [palette1, palette2, palette3],
    coverStyle: "landscape",
    stack: { front: ["HTML", "CSS", "JavaScript"] },
    links: {}, // TODO: adicione repo/demo
  },
  {
    slug: "petlife",
    title: "PetLife",
    kind: "Landing page",
    summary: "Landing page moderna e responsiva para clínica veterinária, com elementos dinâmicos.",
    images: [petlife1, petlife2, petlife3, petlifeMobile],
    coverStyle: "landscape",
    stack: { front: ["HTML", "CSS", "JavaScript"] },
    links: {}, // TODO: adicione repo/demo
  },
];

/* ------------------------------------------------------------------ */
/* Stack                                                               */
/* ------------------------------------------------------------------ */

export type SkillGroup = "lang" | "front" | "back" | "db" | "infra" | "arch";

/** Os nomes precisam existir em src/components/TechIcon.tsx para ganhar ícone. */
export const skills: { group: SkillGroup; title: string; items: string[] }[] = [
  { group: "lang", title: "Linguagens", items: ["TypeScript", "JavaScript", "PHP", "SQL"] },
  { group: "back", title: "Back-end", items: ["Node.js", "Express", "Prisma", "CakePHP"] },
  { group: "front", title: "Front-end", items: ["React", "Material UI", "Tailwind CSS", "HTML", "CSS"] },
  { group: "db", title: "Banco de dados", items: ["MySQL", "PostgreSQL", "Modelagem relacional"] },
  { group: "infra", title: "DevOps", items: ["Docker", "GitHub Actions", "Git", "Linux"] },
  { group: "arch", title: "Arquitetura", items: ["Onion Architecture", "Domain / Service / Repository", "MVC", "SOLID"] },
];

/* ------------------------------------------------------------------ */
/* Certificados                                                        */
/* ------------------------------------------------------------------ */

export const certificates = [
  { title: "HTML", image: certHtml },
  { title: "CSS", image: certCss },
  { title: "JavaScript", image: certJs },
  { title: "React", image: certReact },
  { title: "Bootstrap", image: certBootstrap },
];
