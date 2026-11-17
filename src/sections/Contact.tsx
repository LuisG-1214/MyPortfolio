import { useState, type FormEvent } from "react";
import { LuCheck, LuLoaderCircle, LuSend } from "react-icons/lu";
import { buttonClass } from "../lib/button";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/Section";
import { getSocialLinks } from "../lib/social";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Formulário enviado pelo Netlify Forms (as mensagens aparecem no painel da Netlify,
 * em Site > Forms). Só funciona com o site publicado na Netlify, não no `npm run dev`.
 */
export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-subtle transition focus:border-accent/60 focus:outline-none";

  return (
    <Section
      id="contato"
      eyebrow="contato"
      title={<>Vamos construir <span className="text-gradient">algo juntos?</span></>}
      description="Precisa de um sistema, uma API ou um site? Conte sobre o seu projeto e eu retorno com os próximos passos."
    >
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <form name="contato" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}
                className="grid gap-4 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-2">
            <input type="hidden" name="form-name" value="contato" />
            <p hidden>
              <label>Não preencha: <input name="bot-field" /></label>
            </p>

            <label className="grid gap-2 text-sm text-muted">
              Nome
              <input name="nome" required autoComplete="name" placeholder="Seu nome" className={input} />
            </label>
            <label className="grid gap-2 text-sm text-muted">
              E-mail
              <input name="email" type="email" required autoComplete="email" placeholder="voce@email.com" className={input} />
            </label>
            <label className="grid gap-2 text-sm text-muted sm:col-span-2">
              Mensagem
              <textarea name="mensagem" required rows={5} placeholder="Conte um pouco sobre o projeto…" className={`${input} resize-y`} />
            </label>

            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button type="submit" disabled={status === "sending"} className={buttonClass()}>
                {status === "sending" ? (
                  <><LuLoaderCircle className="size-4 animate-spin" /> Enviando…</>
                ) : (
                  <><LuSend className="size-4" /> Enviar mensagem</>
                )}
              </button>
              <p role="status" className="text-sm">
                {status === "sent" && (
                  <span className="inline-flex items-center gap-1.5 text-emerald-400">
                    <LuCheck className="size-4" /> Mensagem enviada! Logo eu respondo.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-400">Não foi possível enviar. Tente pelos links ao lado.</span>
                )}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 font-mono text-sm text-subtle">// ou me encontre em</p>
          <ul className="grid gap-3">
            {getSocialLinks().map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer"
                   className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition hover:border-accent/40">
                  <span className="grid size-10 place-items-center rounded-xl border border-line bg-surface-2 text-muted transition group-hover:text-accent">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-medium">{label}</span>
                    <span className="block truncate text-sm text-subtle">
                      {href.replace(/^mailto:|^https?:\/\/(www\.)?/g, "")}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
