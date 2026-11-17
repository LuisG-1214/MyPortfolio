import type { IconType } from "react-icons";
import { LuGlobe, LuLayoutDashboard, LuRocket, LuServer } from "react-icons/lu";
import { services, type ServiceIcon } from "../data/portfolio";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { SpotlightCard } from "../components/SpotlightCard";
import { TechChip } from "../components/TechIcon";

const icons: Record<ServiceIcon, IconType> = {
  system: LuLayoutDashboard,
  api: LuServer,
  site: LuGlobe,
  deploy: LuRocket,
};

export function Services() {
  return (
    <Section
      id="servicos"
      eyebrow="serviços"
      title="Como posso ajudar o seu negócio"
      description="Cuido do projeto de ponta a ponta: arquitetura, back-end, front-end e deploy — você fala com uma pessoa só."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <Reveal key={service.title} delay={i * 0.08}>
              <SpotlightCard className="flex h-full flex-col p-7">
                <span className="mb-6 grid size-12 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-2 flex-1 text-pretty text-muted">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {service.techs.map((t) => <TechChip key={t} name={t} />)}
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
