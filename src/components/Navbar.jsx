
import { useState } from "react";
import { Code2, Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Accueil", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Tarifs", href: "#pricing" },
    { label: "À propos", href: "#about" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-brand"
          onClick={() => setMenuOpen(false)}
        >
          <span className="navbar-logo">
            <Code2 size={24} />
          </span>
          <span className="navbar-name">
            Fati<span>Web</span>
          </span>
        </a>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="navbar-mobile-contact"
            onClick={() => setMenuOpen(false)}
          >
            Parlons de votre projet
            <ArrowUpRight size={17} />
          </a>
        </nav>

        <a href="#contact" className="navbar-cta">
          Me contacter
          <ArrowUpRight size={17} />
        </a>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;