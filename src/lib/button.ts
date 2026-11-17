export type ButtonVariant = "primary" | "ghost";

const styles: Record<ButtonVariant, string> = {
  primary: "bg-fg text-bg hover:bg-accent hover:shadow-[0_0_32px_-6px_var(--color-accent)]",
  ghost: "border border-line text-fg hover:border-accent/50 hover:bg-surface",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-300 disabled:opacity-60";

export const buttonClass = (variant: ButtonVariant = "primary") => `${base} ${styles[variant]}`;
