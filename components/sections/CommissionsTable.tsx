"use client";

import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const rows = [
  {
    vehicule: "Porsche Taycan",
    valeur: "~90 000 €",
    tranche: "Véhicule < 100 000 €",
    commission: "199 €",
    color: "var(--accent-2)",
  },
  {
    vehicule: "BMW M3 Competition",
    valeur: "~85 000 €",
    tranche: "Véhicule < 100 000 €",
    commission: "199 €",
    color: "var(--accent-2)",
  },
  {
    vehicule: "Porsche Cayenne GTS",
    valeur: "~95 000 €",
    tranche: "Véhicule < 100 000 €",
    commission: "199 €",
    color: "var(--accent-2)",
  },
  {
    vehicule: "Mercedes G63 Brabus",
    valeur: "~200 000 €",
    tranche: "Véhicule ≥ 100 000 €",
    commission: "299 €",
    color: "var(--gold)",
  },
];

const tiers = [
  {
    label: "Véhicule < 100 000 €",
    amount: "199 €",
    examples: "Taycan · M3 · Cayenne",
    color: "var(--accent-2)",
    bg: "rgba(77,131,255,0.08)",
    border: "var(--accent-line)",
  },
  {
    label: "Véhicule ≥ 100 000 €",
    amount: "299 €",
    examples: "G63 Brabus",
    color: "var(--gold)",
    bg: "rgba(212,175,108,0.08)",
    border: "rgba(212,175,108,0.3)",
  },
];

export default function CommissionsTable() {
  return (
    <section style={{ padding: "120px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <EyebrowLabel color="var(--gold)">Commissions apport d'affaire</EyebrowLabel>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginTop: 20, letterSpacing: "-0.02em" }}>
            Un modèle simple et transparent
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: 16, marginTop: 16, maxWidth: 520, margin: "16px auto 0" }}>
            Commission versée après la première location effectuée et payée
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          {/* Tier cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 48, maxWidth: 720, margin: "0 auto 48px" }} className="tier-cards">
            {tiers.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: t.bg, border: `1px solid ${t.border}`, borderRadius: 16, padding: "32px 32px", textAlign: "center" }}
              >
                <p style={{ color: t.color, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.label}</p>
                <p style={{ color: t.color, fontFamily: "var(--font-fraunces)", fontSize: 52, fontWeight: 700, lineHeight: 1.1, marginTop: 12 }}>{t.amount}</p>
                <p style={{ color: "var(--text-3)", fontSize: 12, marginTop: 10, letterSpacing: "0.02em" }}>{t.examples}</p>
                <p style={{ color: "var(--text-3)", fontSize: 11, marginTop: 8, fontStyle: "italic" }}>fixe · versée après 1ère location</p>
              </motion.div>
            ))}
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th style={{ textAlign: "left", padding: "14px 20px", color: "var(--text-3)", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}>Véhicule</th>
                  <th style={{ textAlign: "left", padding: "14px 20px", color: "var(--text-3)", fontSize: 12, fontWeight: 600 }}>Valeur estimée</th>
                  <th style={{ textAlign: "left", padding: "14px 20px", color: "var(--text-3)", fontSize: 12, fontWeight: 600 }}>Tranche</th>
                  <th style={{ textAlign: "right", padding: "14px 20px", color: "var(--gold)", fontSize: 12, fontWeight: 700 }}>Commission apport d'affaire</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.vehicule} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                    <td style={{ padding: "16px 20px", fontSize: 14, fontWeight: 600 }}>{r.vehicule}</td>
                    <td style={{ padding: "16px 20px", fontSize: 14, color: "var(--text-2)", fontVariantNumeric: "tabular-nums" }}>{r.valeur}</td>
                    <td style={{ padding: "16px 20px", fontSize: 13, color: "var(--text-3)" }}>{r.tranche}</td>
                    <td style={{ padding: "16px 20px", fontSize: 15, textAlign: "right", color: r.color, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{r.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: "var(--text-3)", fontSize: 12, textAlign: "center", marginTop: 20, fontStyle: "italic" }}>
            La commission est versée une fois la première location effectuée et intégralement payée par le client.
          </p>
        </motion.div>
      </div>
      <style>{`@media (max-width: 640px) { .tier-cards { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
