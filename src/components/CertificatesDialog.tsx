import { useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuX } from "react-icons/lu";
import { certificates } from "../data/portfolio";

type Props = { open: boolean; onClose: () => void };

/** Modal com os certificados. Usa <dialog> nativo (ESC fecha, foco preso dentro). */
export function CertificatesDialog({ open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const cert = certificates[index];

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const go = (step: number) => setIndex((i) => (i + step + certificates.length) % certificates.length);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      aria-label="Certificados"
      className="m-auto w-[min(92vw,56rem)] rounded-2xl border border-line bg-surface p-0 text-fg backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <p className="font-medium">
          Certificado de {cert.title}{" "}
          <span className="font-mono text-sm text-subtle">
            {index + 1}/{certificates.length}
          </span>
        </p>
        <button type="button" onClick={onClose} aria-label="Fechar"
                className="grid size-9 place-items-center rounded-full text-muted hover:bg-surface-2 hover:text-fg">
          <LuX className="size-5" />
        </button>
      </div>

      <div className="relative bg-bg p-4">
        <img src={cert.image} alt={`Certificado de ${cert.title}`} className="mx-auto max-h-[65vh] rounded-lg" />
        <button type="button" onClick={() => go(-1)} aria-label="Anterior"
                className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface/90 hover:text-accent">
          <LuChevronLeft className="size-5" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Próximo"
                className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface/90 hover:text-accent">
          <LuChevronRight className="size-5" />
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2 border-t border-line p-4">
        {certificates.map((c, i) => (
          <button key={c.title} type="button" onClick={() => setIndex(i)}
                  className={`rounded-full px-3 py-1 font-mono text-xs transition ${
                    i === index ? "bg-accent text-bg" : "border border-line text-muted hover:text-fg"
                  }`}>
            {c.title}
          </button>
        ))}
      </div>
    </dialog>
  );
}
