import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/projects", label: "Projets" },
  { to: "/notes", label: "Notes" },
  { to: "/about", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const location = useLocation();

  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className="site-nav__inner">
          <Link to="/" className="site-nav__brand">
            Youssouf Hassan
          </Link>

          <div className="site-nav__links">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname.startsWith(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`site-nav__link ${
                    isActive ? "site-nav__link--active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
