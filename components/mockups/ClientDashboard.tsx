"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatY from "@/components/motion/FloatY";

export default function ClientDashboard() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
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
          }}
        >
          <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 120, height: 34, background: "#000", borderRadius: 20, zIndex: 10 }} />
          <div style={{ position: "absolute", top: 56, left: 24, right: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--text)", fontSize: 13, fontWeight: 600 }}>9:41</span>
            <div style={{ width: 16, height: 10, border: "1.5px solid rgba(255,255,255,0.5)", borderRadius: 2 }}>
              <div style={{ width: "80%", height: "100%", background: "var(--success)", borderRadius: 1 }} />
            </div>
          </div>
          <div style={{ padding: "88px 20px 24px" }}>
            <div style={{ marginBottom: 20 }}>
              <p style={{ color: "var(--text-3)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>Bienvenue, Marie</p>
              <p style={{ color: "var(--text)", fontSize: 18, fontWeight: 700, fontFamily: "var(--font-fraunces)" }}>Mon espace</p>
            </div>
            {/* Level badge */}
            <div style={{ background: "linear-gradient(135deg, rgba(212,175,108,0.15), rgba(212,175,108,0.05))", border: "1px solid rgba(212,175,108,0.3)", borderRadius: 16, padding: "14px 16px", marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ color: "var(--gold)", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 700 }}>Niveau Or</p>
                  <p style={{ color: "var(--text)", fontSize: 14, fontWeight: 600, marginTop: 4 }}>7 locations</p>
                </div>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(212,175,108,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 20 }}>★</span>
                </div>
              </div>
              <div style={{ marginTop: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <p style={{ color: "var(--text-3)", fontSize: 10 }}>Progression Platine</p>
                  <p style={{ color: "var(--gold)", fontSize: 10, fontWeight: 600 }}>7/10</p>
                </div>
                <div style={{ height: 4, background: "rgba(212,175,108,0.2)", borderRadius: 2 }}>
                  <div style={{ width: "70%", height: "100%", background: "var(--gold)", borderRadius: 2 }} />
                </div>
              </div>
            </div>
            {/* Credit */}
            <div style={{ background: "rgba(45,212,164,0.08)", border: "1px solid rgba(45,212,164,0.2)", borderRadius: 12, padding: "12px 14px", marginBottom: 14 }}>
              <p style={{ color: "var(--text-3)", fontSize: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>Crédit parrainage</p>
              <p style={{ color: "var(--success)", fontSize: 22, fontWeight: 700, marginTop: 4, fontVariantNumeric: "tabular-nums" }}>180 €</p>
              <p style={{ color: "var(--text-3)", fontSize: 10, marginTop: 2 }}>Utilisable sur votre prochaine location</p>
            </div>
            {/* Featured vehicle */}
            <div style={{ position: "relative", width: "100%", height: 76, borderRadius: 10, overflow: "hidden", marginBottom: 14 }}>
              <Image
                src="/assets/vehicules/taycan/01.jpg"
                alt="Porsche Taycan"
                fill
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
                sizes="260px"
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 7, left: 10, right: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>Porsche Taycan Turbo S</p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 9 }}>TS-074-PY</p>
              </div>
            </div>
            {/* History */}
            <p style={{ color: "var(--text-3)", fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Historique</p>
            {[
              { vehicle: "Taycan Turbo S", occasion: "Mariage — Annecy" },
              { vehicle: "G63 Brabus", occasion: "Week-end — Courchevel" },
            ].map((h, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px", background: "var(--card-2)", borderRadius: 10, border: "1px solid var(--border)", marginBottom: 8 }}>
                <div>
                  <p style={{ color: "var(--text)", fontSize: 12, fontWeight: 600 }}>{h.vehicle}</p>
                  <p style={{ color: "var(--text-3)", fontSize: 10 }}>{h.occasion}</p>
                </div>
                <span style={{ color: "var(--accent-2)", fontSize: 9, fontWeight: 700 }}>TERMINÉ</span>
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 100, height: 4, background: "rgba(255,255,255,0.3)", borderRadius: 2 }} />
        </motion.div>
      </FloatY>
    </div>
  );
}
