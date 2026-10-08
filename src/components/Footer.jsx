
import {
  ArrowUpRight,
  MessageCircle,
  ArrowUp,
  Code2,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <a href="#home" className="footer-brand">
            <span className="footer-logo">
              <Code2 size={24} />
            </span>
            <span>
              Fati<span>Web</span>
            </span>
          </a>

          <p className="footer-description">
            Des sites web modernes pour développer votre activité.
            Transformons ensemble vos idées en expériences digitales.
          </p>

          <a
            href="https://wa.me/212709975718"
            target="_blank"
            rel="noreferrer"
            className="footer-contact-link"
          >
            Parlons de votre projet
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="footer-links">
          <h3>Navigation</h3>
          <a href="#home">Accueil</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Tarifs</a>
          <a href="#about">À propos</a>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>
          <a href="#contact">Demander un devis</a>
          <a
            href="https://wa.me/212709975718"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
            <MessageCircle size={15} />
          </a>
          <span>Agadir, Maroc</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} FatiWeb.
          Tous droits réservés.
        </p>

        <a href="#home" className="footer-top">
          Retour en haut
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;