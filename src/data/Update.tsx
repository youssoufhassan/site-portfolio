export interface Update {
  date: string; // ex: "09 Août 2026"
  text: string;
  link?: string;
}

// Ajoute une ligne à chaque avancée réelle : projet terminé, notion apprise,
// article lu, outil découvert. C'est ce qui rend le site vivant.
export const updates: Update[] = [
  {
    date: "09 Août 2026",
    text: "Mise en place de l'architecture complète du portfolio (React, TypeScript, routing).",
  },
  // Ajoute tes propres entrées ici, les plus récentes en premier.
];
