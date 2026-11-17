import { useState } from "react";
import { LuArrowRight, LuAward } from "react-icons/lu";
import { certificates, profile, projects } from "../data/portfolio";
import { CertificatesDialog } from "../components/CertificatesDialog";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { SpotlightCard } from "../components/SpotlightCard";

export function About() {
  const [certsOpen, setCertsOpen] = useState(false);

  const years = Math.max(1, Math.floor((Date.now() - profile.fullStackSince.getTime()) / (365.25 * 24 * 3600 * 1000)));
  const stats = [
    { value: `${years}+ ${years === 1 ? "ano" : "anos"}`, label: "como dev full stack" },
    { value: projects.filter((p) => p.live).length, label: "projetos em produção" },
    { value: "Front + Back + DevOps", label: "da interface ao deploy" },
  ];

  return (
    <Section id="sobre" eyebrow="sobre" title="Um pouco sobre mim">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg text-pretty text-muted">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </Reveal>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className={i === stats.length - 1 ? "col-span-2" : ""}>
                <SpotlightCard className="h-full p-5">
                  <p className="text-3xl font-semibold tracking-tight">{s.value}</p>
                  <p className="mt-1 text-sm text-subtle">{s.label}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          {certificates.length > 0 && (
            <Reveal delay={0.2}>
              <button type="button" onClick={() => setCertsOpen(true)}
                      className="group flex w-full items-center gap-4 rounded-2xl border border-line bg-surface p-5 text-left transition hover:border-accent/40">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                  <LuAward className="size-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-medium">{certificates.length} certificações</span>
                  <span className="block text-sm text-subtle">{certificates.map((c) => c.title).join(" · ")}</span>
                </span>
                <LuArrowRight className="size-5 text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
              </button>
            </Reveal>
          )}
        </div>
      </div>

      <CertificatesDialog open={certsOpen} onClose={() => setCertsOpen(false)} />
    </Section>
  );
}
