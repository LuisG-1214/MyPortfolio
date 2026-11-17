import { motion } from "motion/react";
import { LuArrowDown, LuDownload } from "react-icons/lu";
import { profile } from "../data/portfolio";
import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";
import { SocialLinks } from "../components/SocialLinks";
import { TechIcon } from "../components/TechIcon";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

/** Chips que flutuam em volta da foto. */
const orbit = [
  { name: "React", className: "top-6 -left-4 sm:-left-8" },
  { name: "Node.js", className: "top-1/2 -right-6 sm:-right-10" },
  { name: "Docker", className: "bottom-8 left-0 sm:-left-4" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <Container className="relative grid items-center gap-14 md:grid-cols-[1.35fr_1fr]">
        <div>
          {profile.available && (
            <motion.p {...fadeUp(0)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-sm text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Disponível para novos projetos
            </motion.p>
          )}

          <motion.h1 {...fadeUp(0.08)} className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-gradient">{profile.role}</span>
          </motion.p>

          <motion.p {...fadeUp(0.24)} className="mt-6 max-w-xl text-lg text-pretty text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projetos">
              Ver projetos <LuArrowDown className="size-4" />
            </ButtonLink>
            {profile.links.cv ? (
              <ButtonLink variant="ghost" href={profile.links.cv} download>
                <LuDownload className="size-4" /> Baixar CV
              </ButtonLink>
            ) : (
              <ButtonLink variant="ghost" href="#contato">Fale comigo</ButtonLink>
            )}
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="mt-8">
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-64 sm:w-80 md:w-full md:max-w-sm"
        >
          <div aria-hidden className="absolute -inset-6 rounded-full bg-linear-to-tr from-accent/30 to-accent-2/30 blur-3xl" />
          <div className="relative aspect-square rounded-full bg-linear-to-tr from-accent to-accent-2 p-[2px]">
            <img
              src={profile.avatar}
              alt={`Foto de ${profile.name}`}
              width={640}
              height={640}
              className="size-full rounded-full bg-surface object-cover brightness-125 contrast-105"
            />
          </div>

          {orbit.map(({ name, className }, i) => (
            <motion.div
              key={name}
              className={`absolute ${className}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 0.6 + i * 0.15 },
                y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 },
              }}
            >
              <span className="flex items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1.5 font-mono text-xs text-muted shadow-lg shadow-black/40 backdrop-blur">
                <TechIcon name={name} className="size-4" /> {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
