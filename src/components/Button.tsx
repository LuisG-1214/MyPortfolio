import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { buttonClass, type ButtonVariant } from "../lib/button";

type Props = { variant?: ButtonVariant; to?: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>;

/** Botão-link: usa <Link> para rotas internas (`to`) e <a> para o resto (`href`). */
export function ButtonLink({ variant = "primary", to, className = "", children, ...props }: Props) {
  const cls = `${buttonClass(variant)} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  const external = props.href?.startsWith("http");
  return (
    <a className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} {...props}>
      {children}
    </a>
  );
}
