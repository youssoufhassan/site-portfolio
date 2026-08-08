import type { DemoConfig } from "../data/projects";

export default function LiveDemo({ demo }: { demo: DemoConfig }) {
  if (demo.type === "iframe") {
    return (
      <section style={{ margin: "var(--space-4) 0" }}>
        <p className="eyebrow">Démo</p>
        <iframe
          src={demo.url}
          title="Démo du projet"
          width="100%"
          height="480"
          style={{
            border: "1px solid var(--rule)",
            borderRadius: "var(--radius)",
            marginTop: "var(--space-1)",
          }}
        />
      </section>
    );
  }

  return (
    <section style={{ margin: "var(--space-4) 0" }}>
      <p className="eyebrow">Tester l'API</p>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
        {demo.url}
      </p>
      <ul>
        {demo.apiEndpoints?.map((e) => (
          <li
            key={e.path}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              padding: "var(--space-1) 0",
              borderTop: "1px solid var(--rule)",
            }}
          >
            <strong style={{ color: "var(--accent-ink)" }}>{e.method}</strong>{" "}
            {e.path}
            <div style={{ color: "var(--ink-faint)", fontFamily: "var(--font-body)" }}>
              {e.description}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
