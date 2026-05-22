"use client";

import StatCounter from "@/components/ui/StatCounter";
import { motion } from "framer-motion";

const stats = [
  { value: 300, suffix: "+", label: "véhicules gérés" },
  { value: 98, suffix: "%", label: "satisfaction clients" },
  { value: 3240, suffix: " €", label: "revenus moyens / mois" },
  { value: 76, suffix: "%", label: "taux d'occupation" },
];

export default function StatsBanner() {
  return (
    <section
      style={{
        background: "var(--accent-soft)",
        borderTop: "1px solid var(--accent-line)",
        borderBottom: "1px solid var(--accent-line)",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
        className="stats-grid"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ textAlign: "center" }}
          >
            <p
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800,
                color: "var(--text)",
                lineHeight: 1,
                fontFamily: "var(--font-fraunces)",
              }}
            >
              <StatCounter value={s.value} suffix={s.suffix} />
            </p>
            <p style={{ color: "var(--text-2)", fontSize: 14, marginTop: 10, letterSpacing: "0.02em" }}>
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
