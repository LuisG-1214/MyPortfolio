import type { IconType } from "react-icons";
import {
  SiBootstrap, SiCakephp, SiCss, SiDocker, SiExpress, SiGit, SiGithub, SiGithubactions, SiHtml5, SiJavascript,
  SiLinux, SiMui, SiMysql, SiNodedotjs, SiPhp, SiPostgresql, SiPrisma, SiReact, SiTailwindcss, SiTypescript,
} from "react-icons/si";
import { LuDatabase, LuServer } from "react-icons/lu";

/** Ícone + cor oficial de cada tecnologia. Para adicionar uma nova, inclua aqui. */
const techs: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#2965F1" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Material UI": { icon: SiMui, color: "#007FFF" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  PHP: { icon: SiPhp, color: "#8892BF" },
  SQL: { icon: LuDatabase, color: "#a1a1aa" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Express: { icon: SiExpress, color: "#fafafa" },
  Prisma: { icon: SiPrisma, color: "#E2E8F0" },
  CakePHP: { icon: SiCakephp, color: "#D33C43" },
  "API REST": { icon: LuServer, color: "#a1a1aa" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { icon: SiPostgresql, color: "#699ECA" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#fafafa" },
};

export function TechIcon({ name, className = "size-4" }: { name: string; className?: string }) {
  const tech = techs[name];
  if (!tech) return null;
  const Icon = tech.icon;
  return <Icon aria-hidden className={className} style={{ color: tech.color }} />;
}

export function TechChip({ name, size = "sm" }: { name: string; size?: "sm" | "md" }) {
  const pad = size === "md" ? "px-3 py-1.5 text-sm gap-2" : "px-2.5 py-1 text-xs gap-1.5";
  return (
    <span className={`inline-flex items-center rounded-full border border-line bg-surface-2/60 font-mono text-muted ${pad}`}>
      <TechIcon name={name} className={size === "md" ? "size-4" : "size-3.5"} />
      {name}
    </span>
  );
}
