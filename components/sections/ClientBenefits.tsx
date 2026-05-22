"use client";

import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const benefits = [
  { title: "Flotte premium sélectionnée", desc: "Chaque véhicule est entretenu aux standards constructeurs." },
  { title: "Réservation en 24h", desc: "Confirmez votre location rapidement, sans paperasse excessive." },
  { title: "Livraison sur votre lieu", desc: "Chambéry, Lyon, Annecy, Grenoble — livraison à domicile ou en hôtel." },
  { title: "Assurance tous risques incluse", desc: "Roulez l'esprit tranquille, la couverture est comprise." },
  { title: "Programme fidélité", desc: "Bronze, Or, Platine — des avantages croissants dès votre 2e location." },
  { title: "Service conciergerie", desc: "Décoration florale, chauffeur, coordination événement — sur demande." },
];

export default function ClientBenefits() {
  return (
    <section style={{ padding: "120px 24px", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <EyebrowLabel color="var(--success)">Pourquoi choisir Corsiva</EyebrowLabel>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginTop: 20, letterSpacing: "-0.02em" }}>
            Une expérience sans compromis
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="benefits-grid">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 32,
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(45,212,164,0.12)", border: "1px solid rgba(45,212,164,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                <span style={{ color: "var(--success)", fontSize: 12, fontWeight: 700 }}>✓</span>
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .benefits-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
