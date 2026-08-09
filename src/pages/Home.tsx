import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main
      className="container"
      style={{ paddingTop: "var(--space-5)", paddingBottom: "var(--space-6)" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "var(--space-4)",
          alignItems: "start",
        }}
      >
        <div>
          <p className="eyebrow">
            Licence 3 Informatique — Université de Bordeaux
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              marginTop: "var(--space-1)",
              lineHeight: 1.15,
            }}
          >
            Youssouf
            <br />
            Hassan
          </h1>
          <p
            style={{
              maxWidth: "38ch",
              marginTop: "var(--space-2)",
              fontSize: "1.05rem",
            }}
          >
            Je comprends en profondeur ce que je construis, plutôt que d'empiler
            des lignes de code. Ce site documente ce chemin.
          </p>
        </div>

        <div
          style={{
            borderLeft: "1px solid var(--rule)",
            paddingLeft: "var(--space-3)",
          }}
        >
          <p className="eyebrow" style={{ marginBottom: "var(--space-1)" }}>
            En ce moment
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.15rem",
              color: "var(--ink)",
            }}
          >
            [Remplace par ce sur quoi tu travailles vraiment cette semaine.]
          </p>
          <Link to="/about">À propos de mon parcours →</Link>
        </div>
      </div>

      <div style={{ height: "var(--space-4)" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-2)",
        }}
      >
        <Link
          to="/projects"
          style={{
            display: "block",
            background: "var(--paper-raised)",
            borderRadius: "10px",
            padding: "var(--space-3)",
            textDecoration: "none",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", marginBottom: "4px" }}>Projets</h3>
          <p style={{ fontSize: "0.9rem", marginBottom: "var(--space-1)" }}>
            Personnels et universitaires, classés selon leur nature dans chaque
            cahier des charges.
          </p>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--ink-faint)",
            }}
          >
            Voir tous les projets →
          </span>
        </Link>

        <Link
          to="/notes"
          style={{
            display: "block",
            background: "var(--paper-raised)",
            borderRadius: "10px",
            padding: "var(--space-3)",
            textDecoration: "none",
          }}
        >
          <h3 style={{ fontSize: "1.3rem", marginBottom: "4px" }}>
            Documentation
          </h3>
          <p style={{ fontSize: "0.9rem", marginBottom: "var(--space-1)" }}>
            Plusieurs sujets — clique sur celui qui t'intéresse pour le lire en
            détail.
          </p>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--ink-faint)",
            }}
          >
            Parcourir les sujets →
          </span>
        </Link>
      </div>
    </main>
  );
}
