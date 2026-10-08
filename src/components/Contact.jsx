
import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Site vitrine",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const text = `
Bonjour FatiWeb !
Nom : ${form.name}
Email : ${form.email}
Service souhaité : ${form.service}
Projet : ${form.message}
    `.trim();

    window.open(
      `https://wa.me/212709975718?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="contact section" id="contact">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">CONTACT</span>
          <h2>
            Parlons de votre
            <span> prochain projet.</span>
          </h2>
          <p>
            Décrivez-nous votre idée. Nous vous aiderons à
            trouver la solution adaptée à votre activité.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <h3>Créons quelque chose ensemble.</h3>
            <p>
              Une question ou un projet en tête ?
              Contactez FatiWeb directement.
            </p>

            <a href="https://wa.me/212709975718"
               target="_blank" rel="noreferrer"
               className="contact-item">
              <span className="contact-icon">
                <MessageCircle size={21} />
              </span>
              <span>
                <strong>WhatsApp</strong>
                <small>+212 709 975 718</small>
              </span>
            </a>

            <div className="contact-item">
              <span className="contact-icon">
                <Phone size={21} />
              </span>
              <span>
                <strong>Téléphone</strong>
                <small>+212 709 975 718</small>
              </span>
            </div>

            <div className="contact-item">
              <span className="contact-icon">
                <MapPin size={21} />
              </span>
              <span>
                <strong>Localisation</strong>
                <small>Agadir, Maroc</small>
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Votre nom</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Entrez votre nom"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Votre email</label>
              <input
                id="contact-email"
                type="email"
                placeholder="exemple@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-service">
                Service souhaité
              </label>
              <select
                id="contact-service"
                value={form.service}
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value })
                }
              >
                <option>Site vitrine</option>
                <option>Site e-commerce</option>
                <option>Site de réservation</option>
                <option>Refonte de site web</option>
                <option>Autre projet</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">
                Parlez-nous de votre projet
              </label>
              <textarea
                id="contact-message"
                rows="4"
                placeholder="Décrivez votre besoin..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Envoyer via WhatsApp
              <Send size={18} />
            </button>

            <p className="contact-form-note">
              Votre message sera préparé dans WhatsApp.
              Vous pourrez le vérifier avant de l'envoyer.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;