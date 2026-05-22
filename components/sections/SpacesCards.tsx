"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const spaces = [
  {
    href: "/",
    label: "Espace Propriétaire",
    tag: "Propriétaire",
    title: "Rentabilisez votre véhicule",
    desc: "Confiez votre BMW, Porsche ou Mercedes à Corsiva et générez des revenus réguliers sans contrainte.",
    accent: "var(--accent)",
    icon: "◈",
  },
  {
    href: "/client",
    label: "Espace Client",
    tag: "Client",
    title: "Vivez l'expérience premium",
    desc: "Accédez à une flotte de véhicules d'exception pour vos événements, week-ends et déplacements.",
    accent: "var(--success)",
    icon: "◉",
  },
  {
    href: "/partenaire",
    label: "Espace Partenaire",
    tag: "Partenaire",
    title: "Gagnez des commissions",
    desc: "Recommandez Corsiva à vos clients et touchez jusqu'à 15% de commission sur chaque location confirmée.",
    accent: "var(--gold)",
    icon: "◊",
  },
];

export default function SpacesCards() {
  return (
    <section style={{ padding: "120px 24px", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <EyebrowLabel>Nos espaces</EyebrowLabel>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              marginTop: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Une plateforme, trois univers
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="spaces-grid"
        >
          {spaces.map((space, i) => (
            <motion.div
              key={space.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ borderColor: "var(--accent-line)", y: -4 }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: 40,
                transition: "border-color 0.3s, transform 0.3s",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <span
                style={{
                  fontSize: 40,
                  color: space.accent,
                  lineHeight: 1,
                }}
              >
                {space.icon}
              </span>
              <div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: space.accent,
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  {space.tag}
                </span>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 12,
                    fontFamily: "var(--font-fraunces)",
                  }}
                >
                  {space.title}
                </h3>
                <p style={{ color: "var(--text-2)", lineHeight: 1.6, fontSize: 14 }}>{space.desc}</p>
              </div>
              <Link
                href={space.href}
                style={{
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: space.accent,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {space.label} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .spaces-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
