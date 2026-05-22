"use client";

import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const profiles = [
  {
    icon: "◈",
    title: "Concierges hôtel",
    desc: "Vos clients demandent la meilleure voiture pour une soirée ou un week-end. Corsiva vous permet de répondre avec une flotte premium sans stock.",
  },
  {
    icon: "◉",
    title: "Wedding planners",
    desc: "Le véhicule de cortège fait partie du mariage. Proposez la Porsche Cayenne ou la G63 Brabus comme prestation intégrée et percevez votre commission.",
  },
  {
    icon: "◊",
    title: "Conseillers privés",
    desc: "Gestion de patrimoine, banque privée, conseil — vos clients fortunés apprécient les services exclusifs. Corsiva en fait partie.",
  },
  {
    icon: "▣",
    title: "Agences événementielles",
    desc: "Séminaires, incentives, lancements de produits — intégrez Corsiva comme prestataire transport premium dans vos packages.",
  },
];

export default function PartnerProfiles() {
  return (
    <section style={{ padding: "120px 24px", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <EyebrowLabel color="var(--gold)">Profils partenaires</EyebrowLabel>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginTop: 20, letterSpacing: "-0.02em" }}>
            Fait pour les professionnels du premium
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="profiles-grid">
          {profiles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ borderColor: "rgba(212,175,108,0.3)" }}
              style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 40, display: "flex", gap: 24, alignItems: "flex-start", transition: "border-color 0.3s" }}
            >
              <span style={{ fontSize: 36, color: "var(--gold)", flexShrink: 0, lineHeight: 1, marginTop: 4 }}>{p.icon}</span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: "var(--text-2)", lineHeight: 1.65, fontSize: 15 }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .profiles-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
