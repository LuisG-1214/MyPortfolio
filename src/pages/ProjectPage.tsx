import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight, LuBookOpen, LuLock } from "react-icons/lu";
import { layerLabel, profile, projects, type Layer } from "../data/portfolio";
import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import { ProjectCover } from "../components/ProjectCover";
import { Reveal } from "../components/Reveal";
import { TechChip } from "../components/TechIcon";
import NotFound from "./NotFound";

export default function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setShown(0);
    if (project) document.title = `${project.title} — ${profile.name}`;
    return () => { document.title = `${profile.name} — ${profile.role}`; };
  }, [project]);

  if (!project) return <NotFound />;

  const next = projects[(index + 1) % projects.length];
  const { demo, repo, docs } = project.links;
  const cs = project.caseStudy;
  const isPortrait = project.coverStyle === "portrait";

  return (
    <article className="pt-28 pb-20 md:pt-36">
      <Container>
        <Link to="/#projetos" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
          <LuArrowLeft className="size-4" /> Todos os projetos
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 max-w-3xl"
        >
          <p className="flex items-center gap-2 font-mono text-sm text-accent">
            {project.kind}
            {project.live && <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs">em produção</span>}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">{project.title}</h1>
          <p className="mt-5 text-xl text-pretty text-muted">{project.summary}</p>

          {project.confidential && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted">
              <LuLock className="size-4 text-accent" /> Projeto corporativo: código e telas são confidenciais.
            </p>
          )}

          {(demo || repo || docs) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {demo && <ButtonLink href={demo}>Ver online <LuArrowUpRight className="size-4" /></ButtonLink>}
              {repo && <ButtonLink variant="ghost" href={repo}><FaGithub className="size-4" /> Código</ButtonLink>}
              {docs && <ButtonLink variant="ghost" href={docs}><LuBookOpen className="size-4" /> Documentação</ButtonLink>}
            </div>
          )}
        </motion.header>

        {/* Galeria */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          {project.images.length === 0 || (isPortrait && project.images.length === 1) ? (
            <ProjectCover project={project} eager className="h-80 rounded-2xl border border-line md:h-[28rem]" />
          ) : (
            <>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                <img src={project.images[shown]} alt={`Tela ${shown + 1} do projeto ${project.title}`}
                     className="mx-auto max-h-[70vh] w-full object-contain" />
              </div>
              {project.images.length > 1 && (
                <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                  {project.images.map((img, i) => (
                    <button key={img} type="button" onClick={() => setShown(i)} aria-label={`Ver imagem ${i + 1}`}
                            className={`h-20 w-32 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                              i === shown ? "border-accent" : "border-line opacity-60 hover:opacity-100"
                            }`}>
                      <img src={img} alt="" loading="lazy" className="size-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-[1fr_18rem]">
          <div className="space-y-12">
            {cs ? (
              <>
                <Reveal>
                  <h2 className="mb-3 font-mono text-sm text-accent">// o problema</h2>
                  <p className="text-lg text-pretty text-muted">{cs.problem}</p>
                </Reveal>
                <Reveal>
                  <h2 className="mb-3 font-mono text-sm text-accent">// a solução</h2>
                  <p className="text-lg text-pretty text-muted">{cs.solution}</p>
                </Reveal>
                {cs.highlights && (
                  <Reveal>
                    <h2 className="mb-4 font-mono text-sm text-accent">// destaques</h2>
                    <ul className="space-y-3">
                      {cs.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-lg text-muted">
                          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}
                {cs.result && (
                  <Reveal>
                    <h2 className="mb-3 font-mono text-sm text-accent">// resultado</h2>
                    <p className="text-lg text-pretty text-muted">{cs.result}</p>
                  </Reveal>
                )}
              </>
            ) : (
              <p className="text-lg text-muted">{project.summary}</p>
            )}
          </div>

          <aside>
            <Reveal className="rounded-2xl border border-line bg-surface p-6 md:sticky md:top-24">
              <h2 className="mb-5 font-mono text-sm text-subtle">// stack</h2>
              <dl className="space-y-5">
                {(Object.entries(project.stack) as [Layer, string[]][]).map(([layer, items]) => (
                  <div key={layer}>
                    <dt className="mb-2 text-sm font-medium">{layerLabel[layer]}</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {items.map((t) => <TechChip key={t} name={t} />)}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </aside>
        </div>

        {/* Próximo projeto */}
        <Link to={`/projetos/${next.slug}`}
              className="group mt-24 flex items-center justify-between rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/40 md:p-8">
          <span>
            <span className="block font-mono text-sm text-subtle">próximo projeto</span>
            <span className="mt-1 block text-2xl font-semibold tracking-tight md:text-3xl">{next.title}</span>
          </span>
          <LuArrowRight className="size-6 text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
        </Link>
      </Container>
    </article>
  );
}
