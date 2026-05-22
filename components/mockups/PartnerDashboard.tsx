"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatY from "@/components/motion/FloatY";

export default function PartnerDashboard() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div style={{ position: "absolute", inset: -60, background: "radial-gradient(ellipse, rgba(37,99,255,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <FloatY>
        <motion.div
          initial={{ rotate: -2 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ width: 300, height: 610, background: "#0d0d0d", borderRadius: 46, border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)", overflow: "hidden", position: "relative" }}
        >
          <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 120, height: 34, background: "#000", borderRadius: 20, zIndex: 10 }} />
          <div style={{ position: "absolute", top: 56, left: 24, right: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--text)", fontSize: 13, fontWeight: 600 }}>9:41</span>
            <div style={{ width: 16, height: 10, border: "1.5px solid rgba(255,255,255,0.5)", borderRadius: 2 }}>
              <div style={{ width: "90%", height: "100%", background: "var(--success)", borderRadius: 1 }} />
            </div>
          </div>
          <div style={{ padding: "88px 20px 24px" }}>
            <div style={{ marginBottom: 20 }}>
              <p style={{ color: "var(--text-3)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>Espace Partenaire</p>
              <p style={{ color: "var(--text)", fontSize: 18, fontWeight: 700, fontFamily: "var(--font-fraunces)" }}>Pierre</p>
            </div>
            {/* Tier */}
            <div style={{ background: "rgba(77,131,255,0.1)", border: "1px solid var(--accent-line)", borderRadius: 16, padding: "12px 14px", marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ color: "var(--accent-2)", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>Privilège</p>
                  <p style={{ color: "var(--text)", fontSize: 22, fontWeight: 700, marginTop: 4, fontVariantNumeric: "tabular-nums" }}>12%</p>
                  <p style={{ color: "var(--text-3)", fontSize: 10 }}>commission</p>
                </div>
                <div>
                  <p style={{ color: "var(--text-3)", fontSize: 10, textAlign: "right" }}>12 leads</p>
                  <p style={{ color: "var(--success)", fontSize: 11, fontWeight: 600, textAlign: "right", marginTop: 2 }}>68% conversion</p>
                </div>
              </div>
            </div>
            {/* Commissions */}
            <div style={{ background: "var(--card-2)", border: "1px solid var(--border)", borderRadius: 12, padding: "12px 14px", marginBottom: 14 }}>
              <p style={{ color: "var(--text-3)", fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 8 }}>Commissions du mois</p>
              <p style={{ color: "var(--text)", fontSize: 24, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>1 240 €</p>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {[
                  { label: "Leads", value: "12" },
                  { label: "Confirmés", value: "8" },
                  { label: "En attente", value: "4" },
                ].map((s, i) => (
                  <div key={i} style={{ flex: 1, background: "rgba(37,99,255,0.06)", borderRadius: 8, padding: "8px 0", textAlign: "center" }}>
                    <p style={{ color: "var(--text)", fontSize: 14, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>{s.value}</p>
                    <p style={{ color: "var(--text-3)", fontSize: 9, marginTop: 2 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Featured vehicle */}
            <div style={{ position: "relative", width: "100%", height: 72, borderRadius: 10, overflow: "hidden", marginBottom: 14 }}>
              <Image
                src="/assets/vehicules/m3/04.jpg"
                alt="BMW M3"
                fill
                style={{ objectFit: "cover", objectPosition: "center 50%" }}
                sizes="260px"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 7, left: 10, right: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>BMW M3 Competition</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 9 }}>AX-301-BM</p>
              </div>
            </div>
            {/* Recent leads */}
            <p style={{ color: "var(--text-3)", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Derniers leads</p>
            {[
              { name: "Famille Dupont", vehicle: "Taycan Turbo S", amount: "320 €" },
              { name: "Mariage Leclerc", vehicle: "G63 Brabus", amount: "480 €" },
            ].map((l, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px", background: "var(--card-2)", borderRadius: 10, border: "1px solid var(--border)", marginBottom: 8 }}>
                <div>
                  <p style={{ color: "var(--text)", fontSize: 12, fontWeight: 600 }}>{l.name}</p>
                  <p style={{ color: "var(--text-3)", fontSize: 10 }}>{l.vehicle}</p>
                </div>
                <p style={{ color: "var(--success)", fontSize: 12, fontWeight: 700 }}>{l.amount}</p>
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 100, height: 4, background: "rgba(255,255,255,0.3)", borderRadius: 2 }} />
        </motion.div>
      </FloatY>
    </div>
  );
}
