import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="container" style={{ paddingTop: "var(--space-5)", paddingBottom: "var(--space-6)" }}>
      <header style={{ marginBottom: "var(--space-5)" }}>
        <p className="eyebrow">Portfolio — Développement logiciel</p>
        <h1 style={{ fontSize: "2.5rem", marginTop: "var(--space-1)" }}>
          Youssouf Hassan
        </h1>
        <p style={{ maxWidth: "56ch", marginTop: "var(--space-2)" }}>
          Étudiant en informatique, à la recherche d'un stage ou d'une
          alternance en développement logiciel. Ci-dessous, mes projets
          documentés comme des notes de travail : contexte, architecture,
          ce qui a marché, ce qui n'a pas marché.
        </p>
        <nav style={{ marginTop: "var(--space-2)" }}>
          <Link to="/about">À propos →</Link>
        </nav>
      </header>

      <hr className="rule" />

      <section>
        <p className="eyebrow" style={{ marginBottom: "var(--space-2)" }}>
          Projets
        </p>
        <ul>
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </ul>
      </section>
    </main>
  );
}
