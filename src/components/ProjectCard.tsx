import type { Project } from "../data/projects";
import StatusStamp from "./StatusStamp";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li
      style={{
        padding: "var(--space-3) 0",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <a
        href={`/docs/${project.id}.html`}
        style={{
          display: "block",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "var(--space-2)",
            flexWrap: "wrap",
          }}
        >
          <h3 style={{ fontSize: "1.25rem", color: "var(--ink)" }}>
            {project.title}
          </h3>

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--ink-faint)",
            }}
          >
            {project.year}
          </span>
        </div>

        <p
          style={{
            margin: "var(--space-1) 0",
            color: "var(--ink-soft)",
          }}
        >
          {project.summary}
        </p>

        <div
          style={{
            display: "flex",
            gap: "var(--space-1)",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "var(--space-1)",
          }}
        >
          <StatusStamp status={project.status} />

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
      </a>
    </li>
  );
}
