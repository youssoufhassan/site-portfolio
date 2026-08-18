import { Link } from "react-router-dom";

export default function Contact() {
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

      <header style={{ marginTop: "var(--space-3)", maxWidth: "70ch" }}>
        <p className="eyebrow">Contact</p>

        <h1 style={{ fontSize: "2.4rem", margin: "var(--space-2) 0" }}>
          Échangeons.
        </h1>

        <p>
          Une question, une idée de projet, une collaboration ou simplement
          envie de discuter d'informatique ? Vous pouvez me contacter
          directement.
        </p>
      </header>

      <hr className="rule" />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "var(--space-5)",
        }}
      >
        <div>
          <p className="eyebrow" style={{ marginBottom: "var(--space-2)" }}>
            Me retrouver
          </p>

          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            <li>
              <a
                href="https://github.com/youssoufhassan"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>

            <li>
              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>

            <li>
              <a href="mailto:ton-email@example.com">Email</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow" style={{ marginBottom: "var(--space-2)" }}>
            Écrire un message
          </p>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                Nom
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="votre@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Votre message..."
                required
              />
            </div>

            <button type="submit">Envoyer le message →</button>
          </form>
        </div>
      </section>
    </main>
  );
}
