import { Link } from "react-router-dom";
import { notes } from "../data/notes";

export default function NotesList() {
  return (
    <main className="container" style={{ paddingTop: "var(--space-5)", paddingBottom: "var(--space-6)" }}>
      <Link to="/" className="eyebrow">
        ← Accueil
      </Link>

      <h1 style={{ fontSize: "2rem", margin: "var(--space-3) 0 var(--space-1) 0" }}>
        Documentation — apprentissage
      </h1>
      <p style={{ maxWidth: "56ch", marginBottom: "var(--space-4)" }}>
        Notes techniques sur des algorithmes et concepts que j'étudie,
        écrites avec mes mots pour vérifier ma propre compréhension.
      </p>

      <hr className="rule" />

      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            style={{ padding: "var(--space-3) 0", borderBottom: "1px solid var(--rule)" }}
          >
            <Link to={`/notes/${note.id}`} style={{ textDecoration: "none", display: "block" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--ink)" }}>{note.title}</h3>
              <p style={{ margin: "var(--space-1) 0 0 0" }}>{note.summary}</p>
              {note.complexity && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--ink-faint)",
                  }}
                >
                  Complexité : {note.complexity}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
