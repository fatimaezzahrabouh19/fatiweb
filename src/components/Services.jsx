import {
Globe,
ShoppingCart,
CalendarDays,
Palette,
Search,
Headset,
} from "lucide-react";

const services = [
{
icon: Globe,
title: "Site vitrine",
description:
"Présentez votre entreprise avec un site professionnel qui inspire confiance et attire de nouveaux clients.",
number: "01",
},
{
icon: ShoppingCart,
title: "Boutique e-commerce",
description:
"Vendez vos produits en ligne grâce à une boutique moderne, sécurisée et facile à utiliser.",
number: "02",
},
{
icon: CalendarDays,
title: "Réservation en ligne",
description:
"Permettez à vos clients de réserver vos services simplement, à tout moment.",
number: "03",
},
{
icon: Palette,
title: "Design personnalisé",
description:
"Profitez d'une identité visuelle élégante, pensée pour refléter votre marque.",
number: "04",
},
{
icon: Search,
title: "Référencement SEO",
description:
"Améliorez la visibilité de votre site sur les moteurs de recherche.",
number: "05",
},
{
icon: Headset,
title: "Maintenance web",
description:
"Gardez votre site à jour, performant et fonctionnel grâce à un accompagnement adapté.",
number: "06",
},
];

function Services() {
return ( <section className="services section" id="services"> <div className="section-container">

```
    <div className="section-heading">
      <span className="section-label">NOS EXPERTISES</span>

      <h2>
        Tout ce qu'il faut pour
        <span> réussir en ligne.</span>
      </h2>

      <p>
        Des solutions web adaptées à vos objectifs pour transformer
        votre présence digitale en véritable atout.
      </p>
    </div>

    <div className="services-grid">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <article
            className="service-card"
            key={service.number}
          >
            <div className="service-card-top">
              <div className="service-icon">
                <Icon size={25} strokeWidth={1.7} />
              </div>

              <span className="service-number">
                {service.number}
              </span>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact" className="service-link">
              En savoir plus <span>↗</span>
            </a>
          </article>
        );
      })}
    </div>

  </div>
</section>


);
}

export default Services;
