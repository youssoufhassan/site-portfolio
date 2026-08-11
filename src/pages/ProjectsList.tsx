import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectsList() {
  return (
    <main
      className="container"
      style={{
        paddingTop: "var(--space-5)",
        paddingBottom: "var(--space-6)",
      }}
    >
      <Link to="/" className="eyebrow">
        ← Accueil
      </Link>
      <h1
        style={{
          fontSize: "2rem",
          margin: "var(--space-3) 0 var(--space-2) 0",
        }}
      >
        Projets
      </h1>
      <p style={{ maxWidth: "56ch", marginBottom: "var(--space-4)" }}>
        Voici les projets que j'ai construits, personnels et universitaires.
        Chacun est documenté avec son cahier des charges, les technologies
        utilisées et ce que j'en ai retiré.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)",
        }}
      >
        {projects.map((p, i) => (
          <div key={p.id}>
            <a
              href={`/docs/${p.id}.html`}
              style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem" }}
            >
              {p.title}
            </a>
            <span
              style={{
                fontSize: "0.85rem",
                color: "var(--ink-faint)",
                marginLeft: "var(--space-1)",
              }}
            >
              — {p.category === "personal" ? "Personnel" : "Universitaire"}
            </span>

            <p style={{ margin: "0.4rem 0 0.5rem 0" }}>{p.summary}</p>

            <p style={{ fontSize: "0.82rem", color: "var(--ink)", margin: 0 }}>
              Technologies : {p.techStack.join(", ")} — Compétences acquises :{" "}
              {p.skillsAcquired.join(", ")}
            </p>

            {i < projects.length - 1 && (
              <hr className="rule" style={{ margin: "var(--space-4) 0 0 0" }} />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
