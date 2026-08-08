import type { ProjectStatus } from "../data/projects";

const LABELS: Record<ProjectStatus, string> = {
  shipped: "Déployé",
  "in-progress": "En cours",
  archived: "Archivé",
};

/**
 * Tampon de statut façon annotation de labo/papier de recherche.
 * C'est l'élément signature du portfolio : chaque projet est classé
 * honnêtement selon son état réel, pas présenté comme "fini" par défaut.
 */
export default function StatusStamp({ status }: { status: ProjectStatus }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: status === "shipped" ? "var(--accent-ink)" : "var(--ink-faint)",
        border: `1px solid ${status === "shipped" ? "var(--accent)" : "var(--rule)"}`,
        borderRadius: "var(--radius)",
        padding: "2px 8px",
        display: "inline-block",
        background: status === "shipped" ? "var(--accent-soft)" : "transparent",
      }}
    >
      {LABELS[status]}
    </span>
  );
}
