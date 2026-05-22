"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

type FormState = {
  nom: string;
  email: string;
  telephone: string;
  objet: string;
  vehicule: string;
  date: string;
  message: string;
};

const initialState: FormState = {
  nom: "",
  email: "",
  telephone: "",
  objet: "location",
  vehicule: "",
  date: "",
  message: "",
};

const objets = [
  { value: "location", label: "Location courte durée" },
  { value: "mariage", label: "Mariage & événement" },
  { value: "corporate", label: "Déplacement corporate" },
  { value: "proprietaire", label: "Confier mon véhicule" },
  { value: "partenaire", label: "Devenir partenaire" },
  { value: "autre", label: "Autre demande" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const objet = searchParams.get("objet");
    if (objet && objets.some((o) => o.value === objet)) {
      setForm((prev) => ({ ...prev, objet }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Corsiva] ${objets.find(o => o.value === form.objet)?.label} — ${form.nom}`);
    const body = encodeURIComponent(
      `Nom : ${form.nom}\nEmail : ${form.email}\nTéléphone : ${form.telephone}\nObjet : ${objets.find(o => o.value === form.objet)?.label}\nVéhicule souhaité : ${form.vehicule || "Non précisé"}\nDate souhaitée : ${form.date || "Non précisée"}\n\nMessage :\n${form.message}`
    );
    window.location.href = `mailto:contact@corsiva.fr?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    color: "var(--text)",
    fontSize: 14,
    fontFamily: "var(--font-manrope)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--text-3)",
    marginBottom: 8,
  };

  return (
    <>
      {/* HERO */}
      <section style={{ padding: "140px 24px 80px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <EyebrowLabel>Contact</EyebrowLabel>
            <h1
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                marginTop: 20,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                maxWidth: 580,
              }}
            >
              Parlons de votre{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--accent-2)" }}>projet</em>
            </h1>
            <p
              style={{
                color: "var(--text-2)",
                fontSize: 17,
                lineHeight: 1.7,
                marginTop: 20,
                maxWidth: 480,
              }}
            >
              Réponse sous 24h, 7j/7. Pour toute demande de location, partenariat ou pour confier votre véhicule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: "0 24px 120px", background: "var(--bg)" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 64,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {sent ? (
              <div
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "64px 48px",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: 48 }}>✓</p>
                <h2
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 28,
                    fontWeight: 700,
                    marginTop: 20,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Votre client de messagerie est ouvert
                </h2>
                <p style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.7, marginTop: 12 }}>
                  Si votre messagerie ne s'est pas ouverte, envoyez directement un email à{" "}
                  <a href="mailto:contact@corsiva.fr" style={{ color: "var(--accent-2)" }}>
                    contact@corsiva.fr
                  </a>
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: 32,
                    padding: "12px 28px",
                    background: "transparent",
                    color: "var(--text)",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    border: "1px solid var(--border-strong)",
                    cursor: "pointer",
                  }}
                >
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "40px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 24,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    marginBottom: 32,
                  }}
                >
                  Votre demande
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }} className="form-row">
                  <div>
                    <label style={labelStyle}>Nom complet *</label>
                    <input
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@exemple.fr"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }} className="form-row">
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      name="telephone"
                      type="tel"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="06 xx xx xx xx"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Objet de la demande *</label>
                    <select
                      name="objet"
                      value={form.objet}
                      onChange={handleChange}
                      required
                      style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    >
                      {objets.map((o) => (
                        <option key={o.value} value={o.value} style={{ background: "var(--card)" }}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }} className="form-row">
                  <div>
                    <label style={labelStyle}>Véhicule souhaité</label>
                    <input
                      name="vehicule"
                      value={form.vehicule}
                      onChange={handleChange}
                      placeholder="Ex: Porsche 911, G63..."
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Date souhaitée</label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet, vos dates, vos besoins spécifiques..."
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "15px",
                    background: "var(--accent)",
                    color: "#fff",
                    borderRadius: 10,
                    fontSize: 16,
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.01em",
                    transition: "background 0.2s",
                  }}
                >
                  Envoyer la demande →
                </button>
                <p style={{ color: "var(--text-3)", fontSize: 12, textAlign: "center", marginTop: 12 }}>
                  Réponse sous 24h · 7j/7 · Pas de spam
                </p>
              </form>
            )}
          </motion.div>

          {/* INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "36px 32px",
                marginBottom: 20,
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 24 }}>
                Informations de contact
              </h3>
              {[
                {
                  icon: "📞",
                  title: "Téléphone",
                  value: "04 80 81 91 38",
                  href: "tel:0480819138",
                },
                {
                  icon: "✉️",
                  title: "Email",
                  value: "contact@corsiva.fr",
                  href: "mailto:contact@corsiva.fr",
                },
                {
                  icon: "📍",
                  title: "Adresse",
                  value: "Rue Marguerite Sevez, Chambéry",
                  href: undefined,
                },
                {
                  icon: "🕐",
                  title: "Horaires",
                  value: "Lun–Dim, 9h–18h",
                  href: undefined,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    marginBottom: 20,
                  }}
                >
                  <span style={{ fontSize: 20, lineHeight: 1 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "var(--text-3)", textTransform: "uppercase" }}>
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "var(--accent-2)",
                          fontSize: 14,
                          textDecoration: "none",
                          marginTop: 2,
                          display: "block",
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color: "var(--text)", fontSize: 14, marginTop: 2 }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "28px 32px",
                marginBottom: 20,
              }}
            >
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>
                Zone de livraison
              </h3>
              {["Chambéry", "Lyon", "Annecy", "Grenoble", "Aix-les-Bains", "Megève"].map((city) => (
                <div
                  key={city}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)", display: "inline-block", flexShrink: 0 }} />
                  <p style={{ fontSize: 13, color: "var(--text-2)" }}>{city}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-line)",
                borderRadius: 12,
                padding: "20px 24px",
              }}
            >
              <p style={{ fontSize: 13, color: "var(--accent-2)", fontWeight: 600, marginBottom: 6 }}>
                Réponse garantie sous 24h
              </p>
              <p style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6 }}>
                Notre équipe traite toutes les demandes 7 jours sur 7. Pour les urgences, appelez directement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        input:focus, select:focus, textarea:focus {
          border-color: var(--accent) !important;
        }
      `}</style>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactForm />
    </Suspense>
  );
}
