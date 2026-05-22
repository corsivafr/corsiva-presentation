"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const benefits = [
  {
    icon: "€",
    title: "Revenus garantis",
    desc: "Percevez jusqu'à 3 240 € par mois. Paiement mensuel garanti, quelles que soient les locations effectuées.",
    large: true,
  },
  {
    icon: "★",
    title: "Gestion complète",
    desc: "De la réservation à la remise des clés — nous gérons tout.",
  },
  {
    icon: "⬡",
    title: "Assurance premium",
    desc: "Couverture tous risques incluse. Votre véhicule est protégé en toutes circonstances.",
  },
  {
    icon: "◎",
    title: "Tableau de bord temps réel",
    desc: "Suivez vos revenus, réservations et taux d'occupation depuis votre smartphone.",
  },
  {
    icon: "↗",
    title: "Zéro contrainte",
    desc: "Pas de gestion client, pas de logistique. Juste vos revenus, régulièrement.",
    large: true,
  },
];

export default function BentoBenefits() {
  return (
    <section
      style={{
        padding: "120px 24px",
        background: "var(--bg-2)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <EyebrowLabel>Pourquoi Corsiva</EyebrowLabel>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              marginTop: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Tout ce dont vous avez besoin,
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent-2)" }}>sans aucune contrainte</em>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: 16,
          }}
          className="bento-grid"
        >
          {/* Card 1 — large with vehicle photo bg */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            whileHover={{ borderColor: "var(--accent-line)" }}
            style={{
              gridColumn: "1 / 3",
              position: "relative",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: 40,
              transition: "border-color 0.3s",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              minHeight: 200,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
              <Image
                src="/assets/vehicules/cayenne/01.jpg"
                alt="Porsche Cayenne Corsiva"
                fill
                style={{ objectFit: "cover", objectPosition: "center 40%", filter: "saturate(0.3) brightness(0.35)" }}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <span style={{ fontSize: 36, lineHeight: 1, position: "relative", zIndex: 1 }}>{benefits[0].icon}</span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{benefits[0].title}</h3>
              <p style={{ color: "var(--text-2)", lineHeight: 1.6, fontSize: 15 }}>{benefits[0].desc}</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          {[benefits[1], benefits[2], benefits[3]].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              whileHover={{ borderColor: "var(--accent-line)" }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: 32,
                transition: "border-color 0.3s",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <span style={{ fontSize: 28, lineHeight: 1, color: "var(--accent-2)" }}>{b.icon}</span>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ color: "var(--text-2)", lineHeight: 1.6, fontSize: 14 }}>{b.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Last card — large with G-Brabus bg */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ borderColor: "var(--accent-line)" }}
            style={{
              gridColumn: "2 / 4",
              position: "relative",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: 40,
              transition: "border-color 0.3s",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
              <Image
                src="/assets/vehicules/g-brabus/03.jpg"
                alt="Mercedes G-Brabus Corsiva"
                fill
                style={{ objectFit: "cover", objectPosition: "center 50%", filter: "saturate(0.3) brightness(0.35)" }}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            <span style={{ fontSize: 36, lineHeight: 1, color: "var(--accent-2)", position: "relative", zIndex: 1 }}>{benefits[4].icon}</span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{benefits[4].title}</h3>
              <p style={{ color: "var(--text-2)", lineHeight: 1.6, fontSize: 15 }}>{benefits[4].desc}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-grid > div {
            grid-column: 1 / 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
