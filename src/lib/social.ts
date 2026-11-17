import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { SiLinktree } from "react-icons/si";
import { profile } from "../data/portfolio";

export type SocialLink = { label: string; href: string; icon: IconType };

/** Lista os links preenchidos em profile.links (os vazios não aparecem). */
export function getSocialLinks(): SocialLink[] {
  const { github, linkedin, email, linktree } = profile.links;
  const links: (SocialLink | false | "" | undefined)[] = [
    github && { label: "GitHub", href: github, icon: FaGithub },
    linkedin && { label: "LinkedIn", href: linkedin, icon: FaLinkedin },
    email && { label: "E-mail", href: `mailto:${email}`, icon: LuMail },
    linktree && { label: "Linktree", href: linktree, icon: SiLinktree },
  ];
  return links.filter((l): l is SocialLink => Boolean(l));
}
