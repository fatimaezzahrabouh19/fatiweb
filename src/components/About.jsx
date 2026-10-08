
import { Code2, Lightbulb, Rocket, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Créativité",
    description: "Des designs modernes adaptés à votre identité.",
  },
  {
    icon: Code2,
    title: "Qualité",
    description: "Des sites rapides, clairs et adaptés aux mobiles.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Des solutions pensées pour développer votre activité.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement",
    description: "Un suivi attentif tout au long de votre projet.",
  },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-container">
        <div className="about-layout">
          <div className="about-content">
            <span className="section-label">À PROPOS DE FATIWEB</span>

            <h2>
              Votre vision,
              <span> notre savoir-faire.</span>
            </h2>

            <p className="about-intro">
              FatiWeb accompagne les entrepreneurs, les commerces
              et les entreprises dans la création de leur présence
              en ligne grâce à des sites web modernes et professionnels.
            </p>

            <p className="about-text">
              Notre objectif est de transformer vos idées en une
              expérience web élégante, facile à utiliser et adaptée
              aux besoins de votre activité.
            </p>

            <a className="about-button" href="#contact">
              Parlons de votre projet
            </a>
          </div>

          <div className="about-values">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value" key={value.title}>
                  <div className="about-icon">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;