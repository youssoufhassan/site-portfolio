export default function Contact() {
  return (
    <main
      className="container"
      style={{ paddingTop: "var(--space-5)", paddingBottom: "var(--space-6)" }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "var(--space-2)" }}>
        Contact
      </h1>
      <p style={{ maxWidth: "56ch" }}>
        [Remplace par un court paragraphe : disponibilité pour un
        stage/alternance, meilleure façon de te contacter.]
      </p>

      <ul
        style={{
          marginTop: "var(--space-3)",
          display: "flex",
          flexDirection: "column",
          gap: "0.4rem",
        }}
      >
        <li>
          Email :{" "}
          <a href="mailto:ton.email@exemple.com">ton.email@exemple.com</a>
        </li>
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
            LinkedIn [lien à ajouter]
          </a>
        </li>
      </ul>
    </main>
  );
}
