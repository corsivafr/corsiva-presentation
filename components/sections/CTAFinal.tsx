"use client";

import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export default function CTAFinal({ eyebrow, title, subtitle, cta, href, secondaryCta, secondaryHref }: Props) {
  return (
    <section
      style={{
        padding: "120px 24px",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 400,
          background: "radial-gradient(ellipse, rgba(37,99,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 680,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <EyebrowLabel>{eyebrow}</EyebrowLabel>
        <h2
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700,
            marginTop: 24,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "var(--text-2)",
            fontSize: 17,
            lineHeight: 1.7,
            marginTop: 20,
            maxWidth: 520,
            margin: "20px auto 0",
          }}
        >
          {subtitle}
        </p>
        <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={href}
            style={{
              padding: "15px 40px",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            {cta}
          </a>
          {secondaryCta && secondaryHref && (
            <a
              href={secondaryHref}
              style={{
                padding: "15px 40px",
                background: "transparent",
                color: "var(--text)",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid var(--border-strong)",
              }}
            >
              {secondaryCta}
            </a>
          )}
        </div>
        <p style={{ color: "var(--text-3)", fontSize: 13, marginTop: 24 }}>
          7j/7 · 9h–18h · Réponse sous 24h
        </p>
      </motion.div>
    </section>
  );
}
