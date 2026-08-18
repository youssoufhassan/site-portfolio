import type { CodeFile } from "./code";

export interface Note {
  id: string; // utilisÃ© dans l'URL : /notes/:id
  title: string; // ex: "Algorithme de Dijkstra (plus court chemin)"
  summary: string; // 1-2 phrases
  explanation: string; // l'explication pÃ©dagogique, en texte (peut contenir des sauts de ligne)
  complexity?: string; // ex: "O(E log V) avec une file de prioritÃ©"
  codeFiles: CodeFile[];
  sources?: { label: string; url: string }[]; // rÃ©fÃ©rences utilisÃ©es pour apprendre
}

export const notes: Note[] = [
  {
    id: "dijkstra-plus-court-chemin",
    title: "Algorithme de Dijkstra â€” plus court chemin",
    summary:
      "Trouve le plus court chemin entre un sommet source et tous les autres sommets d'un graphe pondÃ©rÃ© Ã  poids positifs.",
    explanation:
      "Explique ici avec tes mots : le principe (relaxation des distances), " +
      "pourquoi une file de prioritÃ© est utilisÃ©e, dans quels cas l'algorithme " +
      "s'applique (poids positifs uniquement), et une intuition visuelle du " +
      "fonctionnement Ã©tape par Ã©tape.",
    complexity: "O(E log V) avec une file de prioritÃ© (tas binaire)",
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
  // Ajoute d'autres notes ici (autres algos, structures de donnÃ©es, concepts).
];
