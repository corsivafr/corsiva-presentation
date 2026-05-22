"use client";

import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

interface Tier {
  name: string;
  color: string;
  bg: string;
  border: string;
  threshold: string;
  perks: string[];
  featured?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Bronze",
    color: "#cd7f32",
    bg: "rgba(205,127,50,0.08)",
    border: "rgba(205,127,50,0.25)",
    threshold: "1–4 locations",
    perks: ["Accès à toute la flotte", "Service client prioritaire", "Code parrainage personnel"],
  },
  {
    name: "Or",
    color: "var(--gold)",
    bg: "rgba(212,175,108,0.1)",
    border: "rgba(212,175,108,0.3)",
    threshold: "5–9 locations",
    perks: ["Tous les avantages Bronze", "Réduction 5% sur chaque location", "Livraison offerte à Chambéry", "Crédit parrainage augmenté"],
    featured: true,
  },
  {
    name: "Platine",
    color: "#e8e8e8",
    bg: "rgba(232,232,232,0.06)",
    border: "rgba(232,232,232,0.2)",
    threshold: "10 locations et +",
    perks: ["Tous les avantages Or", "Réduction 10%", "Livraison offerte partout", "Accès prioritaire nouveaux véhicules", "Conciergerie dédiée"],
  },
];

export default function TiersGrid({ eyebrowColor = "var(--success)" }: { eyebrowColor?: string }) {
  return (
    <section style={{ padding: "120px 24px", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <EyebrowLabel color={eyebrowColor}>Programme fidélité</EyebrowLabel>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginTop: 20, letterSpacing: "-0.02em" }}>
            Plus vous louez, plus vous gagnez
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="tiers-grid">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                background: t.bg,
                border: `1px solid ${t.featured ? t.border : "var(--border)"}`,
                borderRadius: 20,
                padding: 40,
                position: "relative",
                ...(t.featured ? { transform: "scale(1.03)" } : {}),
              }}
            >
              {t.featured && (
                <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "#0a0a0a", fontSize: 10, fontWeight: 800, letterSpacing: "0.06em", padding: "4px 14px", borderRadius: 20, textTransform: "uppercase" }}>
                  Le plus populaire
                </span>
              )}
              <p style={{ color: t.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{t.threshold}</p>
              <h3 style={{ color: t.color, fontFamily: "var(--font-fraunces)", fontSize: 32, fontWeight: 700, marginBottom: 24 }}>{t.name}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {t.perks.map((p) => (
                  <div key={p} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: t.color, fontSize: 12, marginTop: 2, flexShrink: 0 }}>✓</span>
                    <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.5 }}>{p}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .tiers-grid { grid-template-columns: 1fr !important; } .tiers-grid > div { transform: none !important; } }`}</style>
    </section>
  );
}
