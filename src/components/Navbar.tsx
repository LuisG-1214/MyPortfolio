import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import { profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { Container } from "./Container";

const items = [
  { id: "projetos", label: "Projetos" },
  { id: "servicos", label: "Serviços" },
  { id: "stack", label: "Stack" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];
// "inicio" (o Hero) também é observado para nenhum item ficar ativo no topo da página.
const ids = ["inicio", ...items.map((i) => i.id)];

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const active = useActiveSection(ids, isHome);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Na home rola direto até a seção; nas outras páginas o <Link> leva para "/#secao".
  const goTo = (e: MouseEvent, id: string) => {
    setOpen(false);
    if (!isHome) return;
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  const linkCls = (id: string) =>
    `relative rounded-full px-3 py-1.5 text-sm transition ${active === id ? "text-fg" : "text-muted hover:text-fg"}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open ? "border-b border-line/80 bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" onClick={(e) => isHome && (e.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" }))}
              className="font-mono text-sm font-medium tracking-tight" aria-label="Início">
          <span className="text-accent">&lt;</span>LG<span className="text-accent"> /&gt;</span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map(({ id, label }) => (
              <li key={id}>
                <Link to={`/#${id}`} onClick={(e) => goTo(e, id)} className={linkCls(id)}
                      aria-current={active === id ? "true" : undefined}>
                  {active === id && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                                 transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
                  )}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {profile.links.cv && (
            <a href={profile.links.cv} download
               className="hidden items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm transition hover:border-accent/50 sm:inline-flex">
              <LuDownload className="size-4" /> CV
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full text-muted hover:text-fg md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Menu mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <Container className="flex flex-col gap-1 pb-6">
              {items.map(({ id, label }) => (
                <Link key={id} to={`/#${id}`} onClick={(e) => goTo(e, id)}
                      className={`rounded-xl px-3 py-3 text-lg ${active === id ? "bg-surface text-fg" : "text-muted"}`}>
                  {label}
                </Link>
              ))}
              {profile.links.cv && (
                <a href={profile.links.cv} download className="rounded-xl px-3 py-3 text-lg text-muted">
                  Baixar CV
                </a>
              )}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
