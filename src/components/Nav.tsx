import { Link, useLocation } from "react-router-dom";
import { Home, FolderGit2, BookOpen, User, Mail } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/projects", label: "Projets", icon: FolderGit2 },
  { to: "/notes", label: "Documentation", icon: BookOpen },
  { to: "/about", label: "À propos", icon: User },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Nav() {
  const location = useLocation();

  return (
    <nav
      style={{
        borderBottom: "1px solid var(--rule)",
        background: "var(--paper-raised)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div
        className="container"
        style={{ display: "flex", gap: "var(--space-4)", overflowX: "auto" }}
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                padding: "var(--space-2) 0",
                textDecoration: "none",
                color: isActive ? "var(--accent-ink)" : "var(--ink-faint)",
                borderBottom: isActive
                  ? "2px solid var(--accent)"
                  : "2px solid transparent",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <Icon size={18} strokeWidth={1.75} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
