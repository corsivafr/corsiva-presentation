"use client";

import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

interface Step {
  number: string;
  title: string;
  desc: string;
}

interface Props {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export default function StepsSection({
  eyebrow = "Comment ça marche",
  title = "En 3 étapes simples",
  subtitle = "Du premier contact à vos premiers revenus, tout est fluide.",
  steps,
}: Props) {
  return (
    <section style={{ padding: "120px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <EyebrowLabel>{eyebrow}</EyebrowLabel>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              marginTop: 20,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: 16, marginTop: 16, maxWidth: 440, margin: "16px auto 0" }}>
            {subtitle}
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            position: "relative",
          }}
          className="steps-grid"
        >
          {/* Connecting line */}
          <div
            style={{
              position: "absolute",
              top: 48,
              left: "calc(16.7% + 24px)",
              right: "calc(16.7% + 24px)",
              height: 1,
              background: "var(--border)",
              zIndex: 0,
            }}
            className="steps-line"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                padding: "0 24px",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "var(--accent-soft)",
                  border: "1px solid var(--accent-line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontFamily: "var(--font-fraunces)",
                  fontSize: 28,
                  fontWeight: 700,
                  color: "var(--accent-2)",
                }}
              >
                {step.number}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{step.title}</h3>
              <p style={{ color: "var(--text-2)", lineHeight: 1.6, fontSize: 15 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .steps-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
