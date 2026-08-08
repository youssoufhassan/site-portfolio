import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="container" style={{ paddingTop: "var(--space-5)", paddingBottom: "var(--space-6)" }}>
      <Link to="/" className="eyebrow">
        ← Accueil
      </Link>

      <h1 style={{ fontSize: "2rem", margin: "var(--space-3) 0" }}>À propos</h1>

      <p style={{ maxWidth: "60ch" }}>
        [Remplace ce paragraphe : ta formation actuelle, ton année d'études,
        ce qui t'intéresse concrètement en développement logiciel — reste
        factuel plutôt que générique.]
      </p>

      <hr className="rule" />

      <section>
        <p className="eyebrow" style={{ marginBottom: "var(--space-1)" }}>
          Contact
        </p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <li>
            <a href="https://github.com/youssoufhassan" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn [lien à ajouter]
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
