"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatY from "@/components/motion/FloatY";

export default function OwnerDashboard() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Halo */}
      <div
        style={{
          position: "absolute",
          inset: -60,
          background: "radial-gradient(ellipse, rgba(37,99,255,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <FloatY>
        <motion.div
          initial={{ rotate: -2 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            width: 300,
            height: 610,
            background: "#0d0d0d",
            borderRadius: 46,
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
            overflow: "hidden",
            position: "relative",
            rotate: -2,
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: "50%",
              transform: "translateX(-50%)",
              width: 120,
              height: 34,
              background: "#000",
              borderRadius: 20,
              zIndex: 10,
            }}
          />
          {/* Status bar */}
          <div
            style={{
              position: "absolute",
              top: 56,
              left: 24,
              right: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "var(--text)", fontSize: 13, fontWeight: 600 }}>9:41</span>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ width: 16, height: 10, border: "1.5px solid rgba(255,255,255,0.5)", borderRadius: 2 }}>
                <div style={{ width: "75%", height: "100%", background: "var(--success)", borderRadius: 1 }} />
              </div>
            </div>
          </div>
          {/* Content */}
          <div style={{ padding: "88px 20px 24px" }}>
            {/* Header */}
            <div style={{ marginBottom: 20 }}>
              <p style={{ color: "var(--text-3)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
                Bonjour, Jean
              </p>
              <p style={{ color: "var(--text)", fontSize: 18, fontWeight: 700, fontFamily: "var(--font-fraunces)" }}>
                Tableau de bord
              </p>
            </div>
            {/* Vehicle card */}
            <div
              style={{
                background: "var(--card-2)",
                borderRadius: 16,
                padding: "14px 16px",
                border: "1px solid var(--border)",
                marginBottom: 14,
              }}
            >
              {/* Vehicle photo thumbnail */}
              <div style={{ position: "relative", width: "100%", height: 80, borderRadius: 10, overflow: "hidden", marginBottom: 10 }}>
                <Image
                  src="/assets/vehicules/cayenne/01.jpg"
                  alt="Porsche Cayenne"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 40%" }}
                  sizes="260px"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: 8, left: 10, right: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.02em" }}>Porsche Cayenne</p>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 9, letterSpacing: "0.05em" }}>GE-238-PK</p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div>
                  <p style={{ color: "var(--text-3)", fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>Véhicule</p>
                  <p style={{ color: "var(--text)", fontSize: 13, fontWeight: 600, marginTop: 2 }}>Porsche Cayenne</p>
                  <p style={{ color: "var(--text-3)", fontSize: 11 }}>GE-238-PK</p>
                </div>
                <span
                  style={{
                    background: "rgba(45,212,164,0.12)",
                    color: "var(--success)",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 20,
                    letterSpacing: "0.04em",
                  }}
                >
                  ACTIF
                </span>
              </div>
              {/* Revenue */}
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ flex: 1, background: "rgba(37,99,255,0.08)", borderRadius: 10, padding: "10px 12px" }}>
                  <p style={{ color: "var(--text-3)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.05em" }}>Revenus mai</p>
                  <p style={{ color: "var(--text)", fontSize: 16, fontWeight: 700, marginTop: 3, fontVariantNumeric: "tabular-nums" }}>3 240 €</p>
                  <p style={{ color: "var(--success)", fontSize: 10, marginTop: 2 }}>+18%</p>
                </div>
                <div style={{ flex: 1, background: "rgba(37,99,255,0.08)", borderRadius: 10, padding: "10px 12px" }}>
                  <p style={{ color: "var(--text-3)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.05em" }}>Occupation</p>
                  <p style={{ color: "var(--text)", fontSize: 16, fontWeight: 700, marginTop: 3, fontVariantNumeric: "tabular-nums" }}>76%</p>
                  <div style={{ height: 4, background: "var(--border)", borderRadius: 2, marginTop: 6 }}>
                    <div style={{ width: "76%", height: "100%", background: "var(--accent)", borderRadius: 2 }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Upcoming */}
            <div>
              <p style={{ color: "var(--text-3)", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
                Prochaines locations
              </p>
              {[
                { dates: "17–19 mai", lieu: "Annecy", badge: "Confirmé", color: "var(--success)" },
                { dates: "24–26 mai", lieu: "Courchevel", badge: "Confirmé", color: "var(--accent-2)" },
              ].map((loc, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 12px",
                    background: "var(--card-2)",
                    borderRadius: 10,
                    border: "1px solid var(--border)",
                    marginBottom: 8,
                  }}
                >
                  <div>
                    <p style={{ color: "var(--text)", fontSize: 12, fontWeight: 600 }}>{loc.dates}</p>
                    <p style={{ color: "var(--text-3)", fontSize: 10 }}>{loc.lieu}</p>
                  </div>
                  <span style={{ color: loc.color, fontSize: 9, fontWeight: 700, letterSpacing: "0.04em" }}>
                    {loc.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom bar */}
          <div
            style={{
              position: "absolute",
              bottom: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 100,
              height: 4,
              background: "rgba(255,255,255,0.3)",
              borderRadius: 2,
            }}
          />
        </motion.div>
      </FloatY>
    </div>
  );
}
