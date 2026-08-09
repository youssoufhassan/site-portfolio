export type ProjectStatus = "shipped" | "in-progress" | "archived";
export type ProjectCategory = "personal" | "university";

export interface CodeFile {
  filename: string;
  language: string;
  content: string;
}

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
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  summary: string;
  context: string;
  specification: string;
  architecture: string;
  techStack: string[];
  skillsAcquired: string[];
  whatILearned: string;
  challenges: string;
  codeFiles: CodeFile[];
  githubUrl: string;
  liveDemoUrl?: string;
  demo?: DemoConfig;
  image?: string; // chemin vers l'icône, ex: "/projects/task-manager-api.png"
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
    context:
      "Décris ici le problème que tu résolvais : pourquoi ce projet, pour qui, quelle contrainte de départ.",
    specification:
      "Décris ici le cahier des charges initial : objectifs fonctionnels, " +
      "contraintes techniques imposées, livrables attendus.",
    architecture:
      "Décris ton architecture en couches (controller / service / repository / dto) et pourquoi ce découpage.",
    techStack: ["Java 21", "Spring Boot", "PostgreSQL", "Docker"],
    skillsAcquired: [
      "architecture en couches",
      "authentification JWT",
      "conteneurisation",
    ],
    whatILearned:
      "Ce que tu as vraiment appris techniquement — sois précis, pas générique.",
    challenges:
      "Un défi technique précis rencontré, et la démarche suivie pour le résoudre.",
    codeFiles: [
      {
        filename: "TaskController.java",
        language: "java",
        content: `@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<TaskDto> getAllTasks() {
        return taskService.findAll();
    }
}`,
      },
    ],
    githubUrl: "https://github.com/youssoufhassan/task-manager-api",
    image: "/projects/task-manager-api.png",
  },
  {
    id: "projet-bdd-bordeaux",
    title: "Projet BDD — Bordeaux",
    category: "university",
    status: "archived",
    year: "2026",
    summary:
      "Projet réalisé dans le cadre du cursus, modélisation et interrogation d'une base de données relationnelle.",
    context:
      "Contexte du cours, objectifs pédagogiques, contraintes de groupe éventuelles.",
    specification:
      "Cahier des charges tel que fourni par l'enseignant : livrables attendus, " +
      "contraintes techniques, critères d'évaluation.",
    architecture:
      "Architecture retenue et pourquoi, dans le cadre des contraintes du cours.",
    techStack: ["SQL", "PostgreSQL"],
    skillsAcquired: [
      "modélisation relationnelle",
      "requêtes complexes",
      "normalisation",
    ],
    whatILearned:
      "Ce que ce projet t'a appris, techniquement et méthodologiquement.",
    challenges: "Un défi rencontré pendant ce projet universitaire.",
    codeFiles: [],
    githubUrl: "https://github.com/youssoufhassan/projet-bdd-bordeaux",
    image: "/projects/projet-bdd-bordeaux.png",
  },
  {
    id: "site-portfolio",
    title: "Portfolio personnel",
    category: "personal",
    status: "in-progress",
    year: "2026",
    summary:
      "Ce site lui-même — architecture React, documentation de projets et notes techniques.",
    context:
      "Construit pour présenter mes projets et mon apprentissage de façon structurée, comme un vrai suivi de progression plutôt qu'une vitrine figée.",
    specification:
      "Objectifs : présenter mes projets (personnels et universitaires) avec leur cahier des charges, documenter mes notes d'apprentissage, permettre de lire le code directement sur le site.",
    architecture:
      "React + TypeScript + Vite, routing via React Router, données structurées en fichiers TypeScript (pas de backend/CMS pour l'instant).",
    techStack: ["React", "TypeScript", "Vite"],
    skillsAcquired: ["routing", "architecture de composants", "design système"],
    whatILearned:
      "Structurer une architecture de composants réutilisables et séparer clairement les données du rendu.",
    challenges: "Itérer sur le design sans complexifier inutilement le code.",
    codeFiles: [],
    githubUrl: "https://github.com/youssoufhassan/site-portfolio",
    image: "/projects/site-portfolio.png",
  },
];
