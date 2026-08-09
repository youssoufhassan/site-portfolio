import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import StatusStamp from "../components/StatusStamp";
import LiveDemo from "../components/LiveDemo";
import CodeViewer from "../components/CodeViewer";

// Sections dans l'ordre de lecture d'un papier de recherche.
const SECTIONS = [
  { key: "context", label: "Contexte" },
  { key: "specification", label: "Cahier des charges" },
  { key: "architecture", label: "Architecture" },
  { key: "whatILearned", label: "Ce que j'ai appris" },
  { key: "challenges", label: "Défis rencontrés" },
] as const;

const CATEGORY_LABELS = {
  personal: "Projet personnel",
  university: "Projet universitaire",
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="container" style={{ paddingTop: "var(--space-5)" }}>
        <p>Projet introuvable.</p>
        <Link to="/">← Retour</Link>
      </main>
    );
  }

  return (
    <main className="container" style={{ paddingTop: "var(--space-5)", paddingBottom: "var(--space-6)" }}>
      <Link to={`/projects/${project.category}`} className="eyebrow">
        ← {CATEGORY_LABELS[project.category]}s
      </Link>

      <header style={{ margin: "var(--space-3) 0 var(--space-4) 0" }}>
        <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center", flexWrap: "wrap" }}>
          <StatusStamp status={project.status} />
          <span className="eyebrow">{CATEGORY_LABELS[project.category]}</span>
          <span className="eyebrow">{project.year}</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "var(--space-2)" }}>
          {project.title}
        </h1>
        <p style={{ fontSize: "1.05rem", marginTop: "var(--space-1)" }}>
          {project.summary}
        </p>
        <div style={{ display: "flex", gap: "var(--space-1)", flexWrap: "wrap", marginTop: "var(--space-2)" }}>
          {project.techStack.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--ink-soft)",
                border: "1px solid var(--rule)",
                borderRadius: "var(--radius)",
                padding: "2px 8px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <hr className="rule" />

      {SECTIONS.map((section, i) => (
        <section key={section.key} style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
          <span
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--ink-faint)",
              minWidth: "1.5rem",
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h2 style={{ fontSize: "1.15rem", marginBottom: "var(--space-1)" }}>
              {section.label}
            </h2>
            <p>{project[section.key]}</p>
          </div>
        </section>
      ))}

      <CodeViewer files={project.codeFiles} />

      {project.demo && <LiveDemo demo={project.demo} />}

      <hr className="rule" />

      <footer style={{ display: "flex", gap: "var(--space-3)" }}>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          Dépôt GitHub complet
        </a>
        {project.liveDemoUrl && (
          <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
            Voir en ligne
          </a>
        )}
      </footer>
    </main>
  );
}
