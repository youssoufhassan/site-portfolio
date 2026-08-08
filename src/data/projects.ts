export type ProjectStatus = "shipped" | "in-progress" | "archived";

export interface DemoConfig {
  type: "iframe" | "api-tester";
  url: string;
  apiEndpoints?: {
    method: "GET" | "POST" | "PUT" | "DELETE";
    path: string;
    description: string;
  }[];
}

export interface Project {
  id: string; // utilisé dans l'URL : /projects/:id
  title: string;
  status: ProjectStatus;
  year: string; // ex: "2026"
  summary: string; // 1-2 phrases, le "résumé" façon abstract
  context: string; // le problème résolu, le contexte
  architecture: string; // choix techniques justifiés
  techStack: string[];
  whatILearned: string;
  challenges: string;
  githubUrl: string;
  liveDemoUrl?: string;
  demo?: DemoConfig;
}

export const projects: Project[] = [
  {
    id: "task-manager-api",
    title: "Task Manager API",
    status: "shipped",
    year: "2026",
    summary:
      "API REST de gestion de tâches avec authentification JWT, construite en couches selon les conventions Spring.",
    context:
      "Décris ici le problème que tu résolvais : pourquoi ce projet, pour qui, quelle contrainte de départ.",
    architecture:
      "Décris ton architecture en couches (controller / service / repository / dto) et pourquoi ce découpage.",
    techStack: ["Java 21", "Spring Boot", "PostgreSQL", "Docker", "Maven"],
    whatILearned:
      "Ce que tu as vraiment appris techniquement — sois précis, pas générique.",
    challenges:
      "Un défi technique précis rencontré, et la démarche suivie pour le résoudre.",
    githubUrl: "https://github.com/youssoufhassan/task-manager-api",
  },
  // Ajoute tes autres projets ici en suivant la même structure.
  // Un objet = un projet = une "publication" dans ta liste.
];
