import type { HTMLAttributes, MouseEvent } from "react";

/** Card com brilho que segue o cursor. */
export function SpotlightCard({ className = "", onMouseMove, ...props }: HTMLAttributes<HTMLDivElement>) {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
    onMouseMove?.(e);
  };
  return (
    <div
      onMouseMove={handleMove}
      className={`spotlight rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent/40 ${className}`}
      {...props}
    />
  );
}
