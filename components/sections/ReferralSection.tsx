"use client";

import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const cards = [
  {
    step: "01",
    title: "Partagez votre code",
    desc: "Invitez vos proches avec votre code personnel. Simple, rapide.",
  },
  {
    step: "02",
    title: "Ils réservent",
    desc: "À leur première location, votre code est appliqué automatiquement.",
  },
  {
    step: "03",
    title: "Vous gagnez",
    desc: "Recevez 60 € de crédit sur votre compte dès la confirmation.",
  },
];

export default function ReferralSection() {
  return (
    <section style={{ padding: "120px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <EyebrowLabel color="var(--success)">Parrainage</EyebrowLabel>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginTop: 20, letterSpacing: "-0.02em" }}>
            Parrainez, gagnez
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: 16, marginTop: 16, maxWidth: 440, margin: "16px auto 0" }}>
            Chaque filleul qui réserve vous rapporte 60 € de crédit. Cumulable, utilisable à tout moment.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="referral-grid">
          {cards.map((c, i) => (
            <motion.div
              key={c.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ background: "var(--card-2)", border: "1px solid var(--border)", borderRadius: 20, padding: 40 }}
            >
              <p style={{ fontFamily: "var(--font-fraunces)", fontSize: 48, fontWeight: 700, color: "var(--border-strong)", lineHeight: 1, marginBottom: 20 }}>{c.step}</p>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{c.title}</h3>
              <p style={{ color: "var(--text-2)", lineHeight: 1.6, fontSize: 15 }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} style={{ textAlign: "center", marginTop: 48 }}>
          <a href="mailto:contact@corsiva.fr" style={{ display: "inline-flex", padding: "14px 36px", background: "rgba(45,212,164,0.12)", color: "var(--success)", border: "1px solid rgba(45,212,164,0.3)", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
            Obtenir mon code parrainage
          </a>
        </motion.div>
      </div>
      <style>{`@media (max-width: 768px) { .referral-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
