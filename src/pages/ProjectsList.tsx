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

      <header
        style={{
          marginTop: "var(--space-3)",
          marginBottom: "var(--space-5)",
          maxWidth: "68ch",
        }}
      >
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
          Cette page rassemble les projets que j'ai réalisés au cours de mon
          parcours universitaire et personnel. Ils couvrent différents aspects
          de l'informatique, de la programmation au développement logiciel, en
          passant par les systèmes et les réseaux.
        </p>

        <p
          style={{
            marginTop: "var(--space-2)",
            lineHeight: 1.7,
          }}
        >
          Chaque projet possède sa propre documentation afin de présenter son
          objectif, son fonctionnement, ses choix techniques, les problèmes
          rencontrés et les enseignements que j'en ai tirés.
        </p>
      </header>

      <section>
        <p
          className="eyebrow"
          style={{
            marginBottom: "var(--space-2)",
          }}
        >
          Travaux
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {projects.map((project) => (
            <li
              key={project.id}
              style={{
                borderTop: "1px solid var(--rule)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px 1fr auto",
                  gap: "var(--space-2)",
                  alignItems: "start",
                  padding: "var(--space-3) 0",
                }}
              >
                {/* Année */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--ink-faint)",
                    paddingTop: "0.2rem",
                  }}
                >
                  {project.year}
                </span>

                {/* Informations du projet */}
                <div>
                  <h2
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {project.title}
                  </h2>

                  <p
                    style={{
                      maxWidth: "65ch",
                      fontSize: "0.92rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.summary}
                  </p>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--ink-faint)",
                    }}
                  >
                    {project.techStack.join(" · ")}
                  </span>
                </div>

                {/* Liens */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "0.4rem",
                    paddingTop: "0.2rem",
                  }}
                >
                  <a
                    href={project.documentationUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Documentation →
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--ink-faint)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    GitHub →
                  </a>
                </div>
              </div>
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
