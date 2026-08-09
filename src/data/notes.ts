import type { CodeFile } from "./projects";

export interface Note {
  id: string; // utilisé dans l'URL : /notes/:id
  title: string; // ex: "Algorithme de Dijkstra (plus court chemin)"
  summary: string; // 1-2 phrases
  explanation: string; // l'explication pédagogique, en texte (peut contenir des sauts de ligne)
  complexity?: string; // ex: "O(E log V) avec une file de priorité"
  codeFiles: CodeFile[];
  sources?: { label: string; url: string }[]; // références utilisées pour apprendre
}

export const notes: Note[] = [
  {
    id: "dijkstra-plus-court-chemin",
    title: "Algorithme de Dijkstra — plus court chemin",
    summary:
      "Trouve le plus court chemin entre un sommet source et tous les autres sommets d'un graphe pondéré à poids positifs.",
    explanation:
      "Explique ici avec tes mots : le principe (relaxation des distances), " +
      "pourquoi une file de priorité est utilisée, dans quels cas l'algorithme " +
      "s'applique (poids positifs uniquement), et une intuition visuelle du " +
      "fonctionnement étape par étape.",
    complexity: "O(E log V) avec une file de priorité (tas binaire)",
    codeFiles: [
      {
        filename: "dijkstra.py",
        language: "python",
        content: `import heapq

def dijkstra(graph, source):
    distances = {node: float("inf") for node in graph}
    distances[source] = 0
    queue = [(0, source)]

    while queue:
        current_dist, current = heapq.heappop(queue)

        if current_dist > distances[current]:
            continue

        for neighbor, weight in graph[current].items():
            distance = current_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(queue, (distance, neighbor))

    return distances`,
      },
    ],
    sources: [
      { label: "CLRS - Introduction to Algorithms", url: "#" },
    ],
  },
  // Ajoute d'autres notes ici (autres algos, structures de données, concepts).
];
