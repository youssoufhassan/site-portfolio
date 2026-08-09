import { useParams, Link } from "react-router-dom";
import { notes } from "../data/notes";
import CodeViewer from "../components/CodeViewer";

export default function NoteDetail() {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return (
      <main className="container" style={{ paddingTop: "var(--space-5)" }}>
        <p>Note introuvable.</p>
        <Link to="/notes">← Retour</Link>
      </main>
    );
  }

  return (
    <main className="container" style={{ paddingTop: "var(--space-5)", paddingBottom: "var(--space-6)" }}>
      <Link to="/notes" className="eyebrow">
        ← Documentation
      </Link>

      <h1 style={{ fontSize: "2rem", margin: "var(--space-3) 0 var(--space-1) 0" }}>
        {note.title}
      </h1>
      <p style={{ fontSize: "1.05rem" }}>{note.summary}</p>
      {note.complexity && (
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--ink-faint)",
          }}
        >
          Complexité : {note.complexity}
        </p>
      )}

      <hr className="rule" />

      <section style={{ marginBottom: "var(--space-4)" }}>
        <p className="eyebrow" style={{ marginBottom: "var(--space-1)" }}>
          Explication
        </p>
        <p style={{ whiteSpace: "pre-line" }}>{note.explanation}</p>
      </section>

      <CodeViewer files={note.codeFiles} />

      {note.sources && note.sources.length > 0 && (
        <section style={{ marginTop: "var(--space-4)" }}>
          <p className="eyebrow" style={{ marginBottom: "var(--space-1)" }}>
            Sources
          </p>
          <ul>
            {note.sources.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
