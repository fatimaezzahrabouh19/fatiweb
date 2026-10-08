
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "1 500",
    description: "Pour lancer votre présence en ligne.",
    features: [
      "Site vitrine jusqu'à 3 pages",
      "Design adapté au mobile",
      "Formulaire de contact",
      "Liens vers les réseaux sociaux",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "3 000",
    description: "Pour développer votre activité.",
    features: [
      "Site jusqu'à 6 pages",
      "Design personnalisé",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Bouton WhatsApp",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "6 000",
    description: "Pour un projet plus complet.",
    features: [
      "Site web personnalisé",
      "Fonctionnalités avancées",
      "Optimisation SEO de base",
      "Interface responsive",
      "Accompagnement personnalisé",
    ],
    popular: false,
  },
];

function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">NOS TARIFS</span>
          <h2>
            Un forfait adapté
            <span> à votre projet.</span>
          </h2>
          <p>
            Des solutions claires pour donner vie
            à votre présence en ligne.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.popular ? "popular" : ""
              }`}
              key={plan.name}
            >
              {plan.popular && (
                <span className="popular-label">
                  Le plus choisi
                </span>
              )}

              <h3>{plan.name}</h3>
              <p className="pricing-description">
                {plan.description}
              </p>

              <div className="pricing-price">
                <span>{plan.price}</span>
                <span className="pricing-currency">DH</span>
              </div>

              <p className="pricing-once">
                Prix indicatif par projet
              </p>

              <div className="pricing-features">
                {plan.features.map((feature) => (
                  <div className="pricing-feature" key={feature}>
                    <Check size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                className="pricing-button"
                href={`https://wa.me/212709975718?text=${encodeURIComponent(
                  `Bonjour FatiWeb, je souhaite des informations sur le forfait ${plan.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                Choisir ce forfait
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Chaque projet est différent. Contactez-nous
          pour obtenir un devis adapté à vos besoins.
        </p>
      </div>
    </section>
  );
}

export default Pricing;