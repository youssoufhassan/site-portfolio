import { Link } from "react-router-dom";
import { notes } from "../data/notes";

export default function NotesList() {
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
          marginBottom: "var(--space-5)",
          maxWidth: "68ch",
        }}
      >
        <p
          style={{
            fontSize: "1.4rem",
            lineHeight: 1.5,
            color: "var(--ink)",
          }}
        >
          Qu'est-ce que j'essaie de comprendre aujourd'hui ?
        </p>
      </header>

      <section>
        <p
          className="eyebrow"
          style={{
            marginBottom: "var(--space-2)",
          }}
        >
          Notes techniques
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {notes.map((note) => (
            <li
              key={note.id}
              style={{
                borderTop: "1px solid var(--rule)",
              }}
            >
              <a
                href={`/docs/notes/${note.id}.html`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "var(--space-3)",
                  alignItems: "start",
                  padding: "var(--space-3) 0",
                  textDecoration: "none",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "1.15rem",
                      marginBottom: "0.4rem",
                      color: "var(--ink)",
                    }}
                  >
                    {note.title}
                  </h2>

                  <p
                    style={{
                      maxWidth: "65ch",
                      fontSize: "0.92rem",
                      marginBottom: note.complexity ? "0.5rem" : "0",
                    }}
                  >
                    {note.summary}
                  </p>

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
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    whiteSpace: "nowrap",
                    paddingTop: "0.2rem",
                  }}
                >
                  Lire →
                </span>
              </a>
            </li>
          ))}

          <li
            style={{
              borderTop: "1px solid var(--rule)",
            }}
          />
        </ul>
      </section>
    </main>
  );
}
