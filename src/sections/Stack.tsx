import type { IconType } from "react-icons";
import { LuCode, LuDatabase, LuLayers, LuPanelsTopLeft, LuRocket, LuServer } from "react-icons/lu";
import { skills, type SkillGroup } from "../data/portfolio";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { SpotlightCard } from "../components/SpotlightCard";
import { TechChip } from "../components/TechIcon";

const groupIcon: Record<SkillGroup, IconType> = {
  lang: LuCode,
  front: LuPanelsTopLeft,
  back: LuServer,
  db: LuDatabase,
  infra: LuRocket,
  arch: LuLayers,
};

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="stack"
      title="Do banco de dados ao pixel"
      description="As ferramentas que uso no dia a dia, organizadas por camada da aplicação."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = groupIcon[group.group];
          return (
            <Reveal key={group.title} delay={i * 0.08}>
              <SpotlightCard className="h-full p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => <TechChip key={item} name={item} size="md" />)}
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
