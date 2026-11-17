import { Link } from "react-router-dom";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "../data/portfolio";
import { ProjectCover } from "./ProjectCover";
import { SpotlightCard } from "./SpotlightCard";
import { TechChip } from "./TechIcon";

type Props = { project: Project; size?: "lg" | "md"; className?: string };

export function ProjectCard({ project, size = "md", className = "" }: Props) {
  const techs = [...new Set(Object.values(project.stack).flat())].slice(0, size === "lg" ? 6 : 4);
  const { demo, repo } = project.links;

  return (
    <SpotlightCard className={`group flex h-full flex-col overflow-hidden ${className}`}>
      <ProjectCover
        project={project}
        className={`border-b border-line ${size === "lg" ? "h-64 md:h-auto md:min-h-80 md:flex-1" : "h-48"}`}
      />

      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center gap-2 font-mono text-xs text-subtle">
          <span>{project.kind}</span>
          {project.live && (
            <span className="whitespace-nowrap rounded-full bg-accent/10 px-2 py-0.5 text-accent">em produção</span>
          )}
        </div>

        <h3 className={`font-semibold tracking-tight ${size === "lg" ? "text-2xl" : "text-xl"}`}>
          {/* O ::after estica o link para o card inteiro ficar clicável */}
          <Link to={`/projetos/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.title}
          </Link>
        </h3>
        <p className="text-pretty text-muted">{project.summary}</p>

        <div className="flex flex-wrap gap-1.5">
          {techs.map((t) => <TechChip key={t} name={t} />)}
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition group-hover:gap-2.5 group-hover:text-accent">
            Ver detalhes <LuArrowRight className="size-4" />
          </span>
          <div className="relative z-10 flex gap-1">
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer" aria-label={`Código de ${project.title}`}
                 className="grid size-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg">
                <FaGithub className="size-4" />
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`}
                 className="grid size-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg">
                <LuArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
