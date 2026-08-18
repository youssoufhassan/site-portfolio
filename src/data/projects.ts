export type ProjectStatus = "shipped" | "in-progress" | "archived";
export type ProjectCategory = "personal" | "university";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  summary: string;
  techStack: string[];
  githubUrl: string;
  image?: string;
  documentationUrl?: string;
}

export const projects: Project[] = [
  {
    id: "task-manager-api",
    title: "Task Manager API",
    category: "personal",
    status: "shipped",
    year: "2026",
    summary:
      "API REST de gestion de tâches avec authentification JWT, construite en couches selon les conventions Spring.",
    techStack: ["Java 21", "Spring Boot", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/youssoufhassan/task-manager-api",
    image: "/projects/task-manager-api.png",
    documentationUrl: "/docs/task-manager-api.html",
  },

  {
    id: "projet-bdd-bordeaux",
    title: "Projet BDD — Bordeaux",
    category: "university",
    status: "archived",
    year: "2026",
    summary:
      "Projet réalisé dans le cadre du cursus, modélisation et interrogation d'une base de données relationnelle.",
    techStack: ["SQL", "PostgreSQL"],
    githubUrl: "https://github.com/youssoufhassan/projet-bdd-bordeaux",
    image: "/projects/projet-bdd-bordeaux.png",
    documentationUrl: "/docs/projet-bdd-bordeaux.html",
  },

  {
    id: "site-portfolio",
    title: "Portfolio personnel",
    category: "personal",
    status: "in-progress",
    year: "2026",
    summary:
      "Ce site lui-même — architecture React, documentation de projets et notes techniques.",
    techStack: ["React", "TypeScript", "Vite"],
    documentationUrl: "/docs/task-manager-api.html",
    githubUrl: "https://github.com/youssoufhassan/site-portfolio",
    image: "/projects/site-portfolio.png",
  },
];
