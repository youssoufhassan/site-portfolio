import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { CodeFile } from "../data/code";

/**
 * Affiche un ou plusieurs fichiers de code directement sur la page,
 * avec des onglets si plusieurs fichiers. Le visiteur n'a pas besoin
 * d'aller sur GitHub pour lire le code.
 */
export default function CodeViewer({ files }: { files: CodeFile[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (files.length === 0) return null;

  const activeFile = files[activeIndex];

  return (
    <section style={{ margin: "var(--space-4) 0" }}>
      <p className="eyebrow" style={{ marginBottom: "var(--space-1)" }}>
        Code
      </p>

      {files.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "2px",
            borderBottom: "1px solid var(--rule)",
          }}
        >
          {files.map((file, i) => (
            <button
              key={file.filename}
              onClick={() => setActiveIndex(i)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                padding: "6px 12px",
                background: i === activeIndex ? "var(--paper-raised)" : "transparent",
                border: "1px solid var(--rule)",
                borderBottom: i === activeIndex ? "1px solid var(--paper-raised)" : "1px solid var(--rule)",
                marginBottom: "-1px",
                cursor: "pointer",
                color: i === activeIndex ? "var(--ink)" : "var(--ink-faint)",
              }}
            >
              {file.filename}
            </button>
          ))}
        </div>
      )}

      <div
        style={{
          border: "1px solid var(--rule)",
          borderRadius: files.length > 1 ? "0 0 var(--radius) var(--radius)" : "var(--radius)",
          overflow: "hidden",
        }}
      >
        {files.length === 1 && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--ink-faint)",
              padding: "6px 12px",
              borderBottom: "1px solid var(--rule)",
              background: "var(--paper)",
            }}
          >
            {activeFile.filename}
          </div>
        )}
        <SyntaxHighlighter
          language={activeFile.language}
          style={oneLight}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.82rem",
            background: "var(--paper-raised)",
          }}
        >
          {activeFile.content}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}
