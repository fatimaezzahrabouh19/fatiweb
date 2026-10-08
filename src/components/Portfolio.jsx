import { ArrowUpRight } from "lucide-react";

const projects = [
{
category: "RESTAURATION",
title: "Saveurs du Maroc",
description:
"Un site élégant pour présenter un restaurant, son menu et ses options de réservation.",
type: "Site vitrine",
image:
"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
alt: "Intérieur élégant d'un restaurant",
},
{
category: "BEAUTÉ & COSMÉTIQUES",
title: "Maison Beauté",
description:
"Une boutique en ligne raffinée pour présenter des soins et des produits de beauté.",
type: "E-commerce",
image:
"https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85",
alt: "Produits de beauté et de soin",
},
{
category: "IMMOBILIER",
title: "Atlas Immobilier",
description:
"Une vitrine moderne pour présenter des biens immobiliers et faciliter les contacts.",
type: "Site professionnel",
image:
"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
alt: "Maison contemporaine avec jardin",
},
];

function Portfolio() {
return ( <section className="portfolio section" id="portfolio"> <div className="section-container"> <div className="section-heading"> <span className="section-label">NOS PROJETS</span>

```
      <h2>
        Des idées transformées
        <span> en expériences web.</span>
      </h2>

      <p>
        Découvrez quelques concepts de sites web imaginés
        pour répondre aux besoins de différents secteurs.
      </p>
    </div>

    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <article className="portfolio-card" key={project.title}>
          <div className="portfolio-preview">
            <img
              className="portfolio-image"
              src={project.image}
              alt={project.alt}
              loading="lazy"
            />

            <span className="project-number">
              0{index + 1}
            </span>
          </div>

          <div className="portfolio-info">
            <span className="portfolio-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="portfolio-footer">
              <span>{project.type}</span>

              <span className="portfolio-arrow">
                <ArrowUpRight size={20} />
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>

    <p className="portfolio-note">
      Ces visuels illustrent des concepts de démonstration
      proposés par FatiWeb.
    </p>
  </div>
</section>

);
}

export default Portfolio;
