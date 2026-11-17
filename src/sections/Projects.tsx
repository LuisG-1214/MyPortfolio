import { projects } from "../data/portfolio";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projetos"
      eyebrow="projetos"
      title="Coisas que construí"
      description="De sistemas corporativos e APIs a sites em produção para clientes. Clique em um projeto para ver os detalhes."
    >
      {/* Bento grid: o primeiro destaque ocupa 2 colunas e 2 linhas */}
      <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
            <ProjectCard project={project} size={i === 0 ? "lg" : "md"} />
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <>
          <Reveal>
            <h3 className="mt-20 mb-6 font-mono text-sm text-subtle">// outros projetos</h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
