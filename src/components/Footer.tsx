import { LuArrowUp } from "react-icons/lu";
import { profile } from "../data/portfolio";
import { Container } from "./Container";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-medium">{profile.name}</p>
          <p className="text-sm text-subtle">
            © {new Date().getFullYear()} · Feito com React, TypeScript e Tailwind.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <SocialLinks />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
            className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent/50 hover:text-fg"
          >
            <LuArrowUp className="size-[18px]" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
