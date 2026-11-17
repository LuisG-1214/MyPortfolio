import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: Props) {
  return (
    <section id={id} className="py-20 md:py-28">
      <Container>
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-accent">// {eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-lg text-pretty text-muted">{description}</p>}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
