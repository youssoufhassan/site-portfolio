import { Link } from "react-router-dom";

export default function About() {
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

      <header
        style={{
          marginTop: "var(--space-3)",
          maxWidth: "65ch",
        }}
      >
        <p className="eyebrow">À propos</p>

        <h1
          style={{
            fontSize: "2.2rem",
            margin: "var(--space-2) 0",
          }}
        >
          Youssouf Hassan
        </h1>

        <p>
          Je suis étudiant en informatique et je m'intéresse avant tout au
          développement logiciel : programmer, concevoir des applications et
          comprendre les mécanismes qui permettent à un logiciel de fonctionner.
        </p>

        <p>
          Cette curiosité m'amène naturellement vers d'autres domaines de
          l'informatique : les systèmes, les réseaux, la cybersécurité et le
          développement web.
        </p>

        <p>
          Je préfère apprendre en construisant. Mes projets et mes notes
          techniques sont une manière de mettre en pratique ce que j'apprends,
          d'expérimenter et de documenter ce que je comprends.
        </p>
      </header>

      <hr className="rule" />

      <section>
        <p className="eyebrow" style={{ marginBottom: "var(--space-2)" }}>
          Domaines
        </p>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            lineHeight: 1.8,
          }}
        >
          Développement logiciel · Programmation · Systèmes · Réseaux ·
          Cybersécurité · Développement web
        </p>
      </section>

      <hr className="rule" />

      <section>
        <p className="eyebrow" style={{ marginBottom: "var(--space-2)" }}>
          En ce moment
        </p>

        <p>
          Je recherche actuellement un stage de 4 mois en développement logiciel
          pour travailler sur des problèmes réels et continuer à progresser au
          sein d'une équipe.
        </p>
      </section>

      <hr className="rule" />

      <section>
        <p className="eyebrow" style={{ marginBottom: "var(--space-2)" }}>
          Liens
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-2)",
          }}
        >
          <a
            href="https://github.com/youssoufhassan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub →
          </a>

          <Link to="/projects">Projets →</Link>

          <Link to="/notes">Notes techniques →</Link>

          <Link to="/contact">Contact →</Link>
        </div>
      </section>
    </main>
  );
}
