
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Palette,
  Smartphone,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            CRÉATION WEB & DESIGN DIGITAL
          </div>

          <h1>
            Votre présence en ligne,
            <br />
            <span>notre passion.</span>
          </h1>

          <p className="hero-description">
            Nous créons des sites web modernes, élégants et adaptés
            à votre activité pour vous aider à attirer des clients
            et développer votre présence en ligne.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-button-primary">
              Démarrer mon projet
              <ArrowRight size={18} />
            </a>

            <a href="#portfolio" className="hero-button-secondary">
              Découvrir nos créations
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="hero-benefits">
            <span>
              <CheckCircle2 size={17} />
              Design moderne
            </span>
            <span>
              <CheckCircle2 size={17} />
              Adapté au mobile
            </span>
            <span>
              <CheckCircle2 size={17} />
              Accompagnement personnalisé
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />

          <div className="hero-window">
            <div className="hero-window-top">
              <div className="hero-window-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-window-address">votre-site.ma</div>
              <Code2 size={17} />
            </div>

            <div className="hero-demo">
              <div className="hero-demo-nav">
                <div className="hero-demo-logo">VOTRE MARQUE</div>
                <div className="hero-demo-links">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="hero-demo-content">
                <span className="hero-demo-label">BIENVENUE CHEZ VOUS</span>
                <h2>
                  Donnez vie
                  <br />
                  à vos <span>idées.</span>
                </h2>
                <div className="hero-demo-line" />
                <div className="hero-demo-line short" />
                <div className="hero-demo-button">DÉCOUVRIR</div>
              </div>

              <div className="hero-demo-footer">
                <div>
                  <Palette size={18} />
                  <span>Design soigné</span>
                </div>
                <div>
                  <Smartphone size={18} />
                  <span>100% responsive</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-floating-card hero-floating-top">
            <span className="hero-floating-icon">
              <Palette size={20} />
            </span>
            <span>
              <strong>Design unique</strong>
              <small>À votre image</small>
            </span>
          </div>

          <div className="hero-floating-card hero-floating-bottom">
            <span className="hero-status-dot" />
            <span>
              <strong>Votre projet,</strong>
              <small>Notre priorité</small>
            </span>
          </div>
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>IMAGINER.</span>
        <span>CRÉER.</span>
        <span>DÉVELOPPER.</span>
      </div>
    </section>
  );
}

export default Hero;