import { Link } from "react-router-dom";

const projects = [
  {
    title: "Projet de recherche d'images",
    description:
      "Application permettant d'indexer et de rechercher des images à partir de leurs caractéristiques.",
    stack: "Java · Spring Boot · PostgreSQL",
  },
  {
    title: "Network Traffic Analyzer",
    description:
      "Projet consacré à l'analyse et à la compréhension du trafic réseau.",
    stack: "C · TCP/IP · Wireshark",
  },
  {
    title: "Socket Chat",
    description:
      "Application de communication développée autour des sockets et des échanges réseau.",
    stack: "Python · Sockets · TCP",
  },
];

const notes = [
  {
    title: "Algorithmes de tri",
    description:
      "Comprendre et comparer différents algorithmes de tri à travers leurs implémentations et des expérimentations.",
  },
  {
    title: "Comprendre TCP avec les sockets",
    description:
      "Explorer les mécanismes fondamentaux de la communication entre deux programmes.",
  },
  {
    title: "Processus et mémoire sous Linux",
    description:
      "Première exploration du fonctionnement des processus et de la gestion de la mémoire.",
  },
];

export default function Home() {
  return (
    <main className="home">
      <div className="home-container">
        {/* Introduction */}

        <header className="home-intro">
          <p className="home-kicker">Étudiant en informatique</p>

          <h1>Youssouf Hassan</h1>

          <p className="home-focus">
            Développement logiciel · Systèmes · Réseaux · Cybersécurité
          </p>

          <p className="home-lead">
            Je m'intéresse au développement logiciel et à la manière dont les
            logiciels fonctionnent jusque dans leurs couches systèmes, réseaux
            et sécurité.
          </p>

          <p>
            Je construis des projets pour apprendre, expérimenter et comprendre.
            Je suis actuellement à la recherche d'une opportunité de stage de 4
            mois en développement logiciel.
          </p>
        </header>

        {/* Projets */}

        <section className="home-section">
          <div className="section-title">
            <h2>Projets</h2>

            <Link to="/projects">Tous les projets →</Link>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <p className="project-stack">{project.stack}</p>

                <Link to="/projects" className="project-link">
                  Documentation →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Notes techniques */}

        <section className="home-section">
          <div className="section-title">
            <h2>Notes techniques</h2>

            <Link to="/notes">Toutes les notes →</Link>
          </div>

          <div className="notes-list">
            {notes.map((note) => (
              <article className="note-item" key={note.title}>
                <div>
                  <h3>{note.title}</h3>

                  <p>{note.description}</p>
                </div>

                <Link to="/notes">Lire →</Link>
              </article>
            ))}
          </div>
        </section>

        {/* En ce moment */}

        <section className="home-section now-section">
          <div className="section-title">
            <h2>En ce moment</h2>
          </div>

          <div className="now-grid">
            <article className="now-card">
              <span>Je construis</span>

              <h3>Une plateforme e-commerce</h3>

              <p>
                Travail autour d'une architecture web complète, du frontend au
                backend et à la base de données.
              </p>

              <p className="project-stack">React · Spring Boot · PostgreSQL</p>
            </article>

            <article className="now-card">
              <span>J'étudie</span>

              <h3>Algorithmes, systèmes et réseaux</h3>

              <p>
                J'approfondis progressivement les fondamentaux qui permettent de
                comprendre ce qui se passe derrière les logiciels que je
                développe.
              </p>
            </article>

            <article className="now-card">
              <span>Je documente</span>

              <h3>Mes expérimentations techniques</h3>

              <p>
                Je transforme ce que j'apprends en notes techniques afin de
                vérifier ma compréhension et de pouvoir y revenir plus tard.
              </p>

              <Link to="/notes">Parcourir les notes →</Link>
            </article>
          </div>
        </section>

        {/* Liens */}

        <footer className="home-footer">
          <Link to="/about">À propos</Link>

          <a
            href="https://github.com/youssoufhassan"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <Link to="/contact">Contact</Link>
        </footer>
      </div>
    </main>
  );
}
