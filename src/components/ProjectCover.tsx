import { Fragment } from "react";
import { LuArrowRight } from "react-icons/lu";
import type { Project } from "../data/portfolio";
import { TechIcon } from "./TechIcon";

type Props = { project: Project; className?: string; eager?: boolean };

/**
 * Capa do projeto.
 * - landscape: print de desktop ocupando todo o espaço
 * - portrait: print de celular/logo "flutuando" sobre um fundo
 * - sem imagem, com diagrama: fluxo da arquitetura
 * - sem imagem: capa gerada com o nome do projeto
 */
export function ProjectCover({ project, className = "", eager }: Props) {
  const [cover] = project.images;
  const loading = eager ? "eager" : "lazy";
  const label = project.coverLabel ?? `{ ${project.kind} }`;

  if (!cover && project.diagram) {
    return (
      <div className={`@container relative overflow-hidden bg-linear-to-br from-surface-2 via-surface to-bg ${className}`}>
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute -right-10 -bottom-10 size-56 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative flex h-full items-center justify-center gap-1.5 p-4 @md:gap-3 @md:p-8">
          {project.diagram.map((node, i) => (
            <Fragment key={node.label}>
              {i > 0 && (
                <LuArrowRight aria-hidden className="size-3.5 shrink-0 text-accent @md:size-4" />
              )}
              <div className="min-w-0 flex-1 rounded-xl border border-line bg-bg/70 px-1.5 py-2.5 text-center backdrop-blur transition duration-500 group-hover:border-accent/30 @md:px-4 @md:py-3 @md:text-left">
                <p className="truncate font-mono text-[11px] text-accent @md:text-sm">{node.label}</p>
                <p className="hidden text-sm text-muted @md:block">{node.detail}</p>
                {node.techs && (
                  <div className="mt-2 hidden gap-2 @md:flex">
                    {node.techs.map((t) => (
                      <span key={t} title={t} className="grid size-7 place-items-center rounded-md border border-line bg-surface-2">
                        <TechIcon name={t} className="size-4" />
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  }

  if (!cover) {
    return (
      <div className={`relative overflow-hidden bg-linear-to-br from-surface-2 via-surface to-bg ${className}`}>
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute -right-10 -bottom-10 size-48 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid h-full place-items-center p-6">
          <span className={`text-center font-mono font-medium tracking-tight text-gradient ${
            label.length > 16 ? "text-xl md:text-2xl" : "text-4xl md:text-5xl"
          }`}>
            {label}
          </span>
        </div>
      </div>
    );
  }

  if (project.coverStyle === "portrait") {
    return (
      <div className={`relative overflow-hidden bg-linear-to-br from-surface-2 via-surface to-bg ${className}`}>
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="absolute top-1/3 left-1/2 size-56 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        {/* "Celular" que ocupa toda a altura e é cortado embaixo */}
        <div className="absolute top-8 -bottom-6 left-1/2 aspect-[2/3] max-w-[80%] -translate-x-1/2 overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/60 transition-transform duration-500 group-hover:-translate-y-2">
          <img src={cover} alt={`Tela do projeto ${project.title}`} loading={loading} className="size-full object-cover object-top" />
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={cover}
        alt={`Tela do projeto ${project.title}`}
        loading={loading}
        className="size-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}
